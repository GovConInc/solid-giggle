// BigQuery REST API - no npm packages needed

async function getAccessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/bigquery.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const base64url = (obj) => btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const unsignedToken = `${base64url(header)}.${base64url(payload)}`;

  const pemContents = credentials.private_key
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  
  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
  
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(unsignedToken)
  );

  const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const jwt = `${unsignedToken}.${signatureBase64}`;

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenResponse.json();
  if (!tokenData.access_token) {
    throw new Error(`Failed to get access token: ${JSON.stringify(tokenData)}`);
  }
  return tokenData.access_token;
}

async function runQuery(projectId, query, accessToken) {
  const response = await fetch(
    `https://bigquery.googleapis.com/bigquery/v2/projects/${projectId}/queries`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        useLegacySql: false,
        timeoutMs: 30000,
      }),
    }
  );

  const data = await response.json();
  if (data.error) {
    throw new Error(`BigQuery error: ${JSON.stringify(data.error)}`);
  }

  if (!data.rows) return [];
  
  const fields = data.schema.fields.map(f => f.name);
  return data.rows.map(row => {
    const obj = {};
    row.f.forEach((cell, i) => {
      obj[fields[i]] = cell.v;
    });
    return obj;
  });
}

export async function onRequestGet(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const credentials = JSON.parse(context.env.BIGQUERY_CREDENTIALS);
    const projectId = credentials.project_id;
    
    const { searchParams } = new URL(context.request.url);
    const naics = searchParams.get('naics') || '';
    const state = searchParams.get('state') || '';
    const setAside = searchParams.get('setAside') || '';
    const keyword = searchParams.get('keyword') || '';
    const yearRange = parseInt(searchParams.get('yearRange') || '1');

    const accessToken = await getAccessToken(credentials);

    const currentYear = new Date().getFullYear();
    const startYear = currentYear - yearRange;

    // Build WHERE clauses
    const conditions = [`action_date_fiscal_year >= ${startYear}`];

    if (naics) {
      conditions.push(`CAST(naics_code AS STRING) LIKE '${naics}%'`);
    }
    if (state) {
      conditions.push(`primary_place_of_performance_state_code = '${state.toUpperCase()}'`);
    }
    if (keyword) {
      const safeKeyword = keyword.replace(/'/g, "''").toLowerCase();
      conditions.push(`LOWER(product_or_service_code_description) LIKE '%${safeKeyword}%'`);
    }
    if (setAside) {
      const setAsideMap = {
        '8a': 'c8a_program_participant = TRUE',
        'hubzone': 'historically_underutilized_business_zone_hubzone_firm = TRUE',
        'wosb': 'woman_owned_business = TRUE',
        'sdvosb': 'veteran_owned_business = TRUE',
      };
      if (setAsideMap[setAside]) {
        conditions.push(setAsideMap[setAside]);
      }
    }

    const whereClause = `WHERE ${conditions.join(' AND ')}`;

    // Metrics query
    const metricsQuery = `
      SELECT
        SUM(federal_action_obligation) as total_contract_value,
        COUNT(DISTINCT CASE WHEN contracting_officers_determination_of_business_size_code = 'S' THEN recipient_uei END) as small_business_count,
        SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'S' THEN federal_action_obligation ELSE 0 END) as small_business_value
      FROM \`govspend1.cc.cc3\`
      ${whereClause}
    `;

    // Monthly query - FIXED: GROUP BY must match SELECT expression
    const monthlyQuery = `
      SELECT
        month,
        SUM(small_business) as small_business,
        SUM(other_than_small) as other_than_small,
        SUM(total) as total
      FROM (
        SELECT
          FORMAT_DATE('%Y-%m', initial_report_date) as month,
          CASE WHEN contracting_officers_determination_of_business_size_code = 'S' THEN federal_action_obligation ELSE 0 END as small_business,
          CASE WHEN contracting_officers_determination_of_business_size_code != 'S' THEN federal_action_obligation ELSE 0 END as other_than_small,
          federal_action_obligation as total
        FROM \`govspend1.cc.cc3\`
        ${whereClause}
      )
      GROUP BY month
      ORDER BY month
    `;

    // Vendors query
    const vendorsQuery = `
      SELECT
        recipient_name as name,
        SUM(federal_action_obligation) as value,
        COUNT(*) as award_count,
        MAX(contracting_officers_determination_of_business_size_code) as business_size
      FROM \`govspend1.cc.cc3\`
      ${whereClause}
      GROUP BY recipient_name
      ORDER BY value DESC
      LIMIT 10
    `;

    // Agencies query
    const agenciesQuery = `
      SELECT
        awarding_sub_agency_name as name,
        SUM(federal_action_obligation) as value,
        COUNT(*) as count
      FROM \`govspend1.cc.cc3\`
      ${whereClause}
      GROUP BY awarding_sub_agency_name
      ORDER BY value DESC
      LIMIT 10
    `;

    // Business types query
    const businessTypesQuery = `
      SELECT
        SUM(CASE WHEN c8a_program_participant = TRUE THEN federal_action_obligation ELSE 0 END) as eight_a_value,
        SUM(CASE WHEN historically_underutilized_business_zone_hubzone_firm = TRUE THEN federal_action_obligation ELSE 0 END) as hubzone_value,
        SUM(CASE WHEN woman_owned_business = TRUE THEN federal_action_obligation ELSE 0 END) as wosb_value,
        SUM(CASE WHEN veteran_owned_business = TRUE THEN federal_action_obligation ELSE 0 END) as sdvosb_value
      FROM \`govspend1.cc.cc3\`
      ${whereClause}
    `;

    const [metricsResult, monthlyResult, vendorsResult, agenciesResult, businessTypesResult] = await Promise.all([
      runQuery(projectId, metricsQuery, accessToken),
      runQuery(projectId, monthlyQuery, accessToken),
      runQuery(projectId, vendorsQuery, accessToken),
      runQuery(projectId, agenciesQuery, accessToken),
      runQuery(projectId, businessTypesQuery, accessToken),
    ]);

    const metrics = metricsResult[0] || {};
    const businessTypes = businessTypesResult[0] || {};

    const responseData = {
      metrics: {
        total_contract_value: parseFloat(metrics.total_contract_value) || 0,
        small_business_count: parseInt(metrics.small_business_count) || 0,
        small_business_value: parseFloat(metrics.small_business_value) || 0,
      },
      monthlySpendingBySize: monthlyResult.map(row => ({
        month: row.month,
        small_business: parseFloat(row.small_business) || 0,
        other_than_small: parseFloat(row.other_than_small) || 0,
        total: parseFloat(row.total) || 0,
      })),
      topVendors: vendorsResult.map(row => ({
        name: row.name,
        value: parseFloat(row.value) || 0,
        award_count: parseInt(row.award_count) || 0,
        business_size: row.business_size,
      })),
      topAgencies: agenciesResult.map(row => ({
        name: row.name,
        value: parseFloat(row.value) || 0,
        count: parseInt(row.count) || 0,
      })),
      business_types: {
        eight_a: { value: parseFloat(businessTypes.eight_a_value) || 0 },
        hubzone: { value: parseFloat(businessTypes.hubzone_value) || 0 },
        wosb: { value: parseFloat(businessTypes.wosb_value) || 0 },
        sdvosb: { value: parseFloat(businessTypes.sdvosb_value) || 0 },
      },
    };

    return new Response(JSON.stringify({ success: true, data: responseData }), {
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}