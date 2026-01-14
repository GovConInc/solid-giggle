import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Shield, Target, FileText, Users,
  Award, Building2, Rocket, TrendingUp, Clock, Database,
  CheckCheck, AlertCircle, Zap
} from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import { LinkButton } from "../components/Button";
import { BRAND, LINKS } from "../lib/constants";
import MethodologyLoop from "../components/MethodologyLoop";

const guaranteedPrograms = [
  {
    icon: Shield,
    title: "SAM.gov Registration",
    subtitle: "5 Business Days",
    description: "SAM.gov is free through the federal system. We step in for companies that prefer professional management or have issues. Complete SAM.gov registration with CAGE code, UEI, and all required validation.",
  },
  {
    icon: Award,
    title: "SBA Certifications",
    subtitle: "14 Business Days",
    description: "SBA certifications submitted within 14 days by our certification specialists. Full application preparation, templates, submission, and ongoing support. Includes a tailored set-aside roadmap.",
    guarantee: "Submitted or Full Refund",
  },
  {
    icon: Building2,
    title: "GSA Schedule Award",
    subtitle: "30 Business Days",
    description: "Complete GSA MAS application submitted in 30 days. We start with strategy and alignment, prepare pricing, documentation, and technical responses, followed by negotiations, initial award, and more.",
    guarantee: "Free Qualification Assessment",
  },
];

const fcpServices = [
  {
    icon: Database,
    title: "FCP Baseline Migration",
    description: "Seamless transition from legacy GSA Schedule Input Program (SIP) to the new FAS Catalog Platform (FCP) without losing catalog data or compliance standing.",
  },
  {
    icon: FileText,
    title: "GSA Contract Management",
    description: "Professional management of your GSA Schedule, including all Modifications, Sales Reporting, Product/Service Updates, Refreshes/Mass Mods, annual assessments, & more",
  },
  {
    icon: CheckCheck,
    title: "Modification Support",
    description: "GSA Schedule modifications for new SINs, offerings, pricing, and EPA updates, with accurate and compliant GSA catalog pricing maintained throughout.",
  },
  {
    icon: TrendingUp,
    title: "GSA Advantage & eBuy Support",
    description: "Ongoing management of GSA Advantage listings and eBuy participation, including catalog accuracy, compliance checks, and timely updates.",
  },
];

const whyChooseUs = [
  {
    stat: "7,000+",
    label: "Registrations Completed",
    detail: "SAM.gov, DSBS, FEMA, and SBA certifications processed and approved.",
  },
  {
    stat: "$640M",
    label: "Largest Win Supported",
    detail: "High-value proposals supported across federal, state, and local government agencies.",
  },
  {
    stat: "87%",
    label: "GSA Approval Rate",
    detail: "Accurate, complete submissions driven by experience, discipline, and execution speed.",
  },
  {
    stat: "100%",
    label: "On-Time Guarantee",
    detail: "Every deadline met, or your money back.",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GovCon Inc — Win Government Contracts | GSA Schedule | SAM Registration | 8(a) Certification</title>
        <meta
          name="description"
          content="Government contracting consulting for new businesses and GSA Schedule holders. Guaranteed SAM.gov registration, 8(a) certification, GSA MAS awards, and FCP catalog management. Win more federal contracts."
        />
        <meta 
          name="keywords" 
          content="government contracts, GSA Schedule, SAM.gov registration, 8(a) certification, FCP catalog management, federal contracting, government procurement, GSA MAS, proposal writing, capture management, FAS Catalog Platform" 
        />
        <link rel="canonical" href="https://govcon.info/" />
        <meta property="og:title" content="GovCon Inc — Win Government Contracts" />
        <meta property="og:description" content="Government contracting consulting for new businesses and GSA Schedule holders. Guaranteed certifications and FCP catalog management." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Heading & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-crimson/10 px-4 py-1.5 text-sm font-bold text-gov-crimson border border-gov-crimson/20">
                <Zap size={14} className="animate-pulse-subtle" />
                Government Contracting Consulting
              </div>
              
              <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-gov-navy sm:text-5xl lg:text-6xl leading-tight">
                Your Roadmap to Winning Government Contracts.
                <span className="block text-gov-blue mt-2">Guaranteed.</span>
              </h1>
              
              <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                We deliver professional support to government contractors at every stage. No guessing. No delays. Just results.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Book Readiness Call
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <LinkButton href="/services" variant="secondary" size="lg">
                  View Services
                </LinkButton>
              </div>

            </motion.div>
            {/* Right Column - Quick Service Picker */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-8"
            >
              <Card className="p-8 bg-white shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gov-blue/10 flex items-center justify-center">
                    <Rocket className="text-gov-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gov-navy">Quick Start</h3>
                    <p className="text-sm text-slate-600">Choose your path</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/services"
                    className="block p-4 rounded-xl border-2 border-slate-200 hover:border-gov-crimson hover:bg-gov-crimson/5 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gov-navy group-hover:text-gov-crimson transition">
                          Compliance & Certifications
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                          SAM Registration, SBA Certifications, & More
                        </div>
                      </div>
                      <ArrowRight className="text-slate-400 group-hover:text-gov-crimson transition" size={20} />
                    </div>
                  </Link>

                  <Link
                    to="/services"
                    className="block p-4 rounded-xl border-2 border-slate-200 hover:border-gov-blue hover:bg-gov-blue/5 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gov-navy group-hover:text-gov-blue transition">
                          Capture & Proposal Support
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                          Finding, Winning, & Managing Contracts
                        </div>
                      </div>
                      <ArrowRight className="text-slate-400 group-hover:text-gov-blue transition" size={20} />
                    </div>
                  </Link>

                  <Link
                    to="/services"
                    className="block p-4 rounded-xl border-2 border-slate-200 hover:border-gov-green hover:bg-gov-green/5 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gov-navy group-hover:text-gov-green transition">
                          GSA Contract Vehicles
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                          Submissions, Modifications, & Management
                        </div>
                      </div>
                      <ArrowRight className="text-slate-400 group-hover:text-gov-green transition" size={20} />
                    </div>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="bg-gov-navy py-12">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-white mb-2">{item.stat}</div>
                <div className="text-gov-gold font-bold mb-1">{item.label}</div>
                <div className="text-sm text-slate-300">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guaranteed Certification Programs */}
      <Section title="Guaranteed Delivery. Every Time." kicker="Our Timelines" center>
        <p className="text-center text-slate-600 max-w-5xl mx-auto mb-12">
          These programs come with ironclad completion guarantees. We'll complete and submit your applications 
          within the stated timelines—as long as you provide the documents we need. That's it. No excuses, no delays.
        </p>

        <div className="grid gap-8 lg:grid-cols-3 mx-auto max-w-6xl">
          {guaranteedPrograms.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full border-2 mx-auto max-w-md" hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-gov-crimson to-gov-blue flex items-center justify-center text-white">
                    <program.icon size={28} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-gov-green bg-gov-green/10 px-2 py-1 rounded">
                      {program.guarantee}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gov-navy mb-1">{program.title}</h3>
                <div className="text-sm font-semibold text-gov-blue mb-3 flex items-center gap-2">
                  <Clock size={14} />
                  {program.subtitle}
                </div>
                <p className="text-slate-600 leading-relaxed">{program.description}</p>

                <Link 
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-gov-crimson font-bold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-slate-50 border-2 border-gov-gold">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-gov-gold" size={24} />
              <div className="text-left">
                <div className="font-bold text-gov-navy">The Only Requirement</div>
                <div className="text-sm text-slate-600">
                  Provide the documents we request. We handle the rest.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* FCP Catalog Management for GSA Vendors */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">FOR GSA CONTRACTORS</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-gov-navy">2026 GSA Updates</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              GSA has transitioned from legacy SIP/EDI to the new FAS Catalog Platform. We handle your baseline 
              migration, Price Proposal migration, and Compliance and Pricing (C&P)report. Our services don't stop there.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {fcpServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full bg-white" hover>
                  <div className="h-12 w-12 rounded-xl bg-gov-blue/10 flex items-center justify-center text-gov-blue mb-4">
                    <service.icon size={24} />
                  </div>
                  <h3 className="font-bold text-gov-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gov-blue to-gov-navy rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Avoid Contract Cancellation</h3>
                <p className="text-slate-200 leading-relaxed mb-6">
                  GSA requires FCP baseline migration within 60 days of notification. Missing this deadline 
                  can result in contract suspension or cancellation. We complete migrations in 7-14 days.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gov-gold shrink-0 mt-0.5" size={20} />
                    <span>Product File & Services Plus File setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gov-gold shrink-0 mt-0.5" size={20} />
                    <span>Automated GSA Advantage publishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gov-gold shrink-0 mt-0.5" size={20} />
                    <span>Monthly catalog maintenance & compliance</span>
                  </li>
                </ul>
              </div>
              <div className="lg:pl-8">
                <Card className="p-8 bg-white/10 border-white/20">
                  <div className="text-5xl font-black text-gov-gold mb-2">60 Days</div>
                  <div className="text-white font-bold mb-4">To Complete FCP Migration</div>
                  <p className="text-slate-300 text-sm mb-6">
                    Don't risk losing your GSA Schedule. We handle the entire transition.
                  </p>
                  <LinkButton href="/services" variant="secondary" className="w-full">
                    Get FCP Support
                  </LinkButton>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology - The Stages */}
      <section className="bg-white py-16">
        <MethodologyLoop />
      </section>

      {/* Quick Links Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Quick Links</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">Essential Resources</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "SAM.gov", url: "https://sam.gov", desc: "Federal contractor registration portal" },
              { name: "GSA eLibrary", url: "https://www.gsaelibrary.gsa.gov", desc: "GSA Schedule contract search" },
              { name: "FCP Platform", url: "https://catalog.gsa.gov/", desc: "FAS Catalog Platform for GSA vendors" },
              { name: "GSA Advantage", url: "https://www.gsaadvantage.gov", desc: "Federal online shopping portal" },
            ].map((link) => (
              <a 
                key={link.url}
                href={link.url} 
                target="_blank" 
                rel="noreferrer noopener" 
                className="group rounded-xl border-2 border-slate-200 bg-white p-5 transition hover:border-gov-blue hover:shadow-lg"
              >
                <div className="font-bold text-gov-navy group-hover:text-gov-blue transition">{link.name}</div>
                <div className="mt-1 text-sm text-slate-600">{link.desc}</div>
                <ArrowRight className="mt-3 text-slate-400 group-hover:text-gov-blue transition" size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <Section title="Ready to Win Government Contracts?" kicker="Next Step" dark>
        <Card className="p-8 lg:p-12 bg-white/5 border-white/10" hover={false}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Book Your Free Readiness Call
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We'll assess your compliance status, identify certification opportunities, review your 
                target market, and provide a clear roadmap. No sales pitch—just actionable intelligence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-gov-gold shrink-0" size={20} />
                  Compliance gap analysis
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-gov-gold shrink-0" size={20} />
                  Certification eligibility review
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-gov-gold shrink-0" size={20} />
                  Target agency recommendations
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-gov-gold shrink-0" size={20} />
                  Clear next-step roadmap
                </li>
              </ul>
            </div>
            <div className="lg:pl-8">
              <Card className="p-8 bg-white text-center">
                <div className="text-4xl mb-2">📞</div>
                <h4 className="text-2xl font-bold text-gov-navy mb-3">Schedule Your Call</h4>
                <p className="text-slate-600 mb-6">
                  15-30 minutes. Zero obligation. 100% transparency.
                </p>
                <LinkButton 
                  href={LINKS.booking} 
                  target="_blank" 
                  rel="noreferrer" 
                  size="lg"
                  className="w-full"
                >
                  Book Now — It's Free
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <p className="mt-4 text-xs text-slate-500">
                  Used by Fortune 500s and startups alike
                </p>
              </Card>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
