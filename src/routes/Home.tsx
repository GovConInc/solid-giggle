import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, Shield, Target, Lightbulb,
  Trophy, Repeat, Rocket, BarChart3, Crown, Phone,
  FileText, Award, ClipboardCheck, TrendingUp, Zap,
  Users, Building2, Globe, Search, PenTool,
} from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import { LinkButton } from "../components/Button";
import { BRAND, LINKS } from "../lib/constants";
import ContractDataExplorer from "../components/ContractDataExplorer";

/* ───────────────────────────────────────────── */
/*  DATA                                         */
/* ───────────────────────────────────────────── */

const stats = [
  { value: "7,000+", label: "Registrations Completed", icon: ClipboardCheck },
  { value: "$640M", label: "Largest Win Supported", icon: TrendingUp },
  { value: "87%", label: "GSA Approval Rate", icon: Award },
  { value: "100%", label: "On-Time Guarantee", icon: Zap },
];

const fiveCs = [
  { num: "1", name: "Compliance", icon: Shield, desc: "Registrations, certifications & eligibility.", color: "from-gov-blue to-gov-blue/70" },
  { num: "2", name: "Concept", icon: Lightbulb, desc: "Strategy, positioning & materials.", color: "from-emerald-600 to-emerald-600/70" },
  { num: "3", name: "Capture", icon: Target, desc: "Finding & qualifying opportunities.", color: "from-gov-crimson to-gov-crimson/70" },
  { num: "4", name: "Compete", icon: Trophy, desc: "Proposals, pricing & reviews.", color: "from-amber-600 to-amber-600/70" },
  { num: "5", name: "Continue", icon: Repeat, desc: "Performance, renewals & growth.", color: "from-purple-600 to-purple-600/70" },
];

const quickLinks = [
  { label: "SAM.gov Guide", to: "/information/sam-dsbs-fema", icon: Building2, desc: "Registration essentials" },
  { label: "Find Bids", to: "/information/finding-bids", icon: Search, desc: "RFPs & RFQs" },
  { label: "Certifications", to: "/information/certification-data", icon: Award, desc: "8(a), HUBZone, SDVOSB" },
  { label: "Proposal Help", to: "/information/writing-proposals", icon: PenTool, desc: "Color team method" },
  { label: "Contract Vehicles", to: "/information/contract-vehicles", icon: FileText, desc: "GSA MAS, OASIS+" },
  { label: "Search Awards", to: "/information/search-contracts", icon: Globe, desc: "Past award data" },
];

const fedMarketData = [
  { label: "Total Federal Contract Spending (FY2024)", value: "$765B+" },
  { label: "Small Business Set-Aside Goal", value: "23%" },
  { label: "Small Business Awards", value: "$178B+" },
  { label: "New Contracts Daily on SAM.gov", value: "500+" },
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
      <section className="relative bg-hero-gradient overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gov-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gov-crimson/8 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — headline */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6">
                <span className="h-2 w-2 rounded-full bg-gov-green animate-pulse" />
                Federal contracting expertise since 2010
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Win Federal Contracts.{" "}
                <span className="gradient-text-hero">Keep Winning.</span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
                From SAM.gov registration to GSA Schedule awards and winning proposals — {BRAND.fullName} gives you the strategy, tools, and expertise to compete and win in the federal marketplace.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton
                  href={LINKS.booking}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  className="bg-white text-gov-navy hover:bg-slate-100 font-bold shadow-lg"
                >
                  Book Free Consultation <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <a href="#services" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-xl hover:bg-white/10 transition font-semibold text-base">
                  View Services <ArrowRight size={16} />
                </a>
              </div>

              {/* Trust line */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-gov-green" /> 7,000+ registrations</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-gov-green" /> $640M largest win</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-gov-green" /> 87% GSA approval</span>
              </div>
            </div>

            {/* Right — stats grid */}
            <div className="animate-fade-in-up stagger-2">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <Icon size={20} className="text-gov-gold mb-3 group-hover:scale-110 transition-transform" />
                      <div className="stat-number text-3xl text-white">{s.value}</div>
                      <div className="text-sm text-slate-400 mt-1">{s.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Mini federal market callout */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-gov-gold mb-3">
                  <TrendingUp size={16} />
                  Federal Market Snapshot
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {fedMarketData.map((d) => (
                    <div key={d.label}>
                      <div className="font-display text-lg font-bold text-white">{d.value}</div>
                      <div className="text-xs text-slate-400 leading-snug">{d.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* ── QUICK NAV — Information Hub ── */}
      <section className="bg-slate-50 py-12 -mt-12 relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex flex-col items-center gap-2 rounded-2xl bg-white border border-slate-200 p-4 text-center hover:border-gov-blue/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue group-hover:bg-gov-blue group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gov-navy text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE + 5 C's ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — company brief (3 cols) */}
            <div className="lg:col-span-2">
              <div className="accent-line mb-6" />
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">About FedGovWin</p>
              <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold text-gov-navy">
                Built for Federal Contractors
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Based in Tampa, FL — {BRAND.fullName} was founded to help businesses navigate the
                federal marketplace without the guesswork. We've completed over 7,000 registrations, supported wins up
                to $640M, and maintain an 87% GSA approval rate.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our team brings backgrounds in government contracting, technology, and business development. Every
                engagement is built on our proven 5&nbsp;C's methodology.
              </p>
              <Link
                to="/about/methodology"
                className="mt-6 inline-flex items-center gap-2 text-gov-blue font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn more about our methodology <ArrowRight size={16} />
              </Link>

              {/* Quick team stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="font-display text-2xl font-bold text-gov-navy">15+</div>
                  <div className="text-xs text-slate-500 mt-0.5">Years Experience</div>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="font-display text-2xl font-bold text-gov-navy">98%</div>
                  <div className="text-xs text-slate-500 mt-0.5">Approval Rate</div>
                </div>
              </div>
            </div>

            {/* Right — 5 C's (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-5">The 5 C's Framework</h3>
              <div className="grid sm:grid-cols-5 gap-3">
                {fiveCs.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.num}
                      className="group relative flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-gov-blue/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">C{c.num}</span>
                      <span className="font-bold text-gov-navy text-sm mt-0.5">{c.name}</span>
                      <p className="text-xs text-slate-500 mt-1.5 leading-snug">{c.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Key insight box */}
              <div className="mt-5 rounded-2xl bg-gov-navy p-5 flex items-start gap-4">
                <Zap className="text-gov-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-semibold text-white text-sm">Why methodology matters</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Most businesses jump to writing proposals. We start earlier — building your foundation, finding opportunities before competitors, and positioning you to win before the RFP drops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — easy decision ── */}
      <section id="services" className="bg-slate-50 py-20 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Our Services</p>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold text-gov-navy">
              Two Paths. One Goal: Winning.
            </h2>
            <p className="mt-3 text-slate-600 max-w-lg mx-auto">
              Whether you need a GSA Schedule or a full federal contracting program, we have a clear path for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* GSA Services */}
            <Card className="overflow-hidden flex flex-col" variant="elevated" hover={false}>
              <div className="bg-gradient-to-r from-gov-blue to-gov-blue/80 p-6 lg:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <Shield className="mb-3 opacity-80" size={28} />
                <h3 className="font-display text-2xl font-bold">GSA Schedule Services</h3>
                <p className="text-white/80 text-sm mt-1">Get on the GSA Schedule or manage your existing contract.</p>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-gov-blue/20 transition-colors">
                    <div className="font-display text-xl font-bold text-gov-navy shrink-0 w-20">$5,500</div>
                    <div>
                      <div className="font-bold text-gov-navy text-sm">GSA Essentials</div>
                      <p className="text-xs text-slate-600 mt-0.5">Full MAS application submitted in 30 business days.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gov-blue/5 border border-gov-blue/15 rounded-xl">
                    <div className="font-display text-xl font-bold text-gov-navy shrink-0 w-20">$9,000</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gov-navy text-sm">GSA Full-Service</span>
                        <span className="text-[10px] font-bold text-gov-blue bg-gov-blue/10 px-1.5 py-0.5 rounded">Best Value</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">Application + negotiation support + catalog setup.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-gov-blue/20 transition-colors">
                    <div className="font-display text-xl font-bold text-gov-navy shrink-0 w-20">$999</div>
                    <div>
                      <div className="font-bold text-gov-navy text-sm">FCP Migration</div>
                      <p className="text-xs text-slate-600 mt-0.5">SIP to FCP transition in 7-14 days.</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle size={15} className="text-gov-green shrink-0" /> 87% approval rate</li>
                  <li className="flex items-center gap-2"><CheckCircle size={15} className="text-gov-green shrink-0" /> 30-day submission guarantee</li>
                  <li className="flex items-center gap-2"><CheckCircle size={15} className="text-gov-green shrink-0" /> Ongoing contract management available</li>
                </ul>

                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gov-blue text-white rounded-xl font-bold hover:bg-gov-blue/90 transition shadow-sm hover:shadow-md"
                >
                  GSA Schedule Services <ArrowRight size={16} />
                </Link>
              </div>
            </Card>

            {/* Contractor Programs */}
            <Card className="overflow-hidden flex flex-col" variant="elevated" hover={false}>
              <div className="bg-gradient-to-r from-gov-navy to-gov-navy/90 p-6 lg:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <Rocket className="mb-3 opacity-80" size={28} />
                <h3 className="font-display text-2xl font-bold">Federal Contractor Programs</h3>
                <p className="text-white/80 text-sm mt-1">From registration to winning — pick where you are.</p>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-gov-blue/20 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gov-blue to-gov-blue/70 flex items-center justify-center text-white shrink-0">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gov-navy text-sm">FedStart</span>
                        <span className="font-display text-sm font-bold text-slate-500">$3,200</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">3 months — registrations, certifications, capabilities statement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gov-crimson/5 border border-gov-crimson/15 rounded-xl relative">
                    <div className="absolute -top-0.5 right-4 text-[10px] font-bold text-white bg-gov-crimson px-2.5 py-0.5 rounded-b-lg">Most Popular</div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gov-crimson to-gov-crimson/70 flex items-center justify-center text-white shrink-0">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gov-navy text-sm">Growth</span>
                        <span className="font-display text-sm font-bold text-slate-500">$6,500</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">6 months — bid portal, campaigns, unlimited RFP reviews.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-gov-navy/20 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gov-navy to-gov-navy/70 flex items-center justify-center text-white shrink-0">
                      <Crown size={18} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gov-navy text-sm">Prime</span>
                        <span className="font-display text-sm font-bold text-slate-500">$15,500</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">12 months — dedicated capture manager, 5 proposals, 4 campaigns.</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle size={15} className="text-gov-green shrink-0" /> Built on the proven 5 C's methodology</li>
                  <li className="flex items-center gap-2"><CheckCircle size={15} className="text-gov-green shrink-0" /> Upgrade anytime — investment applies as credit</li>
                  <li className="flex items-center gap-2"><CheckCircle size={15} className="text-gov-green shrink-0" /> Clear deliverables, real timelines</li>
                </ul>

                <Link
                  to="/services/programs"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gov-navy text-white rounded-xl font-bold hover:bg-gov-navy/90 transition shadow-sm hover:shadow-md"
                >
                  View Programs <ArrowRight size={16} />
                </Link>
              </div>
            </Card>
          </div>

          {/* Cross-links to other services */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <Link
              to="/services/compliance-capture"
              className="group flex items-center gap-4 rounded-2xl bg-white border border-slate-200 p-5 hover:border-gov-blue/30 hover:shadow-lg transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-green/10 text-gov-green group-hover:bg-gov-green group-hover:text-white transition-colors shrink-0">
                <ClipboardCheck size={22} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gov-navy">Certifications & Compliance</div>
                <div className="text-sm text-slate-500">SBA certifications, SAM.gov, registration management</div>
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-gov-blue group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link
              to="/services/proposal-writing"
              className="group flex items-center gap-4 rounded-2xl bg-white border border-slate-200 p-5 hover:border-gov-blue/30 hover:shadow-lg transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-crimson/10 text-gov-crimson group-hover:bg-gov-crimson group-hover:text-white transition-colors shrink-0">
                <PenTool size={22} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gov-navy">Proposal Writing That Wins</div>
                <div className="text-sm text-slate-500">Shipley method, 87% win rate, fixed pricing</div>
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-gov-blue group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Not sure where to start? <a href={LINKS.booking} target="_blank" rel="noreferrer" className="text-gov-blue font-semibold hover:underline">Book a free consultation</a> and we'll recommend the right path.
          </p>
        </div>
      </section>

      {/* ── CONTRACT SEARCH ── */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Market Intelligence</p>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold text-gov-navy">
              Search Federal Contract Awards
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Research past-year contract awards by NAICS code, state, or set-aside type to find your opportunity.
            </p>
          </div>
          <ContractDataExplorer />
        </div>
      </section>

      {/* ── WHO SHOULD WORK WITH US ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Where Are You?</p>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold text-gov-navy">
              Every Federal Contractor Starts Somewhere
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Whether you're brand new or scaling an existing practice, we have the right solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stage: "Just Getting Started",
                icon: Rocket,
                color: "gov-blue",
                items: ["Need SAM.gov registration", "Want to explore certifications", "Don't have a capabilities statement", "Not sure which NAICS codes to use"],
                cta: "FedStart Program — $3,200",
                link: "/services/programs",
              },
              {
                stage: "Registered but Not Winning",
                icon: Target,
                color: "gov-crimson",
                items: ["Have SAM registration but no bids", "Need a pipeline of opportunities", "Want help responding to RFPs", "Need marketing to federal buyers"],
                cta: "Growth Program — $6,500",
                link: "/services/programs",
                popular: true,
              },
              {
                stage: "Ready to Scale",
                icon: Crown,
                color: "gov-navy",
                items: ["Winning some but need more volume", "Need dedicated capture management", "Want full proposal writing support", "Ready for a GSA Schedule"],
                cta: "Prime Program — $15,500",
                link: "/services/programs",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.stage}
                  className={`rounded-2xl bg-white border p-6 lg:p-8 flex flex-col ${
                    item.popular ? "border-gov-crimson/30 ring-2 ring-gov-crimson/10 shadow-lg relative" : "border-slate-200 shadow-sm"
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-gov-crimson px-3 py-1 rounded-full">
                      Most Common
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-4`}>
                    <Icon size={24} className={`text-${item.color}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gov-navy">{item.stage}</h3>
                  <ul className="mt-4 space-y-2.5 flex-1">
                    {item.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={item.link}
                    className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition shadow-sm hover:shadow-md ${
                      item.popular
                        ? "bg-gov-crimson text-white hover:bg-gov-crimson/90"
                        : "bg-slate-100 text-gov-navy hover:bg-slate-200"
                    }`}
                  >
                    {item.cta} <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <Section title="Ready to Start Winning?" kicker="Next Step" dark pattern="grid">
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

            {/* Quick contact */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-white transition">
                <Phone size={14} /> {BRAND.phone}
              </a>
              <span className="text-white/20">|</span>
              <a href={`mailto:${BRAND.email}`} className="hover:text-white transition">{BRAND.email}</a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-gov-gold mb-4">
              <Users size={16} />
              Join 7,000+ Federal Contractors
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Call</h3>
            <p className="text-slate-400 mb-6 text-sm">
              30 minutes. Zero obligation. 100% transparency.
            </p>
            <LinkButton
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="w-full bg-white text-gov-navy hover:bg-slate-100 font-bold shadow-lg"
            >
              Book Now — It's Free <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <p className="mt-4 text-xs text-slate-500">
              Or call us directly: <a href="tel:8136650308" className="text-slate-300 hover:text-white transition">{BRAND.phone}</a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
