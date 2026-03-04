import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, Shield, Target, Lightbulb,
  Trophy, Repeat, Rocket, BarChart3, Crown, Phone,
} from "lucide-react";
import Section from "../components/Section";
import { LinkButton } from "../components/Button";
import { BRAND, LINKS } from "../lib/constants";
import ContractDataExplorer from "../components/ContractDataExplorer";

/* ───────────────────────────────────────────── */
/*  DATA                                         */
/* ───────────────────────────────────────────── */

const stats = [
  { value: "7,000+", label: "Registrations Completed" },
  { value: "$640M", label: "Largest Win Supported" },
  { value: "87%", label: "GSA Approval Rate" },
  { value: "100%", label: "On-Time Guarantee" },
];

const fiveCs = [
  { num: "1", name: "Compliance", icon: Shield, desc: "Registrations, certifications & eligibility." },
  { num: "2", name: "Concept", icon: Lightbulb, desc: "Strategy, positioning & materials." },
  { num: "3", name: "Capture", icon: Target, desc: "Finding & qualifying opportunities." },
  { num: "4", name: "Compete", icon: Trophy, desc: "Proposals, pricing & reviews." },
  { num: "5", name: "Continue", icon: Repeat, desc: "Performance, renewals & growth." },
];

/* ───────────────────────────────────────────── */
/*  COMPONENT                                    */
/* ───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FedGovWin — Professional Federal Contracting Services | GSA Schedule | SBA Certifications | Proposal Writing</title>
        <meta
          name="description"
          content="FedGovWin provides expert federal contracting consulting — GSA Schedule applications, SBA certifications, proposal writing, and ongoing contract management. Guaranteed timelines, proven results."
        />
        <meta
          name="keywords"
          content="federal contracting consulting, GSA Schedule, GSA MAS application, FAS Catalog Platform, FCP migration, SAM.gov registration, 8(a) certification, SBA certification, government contracting, proposal writing, FedGovWin"
        />
        <link rel="canonical" href="https://fedgovwin.com/" />
        <meta property="og:title" content="FedGovWin — Professional Federal Contracting Services" />
        <meta property="og:description" content="Expert federal contracting consulting — GSA Schedule, certifications, proposal writing, and contract management. Guaranteed timelines." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="bg-gov-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Win Federal Contracts.{" "}
            <span className="text-gov-gold">Keep Winning.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {BRAND.fullName} helps businesses get registered, get certified, and win government contracts — with guaranteed timelines and proven methodology.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="bg-white text-gov-navy hover:bg-slate-100 font-bold">
              Book Free Consultation <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition font-medium">
              View Services <ArrowRight size={16} />
            </a>
          </div>

          {/* Stats */}
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

      {/* ── CONTRACT SEARCH ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue">Market Intelligence</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">
              Search Federal Contract Awards
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Research past-year contract awards by NAICS code, state, or set-aside type to find your opportunity.
            </p>
          </div>
          <ContractDataExplorer />
        </div>
      </section>

      {/* ── WHO WE ARE + 5 C's ── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — company brief */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue">About FedGovWin</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">
                Built for Federal Contractors
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                FedGovWin Professional Services — based in Tampa, FL — was founded to help businesses navigate the
                federal marketplace without the guesswork. We've completed over 7,000 registrations, supported wins up
                to $640M, and maintain an 87% GSA approval rate.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our team brings backgrounds in government contracting, technology, and business development. Every
                engagement is built on our proven 5&nbsp;C's methodology — a structured path from compliance through
                continued growth.
              </p>
              <Link
                to="/about/methodology"
                className="mt-6 inline-flex items-center gap-2 text-gov-blue font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn more about our methodology <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right — 5 C's */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">The 5 C's Framework</h3>
              {fiveCs.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.num} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-gov-navy flex items-center justify-center text-white shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">C{c.num}</span>
                        <span className="font-bold text-gov-navy text-sm">{c.name}</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — easy decision ── */}
      <section id="services" className="bg-slate-50 py-20 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue">Our Services</p>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold text-gov-navy">
              Two Paths. One Goal: Winning.
            </h2>
            <p className="mt-3 text-slate-600 max-w-lg mx-auto">
              Whether you need a GSA Schedule or a full federal contracting program, we have a clear path for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* GSA Services */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-gov-blue p-6 text-white">
                <h3 className="font-display text-2xl font-bold">GSA Schedule Services</h3>
                <p className="text-white/80 text-sm mt-1">Get on the GSA Schedule or manage your existing contract.</p>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="font-display text-lg font-bold text-gov-navy shrink-0 w-20">$5,500</div>
                    <div>
                      <div className="font-bold text-gov-navy text-sm">GSA Essentials</div>
                      <p className="text-xs text-slate-600">Full MAS application submitted in 30 business days.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="font-display text-lg font-bold text-gov-navy shrink-0 w-20">$9,000</div>
                    <div>
                      <div className="font-bold text-gov-navy text-sm">GSA Full-Service</div>
                      <p className="text-xs text-slate-600">Application + negotiation support + catalog setup.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="font-display text-lg font-bold text-gov-navy shrink-0 w-20">$999</div>
                    <div>
                      <div className="font-bold text-gov-navy text-sm">FCP Catalog Migration</div>
                      <p className="text-xs text-slate-600">SIP → FCP transition in 7–14 days. Avoid contract cancellation.</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gov-green shrink-0" /> 87% approval rate</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gov-green shrink-0" /> 30-day submission guarantee</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gov-green shrink-0" /> Ongoing contract management available</li>
                </ul>

                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gov-blue text-white rounded-lg font-bold hover:bg-gov-blue/90 transition"
                >
                  GSA Schedule Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Contractor Programs */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-gov-navy p-6 text-white">
                <h3 className="font-display text-2xl font-bold">Federal Contractor Programs</h3>
                <p className="text-white/80 text-sm mt-1">From registration to winning — pick where you are.</p>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="w-9 h-9 rounded-lg bg-gov-blue flex items-center justify-center text-white shrink-0">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gov-navy text-sm">FedStart</span>
                        <span className="font-display text-sm font-bold text-slate-500">$3,200</span>
                      </div>
                      <p className="text-xs text-slate-600">3 months — registrations, certifications, capabilities statement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gov-crimson/5 border border-gov-crimson/15 rounded-lg">
                    <div className="w-9 h-9 rounded-lg bg-gov-crimson flex items-center justify-center text-white shrink-0">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gov-navy text-sm">Growth</span>
                        <span className="font-display text-sm font-bold text-slate-500">$6,500</span>
                        <span className="text-xs font-bold text-gov-crimson bg-gov-crimson/10 px-1.5 py-0.5 rounded">Popular</span>
                      </div>
                      <p className="text-xs text-slate-600">6 months — bid portal, campaigns, unlimited RFP reviews.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="w-9 h-9 rounded-lg bg-gov-navy flex items-center justify-center text-white shrink-0">
                      <Crown size={18} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gov-navy text-sm">Prime</span>
                        <span className="font-display text-sm font-bold text-slate-500">$15,500</span>
                      </div>
                      <p className="text-xs text-slate-600">12 months — dedicated capture manager, 5 proposals, 4 campaigns.</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gov-green shrink-0" /> Built on the proven 5 C's methodology</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gov-green shrink-0" /> Upgrade anytime — investment applies as credit</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gov-green shrink-0" /> Clear deliverables, real timelines</li>
                </ul>

                <Link
                  to="/services/programs"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gov-navy text-white rounded-lg font-bold hover:bg-gov-navy/90 transition"
                >
                  View Programs <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Not sure where to start? Book a free consultation and we'll recommend the right path.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <Section title="Ready to Start Winning?" kicker="Next Step" dark>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Book a free 30-minute consultation. We'll assess where you are, recommend the right service, and give you a concrete action plan — no pitch, no obligation.
            </p>
            <ul className="space-y-3">
              {[
                "Federal eligibility and certification review",
                "GSA Schedule and FCP readiness assessment",
                "Opportunity pipeline and win strategy",
                "Clear next-step roadmap — no obligation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white text-sm">
                  <CheckCircle className="text-gov-gold shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Call</h3>
            <p className="text-slate-400 mb-6 text-sm">
              30 minutes. Zero obligation. 100% transparency.
            </p>
            <LinkButton
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="w-full bg-white text-gov-navy hover:bg-slate-100 font-bold"
            >
              Book Now — It's Free <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-sm">
              <Phone size={14} />
              <a href="tel:8136650308" className="hover:text-white transition">{BRAND.phone}</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
