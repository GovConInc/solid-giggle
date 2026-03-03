import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, CheckCircle, ChevronDown, FileText, Users,
  Award, PenTool, Zap, Target, Eye, ClipboardCheck,
  Phone, Mail, Calendar
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

// ============================================
// DATA
// ============================================

const services = [
  {
    id: "full",
    icon: FileText,
    name: "Full Proposal Development",
    tagline: "Turnkey, start to finish",
    price: "From $5,000",
    timeline: "2–4 weeks",
    color: "border-gov-blue",
    accentBg: "bg-gov-blue/10",
    accentText: "text-gov-blue",
    summary: "We write everything — technical approach, management plan, past performance, pricing support. You review and approve.",
    keyIncludes: ["RFP analysis + compliance matrix", "Win theme development", "All volumes written", "Color team reviews", "Production + submission support"],
  },
  {
    id: "red",
    icon: Users,
    name: "Red Team Review",
    tagline: "Independent expert scoring",
    price: "$1,500",
    timeline: "3–5 business days",
    color: "border-gov-crimson",
    accentBg: "bg-gov-crimson/10",
    accentText: "text-gov-crimson",
    summary: "Your draft evaluated exactly like the government would score it. Strengths, weaknesses, and a prioritized fix list.",
    keyIncludes: ["Compliance matrix verification", "Evaluation factor scoring", "Strengths/weaknesses report", "Prioritized recommendations", "90-minute debrief call"],
  },
  {
    id: "past",
    icon: Award,
    name: "Past Performance Support",
    tagline: "Prove what you've done",
    price: "$750/reference",
    timeline: "1–2 weeks",
    color: "border-gov-green",
    accentBg: "bg-gov-green/10",
    accentText: "text-gov-green",
    summary: "PPQ collection, reference formatting, and relevance mapping. You have the experience — we help you prove it compellingly.",
    keyIncludes: ["PPQ creation + distribution", "Reference interview coordination", "Government-format narratives", "Relevance mapping to RFP", "CPARS/PPIRS research"],
  },
  {
    id: "technical",
    icon: PenTool,
    name: "Technical Writing",
    tagline: "Writing horsepower on demand",
    price: "From $2,500",
    timeline: "1–2 weeks/volume",
    color: "border-indigo-500",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
    summary: "Focused writing for specific volumes when your team has the strategy but needs senior-level execution.",
    keyIncludes: ["SME interviews + content extraction", "Technical approach narrative", "Solution descriptions", "Graphics development support", "Format compliance check"],
  },
];

const stats = [
  { value: "87%", label: "Client win rate", sub: "vs 30% industry average" },
  { value: "500+", label: "Proposals written", sub: "since 2010" },
  { value: "$50M+", label: "Contract wins", sub: "for our clients" },
  { value: "0", label: "Missed deadlines", sub: "ever" },
];

const methodology = [
  { icon: Target, label: "Customer-Focused", desc: "Written from the evaluator's perspective, not yours" },
  { icon: Zap, label: "Win Themes", desc: "Your differentiators woven throughout — not generic claims" },
  { icon: ClipboardCheck, label: "Compliant First", desc: "Every requirement answered before anything else" },
  { icon: Eye, label: "Visual Storytelling", desc: "Graphics and action captions evaluators actually remember" },
];

const colorTeams = [
  { name: "Blue", color: "bg-blue-600", timing: "Stage 1", phase: "Strategy & win themes" },
  { name: "Pink", color: "bg-pink-400", timing: "~60% Complete", phase: "Storyboard review" },
  { name: "Red", color: "bg-red-600", timing: "~90% Complete", phase: "Evaluator simulation" },
  { name: "Gold", color: "bg-yellow-500", timing: "Pre-Submission", phase: "Final quality check" },
];

const detailFaqs = [
  {
    q: "How fast can you turn around a proposal?",
    a: "3–4 weeks for full development is our standard. Expedited service is available for tight deadlines — we've turned around proposals in 10 days when necessary. For task order RFQs (5-day response windows), we have templates and processes to move fast."
  },
  {
    q: "Do you guarantee a win?",
    a: "No one should make that promise — anyone who does is lying. What we guarantee is a compliant, competitive, professionally written proposal that gives you the best possible shot. Our clients consistently outperform the industry average win rate."
  },
  {
    q: "What if we lose?",
    a: "We request debriefs on your behalf, analyze the feedback, and deliver a post-mortem so you know exactly why and what to improve. Many of our clients win on the second or third attempt using lessons from the first."
  },
  {
    q: "Can you help with oral presentations?",
    a: "Yes. Oral presentation coaching, slide deck development, and mock evaluation sessions are available as add-ons. Pricing is scoped by complexity."
  },
  {
    q: "What if we just need a small piece of help?",
    a: "We scope exactly what you need — single-volume writing, compliance matrix only, executive summary polish, or a quick call to gut-check your strategy. Call us and we'll figure it out."
  },
];

// ============================================
// COMPONENT
// ============================================

export default function ServicesProposalWriting() {
  const [activeService, setActiveService] = useState("full");
  const [showDetails, setShowDetails] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const selected = services.find(s => s.id === activeService)!;

  return (
    <>
      <Helmet>
        <title>Proposal Writing — FedGovWin Professional Services</title>
        <meta name="description" content="Professional government proposal writing using the Shipley method. Full development, Red Team reviews, and past performance support." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue mb-6">
                <FileText size={14} />
                Proposal Services
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
                Proposals that score
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                We don't fill templates. We engineer wins — using the Shipley method, adapted to your business, with senior writers who have evaluated from the other side.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Scope My Proposal
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <button
                  onClick={() => setShowDetails(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-gov-navy hover:border-gov-navy/40 transition"
                >
                  See Full Process
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6 text-center" hover={false}>
                  <div className="font-display text-4xl font-bold text-gov-crimson">{stat.value}</div>
                  <div className="mt-1 text-sm font-semibold text-gov-navy">{stat.label}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{stat.sub}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Picker ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              What do you need?
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActiveService(svc.id)}
                className={cn(
                  "text-left p-5 rounded-2xl border-2 bg-white transition-all duration-200",
                  activeService === svc.id
                    ? `${svc.color} shadow-lg scale-105`
                    : "border-slate-200 hover:border-slate-300"
                )}
              >
                <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl mb-3", svc.accentBg, svc.accentText)}>
                  <svc.icon size={20} />
                </div>
                <p className="font-bold text-gov-navy text-sm">{svc.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{svc.tagline}</p>
              </button>
            ))}
          </div>

          {/* Selected Detail */}
          <Card className="p-8" hover={false}>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", selected.accentBg, selected.accentText)}>
                    <selected.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-gov-navy">{selected.name}</h3>
                    <p className="text-slate-500 text-sm">{selected.tagline}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{selected.summary}</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-2">
                  {selected.keyIncludes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={14} className="text-gov-green shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Investment</p>
                  <p className="mt-1 font-display text-2xl font-bold text-gov-navy">{selected.price}</p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Calendar size={11} /> {selected.timeline}
                  </p>
                </div>
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" className="w-full justify-center">
                  Get a Quote
                  <ArrowRight size={16} className="ml-2" />
                </LinkButton>
                <p className="text-xs text-slate-400 text-center">Free scope review within 48 hours of RFP submission</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── How We Write ── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">The Method</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Shipley method, built around you
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Shipley is the gold standard for government proposal development. We don't apply it cookie-cutter — every engagement adapts the framework to your capabilities, competitive position, and the specific evaluator you're trying to win.
              </p>
              <div className="mt-8 space-y-4">
                {methodology.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-gov-navy">{item.label}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Teams Visual */}
            <Card className="p-6 bg-gov-navy" hover={false}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Quality Gates</p>
              <div className="space-y-4">
                {colorTeams.map((team, idx) => (
                  <div key={team.name} className="flex items-center gap-4">
                    <div className={cn("h-5 w-5 rounded-full shrink-0", team.color)} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">{team.name} Team</span>
                        <span className="text-xs text-slate-400 font-medium">{team.timing}</span>
                      </div>
                      <p className="text-sm text-slate-400">{team.phase}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 text-sm text-slate-400">
                Color team reviews catch 95% of issues before submission. We adapt intensity to your RFP complexity.
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-gov-navy">Not your typical proposal shop</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 max-w-3xl mx-auto">
            <Card className="p-6 border-l-4 border-l-slate-300" hover={false}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Other firms</p>
              <ul className="space-y-3">
                {["Junior writers with templates", "One-size-fits-all approach", "Miss submission deadlines", "Disappear after submission", "Hourly billing with scope creep"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 border-l-4 border-l-gov-crimson" hover={false}>
              <p className="text-xs font-bold uppercase tracking-wider text-gov-crimson mb-4">FedGovWin</p>
              <ul className="space-y-3">
                {["Senior writers with evaluation experience", "Shipley method tailored to your business", "Never missed a deadline in 15 years", "Debrief analysis + lessons learned", "Fixed-price quotes upfront"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gov-navy text-sm">
                    <CheckCircle size={14} className="text-gov-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Deep Dive ── */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between p-6 rounded-2xl border-2 border-slate-200 hover:border-gov-blue/30 transition group"
          >
            <div className="text-left">
              <p className="font-bold text-gov-navy">Want the full process breakdown?</p>
              <p className="text-sm text-slate-500 mt-0.5">Stage details, color team deliverables, and common questions answered</p>
            </div>
            <ChevronDown
              size={22}
              className={cn("text-slate-400 group-hover:text-gov-blue transition-transform duration-300", showDetails && "rotate-180")}
            />
          </button>

          {showDetails && (
            <div className="mt-8 space-y-8 animate-fade-in-up">
              {/* Stage Detail */}
              <div>
                <h3 className="font-display text-xl font-bold text-gov-navy mb-4">Development Stages</h3>
                <div className="space-y-3">
                  {[
                    { stage: "Stage 1: Analysis & Strategy", color: "bg-blue-600", items: ["RFP deep dive", "Compliance matrix", "Win themes", "Proposal outline"] },
                    { stage: "Stage 2: Content Development", color: "bg-pink-400", items: ["Technical writing", "SME interviews", "Graphics development", "First drafts"] },
                    { stage: "Stage 3: Review & Revision", color: "bg-red-600", items: ["Incorporate feedback", "Red Team scoring", "Gap remediation", "Second drafts"] },
                    { stage: "Stage 4: Polish & Submit", color: "bg-yellow-500", items: ["Final edits", "Gold Team check", "Production", "Submission"] },
                  ].map((s) => (
                    <Card key={s.stage} className="p-5" hover={false}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn("h-3 w-3 rounded-full", s.color)} />
                        <p className="font-semibold text-gov-navy">{s.stage}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.items.map(item => (
                          <span key={item} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">{item}</span>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-display text-xl font-bold text-gov-navy mb-4">Common Questions</h3>
                <div className="space-y-3">
                  {detailFaqs.map((faq, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition"
                      >
                        <span className="font-semibold text-gov-navy pr-4">{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={cn("text-slate-400 shrink-0 transition-transform duration-300", openFaq === idx && "rotate-180")}
                        />
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300", openFaq === idx ? "max-h-64" : "max-h-0")}>
                        <p className="px-5 pb-5 text-slate-600">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <Section title="Have an RFP to respond to?" kicker="Let's Win" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We can start within 48 hours
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Send us your RFP. We'll scope it, provide a fixed-price quote, and confirm timeline — within 24 hours. No obligation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Phone size={14} /> (813) 665-0308</span>
                <span className="flex items-center gap-1.5"><Mail size={14} /> Info@FedGovWin.com</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} /> Free quote, 24-hour turnaround</span>
              </div>
            </div>
            <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="shrink-0">
              Start My Proposal
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
