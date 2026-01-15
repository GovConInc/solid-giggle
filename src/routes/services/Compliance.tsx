import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Building2,
  MapPin,
  Award,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  TrendingUp,
  Lock,
  Globe,
  Zap,
  Target,
  Clock
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

const registrations = [
  {
    name: "SAM.gov",
    icon: Building2,
    description: "System for Award Management — The gateway to all federal contracting",
    details: [
      "Entity validation and CAGE code assignment",
      "NAICS code optimization for maximum visibility",
      "Core data maintenance and annual renewals",
      "Exclusion monitoring and representation updates",
      "Electronic Funds Transfer (EFT) banking setup"
    ],
    renewal: "Annual",
    critical: true
  },
  {
    name: "SBA DSBS",
    icon: Award,
    description: "Dynamic Small Business Search — Your digital storefront for agencies",
    details: [
      "Capability narrative development",
      "Keywords and NAICS optimization",
      "Past performance highlighting",
      "Certification badge display",
      "Agency search visibility enhancement"
    ],
    renewal: "Ongoing",
    critical: true
  },
  {
    name: "FEMA Vendor Portal",
    icon: Shield,
    description: "Access to disaster response and emergency management contracts",
    details: [
      "Vendor profile creation and verification",
      "Capability statement upload",
      "Geographic service area definition",
      "Emergency response readiness documentation",
      "Pre-positioned contract eligibility"
    ],
    renewal: "As needed",
    critical: false
  },
  {
    name: "State Portals",
    icon: MapPin,
    description: "50-state vendor registration management",
    details: [
      "State-specific registration requirements",
      "Cooperative purchasing agreement enrollment",
      "State certification applications",
      "Vendor preference program enrollment",
      "Multi-state expansion support"
    ],
    renewal: "Varies by state",
    critical: false
  }
];

const certifications = [
  { 
    code: "8(a)", 
    name: "8(a) Business Development", 
    agency: "SBA",
    benefit: "Sole-source contracts up to $4M (goods) / $7M (services)",
    timeline: "90-180 days",
    requirements: ["Socially & economically disadvantaged", "51% owned by qualifying individuals", "Under $16.5M average revenue"]
  },
  { 
    code: "SDVOSB", 
    name: "Service-Disabled Veteran-Owned", 
    agency: "SBA/VA",
    benefit: "3% federal contracting goal + sole-source authority",
    timeline: "60-90 days",
    requirements: ["51% owned by service-disabled veteran", "Veteran must control daily operations", "VA verification required"]
  },
  { 
    code: "WOSB", 
    name: "Women-Owned Small Business", 
    agency: "SBA",
    benefit: "5% federal contracting goal + set-aside eligibility",
    timeline: "30-60 days",
    requirements: ["51% owned by women", "Women control management", "Self-certification or third-party"]
  },
  { 
    code: "HUBZone", 
    name: "Historically Underutilized Business Zone", 
    agency: "SBA",
    benefit: "10% price evaluation preference + 3% goal",
    timeline: "60-90 days",
    requirements: ["Principal office in HUBZone", "35% of employees live in HUBZone", "Small business size standards"]
  },
  { 
    code: "MBE/DBE", 
    name: "Minority/Disadvantaged Business", 
    agency: "State/Local",
    benefit: "State contract set-asides and preferences",
    timeline: "30-90 days",
    requirements: ["Varies by state", "Typically 51% minority ownership", "Personal net worth limits apply"]
  }
];

const managedItems = [
  { name: "SAM.gov", category: "Federal" },
  { name: "SBA DSBS", category: "Federal" },
  { name: "FEMA Portal", category: "Federal" },
  { name: "State Portals", category: "State" },
  { name: "WOSB/EDWOSB", category: "Certification" },
  { name: "SDVOSB/VOSB", category: "Certification" },
  { name: "8(a) Reviews", category: "Certification" },
  { name: "HUBZone", category: "Certification" },
  { name: "MBE/DBE", category: "State" },
  { name: "NAICS Updates", category: "Federal" },
  { name: "Banking/EFT", category: "Federal" },
  { name: "Representations", category: "Federal" }
];

const faqs = [
  {
    q: "How do I know which certifications I qualify for?",
    a: "We offer a free eligibility assessment. We'll review your ownership structure, financials, and location to determine which certifications you can pursue."
  },
  {
    q: "What happens if my SAM registration expires?",
    a: "You become ineligible to receive federal contracts or payments. We monitor all expiration dates and handle renewals automatically before they lapse."
  },
  {
    q: "Can you help with certification annual reviews?",
    a: "Yes. Many certifications require annual updates and documentation. We track these deadlines and prepare all necessary submissions."
  },
  {
    q: "How long does it take to get certified?",
    a: "It varies by certification. WOSB can be 30-60 days, while 8(a) typically takes 90-180 days. We provide realistic timelines upfront."
  },
  {
    q: "What if my certification application is denied?",
    a: "We analyze the denial reason, help you address any deficiencies, and resubmit. Many denials are due to documentation issues we can fix."
  }
];

export default function ServicesCertifications() {
  const [activeRegistration, setActiveRegistration] = useState(0);
  const [activeCertification, setActiveCertification] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? managedItems 
    : managedItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Certifications & Compliance — GovCon Inc.</title>
        <meta name="description" content="SBA certifications, SAM.gov registration, and compliance management. Get certified and stay compliant with our expert support." />
      </Helmet>

      {/* Hero */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gov-blue/5 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gov-blue/10 px-4 py-1.5 text-sm font-semibold text-gov-blue mb-6">
                <Shield size={16} />
                Foundation Services
              </div>
              
              <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
                Certifications & Compliance
              </h1>
              
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Get the certifications that unlock set-aside contracts. Stay compliant so you never 
                miss an opportunity. We handle the paperwork so you can focus on winning.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="font-display text-3xl font-bold text-gov-crimson">2,500+</div>
                  <div className="text-sm text-slate-700 mt-1">Registrations Managed</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="font-display text-3xl font-bold text-gov-crimson">$50M+</div>
                  <div className="text-sm text-slate-700 mt-1">Contracts Captured</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                  Get Compliant Today
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <LinkButton href="#certifications" variant="secondary" size="lg">
                  View Certifications
                </LinkButton>
              </div>
            </div>
            
            {/* The Compliance Problem Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gov-blue/10 via-gov-crimson/5 to-transparent rounded-3xl" />
              <Card className="relative p-8 bg-white" hover={false}>
                <h3 className="font-bold text-lg text-gov-navy flex items-center gap-2">
                  <Lock size={20} className="text-gov-green" />
                  The Compliance Problem
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <AlertTriangle size={20} className="text-gov-crimson shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gov-navy">Expired SAM = No Contracts</div>
                      <p className="text-sm text-slate-600">Your registration expires annually. Miss it, and you're invisible to every federal buyer.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <AlertTriangle size={20} className="text-gov-crimson shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gov-navy">Wrong NAICS = Wrong Opportunities</div>
                      <p className="text-sm text-slate-600">Agencies search by NAICS code. Wrong codes mean you never appear in their results.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <AlertTriangle size={20} className="text-gov-crimson shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gov-navy">Missing Certs = Missed Set-Asides</div>
                      <p className="text-sm text-slate-600">23% of federal contracts are set aside for small businesses. Are you eligible?</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-gov-green font-semibold">
                    <CheckCircle size={20} />
                    We handle all of this. You focus on winning.
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Management Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Registration Management</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy sm:text-4xl">
              You Pay Us. We Handle the Paperwork.
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We identify all applicable registrations for your business—Federal, State, and Local—and keep them current. 
              Address changes, certification renewals, profile updates. We fix it before you know it's an issue.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Registration Selector */}
            <div className="lg:col-span-2 space-y-3">
              {registrations.map((reg, idx) => (
                <button
                  key={reg.name}
                  onClick={() => setActiveRegistration(idx)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-300",
                    activeRegistration === idx 
                      ? "border-gov-blue bg-white shadow-lg" 
                      : "border-transparent bg-white/50 hover:bg-white hover:border-slate-200"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                      activeRegistration === idx ? "bg-gov-blue text-white" : "bg-slate-100 text-slate-600"
                    )}>
                      <reg.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gov-navy">{reg.name}</span>
                        {reg.critical && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gov-crimson/10 text-gov-crimson">
                            Critical
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 mt-0.5">{reg.renewal} renewal</p>
                    </div>
                    <ChevronRight size={20} className={cn(
                      "text-slate-400 transition-transform",
                      activeRegistration === idx && "rotate-90 text-gov-blue"
                    )} />
                  </div>
                </button>
              ))}
            </div>

            {/* Registration Details */}
            <div className="lg:col-span-3">
              <Card className="p-8 h-full bg-white" hover={false}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gov-blue text-white">
                    {(() => {
                      const Icon = registrations[activeRegistration].icon;
                      return <Icon size={28} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gov-navy">
                      {registrations[activeRegistration].name}
                    </h3>
                    <p className="text-slate-600">{registrations[activeRegistration].description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gov-navy text-sm uppercase tracking-wider">What We Manage</h4>
                  {registrations[activeRegistration].details.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg animate-fade-in-up"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle size={18} className="text-gov-green shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-600">Registration Management</div>
                      <div className="mt-1">
                        <span className="text-sm text-slate-500">Starting at </span>
                        <span className="font-display text-2xl font-bold text-gov-navy">$250</span>
                        <span className="text-slate-500">/month</span>
                      </div>
                    </div>
                    <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer">
                      Get Started
                    </LinkButton>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* What We Manage Grid */}
          <div className="mt-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-gov-navy">Filter:</span>
              {["all", "Federal", "State", "Certification"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    activeCategory === cat 
                      ? "bg-gov-blue text-white" 
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  )}
                >
                  {cat === "all" ? "All Items" : cat}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredItems.map((item) => (
                <div 
                  key={item.name} 
                  className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 hover:border-gov-blue/30 hover:shadow-md transition-all"
                >
                  <div className={cn(
                    "h-2 w-2 rounded-full",
                    item.category === "Federal" && "bg-gov-blue",
                    item.category === "State" && "bg-gov-gold",
                    item.category === "Certification" && "bg-gov-green"
                  )} />
                  <span className="text-sm text-slate-700 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-white py-20 scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-8">
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">SBA Certifications</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Unlock Set-Aside Contracts
              </h2>
              <p className="mt-4 text-slate-600">
                The federal government has a goal: 23% of all contracts go to small businesses. 
                But to access these set-aside opportunities, you need the right certifications. 
                We handle the application, documentation, and annual reviews.
              </p>
              
              {/* Why Certifications Matter Card */}
              <div className="mt-8 p-6 bg-gov-navy rounded-2xl">
                <h3 className="font-bold text-lg text-white">Why Certifications Matter</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Zap size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Sole-Source Authority</div>
                      <p className="text-sm text-slate-300">Win contracts without competition</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Target size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Set-Aside Eligibility</div>
                      <p className="text-sm text-slate-300">Less competition, higher win rates</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <TrendingUp size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Price Preferences</div>
                      <p className="text-sm text-slate-300">Up to 10% evaluation advantage</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-sm text-slate-300">Certification Support</div>
                  <div className="mt-1">
                    <span className="text-sm text-slate-400">Starting at </span>
                    <span className="font-display text-2xl font-bold text-white">$500</span>
                    <span className="text-slate-400"> per application</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Certification List */}
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={cert.code}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setActiveCertification(activeCertification === idx ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-crimson/10 text-gov-crimson font-display font-bold text-sm">
                        {cert.code}
                      </div>
                      <div>
                        <div className="font-semibold text-gov-navy">{cert.name}</div>
                        <div className="text-sm text-slate-500">{cert.agency} Administered</div>
                      </div>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={cn(
                        "text-slate-400 transition-transform duration-300",
                        activeCertification === idx && "rotate-180"
                      )} 
                    />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeCertification === idx ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="p-5 pt-0 space-y-4">
                      <div className="p-4 bg-gov-green/5 rounded-lg border border-gov-green/20">
                        <div className="text-sm font-semibold text-gov-green">Key Benefit</div>
                        <p className="text-slate-700 mt-1">{cert.benefit}</p>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-gov-navy mb-2">Basic Requirements</div>
                        <ul className="space-y-1">
                          {cert.requirements.map((req, rIdx) => (
                            <li key={rIdx} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="h-1.5 w-1.5 rounded-full bg-gov-blue" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm pt-2">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Clock size={16} />
                          Typical Timeline: {cert.timeline}
                        </div>
                        <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="sm">
                          Apply Now
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Free Assessment Card */}
              <Card className="p-6 bg-slate-50 border-dashed border-2 border-slate-300" hover={false}>
                <div className="flex items-center gap-4">
                  <Sparkles size={24} className="text-gov-gold" />
                  <div>
                    <div className="font-semibold text-gov-navy">Not sure which certifications you qualify for?</div>
                    <p className="text-sm text-slate-600">We provide a free eligibility assessment with every consultation.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center bg-white" hover>
              <div className="font-display text-4xl font-bold text-gov-crimson">98%</div>
              <div className="mt-2 text-slate-700 font-medium">Certification Approval Rate</div>
            </Card>
            <Card className="p-6 text-center bg-white" hover>
              <div className="font-display text-4xl font-bold text-gov-crimson">0</div>
              <div className="mt-2 text-slate-700 font-medium">Compliance Issues Under Management</div>
            </Card>
            <Card className="p-6 text-center bg-white" hover>
              <div className="font-display text-4xl font-bold text-gov-crimson">3x</div>
              <div className="mt-2 text-slate-700 font-medium">More Qualified Opportunities</div>
            </Card>
            <Card className="p-6 text-center bg-white" hover>
              <div className="font-display text-4xl font-bold text-gov-crimson">15+</div>
              <div className="mt-2 text-slate-700 font-medium">Years of Experience</div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">FAQ</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
                Common Questions
              </h2>
              <p className="mt-4 text-slate-600">
                Have a question that's not answered here? Book a call and we'll discuss 
                your specific situation.
              </p>
              
              <Card className="mt-8 p-6 bg-gov-navy" hover={false}>
                <h3 className="font-semibold text-lg text-white">Need Help Getting Started?</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Book a free 30-minute consultation. We'll assess your current registrations 
                  and certification eligibility at no cost.
                </p>
                <LinkButton 
                  href={LINKS.booking} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-4 bg-white text-gov-navy hover:bg-slate-100"
                >
                  Book Free Consultation
                </LinkButton>
              </Card>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-gov-navy pr-4">{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      className={cn(
                        "text-slate-400 transition-transform duration-300 shrink-0",
                        activeFaq === idx && "rotate-180"
                      )} 
                    />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeFaq === idx ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="p-5 pt-0 text-slate-600">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Ready to Get Certified?" kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's assess your eligibility
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll review your registrations, identify certification opportunities, and build 
                a compliance strategy tailored to your goals. The consultation is free.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone size={16} />
                  (813) 665-0308
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail size={16} />
                  info@govcon.info
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar size={16} />
                  30-minute strategy call
                </div>
              </div>
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