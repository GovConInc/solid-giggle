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
  Target
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

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
    ]
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
    ]
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
    ]
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
    ]
  }
];

const masModifications = [
  { name: "Administrative Mod", desc: "POC, address, banking changes", time: "2-4 weeks" },
  { name: "Pricing Mod", desc: "Rate updates, escalation, new labor categories", time: "4-8 weeks" },
  { name: "Scope Mod", desc: "New SINs, product/service additions", time: "6-12 weeks" },
  { name: "Option Renewal", desc: "5-year option period exercise", time: "30-60 days before expiry" },
  { name: "Mass Mod", desc: "GSA-issued mandatory changes", time: "As required" },
  { name: "Refresh Mod", desc: "Comprehensive contract update", time: "8-16 weeks" }
];

const fcpFeatures = [
  {
    title: "Data Migration",
    description: "Complete transfer from legacy SIP to new FCP platform",
    icon: Upload
  },
  {
    title: "Catalog Validation",
    description: "Ensure all products/services display correctly on GSA Advantage",
    icon: CheckCircle
  },
  {
    title: "System Training",
    description: "Hands-on training for your team on new FCP workflows",
    icon: BookOpen
  },
  {
    title: "7-Day Guarantee",
    description: "Baseline upload completed within one week or it's free",
    icon: Zap
  }
];

const fcpTrainingTopics = [
  "eBuy (GSA's RFQ Portal)",
  "eMod (Modification Submission)",
  "Sales Reporting Dashboard",
  "Catalog Management",
  "GSA Advantage Optimization",
  "Compliance Monitoring"
];

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

export default function ServicesGSA() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeManagement, setActiveManagement] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"submission" | "management" | "fcp">("submission");

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
        <meta name="description" content="Get on the GSA Schedule in 4-6 months with our proven process. MAS submissions, contract management, and FCP baseline uploads." />
      </Helmet>

      {/* Hero */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gov-blue/5 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue mb-6">
                <Award size={16} />
                GSA Contract Vehicles
              </div>
              
              <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
                GSA Schedule Services
              </h1>
              
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Getting on the GSA Schedule is a rigorous 12-month process for most. 
                We do it in <span className="text-gov-crimson font-semibold">4-6 months</span> with our "Holy Trinity" review process.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-display text-2xl font-bold text-gov-crimson">80+</div>
                  <div className="text-xs text-slate-600 mt-1">Active GSA Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-display text-2xl font-bold text-gov-crimson">98%</div>
                  <div className="text-xs text-slate-600 mt-1">Award Success Rate</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-display text-2xl font-bold text-gov-crimson">4-6</div>
                  <div className="text-xs text-slate-600 mt-1">Months to Award</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Start GSA Application
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <LinkButton href="#services" variant="secondary" size="lg">
                  View All GSA Services
                </LinkButton>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gov-crimson/10 via-gov-blue/5 to-transparent rounded-3xl" />
              
              {/* FCP Alert Card */}
              <Card className="relative p-6 bg-gov-crimson text-white border-gov-crimson" hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">SIP is Dead. FCP is Here.</h3>
                    <p className="mt-2 text-white/90 text-sm">
                      GSA retired the Schedule Input Program (SIP). If you haven't completed your 
                      FCP Baseline upload, your catalog will be removed from GSA Advantage.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <LinkButton 
                        href={LINKS.booking} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white text-gov-crimson hover:bg-white/90"
                      >
                        Secure My FCP Baseline
                      </LinkButton>
                      <a 
                        href="https://catalog.gsa.gov"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                      >
                        Visit Catalog Portal
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Card className="p-4" hover={false}>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-gov-blue" />
                    <div>
                      <div className="font-semibold text-gov-navy">7-Day FCP</div>
                      <div className="text-xs text-slate-500">Guaranteed upload</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4" hover={false}>
                  <div className="flex items-center gap-3">
                    <Target size={20} className="text-gov-green" />
                    <div>
                      <div className="font-semibold text-gov-navy">0 Rejections</div>
                      <div className="text-xs text-slate-500">On managed contracts</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section id="services" className="bg-slate-50 py-20 scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "submission", label: "GSA MAS Submission", icon: FileText },
              { id: "management", label: "Contract Management", icon: Settings },
              { id: "fcp", label: "FCP Baseline Upload", icon: Upload }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all",
                  activeTab === tab.id 
                    ? "bg-gov-navy text-white shadow-lg" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* MAS Submission Tab */}
          {activeTab === "submission" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">GSA MAS Submission</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                  Your 30-45 Day Roadmap to GSA Award
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  Our "Holy Trinity" review process examines every Administrative, Technical, and 
                  Pricing element before submission. The result? Faster awards with fewer clarifications.
                </p>
              </div>

              {/* Interactive Timeline */}
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
                          "flex h-10 w-10 items-center justify-center rounded-full text-white font-bold text-sm",
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
                        "flex h-14 w-14 items-center justify-center rounded-xl text-white font-display text-2xl font-bold",
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
                    
                    <p className="text-slate-600 mb-6">{timeline[activeTimeline].desc}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gov-navy text-sm uppercase tracking-wider">Key Activities</h4>
                      {timeline[activeTimeline].details.map((detail, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg animate-fade-in-up"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <CheckCircle size={18} className="text-gov-green shrink-0" />
                          <span className="text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-slate-600">Overall Progress</span>
                        <span className="font-semibold text-gov-navy">
                          {Math.round(((activeTimeline + 1) / timeline.length) * 100)}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-gov-blue to-gov-crimson rounded-full transition-all duration-500"
                          style={{ width: `${((activeTimeline + 1) / timeline.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </Card>
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
                
                <Card className="p-6 text-center border-gov-blue ring-2 ring-gov-blue/20" hover>
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

          {/* Contract Management Tab */}
          {activeTab === "management" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Contract Management</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                  We Manage Your GSA. You Win Contracts.
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  Managing a GSA Schedule is a full-time job. Sales reporting, catalog updates, 
                  modifications, compliance audits—we handle it all so you can focus on winning work.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  {contractManagementServices.map((service, idx) => (
                    <button
                      key={service.title}
                      onClick={() => setActiveManagement(idx)}
                      className={cn(
                        "w-full text-left p-5 rounded-xl border-2 transition-all duration-300",
                        activeManagement === idx 
                          ? "border-gov-blue bg-white shadow-lg" 
                          : "border-transparent bg-white hover:border-slate-200"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                          activeManagement === idx ? "bg-gov-blue text-white" : "bg-slate-100 text-slate-600"
                        )}>
                          <service.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gov-navy">{service.title}</div>
                          <p className="text-sm text-slate-500">{service.description}</p>
                        </div>
                        <ChevronRight size={18} className={cn(
                          "text-slate-400 transition-transform",
                          activeManagement === idx && "rotate-90 text-gov-blue"
                        )} />
                      </div>
                    </button>
                  ))}
                </div>

                <Card className="p-8" hover={false}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gov-blue text-white">
                      {(() => {
                        const Icon = contractManagementServices[activeManagement].icon;
                        return <Icon size={28} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-gov-navy">
                        {contractManagementServices[activeManagement].title}
                      </h3>
                      <p className="text-slate-600">{contractManagementServices[activeManagement].description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gov-navy text-sm uppercase tracking-wider">What We Handle</h4>
                    {contractManagementServices[activeManagement].tasks.map((task, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <CheckCircle size={18} className="text-gov-green shrink-0" />
                        <span className="text-slate-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Modification Types */}
              <div className="mt-16">
                <h3 className="font-display text-xl font-bold text-gov-navy mb-6">Contract Modifications We Handle</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {masModifications.map((mod) => (
                    <Card key={mod.name} className="p-5" hover>
                      <h4 className="font-semibold text-gov-navy">{mod.name}</h4>
                      <p className="text-sm text-slate-600 mt-1">{mod.desc}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-gov-blue">
                        <Clock size={14} />
                        {mod.time}
                      </div>
                    </Card>
                  ))}
                </div>
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

          {/* FCP Tab */}
          {activeTab === "fcp" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <p className="text-sm font-bold uppercase tracking-wider text-gov-crimson">URGENT: FCP Baseline Upload</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                  Don't Lose Your GSA Advantage Visibility
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  GSA has retired the Schedule Input Program (SIP) and moved to the new FAS Catalog 
                  Platform (FCP). Without a baseline upload, your products and services will disappear 
                  from GSA Advantage.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <Card className="p-8 bg-gov-crimson/5 border-gov-crimson/20" hover={false}>
                    <div className="flex items-start gap-4">
                      <AlertTriangle size={32} className="text-gov-crimson shrink-0" />
                      <div>
                        <h3 className="font-bold text-xl text-gov-navy">What Happens If You Don't Migrate?</h3>
                        <ul className="mt-4 space-y-3">
                          {[
                            "Your catalog disappears from GSA Advantage",
                            "Agencies can't find your products/services",
                            "You can't respond to RFQs through eBuy",
                            "Your GSA Schedule becomes effectively useless"
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2 text-slate-700">
                              <div className="h-2 w-2 rounded-full bg-gov-crimson mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {fcpFeatures.map((feature) => (
                      <Card key={feature.title} className="p-5" hover>
                        <feature.icon size={24} className="text-gov-blue" />
                        <h4 className="mt-3 font-semibold text-gov-navy">{feature.title}</h4>
                        <p className="mt-1 text-sm text-slate-600">{feature.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="p-8 bg-gov-navy text-white" hover={false}>
                  <h3 className="font-display text-2xl font-bold">Complete FCP Migration Package</h3>
                  
                  <div className="mt-6 space-y-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-3">Baseline Upload Includes:</h4>
                      <ul className="space-y-2">
                        {[
                          "Complete data migration from SIP to FCP",
                          "Catalog validation and error correction",
                          "GSA Advantage visibility verification",
                          "7-day completion guarantee"
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                            <CheckCircle size={16} className="text-gov-green" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-3">Bonus Training Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {fcpTrainingTopics.map((topic) => (
                          <div key={topic} className="flex items-center gap-2 text-sm text-slate-200">
                            <BookOpen size={14} className="text-gov-gold" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-400">FCP Migration</div>
                        <div className="mt-1">
                          <span className="text-sm text-slate-400">Starting at </span>
                          <span className="font-display text-4xl font-bold text-white">$1,500</span>
                          <span className="text-slate-400"> flat</span>
                        </div>
                      </div>
                      <LinkButton 
                        href={LINKS.booking} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white text-gov-navy hover:bg-white/90"
                      >
                        Start FCP Migration
                      </LinkButton>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">FAQ</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Common Questions About GSA
              </h2>
              <p className="mt-4 text-slate-600">
                Getting on the GSA Schedule can feel overwhelming. Here are answers to the 
                questions we hear most often.
              </p>
              
              <Card className="mt-8 p-6 bg-slate-50" hover={false}>
                <div className="flex items-center gap-4">
                  <HelpCircle size={24} className="text-gov-blue" />
                  <div>
                    <div className="font-semibold text-gov-navy">Still have questions?</div>
                    <p className="text-sm text-slate-600">Book a free consultation to discuss your specific situation.</p>
                  </div>
                </div>
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" className="mt-4 w-full justify-center">
                  Book Free Consultation
                </LinkButton>
              </Card>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-gov-navy pr-4">{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      className={cn(
                        "text-slate-400 transition-transform duration-300 shrink-0",
                        activeFaq === idx && "rotate-180"
                      )} 
                    />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeFaq === idx ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="p-5 pt-0 text-slate-600">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Ready to Get on Schedule?" kicker="Next Steps" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's discuss your GSA goals
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll review your qualifications, recommend the right SINs, and outline 
                the path to award. The consultation is free and there's no obligation.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone size={16} />
                  (813) 665-0308
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail size={16} />
                  info@govcon.info
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar size={16} />
                  30-minute strategy call
                </div>
              </div>
            </div>
            
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Book Consultation
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
