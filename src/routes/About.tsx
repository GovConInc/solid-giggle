import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, TrendingUp } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import { LinkButton } from "../components/Button";
import { BRAND, LINKS } from "../lib/constants";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by contracts won, not hours billed.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We become an extension of your team, not a vendor.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every submission reflects our commitment to quality.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We refine our processes based on real outcomes.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">About Us</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              A clear path to winning government business
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              GovCon Inc. exists because federal systems change constantly and businesses 
              waste months learning by rework. We build a repeatable approach: strategy, 
              compliance, execution, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gov-crimson">Our Story</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Built from experience, not theory
              </h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  We're based in {BRAND.location} and support organizations from startups to 
                  large primes. Our work spans registrations and profiles, market intelligence 
                  and capture, and proposal development across multiple industries.
                </p>
                <p>
                  The industry's "boom moments" usually come from system transitions: new portals, 
                  new data structures, new rules — and usually not enough guidance. That's where 
                  we grew: helping companies stay compliant, avoid preventable delays, and pursue 
                  the right work with a real strategy.
                </p>
                <p>
                  {BRAND.founder} has supported proposals across diverse scopes — including 
                  complex, high-value pursuits — and built this firm to turn hard-earned lessons 
                  into a cleaner path for clients.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "7,000+", label: "Registrations" },
                { value: "$640M", label: "Largest Win" },
                { value: "87%", label: "GSA Approval" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center" hover={false}>
                    <div className="font-display text-3xl font-bold text-gov-crimson">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <Section title="Our Values" kicker="What We Stand For">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full" hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                  <value.icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gov-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Methodology Link */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <Card className="p-8 lg:p-12" hover={false}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-gov-navy">
                  Learn about our methodology
                </h3>
                <p className="mt-3 text-slate-600 max-w-xl">
                  Discover the 4 C's Framework and PDCA process that drives our repeatable success.
                </p>
              </div>
              <Link 
                to="/about/methodology"
                className="inline-flex items-center gap-2 rounded-xl bg-gov-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-gov-navy/90 shrink-0"
              >
                View Methodology
                <ArrowRight size={18} />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <Section title="Ready to Talk?" kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's discuss your goals
              </h3>
              <p className="mt-3 text-slate-300">
                Schedule a call to explore how we can help you win government contracts.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Book a Call
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
