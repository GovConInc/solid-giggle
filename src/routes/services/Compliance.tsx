import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Shield, Target, Search, Users } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

export default function ServicesCompliance() {
  return (
    <>
      <Helmet>
        <title>Compliance & Capture — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Services</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Compliance & Capture
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Registration management keeps you legal. Capture management finds you work. 
              Together, they form the foundation of a winning government business.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gov-blue text-white">
                <Shield size={28} />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-gov-navy">
                Registration Management
              </h2>
              <p className="mt-4 text-slate-600">
                You pay us, we handle the paperwork. It's that simple. We identify all 
                applicable registrations for your business (Federal, State, Local) and 
                keep them current.
              </p>
              <p className="mt-4 text-slate-600">
                If your address changes or a certification expires, we fix it before 
                you even know it's an issue.
              </p>
              
              <ul className="mt-6 space-y-3">
                {[
                  "SAM.gov Registration & Renewals",
                  "SBA DSBS Profile Optimization",
                  "FEMA Vendor Portal",
                  "State & Local Portals",
                  "Certification Monitoring (WOSB, VOSB, 8a, HUBZone)",
                  "Annual Review Preparation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle size={18} className="text-gov-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="p-8" hover={false}>
              <h3 className="font-bold text-lg text-gov-navy">What We Manage</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {["SAM.gov", "SBA DSBS", "FEMA Portal", "State Portals", "WOSB/VOSB", "8(a) Reviews", "HUBZone", "NAICS Updates"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-gov-green" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-600">Starting at</div>
                <div className="mt-1">
                  <span className="font-display text-3xl font-bold text-gov-navy">$250</span>
                  <span className="text-slate-500">/month</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Capture Section */}
      <Section title="Capture Management" kicker="Find Work Before It's Posted">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue">
              People → Process → Technology
            </div>
            <p className="mt-6 text-slate-600">
              This isn't just another AI bid alert. We don't just look at a synopsis 
              and forward it. We review the Scope of Work (SOW), analyze the incumbent, 
              and hand-pick bids you can actually win.
            </p>
            <p className="mt-4 text-slate-600">
              Capture goes beyond what's posted today. We find the 5-year agreement 
              expiring in 4 months or the subcontracting opportunity with General Dynamics. 
              We find the POCs, we mingle, and we act as your business development arm.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                { icon: Search, title: "Opportunity Research", desc: "Deep analysis of each potential bid" },
                { icon: Users, title: "Relationship Building", desc: "CO introductions and teaming arrangements" },
                { icon: Target, title: "Win Strategy", desc: "Bid/no-bid decisions with real data" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-crimson/10 text-gov-crimson shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gov-navy">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gov-navy text-white" hover={false}>
            <h3 className="font-bold text-lg">The Difference</h3>
            
            <div className="mt-6 space-y-6">
              <div className="pb-6 border-b border-white/20">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Competitors</div>
                <p className="mt-2 text-slate-300">
                  "Here are 50 bids that match the keyword 'Cleaning'."
                </p>
              </div>
              
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gov-crimson">GovCon Inc.</div>
                <p className="mt-2 text-white">
                  "Here are 3 bids. We called the Contracting Officer on Bid #2, and 
                  they are unhappy with the incumbent. Bid #1 is a set-aside you qualify 
                  for. Ignore Bid #3, it's wired for someone else."
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-sm text-slate-400">Starting at</div>
              <div className="mt-1">
                <span className="font-display text-3xl font-bold text-white">$1,500</span>
                <span className="text-slate-400">/month</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Combined Value */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Better Together</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">
              Compliance + Capture = Winning
            </h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="p-6 text-center" hover={false}>
              <div className="font-display text-3xl font-bold text-gov-crimson">87%</div>
              <div className="mt-2 text-slate-600">of our clients win within 12 months</div>
            </Card>
            <Card className="p-6 text-center" hover={false}>
              <div className="font-display text-3xl font-bold text-gov-crimson">3x</div>
              <div className="mt-2 text-slate-600">more qualified opportunities found</div>
            </Card>
            <Card className="p-6 text-center" hover={false}>
              <div className="font-display text-3xl font-bold text-gov-crimson">0</div>
              <div className="mt-2 text-slate-600">compliance issues under our management</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Ready to Build Your Pipeline?" kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's assess your current position
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll review your registrations, identify gaps, and build a capture 
                strategy tailored to your goals.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Book Strategy Call
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
