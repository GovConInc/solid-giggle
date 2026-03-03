import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Shield, Target, Link2, Briefcase, RefreshCw,
  CheckCircle, TrendingUp, Lightbulb, BarChart3, FileText
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

// ============================================
// DATA
// ============================================

const fourCs = [
  {
    id: "compliance",
    label: "Compliance",
    tagline: "The Foundation",
    icon: Shield,
    color: "bg-emerald-600",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    description: "Before you can compete, you must be eligible. Compliance is everything required to exist in the federal contracting ecosystem — registrations, certifications, and the ongoing maintenance that keeps you in good standing.",
    whyItMatters: "Most contractors skip steps here and pay for it later. An expired SAM registration costs you a contract. A missing NAICS code means you're invisible to agencies searching for your capabilities. A lapsed certification means you missed set-aside opportunities you were entitled to.",
    tasks: [
      { name: "SAM.gov Registration", type: "Processing", detail: "Entity validation, CAGE code, NAICS optimization, EFT banking" },
      { name: "DSBS & FEMA Profiles", type: "Processing", detail: "SBA search visibility, emergency contracting access" },
      { name: "SBA Certification Check", type: "Strategy", detail: "Eligibility assessment for 8(a), WOSB, SDVOSB, HUBZone" },
      { name: "Annual Renewals", type: "Ongoing", detail: "Proactive tracking so nothing lapses" },
    ],
    outcomes: ["You're eligible. You're visible. You're in the game."],
  },
  {
    id: "capture",
    label: "Capture",
    tagline: "The Hunt",
    icon: Target,
    color: "bg-gov-blue",
    accentBg: "bg-gov-blue/10",
    accentText: "text-gov-blue",
    description: "Capture is how you find the right opportunities before they hit SAM.gov — and position yourself to win them before the RFP even drops. It's the intelligence work that separates contractors who win consistently from those who just bid on everything.",
    whyItMatters: "Win probability is mostly set before the proposal is written. If you're discovering an opportunity the day the RFP releases, you're already behind. Capture is how you show up with a relationship, a solution they've already seen, and a competitive position the incumbent can't match.",
    tasks: [
      { name: "Capability Statement Design", type: "Marketing", detail: "Your federal business card — the first thing a CO looks at" },
      { name: "Pipeline Construction", type: "Strategy", detail: "Qualified opportunities across your target agencies and NAICS" },
      { name: "Competitor Analysis", type: "Data", detail: "Who's the incumbent? What's their pricing? Where are they weak?" },
      { name: "Agency Forecasting", type: "Strategy", detail: "Reading procurement forecasts to identify work 90–180 days out" },
    ],
    outcomes: ["You have a pipeline of real opportunities you can actually win."],
  },
  {
    id: "connect",
    label: "Connect",
    tagline: "The Pitch",
    icon: Link2,
    color: "bg-indigo-600",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    description: "Connect is how you get your solution in front of the decision-makers and turn a capture position into a contract. This is proposals, outreach, presentations, and the moments that convert pipeline into revenue.",
    whyItMatters: "A technically excellent proposal that the evaluator doesn't connect with emotionally doesn't win. Every proposal needs a story — a reason why your solution is right for this agency, this requirement, this moment. That story comes from the capture work. Connect is where you tell it.",
    tasks: [
      { name: "Proposal Development", type: "Writing", detail: "End-to-end proposal using Shipley methodology" },
      { name: "Past Performance Formatting", type: "Writing", detail: "Translating your experience into evaluator language" },
      { name: "Marketing Outreach", type: "Marketing", detail: "Reaching the contracting officers before the opportunity closes" },
      { name: "Contracting Officer Intros", type: "Sales", detail: "Relationship building and pre-award market presence" },
    ],
    outcomes: ["You submit competitive proposals. You win work."],
  },
  {
    id: "consulting",
    label: "Consulting",
    tagline: "The Growth",
    icon: Briefcase,
    color: "bg-gov-crimson",
    accentBg: "bg-gov-crimson/10",
    accentText: "text-gov-crimson",
    description: "Consulting is how you build on wins — managing complex vehicles, scaling into new agencies, and turning a government contract into a federal practice. This is the long game.",
    whyItMatters: "Most contractors win their first contract and then don't know what to do with it. GSA Schedule modifications sit unprocessed. Recompetes are missed because capture started six months too late. Consulting is how you keep what you've built and expand it systematically.",
    tasks: [
      { name: "GSA Schedule Management", type: "Admin", detail: "Modifications, mass mods, catalog management, utilization" },
      { name: "Project Liftoff Support", type: "Ops", detail: "First-30-days compliance setup after award" },
      { name: "Quarterly Reviews", type: "Strategy", detail: "Pipeline, win rate, revenue — measured against goals" },
      { name: "Compliance Audits", type: "Legal", detail: "Internal readiness checks before the government comes looking" },
    ],
    outcomes: ["Your federal practice grows. The wins compound."],
  },
];

const pdca = [
  {
    key: "plan",
    label: "Plan",
    icon: Lightbulb,
    desc: "Define strategy, scope, and success criteria. What are we trying to win? By when? Against whom? This isn't busywork — a bad plan wastes more time than no plan.",
    activities: ["Market sizing and agency targeting", "Opportunity qualification criteria", "Competitive positioning", "Resource and timeline planning"]
  },
  {
    key: "do",
    label: "Do",
    icon: FileText,
    desc: "Execute the work. Registrations get submitted. Proposals get written. Outreach goes out. This is where most firms spend all their time — we pair it with the other three phases.",
    activities: ["Registration and certification work", "Proposal writing and production", "BD outreach and agency engagement", "Pipeline tracking and management"]
  },
  {
    key: "check",
    label: "Check",
    icon: BarChart3,
    desc: "Did it work? Win rates, proposal scores, agency response rates, pipeline velocity — we review the data and diagnose what's driving results and what isn't.",
    activities: ["Win/loss analysis", "Proposal debrief review", "Pipeline stage conversion rates", "Agency relationship health"]
  },
  {
    key: "act",
    label: "Act",
    icon: TrendingUp,
    desc: "Fix what isn't working. Scale what is. Adjust strategy based on what the data tells us. This is the loop that turns a collection of tactics into a repeatable system.",
    activities: ["Strategy adjustment", "Process improvement", "Resource reallocation", "New opportunity identification"]
  },
];

// ============================================
// COMPONENT
// ============================================

export default function AboutMethodology() {
  const [activeC, setActiveC] = useState("compliance");
  const [activePDCA, setActivePDCA] = useState("plan");

  const currentC = fourCs.find((c) => c.id === activeC)!;
  const currentPDCA = pdca.find((p) => p.key === activePDCA)!;

  return (
    <>
      <Helmet>
        <title>Methodology — FedGovWin Professional Services</title>
        <meta name="description" content="The 4 C's framework and PDCA operating rhythm that drive every FedGovWin engagement. How we actually work." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">About Us</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              How we actually work
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our 4 C's framework didn't come from a textbook. It was built from real engagement data — tracking what moved the needle for contractors across hundreds of federal pursuits and refining it into a system that's repeatable.
            </p>
            <p className="mt-4 text-slate-600">
              Combined with a PDCA operating rhythm that keeps every engagement improving month over month, this is how FedGovWin runs every client relationship.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 C's Framework ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Framework</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">The 4 C's</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Every successful government contractor moves through the same four phases — some faster than others, but none skip them. Our job is to run each phase with discipline so you spend less time figuring it out and more time winning.
          </p>

          <div className="mt-10">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 overflow-x-auto">
              {fourCs.map((c) => {
                const isActive = activeC === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveC(c.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all relative",
                      isActive ? "text-gov-navy" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <div className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center transition-colors",
                      isActive ? `${c.color} text-white` : "bg-slate-200 text-slate-400"
                    )}>
                      <c.icon size={16} />
                    </div>
                    {c.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className={cn("absolute bottom-0 left-0 w-full h-0.5", c.color)}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeC}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-8"
              >
                <Card className="p-8" hover={false}>
                  <div className="grid gap-8 lg:grid-cols-3">
                    {/* Left: Description */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center text-white", currentC.color)}>
                            <currentC.icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-bold text-gov-navy">{currentC.label}</h3>
                            <p className="text-sm text-slate-500">{currentC.tagline}</p>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{currentC.description}</p>
                      </div>

                      <div className={cn("p-4 rounded-xl border", currentC.accentBg, "border-slate-200")}>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Why it matters</p>
                        <p className={cn("text-sm leading-relaxed", currentC.accentText)}>
                          {currentC.whyItMatters}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-gov-green font-semibold text-sm">
                          <CheckCircle size={16} />
                          {currentC.outcomes[0]}
                        </div>
                      </div>
                    </div>

                    {/* Right: Tasks */}
                    <div className="bg-slate-50 rounded-xl p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Core Deliverables</h4>
                      <div className="space-y-3">
                        {currentC.tasks.map((task) => (
                          <div key={task.name} className="bg-white p-3 rounded-lg border border-slate-200">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-semibold text-slate-800 text-sm">{task.name}</span>
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 shrink-0">{task.type}</span>
                            </div>
                            <p className="text-xs text-slate-500">{task.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* How they connect */}
          <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200">
            <div className="flex items-start gap-4">
              <RefreshCw className="text-gov-crimson shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gov-navy">The important part most people miss</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Most contractors jump straight to Capture (finding bids) or Connect (writing proposals). They skip Compliance — or rush it — and end up ineligible or invisible. Our framework forces the right sequence: build the foundation first, build the pipeline smart, then win. Each phase makes the next one more effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PDCA ── */}
      <Section title="The Operating Rhythm" kicker="How We Run Engagements">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-slate-600 leading-relaxed">
              Strategy without a review loop is just a plan that gets stale. The PDCA rhythm is how we keep every engagement improving — not just running.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Every month, we look at what we did, whether it worked, why or why not, and what changes. Over time, this compounds: your proposals get more competitive, your pipeline gets more focused, and your win rate goes up because we're adapting to real feedback, not repeating the same playbook.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {pdca.map((p) => {
                const isActive = activePDCA === p.key;
                return (
                  <button
                    key={p.key}
                    onClick={() => setActivePDCA(p.key)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-all",
                      isActive ? "border-gov-crimson bg-red-50/50 shadow-sm" : "border-slate-200 bg-white hover:bg-slate-50"
                    )}
                  >
                    <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center mb-2", isActive ? "bg-gov-crimson text-white" : "bg-slate-100 text-slate-500")}>
                      <p.icon size={16} />
                    </div>
                    <p className="font-bold text-gov-navy">{p.label}</p>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePDCA}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="mt-5 p-6" hover={false}>
                  <p className="font-bold text-gov-navy text-lg">{currentPDCA.label}</p>
                  <p className="mt-2 text-slate-600">{currentPDCA.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {currentPDCA.activities.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-gov-crimson shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <Card className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-5">
              <RefreshCw className="h-5 w-5 text-gov-blue" />
              <p className="font-bold text-gov-navy">What this looks like in practice</p>
            </div>
            <div className="space-y-3">
              {[
                { t: "Month 1", d: "Baseline assessment, foundation gaps identified, initial strategy built" },
                { t: "Month 2–3", d: "Compliance completed, capability statement done, first opportunities in pipeline" },
                { t: "Month 4–6", d: "First proposals submitted, outreach active, win/loss data starts accumulating" },
                { t: "Month 6+", d: "Strategy refined based on data, pipeline optimized, proposals getting sharper" },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-gov-navy text-sm">{x.t}</p>
                  <p className="mt-1 text-sm text-slate-600">{x.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                Timeline varies by engagement type and starting point. Programs like FedStart and Growth are structured to these milestones.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section title="See It Applied to Your Business" kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Book a strategy call
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll walk through where you are in the 4 C's, identify the gaps, and tell you exactly what the right next move is — no pitch, no pressure.
              </p>
            </div>
            <LinkButton
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="shrink-0"
            >
              Book the Call
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
