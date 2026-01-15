import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, FileText, Users, Award, Clock, 
  Target, Lightbulb, Zap, BookOpen, TrendingUp, Shield,
  ChevronDown, ChevronRight, Star, Sparkles, Download,
  DollarSign, BarChart3, Rocket, Building2, FileCheck,
  PenTool, Eye, ClipboardCheck, MessageSquare, Layers,
  Calendar, Phone, Mail, BadgeCheck, Trophy, Briefcase
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

// ============================================
// PROGRAMS DATA - FedStart, FedScale, FedPrime
// ============================================

const programs = [
  {
    id: "fedstart",
    name: "FedStart",
    tagline: "Launch into Federal Contracting",
    icon: Rocket,
    color: "gov-blue",
    price: "$2,400",
    priceNote: "one-time",
    idealFor: "New contractors entering the federal market",
    description: "Everything you need to become a qualified federal contractor in 30 days or less.",
    benefits: [
      { title: "Win Your First Contract Faster", desc: "Average FedStart clients land their first opportunity within 90 days of completion" },
      { title: "Avoid Costly Mistakes", desc: "Skip the 18-month learning curve that costs most new contractors $50K+ in wasted pursuit costs" },
      { title: "Stand Out Immediately", desc: "Proper positioning means agencies find YOU instead of you chasing dead-end opportunities" },
      { title: "Expert Guidance", desc: "Our consultants have helped 200+ contractors launch successfully—we know what works" },
      { title: "Foundation for Growth", desc: "Everything built in FedStart supports your growth to FedScale and beyond" },
      { title: "RFP-Ready Templates", desc: "Download professional RFP response templates customized to your business" }
    ],
    includes: [
      "SAM.gov registration + profile optimization",
      "NAICS code analysis and selection",
      "Capability Statement creation",
      "SBA certification eligibility review",
      "Socioeconomic positioning strategy",
      "Contract vehicle roadmap",
      "30-day action plan",
      "RFP Response Template Package",
      "2 strategy calls with consultant"
    ],
    stats: [
      { value: "30", label: "Days to Launch", icon: Calendar },
      { value: "90", label: "Days to First Opp", icon: Target },
      { value: "200+", label: "Contractors Launched", icon: Rocket }
    ],
    rfpTemplates: [
      { name: "Technical Approach Template", desc: "Structured framework for articulating your solution", format: "DOCX" },
      { name: "Past Performance Questionnaire", desc: "Professional PPQ form for collecting references", format: "PDF" },
      { name: "Management Plan Template", desc: "Organizational approach and staffing framework", format: "DOCX" },
      { name: "Compliance Matrix", desc: "Requirement tracking spreadsheet", format: "XLSX" },
      { name: "Executive Summary Template", desc: "One-page capture document framework", format: "DOCX" },
      { name: "Pricing Worksheet", desc: "Labor category and cost build-up template", format: "XLSX" }
    ]
  },
  {
    id: "fedscale",
    name: "FedScale",
    tagline: "Accelerate Your Growth",
    icon: TrendingUp,
    color: "gov-crimson",
    price: "$8,500",
    priceNote: "one-time",
    idealFor: "Contractors ready to expand beyond initial wins",
    description: "Strategic expansion for contractors who have their foundation and are ready to scale.",
    benefits: [
      { title: "10X Your Pipeline", desc: "FedScale clients average 3-5X increase in qualified opportunities within 6 months" },
      { title: "Higher Win Rates", desc: "Targeted pursuit strategy means you bid smarter—not just more often" },
      { title: "Contract Vehicle Access", desc: "Get on the vehicles that matter for your market—GSA, OASIS+, agency-specific BPAs" },
      { title: "Teaming That Works", desc: "We connect you with strategic partners who actually want to mentor and subcontract" },
      { title: "Sustainable Growth", desc: "Build infrastructure that supports $1M, $5M, $10M+ revenue goals" },
      { title: "Capture Management System", desc: "Process and tools to track and win opportunities consistently" }
    ],
    includes: [
      "Pipeline development and qualification",
      "Contract vehicle strategy + applications",
      "GSA Schedule preparation support",
      "Teaming partner identification",
      "Capture management process setup",
      "Competitive intelligence gathering",
      "Past performance optimization",
      "Quarterly business reviews",
      "Priority proposal support queue"
    ],
    stats: [
      { value: "3-5X", label: "Pipeline Growth", icon: TrendingUp },
      { value: "40%", label: "Avg Win Rate Increase", icon: Trophy },
      { value: "$50M+", label: "Client Contract Wins", icon: DollarSign }
    ]
  },
  {
    id: "fedprime",
    name: "FedPrime",
    tagline: "Dominate Your Market",
    icon: Trophy,
    color: "gov-gold",
    price: "$15,500",
    priceNote: "annual retainer",
    idealFor: "Established contractors pursuing large prime contracts",
    description: "Full-service strategic partnership for contractors pursuing multi-million dollar prime contracts.",
    benefits: [
      { title: "Prime Contract Ready", desc: "Position for and win prime contracts worth $5M-$50M+" },
      { title: "Agency Relationships", desc: "Build the relationships and past performance that agencies require for large awards" },
      { title: "Mentor-Protégé Opportunities", desc: "Connect with large primes seeking qualified small business partners" },
      { title: "Competitive Intelligence", desc: "Know what your competitors are doing and position to beat them" },
      { title: "Executive Advisory", desc: "Monthly strategic sessions with senior GovCon advisors" },
      { title: "Unlimited Support", desc: "Priority access to all services—proposals, reviews, strategy calls" }
    ],
    includes: [
      "Dedicated account executive",
      "Monthly executive strategy sessions",
      "Unlimited proposal reviews",
      "Priority capture support",
      "Mentor-Protégé matching",
      "Agency relationship facilitation",
      "Competitive intelligence reports",
      "All FedScale deliverables included",
      "VIP event access and introductions"
    ],
    stats: [
      { value: "100%", label: "Client Retention", icon: BadgeCheck },
      { value: "$109M+", label: "Awards Facilitated", icon: DollarSign },
      { value: "87%", label: "Client Win Rate", icon: Trophy }
    ]
  }
];

// ============================================
// PROPOSAL WRITING DATA
// ============================================

const proposalServices = [
  {
    id: "full",
    name: "Full Proposal Development",
    icon: FileText,
    price: "$5,000+",
    timeline: "2-4 weeks",
    description: "End-to-end proposal writing from RFP analysis to submission-ready package.",
    benefits: [
      "87% client win rate vs 30% industry average",
      "Fixed pricing—no surprise overruns",
      "Never missed a deadline in 15 years",
      "Debrief analysis if you don't win"
    ],
    includes: [
      "RFP analysis and compliance matrix",
      "Win theme development",
      "Technical approach writing",
      "Management plan and org charts",
      "Past performance volume",
      "Pricing volume support",
      "All color team reviews",
      "Final production and formatting"
    ]
  },
  {
    id: "red",
    name: "Red Team Review",
    icon: Users,
    price: "$1,500",
    timeline: "3-5 days",
    description: "Independent evaluation scored exactly like government evaluators.",
    benefits: [
      "Find gaps before the government does",
      "Prioritized fix list you can action",
      "Written report + 90-min debrief",
      "Fresh expert eyes on your work"
    ],
    includes: [
      "Compliance matrix verification",
      "Evaluation factor scoring",
      "Strengths/weaknesses analysis",
      "Specific improvement recommendations",
      "Prioritized fix list",
      "90-minute debrief call"
    ]
  },
  {
    id: "past",
    name: "Past Performance Support",
    icon: Award,
    price: "$750/ref",
    timeline: "1-2 weeks",
    description: "PPQ collection, reference formatting, and relevance mapping.",
    benefits: [
      "Professional references that score well",
      "Relevance mapping to requirements",
      "Reference coaching available",
      "CPARS/PPIRS research support"
    ],
    includes: [
      "PPQ questionnaire creation",
      "Reference interview coordination",
      "Narrative drafting",
      "Relevance mapping to RFP",
      "Reference coaching (optional)"
    ]
  },
  {
    id: "technical",
    name: "Technical Writing",
    icon: PenTool,
    price: "$2,500/vol",
    timeline: "1-2 weeks",
    description: "Focused writing support for specific proposal volumes.",
    benefits: [
      "Expert SME interview extraction",
      "Graphics development support",
      "One revision round included",
      "Format compliance guaranteed"
    ],
    includes: [
      "SME interviews and content gathering",
      "Technical approach narrative",
      "Solution descriptions",
      "Graphics recommendations",
      "One round of revisions"
    ]
  }
];

const colorTeams = [
  { name: "Blue", color: "bg-blue-600", phase: "Strategy & Planning", timing: "Start" },
  { name: "Pink", color: "bg-pink-400", phase: "Storyboard Review", timing: "60%" },
  { name: "Red", color: "bg-red-600", phase: "Evaluation Simulation", timing: "90%" },
  { name: "Gold", color: "bg-yellow-500", phase: "Final Quality Check", timing: "Pre-Submit" },
];

const heroStats = [
  { value: "$109M+", label: "Awards Facilitated" },
  { value: "87%", label: "Client Win Rate" },
  { value: "200+", label: "Contractors Launched" },
  { value: "15yrs", label: "Federal Experience" }
];

export default function Contractors() {
  const [activeProgram, setActiveProgram] = useState<string>("fedstart");
  const [activeProposalService, setActiveProposalService] = useState<string>("full");
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);
  const [showRfpTemplates, setShowRfpTemplates] = useState(false);

  const selectedProgram = programs.find(p => p.id === activeProgram)!;
  const selectedProposalService = proposalServices.find(s => s.id === activeProposalService)!;

  return (
    <>
      <Helmet>
        <title>Contractor Services — GovCon Inc.</title>
        <meta name="description" content="Launch, scale, and dominate federal contracting. FedStart for new contractors, FedScale for growth, FedPrime for primes. Professional proposal writing with 87% win rate." />
      </Helmet>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gov-crimson/5 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gov-crimson/10 px-4 py-1.5 text-sm font-semibold text-gov-crimson mb-6">
              <Briefcase size={16} />
              Federal Contractor Services
            </div>
            
            <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
              Win Federal Contracts. <span className="text-gov-crimson">Grow Your Business.</span>
            </h1>
            
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Whether you're launching your first federal pursuit or scaling to $50M+, 
              we have the programs, expertise, and track record to get you there.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="#programs" size="lg">
                Explore Programs
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" variant="secondary" size="lg">
                Free Consultation
              </LinkButton>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((stat, idx) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="font-display text-3xl font-bold text-gov-crimson">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROGRAMS SECTION */}
      {/* ============================================ */}
      <section id="programs" className="bg-slate-50 py-20 scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Growth Programs</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy sm:text-4xl">
              Choose Your Path to Federal Success
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Three proven programs designed to meet you where you are and take you where you want to go.
            </p>
          </div>

          {/* Program Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all",
                  activeProgram === program.id 
                    ? "bg-gov-navy text-white shadow-lg scale-105" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <program.icon size={20} />
                <div className="text-left">
                  <div className="font-bold">{program.name}</div>
                  <div className="text-xs opacity-80">{program.tagline}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Program Details */}
          <div className="animate-fade-in-up">
            {/* Program Header Card */}
            <Card className="p-8 bg-white mb-8" hover={false}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl text-white",
                    selectedProgram.color === "gov-blue" && "bg-gov-blue",
                    selectedProgram.color === "gov-crimson" && "bg-gov-crimson",
                    selectedProgram.color === "gov-gold" && "bg-gov-gold"
                  )}>
                    <selectedProgram.icon size={32} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gov-navy">{selectedProgram.name}</h3>
                    <p className="text-slate-600">{selectedProgram.tagline}</p>
                    <p className="text-sm text-gov-blue font-medium mt-1">
                      Ideal for: {selectedProgram.idealFor}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">{selectedProgram.priceNote}</div>
                  <div className="font-display text-4xl font-bold text-gov-crimson">{selectedProgram.price}</div>
                  <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" className="mt-3">
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </LinkButton>
                </div>
              </div>
            </Card>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {selectedProgram.stats.map((stat) => (
                <Card key={stat.label} className="p-5 text-center" hover>
                  <stat.icon size={24} className="mx-auto text-gov-blue" />
                  <div className="font-display text-2xl font-bold text-gov-navy mt-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Benefits - THE MAIN FOCUS */}
              <Card className="p-8 bg-gov-navy text-white" hover={false}>
                <div className="flex items-center gap-2 mb-6">
                  <Star size={20} className="text-gov-gold" />
                  <h4 className="font-display text-xl font-bold">Why {selectedProgram.name}?</h4>
                </div>
                <div className="space-y-4">
                  {selectedProgram.benefits.map((benefit, idx) => (
                    <button
                      key={benefit.title}
                      onClick={() => setExpandedBenefit(expandedBenefit === idx ? null : idx)}
                      className="w-full text-left p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-gov-green shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-semibold">{benefit.title}</div>
                          <div className={cn(
                            "text-sm text-slate-300 mt-1 transition-all",
                            expandedBenefit === idx ? "opacity-100" : "opacity-70"
                          )}>
                            {benefit.desc}
                          </div>
                        </div>
                        <ChevronDown size={18} className={cn(
                          "text-slate-400 transition-transform shrink-0",
                          expandedBenefit === idx && "rotate-180"
                        )} />
                      </div>
                    </button>
                  ))}
                </div>
              </Card>

              {/* What's Included */}
              <Card className="p-8" hover={false}>
                <h4 className="font-display text-xl font-bold text-gov-navy mb-6">What's Included</h4>
                <div className="space-y-3">
                  {selectedProgram.includes.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                    >
                      <CheckCircle size={18} className="text-gov-green shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* RFP Templates Section - FedStart Only */}
            {activeProgram === "fedstart" && selectedProgram.rfpTemplates && (
              <div className="mt-8">
                <Card className="p-8 bg-gradient-to-br from-gov-blue/5 to-gov-crimson/5 border-gov-blue/20" hover={false}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue text-white">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-bold text-gov-navy">RFP Response Template Package</h4>
                        <p className="text-slate-600">Professional templates to jumpstart your proposal writing</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowRfpTemplates(!showRfpTemplates)}
                      className="flex items-center gap-2 px-4 py-2 bg-gov-blue text-white rounded-lg hover:bg-gov-blue/90 transition"
                    >
                      <Download size={18} />
                      {showRfpTemplates ? "Hide Templates" : "View Templates"}
                    </button>
                  </div>

                  {showRfpTemplates && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
                      {selectedProgram.rfpTemplates.map((template) => (
                        <div 
                          key={template.name}
                          className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-semibold text-gov-navy">{template.name}</div>
                              <p className="text-sm text-slate-600 mt-1">{template.desc}</p>
                            </div>
                            <span className="text-xs font-bold text-gov-blue bg-gov-blue/10 px-2 py-1 rounded">
                              {template.format}
                            </span>
                          </div>
                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-sm text-gov-blue">
                            <Download size={14} />
                            Included with FedStart
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-gov-gold/10 rounded-xl border border-gov-gold/20">
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-gov-gold" />
                      <div>
                        <div className="font-semibold text-gov-navy">These templates alone save you 40+ hours</div>
                        <p className="text-sm text-slate-600">
                          Professionally structured and proven formats that government evaluators expect to see.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROPOSAL WRITING SECTION */}
      {/* ============================================ */}
      <section id="proposals" className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-crimson">Proposal Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy sm:text-4xl">
              Proposal Writing That Wins
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We don't just write proposals—we engineer wins. 87% win rate using the proven 
              Shipley methodology tailored to your business.
            </p>
          </div>

          {/* Color Team Process Visual */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-slate-600">Our Review Process</span>
              <span className="text-sm text-slate-500">Industry-Standard Color Team Reviews</span>
            </div>
            <div className="flex gap-1">
              {colorTeams.map((team) => (
                <div key={team.name} className="flex-1 group">
                  <div className={cn("h-3 rounded-full transition-all group-hover:scale-y-150", team.color)} />
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-slate-700">{team.name}</div>
                    <div className="text-xs text-slate-500">{team.timing}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Selector */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {proposalServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveProposalService(service.id)}
                className={cn(
                  "p-5 rounded-xl text-left transition-all",
                  activeProposalService === service.id 
                    ? "bg-gov-navy text-white shadow-lg" 
                    : "bg-white border border-slate-200 hover:border-gov-blue"
                )}
              >
                <service.icon size={24} className={activeProposalService === service.id ? "text-gov-gold" : "text-gov-blue"} />
                <div className="mt-3 font-bold">{service.name}</div>
                <div className={cn(
                  "text-sm mt-1",
                  activeProposalService === service.id ? "text-slate-300" : "text-slate-600"
                )}>
                  {service.price} • {service.timeline}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Benefits */}
            <Card className="p-8 bg-gov-crimson text-white" hover={false}>
              <div className="flex items-center gap-2 mb-6">
                <Trophy size={20} className="text-gov-gold" />
                <h4 className="font-display text-xl font-bold">Why Choose This Service</h4>
              </div>
              <div className="space-y-4">
                {selectedProposalService.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/10 rounded-lg">
                    <CheckCircle size={20} className="text-gov-green shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/70">Starting at</div>
                    <div className="font-display text-3xl font-bold">{selectedProposalService.price}</div>
                  </div>
                  <LinkButton 
                    href={LINKS.booking} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white text-gov-crimson hover:bg-white/90"
                  >
                    Get Quote
                  </LinkButton>
                </div>
              </div>
            </Card>

            {/* What's Included */}
            <Card className="p-8" hover={false}>
              <h4 className="font-display text-xl font-bold text-gov-navy mb-2">{selectedProposalService.name}</h4>
              <p className="text-slate-600 mb-6">{selectedProposalService.description}</p>
              <div className="space-y-3">
                {selectedProposalService.includes.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                  >
                    <CheckCircle size={18} className="text-gov-green shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Differentiator */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="p-6 border-l-4 border-l-slate-300" hover={false}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Other Firms</div>
              <ul className="space-y-2">
                {[
                  "Junior writers with templates",
                  "One-size-fits-all approach",
                  "Miss submission deadlines",
                  "Charge by the hour (scope creep)",
                  "No debrief support"
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-l-gov-crimson bg-white" hover={false}>
              <div className="text-xs font-bold uppercase tracking-wider text-gov-crimson mb-3">GovCon Inc.</div>
              <ul className="space-y-2">
                {[
                  "Senior writers with evaluation experience",
                  "Shipley method tailored to your business",
                  "Never missed a deadline in 15 years",
                  "Fixed-price quotes (no surprises)",
                  "Win or we analyze why and help improve"
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gov-navy">
                    <CheckCircle size={16} className="text-gov-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <Section title="Ready to Win Federal Contracts?" kicker="Let's Talk" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Free 30-Minute Strategy Call
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll review your situation, identify the right program, and outline your 
                path to federal contracting success. No obligation, no pressure.
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
                  Same-day availability
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
              Book Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
