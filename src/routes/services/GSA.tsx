import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, CheckCircle, ChevronDown, Clock, Star,
  FileText, Shield, TrendingUp, Zap, Building2, Phone, Mail, Calendar
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

// ============================================
// DATA
// ============================================

const outcomes = [
  {
    icon: Building2,
    title: "Access Every Agency",
    desc: "Every federal department can buy from you directly — no competitive bidding required on qualifying buys.",
  },
  {
    icon: Zap,
    title: "Faster Awards",
    desc: "Contracting officers skip the RFP process. They find you on GSA Advantage, issue an order, and you're working.",
  },
  {
    icon: Shield,
    title: "Pre-Approved Pricing",
    desc: "Your rates are pre-negotiated with GSA. Agencies trust the schedule — there's no re-fighting pricing on every deal.",
  },
  {
    icon: TrendingUp,
    title: "Compound Revenue",
    desc: "Most clients see their first schedule order within 90 days. Then it compounds — one agency becomes five.",
  },
];

const phases = [
  { label: "Kickoff", days: "Days 1–2", desc: "Strategy, SIN selection, document roadmap" },
  { label: "Documents", days: "Days 3–8", desc: "Tax returns, financials, past performance" },
  { label: "Submission", days: "Days 9–12", desc: "eOffer preparation and upload" },
  { label: "Negotiation", days: "Weeks 6–16", desc: "GSA review, clarifications, pricing negotiation" },
  { label: "Award", days: "Week 17+", desc: "Contract awarded, GSA Advantage listing active" },
];

const includes = [
  "SIN selection and strategy",
  "eOffer preparation and upload",
  "Pricing and discount structure",
  "Past performance narratives",
  "Technical proposal writing",
  "GSA negotiations support",
  "Post-award compliance setup",
  "GSA Advantage profile optimization",
];

const detailFaqs = [
  {
    q: "How long does the GSA Schedule process take?",
    a: "Typically 4–6 months from kickoff to award. GSA review alone takes 60–90 days after submission. We compress everything we can control on our end to under two weeks."
  },
  {
    q: "Which GSA Schedule should I apply for?",
    a: "Most professional services and IT firms use MAS (Multiple Award Schedule). We assess your NAICS codes and SINs during kickoff to target exactly the right categories."
  },
  {
    q: "Do I need a GSA Schedule to do business with the government?",
    a: "No — but it's a competitive advantage. It removes friction for COs who want to award quickly, especially on task orders under the simplified acquisition threshold."
  },
  {
    q: "What if I'm rejected?",
    a: "We resolve rejections. Most issues are documentation gaps we can address and resubmit. Our acceptance rate exceeds 95% because we don't submit incomplete packages."
  },
  {
    q: "What happens after I get the schedule?",
    a: "We set up your GSA Advantage listing, help you market to agencies, and can manage ongoing modifications as your business grows or pricing changes."
  },
];

// ============================================
// COMPONENT
// ============================================

export default function ServicesGSA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Helmet>
        <title>GSA Schedule — FedGovWin Professional Services</title>
        <meta name="description" content="Get on the GSA MAS Schedule fast. We handle the entire submission process so federal agencies can buy from you without competitive bidding." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue mb-6">
                <Star size={14} />
                GSA Multiple Award Schedule
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
                Your shortcut to every federal agency
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                A GSA Schedule lets agencies buy from you directly — no RFP, no competition on smaller awards, no friction. We handle the entire submission so you can focus on landing the work.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Start My Schedule
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

            {/* Timeline Visual */}
            <div>
              <Card className="p-6 bg-gov-navy" hover={false}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">What to expect</p>
                <div className="space-y-4">
                  {phases.map((phase, idx) => (
                    <div key={phase.label} className="flex gap-4 items-start">
                      <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-gov-blue/20 border border-gov-blue/40 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        {idx < phases.length - 1 && (
                          <div className="w-px h-8 bg-white/10 mt-1" />
                        )}
                      </div>
                      <div className="pb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-white">{phase.label}</span>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-slate-300">{phase.days}</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-0.5">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-slate-300 text-sm">
                  <Clock size={14} className="text-gov-gold" />
                  Most clients are awarded within 4–6 months
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Why It Matters</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy sm:text-4xl">
              What a GSA Schedule actually does for you
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <Card key={item.title} className="p-6" hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-gov-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">What We Do</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Everything. Start to finish.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                A GSA submission has dozens of moving parts — financial documents, pricing matrices, technical narratives, compliance certifications. We've done this hundreds of times. You provide the inputs; we build and submit the package.
              </p>
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" className="mt-8">
                Get a Free Assessment
                <ArrowRight size={16} className="ml-2" />
              </LinkButton>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle size={16} className="text-gov-green shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-gov-navy" hover={false}>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Investment</p>
              <div className="mt-3">
                <span className="font-display text-5xl font-bold text-white">$3,500</span>
                <span className="text-slate-400 ml-2">flat rate</span>
              </div>
              <p className="mt-4 text-slate-300 max-w-md mx-auto">
                Fixed-price. No hourly billing surprises. Includes all submissions, revisions, and negotiation support through award.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </LinkButton>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Phone size={13} /> (813) 665-0308</span>
                <span className="flex items-center gap-1.5"><Mail size={13} /> Info@FedGovWin.com</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Deep Dive (Collapsible) ── */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between p-6 rounded-2xl border-2 border-slate-200 hover:border-gov-blue/30 transition group"
          >
            <div className="text-left">
              <p className="font-bold text-gov-navy">Want the full breakdown?</p>
              <p className="text-sm text-slate-500 mt-0.5">Process details, common questions, and what to prepare</p>
            </div>
            <ChevronDown
              size={22}
              className={cn("text-slate-400 group-hover:text-gov-blue transition-transform duration-300", showDetails && "rotate-180")}
            />
          </button>

          {showDetails && (
            <div className="mt-8 space-y-8 animate-fade-in-up">

              {/* Detailed phase breakdown */}
              <div>
                <h3 className="font-display text-xl font-bold text-gov-navy mb-4">Phase-by-Phase Detail</h3>
                <div className="space-y-3">
                  {[
                    {
                      phase: "Days 1–2: Kickoff Consultation",
                      items: ["Review business capabilities and target SINs", "Identify required documents", "Set milestones and communication cadence", "Competitive pricing analysis"]
                    },
                    {
                      phase: "Days 3–8: Document Collection",
                      items: ["Federal tax returns (2 years min)", "Financial statements and balance sheet", "Past performance narratives (3–5 projects)", "Commercial price lists or invoices"]
                    },
                    {
                      phase: "Days 9–12: eOffer Preparation",
                      items: ["Technical proposal writing", "Pricing matrix and discount structure", "Compliance certifications", "Upload and submission to GSA portal"]
                    },
                    {
                      phase: "Weeks 6–16: GSA Review & Negotiation",
                      items: ["Respond to GSA clarification questions", "Price negotiation support", "Document revisions as needed", "Industrial funding fee setup"]
                    },
                  ].map((section) => (
                    <Card key={section.phase} className="p-5" hover={false}>
                      <p className="font-semibold text-gov-navy mb-3">{section.phase}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {section.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-gov-blue shrink-0" />
                            {item}
                          </div>
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
      <Section title="Ready to get on schedule?" kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Book a free eligibility call
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                30 minutes. We'll confirm your eligibility, walk through the timeline, and answer every question — no commitment required.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Phone size={14} /> (813) 665-0308</span>
                <span className="flex items-center gap-1.5"><Mail size={14} /> Info@FedGovWin.com</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} /> 30-minute call</span>
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
