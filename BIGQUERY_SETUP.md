# BigQuery Contract Data API Setup Guide

## Overview
The Contract Data Explorer integrates with BigQuery to fetch federal contract award data from the SAM.gov dataset. This guide walks you through the setup process.

## Prerequisites
- A Google Cloud Project with BigQuery access
- A service account with BigQuery Read permissions
- The service account's JSON key file

## Setup Steps

### 1. Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the BigQuery API

### 2. Create a Service Account
1. Navigate to **Service Accounts** (under IAM & Admin)
2. Click **Create Service Account**
3. Fill in the account details:
   - Service account name: `contract-data-api`
   - Description: "Service account for contract data API"
4. Click **Create and Continue**
5. Grant the following roles:
   - **BigQuery Data Viewer** - to read BigQuery data
   - **BigQuery Job User** - to run queries
6. Click **Continue** then **Done**

### 3. Generate Service Account Key
1. In the Service Accounts list, click on the newly created account
2. Go to the **Keys** tab
3. Click **Add Key** → **Create new key**
4. Choose **JSON** format
5. Click **Create** - this downloads the JSON key file

### 4. Configure Environment Variables

#### For Cloudflare Workers (wrangler.toml)
Add the following to your `wrangler.toml`:

```toml
[env.production]
vars = { BIGQUERY_CREDENTIALS = "paste-entire-json-key-contents-here" }

[env.development]
vars = { BIGQUERY_CREDENTIALS = "paste-entire-json-key-contents-here" }
```

**Note**: The entire JSON key content should be on a single line or properly formatted as a JSON string.

#### For Node.js/Express
Set as an environment variable:
```bash
export BIGQUERY_CREDENTIALS='{"type":"service_account",...}'
```

Or in a `.env` file:
```
BIGQUERY_CREDENTIALS={"type":"service_account",...}
```

### 5. Verify the Setup

#### Test the API Endpoint
```bash
curl "http://localhost:3000/api/contracts?state=VA&naics=541512"
```

#### Expected Response
```json
{
  "success": true,
  "data": {
    "metrics": {
      "total_contract_value": 45678900000,
      "small_business_count": 1247,
      "small_business_value": 12456780000,
      "small_business_percentage": 27.3
    },
    "timeline": [...],
    "setAsideDistribution": [...],
    "topAgencies": [...],
    "topContractors": [...]
  },
  "rateLimit": {
    "limit": 150,
    "remaining": 149,
    "reset": "2026-01-13T23:59:59Z"
  }
}
```

## API Endpoint

### GET /api/contracts

#### Query Parameters
- `naics` (optional): NAICS code (6 digits max)
- `state` (optional): State abbreviation (2 letters, e.g., "VA")
- `setAside` (optional): Set-aside type (`8a`, `hubzone`, `wosb`, `sdvosb`)
- `keyword` (optional): Search keyword in contract description
- `yearRange` (optional): Number of years to search (1 or 5)

#### Example Requests
```
# Search Virginia contracts
/api/contracts?state=VA

# Search by NAICS code
/api/contracts?naics=541512

# Combined search
/api/contracts?state=CA&naics=541512&setAside=8a&keyword=software

# 5-year historical view
/api/contracts?yearRange=5
```

## Rate Limiting
- **Limit**: 150 requests per day per IP address
- **Headers Returned**:
  - `X-RateLimit-Limit`: 150
  - `X-RateLimit-Remaining`: Number of requests remaining
  - `X-RateLimit-Reset`: ISO 8601 timestamp of reset time

## Common Issues & Troubleshooting

### Error: "BigQuery credentials not configured"
- **Cause**: `BIGQUERY_CREDENTIALS` environment variable is not set
- **Solution**: Verify the environment variable is correctly set in your deployment platform

### Error: "Failed to get access token"
- **Cause**: Service account credentials are invalid or expired
- **Solution**: 
  - Verify the JSON key file is valid
  - Check that the service account has BigQuery permissions
  - Generate a new key if the current one is too old

### Error: "BigQuery query failed"
- **Cause**: The query syntax is invalid or the table doesn't exist
- **Solution**:
  - Verify the BigQuery dataset `govspend1.cc.cc` exists
  - Check that the service account has read access to this dataset
  - Review the SQL query in `buildBigQuerySQL()`

### Error: "Rate limit exceeded"
- **Cause**: More than 150 requests from your IP in a 24-hour period
- **Solution**: Wait until the time specified in the `X-RateLimit-Reset` header

### Slow Query Response
- **Cause**: BigQuery query is scanning too much data
- **Solution**:
  - Use more specific filters (NAICS, state, etc.)
  - Check the query timeout setting (currently 30 seconds)
  - Increase `maximumBytesBilled` if you need to scan more data (cost implications)

## Data Source
The API queries federal contract data from the SAM.gov dataset hosted on BigQuery. The main table used is:
- **Project**: `govspend1`
- **Dataset**: `cc`
- **Table**: `cc`

## Cost Considerations
- BigQuery charges based on data scanned (not retrieved)
- Current query is limited to 50GB per request
- Each query typically scans 2-10GB depending on filters
- With 150 requests/day limit, estimated cost: $0.30-1.50 per day

## Support
For issues with:
- **BigQuery setup**: See [Google Cloud BigQuery Documentation](https://cloud.google.com/bigquery/docs)
- **Service Account**: See [Google Cloud Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
- **This API**: Check the error messages in the browser console and API response body

## Next Steps
1. Test the API with the example requests above
2. Verify the data appears correctly in the Contract Data Explorer UI
3. Adjust rate limits or cost limits as needed for your use case
