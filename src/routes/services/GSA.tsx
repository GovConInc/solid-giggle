import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, AlertTriangle, Clock, FileText, Shield } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

const timeline = [
  { phase: "Days 1-2", task: "Kickoff Consultation", desc: "Strategy alignment & scheduling" },
  { phase: "Days 3-8", task: "Document Prep", desc: "Gathering tax docs, financials, project history" },
  { phase: "Days 9-13", task: "eOffer Preparation", desc: "Building the digital offer package" },
  { phase: "Days 14-15", task: "Holy Trinity Review", desc: "Admin, Technical, and Pricing volumes" },
  { phase: "Days 16-20", task: "Price & Tech Review", desc: "Ensuring profitability and compliance" },
  { phase: "Days 23-28", task: "Final Polish", desc: "White glove check for errors" },
  { phase: "Day 30+", task: "GSA Submission", desc: "Official submission to the CO" },
];

export default function ServicesGSA() {
  return (
    <>
      <Helmet>
        <title>GSA Contractors — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Services</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              GSA Contractors
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Getting on the GSA Schedule is a rigorous 12-month process for most. 
              We do it in 4-6 months with our "Holy Trinity" review process.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                Start GSA Application
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-6" hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                <FileText size={24} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-gov-navy">GSA MAS Submission</h3>
              <p className="mt-2 text-sm text-slate-600">
                Complete offer package preparation including technical narratives, 
                price support, and administrative documents.
              </p>
              <ul className="mt-4 space-y-2">
                {["Technical Volume", "Pricing Volume", "Admin Volume", "CO Negotiation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={14} className="text-gov-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6" hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-crimson/10 text-gov-crimson">
                <Shield size={24} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-gov-navy">Contract Management</h3>
              <p className="mt-2 text-sm text-slate-600">
                Ongoing compliance, modifications, and reporting to keep your 
                GSA Schedule in good standing.
              </p>
              <ul className="mt-4 space-y-2">
                {["Mass Modifications", "IFF Reporting", "Catalog Updates", "Compliance Audits"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={14} className="text-gov-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6" hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-gold/20 text-gov-gold">
                <Clock size={24} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-gov-navy">FCP Baseline Upload</h3>
              <p className="mt-2 text-sm text-slate-600">
                Migration from legacy SIP to the new FAS Catalog Platform. 
                Required to maintain GSA Advantage visibility.
              </p>
              <ul className="mt-4 space-y-2">
                {["Data Migration", "Catalog Validation", "System Training", "7-Day Guarantee"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={14} className="text-gov-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FCP Alert */}
      <section className="bg-gov-navy py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-crimson text-white shrink-0">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                SIP is Dead. FCP is Here.
              </h2>
              <p className="mt-3 text-slate-300 max-w-2xl">
                The GSA has retired the Schedule Input Program (SIP) for a new web-based 
                FAS Catalog Platform (FCP). If you do not complete your FCP Baseline, 
                your catalog will be removed from GSA Advantage.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer">
                  Secure My FCP Baseline
                </LinkButton>
                <a 
                  href="https://catalog.gsa.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Visit Catalog Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Section title="MAS Submission Roadmap" kicker="30-45 Day Timeline">
        <div className="grid gap-4">
          {timeline.map((item, idx) => (
            <Card key={item.task} className="p-4" hover={false}>
              <div className="flex items-center gap-6">
                <div className="w-24 shrink-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-gov-blue">{item.phase}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gov-navy text-white font-bold shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gov-navy">{item.task}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Investment</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">GSA Services Pricing</h2>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-8 text-center" hover>
              <h3 className="font-bold text-lg text-gov-navy">MAS Submission</h3>
              <div className="mt-4">
                <span className="font-display text-4xl font-bold text-gov-crimson">$7,500</span>
                <span className="text-slate-500"> - $12,500</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Complete offer package with negotiation support
              </p>
            </Card>
            
            <Card className="p-8 text-center border-gov-blue" hover>
              <h3 className="font-bold text-lg text-gov-navy">Contract Management</h3>
              <div className="mt-4">
                <span className="font-display text-4xl font-bold text-gov-crimson">$350</span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Ongoing compliance, mods, and reporting
              </p>
            </Card>
            
            <Card className="p-8 text-center" hover>
              <h3 className="font-bold text-lg text-gov-navy">FCP Migration</h3>
              <div className="mt-4">
                <span className="font-display text-4xl font-bold text-gov-crimson">$1,500</span>
                <span className="text-slate-500"> flat</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Complete baseline upload with training
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Ready to Get on Schedule?" kicker="Next Steps" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's discuss your GSA goals
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll review your qualifications, recommend the right SINs, and 
                outline the path to award.
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
