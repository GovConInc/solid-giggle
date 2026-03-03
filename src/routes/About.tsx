import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Users, Target, TrendingUp,
  Building2, Briefcase, Code2, DollarSign, Shield
} from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import { LinkButton } from "../components/Button";
import { BRAND, LINKS } from "../lib/constants";

// ============================================
// DATA
// ============================================

const teamBackgrounds = [
  {
    icon: Building2,
    label: "Government Contracting",
    color: "bg-gov-blue/10 text-gov-blue",
    body: "We've worked inside the machine — as contractors, prime subcontractors, and capture managers. We know how contracting officers think, how procurement decisions get made, and what the real evaluation criteria are (not just what the RFP says).",
  },
  {
    icon: Code2,
    label: "Technology & Systems",
    color: "bg-emerald-100 text-emerald-700",
    body: "Half our team comes from IT and systems integration backgrounds. We understand how to position tech companies for government work — what evaluators want to see, how to translate commercial capability into federal language, and how to win on IT vehicles.",
  },
  {
    icon: DollarSign,
    label: "Sales & Business Development",
    color: "bg-gov-crimson/10 text-gov-crimson",
    body: "Government contracting is a sales process. Pipeline management, relationship building, competitive positioning — we bring commercial BD discipline to federal capture. We don't just fill out forms; we help you build a repeatable revenue engine.",
  },
];

const stats = [
  { value: "15+", label: "Years in the industry" },
  { value: "7,000+", label: "Registrations processed" },
  { value: "$640M", label: "Largest contract supported" },
  { value: "98%", label: "Certification approval rate" },
];

const principles = [
  {
    icon: Target,
    title: "We tell you what we can actually deliver",
    body: "No overpromising. If a certification doesn't fit your business, we say so. If a bid isn't worth your time, we say that too. Our job is to maximize your return, not our billable hours.",
  },
  {
    icon: TrendingUp,
    title: "We measure by outcomes, not effort",
    body: "Client results determine whether this relationship works. We track what matters: contracts won, revenue generated, certifications approved, pipeline built. Hours logged is not a metric.",
  },
  {
    icon: Users,
    title: "We act like a partner, not a vendor",
    body: "When something goes sideways — a certification denial, a missed bid, a compliance issue — we don't hand it back to you. We diagnose, fix, and move forward. That's what an extension of your team does.",
  },
  {
    icon: Shield,
    title: "We stay current so you don't have to",
    body: "Federal regulations, platform updates, SBA rule changes, new vehicles — this space moves constantly. Staying ahead of it is a full-time job. It's our job, so it doesn't have to be yours.",
  },
];

// ============================================
// COMPONENT
// ============================================

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — FedGovWin Professional Services</title>
        <meta name="description" content="FedGovWin is a Tampa-based federal contracting firm built by govcon, tech, and sales professionals who've been in your seat." />
        <link rel="canonical" href="https://fedgovwin.com/about" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">About FedGovWin</p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
                We've been where you are
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                FedGovWin started because the federal contracting industry was full of consultants who'd never actually won a government contract. We came from the other side — from capture management, from BD, from building pipelines and writing proposals that had to win to keep the lights on.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                That's still the DNA of this firm. Every person here has real operating experience in govcon, tech, or sales — not just a consulting background. We know what works because we've done the work.
              </p>
              <div className="mt-10">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Talk to Our Team
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
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

      {/* ── Our Story ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">How We Got Here</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Built out of frustration with the way it was being done
            </h2>
            <div className="mt-6 space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                {BRAND.founder} built FedGovWin in {BRAND.location} after years of watching companies get burned — by consultants who talked a good game but couldn't execute, by compliance lapses that cost real contracts, by proposals that were technically compliant but had no shot of winning. The federal market was too good to leave on the table.
              </p>
              <p>
                The approach from day one was simple: hire people who'd actually done the work. Not consultants who'd studied it — people who'd been in the room when the contract was awarded, who'd built the pipeline, who'd written the proposals under pressure. Combine that with a discipline for process and a bias toward measurable outcomes, and you get a firm that actually moves the needle.
              </p>
              <p>
                Today, FedGovWin works with companies across industries — IT, professional services, logistics, construction, healthcare — at every stage of the federal lifecycle. New entrants building their compliance foundation. Growing companies trying to win more consistently. Established contractors looking to scale into larger vehicles or new agencies.
              </p>
              <p>
                The work is the same regardless of the client size: build the foundation right, build the pipeline smart, and write proposals that evaluate well. Everything else is noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Backgrounds ── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Three backgrounds that matter for this work
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Federal contracting requires expertise in government process, technology positioning, and business development — simultaneously. Our team covers all three.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {teamBackgrounds.map((bg, idx) => (
              <motion.div
                key={bg.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full" hover>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${bg.color}`}>
                    <bg.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gov-navy">{bg.label}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{bg.body}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Think ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">How We Operate</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                The principles that drive how we work
              </h2>
              <p className="mt-4 text-slate-600">
                These aren't values we put on a wall. They're the things that show up in how we run engagements, handle problems, and communicate with clients.
              </p>

              <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200">
                <p className="font-semibold text-gov-navy">On the methodology side —</p>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Our 4 C's framework (Compliance → Capture → Connect → Consulting) isn't a sales slide. It's how we actually structure engagements, track progress, and measure whether the work is moving the business forward. Every client engagement maps to it.
                </p>
                <Link
                  to="/about/methodology"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:underline"
                >
                  See our methodology in detail
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {principles.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="p-5" hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue shrink-0">
                        <p.icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gov-navy">{p.title}</h3>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We're Not ── */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue text-center">Straight Talk</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy text-center">
              What we're not
            </h2>
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "We're not a staffing firm",
                  body: "We don't place junior analysts at your company and bill by the hour. We're a lean expert team that owns the outcomes, not the headcount."
                },
                {
                  title: "We're not a proposal factory",
                  body: "We don't take every opportunity that comes in. We help you decide which ones are worth pursuing — and we don't write proposals we don't believe can win."
                },
                {
                  title: "We're not template consultants",
                  body: "Every engagement starts from your specific situation, not from our last client's pitch deck. The federal market is too competitive for copy-paste advice."
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle size={18} className="text-gov-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gov-navy">{item.title}</p>
                    <p className="mt-1 text-slate-600 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <Section title="Work with people who know the work" kicker="Get In Touch" dark>
        <div className="grid gap-6 sm:grid-cols-3 mb-8">
          {[
            { icon: Briefcase, title: "Tampa, FL", desc: "Serving clients across every state, working remote-first since day one." },
            { icon: Users, title: "Senior-Only Team", desc: "Nobody on your engagement has fewer than 5 years of real-world govcon experience." },
            { icon: TrendingUp, title: "Fixed-Price Engagements", desc: "No surprise invoices. You know what you're paying and what you're getting." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-6 bg-white/10 border-white/20" hover={false}>
                <Icon className="text-gov-gold mb-3" size={24} />
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's talk about your federal goals
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Book a free 30-minute call. Come with questions, an RFP, or just a goal — we'll figure out together what it actually takes to get there.
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
