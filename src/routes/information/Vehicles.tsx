import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, ExternalLink, AlertCircle } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

const vehicles = [
  {
    name: "GSA MAS",
    fullName: "Multiple Award Schedule",
    desc: "The premier vehicle for selling to the federal government. Allows agencies to buy without full public bid.",
    benefits: ["Access to all federal agencies", "Streamlined procurement", "Up to 20-year contract"],
    link: "https://www.gsa.gov/buy-through-us/purchasing-programs/gsa-multiple-award-schedule",
  },
  {
    name: "OASIS+",
    fullName: "One Acquisition Solution for Integrated Services",
    desc: "Best-in-Class vehicle for complex professional services across multiple disciplines.",
    benefits: ["No ceiling on task orders", "Multiple service areas", "Flexible contract types"],
    link: "https://www.gsa.gov/oasis-plus",
  },
  {
    name: "SEWP",
    fullName: "Solutions for Enterprise-Wide Procurement",
    desc: "NASA's IT vehicle used by all federal agencies. Over $20B in annual sales.",
    benefits: ["Fast procurement", "IT products and services", "Strong government demand"],
    link: "https://www.sewp.nasa.gov/",
  },
  {
    name: "CIO-SP4",
    fullName: "Chief Information Officer-Solutions and Partners 4",
    desc: "NIH's IT services vehicle serving HHS and other agencies.",
    benefits: ["Focus on health IT", "Task order competitions", "Small business friendly"],
    link: "https://nitaac.nih.gov/services/cio-sp4",
  },
];

export default function InformationVehicles() {
  return (
    <>
      <Helmet>
        <title>Contract Vehicles 101 — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Information</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Contract Vehicles 101
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Contract vehicles are pre-competed agreements that streamline federal procurement. 
              Having the right vehicle is often required to compete for certain work.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Contract Vehicle */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-gov-navy">
                What is a Contract Vehicle?
              </h2>
              <p className="mt-4 text-slate-600">
                A contract vehicle is a pre-negotiated agreement between contractors and the 
                government. It establishes your pricing, terms, and conditions upfront.
              </p>
              <p className="mt-4 text-slate-600">
                Agencies can then issue "task orders" against these vehicles without going 
                through a full procurement process each time. This saves months of acquisition time.
              </p>
              
              <div className="mt-6 space-y-3">
                {[
                  "Pre-negotiated pricing and terms",
                  "Faster procurement for agencies",
                  "Reduced competition (vehicle holders only)",
                  "Long-term relationship building",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-gov-green" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-6" hover={false}>
              <h3 className="font-semibold text-gov-navy">Vehicle Types</h3>
              <div className="mt-4 space-y-4">
                {[
                  { type: "IDIQ", desc: "Indefinite Delivery/Indefinite Quantity - Task order based" },
                  { type: "BPA", desc: "Blanket Purchase Agreement - Simplified buying" },
                  { type: "GWAC", desc: "Government-Wide Acquisition Contract - IT focused" },
                  { type: "MAS", desc: "Multiple Award Schedule - GSA managed" },
                ].map((v) => (
                  <div key={v.type} className="border-l-2 border-gov-blue pl-4">
                    <div className="font-semibold text-gov-navy">{v.type}</div>
                    <div className="text-sm text-slate-600">{v.desc}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Vehicles */}
      <Section title="Major Contract Vehicles" kicker="Best in Class">
        <div className="grid gap-6 lg:grid-cols-2">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.name} className="p-6" hover>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-xl text-gov-navy">{vehicle.name}</h3>
                  <p className="text-sm text-slate-500">{vehicle.fullName}</p>
                </div>
                <a 
                  href={vehicle.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gov-blue hover:text-gov-crimson transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mt-4 text-slate-600">{vehicle.desc}</p>
              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Benefits</div>
                <ul className="mt-2 space-y-1">
                  {vehicle.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={14} className="text-gov-green" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* GSA Focus */}
      <section className="bg-gov-blue/5 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="h-6 w-6 text-gov-blue" />
            <h2 className="font-display text-2xl font-bold text-gov-navy">GSA Schedule Deep Dive</h2>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-6" hover={false}>
              <h3 className="font-semibold text-gov-navy">SINs (Special Item Numbers)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Categories that define what you sell. Pick the right SINs to be found by 
                contracting officers searching for your services.
              </p>
            </Card>
            
            <Card className="p-6" hover={false}>
              <h3 className="font-semibold text-gov-navy">GSA Advantage</h3>
              <p className="mt-2 text-sm text-slate-600">
                The Amazon of government. If you sell products, your catalog lives here. 
                Agencies can click to buy directly.
              </p>
            </Card>
            
            <Card className="p-6" hover={false}>
              <h3 className="font-semibold text-gov-navy">GSA eBuy</h3>
              <p className="mt-2 text-sm text-slate-600">
                Exclusive RFQ portal for GSA holders. Agencies post opportunities here 
                that the public never sees.
              </p>
            </Card>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <a 
              href="https://www.gsaelibrary.gsa.gov/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-gov-blue hover:text-gov-blue transition"
            >
              GSA eLibrary <ExternalLink size={14} />
            </a>
            <a 
              href="https://www.gsaadvantage.gov/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-gov-blue hover:text-gov-blue transition"
            >
              GSA Advantage <ExternalLink size={14} />
            </a>
            <a 
              href="https://www.ebuy.gsa.gov/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-gov-blue hover:text-gov-blue transition"
            >
              GSA eBuy <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Need Help Getting On Contract?" kicker="Our Services" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We handle the entire submission process
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                From GSA MAS to OASIS+, we prepare your offer packages and negotiate 
                with contracting officers to get you awarded.
              </p>
            </div>
            <LinkButton 
              href="/services/gsa-contractors"
              size="lg"
              className="shrink-0"
            >
              View GSA Services
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
