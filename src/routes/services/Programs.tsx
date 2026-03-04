import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, CheckCircle, Rocket, BarChart3, Crown,
  ChevronDown, Shield, Check, Lightbulb, Trophy, Repeat,
  Target, Phone, X,
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

/* ───────────────────────────────────────────── */
/*  DATA                                         */
/* ───────────────────────────────────────────── */

const programs = [
  {
    id: "fedstart",
    name: "FedStart",
    tagline: "Get Registered & Certified",
    duration: "3 Months",
    price: 3200,
    icon: Rocket,
    who: "New to federal contracting — need the compliance foundation before you can bid.",
    highlights: [
      "SAM.gov registration (5 business days)",
      "All SBA certifications submitted (8(a), WOSB, SDVOSB, HUBZone)",
      "DSBS & FEMA vendor portal profiles",
      "Professional capabilities statement — designed & print-ready",
      "Marketing strategy + 1,000 curated federal contacts",
      "Monthly strategy calls for 3 months + 1 RFP review",
    ],
    metrics: [
      { value: "5 Days", label: "SAM.gov" },
      { value: "14 Days", label: "Cert Submission" },
      { value: "1,000", label: "Contacts" },
      { value: "Monthly", label: "Strategy Calls" },
    ],
    deliverables: [
      {
        heading: "Compliance Services",
        items: [
          "SAM.gov registration & optimization (CAGE code, UEI, NAICS codes, reps & certs)",
          "DSBS profile creation & keyword optimization",
          "FEMA Vendor Portal registration",
          "SBA certification eligibility analysis & application submission",
        ],
      },
      {
        heading: "Concept Development",
        items: [
          "Professional capabilities statement (print-ready + digital)",
          "Marketing strategy document with target agency analysis",
          "1,000 targeted contacts (COs, small biz specialists, PMs, primes)",
        ],
      },
      {
        heading: "Ongoing Support",
        items: [
          "3 monthly 60-minute strategy calls",
          "1 full RFP review before submission (compliance, technical, pricing)",
        ],
      },
    ],
    notIncluded: ["Bid portal access", "Marketing campaigns", "Multiple proposal reviews", "Dedicated capture management"],
    upgradeNote: "Upgrade to Growth anytime — your full FedStart investment applies as credit.",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Build Your Pipeline",
    duration: "6 Months",
    price: 6500,
    icon: BarChart3,
    popular: true,
    who: "Registered but not winning — need active pursuit tools, outreach, and proposal support.",
    highlights: [
      "Everything in FedStart included",
      "Federal Bid Portal — 2,200+ bid sources, 6 months access",
      "2 professional email campaigns (2,000 contacts total)",
      "Unlimited RFP reviews with debrief calls (3–5 day turnaround)",
      "Daily bid alerts + opportunity qualification support",
      "Prime contractor targeting & teaming strategy",
    ],
    metrics: [
      { value: "2,200+", label: "Bid Sources" },
      { value: "2,000", label: "Campaign Contacts" },
      { value: "Unlimited", label: "RFP Reviews" },
      { value: "6 Months", label: "Portal Access" },
    ],
    deliverables: [
      {
        heading: "Everything in FedStart",
        items: [
          "All compliance registrations, certifications, capabilities statement, strategy & contacts",
        ],
      },
      {
        heading: "Capture Tools & Intelligence",
        items: [
          "Federal Bid Portal access (2,200+ sources, custom filters, daily alerts, competitor tracking)",
          "Opportunity qualification support with bid/no-bid analysis",
        ],
      },
      {
        heading: "Marketing Campaigns",
        items: [
          "2 email campaigns (1,000 contacts each) — strategy, copywriting, execution, tracking",
          "Prime contractor identification, intro facilitation, teaming guidance",
        ],
      },
      {
        heading: "Proposal Support",
        items: [
          "Unlimited Gold Team RFP reviews (compliance matrix, technical, pricing, debrief call, 3-5 day turnaround)",
        ],
      },
      {
        heading: "Ongoing Support",
        items: [
          "Monthly 60-minute strategy sessions throughout engagement",
        ],
      },
    ],
    notIncluded: ["Dedicated capture manager", "Full proposal writing", "Quarterly campaigns", "Year-round compliance"],
    upgradeNote: "Upgrade to Prime anytime — your full Growth investment applies as credit.",
  },
  {
    id: "prime",
    name: "Prime",
    tagline: "Full-Service Partnership",
    duration: "12 Months",
    price: 15500,
    icon: Crown,
    who: "Ready to make federal your primary revenue — need a dedicated BD team without the salary.",
    highlights: [
      "Everything in Growth included",
      "Dedicated capture manager for 12 months",
      "Up to 5 fully written & submitted proposals",
      "4 quarterly marketing campaigns (Q1–Q4)",
      "Year-round compliance management — no renewals missed",
      "Same-day priority access via phone, email & text",
    ],
    metrics: [
      { value: "Dedicated", label: "Capture Manager" },
      { value: "5", label: "Full Proposals" },
      { value: "4/Year", label: "Campaigns" },
      { value: "Same Day", label: "Response Time" },
    ],
    deliverables: [
      {
        heading: "Everything in Growth",
        items: [
          "All FedStart + Growth services — registrations, portal (12 months), 2 campaigns, unlimited reviews",
        ],
      },
      {
        heading: "Dedicated Capture Management",
        items: [
          "Named capture manager — pipeline building, opportunity qualification, pre-RFP intel, agency mapping",
          "30-50 opportunities tracked, 10-15 active pursuits, weekly updates",
          "Living pipeline dashboard with stage tracking and forecasting",
        ],
      },
      {
        heading: "4 Quarterly Campaigns",
        items: [
          "Q1 fiscal year targeting → Q2 mid-year spend → Q3 year-end push → Q4 next-year positioning",
          "Full reply management and meeting scheduling support",
        ],
      },
      {
        heading: "Full Proposal Development",
        items: [
          "Up to 5 complete proposals — RFP analysis, win themes, technical writing, pricing, graphics, red team review",
          "10-14 day typical turnaround (alone worth $25,000+)",
        ],
      },
      {
        heading: "Year-Round Compliance",
        items: [
          "SAM.gov renewal, certification maintenance, size standard monitoring, proactive renewal handling",
        ],
      },
      {
        heading: "Priority Support",
        items: [
          "Same-day email, 2-hour phone callback, 1-hour text response, after-hours availability",
          "Quarterly 90-minute business reviews — win/loss analysis, pipeline health, strategy adjustment",
        ],
      },
    ],
    notIncluded: [],
    upgradeNote: null,
  },
];

const comparisonRows = [
  { label: "SAM.gov Registration", f: true, g: true, p: true },
  { label: "DSBS & FEMA Portals", f: true, g: true, p: true },
  { label: "SBA Certifications", f: true, g: true, p: true },
  { label: "Capabilities Statement", f: true, g: true, p: true },
  { label: "Marketing Strategy + Contacts", f: "1,000", g: "2,000", p: "Quarterly" },
  { label: "Email Campaigns", f: false, g: "2", p: "4" },
  { label: "Federal Bid Portal", f: false, g: "6 months", p: "12 months" },
  { label: "Daily Bid Alerts", f: false, g: true, p: true },
  { label: "Opportunity Qualification", f: false, g: true, p: true },
  { label: "Capture Management", f: false, g: "Guided", p: "Dedicated" },
  { label: "RFP Reviews", f: "1", g: "Unlimited", p: "Unlimited" },
  { label: "Full Proposal Writing", f: false, g: false, p: "Up to 5" },
  { label: "Compliance Management", f: "3 months", g: "6 months", p: "12 months" },
  { label: "Response Time", f: "48 hrs", g: "24 hrs", p: "Same day" },
  { label: "Quarterly Business Reviews", f: false, g: false, p: "4x/year" },
];

const fiveCs = [
  { num: "1", name: "Compliance", desc: "Registrations, certifications & eligibility — the foundation.", icon: Shield, color: "text-blue-600" },
  { num: "2", name: "Concept", desc: "Strategy, positioning & marketing materials — the plan.", icon: Lightbulb, color: "text-emerald-600" },
  { num: "3", name: "Capture", desc: "Finding & qualifying opportunities — the pipeline.", icon: Target, color: "text-rose-600" },
  { num: "4", name: "Compete", desc: "Proposals, pricing & reviews — the win.", icon: Trophy, color: "text-amber-600" },
  { num: "5", name: "Continue", desc: "Performance, renewals & growth — the future.", icon: Repeat, color: "text-purple-600" },
];

const stats = [
  { value: "200+", label: "Contractors Launched" },
  { value: "87%", label: "Client Win Rate" },
  { value: "$109M+", label: "Awards Facilitated" },
  { value: "14 Days", label: "Cert Turnaround" },
];

/* ───────────────────────────────────────────── */
/*  COMPONENT                                    */
/* ───────────────────────────────────────────── */

export default function Programs() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Federal Contractor Programs — FedGovWin Professional Services</title>
        <meta name="description" content="Win federal contracts with our proven 5 C's methodology. FedStart ($3,200), Growth ($6,500), and Prime ($15,500) — clear deliverables, guaranteed timelines." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="bg-gov-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Everything You Need to{" "}
            <span className="text-gov-gold">Win Federal Contracts.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Three programs built on our proven 5&nbsp;C's methodology — from getting registered to building a serious federal practice. Pick where you are. Upgrade anytime.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="bg-white text-gov-navy hover:bg-slate-100 font-bold">
              Book Free Consultation <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <a href="#programs" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition font-medium">
              View Programs <ArrowRight size={16} />
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAM CARDS ── */}
      <section id="programs" className="bg-slate-50 py-20 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue">Choose Your Program</p>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold text-gov-navy">
              Three Levels. One Path to Winning.
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Your full investment always carries forward as credit when you upgrade.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {programs.map((p) => {
              const Icon = p.icon;
              const isOpen = openCard === p.id;

              return (
                <div
                  key={p.id}
                  className={cn(
                    "rounded-2xl bg-white border flex flex-col overflow-hidden",
                    p.popular
                      ? "border-gov-crimson ring-2 ring-gov-crimson/20 shadow-lg"
                      : "border-slate-200 shadow-sm"
                  )}
                >
                  {/* Popular tag */}
                  {p.popular && (
                    <div className="bg-gov-crimson text-white text-center py-1.5 text-xs font-bold tracking-wider uppercase">
                      Most Popular
                    </div>
                  )}

                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center text-white",
                        p.id === "fedstart" ? "bg-gov-blue" : p.id === "growth" ? "bg-gov-crimson" : "bg-gov-navy"
                      )}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-gov-navy">{p.name}</h3>
                        <p className="text-sm text-slate-500">{p.tagline}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-display text-4xl font-bold text-gov-navy">${p.price.toLocaleString()}</span>
                      <span className="text-slate-500 text-sm">/ {p.duration.toLowerCase()}</span>
                    </div>

                    {/* Who it's for */}
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed border-l-2 border-slate-200 pl-4">
                      {p.who}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6 flex-1">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle size={16} className="text-gov-green shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-center">
                          <div className="font-display text-lg font-bold text-gov-navy">{m.value}</div>
                          <div className="text-xs text-slate-500">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <LinkButton
                      href={LINKS.booking}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "w-full justify-center font-bold mb-3",
                        p.popular
                          ? "bg-gov-crimson hover:bg-gov-crimson/90 text-white"
                          : p.id === "prime"
                          ? "bg-gov-navy hover:bg-gov-navy/90 text-white"
                          : ""
                      )}
                    >
                      Start {p.name} — ${p.price.toLocaleString()}
                      <ArrowRight size={16} className="ml-1.5" />
                    </LinkButton>

                    {/* Details toggle */}
                    <button
                      onClick={() => setOpenCard(isOpen ? null : p.id)}
                      className="w-full py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 flex items-center justify-center gap-1.5 transition"
                    >
                      {isOpen ? "Hide details" : "Full deliverables"}
                      <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
                    </button>
                  </div>

                  {/* Expanded details */}
                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50 px-6 lg:px-8 py-6 space-y-5">
                      {p.deliverables.map((d) => (
                        <div key={d.heading}>
                          <h4 className="text-sm font-bold text-gov-navy mb-2">{d.heading}</h4>
                          <ul className="space-y-1.5">
                            {d.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <Check size={14} className="text-gov-green shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {p.notIncluded.length > 0 && (
                        <div className="pt-4 border-t border-slate-200">
                          <h4 className="text-sm font-bold text-slate-500 mb-2">Available in Higher Tiers</h4>
                          <ul className="space-y-1">
                            {p.notIncluded.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                                <X size={12} className="shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {p.upgradeNote && (
                        <p className="text-sm text-gov-green font-medium pt-2">{p.upgradeNote}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Not sure which fits? We'll help you decide in a free 30-minute consultation — no pitch, no obligation.
          </p>
        </div>
      </section>

      {/* ── 5 C's METHODOLOGY — inline row ── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue">Our Framework</p>
            <h2 className="mt-2 font-display text-2xl lg:text-3xl font-bold text-gov-navy">
              The 5&nbsp;C's of Federal Contracting
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-lg mx-auto">
              Every program is built on this methodology. Master all five to build a sustainable federal practice.
            </p>
          </div>

          <div className="grid sm:grid-cols-5 gap-4">
            {fiveCs.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.num} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <Icon size={24} className={cn("mx-auto mb-2", c.color)} />
                  <div className="text-xs font-bold text-slate-400 mb-0.5">C{c.num}</div>
                  <h4 className="font-bold text-gov-navy text-sm">{c.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-gov-navy py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">Side-by-Side Comparison</h2>
            <p className="mt-2 text-slate-400 text-sm">Every feature across all three programs.</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left text-slate-400 font-medium w-[40%]">Feature</th>
                  <th className="p-4 text-center text-white font-bold">
                    FedStart<br /><span className="text-slate-400 font-normal text-xs">$3,200</span>
                  </th>
                  <th className="p-4 text-center text-white font-bold">
                    Growth<br /><span className="text-gov-gold font-normal text-xs">$6,500</span>
                  </th>
                  <th className="p-4 text-center text-white font-bold">
                    Prime<br /><span className="text-slate-400 font-normal text-xs">$15,500</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={cn("border-b border-white/5", i % 2 === 0 && "bg-white/[0.02]")}>
                    <td className="p-3 px-4 text-slate-300">{row.label}</td>
                    {([row.f, row.g, row.p] as (boolean | string)[]).map((val, j) => (
                      <td key={j} className="p-3 text-center">
                        {val === true ? (
                          <Check size={16} className="mx-auto text-gov-green" />
                        ) : val === false ? (
                          <span className="text-slate-600">—</span>
                        ) : (
                          <span className="text-white font-medium">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── GSA CROSSLINK ── */}
      <section className="bg-gov-blue py-10">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="font-display text-lg font-bold">Need a GSA Schedule?</h3>
            <p className="text-white/80 text-sm mt-1">
              GSA MAS — $5,500 Essentials or $9,000 Full-Service. Catalog uploads from $999.
            </p>
          </div>
          <LinkButton href="/services" className="bg-white text-gov-blue hover:bg-slate-100 font-bold shrink-0">
            GSA Schedule Services <ArrowRight size={16} className="ml-1.5" />
          </LinkButton>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-2xl px-5 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gov-navy">
            One Conversation. A Clear Path Forward.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Book a free 30-minute consultation. We'll assess where you are, recommend the right program, and give you a concrete action plan — no pitch, no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="font-bold">
              Book Free Consultation <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <a href="tel:8136650308" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gov-navy/20 text-gov-navy hover:bg-gov-navy/5 rounded-lg font-semibold transition">
              <Phone size={18} /> (813) 665-0308
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Upgrade anytime — your full investment always applies as credit toward the next tier.
          </p>
        </div>
      </section>
    </>
  );
}
