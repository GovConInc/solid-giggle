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
  FileCheck
} from "lucide-react";

export default function BradsElectrical() {
  return (
    <>
      <Helmet>
        <title>Brad's Electrical Construction Company | Women-Owned Electrical Contractor</title>
        <meta 
          name="description" 
          content="Brad's Electrical Construction Company, LLC - Women-owned electrical contractor serving North Carolina. Commercial, residential, and government contracting services." 
        />
      </Helmet>

      {/* Hero Section - Electric Yellow/Blue Theme */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated electrical grid background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(250, 204, 21, 0.3) 1px, transparent 1px),
                linear-gradient(180deg, rgba(250, 204, 21, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Electric arc decorations */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Certification Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-pink-300 text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Women-Owned Small Business
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                  <Award className="w-4 h-4" />
                  NC HUB Certified
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Brad's Electrical
                <span className="block text-yellow-400">Construction Company</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Powering North Carolina's commercial, residential, and government projects 
                with certified expertise and a commitment to excellence.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">5.0 Rating</span>
                <span className="text-slate-400">• Verified Reviews</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  <Phone className="w-5 h-5" />
                  Request Estimate
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <div className="stat-number text-4xl text-white mb-1">15+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <Users className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <div className="stat-number text-4xl text-white mb-1">11-50</div>
                  <div className="text-slate-400 text-sm">Team Members</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <Building2 className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <div className="stat-number text-4xl text-white mb-1">2</div>
                  <div className="text-slate-400 text-sm">NC Locations</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <FileCheck className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <div className="stat-number text-4xl text-white mb-1">SAM</div>
                  <div className="text-slate-400 text-sm">Registered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Women-Owned Small Business (WOSB)</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden md:block" />
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6" />
              <span className="font-semibold">NC HUB Certified</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden md:block" />
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-semibold">SAM.gov Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Comprehensive Electrical Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From residential projects to federal contracts, we deliver reliable electrical solutions across North Carolina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              {
                icon: Home,
                title: "Residential Electrical",
                description: "Complete home electrical services including installations, repairs, upgrades, and safety inspections.",
                color: "blue"
              },
              {
                icon: Building2,
                title: "Commercial Construction",
                description: "Full-scale electrical systems for commercial buildings, offices, retail spaces, and industrial facilities.",
                color: "yellow"
              },
              {
                icon: Factory,
                title: "Government Contracting",
                description: "Federal and state contract work with full SAM.gov registration and compliance capabilities.",
                color: "purple"
              },
              {
                icon: Cable,
                title: "Utility & Fiber Optic",
                description: "Utility installation/removal and fiber optic cable work for modern infrastructure needs.",
                color: "green"
              },
              {
                icon: Zap,
                title: "Electric Power Systems",
                description: "Design, installation, and maintenance of electric power systems for all building types.",
                color: "orange"
              },
              {
                icon: Lightbulb,
                title: "Facilities Support",
                description: "Ongoing electrical support services for facility maintenance and operations.",
                color: "pink"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  service.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  service.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  service.color === 'green' ? 'bg-green-100 text-green-600' :
                  service.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-pink-100 text-pink-600'
                } group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Contracting Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">
                Government Ready
              </span>
              <h2 className="text-4xl font-extrabold mb-6">
                Federal & State Contract Capabilities
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Brad's Electrical Construction Company is fully registered and positioned for government contracting opportunities at federal, state, and local levels.
              </p>

              <div className="space-y-4">
                {[
                  { label: "UEI", value: "KGF9BFA9WMY9" },
                  { label: "Primary NAICS", value: "238210 - Electrical Contractors" },
                  { label: "Secondary NAICS", value: "561210 - Facilities Support Services" },
                  { label: "Location", value: "Winston-Salem, NC" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 text-sm">{item.label}:</span>
                      <span className="text-white font-semibold ml-2">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400/10 to-purple-500/10 rounded-2xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Ideal For</h3>
              <div className="space-y-4">
                {[
                  "Prime contractor for small electrical projects",
                  "Subcontractor for larger federal contracts",
                  "Set-aside opportunities (WOSB)",
                  "State and local government work",
                  "Teaming/joint venture partnerships"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              5-Star Rated Excellence
            </h2>
            <p className="text-xl text-slate-600">
              Our customers trust us to deliver quality electrical work, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Excellent work on our commercial building. Professional team, on-time completion, and great communication throughout the project.",
                author: "Verified Customer",
                rating: 5
              },
              {
                quote: "Brad's team handled our complex electrical installation with expertise. Highly recommend for any commercial or residential project.",
                author: "Verified Customer", 
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 italic">"{review.quote}"</p>
                <p className="text-slate-500 font-medium">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-white">
                <h2 className="text-3xl font-extrabold mb-6">Get In Touch</h2>
                <p className="text-slate-300 mb-10 text-lg">
                  Ready to start your project? Contact us for a free estimate or to discuss teaming opportunities.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      High Point Office
                    </h3>
                    <p className="text-slate-300 pl-7">
                      822 W Green Dr<br />
                      High Point, NC 27260
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Winston-Salem Office
                    </h3>
                    <p className="text-slate-300 pl-7">
                      580 Garden Valley Dr<br />
                      Winston-Salem, NC 27107
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/10">
                  <p className="text-slate-400 text-sm">
                    Brad's Electrical Construction Company, LLC<br />
                    Licensed Electrical Contractor • North Carolina
                  </p>
                </div>
              </div>

              {/* CTA Side */}
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Request a Free Estimate
                </h3>
                <p className="text-slate-600 mb-8">
                  Whether you need residential electrical work, commercial construction, or want to explore government contracting partnerships, we're here to help.
                </p>

                <div className="space-y-4">
                  <a 
                    href="tel:+1-XXX-XXX-XXXX"
                    className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-lg transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call for Estimate
                  </a>
                  
                  <div className="flex flex-wrap gap-3 justify-center pt-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                      <Shield className="w-3.5 h-3.5" />
                      WOSB
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      <Award className="w-3.5 h-3.5" />
                      NC HUB
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      SAM Registered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
