// Replace the entire contents of src/routes/services/Programs.tsx with this:

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, FileText, Clock, 
  Target, Rocket, Building2, Send, Printer, Download, Save,
  Calendar, Phone, Mail, Users, BarChart3, Crown
} from "lucide-react";
import { cn } from "../../components/cn";

// ============================================
// PROGRAM DATA
// ============================================

const packages = {
  fedstart: {
    name: 'FedStart',
    duration: '3 Month',
    durationNum: 3,
    price: 3200,
    spotPrice: 2700,
    contacts: '1,000',
    icon: Rocket,
    color: 'gov-blue',
    description: 'Your compliance foundation. SAM.gov, DSBS, FEMA registrations plus SBA certifications, capabilities statement, marketing strategy with 1,000 contacts, and monthly capture support with one RFP review.',
    features: [
      { name: 'SAM.gov Registration, DSBS, & FEMA Registration', included: true, detail: 'SAM.gov submitted within 5 business days, DSBS and FEMA within 14 business days. Compliance updated throughout the year.' },
      { name: 'SBA Certification (14 Days)', included: true, detail: 'All SBA certifications you qualify for, submitted within the first 14 days.' },
      { name: 'Capabilities Statement', included: true, detail: 'Professional capabilities statement designed by our consultants.' },
      { name: 'Marketing Strategy with 1,000 Contacts', included: true, detail: 'Your top agencies, contracting officers, upcoming opportunities, and how-to approach guide.' },
      { name: 'Capture Support (Monthly)', included: true, detail: 'Monthly capture support with standing meetings.' },
      { name: 'One RFP Review', included: true, detail: 'One professional RFP review included.' },
      { name: 'GovCon Portal Access', included: false },
      { name: 'Marketing Campaigns', included: false },
      { name: 'Proposal Development', included: false }
    ],
    milestones: [
      { phase: 'Kickoff & Document Collection', days: 'Days 1-5', desc: 'Initial consultation, gather company information, begin SAM.gov registration' },
      { phase: 'SAM.gov Submission', days: 'Days 5-7', desc: 'SAM.gov registration submitted with optimized entity information' },
      { phase: 'DSBS & FEMA Registration', days: 'Days 7-14', desc: 'Complete DSBS profile and FEMA vendor portal registration' },
      { phase: 'SBA Certification Submission', days: 'Days 7-14', desc: 'All qualifying SBA certifications submitted' },
      { phase: 'Capabilities Statement & Marketing Strategy', days: 'Weeks 3-4', desc: 'Professional capabilities statement, agency targeting, 1,000 contact list' },
      { phase: 'Ongoing Capture Support', days: 'Months 2-3', desc: 'Monthly standing meetings, RFP review, compliance monitoring' }
    ]
  },
  growth: {
    name: 'Growth',
    duration: '6 Month',
    durationNum: 6,
    price: 6500,
    spotPrice: 5900,
    contacts: '2,000',
    icon: BarChart3,
    color: 'gov-crimson',
    description: 'Everything in FedStart plus GovCon Portal access (2,200 bid portals), 2 marketing campaigns (2,000 total contacts), and professional RFP reviews with gold team analysis.',
    features: [
      { name: 'Everything in FedStart', included: true, detail: 'Full compliance foundation with SAM.gov, DSBS, FEMA, SBA certifications, capabilities statement, and marketing strategy.' },
      { name: 'GovCon Portal Access', included: true, detail: 'Access to 2,200 bid portals with federal and state contract data, contracting officers, prime contractors, award data, forecasts, and daily bid alerts.' },
      { name: '2 Marketing Campaigns (2,000 Contacts)', included: true, detail: 'Two special marketing campaigns, up to 1,000 contacts each. Targeting contracting officers or prime contractors.' },
      { name: 'RFP Reviews (Gold Team)', included: true, detail: 'Gold team reviews with occasional red team support. Professional analysis ensuring accuracy and win likelihood.' },
      { name: 'Standing Meetings', included: true, detail: 'Regular strategy sessions throughout the 6-month engagement.' },
      { name: 'Capture Management', included: false },
      { name: 'Quarterly Marketing Campaigns', included: false },
      { name: 'Proposal Development (5 RFPs)', included: false }
    ],
    milestones: [
      { phase: 'FedStart Foundation', days: 'Month 1', desc: 'Complete all FedStart deliverables: registrations, certifications, capabilities statement' },
      { phase: 'Portal Setup & Training', days: 'Weeks 4-5', desc: 'GovCon Portal access, bid alert configuration, opportunity identification training' },
      { phase: 'First Marketing Campaign', days: 'Month 2', desc: 'First campaign to 1,000 targeted contacts (COs or primes)' },
      { phase: 'Active Pursuit & Reviews', days: 'Months 3-4', desc: 'RFP reviews, bid analysis, opportunity qualification' },
      { phase: 'Second Marketing Campaign', days: 'Month 4-5', desc: 'Second campaign to additional 1,000 contacts' },
      { phase: 'Ongoing Support', days: 'Month 6', desc: 'Continued reviews, strategy sessions, transition planning' }
    ]
  },
  prime: {
    name: 'Prime',
    duration: '12 Month',
    durationNum: 12,
    price: 15500,
    spotPrice: 12500,
    contacts: 'Quarterly',
    icon: Crown,
    color: 'gov-gold',
    description: 'Everything in Growth plus dedicated capture management, quarterly marketing campaigns, and full proposal development for up to 5 professional RFPs.',
    features: [
      { name: 'Everything in Growth', included: true, detail: 'Full Growth package: registrations, certifications, portal access, marketing campaigns, RFP reviews.' },
      { name: 'Capture Management', included: true, detail: 'Dedicated pipeline management. We identify the right bids and maintain a pipeline of opportunities always available to you.' },
      { name: 'Quarterly Marketing Campaigns', included: true, detail: 'Quarterly marketing campaigns with reply management, tailored to unique verticals that our experts identify and you approve.' },
      { name: 'Proposal Development (Up to 5 RFPs)', included: true, detail: 'Creation and development of up to 5 professional RFP responses.' },
      { name: 'Standing Meetings', included: true, detail: 'Regular strategy sessions throughout the 12-month engagement.' },
      { name: 'Compliance Management', included: true, detail: 'All compliance handled and updated throughout the year.' }
    ],
    milestones: [
      { phase: 'Foundation & Setup', days: 'Month 1', desc: 'Complete FedStart deliverables, portal access, capture management setup' },
      { phase: 'Pipeline Development', days: 'Months 2-3', desc: 'Build qualified opportunity pipeline, first quarterly campaign' },
      { phase: 'First Proposals', days: 'Months 3-5', desc: 'First 1-2 proposal developments based on pipeline' },
      { phase: 'Mid-Year Review', days: 'Month 6', desc: 'Strategy adjustment, second quarterly campaign, continued proposals' },
      { phase: 'Continued Pursuit', days: 'Months 7-9', desc: 'Additional proposals (3-4 total), third quarterly campaign' },
      { phase: 'Year-End & Transition', days: 'Months 10-12', desc: 'Final proposals (up to 5), fourth quarterly campaign, renewal planning' }
    ]
  }
};

const addons = {
  stateLocal: { name: 'State/Local Certification Coverage', price: 500, desc: 'Additional state and local certifications beyond SBA' },
  gsaSchedule: { name: 'GSA MAS Schedule Submission', price: 5500, desc: 'Full GSA Schedule application and support' },
  fullRfpReview: { name: 'Full RFP Review', price: 999, desc: 'Comprehensive RFP analysis and review' }
};

const comparisonData = [
  { feature: 'SAM.gov Registration', fedstart: true, growth: true, prime: true },
  { feature: 'DSBS & FEMA Registration', fedstart: true, growth: true, prime: true },
  { feature: 'SBA Certification (14 Days)', fedstart: true, growth: true, prime: true },
  { feature: 'Capabilities Statement', fedstart: true, growth: true, prime: true },
  { feature: 'Marketing Strategy', fedstart: true, growth: true, prime: true },
  { feature: 'Contacts Included', fedstart: '1,000', growth: '2,000', prime: 'Quarterly' },
  { feature: 'Capture Support', fedstart: 'Monthly', growth: 'Monthly', prime: 'Dedicated Manager' },
  { feature: 'RFP Review', fedstart: '1 Review', growth: 'Gold Team Reviews', prime: 'Gold Team Reviews' },
  { feature: 'GovCon Portal Access', fedstart: false, growth: true, prime: true },
  { feature: 'Marketing Campaigns', fedstart: false, growth: '2 Campaigns', prime: 'Quarterly' },
  { feature: 'Proposal Development', fedstart: false, growth: false, prime: 'Up to 5 RFPs' },
  { feature: 'Standing Meetings', fedstart: true, growth: true, prime: true },
];

type PackageKey = keyof typeof packages;
type AddonKey = keyof typeof addons;
type TabKey = 'agreement' | 'deliverables' | 'timeline' | 'comparison' | 'terms';

export default function Programs() {
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>('fedstart');
  const [selectedAddons, setSelectedAddons] = useState<AddonKey[]>([]);
  const [activeTab, setActiveTab] = useState<TabKey>('agreement');
  const [pricingType, setPricingType] = useState<'standard' | 'spot'>('standard');
  const [paymentTerms, setPaymentTerms] = useState<'full' | '50-50'>('50-50');
  const [clientInfo, setClientInfo] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    startDate: new Date().toISOString().split('T')[0]
  });

  const pkg = packages[selectedPackage];
  const basePrice = pricingType === 'spot' ? pkg.spotPrice : pkg.price;
  const addonsTotal = selectedAddons.reduce((sum, key) => sum + addons[key].price, 0);
  const total = basePrice + addonsTotal;

  const toggleAddon = (key: AddonKey) => {
    setSelectedAddons(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'agreement', label: 'Agreement' },
    { key: 'deliverables', label: 'Deliverables' },
    { key: 'timeline', label: 'Timeline' },
    { key: 'comparison', label: 'Comparison' },
    { key: 'terms', label: 'Terms' },
  ];

  return (
    <>
      <Helmet>
        <title>Executive Marketing Agreement — GovCon Inc.</title>
        <meta name="description" content="Build your customized government contracting marketing agreement. Choose from FedStart, Growth, or Prime programs." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-gov-navy text-white py-6 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Executive Marketing Agreement Builder</h1>
              <p className="text-slate-400 text-sm mt-1">Customize your government contracting program</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <a href="tel:8136650308" className="flex items-center gap-2 hover:text-white">
                <Phone size={14} /> (813) 665-0308
              </a>
              <a href="mailto:Info@GovCon.Info" className="flex items-center gap-2 hover:text-white">
                <Mail size={14} /> Info@GovCon.Info
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Client Information */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gov-crimson mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-gold rounded-full" />
                  Client Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gov-navy mb-1">Company Name</label>
                    <input
                      type="text"
                      value={clientInfo.companyName}
                      onChange={(e) => setClientInfo({ ...clientInfo, companyName: e.target.value })}
                      placeholder="Enter company name"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-crimson/20 focus:border-gov-crimson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gov-navy mb-1">Contact Name</label>
                    <input
                      type="text"
                      value={clientInfo.contactName}
                      onChange={(e) => setClientInfo({ ...clientInfo, contactName: e.target.value })}
                      placeholder="Primary contact"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-crimson/20 focus:border-gov-crimson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gov-navy mb-1">Email Address</label>
                    <input
                      type="email"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-crimson/20 focus:border-gov-crimson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gov-navy mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      placeholder="(000) 000-0000"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-crimson/20 focus:border-gov-crimson"
                    />
                  </div>
                </div>
              </div>

              {/* Select Program */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gov-crimson mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-gold rounded-full" />
                  Select Program
                </h3>
                <div className="space-y-3">
                  {(Object.keys(packages) as PackageKey[]).map((key) => {
                    const p = packages[key];
                    const isSelected = selectedPackage === key;
                    const IconComponent = p.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedPackage(key)}
                        className={cn(
                          "w-full text-left p-4 rounded-xl border-2 transition-all relative overflow-hidden",
                          isSelected 
                            ? "border-gov-crimson bg-white shadow-lg" 
                            : "border-slate-200 hover:border-gov-crimson/50 hover:shadow-md"
                        )}
                      >
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gov-crimson" />
                        )}
                        {key === 'growth' && (
                          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase bg-gov-gold text-gov-navy px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                        {key === 'prime' && (
                          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase bg-gov-gold text-gov-navy px-2 py-0.5 rounded-full">
                            Premium
                          </span>
                        )}
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center",
                            p.color === 'gov-blue' && "bg-gov-blue/10 text-gov-blue",
                            p.color === 'gov-crimson' && "bg-gov-crimson/10 text-gov-crimson",
                            p.color === 'gov-gold' && "bg-gov-gold/10 text-gov-gold"
                          )}>
                            <IconComponent size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gov-navy">{p.name}</div>
                            <div className="text-xs font-semibold text-gov-crimson bg-gov-crimson/10 px-2 py-0.5 rounded-full inline-block mt-1">
                              {p.duration} Program
                            </div>
                            <div className="mt-2">
                              <span className="text-xl font-bold text-gov-crimson">{formatCurrency(p.price)}</span>
                              <span className="text-sm text-slate-500 ml-2">or <strong className="text-gov-navy">{formatCurrency(p.spotPrice)}</strong> spot</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">{p.description}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Add-on Services */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gov-crimson mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-gold rounded-full" />
                  Additional Services
                </h3>
                <div className="space-y-3">
                  {(Object.keys(addons) as AddonKey[]).map((key) => {
                    const addon = addons[key];
                    const isActive = selectedAddons.includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() => toggleAddon(key)}
                        className={cn(
                          "w-full flex items-center justify-between p-4 rounded-xl transition-all",
                          isActive 
                            ? "bg-gov-crimson/5 border border-gov-crimson/30" 
                            : "bg-slate-50 hover:bg-slate-100"
                        )}
                      >
                        <div className="text-left">
                          <div className="font-medium text-gov-navy text-sm">{addon.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{addon.desc}</div>
                          <div className="text-sm font-semibold text-gov-crimson mt-1">+{formatCurrency(addon.price)}</div>
                        </div>
                        <div className={cn(
                          "w-11 h-6 rounded-full relative transition-colors",
                          isActive ? "bg-gov-crimson" : "bg-slate-300"
                        )}>
                          <div className={cn(
                            "absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform shadow-sm",
                            isActive ? "translate-x-5" : "translate-x-0.5"
                          )} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contract Terms */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gov-crimson mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-gold rounded-full" />
                  Contract Terms
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gov-navy mb-1">Pricing Type</label>
                    <select
                      value={pricingType}
                      onChange={(e) => setPricingType(e.target.value as 'standard' | 'spot')}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-crimson/20 focus:border-gov-crimson bg-white"
                    >
                      <option value="standard">Standard Pricing</option>
                      <option value="spot">Spot Purchase (Pay in Full)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gov-navy mb-1">Payment Terms</label>
                    <select
                      value={paymentTerms}
                      onChange={(e) => setPaymentTerms(e.target.value as 'full' | '50-50')}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-crimson/20 focus:border-gov-crimson bg-white"
                    >
                      <option value="full">Full Payment Upfront</option>
                      <option value="50-50">50% Now / 50% in 2 Months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gov-navy mb-1">Agreement Date</label>
                    <input
                      type="date"
                      value={clientInfo.startDate}
                      onChange={(e) => setClientInfo({ ...clientInfo, startDate: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-crimson/20 focus:border-gov-crimson"
                    />
                  </div>
                </div>
              </div>

              {/* Upgrade Notice */}
              <div className="bg-gov-navy rounded-2xl p-5 text-white">
                <h4 className="font-semibold flex items-center gap-2 text-sm">
                  <Target size={16} />
                  Upgrade Anytime
                </h4>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Clients can upgrade to a higher program tier at any time. 100% of amounts paid will be credited toward the upgraded program.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div>
              {/* Tabs */}
              <div className="flex gap-1 bg-slate-100 p-1 rounded-xl mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={cn(
                      "flex-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all",
                      activeTab === tab.key 
                        ? "bg-white text-gov-navy shadow-sm" 
                        : "text-slate-600 hover:text-gov-navy"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Document Preview */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Document Header */}
                <div className="bg-gov-navy p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">GovCon Marketing Services Agreement</h2>
                    <p className="text-slate-400 text-sm mt-1">Agreement #GCI-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 9999)).padStart(4, '0')}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-gov-gold rounded-full" />
                    <span className="text-white text-sm font-medium">Draft</span>
                  </div>
                </div>

                {/* Document Body */}
                <div className="p-8">
                  {/* Agreement Tab */}
                  {activeTab === 'agreement' && (
                    <div className="space-y-8">
                      {/* Section 1: Parties */}
                      <div className="pb-8 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                          <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                          Parties to the Agreement
                        </h3>
                        <div className="text-slate-700 space-y-3">
                          <p>This Marketing Services Agreement ("Agreement") is entered into as of <strong>{clientInfo.startDate ? new Date(clientInfo.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '[Agreement Date]'}</strong> by and between:</p>
                          <p><strong>Service Provider:</strong><br />GovCon Inc.<br />Tampa, FL<br />(813) 665-0308 | Info@GovCon.Info</p>
                          <p><strong>Client:</strong><br />{clientInfo.companyName || '[Company Name]'}<br />Contact: {clientInfo.contactName || '[Contact Name]'}<br />{clientInfo.email || '[Email]'} | {clientInfo.phone || '[Phone]'}</p>
                        </div>
                      </div>

                      {/* Section 2: Scope */}
                      <div className="pb-8 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                          <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                          Scope of Services
                        </h3>
                        <p className="text-slate-700 mb-4">GovCon Inc. agrees to provide the following government contracting business development services as outlined in the <strong>{pkg.name}</strong> program (<strong>{pkg.duration}</strong> engagement), along with any selected add-on services:</p>
                        
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-slate-50">
                              <th className="text-left p-3 font-semibold text-slate-600 uppercase text-xs tracking-wide">Service</th>
                              <th className="text-left p-3 font-semibold text-slate-600 uppercase text-xs tracking-wide">Description</th>
                              <th className="text-right p-3 font-semibold text-slate-600 uppercase text-xs tracking-wide">Investment</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-slate-100">
                              <td className="p-3 font-semibold text-gov-navy">{pkg.name} Program{pricingType === 'spot' ? ' (Spot)' : ''}</td>
                              <td className="p-3 text-slate-600">{pkg.duration} Program</td>
                              <td className="p-3 text-right">{formatCurrency(basePrice)}</td>
                            </tr>
                            {selectedAddons.map((key) => (
                              <tr key={key} className="border-b border-slate-100">
                                <td className="p-3 text-gov-navy">{addons[key].name}</td>
                                <td className="p-3 text-slate-600">{addons[key].desc}</td>
                                <td className="p-3 text-right">{formatCurrency(addons[key].price)}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="bg-gov-navy text-white">
                              <td colSpan={2} className="p-3 font-bold">Total Investment</td>
                              <td className="p-3 text-right font-bold">{formatCurrency(total)}</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>

                      {/* Section 3: Payment */}
                      <div className="pb-8 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                          <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                          Payment Terms
                        </h3>
                        <div className="text-slate-700 space-y-2">
                          <p>The total investment for the services described herein is <strong>{formatCurrency(total)}</strong>, payable according to the following schedule:</p>
                          {paymentTerms === 'full' ? (
                            <>
                              <p><strong>Payment Structure:</strong> Full Payment Upfront</p>
                              <p>• Total Payment: {formatCurrency(total)} due upon execution of this Agreement</p>
                            </>
                          ) : (
                            <>
                              <p><strong>Payment Structure:</strong> 50% Now / 50% in 2 Months</p>
                              <p>• Initial Payment: {formatCurrency(Math.round(total / 2))} due upon execution of this Agreement</p>
                              <p>• Final Payment: {formatCurrency(total - Math.round(total / 2))} due 60 days after execution</p>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Section 4: Duration */}
                      <div className="pb-8 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                          <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                          Program Duration & Standing Meetings
                        </h3>
                        <p className="text-slate-700 mb-4">The <strong>{pkg.name}</strong> program is a <strong>{pkg.duration.toLowerCase()}</strong> engagement. Services shall commence upon receipt of initial payment and required documentation from Client.</p>
                        <p className="text-slate-700 mb-6"><strong>All programs include standing meetings.</strong> Regularly scheduled strategy sessions are included to review progress, discuss opportunities, and adjust approach as needed.</p>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-slate-50 p-5 rounded-xl text-center">
                            <div className="text-3xl font-bold text-gov-crimson">{pkg.durationNum}</div>
                            <div className="text-xs text-slate-600 uppercase tracking-wide mt-1">Month Program</div>
                          </div>
                          <div className="bg-slate-50 p-5 rounded-xl text-center">
                            <div className="text-3xl font-bold text-gov-crimson">{1 + selectedAddons.length}</div>
                            <div className="text-xs text-slate-600 uppercase tracking-wide mt-1">Services Selected</div>
                          </div>
                          <div className="bg-slate-50 p-5 rounded-xl text-center">
                            <div className="text-3xl font-bold text-gov-crimson">{pkg.contacts}</div>
                            <div className="text-xs text-slate-600 uppercase tracking-wide mt-1">Contacts Included</div>
                          </div>
                        </div>
                      </div>

                      {/* Signature Block */}
                      <div className="grid grid-cols-2 gap-12 pt-8 border-t-2 border-gov-navy">
                        <div>
                          <div className="h-16 border-b border-gov-navy" />
                          <div className="text-xs text-slate-500 uppercase tracking-wide mt-2">Service Provider Signature</div>
                          <div className="font-semibold text-gov-navy mt-1">GovCon Inc.</div>
                          <div className="text-xs text-slate-500 mt-2">Date: ________________</div>
                        </div>
                        <div>
                          <div className="h-16 border-b border-gov-navy" />
                          <div className="text-xs text-slate-500 uppercase tracking-wide mt-2">Client Signature</div>
                          <div className="font-semibold text-gov-navy mt-1">{clientInfo.contactName || '[Client Name]'}</div>
                          <div className="text-xs text-slate-500 mt-2">Date: ________________</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Deliverables Tab */}
                  {activeTab === 'deliverables' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                          <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                          {pkg.name} Program Deliverables
                        </h3>
                        <p className="text-slate-600 mb-4">The following deliverables are included in your selected program:</p>
                        <div className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <div 
                              key={idx}
                              className={cn(
                                "flex items-start gap-3 p-4 rounded-xl",
                                feature.included ? "bg-slate-50" : "bg-transparent border border-dashed border-slate-300 opacity-50"
                              )}
                            >
                              <div className={cn(
                                "w-7 h-7 rounded-lg flex items-center justify-center shrink-0",
                                feature.included ? "bg-gov-crimson text-white" : "bg-slate-300 text-white"
                              )}>
                                {feature.included ? <CheckCircle size={14} /> : <span className="text-xs">✕</span>}
                              </div>
                              <div>
                                <div className="font-medium text-gov-navy">{feature.name}</div>
                                {feature.detail && (
                                  <div className="text-sm text-slate-500 mt-1">{feature.detail}</div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {selectedAddons.length > 0 && (
                        <div>
                          <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                            <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            Add-on Service Deliverables
                          </h3>
                          <div className="space-y-3">
                            {selectedAddons.map((key) => (
                              <div key={key} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="w-7 h-7 rounded-lg bg-gov-crimson text-white flex items-center justify-center shrink-0">
                                  <CheckCircle size={14} />
                                </div>
                                <div>
                                  <div className="font-medium text-gov-navy">{addons[key].name}</div>
                                  <div className="text-sm text-slate-500 mt-1">{addons[key].desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Timeline Tab */}
                  {activeTab === 'timeline' && (
                    <div>
                      <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                        <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        Project Timeline
                      </h3>
                      <p className="text-slate-600 mb-6">Estimated project milestones for your <strong>{pkg.name}</strong> program:</p>
                      
                      <div className="space-y-0">
                        {pkg.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex gap-5 pb-6 relative">
                            {idx < pkg.milestones.length - 1 && (
                              <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-slate-200" />
                            )}
                            <div className="w-8 h-8 rounded-full bg-gov-crimson text-white flex items-center justify-center text-sm font-bold shrink-0 relative z-10">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gov-navy">{milestone.phase}</h4>
                              <p className="text-slate-600 text-sm mt-1">{milestone.desc}</p>
                              <span className="inline-block mt-2 text-xs font-medium text-gov-crimson bg-gov-crimson/10 px-3 py-1 rounded-full">
                                {milestone.days}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Comparison Tab */}
                  {activeTab === 'comparison' && (
                    <div>
                      <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                        <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        Program Comparison
                      </h3>
                      <p className="text-slate-600 mb-6">See what's included in each program tier. Your selected program (<strong>{pkg.name}</strong>) is highlighted.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gov-navy text-white">
                              <th className="text-left p-3 font-semibold">Feature</th>
                              <th className="text-center p-3 font-semibold">
                                FedStart<br /><span className="font-normal text-xs">3 Months</span>
                              </th>
                              <th className="text-center p-3 font-semibold">
                                Growth<br /><span className="font-normal text-xs">6 Months</span>
                              </th>
                              <th className="text-center p-3 font-semibold">
                                Prime<br /><span className="font-normal text-xs">12 Months</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {comparisonData.map((row, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                <td className="p-3 font-medium text-gov-navy">{row.feature}</td>
                                <td className="p-3 text-center">
                                  {row.fedstart === true ? (
                                    <span className="text-gov-crimson font-bold">✓</span>
                                  ) : row.fedstart === false ? (
                                    <span className="text-slate-300">—</span>
                                  ) : (
                                    <span className="text-slate-700">{row.fedstart}</span>
                                  )}
                                </td>
                                <td className="p-3 text-center">
                                  {row.growth === true ? (
                                    <span className="text-gov-crimson font-bold">✓</span>
                                  ) : row.growth === false ? (
                                    <span className="text-slate-300">—</span>
                                  ) : (
                                    <span className="text-slate-700">{row.growth}</span>
                                  )}
                                </td>
                                <td className="p-3 text-center">
                                  {row.prime === true ? (
                                    <span className="text-gov-crimson font-bold">✓</span>
                                  ) : row.prime === false ? (
                                    <span className="text-slate-300">—</span>
                                  ) : (
                                    <span className="text-slate-700">{row.prime}</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Terms Tab */}
                  {activeTab === 'terms' && (
                    <div className="space-y-8">
                      {[
                        {
                          num: 1,
                          title: 'Service Delivery Guarantees',
                          content: (
                            <>
                              <p><strong>SAM.gov Registration:</strong> Submitted within 5 business days of receiving all required documentation.</p>
                              <p><strong>DSBS & FEMA Registration:</strong> Submitted within 14 business days.</p>
                              <p><strong>SBA Certifications:</strong> All certifications you qualify for, submitted within 14 days.</p>
                              <p>GovCon Inc. handles all compliance updates throughout the program duration, regardless of program tier selected.</p>
                            </>
                          )
                        },
                        {
                          num: 2,
                          title: 'Client Responsibilities',
                          content: <p>Client agrees to provide timely access to all required documentation, respond to information requests within 48 business hours, and participate in scheduled standing meetings. Delays in providing required materials may extend project timelines.</p>
                        },
                        {
                          num: 3,
                          title: 'Program Upgrades',
                          content: <p>Client may upgrade to a higher program tier at any time during the engagement. GovCon Inc. will credit 100% of amounts already paid toward the upgraded program. Many clients start with FedStart and upgrade to Growth once they're ready to actively pursue contracts.</p>
                        },
                        {
                          num: 4,
                          title: 'Confidentiality',
                          content: <p>Both parties agree to maintain the confidentiality of all proprietary information, business strategies, client lists, and other sensitive materials disclosed during the course of this engagement. This obligation shall survive the termination of this Agreement.</p>
                        },
                        {
                          num: 5,
                          title: 'Intellectual Property',
                          content: <p>Upon full payment, all deliverables created specifically for Client (capabilities statements, proposals, marketing materials) shall become the property of Client. GovCon Inc. retains the right to use generic templates, methodologies, and processes for future clients.</p>
                        },
                        {
                          num: 6,
                          title: 'Termination',
                          content: <p>Either party may terminate this Agreement with 30 days written notice. In the event of termination, Client shall pay for all services rendered through the termination date. Refunds for prepaid services shall be prorated based on work completed.</p>
                        },
                        {
                          num: 7,
                          title: 'Governing Law',
                          content: <p>This Agreement shall be governed by and construed in accordance with the laws of the State of Florida. Any disputes arising under this Agreement shall be resolved in the courts of Hillsborough County, Florida.</p>
                        }
                      ].map((section) => (
                        <div key={section.num} className="pb-6 border-b border-slate-100 last:border-0">
                          <h3 className="text-lg font-bold text-gov-navy mb-4 flex items-center gap-3">
                            <span className="w-7 h-7 bg-gov-crimson text-white rounded-full flex items-center justify-center text-xs font-bold">{section.num}</span>
                            {section.title}
                          </h3>
                          <div className="text-slate-700 space-y-2">{section.content}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Bar */}
                <div className="bg-slate-50 border-t border-slate-100 p-5 flex gap-3 justify-end">
                  <button 
                    onClick={() => {
                      localStorage.setItem('govcon_agreement_draft', JSON.stringify({
                        clientInfo, selectedPackage, selectedAddons, pricingType, paymentTerms
                      }));
                      alert('Draft saved!');
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gov-navy bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition"
                  >
                    <Save size={16} /> Save Draft
                  </button>
                  <button 
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gov-navy bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition"
                  >
                    <Printer size={16} /> Print
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gov-crimson bg-white border-2 border-gov-crimson rounded-lg hover:bg-gov-crimson hover:text-white transition">
                    <Download size={16} /> Export PDF
                  </button>
                  <button 
                    onClick={() => {
                      if (!clientInfo.email) {
                        alert('Please enter a client email address.');
                        return;
                      }
                      alert(`Agreement would be sent to ${clientInfo.email} for signature.`);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gov-crimson rounded-lg hover:bg-gov-crimson/90 transition"
                  >
                    <Send size={16} /> Send for Signature
                  </button>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 border-t border-slate-100 p-5 flex items-center justify-between text-xs text-slate-500">
                  <p className="max-w-xl">This agreement is generated by GovCon Inc.'s Executive Marketing Agreement Builder. All terms are customizable and subject to final review before execution.</p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gov-crimson rounded-md flex items-center justify-center text-white font-bold text-xs">G</div>
                    <span>© {new Date().getFullYear()} GovCon Inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}