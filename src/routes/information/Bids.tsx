import { Helmet } from "react-helmet-async";
import { ArrowRight, Search, Globe, Bell, CheckCircle, ExternalLink } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

const searchSources = [
  {
    name: "SAM.gov",
    url: "https://sam.gov",
    desc: "The primary federal bid portal. All federal opportunities over $25k are posted here.",
    icon: Search,
  },
  {
    name: "GSA eBuy",
    url: "https://www.ebuy.gsa.gov",
    desc: "Exclusive RFQs for GSA Schedule holders. Agencies post here for quick procurements.",
    icon: Globe,
  },
  {
    name: "State Portals",
    url: "#state-portals",
    desc: "Each state has its own procurement system. Registration is usually free.",
    icon: Bell,
  },
];

const statePortals = [
  { region: "Northeast", states: [
    { name: "New York", url: "https://nyspro.ogs.ny.gov/" },
    { name: "Massachusetts", url: "https://www.commbuys.com/" },
    { name: "Pennsylvania", url: "http://www.emarketplace.state.pa.us/" },
    { name: "New Jersey", url: "https://www.njstart.gov/" },
  ]},
  { region: "Southeast", states: [
    { name: "Florida", url: "https://vendor.myfloridamarketplace.com/" },
    { name: "Georgia", url: "https://doas.ga.gov/state-purchasing" },
    { name: "Virginia", url: "https://eva.virginia.gov/" },
    { name: "North Carolina", url: "https://www.ips.state.nc.us/" },
  ]},
  { region: "Midwest", states: [
    { name: "Illinois", url: "https://bidbuy.illinois.gov/" },
    { name: "Ohio", url: "https://procure.ohio.gov/" },
    { name: "Michigan", url: "https://sigma.michigan.gov/" },
    { name: "Texas", url: "http://www.txsmartbuy.com/esbd" },
  ]},
  { region: "West", states: [
    { name: "California", url: "https://caleprocure.ca.gov/" },
    { name: "Washington", url: "https://pr-webs-vendor.des.wa.gov/" },
    { name: "Arizona", url: "https://app.az.gov/" },
    { name: "Colorado", url: "https://www.colorado.gov/pacific/oits/bids-rfps" },
  ]},
];

export default function InformationBids() {
  return (
    <>
      <Helmet>
        <title>Finding Government Bids — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Information</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Finding Government Bids
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Finding the right work is half the battle. Learn how to build a daily search 
              routine and identify opportunities worth pursuing.
            </p>
          </div>
        </div>
      </section>

      {/* Search Sources */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gov-navy">Primary Search Sources</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            These are the essential platforms for finding government contract opportunities.
          </p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {searchSources.map((source) => (
              <Card key={source.name} className="p-6" hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                  <source.icon size={24} />
                </div>
                <h3 className="mt-4 font-bold text-lg text-gov-navy">{source.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{source.desc}</p>
                {source.url.startsWith("http") && (
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gov-blue hover:text-gov-crimson transition"
                  >
                    Visit Site <ExternalLink size={14} />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SAM.gov Setup */}
      <Section title="Setting Up SAM.gov Searches" kicker="Step by Step">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <ol className="space-y-4">
              {[
                "Log in to SAM.gov (account required to save searches)",
                "Go to 'Search' and select 'Contract Opportunities'",
                "Filter by NAICS, Place of Performance, and Set-Aside",
                "Click 'Actions' > 'Save Search'",
                "Enable 'Notify me when new results appear'",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gov-blue text-white text-sm font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          
          <Card className="p-6 bg-gov-navy text-white" hover={false}>
            <h3 className="font-bold text-lg">Pro Tips</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Check SAM.gov every morning before 9 AM",
                "Use multiple NAICS codes to catch related work",
                "Set alerts for key agencies you've targeted",
                "Don't ignore 'Sources Sought' notices",
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gov-green shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* State Portals */}
      <section id="state-portals" className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">State & Local</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">State Bid Portals</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Every state has its own procurement system. You usually need to register as a vendor 
            (free) to see details and submit bids.
          </p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statePortals.map((region) => (
              <Card key={region.region} className="p-5" hover={false}>
                <h3 className="font-bold text-gov-navy border-b border-slate-200 pb-2">
                  {region.region}
                </h3>
                <ul className="mt-3 space-y-2">
                  {region.states.map((state) => (
                    <li key={state.name}>
                      <a 
                        href={state.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-sm text-slate-600 hover:text-gov-blue transition"
                      >
                        {state.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bid/No-Bid */}
      <Section title="Bid / No-Bid Decision" kicker="Strategy">
        <Card className="p-8" hover={false}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-bold text-lg text-gov-navy">Don't Bid on Everything</h3>
              <p className="mt-4 text-slate-600">
                The biggest mistake is the "shotgun approach." If you don't talk to the 
                customer before the RFP comes out, your chance of winning is less than 10%.
              </p>
              <p className="mt-4 text-slate-600">
                Use a strict gate review process. Score each opportunity before investing 
                40+ hours writing a proposal.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-gov-navy">Key Questions</h4>
              <ul className="mt-4 space-y-2">
                {[
                  "Do you know the customer?",
                  "Did you influence the requirements?",
                  "Do you have exact past performance?",
                  "Is the timeline realistic?",
                  "Is the incumbent vulnerable?",
                ].map((q, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="h-2 w-2 rounded-full bg-gov-crimson" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section title="Need Help Building Your Pipeline?" kicker="Our Services" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We find opportunities before they hit SAM.gov
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Our Capture Management service delivers hand-picked bids you can actually win, 
                not 50 keyword matches.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Build My Pipeline
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
