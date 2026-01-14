// worker.ts
// Cloudflare Worker replacement for contracts.php
// Matches exact logic: govspend1.cc.cc table, 'S' code checks, and specific date math.

interface Env {
  BIGQUERY_CREDENTIALS: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // 1. CORS & Headers
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    const url = new URL(request.url);
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    try {
      // 2. Input Sanitization (Matching PHP logic)
      const sanitize = (str: string | null) => str ? str.replace(/[<>]/g, "").trim() : "";
      
      const state = sanitize(url.searchParams.get("state"));
      const keyword = sanitize(url.searchParams.get("keyword"));
      const naics = url.searchParams.get("naics") ? parseFloat(url.searchParams.get("naics")!) : 0;
      const setAside = sanitize(url.searchParams.get("setAside"));
      let yearRange = parseInt(url.searchParams.get("yearRange") || "1");

      if (yearRange !== 1 && yearRange !== 5) {
        yearRange = 1;
      }

      // 3. Date Logic (Replicating PHP's date math exactly)
      // PHP: $fiscalYearStart = date('Y-m-d', strtotime("$currentYear-10-01 -1 year"));
      // This means if today is 2025, it looks for 2024-10-01.
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // We explicitly set the fiscal year start to Oct 1 of the previous calendar year
      const fyStart = new Date(`${currentYear - 1}-10-01`);
      
      // Calculate start date based on range
      // PHP: $startDate = date('Y-m-d', strtotime("$fiscalYearStart -" . ($yearRange - 1) . " years"));
      const startDateObj = new Date(fyStart);
      startDateObj.setFullYear(fyStart.getFullYear() - (yearRange - 1));
      const startDate = startDateObj.toISOString().split('T')[0];

      // 4. Construct the Query
      // Using BigQuery parameter syntax (@variable)
      const query = `
        WITH FilteredData AS (
            SELECT *
            FROM \`govspend1.cc.cc\`
            WHERE 1=1
                AND (@state = '' OR UPPER(primary_place_of_performance_state_code) = UPPER(@state))
                AND (@keyword = '' OR LOWER(prime_award_base_transaction_description) LIKE CONCAT('%', LOWER(@keyword), '%'))
                AND (@naics = 0 OR naics_code = @naics)
                AND (@setAside = '' OR 
                    (@setAside = '8a' AND c8a_program_participant = TRUE) OR
                    (@setAside = 'hubzone' AND historically_underutilized_business_zone_hubzone_firm = TRUE) OR
                    (@setAside = 'wosb' AND woman_owned_business = TRUE) OR
                    (@setAside = 'sdvosb' AND veteran_owned_business = TRUE))
                AND initial_report_date >= @startDate
                AND EXTRACT(YEAR FROM initial_report_date) != 2020
        ),
        BusinessSize AS (
            SELECT
                SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'S'
                    THEN federal_action_obligation ELSE 0 END) as small_business_value,
                SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'O'
                    THEN federal_action_obligation ELSE 0 END) as other_than_small_value,
                COUNT(DISTINCT CASE WHEN contracting_officers_determination_of_business_size_code = 'S'
                    THEN recipient_name END) as small_business_count,
                COUNT(DISTINCT CASE WHEN contracting_officers_determination_of_business_size_code = 'O'
                    THEN recipient_name END) as other_than_small_count
            FROM FilteredData
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
        YearlySpendingByBusinessSize AS (
            SELECT 
                EXTRACT(YEAR FROM COALESCE(initial_report_date, CURRENT_DATE())) as year,
                SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'S'
                    THEN federal_action_obligation ELSE 0 END) as small_business_spending,
                SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'O'
                    THEN federal_action_obligation ELSE 0 END) as other_than_small_spending,
                SUM(federal_action_obligation) as total_spending
            FROM FilteredData
            GROUP BY year
            ORDER BY year ASC
        ),
        MonthlySpendingBySetAside AS (
            SELECT 
                FORMAT_DATE('%b %Y', COALESCE(initial_report_date, CURRENT_DATE())) as month,
                SUM(CASE WHEN c8a_program_participant = TRUE 
                    THEN federal_action_obligation ELSE 0 END) as eight_a_spending,
                SUM(CASE WHEN historically_underutilized_business_zone_hubzone_firm = TRUE 
                    THEN federal_action_obligation ELSE 0 END) as hubzone_spending,
                SUM(CASE WHEN woman_owned_business = TRUE 
                    THEN federal_action_obligation ELSE 0 END) as wosb_spending,
                SUM(CASE WHEN veteran_owned_business = TRUE 
                    THEN federal_action_obligation ELSE 0 END) as sdvosb_spending,
                MIN(COALESCE(initial_report_date, CURRENT_DATE())) as sort_date
            FROM FilteredData
            GROUP BY FORMAT_DATE('%b %Y', COALESCE(initial_report_date, CURRENT_DATE()))
            ORDER BY sort_date ASC
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
        )
        SELECT 
            SUM(federal_action_obligation) as total_contract_value,
            (SELECT AS STRUCT * FROM BusinessSize) as business_size,
            (SELECT AS STRUCT * FROM SetAsideData) as business_types,
            ARRAY(SELECT AS STRUCT * FROM MonthlySpendingByBusinessSize) as monthly_spending_by_size,
            ARRAY(SELECT AS STRUCT * FROM YearlySpendingByBusinessSize) as yearly_spending_by_size,
            ARRAY(SELECT AS STRUCT * FROM MonthlySpendingBySetAside) as monthly_spending_by_set_aside,
            ARRAY(SELECT AS STRUCT * FROM TopAgencies) as top_agencies,
            ARRAY(SELECT AS STRUCT * FROM TopVendors) as top_vendors
        FROM FilteredData
      `;

      // 5. Authenticate and Run Query
      const accessToken = await getAccessToken(env.BIGQUERY_CREDENTIALS);
      const projectId = "govspend1";
      const bqUrl = `https://bigquery.googleapis.com/bigquery/v2/projects/${projectId}/queries`;

      const bqResponse = await fetch(bqUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: query,
          useLegacySql: false,
          parameterMode: "NAMED",
          queryParameters: [
            { name: "state", parameterType: { type: "STRING" }, parameterValue: { value: state } },
            { name: "keyword", parameterType: { type: "STRING" }, parameterValue: { value: keyword } },
            { name: "naics", parameterType: { type: "INT64" }, parameterValue: { value: naics.toString() } },
            { name: "setAside", parameterType: { type: "STRING" }, parameterValue: { value: setAside } },
            { name: "startDate", parameterType: { type: "DATE" }, parameterValue: { value: startDate } }
          ]
        })
      });

      const bqData = await bqResponse.json();

      if (!bqResponse.ok || bqData.error) {
         throw new Error(bqData.error?.message || "BigQuery failed");
      }

      // 6. Transform Data (Manual mapping of BigQuery REST format 'f' and 'v' to your Clean JSON)
      // This maps 1:1 to the SELECT order above.
      const row = bqData.rows && bqData.rows.length > 0 ? bqData.rows[0] : null;
      let finalData = {};

      if (row) {
        // Helper to get value safely
        const v = (idx: number) => row.f[idx].v;
        const parseF = (val: any) => parseFloat(val) || 0;
        const parseI = (val: any) => parseInt(val) || 0;

        // BigQuery REST API returns Structs as {f: [...]} objects
        // 0: total_contract_value
        // 1: business_size (STRUCT)
        // 2: business_types (STRUCT)
        // 3: monthly_spending_by_size (ARRAY)
        // 4: yearly_spending_by_size (ARRAY)
        // 5: monthly_spending_by_set_aside (ARRAY)
        // 6: top_agencies (ARRAY)
        // 7: top_vendors (ARRAY)

        const bs = v(1).f; // business_size struct fields
        const bt = v(2).f; // business_types struct fields

        finalData = {
          metrics: {
            total_contract_value: parseF(v(0)),
            small_business_value: parseF(bs[0].v),
            other_than_small_value: parseF(bs[1].v),
            small_business_count: parseI(bs[2].v),
            other_than_small_count: parseI(bs[3].v)
          },
          business_types: {
            eight_a: { count: parseI(bt[0].v), value: parseF(bt[1].v) },
            hubzone: { count: parseI(bt[2].v), value: parseF(bt[3].v) },
            wosb: { count: parseI(bt[4].v), value: parseF(bt[5].v) },
            sdvosb: { count: parseI(bt[6].v), value: parseF(bt[7].v) }
          },
          monthlySpendingBySize: (v(3) || []).map((item: any) => ({
            month: item.v.f[0].v,
            small_business_spending: parseF(item.v.f[1].v),
            other_than_small_spending: parseF(item.v.f[2].v),
            total_spending: parseF(item.v.f[3].v)
          })),
          yearlySpendingBySize: (v(4) || []).map((item: any) => ({
            year: parseI(item.v.f[0].v),
            small_business_spending: parseF(item.v.f[1].v),
            other_than_small_spending: parseF(item.v.f[2].v),
            total_spending: parseF(item.v.f[3].v)
          })),
          monthlySpendingBySetAside: (v(5) || []).map((item: any) => ({
            month: item.v.f[0].v,
            eight_a_spending: parseF(item.v.f[1].v),
            hubzone_spending: parseF(item.v.f[2].v),
            wosb_spending: parseF(item.v.f[3].v),
            sdvosb_spending: parseF(item.v.f[4].v)
          })),
          topAgencies: (v(6) || []).map((item: any) => ({
            name: item.v.f[0].v,
            award_count: parseI(item.v.f[1].v),
            value: parseF(item.v.f[2].v)
          })),
          topVendors: (v(7) || []).map((item: any) => ({
            name: item.v.f[0].v,
            award_count: parseI(item.v.f[1].v),
            value: parseF(item.v.f[2].v),
            business_size: item.v.f[3].v
          }))
        };
      }

      return new Response(JSON.stringify({ success: true, data: finalData }), { headers });

    } catch (e: any) {
      return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers });
    }
  }
};

// --- AUTH HELPER FUNCTIONS (Because Workers environment doesn't have the Google PHP SDK) ---
async function getAccessToken(credentialsJson: string): Promise<string> {
  const credentials = JSON.parse(credentialsJson);
  
  // JWT Header & Claim Set
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/bigquery.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  // Base64 Encode
  const b64 = (obj: any) => btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const toSign = `${b64(header)}.${b64(claimSet)}`;

  // Sign using Web Crypto API
  const pem = credentials.private_key.replace(/-----BEGIN PRIVATE KEY-----|\n|-----END PRIVATE KEY-----/g, '');
  const binaryKey = Uint8Array.from(atob(pem), c => c.charCodeAt(0));
  
  const key = await crypto.subtle.importKey(
    "pkcs8", binaryKey, 
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, 
    false, ["sign"]
  );
  
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(toSign));
  const signature = btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  const jwt = `${toSign}.${signature}`;

  // Exchange JWT for Access Token
  const tokenResp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });

  const tokenData = await tokenResp.json();
  return tokenData.access_token;
}
