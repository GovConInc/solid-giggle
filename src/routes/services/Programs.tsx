import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  CheckCircle, 
  Rocket, 
  Crown, 
  Shield,
  ChevronDown,
  ChevronRight,
  Zap,
  Users,
  FileText,
  Target,
  Clock,
  Phone,
  Mail,
  Calendar,
  Star,
  TrendingUp,
  MessageSquare,
  Award,
  Briefcase,
  BarChart3,
  BookOpen,
  Headphones,
  RefreshCw,
  X,
  Check
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton, Button } from "../../components/Button";
import { LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

const packages = [
  {
    name: "FedStart",
    price: "$3,500",
    originalPrice: "$4,500",
    period: "one-time",
    icon: Shield,
    tagline: "The Compliance Foundation",
    description: "Everything you need to get properly registered and positioned for federal contracting. Perfect for companies just entering the government market.",
    highlight: false,
    color: "gov-blue",
    features: [
      { name: "SAM.gov Registration & Optimization", included: true, detail: "Complete registration with NAICS code optimization" },
      { name: "SBA DSBS Profile Setup", included: true, detail: "Searchable profile with capability narrative" },
      { name: "FEMA Vendor Portal", included: true, detail: "Access to emergency and disaster contracts" },
      { name: "Professional Capabilities Statement", included: true, detail: "Agency-ready marketing document" },
      { name: "Bid Portal Access", included: true, detail: "3 months of curated opportunity alerts" },
      { name: "Monthly Strategy Call", included: true, detail: "1 hour per month with your advisor" },
      { name: "SBA Certification Support", included: true, detail: "Free eligibility assessment" },
      { name: "Compliance Monitoring", included: true, detail: "Renewal reminders and alerts" },
      { name: "Dedicated Capture Manager", included: false },
      { name: "Proposal Writing", included: false },
      { name: "GSA Schedule Support", included: false },
    ],
    timeline: "2-4 weeks",
    ideal: ["New to government contracting", "Need proper registrations", "Want to test the market"]
  },
  {
    name: "Growth",
    price: "$7,500",
    originalPrice: "$9,500",
    period: "one-time",
    icon: Rocket,
    tagline: "Active Opportunity Pursuit",
    description: "Move from passive registration to active business development. We find opportunities, qualify them, and help you submit winning proposals.",
    highlight: true,
    color: "gov-crimson",
    features: [
      { name: "Everything in FedStart", included: true, detail: "Full compliance foundation" },
      { name: "Bi-Weekly Strategy Calls", included: true, detail: "2 hours per month of dedicated time" },
      { name: "Hand-Selected Bid Pipeline", included: true, detail: "Qualified opportunities with analysis" },
      { name: "2 Email Marketing Campaigns", included: true, detail: "Agency outreach with follow-up" },
      { name: "1 Full RFP Proposal", included: true, detail: "Complete proposal development" },
      { name: "Priority Bid Support", included: true, detail: "Fast-track analysis and recommendations" },
      { name: "Teaming Partner Identification", included: true, detail: "Prime/sub matching for larger bids" },
      { name: "CO Outreach Assistance", included: true, detail: "Contracting officer introductions" },
      { name: "Additional Proposals Available", included: true, detail: "Discounted rate for program members" },
      { name: "GSA Schedule Support", included: false },
      { name: "Unlimited Bid Reviews", included: false },
    ],
    timeline: "6-12 months",
    ideal: ["Ready to win first contract", "Need proposal support", "Want active pipeline development"]
  },
  {
    name: "Prime",
    price: "$15,500",
    originalPrice: "$19,500",
    period: "one-time",
    icon: Crown,
    tagline: "Your Outsourced BD Department",
    description: "Complete government contracting support. We become an extension of your team, handling everything from compliance to capture to proposal writing.",
    highlight: false,
    color: "gov-gold",
    features: [
      { name: "Everything in Growth", included: true, detail: "Full growth package included" },
      { name: "Weekly Strategy Calls", included: true, detail: "4+ hours per month of dedicated time" },
      { name: "GSA MAS Submission OR Maintenance", included: true, detail: "New schedule or ongoing management" },
      { name: "3 Full RFP Proposal Walkthroughs", included: true, detail: "Complete proposal development" },
      { name: "Unlimited Bid Reviews", included: true, detail: "Review any opportunity with us" },
      { name: "Priority Hotline Access", included: true, detail: "Same-day response guarantee" },
      { name: "Quarterly Business Reviews", included: true, detail: "Performance analysis and strategy adjustment" },
      { name: "Process Documentation", included: true, detail: "SOPs for your BD operations" },
      { name: "Subcontracting Opportunity Pipeline", included: true, detail: "Access to prime contractor network" },
      { name: "Executive Coaching", included: true, detail: "Leadership development for GovCon" },
      { name: "All Certifications Managed", included: true, detail: "SDVOSB, WOSB, 8(a), HUBZone support" },
    ],
    timeline: "12-18 months",
    ideal: ["Serious about scaling", "Need comprehensive support", "Want GSA Schedule assistance"]
  },
];

const comparisonFeatures = [
  { name: "SAM.gov Registration", fedstart: true, growth: true, prime: true },
  { name: "DSBS & FEMA Portals", fedstart: true, growth: true, prime: true },
  { name: "Capabilities Statement", fedstart: true, growth: true, prime: true },
  { name: "Bid Portal Access", fedstart: "3 months", growth: "6 months", prime: "12 months" },
  { name: "Strategy Calls", fedstart: "Monthly", growth: "Bi-Weekly", prime: "Weekly" },
  { name: "Certification Support", fedstart: "Assessment", growth: "Application", prime: "Full Management" },
  { name: "Bid Pipeline", fedstart: false, growth: true, prime: true },
  { name: "Proposal Writing", fedstart: false, growth: "1 Full RFP", prime: "3 Full RFPs" },
  { name: "Email Campaigns", fedstart: false, growth: "2 Campaigns", prime: "Unlimited" },
  { name: "GSA Schedule", fedstart: false, growth: false, prime: "Included" },
  { name: "Priority Support", fedstart: false, growth: true, prime: "Same-Day" },
  { name: "Bid Reviews", fedstart: false, growth: "Limited", prime: "Unlimited" },
];

const whatsIncluded = [
  { 
    title: "Dedicated Advisor", 
    desc: "Direct access to a government contracting expert who knows your business",
    icon: Users
  },
  { 
    title: "Strategy Sessions", 
    desc: "Regular calls to review progress, adjust strategy, and plan next steps",
    icon: Target
  },
  { 
    title: "Document Support", 
    desc: "Professional templates, reviews, and formatting for all deliverables",
    icon: FileText
  },
  { 
    title: "Priority Response", 
    desc: "24-48 hour turnaround on questions, reviews, and support requests",
    icon: Zap
  },
  { 
    title: "Resource Library", 
    desc: "Access to templates, guides, and training materials",
    icon: BookOpen
  },
  { 
    title: "Partner Network", 
    desc: "Introductions to teaming partners, mentors, and primes",
    icon: Briefcase
  }
];

const successStories = [
  {
    company: "Security Services Firm",
    result: "$2.4M contract in 8 months",
    program: "Growth",
    quote: "They found an opportunity we never would have seen and helped us win it."
  },
  {
    company: "IT Consulting Company",
    result: "GSA Schedule + 3 task orders",
    program: "Prime",
    quote: "Having GovCon handle our GSA let us focus on delivery. We've grown 300%."
  },
  {
    company: "Facilities Management",
    result: "First contract in 6 months",
    program: "FedStart",
    quote: "We went from zero registrations to our first federal contract in under a year."
  }
];

const faqs = [
  { 
    q: "Can I upgrade my program later?", 
    a: "Yes. You can upgrade at any time and we'll credit 100% of what you've already paid toward the higher tier. Many clients start with FedStart and upgrade to Growth once they're ready to actively pursue contracts." 
  },
  { 
    q: "Is there a payment plan available?", 
    a: "We offer 2-3 month payment plans for Growth and Prime packages. FedStart can be split into 2 payments. Contact us to discuss payment options that work for your budget." 
  },
  { 
    q: "What if I need more proposals than included?", 
    a: "Additional proposals can be purchased at a discounted rate for program members. Growth members get 25% off, Prime members get 40% off our standard proposal rates." 
  },
  { 
    q: "How long do the programs last?", 
    a: "FedStart is typically completed in 2-4 weeks. Growth is designed for 6-12 months of active pursuit. Prime is a 12-18 month engagement designed for comprehensive support and scaling." 
  },
  { 
    q: "What happens after my program ends?", 
    a: "You keep everything we've built together—registrations, documents, strategies, relationships. Many clients transition to our ongoing Compliance & Capture retainer for continued support, or re-engage when they have specific needs." 
  },
  { 
    q: "Do you guarantee results?", 
    a: "We guarantee our work—every registration, every document, every submission will be done correctly. While we can't guarantee contract awards (that depends on your capabilities and the market), 87% of our Growth and Prime clients win within 12 months." 
  }
];

export default function ServicesPrograms() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"features" | "ideal">("features");

  return (
    <>
      <Helmet>
        <title>GovCon Programs — GovCon Inc.</title>
        <meta name="description" content="Comprehensive government contracting programs designed for every stage of your journey. From compliance foundation to full business development support." />
      </Helmet>

      {/* Hero */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gov-blue/5 to-transparent rounded-full" />
        
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-gov-crimson/10 px-4 py-1.5 text-sm font-semibold text-gov-crimson mb-6">
              <Award size={16} />
              Contractor Programs
            </div>
            
            <h1 className="font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl lg:text-6xl">
              Your Roadmap to <span className="text-gov-crimson">Winning</span> Government Contracts
            </h1>
            
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Comprehensive packages designed for every stage of your government contracting journey. 
              Choose the level of support that matches your goals.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LinkButton href="#packages" size="lg">
                View Programs
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setShowComparison(true)}
              >
                Compare All Programs
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-5 text-center" hover>
              <div className="font-display text-3xl font-bold text-gov-crimson">87%</div>
              <div className="text-sm text-slate-600 mt-1">Win within 12 months</div>
            </Card>
            <Card className="p-5 text-center" hover>
              <div className="font-display text-3xl font-bold text-gov-crimson">$50M+</div>
              <div className="text-sm text-slate-600 mt-1">Contracts won for clients</div>
            </Card>
            <Card className="p-5 text-center" hover>
              <div className="font-display text-3xl font-bold text-gov-crimson">200+</div>
              <div className="text-sm text-slate-600 mt-1">Program graduates</div>
            </Card>
            <Card className="p-5 text-center" hover>
              <div className="font-display text-3xl font-bold text-gov-crimson">15+</div>
              <div className="text-sm text-slate-600 mt-1">Years of experience</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-slate-50 py-20 scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Choose Your Program</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Three Paths to Government Success
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, idx) => (
              <div 
                key={pkg.name} 
                className={cn(
                  "relative",
                  pkg.highlight && "lg:-mt-4 lg:mb-4"
                )}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="rounded-full bg-gov-crimson px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-lg flex items-center gap-1">
                      <Star size={12} className="fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  className={cn(
                    "h-full flex flex-col overflow-hidden",
                    pkg.highlight && "border-gov-crimson ring-2 ring-gov-crimson/20"
                  )}
                  hover={pkg.highlight}
                >
                  {/* Header */}
                  <div className={cn(
                    "p-6 text-white",
                    pkg.color === "gov-blue" && "bg-gov-blue",
                    pkg.color === "gov-crimson" && "bg-gov-crimson",
                    pkg.color === "gov-gold" && "bg-gov-navy"
                  )}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                        <pkg.icon size={28} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                        <p className="text-sm text-white/80">{pkg.tagline}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      {pkg.originalPrice && (
                        <span className="text-sm text-white/60 line-through mr-2">{pkg.originalPrice}</span>
                      )}
                      <span className="font-display text-4xl font-bold">{pkg.price}</span>
                      <span className="text-white/80">/{pkg.period}</span>
                    </div>
                  </div>
                  
                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate-600 mb-6">{pkg.description}</p>
                    
                    {/* Tab Toggle */}
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => setActiveTab("features")}
                        className={cn(
                          "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all",
                          activeTab === "features" 
                            ? "bg-gov-navy text-white" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        )}
                      >
                        Features
                      </button>
                      <button
                        onClick={() => setActiveTab("ideal")}
                        className={cn(
                          "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all",
                          activeTab === "ideal" 
                            ? "bg-gov-navy text-white" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        )}
                      >
                        Ideal For
                      </button>
                    </div>
                    
                    {activeTab === "features" ? (
                      <ul className="space-y-2 flex-1">
                        {pkg.features.slice(0, 8).map((feature) => (
                          <li 
                            key={feature.name} 
                            className={cn(
                              "flex items-start gap-2 text-sm",
                              feature.included ? "text-slate-700" : "text-slate-400"
                            )}
                          >
                            {feature.included ? (
                              <CheckCircle className="h-5 w-5 shrink-0 text-gov-green" />
                            ) : (
                              <X className="h-5 w-5 shrink-0 text-slate-300" />
                            )}
                            <span>{feature.name}</span>
                          </li>
                        ))}
                        {pkg.features.length > 8 && (
                          <li className="text-sm text-gov-blue font-medium pt-2">
                            + {pkg.features.length - 8} more features
                          </li>
                        )}
                      </ul>
                    ) : (
                      <ul className="space-y-3 flex-1">
                        {pkg.ideal.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                            <Target className="h-5 w-5 shrink-0 text-gov-crimson" />
                            {item}
                          </li>
                        ))}
                        <li className="pt-4 flex items-center gap-2 text-sm text-slate-500">
                          <Clock size={16} />
                          Typical timeline: {pkg.timeline}
                        </li>
                      </ul>
                    )}

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <LinkButton 
                        href={LINKS.booking}
                        target="_blank"
                        rel="noreferrer"
                        variant={pkg.highlight ? "primary" : "secondary"}
                        className="w-full justify-center"
                      >
                        Get Started with {pkg.name}
                      </LinkButton>
                      
                      <button
                        onClick={() => setSelectedPackage(selectedPackage === idx ? null : idx)}
                        className="w-full mt-3 text-sm text-gov-blue hover:text-gov-navy font-medium flex items-center justify-center gap-1"
                      >
                        View full details
                        <ChevronDown size={16} className={cn(
                          "transition-transform",
                          selectedPackage === idx && "rotate-180"
                        )} />
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Package Details Modal */}
      {selectedPackage !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPackage(null)}>
          <Card 
            className="max-w-2xl w-full max-h-[80vh] overflow-auto p-0" 
            hover={false}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className={cn(
              "p-6 text-white sticky top-0",
              packages[selectedPackage].color === "gov-blue" && "bg-gov-blue",
              packages[selectedPackage].color === "gov-crimson" && "bg-gov-crimson",
              packages[selectedPackage].color === "gov-gold" && "bg-gov-navy"
            )}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = packages[selectedPackage].icon;
                    return <Icon size={28} />;
                  })()}
                  <div>
                    <h3 className="font-display text-2xl font-bold">{packages[selectedPackage].name}</h3>
                    <p className="text-white/80">{packages[selectedPackage].price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gov-navy mb-4">Complete Feature List</h4>
                <ul className="space-y-3">
                  {packages[selectedPackage].features.map((feature) => (
                    <li 
                      key={feature.name} 
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg",
                        feature.included ? "bg-gov-green/5" : "bg-slate-50"
                      )}
                    >
                      {feature.included ? (
                        <CheckCircle className="h-5 w-5 shrink-0 text-gov-green" />
                      ) : (
                        <X className="h-5 w-5 shrink-0 text-slate-300" />
                      )}
                      <div>
                        <span className={cn(
                          "font-medium",
                          feature.included ? "text-slate-700" : "text-slate-400"
                        )}>
                          {feature.name}
                        </span>
                        {feature.detail && feature.included && (
                          <p className="text-sm text-slate-500 mt-0.5">{feature.detail}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <LinkButton 
                  href={LINKS.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 justify-center"
                >
                  Get Started
                </LinkButton>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Comparison Modal */}
      {showComparison && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowComparison(false)}>
          <Card 
            className="max-w-4xl w-full max-h-[80vh] overflow-auto p-6" 
            hover={false}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-gov-navy">Compare All Programs</h3>
              <button 
                onClick={() => setShowComparison(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-2 font-semibold text-gov-navy">Feature</th>
                    <th className="text-center py-3 px-2 font-semibold text-gov-blue">FedStart</th>
                    <th className="text-center py-3 px-2 font-semibold text-gov-crimson">Growth</th>
                    <th className="text-center py-3 px-2 font-semibold text-gov-navy">Prime</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={feature.name} className={cn("border-b border-slate-100", idx % 2 === 0 && "bg-slate-50/50")}>
                      <td className="py-3 px-2 text-sm text-slate-700">{feature.name}</td>
                      <td className="py-3 px-2 text-center">
                        {typeof feature.fedstart === "boolean" ? (
                          feature.fedstart ? <Check className="mx-auto text-gov-green" size={18} /> : <X className="mx-auto text-slate-300" size={18} />
                        ) : (
                          <span className="text-sm text-slate-600">{feature.fedstart}</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {typeof feature.growth === "boolean" ? (
                          feature.growth ? <Check className="mx-auto text-gov-green" size={18} /> : <X className="mx-auto text-slate-300" size={18} />
                        ) : (
                          <span className="text-sm text-slate-600">{feature.growth}</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {typeof feature.prime === "boolean" ? (
                          feature.prime ? <Check className="mx-auto text-gov-green" size={18} /> : <X className="mx-auto text-slate-300" size={18} />
                        ) : (
                          <span className="text-sm text-slate-600">{feature.prime}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100">
                    <td className="py-4 px-2 font-semibold text-gov-navy">Investment</td>
                    <td className="py-4 px-2 text-center font-display font-bold text-gov-blue">$3,500</td>
                    <td className="py-4 px-2 text-center font-display font-bold text-gov-crimson">$7,500</td>
                    <td className="py-4 px-2 text-center font-display font-bold text-gov-navy">$15,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* What's Included */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Core Value</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              What's Included in Every Program
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Regardless of which program you choose, you get access to our full support infrastructure.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatsIncluded.map((item) => (
              <Card key={item.title} className="p-6 group" hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue group-hover:bg-gov-blue group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-4 font-semibold text-gov-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Results</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-gov-navy">
              Client Success Stories
            </h2>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {successStories.map((story) => (
              <Card key={story.company} className="p-6" hover>
                <div className="flex items-center gap-2 mb-4">
                  <span className={cn(
                    "text-xs font-semibold px-2 py-1 rounded-full",
                    story.program === "FedStart" && "bg-gov-blue/10 text-gov-blue",
                    story.program === "Growth" && "bg-gov-crimson/10 text-gov-crimson",
                    story.program === "Prime" && "bg-gov-navy/10 text-gov-navy"
                  )}>
                    {story.program}
                  </span>
                </div>
                <h3 className="font-semibold text-gov-navy">{story.company}</h3>
                <p className="mt-1 font-display text-2xl font-bold text-gov-crimson">{story.result}</p>
                <p className="mt-4 text-sm text-slate-600 italic">"{story.quote}"</p>
              </Card>
            ))}
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
              
              <Card className="mt-8 p-6 bg-gov-navy text-white" hover={false}>
                <h3 className="font-semibold text-lg">Not Sure Which Program?</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Book a free 30-minute consultation. We'll assess your current position, 
                  understand your goals, and recommend the right program for your situation.
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
      <Section title="Ready to Start Winning?" kicker="Let's Talk" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Book your free strategy consultation
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                We'll assess your current position, understand your goals, and recommend 
                the program that makes sense. No pressure, no obligation.
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
              Book Consultation
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
