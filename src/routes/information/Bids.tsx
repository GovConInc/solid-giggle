import { Helmet } from "react-helmet-async";
import { ArrowRight, Search, Globe, Bell, CheckCircle, ExternalLink, AlertCircle, Package, Clock, Target } from "lucide-react";
import { useState } from "react";
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

// SAM.gov Notification Types
const FileText = Package;

const samNotificationTypes = [
  {
    type: "Request for Proposal (RFP)",
    icon: FileText,
    description: "Formal solicitation for a competitive bid. Agencies post detailed requirements and evaluation criteria.",
    characteristics: ["Competitive bidding required", "Detailed specifications provided", "Detailed evaluation criteria", "Multiple pages of requirements"],
    timeline: "15-30 days average response time",
    winRate: "8-15% win rate if qualified",
    howToPrepare: "Respond to every requirement, use the same language, include past performance examples",
  },
  {
    type: "Request for Quotation (RFQ)",
    icon: AlertCircle,
    description: "Quick procurement for services/products under $250k. Less formal than RFP.",
    characteristics: ["Simplified process", "Typically GSA eBuy", "Fast turnaround (3-5 days)", "Pricing-focused"],
    timeline: "3-5 days average response time",
    winRate: "20-25% win rate if qualified",
    howToPrepare: "Fast response critical. Have pricing ready. Keep response brief and clear.",
  },
  {
    type: "Indefinite Delivery/Indefinite Quantity (IDIQ)",
    icon: Package,
    description: "A blanket contract with an agency. You compete for a spot on the contract, then agencies order from you.",
    characteristics: ["Multi-year base + options", "Estimated spending (not guaranteed)", "Task Orders issued under the contract", "Can lead to $50M+ in awards"],
    timeline: "30-45 days to award",
    winRate: "12-20% depends on competition",
    howToPrepare: "Understand the IDIQ vehicle. Show capability across the full scope. Highlight relevant past performance.",
  },
  {
    type: "Sources Sought Notice",
    icon: Search,
    description: "Agency testing the market before issuing formal RFP. Government gathers info on potential contractors.",
    characteristics: ["No contract award", "Often leads to direct RFP", "Questions about your capability", "Networking opportunity"],
    timeline: "10-20 days to respond",
    winRate: "N/A - informational only",
    howToPrepare: "Respond thoroughly. This is a chance to influence the RFP scope. Include capability statement.",
  },
  {
    type: "Justification & Approval (J&A)",
    icon: Target,
    description: "Sole-source procurement. Government is buying from one contractor without competition.",
    characteristics: ["No bidding - you're selected", "Government must justify why", "Often extended incumbents", "Sometimes available to set-asides"],
    timeline: "20-30 days to award",
    winRate: "80-95% if you're selected",
    howToPrepare: "Build relationships with agencies. Have done business with them before. Understand their mission.",
  },
  {
    type: "Modification Notice",
    icon: Clock,
    description: "Changes to an existing contract. New scope of work or increased funding.",
    characteristics: ["Amendment to active contract", "Current contractor advantage", "Limited re-competition", "Opportunity to win new work"],
    timeline: "15-25 days to respond",
    winRate: "Variable - depends on modification",
    howToPrepare: "If current contractor: submit fast. If pursuing: show why you're better/different.",
  },
];

// Contract Types
const contractTypes = [
  {
    type: "Firm Fixed Price (FFP)",
    category: "Fixed Price",
    icon: AlertCircle,
    description: "You quote a price, and that's what the government pays - regardless of your costs.",
    riskLevel: "HIGH RISK (for contractor)",
    bestFor: "Defined scope, previous experience, low complexity",
    pros: ["Government knows exact cost", "Simple administration", "Fast payment"],
    cons: ["You bear all cost overrun risk", "Scope creep = you lose money", "Need accurate estimates"],
    example: "Building a website for $50,000. Even if it costs you $75,000, government pays $50,000.",
    tipIcon: AlertCircle,
    tip: "Build in 15-20% contingency. Once you quote it, you're locked in.",
  },
  {
    type: "Cost-Plus-Fixed-Fee (CPFF)",
    category: "Cost Reimbursable",
    icon: Package,
    description: "Government reimburses all allowable costs + you earn a fixed fee (profit) on top.",
    riskLevel: "LOW RISK (for contractor)",
    bestFor: "R&D, uncertain scope, long-term relationships",
    pros: ["All costs reimbursed", "Fixed profit regardless of cost", "Scope changes are easy"],
    cons: ["Lower profit potential", "Government scrutinizes costs", "Higher overhead", "Extensive accounting required"],
    example: "R&D project budgeted at $100k. If actual costs are $120k, government pays $120k + your fixed fee.",
    tipIcon: Package,
    tip: "Excellent for new, uncertain work. Government shares the risk. Very common in research.",
  },
  {
    type: "Time & Materials (T&M)",
    category: "Cost Reimbursable",
    icon: Clock,
    description: "You bill hourly labor rates + reimburse materials. No fixed price or fee.",
    riskLevel: "MEDIUM RISK",
    bestFor: "Maintenance, support, ongoing services",
    pros: ["Flexible scope", "Bill as you go", "No estimation risk"],
    cons: ["Can look expensive to government", "Needs detailed timekeeping", "May have labor rate caps"],
    example: "IT support: $150/hour for senior engineer, $90/hour for junior. You bill actual hours + materials.",
    tipIcon: Clock,
    tip: "Build trust - government watches T&M closely. Timekeeping must be immaculate.",
  },
  {
    type: "Cost-Plus-Incentive-Fee (CPIF)",
    category: "Cost Reimbursable",
    icon: Target,
    description: "Government reimburses costs + you earn a fee that increases if costs stay below target.",
    riskLevel: "MEDIUM RISK",
    bestFor: "Incentivizing cost control, high-value contracts",
    pros: ["Encourages efficiency", "Shared savings", "Risk sharing with government"],
    cons: ["Complex calculations", "Detailed cost tracking", "Fee decreases if over target"],
    example: "Target cost $1M. Actual $900k. You share 50% of savings ($50k bonus) + your base fee.",
    tipIcon: Target,
    tip: "Good for long-term relationships. Shows you care about efficiency.",
  },
  {
    type: "Labor Hour (LH)",
    category: "Cost Reimbursable",
    icon: Clock,
    description: "Similar to T&M but labor-only. Government provides materials; you provide labor.",
    riskLevel: "MEDIUM RISK",
    bestFor: "Installation, integration, hands-on services",
    pros: ["Flexible labor scope", "No material risk", "Easy administration"],
    cons: ["Labor rate negotiations", "Cap on labor hours possible", "Often has productivity clauses"],
    example: "Installing equipment: $200/hour billed. Government pays for parts; you provide installation labor.",
    tipIcon: Clock,
    tip: "Labor rates are negotiated upfront and fixed. Get them reasonable - they're locked for 3+ years.",
  },
  {
    type: "Fixed-Price with Economic Price Adjustment (EPA)",
    category: "Fixed Price",
    icon: AlertCircle,
    description: "Fixed price that adjusts based on published indices (labor, materials, inflation).",
    riskLevel: "MEDIUM RISK",
    bestFor: "Long-term contracts where inflation is real (supplies, raw materials)",
    pros: ["Some cost protection", "Price adjusts fairly", "Government transparency"],
    cons: ["Complex adjustments", "Government must approve adjustments", "Still some risk for you"],
    example: "Steel supply contract at $100/ton. Price adjusts monthly based on published steel index.",
    tipIcon: AlertCircle,
    tip: "Common for commodity contracts. Track the indices you're tied to - they matter.",
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
  const [expandedType, setExpandedType] = useState<string | null>(null);
  const [expandedContract, setExpandedContract] = useState<string | null>(null);

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
              Not all opportunities are created equal. Learn to identify the right notifications, 
              understand what you're bidding on, and master the contract types that define your profit margin.
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

      {/* SAM.gov Notification Types */}
      <Section title="SAM.gov Notification Types" kicker="Know What You're Bidding">
        <p className="max-w-3xl text-slate-600 mb-8">
          Every SAM.gov listing is a different type of opportunity. Understanding which type determines your win strategy, 
          timeline, and resource investment. Here's what each notification means and how to respond.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {samNotificationTypes.map((notif) => {
            const Icon = notif.icon;
            const isExpanded = expandedType === notif.type;
            
            return (
              <div 
                key={notif.type} 
                className="p-6 rounded-2xl border border-slate-200 bg-white cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setExpandedType(isExpanded ? null : notif.type)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gov-navy">{notif.type}</h3>
                    <p className="text-xs text-gov-crimson font-semibold mt-1">{notif.timeline}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4">{notif.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {notif.characteristics.map((char, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                      {char}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Win Rate</div>
                    <div className="text-lg font-bold text-gov-navy">{notif.winRate}</div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gov-navy mb-2">How to Prepare</h4>
                      <p className="text-sm text-slate-600">{notif.howToPrepare}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contract Types */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Contract Economics</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy mb-4">
            Types of Government Contracts
          </h2>
          <p className="max-w-3xl text-slate-600 mb-8">
            The contract type determines your risk, profit potential, and how you bill the government. 
            A Firm Fixed Price contract can be profitable or devastating depending on your estimate accuracy. 
            Cost-reimbursable contracts share risk with the government but cap your profit.
          </p>

          <div className="space-y-4">
            {contractTypes.map((contract) => {
              const Icon = contract.tipIcon;
              const isExpanded = expandedContract === contract.type;
              
              return (
                <div 
                  key={contract.type}
                  className="p-6 rounded-2xl border border-slate-200 bg-white cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setExpandedContract(isExpanded ? null : contract.type)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold uppercase px-2 py-1 rounded-full bg-gov-blue/10 text-gov-blue">
                          {contract.category}
                        </span>
                        <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
                          contract.riskLevel.includes("HIGH") ? "bg-gov-crimson/10 text-gov-crimson" : 
                          contract.riskLevel.includes("LOW") ? "bg-gov-green/10 text-gov-green" :
                          "bg-orange-100 text-orange-700"
                        }`}>
                          {contract.riskLevel}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-gov-navy">{contract.type}</h3>
                      <p className="text-sm text-slate-600 mt-2">{contract.description}</p>
                    </div>
                    <div className="text-2xl">{isExpanded ? "−" : "+"}</div>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-200 space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="font-semibold text-gov-navy mb-3">Best For</h4>
                          <p className="text-sm text-slate-600">{contract.bestFor}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gov-navy mb-3">Example</h4>
                          <p className="text-sm text-slate-600 italic">{contract.example}</p>
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="font-semibold text-gov-navy mb-3 text-green-700">Pros</h4>
                          <ul className="space-y-2">
                            {contract.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle size={14} className="text-gov-green shrink-0 mt-0.5" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gov-navy mb-3 text-red-700">Cons</h4>
                          <ul className="space-y-2">
                            {contract.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                <AlertCircle size={14} className="text-gov-crimson shrink-0 mt-0.5" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-gov-navy/5 p-4 rounded-lg border border-gov-navy/10">
                        <Icon className="text-gov-crimson shrink-0 mt-0.5" size={20} />
                        <p className="text-sm text-slate-700">{contract.tip}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
                "Check SAM.gov every morning - new bids drop at 8 AM",
                "Use multiple NAICS codes to catch all related work",
                "Set alerts for agencies you've targeted in your capture plan",
                "Don't ignore 'Sources Sought' - they often lead to the RFP",
                "Save searches by contract type to filter out FFP if you prefer cost-plus",
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
      <section id="state-portals" className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">State & Local</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">State Bid Portals</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Every state has its own procurement system. You usually need to register as a vendor 
            (free) to see details and submit bids. Often less competitive than federal work.
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
                  "Is this FFP or cost-plus? (impacts profit)",
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
      <Section title="Need Help Finding the Right Opportunities?" kicker="Capture Management" dark>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-8 bg-white/5 border-white/10" hover={false}>
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Understand Your Bids</h3>
              <p className="text-slate-300 text-sm">
                Know the difference between FFP and cost-plus. Know which contract types maximize your margin. 
                We analyze the fine print so you bid smart.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-white/5 border-white/10" hover={false}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-3">Find Before Others</h3>
                <p className="text-slate-300 text-sm">
                  Our Capture Management service identifies sources sought notices early, 
                  helping you influence requirements before the formal RFP.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-6 p-8 bg-gov-navy border-2 border-gov-crimson" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Build a targeted pipeline
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We find the right bids, analyze the contract type, assess your win probability, and deliver 
                only the opportunities you can actually win—not 50 keyword matches.
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
