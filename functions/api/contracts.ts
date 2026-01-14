// worker.ts
// Cloudflare Worker replacement for contracts.php
// Matches exact logic: govspend1.cc.cc table, 'S' code checks, and specific date math.

interface Env {
  BIGQUERY_CREDENTIALS: string; // JSON service account key
}

const RATE_LIMIT = 150; // requests per day per IP
const rateLimitCache = new Map<string, { count: number; date: string }>();

export async function onRequestGet(context: { request: Request; env: Env }) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // Validate environment
  if (!env.BIGQUERY_CREDENTIALS) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return new Response(JSON.stringify({
      success: false,
      error: 'BigQuery credentials not configured. Please set BIGQUERY_CREDENTIALS environment variable.',
      rateLimit: { limit: RATE_LIMIT, remaining: 0, reset: new Date().toISOString() }
    }), { 
      status: 500,
      headers 
    });
  }
  
  // Get client IP
  const clientIP = request.headers.get('CF-Connecting-IP') || 
                   request.headers.get('X-Forwarded-For')?.split(',')[0] || 
                   'unknown';
  const todayDate = new Date();
  const today = todayDate.toISOString().split('T')[0]; // YYYY-MM-DD
  const rateLimitKey = `${clientIP}:${today}`;
  
  // Helper to get end of day timestamp
  const getEndOfDayISO = () => {
    const eod = new Date(todayDate);
    eod.setHours(23, 59, 59, 999);
    return eod.toISOString();
  };
  
  // Check rate limit
  const currentLimit = rateLimitCache.get(rateLimitKey);
  const requestCount = currentLimit?.date === today ? currentLimit.count : 0;
  
  if (requestCount >= RATE_LIMIT) {
    const resetTime = getEndOfDayISO();
    return new Response(JSON.stringify({
      success: false,
      error: `Rate limit exceeded. Maximum ${RATE_LIMIT} requests per day. Try again tomorrow.`,
      remaining: 0,
      resetTime: resetTime
    }), { 
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'X-RateLimit-Limit': String(RATE_LIMIT),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': resetTime,
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
  
  // Update rate limit counter
  rateLimitCache.set(rateLimitKey, { count: requestCount + 1, date: today });
  
  // Clean up old entries (basic memory management)
  if (rateLimitCache.size > 10000) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    for (const [key, value] of rateLimitCache.entries()) {
      if (value.date < yesterday) {
        rateLimitCache.delete(key);
      }
    }
  }
  
  // Get query parameters
  const naics = url.searchParams.get('naics') || '';
  const state = url.searchParams.get('state') || '';
  const setAside = url.searchParams.get('setAside') || '';
  const keyword = url.searchParams.get('keyword') || '';
  const yearRange = parseInt(url.searchParams.get('yearRange') || '1');

  // CORS headers
  const resetTime = getEndOfDayISO();
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'X-RateLimit-Limit': String(RATE_LIMIT),
    'X-RateLimit-Remaining': String(RATE_LIMIT - requestCount - 1),
    'X-RateLimit-Reset': resetTime,
  };

  try {
    // Get access token from service account
    const accessToken = await getAccessToken(env.BIGQUERY_CREDENTIALS);
    
    // Calculate date range
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    
    // Fiscal year runs from October to September
    // If we're before October, the current fiscal year started last October
    const fiscalYearStartYear = currentMonth < 10 ? currentYear - 1 : currentYear;
    const startDate = yearRange === 5 
      ? `${fiscalYearStartYear - 4}-10-01`
      : `${fiscalYearStartYear}-10-01`;

    // Build and execute query
    const projectId = 'govspend1';
    const query = buildBigQuerySQL(naics, state, setAside, keyword, startDate);

    const bigQueryUrl = `https://bigquery.googleapis.com/bigquery/v2/projects/${projectId}/queries`;
    
    const bigQueryResponse = await fetch(bigQueryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: query,
        useLegacySql: false,
        // Add timeout and max bytes to prevent runaway costs
        timeoutMs: 30000, // 30 second timeout
        maximumBytesBilled: '50000000000', // 50 GB max per query
      }),
    });

    if (!bigQueryResponse.ok) {
      const errorText = await bigQueryResponse.text();
      console.error('BigQuery error response:', errorText);
      throw new Error(`BigQuery error: ${bigQueryResponse.status} - ${errorText}`);
    }

    const bigQueryData = await bigQueryResponse.json();
    
    // Check for query errors
    if (bigQueryData.errors) {
      console.error('BigQuery query errors:', bigQueryData.errors);
      throw new Error(`BigQuery query failed: ${bigQueryData.errors.map((e: any) => e.message).join(', ')}`);
    }
    
    // Transform BigQuery response to match your frontend format
    const formattedData = transformBigQueryData(bigQueryData);

    return new Response(JSON.stringify({
      success: true,
      data: formattedData,
      rateLimit: {
        limit: RATE_LIMIT,
        remaining: RATE_LIMIT - requestCount - 1,
        reset: resetTime
      }
    }), { headers });

  } catch (error: any) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to fetch data',
      rateLimit: {
        limit: RATE_LIMIT,
        remaining: RATE_LIMIT - requestCount - 1,
        reset: resetTime
      }
    }), { 
      status: 500,
      headers 
    });
  }
}

// Handle OPTIONS request for CORS
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Get OAuth2 access token from service account
async function getAccessToken(credentialsJson: string): Promise<string> {
  try {
    const credentials = JSON.parse(credentialsJson);
    
    // Validate required fields
    if (!credentials.private_key || !credentials.client_email) {
      throw new Error('Missing required fields in credentials: private_key and client_email are required');
    }
    
    // Create JWT
    const now = Math.floor(Date.now() / 1000);
    const header = {
      alg: 'RS256',
      typ: 'JWT',
      kid: credentials.private_key_id,
    };
    
    const payload = {
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/bigquery.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    const jwt = await signJWT(header, payload, credentials.private_key);
    
    // Exchange JWT for access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Token exchange error:', errorText);
      throw new Error(`Failed to get access token: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      throw new Error('No access token in response from Google OAuth');
    }
    
    return tokenData.access_token;
  } catch (error: any) {
    console.error('Access token error:', error.message);
    throw error;
  }
}

// Sign JWT using Web Crypto API
async function signJWT(header: any, payload: any, privateKey: string): Promise<string> {
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  try {
    // Import private key
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';
    
    if (!privateKey.includes(pemHeader)) {
      throw new Error('Invalid private key format - missing PEM header');
    }
    
    const pemContents = privateKey
      .substring(
        privateKey.indexOf(pemHeader) + pemHeader.length,
        privateKey.indexOf(pemFooter)
      )
      .replace(/\s/g, '');
    
    const binaryKey = base64Decode(pemContents);
    
    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8',
      binaryKey,
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256',
      },
      false,
      ['sign']
    );

    // Sign the token
    const encoder = new TextEncoder();
    const data = encoder.encode(unsignedToken);
    const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, data);

    const encodedSignature = base64UrlEncode(signature);
    return `${unsignedToken}.${encodedSignature}`;
  } catch (error: any) {
    console.error('JWT signing error:', error.message);
    throw new Error(`Failed to sign JWT: ${error.message}`);
  }
}

function base64UrlEncode(data: string | ArrayBuffer): string {
  const bytes = typeof data === 'string' 
    ? new TextEncoder().encode(data)
    : new Uint8Array(data);
  
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function base64Decode(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function buildBigQuerySQL(
  naics: string,
  state: string,
  setAside: string,
  keyword: string,
  startDate: string
): string {
  // Sanitize inputs to prevent SQL injection
  const sanitizedNaics = naics.replace(/[^\d]/g, '');
  const sanitizedState = state.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 2);
  const sanitizedKeyword = keyword.replace(/'/g, "''").slice(0, 100);
  
  return `
    WITH FilteredData AS (
      SELECT *
      FROM \`govspend1.cc.cc\`
      WHERE 1=1
        AND ('${sanitizedState}' = '' OR UPPER(primary_place_of_performance_state_code) = '${sanitizedState}')
        AND ('${sanitizedKeyword}' = '' OR LOWER(prime_award_base_transaction_description) LIKE CONCAT('%', LOWER('${sanitizedKeyword}'), '%'))
        AND (${sanitizedNaics === '' ? '0' : sanitizedNaics} = 0 OR naics_code = ${sanitizedNaics === '' ? '0' : sanitizedNaics})
        AND ('${setAside}' = '' OR 
          ('${setAside}' = '8a' AND c8a_program_participant = TRUE) OR
          ('${setAside}' = 'hubzone' AND historically_underutilized_business_zone_hubzone_firm = TRUE) OR
          ('${setAside}' = 'wosb' AND woman_owned_business = TRUE) OR
          ('${setAside}' = 'sdvosb' AND veteran_owned_business = TRUE))
        AND initial_report_date >= '${startDate}'
        AND EXTRACT(YEAR FROM initial_report_date) != 2020
    ),
    MonthlySpendingByBusinessSize AS (
      SELECT 
        FORMAT_DATE('%b %Y', COALESCE(initial_report_date, CURRENT_DATE())) as month,
        SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'S'
          THEN federal_action_obligation ELSE 0 END) as small_business_spending,
        SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'O'
          THEN federal_action_obligation ELSE 0 END) as other_than_small_spending,
        SUM(federal_action_obligation) as total_spending,
        MIN(COALESCE(initial_report_date, CURRENT_DATE())) as sort_date
      FROM FilteredData
      GROUP BY FORMAT_DATE('%b %Y', COALESCE(initial_report_date, CURRENT_DATE()))
      ORDER BY sort_date ASC
    ),
    SetAsideData AS (
      SELECT
        COUNT(DISTINCT CASE WHEN c8a_program_participant = TRUE 
          THEN contract_transaction_unique_key END) as eight_a_count,
        SUM(CASE WHEN c8a_program_participant = TRUE 
          THEN federal_action_obligation ELSE 0 END) as eight_a_value,
        COUNT(DISTINCT CASE WHEN historically_underutilized_business_zone_hubzone_firm = TRUE 
          THEN contract_transaction_unique_key END) as hubzone_count,
        SUM(CASE WHEN historically_underutilized_business_zone_hubzone_firm = TRUE 
          THEN federal_action_obligation ELSE 0 END) as hubzone_value,
        COUNT(DISTINCT CASE WHEN woman_owned_business = TRUE 
          THEN contract_transaction_unique_key END) as wosb_count,
        SUM(CASE WHEN woman_owned_business = TRUE 
          THEN federal_action_obligation ELSE 0 END) as wosb_value,
        COUNT(DISTINCT CASE WHEN veteran_owned_business = TRUE 
          THEN contract_transaction_unique_key END) as sdvosb_count,
        SUM(CASE WHEN veteran_owned_business = TRUE 
          THEN federal_action_obligation ELSE 0 END) as sdvosb_value
      FROM FilteredData
    ),
    TopAgencies AS (
      SELECT 
        awarding_sub_agency_name as name,
        COUNT(DISTINCT contract_transaction_unique_key) as award_count,
        SUM(federal_action_obligation) as value
      FROM FilteredData
      WHERE awarding_sub_agency_name IS NOT NULL
      GROUP BY awarding_sub_agency_name
      HAVING value > 0
      ORDER BY value DESC
      LIMIT 10
    ),
    TopVendors AS (
      SELECT 
        recipient_name as name,
        COUNT(DISTINCT contract_transaction_unique_key) as award_count,
        SUM(federal_action_obligation) as value,
        STRING_AGG(DISTINCT contracting_officers_determination_of_business_size_code) as business_size
      FROM FilteredData
      WHERE recipient_name IS NOT NULL
      GROUP BY recipient_name
      HAVING value > 0
      ORDER BY value DESC
      LIMIT 10
    )
    SELECT 
      SUM(federal_action_obligation) as total_contract_value,
      SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'S'
        THEN federal_action_obligation ELSE 0 END) as small_business_value,
      COUNT(DISTINCT CASE WHEN contracting_officers_determination_of_business_size_code = 'S'
        THEN recipient_name END) as small_business_count,
      (SELECT AS STRUCT * FROM SetAsideData) as business_types,
      ARRAY(SELECT AS STRUCT * FROM MonthlySpendingByBusinessSize) as monthly_spending_by_size,
      ARRAY(SELECT AS STRUCT * FROM TopAgencies) as top_agencies,
      ARRAY(SELECT AS STRUCT * FROM TopVendors) as top_vendors
    FROM FilteredData
  `;
}

function transformBigQueryData(bigQueryData: any) {
  const row = bigQueryData.rows?.[0];
  
  if (!row) {
    return {
      metrics: {
        total_contract_value: 0,
        small_business_count: 0,
        small_business_value: 0,
        small_business_percentage: 0,
      },
      monthlySpendingBySize: [],
      business_types: {},
      topAgencies: [],
      topVendors: [],
    };
  }
  
  // Handle both nested f/v structure and direct values
  const getFieldValue = (fieldIndex: number) => {
    const field = row.f?.[fieldIndex];
    return field?.v !== undefined ? field.v : field;
  };
  
  const totalValue = parseFloat(getFieldValue(0) || 0);
  const smallBusinessValue = parseFloat(getFieldValue(1) || 0);
  const smallBusinessCount = parseInt(getFieldValue(2) || 0);
  
  // Timeline data (field 4 - renamed to monthlySpendingBySize for API)
  const timelineRaw = getFieldValue(4);
  const monthlySpendingBySize = Array.isArray(timelineRaw) 
    ? transformTimelineData(timelineRaw)
    : [];
  
  // Set-aside data (field 3 - renamed to business_types for API)
  const setAsideRaw = getFieldValue(3);
  const business_types = transformSetAsideData(setAsideRaw || {});
  
  // Top agencies (field 5)
  const agenciesRaw = getFieldValue(5);
  const topAgencies = Array.isArray(agenciesRaw) 
    ? transformTopList(agenciesRaw)
    : [];
  
  // Top vendors (field 6)
  const vendorsRaw = getFieldValue(6);
  const topVendors = Array.isArray(vendorsRaw) 
    ? transformTopList(vendorsRaw, true)
    : [];
  
  return {
    metrics: {
      total_contract_value: totalValue,
      small_business_count: smallBusinessCount,
      small_business_value: smallBusinessValue,
      small_business_percentage: totalValue > 0 ? (smallBusinessValue / totalValue) * 100 : 0,
    },
    monthlySpendingBySize,
    business_types,
    topAgencies,
    topVendors,
  };
}

function transformTimelineData(data: any[]): any[] {
  return (data || []).map((item: any) => {
    // Handle both nested f/v structure and direct object access
    const getField = (index: number) => {
      const field = item.f?.[index];
      return field?.v !== undefined ? field.v : field;
    };
    
    const monthValue = getField(0);
    return {
      month: monthValue?.toString() || '',
      small_business_spending: parseFloat(getField(1) || 0),
      other_than_small_spending: parseFloat(getField(2) || 0),
      total_spending: parseFloat(getField(3) || 0),
    };
  }).filter(item => item.month && item.month.length > 0);
}

function transformSetAsideData(data: any): any {
  // Handle nested f/v structure from BigQuery
  const getValue = (key: string) => {
    if (data[key] !== undefined) return data[key];
    if (data.f && Array.isArray(data.f)) {
      const field = data.f.find((f: any) => f?.v?.[key]);
      if (field?.v?.[key]) return field.v[key];
    }
    return 0;
  };
  
  return {
    eight_a: { value: parseFloat(getValue('eight_a_value') || 0) },
    hubzone: { value: parseFloat(getValue('hubzone_value') || 0) },
    wosb: { value: parseFloat(getValue('wosb_value') || 0) },
    sdvosb: { value: parseFloat(getValue('sdvosb_value') || 0) },
  };
}

function transformTopList(data: any[], isContractors = false): any[] {
  return (data || []).map((item: any) => {
    // Handle both nested f/v structure and direct object access
    const getField = (index: number) => {
      const field = item.f?.[index];
      return field?.v !== undefined ? field.v : field;
    };
    
    return {
      name: getField(0)?.toString() || '',
      award_count: parseInt(getField(1) || 0),
      value: parseFloat(getField(2) || 0),
      ...(isContractors && {
        business_size: (getField(3)?.toString() || '')
      })
    };
  }).filter(item => item.name && item.name.length > 0);
}
