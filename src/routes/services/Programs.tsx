import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, CheckCircle, ChevronDown, Rocket, BarChart3,
  Crown, Shield, Target, Lightbulb, Trophy, Repeat,
  Phone, Mail, Calendar, TrendingUp, Lock, Zap
} from "lucide-react";
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
    position: "01",
    badge: "New Entrants",
    duration: "3 months",
    price: 3200,
    tagline: "Your entire compliance foundation, built right the first time.",
    pitch: "Most businesses waste 6–12 months figuring out what \"getting registered\" actually means. FedStart compresses that to 30 days and gets you pursuing contracts with the right foundation underneath you.",
    outcomes: [
      { label: "SAM.gov registered & optimized", sub: "NAICS codes, EFT banking, CAGE code" },
      { label: "DSBS + FEMA portal complete", sub: "Visible in every agency search" },
      { label: "SBA certifications submitted", sub: "8(a), WOSB, SDVOSB, HUBZone — all that apply" },
      { label: "Capability statement designed", sub: "Your federal business card, done professionally" },
      { label: "Target agency list built", sub: "Which agencies buy what you sell" },
      { label: "Monthly strategy calls", sub: "Stay on track with expert guidance" },
    ],
    idealFor: "First-time federal contractors, or companies that started the process and got stuck.",
    notFor: "Companies already registered and actively pursuing contracts.",
    accentColor: "from-blue-600 to-blue-800",
    ringColor: "ring-blue-500",
    badgeColor: "bg-blue-100 text-blue-700",
    checkColor: "text-blue-500",
  },
  {
    id: "growth",
    icon: BarChart3,
    name: "Growth",
    position: "02",
    badge: "Most Popular",
    duration: "6 months",
    price: 5800,
    tagline: "Build the pipeline and proposal quality to start winning consistently.",
    pitch: "You're registered. You're bidding. But the win rate is inconsistent, the pipeline is thin, and you're not sure why you're losing. Growth solves that — with a real capture engine and proposal quality that competes.",
    outcomes: [
      { label: "Capture strategy built from scratch", sub: "Focused on agencies, NAICS, and vehicles that fit you" },
      { label: "Qualified opportunity pipeline", sub: "No more pursuing everything; only what you can win" },
      { label: "Proposal writing for 2 bids", sub: "Full development using Shipley methodology" },
      { label: "Red Team review on each bid", sub: "Scored like the government would score it" },
      { label: "Past performance documented", sub: "Commercial history translated into federal relevance" },
      { label: "Bi-weekly strategy calls", sub: "Active guidance every two weeks" },
    ],
    idealFor: "Companies 1–3 years into federal contracting that are bidding but not winning at the rate they expect.",
    notFor: "Businesses that haven't completed SAM registration and basic compliance yet.",
    accentColor: "from-red-600 to-red-800",
    ringColor: "ring-red-500",
    badgeColor: "bg-red-100 text-red-700",
    checkColor: "text-red-500",
  },
  {
    id: "prime",
    icon: Crown,
    name: "Prime",
    position: "03",
    badge: "Full Service",
    duration: "12 months",
    price: 11500,
    tagline: "A full federal practice, built and managed by people who've done it before.",
    pitch: "Prime is for companies ready to make federal contracting a primary revenue channel — not a side experiment. GSA Schedule, sustained pipeline, proposal writing, contract management, and quarterly executive reviews. We run the machine.",
    outcomes: [
      { label: "GSA Schedule submission + management", sub: "Full MAS process from kickoff to award to modifications" },
      { label: "Full compliance management", sub: "Every registration, cert, and renewal handled proactively" },
      { label: "Sustained opportunity pipeline", sub: "Continuous monitoring and qualification across your target space" },
      { label: "Proposal writing, up to 4 per year", sub: "Full development with all color team reviews" },
      { label: "Contract vehicle strategy", sub: "GWACs, BPAs, IDIQs — how to get on them and use them" },
      { label: "Monthly executive reviews", sub: "Pipeline, win rate, revenue — tracked against your goals" },
    ],
    idealFor: "Established businesses ready to commit to federal contracting as a primary revenue source.",
    notFor: "Companies still getting their compliance foundation in place.",
    accentColor: "from-slate-700 to-slate-900",
    ringColor: "ring-slate-600",
    badgeColor: "bg-amber-100 text-amber-700",
    checkColor: "text-emerald-500",
  },
];

const journey = [
  { icon: Shield, label: "Get Compliant", desc: "Registrations & certifications" },
  { icon: Lightbulb, label: "Build Strategy", desc: "Positioning & materials" },
  { icon: Target, label: "Build Pipeline", desc: "Qualified opportunities" },
  { icon: Trophy, label: "Win Contracts", desc: "Proposals & awards" },
  { icon: Repeat, label: "Scale Up", desc: "Perform & expand" },
];

const programCoverage: Record<string, number[]> = {
  fedstart: [0, 1],
  growth: [0, 1, 2, 3],
  prime: [0, 1, 2, 3, 4],
};

// ============================================
// COMPONENT
// ============================================

export default function ServicesPrograms() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showCompare, setShowCompare] = useState(false);

  const selectedProgram = programs.find(p => p.id === selected);

  return (
    <>
      <Helmet>
        <title>Programs — FedGovWin Professional Services</title>
        <meta name="description" content="FedStart, Growth, and Prime — structured programs that meet you where you are and take you to the next level in federal contracting." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-gov-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gov-blue/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-slate-300 mb-6">
              <TrendingUp size={14} />
              Structured Programs
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet you where<br />you are.
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Three programs. Completely different starting points, same destination: a federal revenue channel that works.
            </p>

            {/* Journey Strip */}
            <div className="mt-12 flex items-center gap-1 flex-wrap">
              {journey.map((step, idx) => (
                <div key={step.label} className="flex items-center gap-1">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-white">
                    <step.icon size={14} className="text-gov-gold" />
                    <span className="text-xs font-semibold">{step.label}</span>
                  </div>
                  {idx < journey.length - 1 && (
                    <ArrowRight size={14} className="text-slate-500 shrink-0" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-500">Each program covers a different span of this journey.</p>
          </div>
        </div>
      </section>

      {/* ── Program Cards ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Choose Your Path</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy sm:text-4xl">
              Which program fits where you are?
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((prog) => {
              const isSelected = selected === prog.id;
              const coverage = programCoverage[prog.id];
              return (
                <div
                  key={prog.id}
                  className={cn(
                    "rounded-2xl overflow-hidden bg-white border-2 transition-all duration-300 flex flex-col",
                    isSelected ? `${prog.ringColor} ring-2 shadow-2xl scale-[1.02]` : "border-slate-200 hover:shadow-xl hover:border-slate-300"
                  )}
                >
                  {/* Card Header */}
                  <div className={cn("bg-gradient-to-br p-8 text-white", prog.accentColor)}>
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-display text-5xl font-bold opacity-20">{prog.position}</span>
                      <span className={cn("text-xs font-bold px-3 py-1.5 rounded-full", prog.badgeColor)}>
                        {prog.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                        <prog.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold">{prog.name}</h3>
                        <p className="text-white/70 text-sm">{prog.duration}</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">{prog.tagline}</p>

                    {/* Journey Coverage */}
                    <div className="mt-5 flex items-center gap-1.5">
                      {journey.map((step, idx) => (
                        <div
                          key={step.label}
                          className={cn(
                            "h-2 rounded-full flex-1 transition-all",
                            coverage.includes(idx) ? "bg-white" : "bg-white/20"
                          )}
                          title={step.label}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-white/50">
                      Covers {coverage.length} of {journey.length} phases
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-5">
                      <div className="font-display text-4xl font-bold text-gov-navy">
                        ${prog.price.toLocaleString()}
                      </div>
                      <p className="text-slate-500 text-sm mt-0.5">flat rate · {prog.duration}</p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{prog.pitch}</p>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {prog.outcomes.slice(0, isSelected ? prog.outcomes.length : 3).map((item) => (
                        <li key={item.label} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className={cn("shrink-0 mt-0.5", prog.checkColor)} />
                          <div>
                            <span className="text-sm font-medium text-gov-navy">{item.label}</span>
                            <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {!isSelected && prog.outcomes.length > 3 && (
                      <button
                        onClick={() => setSelected(prog.id)}
                        className="text-sm text-gov-blue font-semibold hover:underline mb-4 text-left flex items-center gap-1"
                      >
                        + {prog.outcomes.length - 3} more included
                        <ChevronDown size={14} />
                      </button>
                    )}

                    <div className="mt-auto space-y-3">
                      <LinkButton
                        href={LINKS.booking}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full justify-center"
                      >
                        Get Started — {prog.name}
                        <ArrowRight size={16} className="ml-2" />
                      </LinkButton>
                      <button
                        onClick={() => setSelected(isSelected ? null : prog.id)}
                        className="w-full text-sm text-slate-500 hover:text-gov-navy font-medium text-center py-1"
                      >
                        {isSelected ? "Show less" : "See full details"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Selected Program Expanded ── */}
      {selectedProgram && (
        <section className="bg-white py-12 border-t border-slate-100">
          <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className={cn("text-sm font-bold uppercase tracking-wider mb-3", selectedProgram.id === "fedstart" ? "text-blue-600" : selectedProgram.id === "growth" ? "text-red-600" : "text-slate-700")}>
                  {selectedProgram.name} — Who It's For
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900 text-sm">Right fit if…</p>
                        <p className="text-green-800 text-sm mt-1">{selectedProgram.idealFor}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-start gap-2">
                      <Lock size={16} className="text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-700 text-sm">Not the right fit if…</p>
                        <p className="text-slate-600 text-sm mt-1">{selectedProgram.notFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">All {selectedProgram.name} Deliverables</p>
                <ul className="space-y-3">
                  {selectedProgram.outcomes.map((item) => (
                    <li key={item.label} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <CheckCircle size={16} className={cn("shrink-0 mt-0.5", selectedProgram.checkColor)} />
                      <div>
                        <p className="font-semibold text-gov-navy text-sm">{item.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Trust Strip ── */}
      <section className="bg-slate-50 py-14 border-t border-slate-200">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto text-center">
            {[
              { icon: Shield, title: "Flat-Rate Pricing", body: "No hourly billing. No surprises. You know the cost before you start." },
              { icon: Zap, title: "Outcomes-Focused", body: "We track contracts won, pipeline built, certifications approved — not hours logged." },
              { icon: CheckCircle, title: "No Forced Retention", body: "After your program, continue month-to-month or go independent. Your call." },
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

      {/* ── Side-by-Side Comparison (Toggle) ── */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="w-full flex items-center justify-between p-6 rounded-2xl border-2 border-slate-200 hover:border-gov-blue/30 transition group"
          >
            <div className="text-left">
              <p className="font-bold text-gov-navy">Side-by-side feature comparison</p>
              <p className="text-sm text-slate-500 mt-0.5">Every deliverable across all three programs, in one table</p>
            </div>
            <ChevronDown
              size={22}
              className={cn("text-slate-400 group-hover:text-gov-blue transition-transform duration-300", showCompare && "rotate-180")}
            />
          </button>

          {showCompare && (
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 animate-fade-in-up">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="bg-slate-50 py-4 px-6 text-left text-sm font-semibold text-slate-500 border-b border-slate-200">
                        Deliverable
                      </th>
                      {programs.map((p) => (
                        <th key={p.id} className="bg-slate-50 py-4 px-6 text-center border-b border-slate-200">
                          <div className="flex items-center justify-center gap-2">
                            <p.icon size={16} className="text-slate-500" />
                            <span className="font-bold text-gov-navy text-sm">{p.name}</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">${p.price.toLocaleString()} · {p.duration}</p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "SAM.gov Registration & Optimization", fedstart: true, growth: true, prime: true },
                      { label: "DSBS + FEMA Portal Setup", fedstart: true, growth: true, prime: true },
                      { label: "SBA Certification Submissions", fedstart: true, growth: true, prime: true },
                      { label: "Capability Statement Design", fedstart: true, growth: true, prime: true },
                      { label: "Target Agency Analysis", fedstart: "Foundation", growth: true, prime: true },
                      { label: "Capture Strategy & Pipeline", fedstart: false, growth: true, prime: true },
                      { label: "Competitive Intelligence", fedstart: false, growth: true, prime: true },
                      { label: "Proposal Writing", fedstart: false, growth: "2 bids", prime: "4 bids" },
                      { label: "Red Team Reviews", fedstart: false, growth: true, prime: true },
                      { label: "Past Performance Documentation", fedstart: false, growth: true, prime: true },
                      { label: "GSA Schedule Submission", fedstart: false, growth: false, prime: true },
                      { label: "Full Compliance Management", fedstart: false, growth: false, prime: true },
                      { label: "Contract Vehicle Strategy", fedstart: false, growth: false, prime: true },
                      { label: "Strategy Calls", fedstart: "Monthly", growth: "Bi-weekly", prime: "Monthly exec" },
                    ].map((row, idx) => (
                      <tr key={row.label} className={cn("border-b border-slate-100", idx % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                        <td className="py-3 px-6 text-sm text-slate-700">{row.label}</td>
                        {[row.fedstart, row.growth, row.prime].map((val, i) => (
                          <td key={i} className="py-3 px-6 text-center">
                            {val === true ? (
                              <CheckCircle size={18} className="text-gov-green mx-auto" />
                            ) : val === false ? (
                              <span className="text-slate-200 text-xl">—</span>
                            ) : (
                              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gov-blue/10 text-gov-blue">{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gov-navy py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-gold">Still deciding?</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Let's figure out the right fit together.
            </h2>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              Book a free 30-minute call. We'll assess where you are, what phase of the journey you're in, and which program — or custom scope — actually makes sense for your business. No pitch. No commitment required.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                Book the Free Assessment
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><Phone size={14} /> (813) 665-0308</span>
              <span className="flex items-center gap-1.5"><Mail size={14} /> Info@FedGovWin.com</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> 30-minute strategy call</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
