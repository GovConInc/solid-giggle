import { Helmet } from "react-helmet-async";
import { 
  Zap, 
  Star, 
  Shield, 
  MapPin, 
  Phone, 
  Building2, 
  Users, 
  Award,
  CheckCircle2,
  Cable,
  Lightbulb,
  Factory,
  Home,
  FileCheck,
  TrendingUp,
  Clock,
  Briefcase,
  Heart,
  Target,
  Wrench,
  Building,
  HardHat,
  BadgeCheck,
  Globe,
  ArrowRight,
  Quote,
  DollarSign,
  Mail,
  ChevronRight,
  CircuitBoard,
  Cpu,
  Network
} from "lucide-react";

export default function BradsElectrical() {
  return (
    <>
      <Helmet>
        <title>Brad's Electrical Construction Company, LLC | Women-Owned Electrical Contractor | Piedmont Triad NC</title>
        <meta 
          name="description" 
          content="Brad's Electrical Construction Company, LLC - Women-owned, NC HUB Certified electrical contractor serving the Piedmont Triad. Commercial, residential, and federal government contracting. GSA Schedule holder. High Point & Winston-Salem, NC." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with electric theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        
        {/* Animated circuit pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80h-80z" fill="none" stroke="rgba(250,204,21,0.5)" strokeWidth="0.5"/>
                <circle cx="10" cy="10" r="3" fill="rgba(250,204,21,0.3)"/>
                <circle cx="90" cy="10" r="3" fill="rgba(250,204,21,0.3)"/>
                <circle cx="10" cy="90" r="3" fill="rgba(250,204,21,0.3)"/>
                <circle cx="90" cy="90" r="3" fill="rgba(250,204,21,0.3)"/>
                <circle cx="50" cy="50" r="5" fill="rgba(250,204,21,0.4)"/>
                <path d="M50 10v40M10 50h40M50 90v-40M90 50h-40" stroke="rgba(250,204,21,0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Certification Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-full text-pink-300 text-sm font-semibold backdrop-blur-sm">
                  <Shield className="w-4 h-4" />
                  Women-Owned Small Business
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  NC HUB Certified
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-semibold backdrop-blur-sm">
                  <BadgeCheck className="w-4 h-4" />
                  GSA Schedule Holder
                </span>
              </div>

              <div>
                <p className="text-yellow-400 font-semibold tracking-wide uppercase text-sm mb-4">
                  Piedmont Triad's Trusted Electrical Partner
                </p>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Brad's Electrical
                  <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Construction Co.
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                A women-owned electrical construction company delivering excellence across 
                commercial, residential, and federal government projects throughout North Carolina.
              </p>

              {/* Rating & Quick Stats */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold">5.0</span>
                  <span className="text-slate-400">Rating</span>
                </div>
                <div className="w-px h-6 bg-slate-600" />
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-white">40+</span> Employees
                </div>
                <div className="w-px h-6 bg-slate-600" />
                <div className="flex items-center gap-2 text-slate-300">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-white">$3.4M+</span> Revenue
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Request Free Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#capabilities" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
                >
                  View Capabilities
                </a>
              </div>
            </div>

            {/* Hero Stats Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Company Snapshot</h2>
                    <p className="text-slate-400">Brad's Electrical Construction Company, LLC</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "Established", value: "2018", color: "yellow" },
                    { icon: Users, label: "Team Size", value: "41+", color: "blue" },
                    { icon: Building2, label: "Locations", value: "2", color: "green" },
                    { icon: Globe, label: "Service Area", value: "Triad NC", color: "purple" },
                    { icon: DollarSign, label: "Annual Rev", value: "$3.4M", color: "emerald" },
                    { icon: FileCheck, label: "GSA Contract", value: "Active", color: "cyan" },
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <stat.icon className={`w-6 h-6 mb-2 ${
                        stat.color === 'yellow' ? 'text-yellow-400' :
                        stat.color === 'blue' ? 'text-blue-400' :
                        stat.color === 'green' ? 'text-green-400' :
                        stat.color === 'purple' ? 'text-purple-400' :
                        stat.color === 'emerald' ? 'text-emerald-400' :
                        'text-cyan-400'
                      }`} />
                      <div className="stat-number text-2xl text-white">{stat.value}</div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-slate-400 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    High Point & Winston-Salem, North Carolina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-yellow-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0z\" fill=\"none\"/%3E%3Ccircle cx=\"1\" cy=\"1\" r=\"1\" fill=\"rgba(255,255,255,0.1)\"/%3E%3C/svg%3E')] opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold block">WOSB</span>
                <span className="text-white/70 text-sm">Women-Owned Small Business</span>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold block">NC HUB</span>
                <span className="text-white/70 text-sm">Historically Underutilized Business</span>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold block">SAM.gov</span>
                <span className="text-white/70 text-sm">Federal Contractor Registered</span>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold block">GSA MAS</span>
                <span className="text-white/70 text-sm">Contract #47QSMS24D00BY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-6">
                About Our Company
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Powering the Piedmont Triad Since 2018
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Brad's Electrical Construction Company, LLC is a women-owned electrical contractor 
                  headquartered in High Point, North Carolina. Founded with a commitment to quality 
                  workmanship and exceptional customer service, we've grown to become a trusted partner 
                  for commercial, residential, and government clients throughout the Piedmont Triad region.
                </p>
                <p>
                  As a certified Women-Owned Small Business (WOSB) and NC HUB firm, we bring diversity 
                  and dedication to every project. Our team of 40+ skilled professionals delivers 
                  comprehensive electrical solutions—from new construction and installations to complex 
                  power systems and facility support services.
                </p>
                <p>
                  With active GSA Schedule and SAM.gov registrations, we're positioned to serve 
                  federal, state, and local government agencies while continuing to support private 
                  sector clients across Guilford, Forsyth, and Davidson counties.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center">
                      <HardHat className="w-6 h-6 text-slate-500" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-slate-900">40+ Skilled Professionals</div>
                  <div className="text-slate-500 text-sm">Licensed electricians & support staff</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: Heart, 
                  title: "Women-Owned", 
                  desc: "Certified WOSB bringing diversity to the electrical industry",
                  color: "pink"
                },
                { 
                  icon: Target, 
                  title: "Quality First", 
                  desc: "5-star rated with commitment to excellence",
                  color: "yellow"
                },
                { 
                  icon: Briefcase, 
                  title: "Full Service", 
                  desc: "Commercial, residential & government projects",
                  color: "blue"
                },
                { 
                  icon: Users, 
                  title: "Local Team", 
                  desc: "40+ employees serving the Piedmont Triad",
                  color: "green"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    item.color === 'pink' ? 'bg-pink-50 border-pink-100' :
                    item.color === 'yellow' ? 'bg-yellow-50 border-yellow-100' :
                    item.color === 'blue' ? 'bg-blue-50 border-blue-100' :
                    'bg-green-50 border-green-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                    item.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                    item.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="capabilities" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Capabilities & Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Comprehensive Electrical Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From residential wiring to complex commercial installations and federal contract work, 
              we deliver reliable electrical services across all sectors.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Commercial */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Commercial Construction</h3>
              <p className="text-slate-600 mb-6">
                Full-scale electrical systems for offices, retail spaces, healthcare facilities, 
                and industrial buildings throughout the Piedmont Triad.
              </p>
              <ul className="space-y-3">
                {[
                  "New construction wiring",
                  "Tenant improvements",
                  "Power distribution systems",
                  "Lighting design & installation",
                  "Emergency backup systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Residential */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Residential Services</h3>
              <p className="text-slate-600 mb-6">
                Complete home electrical solutions from new construction to renovations, 
                upgrades, and repairs for homeowners across NC.
              </p>
              <ul className="space-y-3">
                {[
                  "Home rewiring & upgrades",
                  "Panel replacements",
                  "Code compliance updates",
                  "Smart home integration",
                  "Safety inspections"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Government */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Government Contracting</h3>
              <p className="text-slate-600 mb-6">
                Federally registered contractor with GSA Schedule, equipped to handle 
                government facility electrical projects and set-asides.
              </p>
              <ul className="space-y-3">
                {[
                  "Federal facility work",
                  "State & local projects",
                  "WOSB set-aside eligible",
                  "GSA Schedule pricing",
                  "Compliance certified"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cable, title: "Utility & Fiber", desc: "Installation and removal services for utility infrastructure and fiber optic cable", color: "orange" },
              { icon: Zap, title: "Power Systems", desc: "Electric power generation and distribution system design and installation", color: "yellow" },
              { icon: Wrench, title: "Facilities Support", desc: "Ongoing maintenance and support services for commercial facilities", color: "slate" },
              { icon: CircuitBoard, title: "Instrumentation", desc: "Control systems and instrumentation for industrial applications", color: "cyan" }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  service.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  service.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  service.color === 'slate' ? 'bg-slate-100 text-slate-600' :
                  'bg-cyan-100 text-cyan-600'
                } group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Contracting Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold mb-6">
                Federal & State Ready
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Government Contracting 
                <span className="text-yellow-400"> Capabilities</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Brad's Electrical Construction Company is fully registered and positioned for 
                government contracting opportunities at federal, state, and local levels. 
                Our certifications open doors to set-aside contracts and prime/subcontracting opportunities.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { label: "Unique Entity ID (UEI)", value: "KGF9BFA9WMY9" },
                  { label: "GSA Contract Number", value: "47QSMS24D00BY" },
                  { label: "Primary NAICS", value: "238210 - Electrical Contractors" },
                  { label: "Secondary NAICS", value: "561210 - Facilities Support Services" },
                  { label: "CAGE Code", value: "Available in SAM.gov" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-slate-400 text-sm">{item.label}</span>
                      <span className="text-white font-semibold ml-2 font-mono">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://sam.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                View on SAM.gov <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-6">
              {/* Teaming Opportunities Card */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-2xl p-8 border border-yellow-400/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-7 h-7 text-yellow-400" />
                  Ideal Contracting Fit
                </h3>
                <div className="grid gap-4">
                  {[
                    { title: "Prime Contractor", desc: "Small electrical projects under $3.5M" },
                    { title: "Subcontractor", desc: "Electrical scope on larger federal contracts" },
                    { title: "WOSB Set-Asides", desc: "Eligible for women-owned procurement preferences" },
                    { title: "NC HUB Projects", desc: "State and local diversity requirements" },
                    { title: "Teaming Partner", desc: "Joint ventures and mentor-protégé arrangements" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="text-slate-400 ml-2">— {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="stat-number text-4xl text-yellow-400 mb-2">GSA</div>
                  <div className="text-slate-400">Schedule Holder</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="stat-number text-4xl text-green-400 mb-2">SAM</div>
                  <div className="text-slate-400">Registered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Service Coverage
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Serving the Piedmont Triad
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Based in High Point and Winston-Salem, we provide electrical services throughout 
              North Carolina's Piedmont Triad region.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Primary Coverage */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Primary Service Areas
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { city: "High Point", county: "Guilford County", hq: true },
                  { city: "Winston-Salem", county: "Forsyth County", hq: true },
                  { city: "Greensboro", county: "Guilford County" },
                  { city: "Thomasville", county: "Davidson County" },
                  { city: "Kernersville", county: "Forsyth County" },
                  { city: "Lexington", county: "Davidson County" },
                  { city: "Archdale", county: "Randolph County" },
                  { city: "Burlington", county: "Alamance County" },
                  { city: "Asheboro", county: "Randolph County" }
                ].map((area, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl ${
                      area.hq 
                        ? 'bg-green-100 border-2 border-green-300' 
                        : 'bg-white border border-slate-200'
                    }`}
                  >
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      {area.city}
                      {area.hq && <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">HQ</span>}
                    </div>
                    <div className="text-slate-500 text-sm">{area.county}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations Card */}
            <div className="space-y-4">
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h4 className="font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  High Point Office
                </h4>
                <p className="text-slate-300 mb-2">822 W Green Dr</p>
                <p className="text-slate-300 mb-4">High Point, NC 27260</p>
                <p className="text-slate-400 text-sm">Guilford County • Headquarters</p>
              </div>

              <div className="bg-slate-800 text-white rounded-2xl p-6">
                <h4 className="font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Winston-Salem Office
                </h4>
                <p className="text-slate-300 mb-2">580 Garden Valley Dr</p>
                <p className="text-slate-300 mb-4">Winston-Salem, NC 27107</p>
                <p className="text-slate-400 text-sm">Forsyth County</p>
              </div>

              <a 
                href="tel:+13369950848"
                className="flex items-center justify-center gap-2 w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                (336) 995-0848
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              5-Star Rated Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our commitment to quality workmanship and customer satisfaction has earned us 
              perfect ratings from our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "They are very professional and do great work. They were friendly and really worked quickly. Will send more work their way when anyone needs electrical services.",
                author: "Commercial Client",
                type: "Commercial Project",
                rating: 5
              },
              {
                quote: "Laid back and enjoyable place to work. When I worked at Brad's Electrical they always had tons of work. You pretty much work at your own pace typically with help.",
                author: "Former Team Member",
                type: "Employee Review",
                rating: 5
              },
              {
                quote: "Excellent work on our building project. Professional team, on-time completion, and great communication throughout. Highly recommend for any commercial or residential project.",
                author: "Verified Customer",
                type: "Construction Project",
                rating: 5
              }
            ].map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <Quote className="w-10 h-10 text-yellow-400 mb-4" />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">"{review.quote}"</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-slate-500 text-sm">{review.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-100 rounded-full">
              <span className="text-slate-600">Rated</span>
              <span className="font-bold text-slate-900 text-xl">5.0 / 5.0</span>
              <span className="text-slate-600">on multiple platforms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">
              Why Brad's Electrical
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              The Brad's Electrical Advantage
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              What sets us apart as your electrical contractor partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Certified & Qualified",
                desc: "WOSB, NC HUB, and GSA certified with full NC electrical contractor licensing",
                color: "pink"
              },
              {
                icon: Users,
                title: "Experienced Team",
                desc: "40+ skilled professionals with extensive commercial and residential experience",
                color: "blue"
              },
              {
                icon: Clock,
                title: "Reliable & Responsive",
                desc: "On-time project completion with clear communication throughout",
                color: "green"
              },
              {
                icon: DollarSign,
                title: "Competitive Pricing",
                desc: "Fair rates with GSA Schedule pricing for government clients",
                color: "yellow"
              },
              {
                icon: MapPin,
                title: "Local Presence",
                desc: "Two locations in the Piedmont Triad for quick response",
                color: "purple"
              },
              {
                icon: Building2,
                title: "Full Service",
                desc: "Commercial, residential, and government capabilities under one roof",
                color: "cyan"
              },
              {
                icon: Heart,
                title: "Women-Owned",
                desc: "Proudly supporting diversity in the construction industry",
                color: "rose"
              },
              {
                icon: Star,
                title: "5-Star Rated",
                desc: "Consistent quality that earns perfect customer reviews",
                color: "amber"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
                  item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  item.color === 'green' ? 'bg-green-500/20 text-green-400' :
                  item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                  item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  item.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                  item.color === 'rose' ? 'bg-rose-500/20 text-rose-400' :
                  'bg-amber-500/20 text-amber-400'
                } group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white">
                <h2 className="text-3xl font-extrabold mb-4">Let's Work Together</h2>
                <p className="text-slate-300 mb-10 text-lg">
                  Ready to start your electrical project? Contact us for a free estimate 
                  or to discuss teaming opportunities.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2 text-lg">
                      <Phone className="w-5 h-5" />
                      Call Us
                    </h3>
                    <a href="tel:+13369950848" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
                      (336) 995-0848
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2 text-lg">
                      <MapPin className="w-5 h-5" />
                      High Point (HQ)
                    </h3>
                    <p className="text-slate-300">
                      822 W Green Dr<br />
                      High Point, NC 27260
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2 text-lg">
                      <MapPin className="w-5 h-5" />
                      Winston-Salem
                    </h3>
                    <p className="text-slate-300">
                      580 Garden Valley Dr<br />
                      Winston-Salem, NC 27107
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-slate-500 text-sm mb-4">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-pink-500/20 text-pink-300 rounded-full text-xs font-medium">WOSB</span>
                    <span className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">NC HUB</span>
                    <span className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">SAM.gov</span>
                    <span className="px-3 py-1.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">GSA MAS</span>
                  </div>
                </div>
              </div>

              {/* CTA Side */}
              <div className="lg:col-span-3 p-12">
                <div className="max-w-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Request a Free Estimate
                  </h3>
                  <p className="text-slate-600 mb-8 text-lg">
                    Whether you need residential electrical work, commercial construction, 
                    or want to explore government contracting partnerships, our team is ready to help.
                  </p>

                  <div className="space-y-4 mb-8">
                    <a 
                      href="tel:+13369950848"
                      className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-900 font-bold rounded-xl transition-all text-lg shadow-lg shadow-yellow-500/25"
                    >
                      <Phone className="w-6 h-6" />
                      Call (336) 995-0848
                    </a>
                    
                    <a 
                      href="mailto:info@bradselectrical.com"
                      className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Send Email Inquiry
                    </a>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-4">We Serve:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                        Homeowners
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                        General Contractors
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                        Property Managers
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                        Government Agencies
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                        Commercial Developers
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                        Prime Contractors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">Brad's Electrical Construction Company, LLC</h3>
              <p className="text-slate-400">Women-Owned • NC HUB Certified • GSA Schedule Holder</p>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <span>High Point, NC</span>
              <span>•</span>
              <span>Winston-Salem, NC</span>
              <span>•</span>
              <a href="tel:+13369950848" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                (336) 995-0848
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
