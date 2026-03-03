import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, CheckCircle, ChevronDown, Rocket, BarChart3,
  Crown, Shield, Target, TrendingUp, Lightbulb, Trophy,
  Phone, Mail, Calendar, Repeat
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

// ============================================
// DATA
// ============================================

const programs = [
  {
    id: "fedstart",
    icon: Rocket,
    name: "FedStart",
    tagline: "New to federal contracting",
    duration: "3 months",
    price: "$3,200",
    billing: "flat rate",
    color: "border-gov-blue",
    headerBg: "bg-gov-blue",
    accentBg: "bg-gov-blue/10",
    accentText: "text-gov-blue",
    summary: "Get fully compliant, visible, and qualified to pursue federal contracts — within 30 days of kickoff. We handle every registration, certification, and your first marketing materials.",
    outcomes: [
      "SAM.gov registered and optimized",
      "DSBS + FEMA portal complete",
      "SBA certifications submitted",
      "Capability statement designed",
      "Target agency list built",
      "Monthly strategy calls",
    ],
    idealFor: "Businesses entering the federal market for the first time, or those who started but never got the foundation right.",
  },
  {
    id: "growth",
    icon: BarChart3,
    name: "Growth",
    tagline: "Active but not winning enough",
    duration: "6 months",
    price: "$5,800",
    billing: "flat rate",
    color: "border-gov-crimson",
    headerBg: "bg-gov-crimson",
    accentBg: "bg-gov-crimson/10",
    accentText: "text-gov-crimson",
    summary: "You're registered and pursuing — but your pipeline is thin and wins are inconsistent. Growth builds your capture engine and takes your proposal quality to a level that competes.",
    outcomes: [
      "Capture strategy and pipeline build",
      "Competitive intelligence setup",
      "Proposal writing for 2 opportunities",
      "Red Team review on each bid",
      "Past performance documentation",
      "Bi-weekly strategy calls",
    ],
    idealFor: "Companies who've been in the game 1–3 years and are bidding but not winning at the rate they should be.",
  },
  {
    id: "prime",
    icon: Crown,
    name: "Prime",
    tagline: "Scale to a serious federal practice",
    duration: "12 months",
    price: "$11,500",
    billing: "flat rate",
    color: "border-gov-gold",
    headerBg: "bg-gov-navy",
    accentBg: "bg-gov-gold/10",
    accentText: "text-gov-gold",
    summary: "Full-spectrum support to build a federal division. GSA Schedule, sustained capture, proposal writing, contract management, and strategic growth — everything a serious federal contractor needs.",
    outcomes: [
      "GSA Schedule submission",
      "Full compliance management",
      "Sustained opportunity pipeline",
      "Proposal writing (up to 4 per year)",
      "Contract vehicle strategy",
      "Monthly executive reviews",
    ],
    idealFor: "Businesses ready to make federal contracting a primary revenue channel — and need an expert partner in their corner for the long haul.",
  },
];

const fiveCsPreview = [
  { number: "1", name: "Compliance", icon: Shield, desc: "Registrations, certifications, SAM.gov — the foundation", color: "text-gov-blue" },
  { number: "2", name: "Concept", icon: Lightbulb, desc: "Strategy, positioning, capability statement", color: "text-emerald-600" },
  { number: "3", name: "Capture", icon: Target, desc: "Pipeline building and pre-RFP positioning", color: "text-rose-600" },
  { number: "4", name: "Compete", icon: Trophy, desc: "Proposal development and submission", color: "text-amber-600" },
  { number: "5", name: "Continue", icon: Repeat, desc: "Performance, recompetes, and sustained growth", color: "text-purple-600" },
];

const detailRows = [
  { feature: "SAM / DSBS / FEMA Registration", fedstart: true, growth: true, prime: true },
  { feature: "SBA Certification Submissions", fedstart: true, growth: true, prime: true },
  { feature: "Capability Statement", fedstart: true, growth: true, prime: true },
  { feature: "Target Agency Analysis", fedstart: "Foundation", growth: true, prime: true },
  { feature: "Capture Strategy + Pipeline", fedstart: false, growth: true, prime: true },
  { feature: "Proposal Writing", fedstart: false, growth: "2 bids", prime: "4 bids" },
  { feature: "Red Team Reviews", fedstart: false, growth: true, prime: true },
  { feature: "GSA Schedule Submission", fedstart: false, growth: false, prime: true },
  { feature: "Contract Management Support", fedstart: false, growth: false, prime: true },
  { feature: "Strategy Calls", fedstart: "Monthly", growth: "Bi-weekly", prime: "Monthly executive" },
];

// ============================================
// COMPONENT
// ============================================

export default function ServicesPrograms() {
  const [activeProgram, setActiveProgram] = useState("fedstart");
  const [showDetails, setShowDetails] = useState(false);

  const selected = programs.find(p => p.id === activeProgram)!;

  return (
    <>
      <Helmet>
        <title>Programs — FedGovWin Professional Services</title>
        <meta name="description" content="FedStart, Growth, and Prime — structured programs that cover every phase of federal contracting success. Pick where you are and we'll take you further." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue mb-6">
              <TrendingUp size={14} />
              Structured Programs
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
              Start where you are
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Whether you're brand new to federal contracting or already in the game, we have a structured program that covers exactly where you are — and takes you further.
            </p>
          </div>

          {/* 5 C's Preview Strip */}
          <div className="mt-12 flex flex-wrap gap-3">
            {fiveCsPreview.map((c) => (
              <div key={c.name} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                <c.icon size={16} className={c.color} />
                <span className="text-sm font-semibold text-gov-navy">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Our programs cover all 5 phases. Which ones you need depends on where you are.
          </p>
        </div>
      </section>

      {/* ── Program Selector ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Choose Your Program</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Which one fits where you are?
            </h2>
          </div>

          {/* Program Cards */}
          <div className="grid gap-6 lg:grid-cols-3 mb-12">
            {programs.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setActiveProgram(prog.id)}
                className={cn(
                  "text-left rounded-2xl border-2 bg-white transition-all duration-200 overflow-hidden",
                  activeProgram === prog.id
                    ? `${prog.color} shadow-xl`
                    : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                )}
              >
                <div className={cn("p-6", activeProgram === prog.id ? prog.headerBg : "bg-white")}>
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl mb-4", activeProgram === prog.id ? "bg-white/20" : prog.accentBg)}>
                    <prog.icon size={24} className={activeProgram === prog.id ? "text-white" : prog.accentText} />
                  </div>
                  <h3 className={cn("font-display text-2xl font-bold", activeProgram === prog.id ? "text-white" : "text-gov-navy")}>
                    {prog.name}
                  </h3>
                  <p className={cn("text-sm mt-1", activeProgram === prog.id ? "text-white/70" : "text-slate-500")}>
                    {prog.tagline}
                  </p>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-display text-2xl font-bold text-gov-navy">{prog.price}</span>
                    <span className="text-slate-500 text-sm">/ {prog.duration}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{prog.summary}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Program Detail */}
          <Card className="p-8" hover={false}>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", selected.accentBg)}>
                    <selected.icon size={24} className={selected.accentText} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gov-navy">{selected.name}</h3>
                    <p className="text-slate-500 text-sm">{selected.duration}</p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Ideal For</p>
                  <p className="text-slate-700 text-sm">{selected.idealFor}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">What's Included</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selected.outcomes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle size={14} className="text-gov-green shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Investment</p>
                  <p className="mt-1 font-display text-3xl font-bold text-gov-navy">{selected.price}</p>
                  <p className="text-xs text-slate-500 mt-1">{selected.billing} · {selected.duration}</p>
                </div>
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" className="w-full justify-center">
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </LinkButton>
                <p className="text-xs text-slate-400 text-center">Free strategy call to confirm fit before you commit</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto text-center">
            {[
              { icon: Shield, title: "Transparent Pricing", body: "Flat-rate programs with no surprise hourly billings. You know the cost before you start." },
              { icon: Target, title: "Outcomes-Focused", body: "We measure success by contracts won, not deliverables shipped." },
              { icon: CheckCircle, title: "No Lock-In After", body: "After your program, you can continue monthly or stay independent. No forced retention." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gov-blue/10">
                  <item.icon size={22} className="text-gov-blue" />
                </div>
                <p className="font-bold text-gov-navy">{item.title}</p>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table (Deep Dive) ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-gov-blue/30 transition group"
          >
            <div className="text-left">
              <p className="font-bold text-gov-navy">Want a full feature comparison?</p>
              <p className="text-sm text-slate-500 mt-0.5">Side-by-side breakdown of everything included in each program</p>
            </div>
            <ChevronDown
              size={22}
              className={cn("text-slate-400 group-hover:text-gov-blue transition-transform duration-300", showDetails && "rotate-180")}
            />
          </button>

          {showDetails && (
            <div className="mt-6 animate-fade-in-up">
              <Card className="overflow-hidden" hover={false}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left py-4 px-6 text-sm font-semibold text-slate-500">Feature</th>
                        {programs.map((p) => (
                          <th key={p.id} className="py-4 px-6 text-sm font-bold text-gov-navy text-center">{p.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {detailRows.map((row, idx) => (
                        <tr key={row.feature} className={cn("border-b border-slate-100", idx % 2 === 0 && "bg-slate-50/50")}>
                          <td className="py-3 px-6 text-sm text-slate-700">{row.feature}</td>
                          {[row.fedstart, row.growth, row.prime].map((val, i) => (
                            <td key={i} className="py-3 px-6 text-center">
                              {val === true ? (
                                <CheckCircle size={18} className="text-gov-green mx-auto" />
                              ) : val === false ? (
                                <span className="text-slate-300 text-lg">—</span>
                              ) : (
                                <span className="text-xs font-semibold text-gov-blue bg-gov-blue/10 px-2 py-1 rounded-full">{val}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-50">
                        <td className="py-4 px-6 text-sm font-semibold text-slate-700">Investment</td>
                        {programs.map((p) => (
                          <td key={p.id} className="py-4 px-6 text-center">
                            <span className="font-display text-xl font-bold text-gov-navy">{p.price}</span>
                            <p className="text-xs text-slate-500">{p.duration}</p>
                          </td>
                        ))}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <Section title="Not sure which program fits?" kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's figure it out together
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Book a free 30-minute call. We'll assess where you are, what you need, and which program — or custom scope — makes the most sense. No pressure, no commitment.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Phone size={14} /> (813) 665-0308</span>
                <span className="flex items-center gap-1.5"><Mail size={14} /> Info@FedGovWin.com</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} /> Free 30-min assessment</span>
              </div>
            </div>
            <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="shrink-0">
              Book the Call
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
