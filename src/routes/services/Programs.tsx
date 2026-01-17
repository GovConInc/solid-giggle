import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, Clock, Target, Rocket, Send, 
  Calendar, Phone, Mail, BarChart3, Crown, X,
  Zap, Shield, Star, TrendingUp, Check, FileText,
  Users, Database, MessageSquare, ClipboardCheck, Award,
  Building2, Briefcase, Globe, Search, PieChart
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

// ============================================
// PROGRAM DATA
// ============================================

const programs = [
  {
    id: 'fedstart',
    name: 'FedStart',
    tagline: 'Your Compliance Foundation',
    duration: '3 Months',
    durationNum: 3,
    price: 3200,
    spotPrice: 2700,
    icon: Rocket,
    gradient: 'from-blue-600 to-indigo-700',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    idealFor: 'New contractors entering the federal market',
    deliverables: [
      {
        icon: Globe,
        title: 'SAM.gov Registration',
        desc: 'Complete registration submitted within 5 business days with optimized entity profile',
      },
      {
        icon: Database,
        title: 'DSBS & FEMA Registration',
        desc: 'SBA Dynamic Small Business Search and FEMA Vendor Portal setup within 14 days',
      },
      {
        icon: Award,
        title: 'SBA Certifications',
        desc: 'All certifications you qualify for, submitted within 14 days of engagement start',
      },
      {
        icon: FileText,
        title: 'Capabilities Statement',
        desc: 'Professional capabilities statement designed by our consultants',
      },
      {
        icon: Target,
        title: 'Marketing Strategy + 1,000 Contacts',
        desc: 'Top agencies, contracting officers, upcoming opportunities, and approach guide',
      },
      {
        icon: MessageSquare,
        title: 'Monthly Capture Support',
        desc: 'Standing meetings to review progress and strategy',
      },
      {
        icon: ClipboardCheck,
        title: 'One RFP Review',
        desc: 'Professional review of your first proposal submission',
      },
    ],
    upgradeNote: 'Upgrade to Growth anytime with full credit applied',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Scale Your Pipeline',
    duration: '6 Months',
    durationNum: 6,
    price: 6500,
    spotPrice: 5900,
    icon: BarChart3,
    gradient: 'from-rose-600 to-red-700',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    popular: true,
    idealFor: 'Contractors ready to actively pursue opportunities',
    deliverables: [
      {
        icon: CheckCircle,
        title: 'Everything in FedStart',
        desc: 'Complete compliance foundation including all registrations and certifications',
      },
      {
        icon: Search,
        title: 'GovCon Portal Access',
        desc: '2,200 bid portals with federal and state contract data, award history, and forecasts',
      },
      {
        icon: Zap,
        title: 'Daily Bid Alerts',
        desc: 'Automated opportunity notifications matched to your capabilities',
      },
      {
        icon: Mail,
        title: '2 Marketing Campaigns',
        desc: '2,000 total contacts targeting contracting officers and prime contractors',
      },
      {
        icon: Users,
        title: 'Gold Team RFP Reviews',
        desc: 'Professional evaluation with red team support ensuring accuracy and win likelihood',
      },
      {
        icon: Building2,
        title: 'Prime Contractor Targeting',
        desc: 'Identify and connect with primes seeking small business partners',
      },
      {
        icon: Calendar,
        title: 'Regular Strategy Sessions',
        desc: 'Standing meetings throughout the 6-month engagement',
      },
    ],
    upgradeNote: 'Upgrade to Prime anytime with full credit applied',
  },
  {
    id: 'prime',
    name: 'Prime',
    tagline: 'Full-Service Partnership',
    duration: '12 Months',
    durationNum: 12,
    price: 15500,
    spotPrice: 12500,
    icon: Crown,
    gradient: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    idealFor: 'Serious contractors ready to win multiple contracts',
    deliverables: [
      {
        icon: CheckCircle,
        title: 'Everything in Growth',
        desc: 'Full Growth package including portal access, campaigns, and RFP reviews',
      },
      {
        icon: PieChart,
        title: 'Dedicated Capture Management',
        desc: 'We build and maintain your opportunity pipeline, identifying the right bids for you',
      },
      {
        icon: Mail,
        title: 'Quarterly Marketing Campaigns',
        desc: 'Ongoing outreach with reply management to verticals our experts identify',
      },
      {
        icon: FileText,
        title: 'Up to 5 Full RFP Proposals',
        desc: 'Complete proposal development from outline to submission-ready package',
      },
      {
        icon: Shield,
        title: 'Year-Round Compliance',
        desc: 'All registrations and certifications managed and updated throughout the year',
      },
      {
        icon: Star,
        title: 'Priority Support',
        desc: 'Direct access to senior consultants with same-day response',
      },
      {
        icon: TrendingUp,
        title: 'Quarterly Business Reviews',
        desc: 'Strategic planning sessions to adjust approach and maximize wins',
      },
    ],
    upgradeNote: null,
  }
];

const addons = [
  { id: 'stateLocal', name: 'State/Local Certifications', price: 500, desc: 'Expand beyond federal to state and local markets' },
  { id: 'gsaSchedule', name: 'GSA Schedule Submission', price: 5500, desc: 'Full GSA MAS application and support' },
  { id: 'fullRfpReview', name: 'Full RFP Review', price: 999, desc: 'Comprehensive proposal analysis and recommendations' },
];

const comparisonFeatures = [
  { name: 'SAM.gov + DSBS + FEMA', fedstart: true, growth: true, prime: true },
  { name: 'SBA Certifications (14-Day Submission)', fedstart: true, growth: true, prime: true },
  { name: 'Professional Capabilities Statement', fedstart: true, growth: true, prime: true },
  { name: 'Marketing Contacts', fedstart: '1,000', growth: '2,000', prime: 'Quarterly Campaigns' },
  { name: 'Capture Support', fedstart: 'Monthly', growth: 'Monthly', prime: 'Dedicated Manager' },
  { name: 'RFP Support', fedstart: '1 Review', growth: 'Gold Team Reviews', prime: '5 Full Proposals' },
  { name: 'GovCon Portal (2,200 Bid Sources)', fedstart: false, growth: true, prime: true },
  { name: 'Marketing Campaigns', fedstart: false, growth: '2 Campaigns', prime: 'Quarterly' },
  { name: 'Daily Bid Alerts', fedstart: false, growth: true, prime: true },
  { name: 'Compliance Updates', fedstart: '3 Months', growth: '6 Months', prime: 'All Year' },
  { name: 'Standing Meetings', fedstart: true, growth: true, prime: true },
];

const stats = [
  { value: '200+', label: 'Contractors Launched', icon: Rocket },
  { value: '87%', label: 'Client Win Rate', icon: Target },
  { value: '$109M+', label: 'Awards Facilitated', icon: TrendingUp },
  { value: '14 Days', label: 'Cert Turnaround', icon: Clock },
];

type ProgramId = 'fedstart' | 'growth' | 'prime';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramId | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [pricingType, setPricingType] = useState<'standard' | 'spot'>('standard');
  const [paymentTerms, setPaymentTerms] = useState<'full' | '50-50'>('50-50');
  const [clientInfo, setClientInfo] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
  });

  const comparisonRef = useRef<HTMLDivElement>(null);

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCheckout = (programId: ProgramId) => {
    setSelectedProgram(programId);
    setShowCheckout(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    document.body.style.overflow = '';
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const getTotal = () => {
    if (!selectedProgram) return 0;
    const program = programs.find(p => p.id === selectedProgram)!;
    const base = pricingType === 'spot' ? program.spotPrice : program.price;
    const addonTotal = selectedAddons.reduce((sum, id) => {
      const addon = addons.find(a => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);
    return base + addonTotal;
  };

  const getSavings = () => {
    if (!selectedProgram || pricingType !== 'spot') return 0;
    const program = programs.find(p => p.id === selectedProgram)!;
    return program.price - program.spotPrice;
  };

  return (
    <>
      <Helmet>
        <title>Federal Contractor Programs — GovCon Inc.</title>
        <meta name="description" content="Launch, grow, and dominate federal contracting with our proven programs. See exactly what you get with FedStart, Growth, and Prime packages." />
      </Helmet>

      {/* HERO - Clean, focused on value prop */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm text-white/80 mb-6">
              <Briefcase size={16} className="text-amber-400" />
              Federal Contractor Programs
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Win Federal Contracts
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Three programs. Clear deliverables. Proven results. See exactly what you get at each level.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={scrollToComparison}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition"
              >
                Compare Programs
                <ArrowRight size={18} />
              </button>
              <LinkButton 
                href={LINKS.booking} 
                target="_blank"
                className="px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10"
              >
                Free Consultation
              </LinkButton>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <Icon size={20} className="text-amber-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION - The Main Focus */}
      {programs.map((program, programIndex) => {
        const Icon = program.icon;
        const isEven = programIndex % 2 === 0;
        
        return (
          <section 
            key={program.id}
            className={cn(
              "py-20 lg:py-28",
              isEven ? "bg-white" : "bg-slate-50"
            )}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Program Header */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br text-white", program.gradient)}>
                      <Icon size={28} />
                    </div>
                    {program.popular && (
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wide rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                    {program.name} <span className="text-slate-400 font-normal">— {program.tagline}</span>
                  </h2>
                  <p className="mt-2 text-lg text-slate-600">{program.duration} • {program.idealFor}</p>
                </div>
                <div className="text-left lg:text-right">
                  <div className="text-4xl font-bold text-slate-900">${program.price.toLocaleString()}</div>
                  <button
                    onClick={() => openCheckout(program.id as ProgramId)}
                    className={cn(
                      "mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition bg-gradient-to-r",
                      program.gradient,
                      "hover:opacity-90"
                    )}
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Deliverables Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.deliverables.map((deliverable, i) => {
                  const DeliverableIcon = deliverable.icon;
                  return (
                    <div 
                      key={i}
                      className={cn(
                        "p-6 rounded-2xl border-2 transition-all hover:shadow-lg",
                        program.bgLight,
                        program.borderColor
                      )}
                    >
                      <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm", program.textColor)}>
                        <DeliverableIcon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{deliverable.title}</h3>
                      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{deliverable.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Upgrade Note */}
              {program.upgradeNote && (
                <div className="mt-8 p-4 bg-slate-100 rounded-xl flex items-center gap-3">
                  <TrendingUp size={20} className="text-slate-500" />
                  <span className="text-slate-600">{program.upgradeNote}</span>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* COMPARISON TABLE */}
      <section ref={comparisonRef} className="py-20 lg:py-28 bg-slate-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Side-by-Side Comparison</h2>
            <p className="mt-3 text-slate-400">See exactly what's included at each level</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left text-slate-400 font-medium">What You Get</th>
                  {programs.map((program) => (
                    <th key={program.id} className="p-4 text-center">
                      <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold", program.bgLight, program.textColor)}>
                        {program.name}
                      </div>
                      <div className="mt-2 text-white font-bold text-xl">${program.price.toLocaleString()}</div>
                      <div className="text-slate-500 text-sm">{program.duration}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={feature.name} className={idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-transparent'}>
                    <td className="p-4 text-slate-300 font-medium">{feature.name}</td>
                    {['fedstart', 'growth', 'prime'].map((programId) => {
                      const value = feature[programId as keyof typeof feature];
                      return (
                        <td key={programId} className="p-4 text-center">
                          {value === true ? (
                            <Check size={20} className="mx-auto text-emerald-400" />
                          ) : value === false ? (
                            <span className="text-slate-600">—</span>
                          ) : (
                            <span className="text-white">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => openCheckout(program.id as ProgramId)}
                className={cn(
                  "px-6 py-3 rounded-lg font-semibold text-white transition bg-gradient-to-r hover:opacity-90",
                  program.gradient
                )}
              >
                Start {program.name} — ${program.price.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Add to Any Program</h2>
            <p className="mt-2 text-slate-600">Expand your capabilities with these add-on services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div 
                key={addon.id}
                className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-slate-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{addon.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{addon.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-slate-900">+${addon.price.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-slate-300">
            Book a free consultation or give us a call. We'll help you choose the right program.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton 
              href={LINKS.booking} 
              target="_blank"
              className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-semibold"
            >
              Book Free Consultation
            </LinkButton>
            <a 
              href="tel:8136650308"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold transition"
            >
              <Phone size={18} />
              (813) 665-0308
            </a>
          </div>
        </div>
      </section>

      {/* CHECKOUT MODAL */}
      {showCheckout && selectedProgram && (() => {
        const program = programs.find(p => p.id === selectedProgram)!;
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeCheckout} />
            
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
              {/* Header */}
              <div className={cn("p-6 text-white bg-gradient-to-r", program.gradient)}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{program.name} Program</h3>
                    <p className="text-white/80">{program.duration} Engagement</p>
                  </div>
                  <button 
                    onClick={closeCheckout}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Client Info */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Your Information</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={clientInfo.companyName}
                      onChange={(e) => setClientInfo({ ...clientInfo, companyName: e.target.value })}
                      className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Contact Name"
                      value={clientInfo.contactName}
                      onChange={(e) => setClientInfo({ ...clientInfo, contactName: e.target.value })}
                      className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400"
                    />
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Add-on Services <span className="font-normal text-slate-500">(optional)</span></h4>
                  <div className="space-y-2">
                    {addons.map((addon) => (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={cn(
                          "w-full p-4 rounded-lg border text-left transition-all flex items-center justify-between",
                          selectedAddons.includes(addon.id)
                            ? "border-slate-900 bg-slate-50"
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div>
                          <div className="font-medium text-slate-900">{addon.name}</div>
                          <div className="text-sm text-slate-500">{addon.desc}</div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-bold text-slate-900">+${addon.price.toLocaleString()}</span>
                          <div className={cn(
                            "w-5 h-5 rounded border-2 flex items-center justify-center transition",
                            selectedAddons.includes(addon.id)
                              ? "border-slate-900 bg-slate-900"
                              : "border-slate-300"
                          )}>
                            {selectedAddons.includes(addon.id) && <Check size={12} className="text-white" />}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Options */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Payment</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-slate-600 mb-1">Payment Terms</label>
                      <select
                        value={paymentTerms}
                        onChange={(e) => setPaymentTerms(e.target.value as 'full' | '50-50')}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 bg-white"
                      >
                        <option value="50-50">50% Now / 50% in 2 Months</option>
                        <option value="full">Full Payment Upfront</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600 mb-1">Pricing</label>
                      <select
                        value={pricingType}
                        onChange={(e) => setPricingType(e.target.value as 'standard' | 'spot')}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 bg-white"
                      >
                        <option value="standard">Standard — ${program.price.toLocaleString()}</option>
                        <option value="spot">Pay in Full — ${program.spotPrice.toLocaleString()} (Save ${(program.price - program.spotPrice).toLocaleString()})</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="p-5 bg-slate-900 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400">{program.name} Program</span>
                    <span>${(pricingType === 'spot' ? program.spotPrice : program.price).toLocaleString()}</span>
                  </div>
                  {selectedAddons.map((addonId) => {
                    const addon = addons.find(a => a.id === addonId)!;
                    return (
                      <div key={addonId} className="flex items-center justify-between mb-3">
                        <span className="text-slate-400">{addon.name}</span>
                        <span>${addon.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                  {pricingType === 'spot' && getSavings() > 0 && (
                    <div className="flex items-center justify-between mb-3 text-emerald-400">
                      <span>Pay-in-Full Savings</span>
                      <span>-${getSavings().toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl">${getTotal().toLocaleString()}</span>
                  </div>
                  {paymentTerms === '50-50' && (
                    <div className="mt-2 text-sm text-slate-400">
                      ${Math.round(getTotal() / 2).toLocaleString()} due now • ${getTotal() - Math.round(getTotal() / 2).toLocaleString()} due in 60 days
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  onClick={() => {
                    if (!clientInfo.email) {
                      alert('Please enter your email address.');
                      return;
                    }
                    alert(`Agreement will be sent to ${clientInfo.email} for review and signature.`);
                    closeCheckout();
                  }}
                  className={cn(
                    "w-full py-4 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 bg-gradient-to-r hover:opacity-90",
                    program.gradient
                  )}
                >
                  Generate Agreement
                  <Send size={18} />
                </button>

                <p className="text-center text-sm text-slate-500">
                  You'll receive a professional agreement to review before any payment is due.
                </p>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}