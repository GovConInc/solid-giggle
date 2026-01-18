import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, Clock, BarChart3, 
  Calendar, Phone, Mail, Shield, Check, FileText,
  MessageSquare, ChevronDown, ChevronRight,
  Timer, Lightbulb, Star, Users, Target,
  Zap, TrendingUp, AlertCircle, Gift, Megaphone,
  Database, Search, Send, CheckCheck, Crown
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

// ============================================
// GROWTH PROGRAM PAGE
// ============================================

const keyMetrics = [
  { metric: '2,200+', label: 'Bid Sources', icon: Database },
  { metric: '2,000', label: 'Campaign Contacts', icon: Users },
  { metric: 'Unlimited', label: 'RFP Reviews', icon: FileText },
  { metric: '6 Months', label: 'Portal Access', icon: Calendar },
];

const deliverables = [
  {
    category: 'Everything in FedStart',
    icon: CheckCheck,
    color: 'slate',
    items: [
      { 
        name: 'Complete FedStart Package', 
        timeline: 'Month 1',
        description: 'All compliance services, concept development, and support from FedStart included.',
        details: [
          'SAM.gov, DSBS, FEMA registrations',
          'SBA certification submissions',
          'Professional capabilities statement',
          'Marketing strategy + 1,000 contacts',
          'Monthly support calls',
          'One RFP review',
        ]
      },
    ]
  },
  {
    category: 'Capture Tools & Intelligence',
    icon: Target,
    color: 'rose',
    items: [
      { 
        name: 'GovCon Portal Access', 
        timeline: '6 Months',
        description: 'Stop checking 50 different websites. Our portal aggregates 2,200+ federal and state bid sources into one searchable interface.',
        details: [
          'Full portal access (6 months)',
          '2,200+ bid source aggregation',
          'Custom search filter setup',
          'Daily bid alert configuration',
          'Award data and history',
          'Competitor tracking',
          'Forecast data access',
          'Training session included',
        ]
      },
      { 
        name: 'Daily Bid Alerts', 
        timeline: 'Automated',
        description: 'Wake up every morning to a curated list of opportunities matching your capabilities.',
        details: [
          'Customized to your NAICS codes',
          'Filtered by agency preferences',
          'Set-aside matching',
          'Geographic filtering',
          'Delivered to your inbox daily',
        ]
      },
      { 
        name: 'Opportunity Qualification Support', 
        timeline: 'Ongoing',
        description: 'We help you decide which opportunities to pursue and which to skip.',
        details: [
          'Bid/no-bid analysis framework',
          'Win probability assessment',
          'Competitive landscape review',
          'Resource requirement estimation',
        ]
      },
    ]
  },
  {
    category: 'Marketing Campaigns',
    icon: Megaphone,
    color: 'amber',
    items: [
      { 
        name: '2 Email Marketing Campaigns', 
        timeline: 'Months 2 & 4',
        description: 'Professional outreach campaigns targeting contracting officers and prime contractors. These aren\'t spam blasts — they\'re strategic introductions that generate meetings.',
        details: [
          'Campaign strategy development',
          '1,000 contacts per campaign (2,000 total)',
          'Target list curation and verification',
          'Email copy and design',
          'Campaign execution from your domain',
          'Open/click/reply tracking',
          'Response handling guidance',
          'Performance reporting',
        ]
      },
      { 
        name: 'Prime Contractor Targeting', 
        timeline: 'Months 2-6',
        description: '40% of federal dollars flow through primes to subs. We identify primes who need your capabilities.',
        details: [
          'Prime contractor identification',
          'Subcontracting opportunity research',
          'Introduction facilitation',
          'Teaming agreement guidance',
          'Mentor-protégé exploration',
        ]
      },
    ]
  },
  {
    category: 'Proposal Support',
    icon: FileText,
    color: 'blue',
    items: [
      { 
        name: 'Unlimited Gold Team RFP Reviews', 
        timeline: 'As Needed',
        description: 'Every proposal you submit gets a professional review. Our team evaluates your submission exactly like government evaluators would.',
        details: [
          'Unlimited reviews during 6 months',
          'Compliance matrix verification',
          'Technical approach evaluation',
          'Pricing review',
          'Strengths/weaknesses report',
          'Specific fix recommendations',
          'Debrief call after each review',
          '3-5 day turnaround',
        ]
      },
    ]
  },
  {
    category: 'Ongoing Support',
    icon: MessageSquare,
    color: 'emerald',
    items: [
      { 
        name: 'Regular Strategy Sessions', 
        timeline: 'Monthly',
        description: 'Standing meetings throughout the engagement to review pipeline, adjust strategy, and keep momentum.',
        details: [
          'Monthly 60-minute calls',
          'Pipeline review',
          'Campaign performance analysis',
          'Strategy adjustments',
          'Q&A and guidance',
        ]
      },
    ]
  },
];

const timeline = [
  { phase: 'Month 1', title: 'Foundation + Portal', items: ['Complete FedStart deliverables', 'Portal access and training', 'Search filters configured', 'Daily alerts activated'], color: 'blue' },
  { phase: 'Month 2', title: 'Campaign 1 Launch', items: ['First campaign strategy', 'Target list curation (1,000)', 'Campaign execution', 'Begin opportunity pursuit'], color: 'rose' },
  { phase: 'Months 3-4', title: 'Active Pursuit', items: ['Proposal reviews as needed', 'Opportunity qualification', 'Prime contractor outreach', 'Pipeline building'], color: 'amber' },
  { phase: 'Month 4-5', title: 'Campaign 2 Launch', items: ['Second campaign strategy', 'New target list (1,000)', 'Campaign execution', 'Continued pursuit'], color: 'emerald' },
  { phase: 'Month 6', title: 'Acceleration', items: ['Pipeline review', 'Strategy refinement', 'Transition planning', 'Upgrade discussion'], color: 'purple' },
];

const fiveCsCoverage = [
  { c: 'Compliance', level: 'Full', covered: true, desc: 'All registrations, certifications, and 6-month compliance updates' },
  { c: 'Concept', level: 'Full', covered: true, desc: 'Capabilities statement, marketing strategy, and campaign execution' },
  { c: 'Capture', level: 'Full', covered: true, desc: 'Portal access, daily alerts, and opportunity qualification support' },
  { c: 'Compete', level: 'Reviews', covered: 'partial', desc: 'Unlimited Gold Team proposal reviews' },
  { c: 'Continue', level: '—', covered: false, desc: 'Available in Prime program' },
];

const whyGrowth = [
  { title: '2,200+ Bid Sources', desc: 'Federal, state, and local opportunities in one searchable portal', icon: Database },
  { title: 'Proactive Campaigns', desc: 'Two professional marketing campaigns to 2,000 targeted contacts', icon: Megaphone },
  { title: 'Unlimited Reviews', desc: 'Every proposal reviewed before submission — no extra cost', icon: FileText },
  { title: 'Upgrade Credit', desc: 'Full $6,500 investment applies toward Prime if you upgrade', icon: TrendingUp },
];

const notIncluded = [
  'Dedicated capture manager',
  'Full proposal writing (5 proposals)',
  'Quarterly campaigns (4 per year)',
  'Year-round compliance management',
  'Priority same-day support',
];

const faqs = [
  {
    q: 'Do I need to complete FedStart first?',
    a: 'No. Growth includes everything in FedStart. If you\'re ready to go all-in on pursuing opportunities, start with Growth. If you already completed FedStart, your full investment applies as credit.',
  },
  {
    q: 'How does the GovCon Portal work?',
    a: 'The portal aggregates 2,200+ bid sources including SAM.gov, GovWin, state procurement sites, and more. You set your NAICS codes, agencies, and preferences — then get matching opportunities delivered daily. No more checking 50 websites.',
  },
  {
    q: 'What\'s included in the email campaigns?',
    a: 'Full service: we develop strategy, curate and verify target lists, write copy, design emails, execute from your domain, and track results. Each campaign goes to 1,000 targeted contacts (contracting officers, small business specialists, and prime contractors).',
  },
  {
    q: 'How do the unlimited RFP reviews work?',
    a: 'Submit any proposal and we review it like government evaluators would. You get a detailed report with compliance check, strengths/weaknesses, and specific fixes. 3-5 day turnaround. Use it as many times as you need during your 6 months.',
  },
  {
    q: 'Can I upgrade to Prime later?',
    a: 'Yes. Your full $6,500 Growth investment applies as credit toward Prime. Most Growth clients who want dedicated capture support and full proposal writing upgrade by month 4.',
  },
  {
    q: 'What if I\'m not winning by month 6?',
    a: 'Federal sales cycles are long — 6-18 months from opportunity identification to award is normal. Growth sets you up with pipeline and positioning. If you want continued support, Prime provides year-round coverage and dedicated capture management.',
  },
];

const comparisonWithFedStart = [
  { feature: 'SAM.gov, DSBS, FEMA Registrations', fedstart: true, growth: true },
  { feature: 'SBA Certification Submissions', fedstart: true, growth: true },
  { feature: 'Capabilities Statement', fedstart: true, growth: true },
  { feature: 'Marketing Strategy + 1,000 Contacts', fedstart: true, growth: true },
  { feature: 'GovCon Portal Access', fedstart: false, growth: '6 months' },
  { feature: 'Daily Bid Alerts', fedstart: false, growth: true },
  { feature: 'Email Marketing Campaigns', fedstart: false, growth: '2 campaigns' },
  { feature: 'RFP Reviews', fedstart: '1', growth: 'Unlimited' },
  { feature: 'Opportunity Qualification Support', fedstart: false, growth: true },
  { feature: 'Prime Contractor Targeting', fedstart: false, growth: true },
];

export default function GrowthProgram() {
  const [expandedDeliverable, setExpandedDeliverable] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Growth Program — Scale Your Federal Pipeline | GovCon Inc.</title>
        <meta name="description" content="Build a real federal contract pipeline. 2,200+ bid sources, marketing campaigns, unlimited proposal reviews, and opportunity qualification. $6,500." />
      </Helmet>

      {/* HERO */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-rose-900 via-rose-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Popular Badge */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-rose-600 to-orange-500 text-white text-center py-3 font-bold">
          Most Popular — Best Value for Active Pursuit
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 text-sm text-rose-200 mb-6 border border-rose-400/30">
                <BarChart3 size={16} />
                Marketing Program
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Growth
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-orange-300">
                  Scale Your Pipeline
                </span>
              </h1>

              <p className="mt-6 text-xl text-rose-100 leading-relaxed">
                You have your foundation — now it's time to hunt. Growth adds the tools, data, and campaigns you need to build a real pipeline and start winning. Most clients see their first contract wins during this program.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <div className="text-5xl font-bold text-white">$6,500</div>
                  <div className="text-rose-300">6 Month Program</div>
                </div>
                <LinkButton href="/register" className="px-8 py-4 bg-white text-rose-900 hover:bg-rose-50 text-lg">
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </LinkButton>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 text-emerald-300 font-bold mb-1">
                  <CheckCheck size={18} />
                  Includes everything in FedStart
                </div>
                <p className="text-rose-200 text-sm">Full credit if upgrading from FedStart</p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {keyMetrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                    <Icon size={24} className="text-rose-300 mb-3" />
                    <div className="text-3xl font-bold text-white">{m.metric}</div>
                    <div className="text-rose-200">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="py-16 bg-rose-50 border-b border-rose-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-rose-600 flex items-center justify-center">
                <Target size={40} className="text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Ideal For</h2>
              <p className="text-lg text-slate-600">
                <strong>Contractors ready to actively pursue and win contracts.</strong> You're registered, you know your market, and you want tools to find opportunities, reach decision-makers, and submit winning proposals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON WITH FEDSTART */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">FedStart vs Growth</h2>
            <p className="mt-4 text-lg text-slate-600">Growth includes everything in FedStart, plus capture tools and campaigns</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="p-4 text-left text-slate-600">Feature</th>
                  <th className="p-4 text-center">
                    <div className="font-bold text-slate-700">FedStart</div>
                    <div className="text-blue-600 font-bold">$3,200</div>
                  </th>
                  <th className="p-4 text-center bg-rose-50">
                    <div className="font-bold text-slate-900">Growth</div>
                    <div className="text-rose-600 font-bold">$6,500</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonWithFedStart.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                    <td className="p-3 text-slate-700">{row.feature}</td>
                    <td className="p-3 text-center">
                      {row.fedstart === true ? <Check size={18} className="mx-auto text-emerald-500" /> : 
                       row.fedstart === false ? <span className="text-slate-300">—</span> : 
                       <span className="text-slate-700">{row.fedstart}</span>}
                    </td>
                    <td className="p-3 text-center bg-rose-50">
                      {row.growth === true ? <Check size={18} className="mx-auto text-emerald-500" /> : 
                       row.growth === false ? <span className="text-slate-300">—</span> : 
                       <span className="text-rose-700 font-medium">{row.growth}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 C's COVERAGE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What Growth Covers</h2>
            <p className="mt-4 text-lg text-slate-600">Based on our proven 5 C's methodology</p>
          </div>

          <div className="grid gap-4">
            {fiveCsCoverage.map((item, i) => (
              <div 
                key={item.c}
                className={cn(
                  "p-6 rounded-xl border-2 flex items-center gap-6",
                  item.covered === true ? "bg-rose-50 border-rose-200" : 
                  item.covered === 'partial' ? "bg-amber-50 border-amber-200" : 
                  "bg-slate-100 border-slate-200"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold",
                  item.covered === true ? "bg-rose-600 text-white" :
                  item.covered === 'partial' ? "bg-amber-500 text-white" :
                  "bg-slate-300 text-slate-600"
                )}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900 text-lg">{item.c}</span>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      item.covered === true ? "bg-rose-600 text-white" :
                      item.covered === 'partial' ? "bg-amber-500 text-white" :
                      "bg-slate-200 text-slate-600"
                    )}>
                      {item.level}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1">{item.desc}</p>
                </div>
                {item.covered === true && <CheckCircle size={24} className="text-rose-600" />}
                {item.covered === 'partial' && <CheckCircle size={24} className="text-amber-500" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Complete Deliverables</h2>
            <p className="mt-4 text-lg text-slate-600">Everything included in your $6,500 investment</p>
          </div>

          <div className="space-y-12">
            {deliverables.map((category) => {
              const CatIcon = category.icon;
              const colorClasses = {
                slate: { bg: 'bg-slate-600', light: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
                rose: { bg: 'bg-rose-600', light: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
                amber: { bg: 'bg-amber-500', light: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
                blue: { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
                emerald: { bg: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">6-Month Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">From foundation to active pipeline pursuit</p>
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

      {/* WHY GROWTH */}
      <section className="py-20 bg-rose-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why Growth?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyGrowth.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-white/10 border border-white/10">
                  <Icon size={28} className="text-rose-300 mb-4" />
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-rose-200 mt-2">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOT INCLUDED + UPGRADE PATH */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Not Included */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Not Included</h3>
              <p className="text-slate-600 mb-4">These features are available in our Prime program:</p>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="text-slate-400">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Upgrade Path */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <Crown size={28} className="text-amber-600" />
                <h3 className="text-2xl font-bold text-slate-900">Ready for Prime?</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Want dedicated capture management and full proposal writing? Upgrade to Prime. Your <strong>full $6,500 Growth investment</strong> applies as credit — you're building on your momentum.
              </p>
              <div className="flex items-center gap-4">
                <LinkButton href="/programs/prime" className="bg-amber-600 text-white hover:bg-amber-700">
                  Learn About Prime
                  <ChevronRight size={18} className="ml-1" />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isExpanded = expandedFaq === i;
              return (
                <div key={i} className="border-2 border-slate-200 rounded-xl overflow-hidden bg-white">
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
      <section className="py-20 bg-gradient-to-br from-rose-900 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Build Your Federal Pipeline</h2>
          <p className="mt-4 text-xl text-rose-200">Tools, campaigns, and support to start winning.</p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="/register" className="px-10 py-4 bg-white text-rose-900 hover:bg-rose-50 text-lg">
              Start Growth — $6,500
              <ArrowRight size={20} className="ml-2" />
            </LinkButton>
            <LinkButton href={LINKS.booking} target="_blank" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10">
              Book Free Consultation
            </LinkButton>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-rose-200">
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