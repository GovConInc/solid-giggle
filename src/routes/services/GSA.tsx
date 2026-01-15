import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Shield,
  Zap,
  Calendar,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Layers,
  RefreshCw,
  BookOpen,
  HelpCircle,
  Phone,
  Mail,
  BarChart3,
  Settings,
  Upload,
  Award,
  Target,
  DollarSign,
  Star,
  BadgeCheck,
  Building2
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

// ============================================
// GSA MAS SUBMISSION DATA
// ============================================

const timeline = [
  { 
    phase: "Days 1-2", 
    task: "Kickoff Consultation", 
    desc: "Strategy alignment & document gathering roadmap",
    details: [
      "Review your business capabilities and target SINs",
      "Identify required vs optional documents",
      "Establish communication cadence",
      "Set milestone expectations"
    ],
    status: "kickoff"
  },
  { 
    phase: "Days 3-8", 
    task: "Document Collection", 
    desc: "Tax docs, financials, project history compilation",
    details: [
      "Federal tax returns (2 years minimum)",
      "Financial statements & balance sheet",
      "Past performance narratives (3-5 projects)",
      "Commercial price lists or invoices"
    ],
    status: "prep"
  },
  { 
    phase: "Days 9-13", 
    task: "eOffer Preparation", 
    desc: "Building the complete digital offer package",
    details: [
      "SAM.gov registration verification",
      "FAS ID creation and profile setup",
      "SIN selection and justification",
      "eOffer portal navigation and data entry"
    ],
    status: "prep"
  },
  { 
    phase: "Days 14-15", 
    task: "Holy Trinity Review", 
    desc: "Admin, Technical, and Pricing volumes",
    details: [
      "Administrative completeness check",
      "Technical capability validation",
      "Pricing structure verification",
      "Cross-reference all volumes for consistency"
    ],
    status: "review"
  },
  { 
    phase: "Days 16-20", 
    task: "Price & Tech Deep Dive", 
    desc: "Ensuring profitability and compliance",
    details: [
      "Commercial Sales Practice analysis",
      "Price escalation methodology",
      "Labor category descriptions",
      "Technical narrative refinement"
    ],
    status: "review"
  },
  { 
    phase: "Days 21-25", 
    task: "Final Polish", 
    desc: "White glove check for errors and omissions",
    details: [
      "Document formatting standardization",
      "Signature and certification verification",
      "Attachment checklist validation",
      "Pre-submission quality audit"
    ],
    status: "final"
  },
  { 
    phase: "Day 26-30", 
    task: "GSA Submission", 
    desc: "Official submission to Contracting Officer",
    details: [
      "Final eOffer package upload",
      "Confirmation receipt documentation",
      "CO assignment notification",
      "Clarification response preparation"
    ],
    status: "submit"
  },
];

// ============================================
// GSA BENEFITS DATA - HEAVY EMPHASIS
// ============================================

const gsaBenefits = [
  {
    title: "Pre-Vetted Credibility",
    desc: "Agencies trust GSA contractors—you've already passed rigorous government scrutiny",
    icon: BadgeCheck,
    stat: "80%",
    statLabel: "of agencies prefer GSA"
  },
  {
    title: "Streamlined Procurement",
    desc: "Agencies can buy from you in days, not months—no lengthy competitive bidding",
    icon: Zap,
    stat: "90%",
    statLabel: "faster procurement"
  },
  {
    title: "Massive Buying Pool",
    desc: "Access to $50B+ annual federal spending through GSA vehicles",
    icon: DollarSign,
    stat: "$50B+",
    statLabel: "annual spend"
  },
  {
    title: "Reduced Competition",
    desc: "Compete against 1,000s instead of 100,000s—only GSA contractors can bid",
    icon: Target,
    stat: "10X",
    statLabel: "less competition"
  },
  {
    title: "20-Year Contract",
    desc: "Initial 5-year base + three 5-year options = stable, long-term revenue",
    icon: Calendar,
    stat: "20yr",
    statLabel: "contract term"
  },
  {
    title: "GSA Advantage Visibility",
    desc: "Your products/services listed in the government's Amazon—agencies find you",
    icon: TrendingUp,
    stat: "24/7",
    statLabel: "visibility"
  }
];

// ============================================
// CONTRACT MANAGEMENT DATA
// ============================================

const contractManagementServices = [
  {
    title: "Sales Reporting",
    icon: BarChart3,
    description: "Quarterly IFF reporting and contractor sales data submission",
    tasks: [
      "Calculate Industrial Funding Fee (0.75%)",
      "Submit quarterly sales reports",
      "Maintain transaction records",
      "Resolve discrepancy notices"
    ],
    benefit: "Avoid $10K+ penalties for late/incorrect reporting"
  },
  {
    title: "Catalog Management",
    icon: Layers,
    description: "FCP catalog maintenance and GSA Advantage visibility",
    tasks: [
      "Product/service updates",
      "Pricing modifications",
      "New SIN additions",
      "Catalog refresh submissions"
    ],
    benefit: "Stay visible to buying agencies 24/7"
  },
  {
    title: "Contract Modifications",
    icon: RefreshCw,
    description: "Administrative and technical contract changes",
    tasks: [
      "Address changes",
      "POC updates",
      "Scope expansions",
      "Option year exercises"
    ],
    benefit: "Never miss an option renewal deadline"
  },
  {
    title: "Compliance Audits",
    icon: Shield,
    description: "Proactive compliance monitoring and issue resolution",
    tasks: [
      "TDR monitoring",
      "Price reduction compliance",
      "Audit preparation support",
      "Corrective action plans"
    ],
    benefit: "Prevent contract cancellation and penalties"
  }
];

const managementBenefits = [
  "Free up 10+ hours/month of admin time",
  "Zero compliance violations on managed contracts",
  "Expert handling of CO communications",
  "Proactive issue identification before audits",
  "Option renewals never missed",
  "Dedicated account manager on your side"
];

// ============================================
// FCP DATA
// ============================================

const fcpConsequences = [
  "Your catalog disappears from GSA Advantage",
  "Agencies can't find your products/services",
  "You can't respond to RFQs through eBuy",
  "Your GSA Schedule becomes effectively useless"
];

const fcpBenefits = [
  { title: "7-Day Guarantee", desc: "Complete migration in one week or it's free", icon: Zap },
  { title: "Data Validation", desc: "Ensure 100% accuracy before upload", icon: CheckCircle },
  { title: "System Training", desc: "Learn the new FCP workflow hands-on", icon: BookOpen },
  { title: "Ongoing Support", desc: "We're here when you need catalog updates", icon: Shield }
];

// ============================================
// FAQ DATA
// ============================================

const faqs = [
  {
    q: "How long does it take to get on the GSA Schedule?",
    a: "With our accelerated process, most clients receive their GSA Schedule within 4-6 months. The industry average is 12+ months. We achieve this through our 'Holy Trinity' review process that anticipates and addresses CO concerns before submission."
  },
  {
    q: "What are the minimum qualifications for GSA?",
    a: "You need 2 years of corporate experience, relevant past performance (typically 3-5 projects), and financial viability demonstrated through tax returns and financial statements. Specific requirements vary by SIN category."
  },
  {
    q: "What's the difference between MAS and OASIS+?",
    a: "MAS (Multiple Award Schedule) is GSA's primary contract vehicle for commercial products and services. OASIS+ is a specialized IDIQ for professional services requiring complex statements of work. We can help determine which is right for you."
  },
  {
    q: "What are the ongoing requirements after award?",
    a: "GSA contractors must submit quarterly sales reports, pay the 0.75% Industrial Funding Fee, maintain catalog pricing, respond to mass modifications, and ensure continued compliance with all terms. Our Contract Management service handles all of this."
  },
  {
    q: "Can you help if I already have a GSA Schedule?",
    a: "Absolutely. We provide ongoing Contract Management for existing GSA holders, including modifications, sales reporting, catalog updates, and compliance support. Many clients come to us after struggling to maintain their schedule on their own."
  }
];

// ============================================
// HERO STATS
// ============================================

const heroStats = [
  { value: "98%", label: "Approval Rate" },
  { value: "4-6", label: "Months to Award" },
  { value: "80+", label: "Active GSA Clients" },
  { value: "0", label: "Managed Contract Losses" }
];

export default function ServicesGSA() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeManagement, setActiveManagement] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"benefits" | "submission" | "management" | "fcp">("benefits");

  const getStatusColor = (status: string) => {
    switch(status) {
      case "kickoff": return "bg-gov-blue";
      case "prep": return "bg-gov-gold";
      case "review": return "bg-gov-crimson";
      case "final": return "bg-purple-500";
      case "submit": return "bg-gov-green";
      default: return "bg-slate-400";
    }
  };

  return (
    <>
      <Helmet>
        <title>GSA Schedule Services — GovCon Inc.</title>
        <meta name="description" content="Get on the GSA Schedule in 4-6 months with our proven process. 98% approval rate, complete contract management, and FCP baseline uploads." />
      </Helmet>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gov-blue/5 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue mb-6">
                <Award size={16} />
                GSA Schedule Services
              </div>
              
              <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
                Get on the GSA Schedule in <span className="text-gov-crimson">4-6 Months</span>
              </h1>
              
              <p className="mt-6 text-lg text-slate-700 leading-relaxed font-medium">
                Your gateway to $50B+ in federal spending. We get you on schedule faster than your competitors can even apply.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Start Application
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <LinkButton href="#process" variant="secondary" size="lg">
                  Our Process
                </LinkButton>
              </div>

              {/* Hero Stats */}
              <div className="mt-10 grid grid-cols-4 gap-4">
                {heroStats.map((stat, idx) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl font-bold text-gov-crimson">{stat.value}</div>
                    <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gov-crimson/10 via-gov-blue/5 to-transparent rounded-3xl" />
              
              {/* Urgent FCP Alert Card - More Prominent */}
              <Card className="relative p-6 bg-gov-crimson text-white border-gov-crimson mb-4 ring-2 ring-gov-crimson/50" hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-white/80 mb-1">CRITICAL UPDATE</div>
                    <h3 className="font-display text-lg font-bold">SIP is Dead. FCP is Here.</h3>
                    <p className="mt-2 text-white/90 text-sm leading-relaxed">
                      GSA retired the Schedule Input Program (SIP). If you haven't completed your 
                      FCP Baseline upload, your catalog will be removed from GSA Advantage.
                    </p>
                    <LinkButton 
                      href={LINKS.booking} 
                      target="_blank" 
                      rel="noreferrer"
                      className="mt-4 bg-white text-gov-crimson hover:bg-white/90 inline-flex"
                    >
                      Secure My FCP Baseline
                    </LinkButton>
                  </div>
                </div>
              </Card>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-white/80" hover={false}>
                  <div className="flex items-center gap-3">
                    <Zap size={20} className="text-gov-crimson" />
                    <div>
                      <div className="font-semibold text-gov-navy text-sm">7-Day FCP</div>
                      <div className="text-xs text-slate-500">Guaranteed upload</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-white/80" hover={false}>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-gov-green" />
                    <div>
                      <div className="font-semibold text-gov-navy text-sm">Zero Losses</div>
                      <div className="text-xs text-slate-500">On managed contracts</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICE TABS - ORDERED SEQUENCE */}
      {/* ============================================ */}
      <section id="process" className="bg-slate-50 py-20 scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">How We Help</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Your Complete GSA Solution
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We handle every step—from initial application through ongoing management—to ensure your success on the GSA Schedule.
            </p>
          </div>
          
          {/* Tab Navigation - Ordered Sequence */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "submission", label: "1. Get on Schedule", icon: FileText, desc: "The 30-day path to award" },
              { id: "management", label: "2. Manage & Grow", icon: Settings, desc: "Ongoing optimization" },
              { id: "fcp", label: "3. FCP Migration", icon: Upload, desc: "Critical baseline upload" },
              { id: "benefits", label: "Why GSA?", icon: Star, desc: "The strategic advantages" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "flex flex-col items-center gap-2 px-5 py-4 rounded-xl font-semibold transition-all w-full sm:w-auto",
                  activeTab === tab.id 
                    ? "bg-gov-navy text-white shadow-lg ring-2 ring-gov-crimson" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <div className="flex items-center gap-2">
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </div>
                <span className={cn(
                  "text-xs transition-colors",
                  activeTab === tab.id ? "text-slate-300" : "text-slate-500"
                )}>
                  {tab.desc}
                </span>
              </button>
            ))}
          </div>

          {/* ============================================ */}
          {/* BENEFITS TAB - WHY IT MATTERS */}
          {/* ============================================ */}
          {activeTab === "benefits" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gov-blue/10 text-gov-blue font-bold text-sm">
                  YOUR COMPETITIVE ADVANTAGE
                </div>
                <h2 className="font-display text-3xl font-bold text-gov-navy">
                  Why GSA is Your Unfair Advantage
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  A GSA Schedule isn't just a contract—it's a credential that opens doors, 
                  streamlines sales, and positions you ahead of 99% of federal contractors.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                {gsaBenefits.map((benefit, idx) => (
                  <Card 
                    key={benefit.title} 
                    className="p-6 hover:shadow-xl transition-all hover:border-gov-blue" 
                    hover
                  >
                    <div className="flex items-start gap-4 h-full flex-col">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                        <benefit.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gov-navy">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm mt-2 leading-relaxed">{benefit.desc}</p>
                      </div>
                      <div className="w-full pt-4 border-t border-slate-100">
                        <div className="font-display text-3xl font-bold text-gov-crimson">{benefit.stat}</div>
                        <div className="text-xs text-slate-500 font-medium">{benefit.statLabel}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Without vs With GSA - Clear Comparison */}
              <div className="my-12">
                <h3 className="font-display text-2xl font-bold text-gov-navy mb-8 text-center">The GSA Difference</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                  <Card className="p-8 border-l-4 border-l-slate-300 bg-slate-50" hover={false}>
                    <div className="mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Without GSA Schedule</div>
                      <h4 className="text-lg font-bold text-slate-800">Competing as an Unknown</h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        "Compete against 100,000+ vendors for every opportunity",
                        "6-12 month procurement cycles drain your resources",
                        "Agencies don't know you exist—you're invisible",
                        "Must re-prove qualifications on every single bid",
                        "Price negotiations happen publicly, reducing margins"
                      ].map(item => (
                        <li key={item} className="flex items-start gap-3 text-slate-700 font-medium">
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-8 border-l-4 border-l-gov-green bg-gov-green/5 ring-2 ring-gov-green/20" hover={false}>
                    <div className="mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-gov-green mb-2">With GSA Schedule</div>
                      <h4 className="text-lg font-bold text-gov-navy">Pre-Vetted & Trusted</h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        "Compete against a curated pool of qualified vendors",
                        "Agencies can purchase in days using existing contracts",
                        "Listed on GSA Advantage—agencies actively find you",
                        "Pre-vetted status means agencies trust you immediately",
                        "Your prices are pre-negotiated and protected"
                      ].map(item => (
                        <li key={item} className="flex items-start gap-3 text-gov-navy font-bold">
                          <CheckCircle size={20} className="text-gov-green shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 p-10 bg-gradient-to-r from-gov-navy to-gov-blue rounded-2xl text-white text-center">
                <h3 className="font-display text-3xl font-bold">Ready to Get Started?</h3>
                <p className="mt-4 text-lg text-slate-200 max-w-xl mx-auto leading-relaxed">
                  Our 98% approval rate and 4-6 month timeline means you'll be selling to 
                  agencies faster than your competitors can even submit an application.
                </p>
                <LinkButton 
                  href={LINKS.booking} 
                  target="_blank" 
                  rel="noreferrer"
                  size="lg"
                  className="mt-8 bg-white text-gov-navy hover:bg-white/90"
                >
                  Start Your GSA Application
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
              </div>
            </div>
          )}

          {/* ============================================ */}
          {/* MAS SUBMISSION TAB - FIRST STEP */}
          {/* ============================================ */}
          {activeTab === "submission" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gov-blue/10 text-gov-blue font-bold text-sm">
                  STEP 1 OF 3
                </div>
                <h2 className="font-display text-3xl font-bold text-gov-navy">
                  Get on the GSA Schedule in 30 Days
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  Our proven "Holy Trinity" review process examines every <strong>Administrative, Technical, and Pricing</strong> element 
                  before submission. The result? Faster awards and fewer clarifications.
                </p>
              </div>

              {/* Interactive Timeline */}
              <div className="mb-12">
                <div className="mb-6 p-4 bg-gov-blue/5 border border-gov-blue/20 rounded-xl">
                  <p className="text-sm text-gov-navy font-medium">
                    <strong>The Holy Trinity Process:</strong> We review every Administrative, Technical, and Pricing volume 
                    to ensure your package is perfect before submission to GSA.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-1 space-y-2">
                    {timeline.map((item, idx) => (
                      <button
                        key={item.phase}
                        onClick={() => setActiveTimeline(idx)}
                        className={cn(
                          "w-full text-left p-4 rounded-xl border-2 transition-all duration-300",
                          activeTimeline === idx 
                            ? "border-gov-blue bg-white shadow-lg" 
                            : "border-transparent bg-white/50 hover:bg-white"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-full text-white font-bold text-sm shrink-0",
                            getStatusColor(item.status)
                          )}>
                            {idx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-gov-blue uppercase">{item.phase}</span>
                            </div>
                            <div className="font-semibold text-gov-navy truncate">{item.task}</div>
                          </div>
                          <ChevronRight size={18} className={cn(
                            "text-slate-400 transition-transform shrink-0",
                            activeTimeline === idx && "rotate-90 text-gov-blue"
                          )} />
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="lg:col-span-2">
                    <Card className="p-8 h-full" hover={false}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={cn(
                          "flex h-14 w-14 items-center justify-center rounded-xl text-white font-display text-2xl font-bold shrink-0",
                          getStatusColor(timeline[activeTimeline].status)
                        )}>
                          {activeTimeline + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gov-blue uppercase">{timeline[activeTimeline].phase}</div>
                          <h3 className="font-display text-2xl font-bold text-gov-navy">
                            {timeline[activeTimeline].task}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 font-medium">{timeline[activeTimeline].desc}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gov-navy text-sm uppercase tracking-wider">Key Activities</h4>
                        {timeline[activeTimeline].details.map((detail, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg animate-fade-in-up"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <CheckCircle size={18} className="text-gov-green shrink-0 mt-0.5" />
                            <span className="text-slate-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-600 font-medium">Overall Progress</span>
                          <span className="font-semibold text-gov-navy">
                            {Math.round(((activeTimeline + 1) / timeline.length) * 100)}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-gov-blue to-gov-crimson rounded-full transition-all duration-500"
                            style={{ width: `${((activeTimeline + 1) / timeline.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* MAS Pricing */}
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <Card className="p-6 text-center" hover>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue mx-auto">
                    <FileText size={24} />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-gov-navy">Products Schedule</h3>
                  <p className="mt-2 text-sm text-slate-600">Commercial products and supplies</p>
                  <div className="mt-4">
                    <span className="text-sm text-slate-500">Starting at </span>
                    <span className="font-display text-3xl font-bold text-gov-crimson">$7,500</span>
                  </div>
                </Card>
                
                <Card className="p-6 text-center border-gov-blue ring-2 ring-gov-blue/20 relative" hover>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gov-blue px-3 py-1 text-xs font-bold text-white">
                      Most Common
                    </span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue text-white mx-auto">
                    <Users size={24} />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-gov-navy">Services Schedule</h3>
                  <p className="mt-2 text-sm text-slate-600">Professional and IT services</p>
                  <div className="mt-4">
                    <span className="text-sm text-slate-500">Starting at </span>
                    <span className="font-display text-3xl font-bold text-gov-crimson">$9,500</span>
                  </div>
                </Card>
                
                <Card className="p-6 text-center" hover>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-crimson/10 text-gov-crimson mx-auto">
                    <Layers size={24} />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-gov-navy">Combined Schedule</h3>
                  <p className="mt-2 text-sm text-slate-600">Products + Services together</p>
                  <div className="mt-4">
                    <span className="text-sm text-slate-500">Starting at </span>
                    <span className="font-display text-3xl font-bold text-gov-crimson">$12,500</span>
                  </div>
                </Card>
              </div>
              
              <p className="text-center text-sm text-slate-500 mt-4">
                Pricing varies based on SIN complexity, number of labor categories, and past performance requirements
              </p>
            </div>
          )}

          {/* ============================================ */}
          {/* CONTRACT MANAGEMENT TAB - STEP 2 */}
          {/* ============================================ */}
          {activeTab === "management" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gov-green/10 text-gov-green font-bold text-sm">
                  STEP 2 OF 3
                </div>
                <h2 className="font-display text-3xl font-bold text-gov-navy">
                  Manage Your GSA. You Win Contracts.
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  Managing a GSA Schedule is a full-time job. Sales reporting, catalog updates, 
                  modifications, compliance audits—we handle it all so you focus on winning work.
                </p>
              </div>

              {/* Management Benefits Banner */}
              <Card className="p-8 bg-gov-green/10 border-2 border-gov-green/30 mb-10" hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-green text-white">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-gov-navy">Why Outsource GSA Management?</h4>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {managementBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 text-gov-navy font-medium">
                      <CheckCircle size={18} className="text-gov-green shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-3">
                  {contractManagementServices.map((service, idx) => (
                    <button
                      key={service.title}
                      onClick={() => setActiveManagement(idx)}
                      className={cn(
                        "w-full text-left p-6 rounded-xl border-2 transition-all duration-300",
                        activeManagement === idx 
                          ? "border-gov-blue bg-white shadow-lg ring-2 ring-gov-blue/30" 
                          : "border-slate-200 bg-white hover:border-gov-blue/50 hover:shadow-md"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-lg transition-colors shrink-0",
                          activeManagement === idx ? "bg-gov-blue text-white" : "bg-slate-100 text-slate-600"
                        )}>
                          <service.icon size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gov-navy text-lg">{service.title}</div>
                          <p className="text-sm text-slate-600 mt-1">{service.description}</p>
                          <p className="text-xs text-gov-green font-bold mt-2">{service.benefit}</p>
                        </div>
                        <ChevronRight size={18} className={cn(
                          "text-slate-400 transition-transform shrink-0 mt-1",
                          activeManagement === idx && "rotate-90 text-gov-blue"
                        )} />
                      </div>
                    </button>
                  ))}
                </div>

                <Card className="p-8 bg-white border-2 border-slate-200" hover={false}>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gov-blue text-white shrink-0">
                      {(() => {
                        const Icon = contractManagementServices[activeManagement].icon;
                        return <Icon size={28} />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-gov-navy">
                        {contractManagementServices[activeManagement].title}
                      </h3>
                      <p className="text-slate-600 mt-2 font-medium">{contractManagementServices[activeManagement].description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-gov-navy text-sm uppercase tracking-wider">What We Handle</h4>
                    {contractManagementServices[activeManagement].tasks.map((task, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <CheckCircle size={18} className="text-gov-green shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{task}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-5 bg-gov-green/10 rounded-lg border-2 border-gov-green/30">
                    <div className="flex items-start gap-3">
                      <Star size={20} className="text-gov-green shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-gov-navy">Key Benefit</div>
                        <p className="text-slate-700 mt-1 font-medium">{contractManagementServices[activeManagement].benefit}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Management Pricing */}
              <div className="mt-12 p-8 bg-gov-navy rounded-2xl text-white">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="font-display text-2xl font-bold">GSA Contract Management</h3>
                    <p className="mt-3 text-slate-300">
                      Complete ongoing management of your GSA Schedule. We act as your de-facto 
                      POC with your GSA Specialist, handling everything from sales reporting to 
                      modification submissions.
                    </p>
                    <ul className="mt-6 space-y-2">
                      {[
                        "Quarterly IFF reporting",
                        "Catalog maintenance",
                        "All modification types",
                        "Compliance monitoring",
                        "Dedicated account manager"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle size={16} className="text-gov-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-sm text-slate-400">Starting at</div>
                    <div className="mt-1">
                      <span className="font-display text-5xl font-bold text-white">$350</span>
                      <span className="text-slate-400">/month</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">Pricing varies based on contract complexity</p>
                    <LinkButton 
                      href={LINKS.booking} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="mt-6"
                    >
                      Get Management Quote
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================ */}
          {/* FCP TAB - STEP 3 (CRITICAL) */}
          {/* ============================================ */}
          {activeTab === "fcp" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gov-crimson/10 text-gov-crimson font-bold text-sm">
                  STEP 3 OF 3 — CRITICAL DEADLINE
                </div>
                <h2 className="font-display text-3xl font-bold text-gov-navy">
                  FAS Catalog Platform (FCP) Migration
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  GSA has retired the Schedule Input Program (SIP) and moved to the new FAS Catalog 
                  Platform (FCP). This is the critical final step to maintain visibility.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <Card className="p-8 bg-gov-crimson/5 border-2 border-gov-crimson/30 mb-6" hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gov-crimson text-white shrink-0">
                        <AlertTriangle size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gov-navy">If You Don't Migrate...</h3>
                        <ul className="mt-4 space-y-3">
                          {fcpConsequences.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-slate-700 font-medium">
                              <div className="h-2 w-2 rounded-full bg-gov-crimson mt-2.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    {fcpBenefits.map((benefit) => (
                      <Card key={benefit.title} className="p-6 hover:shadow-lg transition-all" hover>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-blue/10 text-gov-blue mb-3">
                          <benefit.icon size={20} />
                        </div>
                        <h4 className="font-bold text-gov-navy text-sm">{benefit.title}</h4>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="p-8 bg-gradient-to-br from-gov-navy to-gov-blue text-white" hover={false}>
                  <h3 className="font-display text-2xl font-bold mb-6">FCP Migration Package</h3>
                  
                  <div className="space-y-5 mb-8">
                    <div className="p-5 bg-white/10 rounded-lg border border-white/20">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Zap size={18} className="text-gov-gold" />
                        Baseline Upload Includes
                      </h4>
                      <ul className="space-y-2.5">
                        {[
                          "Complete data migration from SIP to FCP",
                          "Catalog validation and error correction",
                          "GSA Advantage visibility verification",
                          "7-day completion guarantee"
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                            <CheckCircle size={16} className="text-gov-green shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-5 bg-white/10 rounded-lg border border-white/20">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <BookOpen size={18} className="text-gov-gold" />
                        Bonus Training Included
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "eBuy (RFQ Portal)",
                          "eMod (Modifications)",
                          "Sales Reporting",
                          "Catalog Management",
                          "GSA Advantage",
                          "Compliance Monitoring"
                        ].map((topic) => (
                          <div key={topic} className="flex items-center gap-2 text-sm text-slate-200">
                            <div className="h-1.5 w-1.5 rounded-full bg-gov-gold" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="text-sm text-slate-400 mb-2">Starting at</div>
                    <div className="mb-6">
                      <span className="font-display text-5xl font-bold text-white">$1,500</span>
                      <span className="text-slate-400"> flat fee</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-6">Complete migration with training and support</p>
                    <LinkButton 
                      href={LINKS.booking} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full bg-white text-gov-navy hover:bg-white/90 justify-center"
                    >
                      Start FCP Migration
                      <ArrowRight size={18} className="ml-2" />
                    </LinkButton>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Questions?</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Getting on the GSA Schedule can feel overwhelming. Here are answers to the 
                questions we hear most often from contractors like you.
              </p>
              
              <Card className="mt-10 p-8 bg-gradient-to-br from-gov-blue/10 to-gov-blue/5 border-2 border-gov-blue/20" hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gov-blue text-white shrink-0">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gov-navy text-lg">Still have questions?</div>
                    <p className="text-sm text-slate-600 mt-2">Book a free 30-minute consultation to discuss your specific situation and get personalized guidance.</p>
                    <LinkButton 
                      href={LINKS.booking} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="mt-5 w-full justify-center"
                    >
                      Book Free Consultation
                      <ArrowRight size={16} className="ml-2" />
                    </LinkButton>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border-2 border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-6 flex items-start justify-between text-left hover:bg-slate-50 transition-colors group"
                  >
                    <span className="font-bold text-gov-navy pr-4 text-lg">{faq.q}</span>
                    <ChevronDown 
                      size={22} 
                      className={cn(
                        "text-slate-400 transition-transform duration-300 shrink-0 mt-0.5 group-hover:text-gov-blue",
                        activeFaq === idx && "rotate-180 text-gov-blue"
                      )} 
                    />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeFaq === idx ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="px-6 pb-6 text-slate-700 leading-relaxed border-t border-slate-200">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <Section title="Ready to Launch Your Federal Business?" kicker="Take the Next Step" dark>
        <Card className="p-10 bg-white/5 border-2 border-white/20 hover:border-white/40 transition-all" hover={false}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h3 className="font-display text-3xl font-bold text-white">
                Let's discuss your GSA goals
              </h3>
              <p className="mt-4 text-lg text-slate-200 leading-relaxed max-w-xl">
                We'll review your qualifications, recommend the right SINs, and outline 
                your path to federal revenue. The consultation is free and there's no obligation.
              </p>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-gold/20 text-gov-gold shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Phone</div>
                    <div className="text-white font-semibold">(813) 665-0308</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-gold/20 text-gov-gold shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Email</div>
                    <div className="text-white font-semibold">info@govcon.info</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-gold/20 text-gov-gold shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Duration</div>
                    <div className="text-white font-semibold">30 minutes</div>
                  </div>
                </div>
              </div>
            </div>
            
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0 bg-white text-gov-navy hover:bg-white/90 self-start lg:self-auto"
            >
              Schedule Now
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}