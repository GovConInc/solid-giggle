// functions/api/contact.ts

interface Env {
  BIGQUERY_CREDENTIALS: string;
  SPREADSHEET_ID: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // 1. CORS Headers (Basic setup for Pages)
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data: any = await request.json();
    
    console.log('Contact form submission received:', { name: data.name, email: data.email });

    // Basic Validation
    if (!data.name || !data.email) {
      console.error('Validation failed: Missing Name or Email');
      return new Response(JSON.stringify({ error: "Missing Name or Email" }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // Check if credentials are configured
    if (!env.BIGQUERY_CREDENTIALS || !env.SPREADSHEET_ID) {
      console.error('Missing environment variables');
      return new Response(JSON.stringify({ error: "Server not configured. Missing Google Sheets credentials." }), {
        status: 500,
        headers: corsHeaders
      });
    }

    // 2. Get Access Token
    const accessToken = await getAccessToken(env.BIGQUERY_CREDENTIALS);
    console.log('Access token obtained successfully');

    // 3. Map Data to Columns A -> G
    // Columns: Name | Company | Email | Phone | CAGE | Interest | Best Time
    const rowValues = [
      data.name,
      data.company || "N/A",
      data.email,
      data.phone || "N/A",
      data.cage || "N/A",
      data.interest || "General",
      data.bestTime || "Anytime",
      new Date().toISOString(), // Timestamp
    ];

    console.log('Appending to Google Sheets:', rowValues);

    // 4. Append to Sheet
    const range = "Sheet1!A:H"; 
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.SPREADSHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ values: [rowValues] })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Google Sheets API error:', errText);
      throw new Error(`Google Sheets API Error: ${errText}`);
    }

    const result = await response.json();
    console.log('Google Sheets append successful:', result.updates);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Thank you for your submission. We will be in touch soon!'
    }), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });

  } catch (error: any) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message || 'Failed to submit contact form. Please try again later.'
    }), { 
      status: 500, 
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
};

// Handle Preflight requests (CORS)
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

// --- AUTH HELPER ---
async function getAccessToken(credentialsJson: string): Promise<string> {
  // Same helper function as before
  const credentials = JSON.parse(credentialsJson);
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const b64 = (obj: any) => btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const toSign = `${b64(header)}.${b64(claimSet)}`;
  const pem = credentials.private_key.replace(/-----BEGIN PRIVATE KEY-----|\n|-----END PRIVATE KEY-----/g, '');
  const binaryKey = Uint8Array.from(atob(pem), c => c.charCodeAt(0));
  const key = await crypto.subtle.importKey("pkcs8", binaryKey, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(toSign));
  const signature = btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  const tokenResp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${toSign}.${signature}`
  });
  const tokenData = await tokenResp.json();
  return tokenData.access_token;
}