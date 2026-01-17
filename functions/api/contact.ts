import { BigQuery } from '@google-cloud/bigquery';

export async function onRequestGet(context) {
  const { searchParams } = new URL(context.request.url);
  
  const naics = searchParams.get('naics') || '';
  const state = searchParams.get('state') || '';
  const setAside = searchParams.get('setAside') || '';
  const keyword = searchParams.get('keyword') || '';
  const yearRange = parseInt(searchParams.get('yearRange') || '1');

  try {
    const credentials = JSON.parse(context.env.BIGQUERY_CREDENTIALS);
    
    const bigquery = new BigQuery({
      projectId: credentials.project_id,
      credentials: credentials,
    });

    const currentYear = new Date().getFullYear();
    const startYear = currentYear - yearRange;

    // Build WHERE clauses
    const conditions = [`action_date_fiscal_year >= ${startYear}`];
    const params = {};

    if (naics) {
      conditions.push(`CAST(naics_code AS STRING) LIKE @naics`);
      params.naics = `${naics}%`;
    }
    if (state) {
      conditions.push(`primary_place_of_performance_state_code = @state`);
      params.state = state.toUpperCase();
    }
    if (keyword) {
      conditions.push(`LOWER(product_or_service_code_description) LIKE @keyword`);
      params.keyword = `%${keyword.toLowerCase()}%`;
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

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    // Main metrics query
    const metricsQuery = `
      SELECT
        SUM(federal_action_obligation) as total_contract_value,
        COUNT(DISTINCT CASE WHEN contracting_officers_determination_of_business_size_code = 'S' THEN recipient_uei END) as small_business_count,
        SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'S' THEN federal_action_obligation ELSE 0 END) as small_business_value
      FROM \`govspend1.cc.cc3\`
      ${whereClause}
    `;

    // Monthly spending query
    const monthlyQuery = `
      SELECT
        FORMAT_DATE('%b %Y', DATE_TRUNC(initial_report_date, MONTH)) as month,
        SUM(CASE WHEN contracting_officers_determination_of_business_size_code = 'S' THEN federal_action_obligation ELSE 0 END) as small_business,
        SUM(CASE WHEN contracting_officers_determination_of_business_size_code != 'S' THEN federal_action_obligation ELSE 0 END) as other_than_small,
        SUM(federal_action_obligation) as total
      FROM \`govspend1.cc.cc3\`
      ${whereClause}
      GROUP BY DATE_TRUNC(initial_report_date, MONTH)
      ORDER BY DATE_TRUNC(initial_report_date, MONTH)
    `;

    // Top vendors query
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

    // Top agencies query
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

    // Run all queries
    const [metricsResult] = await bigquery.query({ query: metricsQuery, params });
    const [monthlyResult] = await bigquery.query({ query: monthlyQuery, params });
    const [vendorsResult] = await bigquery.query({ query: vendorsQuery, params });
    const [agenciesResult] = await bigquery.query({ query: agenciesQuery, params });
    const [businessTypesResult] = await bigquery.query({ query: businessTypesQuery, params });

    const metrics = metricsResult[0] || {};
    const businessTypes = businessTypesResult[0] || {};

    const responseData = {
      metrics: {
        total_contract_value: metrics.total_contract_value || 0,
        small_business_count: metrics.small_business_count || 0,
        small_business_value: metrics.small_business_value || 0,
      },
      monthlySpendingBySize: monthlyResult || [],
      topVendors: vendorsResult || [],
      topAgencies: agenciesResult || [],
      business_types: {
        eight_a: { value: businessTypes.eight_a_value || 0 },
        hubzone: { value: businessTypes.hubzone_value || 0 },
        wosb: { value: businessTypes.wosb_value || 0 },
        sdvosb: { value: businessTypes.sdvosb_value || 0 },
      },
    };

    return new Response(JSON.stringify({ success: true, data: responseData }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('BigQuery error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}