import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Target, FileText, Users } from "lucide-react";
import Section from "../components/Section";
import StatCard from "../components/StatCard";
import Card from "../components/Card";
import { LinkButton } from "../components/Button";
import { BRAND, LINKS } from "../lib/constants";

const features = [
  {
    icon: Shield,
    title: "Compliance First",
    description: "SAM, DSBS, FEMA registrations and SBA certifications done right the first time.",
  },
  {
    icon: Target,
    title: "Capture Management",
    description: "We find opportunities before they hit SAM.gov and position you to win.",
  },
  {
    icon: FileText,
    title: "Proposal Development",
    description: "Shipley-compliant proposals that score well under government evaluation criteria.",
  },
  {
    icon: Users,
    title: "GSA Schedule Support",
    description: "From initial submission to ongoing contract management and modifications.",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GovCon Inc. — Win Government Contracts</title>
        <meta
          name="description"
          content="GovCon Inc. helps businesses win government contracts through compliance, capture, and proposal execution."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-crimson/10 px-4 py-1.5 text-sm font-semibold text-gov-crimson">
                <span className="h-2 w-2 rounded-full bg-gov-crimson animate-pulse-subtle" />
                Government Contracting Consulting
              </div>
              
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-gov-navy sm:text-6xl lg:text-7xl">
                {BRAND.tagline}.
              </h1>
              
              <p className="mt-2 font-display text-2xl text-gov-blue sm:text-3xl">
                Built like a machine, not a mood.
              </p>
              
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                We handle compliance and paperwork, build your pipeline, and ship proposals 
                that hold up under evaluation. If you want to stop guessing and start winning, 
                this is the operating system.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Book a Readiness Call
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <LinkButton href="/services" variant="secondary" size="lg">
                  View Services
                </LinkButton>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-gov-green" />
                  7,000+ Registrations
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-gov-green" />
                  $640M+ Largest Win
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-gov-green" />
                  87% GSA Approval Rate
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <StatCard 
              label="Registrations Completed" 
              value="7,000+" 
              detail="SAM, DSBS, and related registrations executed end-to-end."
              accent="crimson"
            />
            <StatCard 
              label="Largest Win Supported" 
              value="$640M" 
              detail="Complex proposals across multiple industries and contract types."
              accent="blue"
            />
            <StatCard 
              label="GSA Approval Rate" 
              value="87%" 
              detail="Our 'Holy Trinity' review process ensures rejection-proof submissions."
              accent="green"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section title="How We Help You Win" kicker="Our Services">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full" hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gov-crimson to-gov-blue text-white">
                  <feature.icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gov-navy">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-gov-blue font-semibold hover:text-gov-crimson transition"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Quick Links Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Quick Links</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">Useful Resources</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "SAM.gov", url: "https://sam.gov", desc: "Federal contractor registration" },
              { name: "SBA DSBS", url: "https://dsbs.sba.gov", desc: "Small business search" },
              { name: "GSA eLibrary", url: "https://www.gsaelibrary.gsa.gov", desc: "Schedule lookup" },
              { name: "GSA Advantage", url: "https://www.gsaadvantage.gov", desc: "Federal marketplace" },
            ].map((link) => (
              <a 
                key={link.url}
                href={link.url} 
                target="_blank" 
                rel="noreferrer" 
                className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-gov-blue hover:shadow-lg"
              >
                <div className="font-bold text-gov-navy group-hover:text-gov-blue transition">{link.name}</div>
                <div className="mt-1 text-sm text-slate-500">{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Section title="Ready to Win?" kicker="Next Step" dark>
        <Card className="p-8 lg:p-12 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Book a 15–30 minute readiness call.
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll validate your path: compliance gaps, target agencies, opportunity fit, 
                and what to do next. No sales pitch — just straight answers.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Book Now
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
