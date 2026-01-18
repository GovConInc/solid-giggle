import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, Clock, Rocket, 
  Calendar, Phone, Mail, Shield, Check, FileText,
  MessageSquare, ChevronDown, ChevronRight,
  Timer, Lightbulb, Star, Users, Target,
  Zap, TrendingUp, AlertCircle, Gift
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

// ============================================
// FEDSTART PROGRAM PAGE
// ============================================

const keyMetrics = [
  { metric: '5 Days', label: 'SAM.gov Registration', icon: Timer },
  { metric: '14 Days', label: 'SBA Cert Submission', icon: FileText },
  { metric: '1,000', label: 'Marketing Contacts', icon: Users },
  { metric: 'Monthly', label: 'Strategy Calls', icon: Calendar },
];

const deliverables = [
  {
    category: 'Compliance Services',
    icon: Shield,
    color: 'blue',
    items: [
      { 
        name: 'SAM.gov Registration & Optimization', 
        timeline: '5 Business Days',
        description: 'Complete System for Award Management registration including CAGE code acquisition, UEI validation, entity information, NAICS code selection, and profile optimization.',
        details: [
          'Entity registration and validation',
          'CAGE code acquisition',
          'NAICS code strategy (up to 10 codes)',
          'Goods/services classification',
          'Core data optimization for searchability',
          'Representations and certifications',
        ]
      },
      { 
        name: 'DSBS Profile Creation', 
        timeline: '14 Business Days',
        description: 'SBA Dynamic Small Business Search profile — the database contracting officers are required to check before making awards under $250K.',
        details: [
          'Profile creation and optimization',
          'Capability narrative development',
          'Keyword optimization for searches',
          'Certification linkage',
          'Search ranking improvement',
        ]
      },
      { 
        name: 'FEMA Vendor Portal Registration', 
        timeline: '14 Business Days',
        description: 'Access to FEMA emergency response contracting — a massive market most contractors completely miss.',
        details: [
          'Vendor portal registration',
          'Capability documentation',
          'Emergency response classification',
          'Geographic coverage setup',
        ]
      },
      { 
        name: 'SBA Certification Submissions', 
        timeline: '14 Days to Submit',
        description: 'We analyze your eligibility and submit applications for every SBA certification you qualify for.',
        details: [
          'Eligibility analysis for all programs',
          '8(a) Business Development application',
          'WOSB/EDWOSB certification',
          'SDVOSB/VOSB certification',
          'HUBZone certification',
          'Documentation preparation',
          'Application submission and tracking',
        ]
      },
    ]
  },
  {
    category: 'Concept Development',
    icon: Lightbulb,
    color: 'emerald',
    items: [
      { 
        name: 'Professional Capabilities Statement', 
        timeline: 'Weeks 2-3',
        description: 'The single most important marketing document in federal contracting. Professionally designed to make an impression in 30 seconds.',
        details: [
          'Professional graphic design',
          'Core competency articulation',
          'Differentiator identification',
          'Past performance formatting',
          'Certification and contact display',
          'Print-ready and digital versions',
          'Editable template for updates',
        ]
      },
      { 
        name: 'Marketing Strategy Document', 
        timeline: 'Week 4',
        description: 'Your attack plan. Which agencies, which opportunities, which approach — customized to your capabilities.',
        details: [
          'Target agency identification (top 10)',
          'Agency spend analysis',
          'Competitor landscape overview',
          'Approach strategy recommendations',
          'Introduction templates',
          'Timeline and milestones',
        ]
      },
      { 
        name: '1,000 Targeted Contacts', 
        timeline: 'Week 4',
        description: 'Curated contact list of contracting officers, small business specialists, and program managers at your target agencies.',
        details: [
          '400 Contracting Officers',
          '200 Small Business Specialists',
          '200 Program Managers',
          '200 Prime Contractors',
          'Contact verification',
          'Agency and role mapping',
        ]
      },
    ]
  },
  {
    category: 'Ongoing Support',
    icon: MessageSquare,
    color: 'rose',
    items: [
      { 
        name: 'Monthly Capture Calls', 
        timeline: 'Months 1-3',
        description: 'Standing strategy sessions to review progress, answer questions, and adjust approach.',
        details: [
          '60-minute monthly calls',
          'Opportunity review',
          'Strategy adjustments',
          'Q&A sessions',
          'Introduction facilitation',
        ]
      },
      { 
        name: 'One RFP Review', 
        timeline: 'When Ready',
        description: 'Professional review of your first proposal before submission.',
        details: [
          'Compliance matrix verification',
          'Technical approach review',
          'Pricing sanity check',
          'Narrative strengthening',
          'Submission checklist',
        ]
      },
    ]
  },
];

const timeline = [
  { phase: 'Week 1', title: 'Kickoff & SAM.gov', items: ['Initial consultation & document collection', 'SAM.gov registration submitted', 'CAGE code initiated'], color: 'blue' },
  { phase: 'Week 2', title: 'Registrations & Certs', items: ['DSBS profile created', 'FEMA portal registration', 'SBA certification applications submitted'], color: 'emerald' },
  { phase: 'Weeks 3-4', title: 'Marketing Foundation', items: ['Capabilities statement design', 'Marketing strategy document', '1,000 contacts delivered'], color: 'amber' },
  { phase: 'Months 2-3', title: 'Ongoing Support', items: ['Monthly strategy calls', 'Opportunity guidance', 'RFP review when ready'], color: 'rose' },
];

const fiveCsCoverage = [
  { c: 'Compliance', level: 'Full', covered: true, desc: 'All registrations, certifications, and compliance requirements' },
  { c: 'Concept', level: 'Foundation', covered: true, desc: 'Capabilities statement, marketing strategy, and contact lists' },
  { c: 'Capture', level: '—', covered: false, desc: 'Available in Growth program' },
  { c: 'Compete', level: '1 Review', covered: 'partial', desc: 'One RFP review included' },
  { c: 'Continue', level: '—', covered: false, desc: 'Available in Prime program' },
];

const whyFedStart = [
  { title: 'Guaranteed Timelines', desc: '5-day SAM.gov, 14-day certifications — or your money back', icon: Timer },
  { title: 'Professional Foundation', desc: 'Materials that make you look like a serious federal contractor', icon: Star },
  { title: 'Expert Guidance', desc: 'Monthly calls with consultants who have 15+ years of experience', icon: Users },
  { title: 'Upgrade Anytime', desc: 'Full FedStart investment applies as credit toward Growth', icon: TrendingUp },
];

const notIncluded = [
  'GovCon Portal access (opportunity database)',
  'Marketing campaign execution',
  'Multiple proposal reviews',
  'Dedicated capture management',
];

const faqs = [
  {
    q: 'How long does the program take?',
    a: 'The core deliverables are completed within 30 days. Monthly strategy calls continue through month 3, and your RFP review can be used anytime during the engagement.',
  },
  {
    q: 'What documents do I need to provide?',
    a: 'We need basic business information: EIN, business address, banking info for SAM.gov, and any existing certifications. We provide a complete checklist at kickoff.',
  },
  {
    q: 'What if I don\'t qualify for any SBA certifications?',
    a: 'We still complete all registrations and marketing materials. The certification analysis itself is valuable — you\'ll know exactly where you stand and what might be possible in the future.',
  },
  {
    q: 'Can I upgrade to Growth later?',
    a: 'Absolutely. Your full $3,200 FedStart investment applies as credit toward Growth. Most clients upgrade within 60 days once they see opportunities they want to pursue.',
  },
  {
    q: 'Is this for new contractors only?',
    a: 'FedStart is ideal for new contractors, but also works for established businesses that have been doing government work informally and need to get properly registered and positioned.',
  },
];

export default function FedStartProgram() {
  const [expandedDeliverable, setExpandedDeliverable] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>FedStart Program — Your Federal Contractor Foundation | GovCon Inc.</title>
        <meta name="description" content="Launch your federal contracting business in 30 days. SAM.gov registration, SBA certifications, capabilities statement, and marketing foundation. $3,200." />
      </Helmet>

      {/* HERO */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-sm text-blue-200 mb-6 border border-blue-400/30">
                <Rocket size={16} />
                Marketing Program
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                FedStart
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Your Compliance Foundation
                </span>
              </h1>

              <p className="mt-6 text-xl text-blue-100 leading-relaxed">
                Everything you need to become a qualified, visible federal contractor. We handle all your registrations, certifications, and create your first marketing foundation — so you can start pursuing contracts within 30 days.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <div className="text-5xl font-bold text-white">$3,200</div>
                  <div className="text-blue-300">3 Month Program</div>
                </div>
                <LinkButton href="/register" className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 text-lg">
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </LinkButton>
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Guaranteed timelines
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Full credit toward upgrade
                </span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {keyMetrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                    <Icon size={24} className="text-blue-300 mb-3" />
                    <div className="text-3xl font-bold text-white">{m.metric}</div>
                    <div className="text-blue-200">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="py-16 bg-blue-50 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center">
                <Target size={40} className="text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Ideal For</h2>
              <p className="text-lg text-slate-600">
                <strong>New contractors entering the federal market.</strong> You have a business, you know what you sell, and you're ready to pursue government contracts — but you need the registrations, certifications, and marketing foundation to compete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 C's COVERAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What FedStart Covers</h2>
            <p className="mt-4 text-lg text-slate-600">Based on our proven 5 C's methodology</p>
          </div>

          <div className="grid gap-4">
            {fiveCsCoverage.map((item, i) => (
              <div 
                key={item.c}
                className={cn(
                  "p-6 rounded-xl border-2 flex items-center gap-6",
                  item.covered === true ? "bg-blue-50 border-blue-200" : 
                  item.covered === 'partial' ? "bg-amber-50 border-amber-200" : 
                  "bg-slate-50 border-slate-200"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold",
                  item.covered === true ? "bg-blue-600 text-white" :
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
                      item.covered === true ? "bg-blue-600 text-white" :
                      item.covered === 'partial' ? "bg-amber-500 text-white" :
                      "bg-slate-200 text-slate-600"
                    )}>
                      {item.level}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1">{item.desc}</p>
                </div>
                {item.covered === true && <CheckCircle size={24} className="text-blue-600" />}
                {item.covered === 'partial' && <CheckCircle size={24} className="text-amber-500" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Complete Deliverables</h2>
            <p className="mt-4 text-lg text-slate-600">Everything included in your $3,200 investment</p>
          </div>

          <div className="space-y-12">
            {deliverables.map((category) => {
              const CatIcon = category.icon;
              const colorClasses = {
                blue: { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
                emerald: { bg: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
                rose: { bg: 'bg-rose-600', light: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
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
                          className={cn("bg-white rounded-2xl border-2 overflow-hidden transition-all", colorClasses.border)}
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
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">3-Month Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">From kickoff to fully positioned federal contractor</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 via-amber-500 to-rose-500" />

            <div className="grid lg:grid-cols-4 gap-8">
              {timeline.map((t, i) => {
                const colorClasses = {
                  blue: 'bg-blue-600',
                  emerald: 'bg-emerald-600',
                  amber: 'bg-amber-500',
                  rose: 'bg-rose-600',
                }[t.color];
                
                return (
                  <div key={t.phase} className="relative">
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto lg:mx-0 mb-4 relative z-10", colorClasses)}>
                      {i + 1}
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{t.phase}</div>
                      <h4 className="font-bold text-slate-900 text-lg mt-1">{t.title}</h4>
                      <ul className="mt-3 space-y-2">
                        {t.items.map((item, j) => (
                          <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                            <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
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

      {/* WHY FEDSTART */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why FedStart?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyFedStart.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-white/10 border border-white/10">
                  <Icon size={28} className="text-blue-300 mb-4" />
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-blue-200 mt-2">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOT INCLUDED + UPGRADE PATH */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Not Included */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Not Included</h3>
              <p className="text-slate-600 mb-4">These features are available in our Growth and Prime programs:</p>
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
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border-2 border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <Gift size={28} className="text-emerald-600" />
                <h3 className="text-2xl font-bold text-slate-900">Ready to Grow?</h3>
              </div>
              <p className="text-slate-600 mb-6">
                When you're ready to actively pursue opportunities, upgrade to Growth. Your <strong>full $3,200 FedStart investment</strong> applies as credit — so you're not starting over, you're building on your foundation.
              </p>
              <div className="flex items-center gap-4">
                <LinkButton href="/programs/growth" className="bg-emerald-600 text-white hover:bg-emerald-700">
                  Learn About Growth
                  <ChevronRight size={18} className="ml-1" />
                </LinkButton>
              </div>
            </div>
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
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Start Your Federal Journey</h2>
          <p className="mt-4 text-xl text-blue-200">Get compliant, get visible, get winning.</p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="/register" className="px-10 py-4 bg-white text-blue-900 hover:bg-blue-50 text-lg">
              Start FedStart — $3,200
              <ArrowRight size={20} className="ml-2" />
            </LinkButton>
            <LinkButton href={LINKS.booking} target="_blank" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10">
              Book Free Consultation
            </LinkButton>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
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