import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Rocket, Crown, Shield } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton, Button } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

const packages = [
  {
    name: "FedStart",
    price: "$3,500",
    period: "one-time",
    icon: Shield,
    description: "The compliance foundation every contractor needs to get started.",
    highlight: false,
    features: [
      "SAM, DSBS & FEMA Registration",
      "Professional Capabilities Statement",
      "Bid Portal Access (3 Months)",
      "Monthly Strategy Consultation",
      "SBA Certification Support (Free)",
      "Compliance Monitoring",
    ],
    cta: "Start Compliance",
  },
  {
    name: "Growth",
    price: "$7,500",
    period: "one-time",
    icon: Rocket,
    description: "Move from passive registration to active government hunting.",
    highlight: true,
    features: [
      "Everything in FedStart",
      "Bi-Weekly Strategy Calls",
      "Hand-Selected Bid Pipeline",
      "2 Email Marketing Campaigns",
      "1 Full RFP Proposal Write",
      "Priority Bid Support",
    ],
    cta: "Start Growing",
  },
  {
    name: "Prime",
    price: "$15,500",
    period: "one-time",
    icon: Crown,
    description: "Your outsourced government contracting department.",
    highlight: false,
    features: [
      "Everything in Growth",
      "Weekly Strategy & Accountability",
      "GSA MAS Submission OR Maintenance",
      "3 Full RFP Proposal Walkthroughs",
      "Unlimited Bid Reviews",
      "Priority Hotline Access",
    ],
    cta: "Become a Prime",
  },
];

export default function ServicesPrograms() {
  return (
    <>
      <Helmet>
        <title>Programs — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Services</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Programs
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Comprehensive packages designed for every stage of your government 
              contracting journey. Choose the roadmap that fits your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={cn("relative", pkg.highlight && "lg:-mt-4 lg:mb-4")}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="rounded-full bg-gov-crimson px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card 
                  className={cn(
                    "h-full p-8 flex flex-col",
                    pkg.highlight && "border-gov-blue ring-2 ring-gov-blue/20 bg-white"
                  )}
                  hover={pkg.highlight}
                >
                  <div className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-xl",
                    pkg.highlight ? "bg-gov-blue text-white" : "bg-slate-100 text-gov-navy"
                  )}>
                    <pkg.icon size={28} />
                  </div>
                  
                  <h3 className="mt-5 font-display text-2xl font-bold text-gov-navy">{pkg.name}</h3>
                  <p className="mt-2 text-slate-600">{pkg.description}</p>
                  
                  <div className="mt-6">
                    <span className="font-display text-4xl font-bold text-gov-navy">{pkg.price}</span>
                    <span className="text-slate-500">/{pkg.period}</span>
                  </div>

                  <ul className="mt-8 space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle className="h-5 w-5 shrink-0 text-gov-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <LinkButton 
                      href={LINKS.booking}
                      target="_blank"
                      rel="noreferrer"
                      variant={pkg.highlight ? "primary" : "secondary"}
                      className="w-full justify-center"
                    >
                      {pkg.cta}
                    </LinkButton>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <Section title="What's Included in Every Program" kicker="Core Value">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Dedicated Advisor", desc: "Direct access to a government contracting expert" },
            { title: "Strategy Sessions", desc: "Regular calls to review progress and adjust course" },
            { title: "Document Support", desc: "Templates, reviews, and professional formatting" },
            { title: "Priority Response", desc: "24-48 hour turnaround on questions and requests" },
          ].map((item) => (
            <Card key={item.title} className="p-5" hover={false}>
              <h3 className="font-semibold text-gov-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">FAQ</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">Common Questions</h2>
          
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              { q: "Can I upgrade my program?", a: "Yes. You can upgrade at any time and we'll credit what you've paid." },
              { q: "Is there a payment plan?", a: "We offer 2-3 month payment plans for Growth and Prime packages." },
              { q: "What if I need more proposals?", a: "Additional proposals can be purchased à la carte at a discounted rate." },
              { q: "How long do programs last?", a: "Programs are designed for 6-12 months depending on your goals." },
            ].map((item) => (
              <Card key={item.q} className="p-6" hover={false}>
                <h3 className="font-semibold text-gov-navy">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Not Sure Which Program?" kicker="Let's Talk" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We'll help you choose the right fit
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Book a call and we'll assess your current position, goals, and 
                recommend the program that makes sense.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Book Consultation
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
