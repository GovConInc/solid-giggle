import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, TrendingUp, ChevronDown, CheckCircle, Zap, Clock, DollarSign } from "lucide-react";
import { useState } from "react";
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

const faqs = [
  {
    question: "How long does it take to get certified?",
    answer: "Our 14-day fast-track program completes the entire certification process—from eligibility review to submission. We handle all documentation, form completion, and submission. After SBA approval (typically 3-6 weeks), you can start pursuing set-asides immediately.",
  },
  {
    question: "Which certification should my company pursue?",
    answer: "It depends on your ownership and business profile. 8(a) targets socially/economically disadvantaged owners. HUBZone requires your office and 35% of employees in designated zones. SDVOSB requires service-disabled veteran ownership. WOSB/EDWOSB require 51% ownership by women. We assess your eligibility for all categories in a free assessment and recommend the highest-impact options.",
  },
  {
    question: "What's the difference between FFP and cost-plus contracts?",
    answer: "Firm Fixed Price (FFP) means you quote a price and that's your obligation—you bear all cost overrun risk. Cost-Plus contracts (CPFF, T&M, CPIF) reimburse your costs + profit. FFP is riskier but can be more profitable if you estimate accurately. Cost-plus is safer for uncertain work but caps your profit. We help you evaluate contract types before bidding.",
  },
  {
    question: "How do you find bids before competitors?",
    answer: "We monitor SAM.gov daily for new notifications across your targeted NAICS codes and agencies. More importantly, we identify Sources Sought notices early—these signal upcoming RFPs 30-60 days before formal release. We analyze the market, assess your win probability, and deliver only opportunities you can actually win.",
  },
  {
    question: "What's your process for proposal writing?",
    answer: "We start with a capture strategy—understanding the customer's pain points, past RFP patterns, and evaluation criteria. We then structure your proposal to directly address their hot buttons, include relevant past performance examples, and differentiate you from competition. We review all submissions against the RFP requirements checklist before you submit.",
  },
  {
    question: "Can you help with subcontracting opportunities?",
    answer: "Yes. Large primes are required to use small business subs on set-aside contracts. We help small businesses become preferred subcontractors by building relationships with primes, documenting capabilities, and pursuing teaming opportunities. This opens pipeline without requiring you to be a prime.",
  },
  {
    question: "What should I put on my SAM.gov profile?",
    answer: "SAM is how agencies find you. Your profile should include: accurate NAICS codes, realistic past performance examples with dollar values, key personnel with bios, your certifications (8(a), WOSB, HUBZone, SDVOSB), a strong company description, and current contact info. We optimize your profile to match how agencies search for contractors like you.",
  },
  {
    question: "How much does your service cost?",
    answer: "We offer several engagement models: fixed-fee certification programs ($1,500-$2,500 depending on complexity), hourly capture and proposal support, or retained advisory services. Most clients see ROI within their first government contract win. We're happy to discuss your specific needs and provide a proposal.",
  },
  {
    question: "Can you help with GSA Schedule?",
    answer: "Yes. GSA Schedule is a pre-approved vendor list that unlocks RFQs on GSA eBuy. We help you prepare the application, optimize your pricing strategy, and manage the approval process. Once approved, you get access to quick RFQs (3-5 day response) that many businesses miss entirely.",
  },
  {
    question: "What if my certification gets rejected?",
    answer: "Rejections usually mean missing documentation or minor eligibility issues. We review the SBA's rejection letter, address the gaps, and resubmit. Our 98% approval rate reflects our thorough vetting before first submission—we don't waste your time on incomplete applications.",
  },
  {
    question: "How do you handle RFPs with tight deadlines?",
    answer: "RFPs typically allow 15-30 days. We have a rapid-response process: intake call (24 hrs), draft outline (48 hrs), section assignments, review and refinement, final compliance check, and submission. For 5-day RFQs, we have templates and streamlined processes to turn them around quickly.",
  },
  {
    question: "Do you help with compliance audits?",
    answer: "Yes. After you win a contract, government may audit your compliance—cost accounting, small business utilization, past performance documentation. We help you prepare for audits and ensure you're documenting correctly. It's easier to be compliant from day one than fix issues later.",
  },
];

// 5 Cs of Methodology
const methodologySteps = [
  {
    title: "Compliance",
    subtitle: "Get Certified",
    color: "gov-navy",
    description: "Start with registrations, certifications, and profiles. SAM.gov, certifications (8(a), HUBZone, SDVOSB, WOSB), and a locked-down capability statement are your foundation. Without these, you can't compete.",
  },
  {
    title: "Context",
    subtitle: "Know the Landscape",
    color: "gov-blue",
    description: "Understand your target agencies, their budget cycles, past procurement patterns, and key decision-makers. Market research reveals where work is coming from and which agencies fit your capabilities best.",
  },
  {
    title: "Capture",
    subtitle: "Find & Influence",
    color: "gov-green",
    description: "Identify opportunities early—before RFPs hit SAM.gov. Monitor Sources Sought notices, build relationships, understand requirements, and position your solution. Early influence beats last-minute proposals.",
  },
  {
    title: "Compete",
    subtitle: "Win the Work",
    color: "gov-crimson",
    description: "Submit compliant, compelling proposals. Every page responds to evaluation criteria. Past performance is specific, past management style is clear, and your team is capable. Proposal wins happen in capture, not writing.",
  },
  {
    title: "Continuity",
    subtitle: "Scale & Repeat",
    color: "gov-orange",
    description: "Document your wins, build institutional knowledge, repeat the process. Once you've won once, winning again is faster. This is how your GovCon department scales.",
  },
];

const processPhases = [
  {
    phase: "Discovery",
    duration: "Weeks 1-2",
    activities: [
      "Understand your business model, strengths, and target market",
      "Map your capabilities to federal opportunities",
      "Identify which certifications apply",
      "Review your SAM.gov and website presence",
    ],
  },
  {
    phase: "Strategy",
    duration: "Weeks 3-4",
    activities: [
      "Build a 3-year capture plan targeting specific agencies/NAICS",
      "Define your win strategy and competitive positioning",
      "Outline certification roadmap (timing and sequence)",
      "Establish key metrics: contracts won, revenue, win rate",
    ],
  },
  {
    phase: "Execution",
    duration: "Weeks 5+",
    activities: [
      "Submit certifications (14-day fast-track or concurrent)",
      "Optimize SAM.gov, GSA, and website profiles",
      "Monitor SAM for Sources Sought and RFPs in your space",
      "Pursue subcontracting teaming opportunities",
      "Respond to RFQs and RFPs per your strategy",
      "Document wins and refine approach based on results",
    ],
  },
];

export default function About() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
              Government contracting doesn't have to be complicated
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              GovCon Inc. exists because federal systems change constantly and businesses waste months figuring it out on their own. 
              We provide strategy, structure, and execution—turning chaos into a repeatable process. The result: faster wins, sustainable revenue, and a government business that scales.
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
                <p>
                  Today, we focus on one thing: getting our clients to their first government win, 
                  and then scaling from there. Everything we do is measured by contracts won and 
                  revenue generated for your business.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "7,000+", label: "Registrations Completed" },
                { value: "$640M", label: "Largest Win Supported" },
                { value: "98%", label: "Approval Rate" },
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

      {/* 5 Cs Methodology */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Our Methodology</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy mb-2">
            The 5 C's Framework
          </h2>
          <p className="max-w-2xl text-slate-600 mb-8">
            Every successful government business follows this cycle: Compliance, Context, Capture, Compete, 
            and Continuity. We help you master each phase and repeat the cycle to scale.
          </p>

          <div className="grid gap-6 lg:grid-cols-5">
            {methodologySteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full" hover>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 ${
                    step.color === "gov-navy" ? "bg-gov-navy/10 text-gov-navy" :
                    step.color === "gov-blue" ? "bg-gov-blue/10 text-gov-blue" :
                    step.color === "gov-green" ? "bg-gov-green/10 text-gov-green" :
                    step.color === "gov-crimson" ? "bg-gov-crimson/10 text-gov-crimson" :
                    "bg-gov-orange/10 text-gov-orange"
                  }`}>
                    {step.color === "gov-orange" ? "Scale" : "Phase"}
                  </div>
                  <h3 className="font-bold text-lg text-gov-navy">{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{step.subtitle}</p>
                  <p className="mt-3 text-sm text-slate-600">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-slate-50" hover={false}>
            <div className="flex items-start gap-4">
              <Zap className="text-gov-crimson shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gov-navy mb-2">The Key Insight</h4>
                <p className="text-sm text-slate-600">
                  Most businesses jump straight to "Compete" (writing proposals). We start much earlier: build your foundation (Compliance), 
                  understand where the work is (Context), then position yourself before RFPs hit the street (Capture). When you reach Compete, 
                  you're already winning because you've already influenced the requirements.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">How We Work</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy mb-8">
            A Phased Approach to Government Success
          </h2>

          <div className="space-y-6">
            {processPhases.map((phase, idx) => (
              <Card key={phase.phase} className="p-6" hover={false}>
                <div className="grid gap-6 lg:grid-cols-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gov-blue text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                      <h3 className="font-bold text-lg text-gov-navy">{phase.phase}</h3>
                    </div>
                    <p className="text-xs font-semibold text-slate-500">{phase.duration}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle size={16} className="text-gov-green shrink-0 mt-0.5" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions" kicker="Common Questions">
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-6 flex items-start justify-between gap-4 hover:bg-slate-50 transition text-left"
                >
                  <h3 className="font-semibold text-gov-navy pr-4">{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-gov-blue shrink-0 mt-1 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                {isExpanded && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-200">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Methodology Link */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <Card className="p-8 lg:p-12" hover={false}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-black">
                  Get Started Today
                </h3>
                <p className="mt-3 text-black-600 max-w-xl">
                  Schedule a free consultation to discuss your business goals and explore how we can help 
                  you win your first government contract.
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
        </div>
      </section>

      {/* CTA */}
      <Section title="Questions? We're Here to Help" kicker="Get In Touch" dark>
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {[
            {
              icon: Clock,
              title: "Fast Response",
              desc: "We reply to inquiries within 24 hours"
            },
            {
              icon: DollarSign,
              title: "Transparent Pricing",
              desc: "No surprises. Fixed fees or hourly rates clearly outlined"
            },
            {
              icon: Award,
              title: "Proven Process",
              desc: "15+ years of wins. We know what works"
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="p-6 bg-white/5 border-white/10" hover={false}>
                <Icon className="text-gov-crimson mb-4" size={28} />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's discuss your goals
              </h3>
              <p className="mt-3 text-slate-300">
                Whether you need certification help, capture strategy, or proposal support—we've got a solution.
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
