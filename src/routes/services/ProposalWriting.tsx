import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, FileText, Users, Award, Clock, 
  Target, Lightbulb, Edit3, Send, Eye, Zap, BookOpen,
  ClipboardCheck, MessageSquare, BarChart3, Layers, PenTool,
  FileCheck, AlertCircle, ChevronDown, ChevronUp, Star, Sparkles
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

const colorTeams = [
  { 
    name: "Blue", 
    color: "bg-blue-600", 
    phase: "Strategy & Planning", 
    timing: "Stage 1",
    desc: "Define win themes, competitive positioning, and proposal structure",
    deliverables: ["Compliance Matrix", "Win Theme Document", "Proposal Outline", "Responsibility Matrix"],
    questions: ["What's our discriminating value?", "How do we beat the incumbent?", "What story are we telling?"]
  },
  { 
    name: "Pink", 
    color: "bg-pink-400", 
    phase: "Storyboard Review", 
    timing: "~60% Complete",
    desc: "Review draft narratives for compliance, responsiveness, and win theme integration",
    deliverables: ["Section-by-Section Feedback", "Gap Analysis", "Content Recommendations", "Graphics Suggestions"],
    questions: ["Are we answering every requirement?", "Is our approach clear?", "Are win themes consistent?"]
  },
  { 
    name: "Red", 
    color: "bg-red-600", 
    phase: "Evaluation Simulation", 
    timing: "~90% Complete",
    desc: "Score the proposal exactly like government evaluators would",
    deliverables: ["Strengths/Weaknesses Analysis", "Evaluation Scores", "Priority Fix List", "Final Recommendations"],
    questions: ["Would this win?", "Where will we lose points?", "What's the evaluator's first impression?"]
  },
  { 
    name: "Gold", 
    color: "bg-yellow-500", 
    phase: "Final Quality Check", 
    timing: "Pre-Submission",
    desc: "Final polish for formatting, compliance verification, and production readiness",
    deliverables: ["Clean Final Draft", "Cross-Reference Check", "Format Verification", "Submission Checklist"],
    questions: ["Is every page numbered correctly?", "Are all attachments included?", "Is this submission-ready?"]
  },
];

const services = [
  {
    id: "full",
    name: "Full Proposal Development",
    icon: FileText,
    price: "$5,000",
    priceNote: "varies by complexity",
    timeline: "2-4 weeks typical",
    description: "End-to-end proposal writing from RFP analysis to submission-ready package.",
    ideal: "First-time bidders, complex RFPs, or when you need a turnkey solution.",
    includes: [
      "RFP analysis and compliance matrix",
      "Win theme development and competitive positioning",
      "Technical approach writing",
      "Management plan and org charts",
      "Past performance volume",
      "Pricing volume support",
      "All color team reviews",
      "Final production and formatting",
      "Submission support"
    ],
    process: [
      { step: "Kickoff", desc: "Understand requirements, your capabilities, and competitive landscape" },
      { step: "Strategy", desc: "Develop win themes, outline approach, assign responsibilities" },
      { step: "Writing", desc: "Draft all volumes with your SME input" },
      { step: "Reviews", desc: "Pink and Red team reviews with revisions" },
      { step: "Polish", desc: "Gold team final check and production" },
      { step: "Submit", desc: "Package and submit or hand off for your submission" }
    ]
  },
  {
    id: "red",
    name: "Red Team Review",
    icon: Users,
    price: "$1,500",
    priceNote: "per review",
    timeline: "3-5 business days",
    description: "Independent evaluation of your draft proposal scored exactly like the government would.",
    ideal: "You have internal writers but need expert eyes to find gaps and weaknesses.",
    includes: [
      "Compliance matrix verification",
      "Evaluation factor scoring",
      "Strengths/weaknesses analysis",
      "Specific improvement recommendations",
      "Prioritized fix list",
      "90-minute debrief call",
      "Written evaluation report"
    ],
    process: [
      { step: "Receive", desc: "Get your draft proposal and RFP" },
      { step: "Analyze", desc: "Score each section against evaluation criteria" },
      { step: "Document", desc: "Write detailed findings with specific fixes" },
      { step: "Debrief", desc: "Walk through findings and answer questions" }
    ]
  },
  {
    id: "past",
    name: "Past Performance Support",
    icon: Award,
    price: "$750",
    priceNote: "per project reference",
    timeline: "1-2 weeks",
    description: "PPQ collection, reference formatting, and relevance mapping to maximize your scores.",
    ideal: "You have the experience but need help proving it compellingly.",
    includes: [
      "PPQ questionnaire creation and distribution",
      "Reference interview coordination",
      "Narrative drafting in government format",
      "Relevance mapping to RFP requirements",
      "CPARS/PPIRS research support",
      "Reference coaching (optional)"
    ],
    process: [
      { step: "Identify", desc: "Select best-fit projects and references" },
      { step: "Collect", desc: "Gather data through PPQs or interviews" },
      { step: "Write", desc: "Draft compelling relevance narratives" },
      { step: "Map", desc: "Connect experience to specific requirements" }
    ]
  },
  {
    id: "technical",
    name: "Technical Writing Only",
    icon: PenTool,
    price: "$2,500",
    priceNote: "per volume",
    timeline: "1-2 weeks per volume",
    description: "Focused writing support for specific proposal volumes when you have bandwidth constraints.",
    ideal: "You handle strategy and management but need writing horsepower.",
    includes: [
      "SME interviews and content gathering",
      "Technical approach narrative",
      "Solution descriptions",
      "Graphics development support",
      "One round of revisions",
      "Format compliance check"
    ],
    process: [
      { step: "Scope", desc: "Define volume requirements and outline" },
      { step: "Interview", desc: "Extract knowledge from your SMEs" },
      { step: "Draft", desc: "Write compliant, compelling content" },
      { step: "Revise", desc: "Incorporate your feedback and finalize" }
    ]
  }
];

const deliverables = [
  { name: "Compliance Matrix", desc: "Every requirement mapped to your response location", icon: ClipboardCheck },
  { name: "Executive Summary", desc: "One-page capture of why you should win", icon: FileText },
  { name: "Technical Approach", desc: "Your solution, methodology, and innovation", icon: Lightbulb },
  { name: "Management Plan", desc: "How you'll manage, staff, and quality control", icon: Users },
  { name: "Past Performance", desc: "Relevant experience that proves you can deliver", icon: Award },
  { name: "Staffing Plan", desc: "Key personnel, org charts, and labor categories", icon: BarChart3 },
  { name: "Pricing Volume", desc: "Competitive pricing with appropriate support", icon: Layers },
  { name: "Production Package", desc: "Formatted, bookmarked, submission-ready files", icon: FileCheck }
];

const stages = [
  { 
    stage: "Stage 1", 
    name: "Analysis & Strategy",
    tasks: ["RFP deep dive", "Compliance matrix", "Win themes", "Outline creation"],
    color: "bg-blue-600",
    milestone: "Blue Team Complete",
    deliverable: "Strategic foundation document with compliance matrix and win strategy"
  },
  { 
    stage: "Stage 2", 
    name: "Content Development",
    tasks: ["Technical writing", "SME interviews", "Graphics development", "First drafts"],
    color: "bg-pink-400",
    milestone: "Pink Team Review",
    deliverable: "Complete first draft of all proposal volumes"
  },
  { 
    stage: "Stage 3", 
    name: "Review & Revision",
    tasks: ["Incorporate feedback", "Red Team scoring", "Gap remediation", "Second drafts"],
    color: "bg-red-600",
    milestone: "Red Team Complete",
    deliverable: "Evaluated proposal with strengths/weaknesses analysis and fixes"
  },
  { 
    stage: "Stage 4", 
    name: "Polish & Submit",
    tasks: ["Final edits", "Gold Team check", "Production", "Submission"],
    color: "bg-yellow-500",
    milestone: "Submission Ready",
    deliverable: "Production-ready proposal package formatted for submission"
  }
];

const shipleyPrinciples = [
  {
    principle: "Customer-Focused",
    desc: "Every proposal is written from the evaluator's perspective, not yours",
    icon: Target
  },
  {
    principle: "Discriminating Themes",
    desc: "Your unique value woven throughout—not generic claims anyone could make",
    icon: Sparkles
  },
  {
    principle: "Compliant First",
    desc: "Answer every requirement explicitly before adding anything else",
    icon: ClipboardCheck
  },
  {
    principle: "Visual Storytelling",
    desc: "Graphics and action captions that evaluators remember during scoring",
    icon: Eye
  }
];

const faq = [
  {
    q: "How fast can you turn around a proposal?",
    a: "Our standard timeline is 3-4 weeks for full development. For urgent needs, we offer expedited service (additional fee) with turnarounds as fast as 10 days depending on complexity. We've pulled off 5-day proposals when necessary—but we don't recommend it."
  },
  {
    q: "Do you guarantee we'll win?",
    a: "No one can guarantee a win—anyone who does is lying. What we guarantee is a compliant, competitive, professionally written proposal that gives you the best possible chance. Our clients win at higher rates than the industry average."
  },
  {
    q: "What if we lose?",
    a: "We request debriefs on your behalf and provide a post-mortem analysis so you know exactly why and can improve for next time. Many of our clients win on their second or third attempt with lessons learned."
  },
  {
    q: "Can you help with orals/presentations?",
    a: "Yes. We offer oral presentation coaching, slide deck development, and mock evaluation sessions. This is priced separately based on scope."
  },
  {
    q: "Do you write pricing volumes?",
    a: "We support pricing volumes by organizing your cost data, creating pricing narratives, and ensuring format compliance. Actual pricing decisions and calculations remain with you—we're not CPAs."
  },
  {
    q: "What if we just need a small piece of help?",
    a: "We offer à la carte services: single volume writing, compliance matrix only, executive summary polish, etc. Call us and we'll scope exactly what you need."
  }
];

const stats = [
  { value: "87%", label: "Client Win Rate", sublabel: "vs 30% industry average" },
  { value: "500+", label: "Proposals Written", sublabel: "since 2010" },
  { value: "$50M+", label: "Contracts Won", sublabel: "for our clients" },
  { value: "48hr", label: "Quote Turnaround", sublabel: "RFP to proposal scope" }
];

export default function ServicesProposalWriting() {
  const [activeColorTeam, setActiveColorTeam] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<string>("full");
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showAllDeliverables, setShowAllDeliverables] = useState(false);

  const selectedService = services.find(s => s.id === activeService);

  return (
    <>
      <Helmet>
        <title>Proposal Writing – GovCon Inc.</title>
        <meta name="description" content="Professional government proposal writing services using the Shipley method tailored to your business. Full development, Red Team reviews, and past performance support." />
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Services</p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
                Proposal Writing That Wins
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We don't just write proposals—we engineer wins. Using the proven Shipley 
                methodology tailored to your specific business, we create 
                submissions that score.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Start Your Proposal
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <a 
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gov-navy/20 px-6 py-3 text-sm font-semibold text-gov-navy hover:bg-gov-navy/5 transition"
                >
                  View Services
                </a>
              </div>

              {/* Quick Stats */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={stat.label}
                    className="animate-fade-in-up text-center sm:text-left"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="font-display text-2xl font-bold text-gov-crimson">{stat.value}</div>
                    <div className="text-sm font-medium text-gov-navy">{stat.label}</div>
                    <div className="text-xs text-slate-500">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Process Preview */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Card className="p-6 bg-gov-navy text-white" hover={false}>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  <Zap size={16} />
                  Our Approach
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">Shipley Method, Tailored to You</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  The Shipley method is the gold standard in proposal development—but we don't 
                  apply it cookie-cutter style. Every business is unique, so we adapt the 
                  methodology to fit your capabilities, culture, and competitive position.
                </p>
                
                <div className="mt-6 space-y-3">
                  {shipleyPrinciples.map((item) => (
                    <div 
                      key={item.principle}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 shrink-0">
                        <item.icon size={16} className="text-gov-blue" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{item.principle}</div>
                        <div className="text-xs text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Development Stages */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">How We Work</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              What You Get at Each Stage
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Every stage produces tangible deliverables. Click to see what we deliver and when.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex gap-1">
              {stages.map((stage, idx) => (
                <button
                  key={stage.stage}
                  onClick={() => setActiveStage(activeStage === idx ? null : idx)}
                  className={cn(
                    "flex-1 h-3 rounded-full transition-all duration-300",
                    stage.color,
                    activeStage === idx ? "scale-y-150" : "hover:scale-y-125"
                  )}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {stages.map(stage => (
                <div key={stage.stage} className="text-xs text-slate-500">{stage.stage}</div>
              ))}
            </div>
          </div>

          {/* Stage Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, idx) => (
              <Card 
                key={stage.stage}
                className={cn(
                  "p-5 cursor-pointer transition-all duration-300",
                  activeStage === idx && "ring-2 ring-gov-blue shadow-xl"
                )}
                hover
                onClick={() => setActiveStage(activeStage === idx ? null : idx)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={cn("h-3 w-3 rounded-full", stage.color)} />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {stage.stage}
                  </span>
                </div>
                <h3 className="font-semibold text-gov-navy">{stage.name}</h3>
                
                {activeStage === idx && (
                  <div className="mt-4 animate-fade-in-up">
                    <ul className="space-y-2">
                      {stage.tasks.map(task => (
                        <li key={task} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={14} className="text-gov-green" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gov-crimson mb-2">
                        <Star size={14} />
                        {stage.milestone}
                      </div>
                      <p className="text-xs text-slate-600 bg-slate-100 p-2 rounded">
                        <strong>You receive:</strong> {stage.deliverable}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500 text-center">
            * Timeline adjusts based on RFP complexity. Expedited timelines available for urgent needs.
          </p>
        </div>
      </section>

      {/* Color Team Deep Dive */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Quality Gates</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Color Team Reviews
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              The Shipley color team system catches 95% of issues before submission. 
              We tailor the intensity of each review to your RFP's complexity and your team's experience level.
            </p>
          </div>

          {/* Color Team Selector */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {colorTeams.map((team, idx) => (
              <button
                key={team.name}
                onClick={() => setActiveColorTeam(activeColorTeam === idx ? null : idx)}
                className={cn(
                  "p-5 rounded-xl text-left transition-all duration-300",
                  activeColorTeam === idx 
                    ? "bg-gov-navy text-white shadow-xl scale-105" 
                    : "bg-white border border-slate-200 hover:border-gov-blue/30 hover:shadow-md"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-5 w-5 rounded-full",
                    team.color,
                    activeColorTeam === idx && "ring-2 ring-white ring-offset-2 ring-offset-gov-navy"
                  )} />
                  <span className={cn(
                    "font-bold",
                    activeColorTeam === idx ? "text-white" : "text-gov-navy"
                  )}>
                    {team.name} Team
                  </span>
                </div>
                <div className={cn(
                  "mt-2 text-sm",
                  activeColorTeam === idx ? "text-slate-300" : "text-slate-600"
                )}>
                  {team.phase}
                </div>
                <div className={cn(
                  "mt-1 text-xs",
                  activeColorTeam === idx ? "text-slate-400" : "text-slate-500"
                )}>
                  {team.timing}
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Color Team Details */}
          {activeColorTeam !== null && (
            <Card className="p-8 animate-fade-in-up" hover={false}>
              <div className="grid gap-8 lg:grid-cols-3">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("h-6 w-6 rounded-full", colorTeams[activeColorTeam].color)} />
                    <h3 className="font-display text-xl font-bold text-gov-navy">
                      {colorTeams[activeColorTeam].name} Team Review
                    </h3>
                  </div>
                  <p className="text-slate-600">
                    {colorTeams[activeColorTeam].desc}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gov-navy mb-3 flex items-center gap-2">
                    <FileCheck size={16} className="text-gov-green" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {colorTeams[activeColorTeam].deliverables.map(d => (
                      <li key={d} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle size={14} className="text-gov-green" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gov-navy mb-3 flex items-center gap-2">
                    <MessageSquare size={16} className="text-gov-blue" />
                    Key Questions Answered
                  </h4>
                  <ul className="space-y-2">
                    {colorTeams[activeColorTeam].questions.map(q => (
                      <li key={q} className="flex items-start gap-2 text-sm text-slate-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-gov-crimson mt-2 shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Choose Your Level of Support
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              From turnkey solutions to targeted help, we meet you where you are.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all",
                  activeService === service.id
                    ? "bg-gov-blue text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <service.icon size={18} />
                {service.name}
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          {selectedService && (
            <div className="grid gap-8 lg:grid-cols-3 animate-fade-in-up">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <Card className="p-8 h-full" hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue shrink-0">
                      <selectedService.icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gov-navy">
                        {selectedService.name}
                      </h3>
                      <p className="mt-2 text-slate-600">{selectedService.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gov-crimson/5 rounded-xl border border-gov-crimson/10">
                    <div className="flex items-center gap-2 text-gov-crimson font-semibold">
                      <Target size={16} />
                      Ideal For
                    </div>
                    <p className="mt-1 text-slate-700">{selectedService.ideal}</p>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-gov-navy mb-4">What's Included</h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {selectedService.includes.map(item => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle size={16} className="text-gov-green shrink-0 mt-0.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-gov-navy mb-4">Our Process</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.process.map((step, idx) => (
                        <div 
                          key={step.step}
                          className="group relative"
                        >
                          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 hover:bg-gov-blue hover:text-white transition cursor-help">
                            <span className="text-xs font-bold text-slate-400 group-hover:text-white/70">{idx + 1}</span>
                            {step.step}
                          </div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gov-navy text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                            {step.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Pricing Sidebar */}
              <div>
                <Card className="p-6 bg-gov-navy text-white sticky top-8" hover={false}>
                  <div className="text-sm text-slate-400">Starting at</div>
                  <div className="mt-1">
                    <span className="font-display text-4xl font-bold text-white">
                      {selectedService.price}
                    </span>
                  </div>
                  <div className="text-sm text-slate-400">{selectedService.priceNote}</div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Clock size={16} />
                      <span>Timeline: {selectedService.timeline}</span>
                    </div>
                  </div>

                  <LinkButton 
                    href={LINKS.booking} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full justify-center mt-6"
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </LinkButton>

                  <p className="mt-4 text-xs text-slate-400 text-center">
                    Free quote within 48 hours of RFP review
                  </p>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Deliverables</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              What You Receive
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Every full proposal development includes these evaluation-ready components.
            </p>
          </div>

          <div className={cn(
            "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all",
            !showAllDeliverables && "max-h-[300px] overflow-hidden relative"
          )}>
            {deliverables.map((item, idx) => (
              <Card 
                key={item.name} 
                className="p-5 animate-fade-in-up" 
                hover
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-blue/10 text-gov-blue">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-3 font-semibold text-gov-navy">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
            
            {!showAllDeliverables && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          {!showAllDeliverables && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllDeliverables(true)}
                className="inline-flex items-center gap-2 text-gov-blue font-semibold hover:underline"
              >
                Show All Deliverables
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* The Difference */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Why Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Not Your Typical Proposal Shop
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6 border-l-4 border-l-slate-300" hover={false}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Other Firms</div>
              <ul className="space-y-3">
                {[
                  "Junior writers with templates",
                  "One-size-fits-all approach",
                  "Miss submission deadlines",
                  "Disappear after submission",
                  "Charge by the hour (unlimited scope creep)",
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
              <ul className="space-y-3">
                {[
                  "Senior writers with evaluation experience",
                  "Shipley method tailored to your business",
                  "Never missed a deadline in 15 years",
                  "Debrief analysis and lessons learned",
                  "Fixed-price quotes (you know the cost upfront)",
                  "Win or we analyze why and help you improve"
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

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faq.map((item, idx) => (
              <Card 
                key={item.q}
                className={cn(
                  "overflow-hidden transition-all",
                  expandedFaq === idx && "ring-2 ring-gov-blue/20"
                )}
                hover={false}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-gov-navy">{item.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp size={20} className="text-gov-blue shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 pt-0 animate-fade-in-up">
                    <p className="text-slate-600 border-t border-slate-100 pt-4">{item.a}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Have an RFP to Respond To?" kicker="Let's Win" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We can start within 48 hours
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Send us your RFP and we'll provide a scope, timeline, and fixed-price 
                quote within 24 hours. No obligation, no pressure.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-gov-green" />
                  Free quote
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-gov-green" />
                  Fixed pricing
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-gov-green" />
                  No hidden fees
                </span>
              </div>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Start Proposal
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-400">
            Questions? Call <a href="tel:8136650308" className="text-white hover:underline">(813) 665-0308</a> or 
            email <a href="mailto:info@govcon.info" className="text-white hover:underline">info@govcon.info</a>
          </p>
        </div>
      </Section>
    </>
  );
}