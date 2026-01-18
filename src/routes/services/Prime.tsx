import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, Crown, 
  Calendar, Phone, Mail, Shield, Check, FileText,
  MessageSquare, ChevronDown, ChevronRight,
  Timer, Users, Target,
  Zap, TrendingUp, Megaphone,
  Database, CheckCheck, PieChart, Star,
  Award, Briefcase, Clock
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

// ============================================
// PRIME PROGRAM PAGE
// ============================================

const keyMetrics = [
  { metric: 'Dedicated', label: 'Capture Manager', icon: Users },
  { metric: '5', label: 'Full Proposals', icon: FileText },
  { metric: '4', label: 'Campaigns/Year', icon: Megaphone },
  { metric: 'Same Day', label: 'Response Time', icon: Zap },
];

const deliverables = [
  {
    category: 'Everything in Growth',
    icon: CheckCheck,
    color: 'slate',
    items: [
      { 
        name: 'Complete Growth Package', 
        timeline: 'Included',
        description: 'All FedStart and Growth services included as your foundation.',
        details: [
          'All compliance registrations (SAM.gov, DSBS, FEMA)',
          'SBA certification submissions',
          'Capabilities statement and marketing strategy',
          'GovCon Portal access (12 months)',
          'Daily bid alerts',
          '2 marketing campaigns',
          'Unlimited Gold Team RFP reviews',
        ]
      },
    ]
  },
  {
    category: 'Dedicated Capture Management',
    icon: PieChart,
    color: 'amber',
    items: [
      { 
        name: 'Dedicated Capture Manager', 
        timeline: '12 Months',
        description: 'Your own capture manager who builds and maintains your opportunity pipeline. This is like having a full-time BD person without the salary.',
        details: [
          'Named capture manager assigned',
          'Weekly pipeline updates',
          'Opportunity identification and qualification',
          'Pre-RFP intelligence gathering',
          'Agency relationship mapping',
          'Win probability assessments',
          'Bid/no-bid recommendations',
          '30-50 opportunities tracked',
          '10-15 qualified pursuits active',
        ]
      },
      { 
        name: 'Pipeline Dashboard', 
        timeline: 'Always Current',
        description: 'Living pipeline spreadsheet tracking every opportunity from identification through award.',
        details: [
          'Real-time opportunity tracking',
          'Stage progression monitoring',
          'Action item management',
          'Win/loss tracking',
          'Forecast reporting',
        ]
      },
    ]
  },
  {
    category: 'Quarterly Marketing Campaigns',
    icon: Megaphone,
    color: 'rose',
    items: [
      { 
        name: '4 Full Marketing Campaigns', 
        timeline: 'Q1, Q2, Q3, Q4',
        description: 'Sustained market presence with quarterly campaigns targeting different verticals and audiences throughout the year.',
        details: [
          'Q1: Fiscal year planning targeting',
          'Q2: Mid-year budget spending',
          'Q3: Year-end use-it-or-lose-it',
          'Q4: Next year positioning',
          'Full reply management included',
          'Meeting scheduling support',
          'Campaign performance reporting',
          'Year-over-year optimization',
        ]
      },
    ]
  },
  {
    category: 'Full Proposal Development',
    icon: FileText,
    color: 'blue',
    items: [
      { 
        name: 'Up to 5 Complete Proposals', 
        timeline: 'As Opportunities Arise',
        description: 'We don\'t just review — we write. Complete proposal development from RFP analysis through submission-ready package. This alone is worth $25,000+.',
        details: [
          '5 full proposal developments included',
          'RFP analysis and compliance matrix',
          'Win theme development',
          'Technical approach writing',
          'Management plan development',
          'Past performance volume',
          'Pricing strategy and development',
          'Graphics and visual elements',
          'Red team review',
          'Final production and formatting',
          '10-14 day typical turnaround',
        ]
      },
    ]
  },
  {
    category: 'Year-Round Compliance',
    icon: Shield,
    color: 'emerald',
    items: [
      { 
        name: 'Compliance Management', 
        timeline: 'Continuous',
        description: 'Never worry about expirations or renewals. We monitor everything and handle it proactively.',
        details: [
          'SAM.gov annual renewal',
          'Certification maintenance',
          'Representations updates',
          'Size standard monitoring',
          'Expiration alerts',
          'Proactive renewal handling',
          'Regulation change alerts',
        ]
      },
    ]
  },
  {
    category: 'Priority Support',
    icon: Zap,
    color: 'purple',
    items: [
      { 
        name: 'Priority Access', 
        timeline: 'Same Day',
        description: 'Questions don\'t wait for monthly calls. Direct access to senior consultants with same-day response.',
        details: [
          'Same-day email response',
          'Live phone or 2-hour callback',
          '1-hour text response',
          'Emergency escalation available',
          'After-hours availability',
          'Priority scheduling',
        ]
      },
      { 
        name: 'Quarterly Business Reviews', 
        timeline: '4x/Year',
        description: 'Comprehensive strategic reviews every quarter to assess results and adjust approach.',
        details: [
          '90-minute QBR sessions',
          'Win/loss analysis',
          'Pipeline health assessment',
          'Market trend briefing',
          'Strategy adjustments',
          'Next quarter planning',
          'Goal setting and accountability',
        ]
      },
    ]
  },
];

const timeline = [
  { phase: 'Month 1', title: 'Foundation & Setup', items: ['Complete Growth setup', 'Capture manager assigned', 'Initial pipeline build', 'Strategy alignment'], color: 'blue' },
  { phase: 'Q1', title: 'Ramp Up', subtitle: 'Months 2-3', items: ['First campaign launch', 'Pipeline development', 'First proposal pursuits', 'QBR #1'], color: 'rose' },
  { phase: 'Q2', title: 'Active Pursuit', subtitle: 'Months 4-6', items: ['Second campaign', 'Proposals 1-2', 'Pipeline refinement', 'QBR #2'], color: 'amber' },
  { phase: 'Q3', title: 'Acceleration', subtitle: 'Months 7-9', items: ['Third campaign', 'Proposals 3-4', 'Strategy optimization', 'QBR #3'], color: 'emerald' },
  { phase: 'Q4', title: 'Optimization', subtitle: 'Months 10-12', items: ['Fourth campaign', 'Proposal 5', 'Year review', 'Renewal planning', 'QBR #4'], color: 'purple' },
];

const fiveCsCoverage = [
  { c: 'Compliance', level: 'Full + Managed', covered: true, desc: 'All registrations plus year-round maintenance and renewals' },
  { c: 'Concept', level: 'Full + Ongoing', covered: true, desc: 'Capabilities statement, strategy, and quarterly campaigns' },
  { c: 'Capture', level: 'Dedicated', covered: true, desc: 'Named capture manager with 30-50 opportunity pipeline' },
  { c: 'Compete', level: 'Full Proposals', covered: true, desc: 'Up to 5 complete proposal developments + unlimited reviews' },
  { c: 'Continue', level: 'Full', covered: true, desc: 'Quarterly business reviews, compliance management, recompete positioning' },
];

const whyPrime = [
  { title: 'Dedicated Capture Manager', desc: 'Your own BD person managing 30-50 opportunities in your pipeline', icon: Users },
  { title: '5 Full Proposals', desc: 'Complete proposal writing worth $25,000+ in professional services', icon: FileText },
  { title: 'Quarterly Campaigns', desc: 'Year-round market presence with 4 professional outreach campaigns', icon: Megaphone },
  { title: 'Same-Day Support', desc: 'Priority access to senior consultants when questions can\'t wait', icon: Zap },
  { title: 'Year-Round Compliance', desc: 'Never miss a renewal or deadline — we handle it all proactively', icon: Shield },
  { title: 'Quarterly Business Reviews', desc: 'Strategic planning sessions 4x per year to optimize your approach', icon: PieChart },
];

const valueBreakdown = [
  { item: 'Dedicated Capture Manager (12 months)', value: '$60,000', note: 'vs. hiring BD staff' },
  { item: '5 Full Proposals', value: '$25,000', note: 'at $5,000 per proposal' },
  { item: '4 Marketing Campaigns', value: '$8,000', note: 'at $2,000 per campaign' },
  { item: 'GovCon Portal (12 months)', value: '$6,000', note: 'standard pricing' },
  { item: 'Compliance Management', value: '$3,000', note: 'annual value' },
  { item: 'Unlimited RFP Reviews', value: '$10,000', note: 'based on typical usage' },
  { item: 'Priority Support & QBRs', value: '$5,000', note: 'consulting value' },
];

const comparisonFull = [
  { feature: 'SAM.gov, DSBS, FEMA Registrations', fedstart: true, growth: true, prime: true },
  { feature: 'SBA Certification Submissions', fedstart: true, growth: true, prime: true },
  { feature: 'Capabilities Statement', fedstart: true, growth: true, prime: true },
  { feature: 'GovCon Portal Access', fedstart: false, growth: '6 months', prime: '12 months' },
  { feature: 'Daily Bid Alerts', fedstart: false, growth: true, prime: true },
  { feature: 'Email Marketing Campaigns', fedstart: false, growth: '2', prime: '4 (quarterly)' },
  { feature: 'RFP Reviews', fedstart: '1', growth: 'Unlimited', prime: 'Unlimited' },
  { feature: 'Full Proposal Writing', fedstart: false, growth: false, prime: 'Up to 5' },
  { feature: 'Capture Management', fedstart: false, growth: 'Guided', prime: 'Dedicated' },
  { feature: 'Pipeline Dashboard', fedstart: false, growth: false, prime: true },
  { feature: 'Compliance Renewals', fedstart: false, growth: false, prime: true },
  { feature: 'Response Time', fedstart: '48 hrs', growth: '24 hrs', prime: 'Same day' },
  { feature: 'Quarterly Business Reviews', fedstart: false, growth: false, prime: '4x/year' },
];

const faqs = [
  {
    q: 'Is Prime worth it if I\'m just starting out?',
    a: 'Prime is for contractors who are serious about building a federal practice and ready to invest in dedicated support. If you\'re testing the waters, start with FedStart or Growth. If you\'re committed to winning and want a partner who\'s all-in with you, Prime delivers the best ROI.',
  },
  {
    q: 'What exactly does a dedicated capture manager do?',
    a: 'Your capture manager identifies opportunities, qualifies them, gathers intelligence, tracks everything in your pipeline, and makes bid/no-bid recommendations. They maintain 30-50 opportunities at any time with 10-15 active pursuits. It\'s like having a full-time BD person without the $100K+ salary.',
  },
  {
    q: 'How do the 5 proposals work?',
    a: 'When you identify an opportunity worth pursuing, we write the complete proposal — not just review it. RFP analysis, compliance matrix, technical approach, management plan, past performance, pricing, graphics, and final production. 10-14 day turnaround. You can use all 5 in Q1 or spread them across the year.',
  },
  {
    q: 'What happens after 12 months?',
    a: 'You can renew Prime, step down to Growth for lighter ongoing support, or continue independently with the foundation we built. Most Prime clients renew — the pipeline momentum and capture support are hard to replace.',
  },
  {
    q: 'Can I upgrade from Growth to Prime mid-engagement?',
    a: 'Yes. Your full Growth investment applies as credit toward Prime. If you start Growth and realize you need dedicated capture support by month 3, you can upgrade seamlessly.',
  },
  {
    q: 'What\'s the typical ROI?',
    a: 'Our Prime clients average 3-5 contract wins per year with a combined value of $500K-$5M+. Against the $15,500 investment, that\'s substantial ROI. But results depend on your market, past performance, and commitment to the process.',
  },
];

export default function PrimeProgram() {
  const [expandedDeliverable, setExpandedDeliverable] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const totalValue = valueBreakdown.reduce((acc, item) => {
    const num = parseInt(item.value.replace(/[^0-9]/g, ''));
    return acc + num;
  }, 0);

  return (
    <>
      <Helmet>
        <title>Prime Program — Full-Service Federal Partnership | GovCon Inc.</title>
        <meta name="description" content="Dedicated capture management, 5 full proposals, quarterly campaigns, and year-round compliance. The complete federal contracting partnership. $15,500." />
      </Helmet>

      {/* HERO */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-amber-900 via-orange-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-sm text-amber-200 mb-6 border border-amber-400/30">
                <Crown size={16} />
                Marketing Program
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Prime
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Full-Service Partnership
                </span>
              </h1>

              <p className="mt-6 text-xl text-amber-100 leading-relaxed">
                We become your business development team. Dedicated capture management, quarterly campaigns, up to 5 full proposal developments, and year-round compliance. This is for contractors who are serious about winning.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <div className="text-5xl font-bold text-white">$15,500</div>
                  <div className="text-amber-300">12 Month Program</div>
                </div>
                <LinkButton href="/register" className="px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 text-lg">
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </LinkButton>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 text-emerald-300 font-bold mb-1">
                  <CheckCheck size={18} />
                  Includes everything in Growth
                </div>
                <p className="text-amber-200 text-sm">Full credit if upgrading from FedStart or Growth</p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {keyMetrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                    <Icon size={24} className="text-amber-300 mb-3" />
                    <div className="text-3xl font-bold text-white">{m.metric}</div>
                    <div className="text-amber-200">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="py-16 bg-amber-50 border-b border-amber-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-amber-600 flex items-center justify-center">
                <Briefcase size={40} className="text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Ideal For</h2>
              <p className="text-lg text-slate-600">
                <strong>Serious contractors committed to building a federal practice.</strong> You want dedicated support, full proposal development, and year-round partnership — not just tools and guidance. You're ready to invest in winning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 C's COVERAGE - ALL GREEN */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Complete 5 C's Coverage</h2>
            <p className="mt-4 text-lg text-slate-600">Prime covers every phase of federal contracting</p>
          </div>

          <div className="grid gap-4">
            {fiveCsCoverage.map((item, i) => (
              <div 
                key={item.c}
                className="p-6 rounded-xl border-2 bg-amber-50 border-amber-200 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-amber-600 text-white">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900 text-lg">{item.c}</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-600 text-white">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1">{item.desc}</p>
                </div>
                <CheckCircle size={24} className="text-amber-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE BREAKDOWN */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Value Breakdown</h2>
            <p className="mt-4 text-lg text-slate-400">What you'd pay for these services individually</p>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden">
            <div className="divide-y divide-slate-700">
              {valueBreakdown.map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between">
                  <div>
                    <span className="text-white">{item.item}</span>
                    <span className="text-slate-500 text-sm ml-2">({item.note})</span>
                  </div>
                  <span className="text-amber-400 font-bold">{item.value}+</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-amber-600 flex items-center justify-between">
              <span className="text-white font-bold text-lg">Total Market Value</span>
              <span className="text-white font-bold text-2xl">${totalValue.toLocaleString()}+</span>
            </div>
            <div className="p-6 bg-amber-700 flex items-center justify-between">
              <span className="text-amber-100 font-bold text-lg">Your Investment</span>
              <span className="text-white font-bold text-2xl">$15,500</span>
            </div>
          </div>
        </div>
      </section>

      {/* FULL COMPARISON TABLE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Complete Program Comparison</h2>
            <p className="mt-4 text-lg text-slate-600">See how Prime compares across all programs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="p-4 text-left text-slate-600">Feature</th>
                  <th className="p-4 text-center">
                    <div className="font-bold text-slate-700">FedStart</div>
                    <div className="text-blue-600 font-bold">$3,200</div>
                  </th>
                  <th className="p-4 text-center">
                    <div className="font-bold text-slate-700">Growth</div>
                    <div className="text-rose-600 font-bold">$6,500</div>
                  </th>
                  <th className="p-4 text-center bg-amber-50">
                    <div className="font-bold text-slate-900">Prime</div>
                    <div className="text-amber-600 font-bold">$15,500</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFull.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                    <td className="p-3 text-slate-700">{row.feature}</td>
                    <td className="p-3 text-center">
                      {row.fedstart === true ? <Check size={18} className="mx-auto text-emerald-500" /> : 
                       row.fedstart === false ? <span className="text-slate-300">—</span> : 
                       <span className="text-slate-700">{row.fedstart}</span>}
                    </td>
                    <td className="p-3 text-center">
                      {row.growth === true ? <Check size={18} className="mx-auto text-emerald-500" /> : 
                       row.growth === false ? <span className="text-slate-300">—</span> : 
                       <span className="text-slate-700">{row.growth}</span>}
                    </td>
                    <td className="p-3 text-center bg-amber-50">
                      {row.prime === true ? <Check size={18} className="mx-auto text-emerald-500" /> : 
                       row.prime === false ? <span className="text-slate-300">—</span> : 
                       <span className="text-amber-700 font-medium">{row.prime}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Complete Deliverables</h2>
            <p className="mt-4 text-lg text-slate-600">Everything included in your $15,500 investment</p>
          </div>

          <div className="space-y-12">
            {deliverables.map((category) => {
              const CatIcon = category.icon;
              const colorClasses = {
                slate: { bg: 'bg-slate-600', light: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
                amber: { bg: 'bg-amber-600', light: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
                rose: { bg: 'bg-rose-600', light: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
                blue: { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
                emerald: { bg: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
                purple: { bg: 'bg-purple-600', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
              }[category.color] || { bg: 'bg-slate-600', light: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' };

              return (
                <div key={category.category}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white", colorClasses.bg)}>
                      <CatIcon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {category.items.map((item) => {
                      const isExpanded = expandedDeliverable === item.name;
                      return (
                        <div 
                          key={item.name}
                          className={cn("bg-white rounded-2xl border-2 overflow-hidden transition-all", colorClasses.border, category.items.length === 1 && "lg:col-span-2")}
                        >
                          <button
                            onClick={() => setExpandedDeliverable(isExpanded ? null : item.name)}
                            className="w-full p-6 text-left hover:bg-slate-50 transition"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                                <span className={cn("inline-block mt-2 text-xs font-medium px-2 py-1 rounded", colorClasses.light, colorClasses.text)}>
                                  {item.timeline}
                                </span>
                              </div>
                              <ChevronDown size={20} className={cn("text-slate-400 transition-transform shrink-0", isExpanded && "rotate-180")} />
                            </div>
                            <p className="text-slate-600 mt-3">{item.description}</p>
                          </button>

                          {isExpanded && (
                            <div className={cn("px-6 pb-6 border-t", colorClasses.border)}>
                              <div className="pt-4 space-y-2">
                                {item.details.map((detail, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                    <Check size={16} className={cn("shrink-0 mt-0.5", colorClasses.text)} />
                                    <span className="text-slate-700">{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">12-Month Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">From foundation to sustained federal success</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-rose-500 via-amber-500 via-emerald-500 to-purple-500" />

            <div className="grid lg:grid-cols-5 gap-6">
              {timeline.map((t, i) => {
                const colorClasses = {
                  blue: 'bg-blue-600',
                  rose: 'bg-rose-600',
                  amber: 'bg-amber-500',
                  emerald: 'bg-emerald-600',
                  purple: 'bg-purple-600',
                }[t.color];
                
                return (
                  <div key={t.phase} className="relative">
                    <div className={cn("w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto lg:mx-0 mb-4 relative z-10", colorClasses)}>
                      {i + 1}
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{t.phase}</div>
                      <h4 className="font-bold text-slate-900 mt-1">{t.title}</h4>
                      {t.subtitle && <div className="text-sm text-slate-500">{t.subtitle}</div>}
                      <ul className="mt-3 space-y-1">
                        {t.items.map((item, j) => (
                          <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                            <Check size={12} className="text-emerald-500 shrink-0 mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY PRIME */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why Prime?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPrime.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-white/10 border border-white/10">
                  <Icon size={28} className="text-amber-300 mb-4" />
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-amber-200 mt-2">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isExpanded = expandedFaq === i;
              return (
                <div key={i} className="border-2 border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span className="font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown size={20} className={cn("text-slate-400 shrink-0 transition-transform", isExpanded && "rotate-180")} />
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-slate-200">
                      <p className="pt-4 text-slate-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready for a True Partnership?</h2>
          <p className="mt-4 text-xl text-amber-200">Dedicated support, full proposals, year-round success.</p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="/register" className="px-10 py-4 bg-white text-amber-900 hover:bg-amber-50 text-lg">
              Start Prime — $15,500
              <ArrowRight size={20} className="ml-2" />
            </LinkButton>
            <LinkButton href={LINKS.booking} target="_blank" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10">
              Book Free Consultation
            </LinkButton>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-amber-200">
            <a href="tel:8136650308" className="flex items-center gap-2 hover:text-white transition">
              <Phone size={18} />
              (813) 665-0308
            </a>
            <a href="mailto:Info@GovCon.info" className="flex items-center gap-2 hover:text-white transition">
              <Mail size={18} />
              Info@GovCon.info
            </a>
          </div>
        </div>
      </section>
    </>
  );
}