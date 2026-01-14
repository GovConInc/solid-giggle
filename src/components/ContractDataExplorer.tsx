import { useState } from "react";
import { Search, TrendingUp, Building2, Users, DollarSign, Filter } from "lucide-react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Card from "./Card";
import { Button } from "./Button";
import { cn } from "./cn";
import { usd, compact } from "../lib/format";

// Generate timeline data for the last 12 months
function generateMockTimeline(): any[] {
  const months = [];
  const now = new Date();
  
  for (let i = 11; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    months.push({
      month,
      small_business: 980000000 + Math.random() * 500000000,
      other_than_small: 2840000000 + Math.random() * 800000000,
      total: 3820000000 + Math.random() * 1000000000,
    });
  }
  
  return months;
}

// --- Types for your State ---
interface Metrics {
  total_contract_value: number;
  small_business_count: number;
  small_business_value: number;
  small_business_percentage: number;
}

interface TimelineItem {
  month: string;
  small_business: number;
  other_than_small: number;
  total: number;
}

interface SetAsideItem {
  label: string;
  value: number;
  color: string;
}

interface AgencyItem {
  name: string;
  value: number;
  count: number;
}

interface ContractorItem {
  name: string;
  value: number;
  count: number;
  is_small: boolean;
}

interface AppData {
  metrics: Metrics;
  timeline: TimelineItem[];
  setAsideDistribution: SetAsideItem[];
  topAgencies: AgencyItem[];
  topContractors: ContractorItem[];
}

// Default/Initial State
const INITIAL_DATA: AppData = {
  metrics: {
    total_contract_value: 45678900000,
    small_business_count: 1247,
    small_business_value: 12456780000,
    small_business_percentage: 27.3,
  },
  timeline: generateMockTimeline(),
  setAsideDistribution: [
    { label: "8(a) Program", value: 3200000000, color: "#2563eb" },
    { label: "HUBZone", value: 2800000000, color: "#7c3aed" },
    { label: "Women-Owned", value: 3900000000, color: "#ec4899" },
    { label: "Veteran-Owned", value: 2556780000, color: "#f59e0b" },
  ],
  topAgencies: [
    { name: "Department of Defense", value: 18900000000, count: 4832 },
    { name: "Veterans Affairs", value: 8700000000, count: 2341 },
    { name: "Homeland Security", value: 5600000000, count: 1876 },
    { name: "General Services Admin", value: 3400000000, count: 1254 },
    { name: "Health & Human Services", value: 2800000000, count: 987 },
    { name: "NASA", value: 1900000000, count: 456 },
    { name: "Energy", value: 1500000000, count: 398 },
    { name: "Transportation", value: 1200000000, count: 342 },
    { name: "Agriculture", value: 980000000, count: 287 },
    { name: "Commerce", value: 778900000, count: 234 },
  ],
  topContractors: [
    { name: "Lockheed Martin", value: 4200000000, count: 178, is_small: false },
    { name: "Boeing", value: 3800000000, count: 156, is_small: false },
    { name: "Raytheon Technologies", value: 3200000000, count: 143, is_small: false },
    { name: "General Dynamics", value: 2900000000, count: 132, is_small: false },
    { name: "Northrop Grumman", value: 2700000000, count: 124, is_small: false },
    { name: "TechFlow Inc", value: 480000000, count: 89, is_small: true },
    { name: "Analytic Services Inc", value: 420000000, count: 76, is_small: true },
    { name: "Peraton", value: 1200000000, count: 98, is_small: false },
    { name: "Leidos", value: 2100000000, count: 112, is_small: false },
    { name: "CACI International", value: 1800000000, count: 104, is_small: false },
  ],
};

export default function ContractDataExplorer() {
  const [naicsCode, setNaicsCode] = useState("");
  const [state, setState] = useState("");
  const [setAside, setSetAside] = useState("");
  const [keyword, setKeyword] = useState("");
  const [timeRange, setTimeRange] = useState<1 | 5>(1);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [data, setData] = useState<AppData>(INITIAL_DATA);
  const [chartView, setChartView] = useState<"total" | "small" | "other">("total");
  const [error, setError] = useState<string | null>(null);

  // Transform API response to UI format
  const transformApiResponse = (apiData: any): AppData => {
    console.log('API Response received:', apiData);
    
    if (!apiData || !apiData.metrics) {
      throw new Error('Invalid API response structure');
    }

    const total = apiData.metrics.total_contract_value || 0;
    const sbValue = apiData.metrics.small_business_value || 0;
    const sbPercent = total > 0 ? (sbValue / total) * 100 : 0;

    // Transform Timeline
    const timeline = (apiData.monthlySpendingBySize || []).map((item: any) => ({
      month: item.month,
      small_business: item.small_business_spending || 0,
      other_than_small: item.other_than_small_spending || 0,
      total: item.total_spending || 0
    }));

    // Transform Set Asides
    let setAsideDistribution: SetAsideItem[] = [];
    if (apiData.business_types) {
      const bt = apiData.business_types;
      setAsideDistribution = [
        { label: "8(a) Program", value: bt.eight_a?.value || 0, color: "#2563eb" },
        { label: "HUBZone", value: bt.hubzone?.value || 0, color: "#7c3aed" },
        { label: "Women-Owned", value: bt.wosb?.value || 0, color: "#ec4899" },
        { label: "Veteran-Owned", value: bt.sdvosb?.value || 0, color: "#f59e0b" },
      ].filter(item => item.value > 0);
    }

    // Transform Vendors
    const topContractors = (apiData.topVendors || []).map((vendor: any) => ({
      name: vendor.name,
      value: vendor.value,
      count: vendor.award_count,
      is_small: (vendor.business_size || "").includes("S")
    }));

    const transformed: AppData = {
      metrics: {
        total_contract_value: total,
        small_business_count: apiData.metrics.small_business_count || 0,
        small_business_value: sbValue,
        small_business_percentage: sbPercent
      },
      timeline,
      setAsideDistribution,
      topAgencies: apiData.topAgencies || [],
      topContractors
    };
    
    console.log('Transformed data:', transformed);
    return transformed;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        naics: naicsCode,
        state: state.toUpperCase(),
        setAside,
        keyword,
        yearRange: String(timeRange),
      });
      
      console.log(`Searching with params: ${params.toString()}`);
      
      const response = await fetch(`/api/contracts?${params}`);
      const result = await response.json();
      
      console.log('API Response status:', response.status);
      console.log('API Response body:', result);
      
      if (!response.ok) {
        throw new Error(result.error || `API error: ${response.status}`);
      }
      
      if (!result.success) {
        throw new Error(result.error || 'API returned success: false');
      }
      
      if (!result.data) {
        throw new Error('API returned no data - BigQuery query may have returned empty results');
      }
      
      // Transform the data before setting state
      const formattedData = transformApiResponse(result.data);
      setData(formattedData);
      setHasSearched(true);
      
    } catch (error: any) {
      console.error('Search failed:', error);
      setError(error.message || 'An unknown error occurred');
      setHasSearched(false);
    } finally {
      setLoading(false);
    }
  };

  const getChartData = () => {
    return data.timeline.map(item => ({
      month: item.month,
      value: chartView === "total" ? item.total : chartView === "small" ? item.small_business : item.other_than_small,
    }));
  };

  return (
    <div className="w-full">
      {/* Search Panel */}
      <Card className="p-6 mb-8" hover={false}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
            <Filter size={20} />
          </div>
          <h2 className="text-xl font-bold text-gov-navy">Contract Data Explorer</h2>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border-2 border-red-200">
            <p className="text-sm font-semibold text-red-900 mb-2">Error:</p>
            <p className="text-sm text-red-800 font-mono break-words">{error}</p>
          </div>
        )}

        <form onSubmit={handleSearch}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">NAICS Code</label>
              <input
                type="text"
                value={naicsCode}
                onChange={(e) => setNaicsCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="e.g., 541512"
                maxLength={6}
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase())}
                placeholder="e.g., VA"
                maxLength={2}
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Set-Aside Type</label>
              <select
                value={setAside}
                onChange={(e) => setSetAside(e.target.value)}
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none transition"
              >
                <option value="">All Types</option>
                <option value="8a">8(a) Program</option>
                <option value="hubzone">HUBZone</option>
                <option value="wosb">Women-Owned</option>
                <option value="sdvosb">Service-Disabled Veteran</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Keyword</label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search descriptions..."
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none transition"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTimeRange(1)}
                className={cn("rounded-lg px-4 py-2 text-sm font-semibold transition", timeRange === 1 ? "bg-gov-blue text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}
              >
                1 Year View
              </button>
              <button
                type="button"
                onClick={() => setTimeRange(5)}
                className={cn("rounded-lg px-4 py-2 text-sm font-semibold transition", timeRange === 5 ? "bg-gov-blue text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200")}
              >
                5 Year View
              </button>
            </div>

            <Button type="submit" disabled={loading} className="flex-1 sm:flex-none">
              <Search size={18} className="mr-2" />
              {loading ? "Searching..." : "Search Contract Data"}
            </Button>
          </div>
        </form>
      </Card>

      {/* Results */}
      {hasSearched && (
        <>
          {/* Metrics Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="p-6" hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Award Value</p>
                  <p className="mt-2 text-2xl font-bold text-gov-navy">{usd(data.metrics.total_contract_value)}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                  <DollarSign size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6" hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Small Business Count</p>
                  <p className="mt-2 text-2xl font-bold text-gov-navy">{data.metrics.small_business_count.toLocaleString()}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-green/10 text-gov-green">
                  <Users size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6" hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Small Business Value</p>
                  <p className="mt-2 text-2xl font-bold text-gov-navy">{usd(data.metrics.small_business_value)}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-crimson/10 text-gov-crimson">
                  <TrendingUp size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6" hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Small Business %</p>
                  <p className="mt-2 text-2xl font-bold text-gov-navy">{data.metrics.small_business_percentage.toFixed(1)}%</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-gold/20 text-gov-gold">
                  <TrendingUp size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            {/* Timeline Chart */}
            <Card className="p-6" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-gov-navy">Monthly Spending</h3>
                <div className="flex gap-1">
                  {[
                    { id: "total", label: "Total" },
                    { id: "small", label: "Small" },
                    { id: "other", label: "Other" },
                  ].map((view) => (
                    <button
                      key={view.id}
                      onClick={() => setChartView(view.id as typeof chartView)}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-xs font-semibold transition",
                        chartView === view.id ? "bg-gov-blue text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      )}
                    >
                      {view.label}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={getChartData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#64748b" />
                  <YAxis tick={{ fontSize: 11 }} stroke="#64748b" tickFormatter={(value) => compact(value)} />
                  <Tooltip
                    contentStyle={{ background: "rgba(15, 23, 42, 0.95)", border: "none", borderRadius: "8px", color: "#fff" }}
                    formatter={(value: number) => [usd(value), "Value"]}
                  />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={{ fill: "#2563eb", r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Pie Chart */}
            <Card className="p-6" hover={false}>
              <h3 className="font-bold text-lg text-gov-navy mb-6">Set-Aside Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.setAsideDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => entry.label}
                  >
                    {data.setAsideDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: "rgba(15, 23, 42, 0.95)", border: "none", borderRadius: "8px", color: "#fff" }}
                    formatter={(value: number) => [usd(value), "Value"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Tables Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top Agencies */}
            <Card className="overflow-hidden" hover={false}>
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Building2 size={18} className="text-gov-blue" />
                  <h3 className="font-bold text-gov-navy">Top 10 Agencies</h3>
                </div>
              </div>
              <div className="overflow-auto max-h-96">
                <table className="w-full">
                  <thead className="sticky top-0 bg-white border-b-2 border-slate-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Agency</th>
                      <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Value</th>
                      <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Awards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.topAgencies.map((agency) => (
                      <tr key={agency.name} className="border-b border-slate-100 hover:bg-slate-50 transition">
                        <td className="px-6 py-4 text-sm text-slate-700">{agency.name}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-right text-gov-blue">{usd(agency.value)}</td>
                        <td className="px-6 py-4 text-sm text-right text-slate-600">{agency.count.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Top Contractors */}
            <Card className="overflow-hidden" hover={false}>
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-gov-blue" />
                  <h3 className="font-bold text-gov-navy">Top 10 Contractors</h3>
                </div>
              </div>
              <div className="overflow-auto max-h-96">
                <table className="w-full">
                  <thead className="sticky top-0 bg-white border-b-2 border-slate-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Contractor</th>
                      <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Value</th>
                      <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Awards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.topContractors.map((contractor) => (
                      <tr key={contractor.name} className="border-b border-slate-100 hover:bg-slate-50 transition">
                        <td className="px-6 py-4 text-sm text-slate-700">
                          {contractor.name}
                          {contractor.is_small && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700">Small</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-right text-gov-blue">{usd(contractor.value)}</td>
                        <td className="px-6 py-4 text-sm text-right text-slate-600">{contractor.count.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </>
      )}

      {/* Empty State */}
      {!hasSearched && (
        <Card className="p-12 text-center" hover={false}>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gov-blue/10 text-gov-blue mx-auto">
            <Search size={32} />
          </div>
          <h3 className="mt-6 text-xl font-bold text-gov-navy">Ready to explore contract data?</h3>
          <p className="mt-2 text-slate-600 max-w-md mx-auto">
            Use the filters above to search federal contract awards by NAICS code, state, set-aside type, or keyword.
          </p>
        </Card>
      )}
    </div>
  );
}
