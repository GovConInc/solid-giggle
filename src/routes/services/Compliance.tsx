import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, CheckCircle, ChevronDown, Shield, Award,
  Building2, MapPin, Clock, AlertTriangle, Phone, Mail, Calendar
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

// ============================================
// DATA
// ============================================

const certifications = [
  {
    code: "8(a)",
    name: "8(a) Business Development",
    benefit: "Sole-source up to $7M",
    color: "bg-gov-blue",
    note: "90–180 days",
    req: "Socially & economically disadvantaged owner",
  },
  {
    code: "SDVOSB",
    name: "Service-Disabled Veteran",
    benefit: "3% federal contracting goal",
    color: "bg-gov-crimson",
    note: "60–90 days",
    req: "51% service-disabled veteran owned",
  },
  {
    code: "WOSB",
    name: "Women-Owned Small Business",
    benefit: "5% federal contracting goal",
    color: "bg-indigo-600",
    note: "30–60 days",
    req: "51% women-owned and controlled",
  },
  {
    code: "HUBZone",
    name: "Historically Underutilized Zone",
    benefit: "10% price preference",
    color: "bg-gov-green",
    note: "60–90 days",
    req: "Office + 35% employees in HUBZone",
  },
  {
    code: "MBE",
    name: "Minority Business Enterprise",
    benefit: "State set-asides & preferences",
    color: "bg-gov-gold",
    note: "30–90 days",
    req: "51% minority-owned (varies by state)",
  },
];

const registrations = [
  {
    icon: Building2,
    name: "SAM.gov",
    tag: "Critical",
    tagColor: "bg-gov-crimson/10 text-gov-crimson",
    desc: "The gateway to all federal contracting. Required for every award and payment.",
  },
  {
    icon: Award,
    name: "SBA DSBS",
    tag: "Critical",
    tagColor: "bg-gov-crimson/10 text-gov-crimson",
    desc: "Dynamic Small Business Search — how contracting officers find small businesses.",
  },
  {
    icon: Shield,
    name: "FEMA Vendor Portal",
    tag: "Recommended",
    tagColor: "bg-gov-blue/10 text-gov-blue",
    desc: "Access disaster response and emergency management contracts ($20B+ market).",
  },
  {
    icon: MapPin,
    name: "State Portals",
    tag: "As Needed",
    tagColor: "bg-slate-100 text-slate-600",
    desc: "50-state vendor registration management and cooperative purchasing enrollment.",
  },
];

const detailItems = [
  {
    title: "Why SAM.gov Is Non-Negotiable",
    items: [
      "Expires annually — miss it and you're invisible to every federal buyer",
      "Wrong NAICS codes mean you never appear in agency search results",
      "EFT banking setup required for contract payments",
      "Representations and certifications must stay current",
    ]
  },
  {
    title: "Our Certification Process",
    items: [
      "Free eligibility assessment to identify your strongest options",
      "Full application preparation and document compilation",
      "Submission and agency correspondence management",
      "Annual review support and renewal tracking",
      "Denial analysis and resubmission if needed",
    ]
  },
  {
    title: "Ongoing Compliance Management",
    items: [
      "Expiration monitoring across all registrations",
      "Automatic renewals before lapse",
      "Address, personnel, and scope updates",
      "Audit preparation and representation support",
    ]
  }
];

// ============================================
// COMPONENT
// ============================================

export default function ServicesCertifications() {
  const [showDetails, setShowDetails] = useState(false);
  const [activeCert, setActiveCert] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Certifications & Compliance — FedGovWin Professional Services</title>
        <meta name="description" content="SBA certifications, SAM.gov registration, and compliance management. Get the certifications that unlock set-aside contracts and stay compliant year-round." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue mb-6">
                <Shield size={14} />
                Foundation Services
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
                Certifications unlock contracts
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                23% of federal contracts are set aside for small businesses. To access them, you need the right certifications — and your registrations can't lapse. We handle both.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Get a Free Assessment
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <button
                  onClick={() => setShowDetails(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-gov-navy hover:border-gov-navy/40 transition"
                >
                  See Full Details
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* Compliance Problem Visual */}
            <Card className="p-8 bg-white" hover={false}>
              <h3 className="font-bold text-lg text-gov-navy flex items-center gap-2 mb-5">
                <AlertTriangle size={20} className="text-gov-crimson" />
                The three things that kill opportunities
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Expired SAM = No Contracts", body: "Your registration expires annually. One missed renewal and you're ineligible for awards and payments." },
                  { title: "Wrong NAICS = Wrong Searches", body: "Agencies search by NAICS code. If yours are wrong, they never find you — regardless of how qualified you are." },
                  { title: "Missing Certs = Missed Set-Asides", body: "If you qualify for 8(a), WOSB, or SDVOSB, you're leaving reserved contract dollars on the table every day." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="h-1.5 w-1.5 rounded-full bg-gov-crimson mt-2 shrink-0" />
                    <div>
                      <p className="font-semibold text-gov-navy text-sm">{item.title}</p>
                      <p className="text-sm text-slate-600 mt-0.5">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-2 text-gov-green font-semibold text-sm">
                <CheckCircle size={16} />
                We handle all of this. You focus on winning.
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Certifications Grid ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">SBA Certifications</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Which ones apply to you?
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Click any certification to see the key benefit and eligibility snapshot. Not sure? We'll assess your eligibility for free.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((cert, idx) => (
              <button
                key={cert.code}
                onClick={() => setActiveCert(activeCert === idx ? null : idx)}
                className={cn(
                  "text-left p-5 rounded-2xl border-2 transition-all duration-300",
                  activeCert === idx
                    ? "border-gov-blue bg-white shadow-lg scale-105"
                    : "border-slate-200 bg-white hover:border-gov-blue/40 hover:shadow-md"
                )}
              >
                <div className={cn("inline-flex px-2 py-1 rounded-lg text-white text-xs font-bold mb-3", cert.color)}>
                  {cert.code}
                </div>
                <p className="font-bold text-gov-navy text-sm">{cert.name}</p>
                <p className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                  <Clock size={11} /> {cert.note}
                </p>
              </button>
            ))}
          </div>

          {activeCert !== null && (
            <Card className="mt-6 p-6 animate-fade-in-up" hover={false}>
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Certification</p>
                  <p className="font-bold text-gov-navy">{certifications[activeCert].name}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gov-green mb-1">Key Benefit</p>
                  <p className="font-semibold text-gov-navy">{certifications[activeCert].benefit}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Core Requirement</p>
                  <p className="text-slate-700">{certifications[activeCert].req}</p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="sm">
                  Check My Eligibility — Free
                  <ArrowRight size={14} className="ml-1.5" />
                </LinkButton>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* ── Registration Management ── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Registration Management</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Set it and forget it — we watch it for you
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Registrations don't stay current on their own. SAM expires annually. Portals need updates when your business changes. Certification reviews come around every year. We track all of it and handle renewals before anything lapses.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-bold text-gov-navy">Starting at $250/month</p>
                <p className="text-sm text-slate-500 mt-0.5">Covers SAM, DSBS, and core registrations. Additional portals and certifications priced by scope.</p>
              </div>
            </div>
            <div className="space-y-4">
              {registrations.map((reg) => (
                <div key={reg.name} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-gov-blue shrink-0">
                    <reg.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gov-navy text-sm">{reg.name}</span>
                      <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", reg.tagColor)}>
                        {reg.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-0.5">{reg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { label: "Certification Support", price: "$500", note: "per application", desc: "Eligibility assessment, full application preparation, submission, and resubmission if denied." },
              { label: "Registration Management", price: "$250", note: "per month", desc: "SAM, DSBS, and core federal registrations kept current and renewed automatically." },
              { label: "Full Compliance Package", price: "Custom", note: "scope-based", desc: "Registrations + certifications + ongoing management. Most clients start here." },
            ].map((item) => (
              <Card key={item.label} className="p-6" hover>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                <div className="mt-3">
                  <span className="font-display text-3xl font-bold text-gov-navy">{item.price}</span>
                  <span className="text-slate-500 text-sm ml-1">{item.note}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
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
              <p className="text-sm text-slate-500 mt-0.5">What we do for each registration, certification timelines, and what you need to prepare</p>
            </div>
            <ChevronDown
              size={22}
              className={cn("text-slate-400 group-hover:text-gov-blue transition-transform duration-300", showDetails && "rotate-180")}
            />
          </button>

          {showDetails && (
            <div className="mt-8 grid gap-6 sm:grid-cols-3 animate-fade-in-up">
              {detailItems.map((section) => (
                <Card key={section.title} className="p-6" hover={false}>
                  <h4 className="font-bold text-gov-navy mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={14} className="text-gov-green shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <Section title="Get Certified. Stay Compliant." kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Start with a free eligibility assessment
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll review your business structure, ownership, and registrations to identify every certification you qualify for — no cost, no commitment.
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
