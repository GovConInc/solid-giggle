import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Award, Building2, Users, Star, TrendingUp, Zap, Clock, DollarSign } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

const certifications = [
  {
    name: "8(a) Business Development",
    icon: Star,
    desc: "SBA's premier program for small disadvantaged businesses",
    benefits: ["Sole-source contracts up to $4.5M", "Set-aside competitions", "Business development support"],
    eligibility: "51% owned by socially/economically disadvantaged individuals",
    requirements: [
      "Business must be small (size standard depends on industry)",
      "Applicant(s) must be U.S. citizen(s)",
      "Personal net worth under $250,000 (excluding home)",
      "Adjusted gross income averaged over 2 years under $65,000",
      "3 years of business management/ownership experience",
      "Demonstrate potential for success",
    ],
    marketSize: "$183.5B in awards",
    achievement: "28.76% of small business awards",
  },
  {
    name: "HUBZone",
    icon: Building2,
    desc: "Historically Underutilized Business Zone program",
    benefits: ["10% price evaluation preference", "Sole-source contracts", "Set-aside competitions"],
    eligibility: "Principal office in HUBZone, 35% of employees reside in HUBZone",
    requirements: [
      "Principal office must be located in a designated HUBZone",
      "At least 35% of employees must reside in a HUBZone",
      "At least 51% unconditional ownership by U.S. citizens",
      "Business must be independently owned and operated",
      "Small business size standards must be met",
      "Must be organized for profit and operate as for-profit",
    ],
    marketSize: "$17.6B in awards",
    achievement: "2.75% of small business awards",
  },
  {
    name: "SDVOSB",
    icon: Award,
    desc: "Service-Disabled Veteran-Owned Small Business",
    benefits: ["VA set-aside contracts", "Sole-source up to $5M", "Subcontracting requirements"],
    eligibility: "51% owned by service-disabled veteran(s)",
    requirements: [
      "Owner(s) must be veteran with service-connected disability",
      "Disability rating must be at least 0% from VA",
      "At least 51% ownership and control by service-disabled veteran(s)",
      "Business must be small per SBA standards",
      "Sole proprietor or U.S. citizen",
      "Operating for profit as a business entity",
    ],
    marketSize: "$32.8B in awards",
    achievement: "5.14% of small business awards",
  },
  {
    name: "WOSB / EDWOSB",
    icon: Users,
    desc: "Women-Owned Small Business programs",
    benefits: ["NAICS-specific set-asides", "Sole-source contracts", "Federal contracting access"],
    eligibility: "51% owned by women who control management",
    requirements: [
      "At least 51% ownership by woman/women",
      "Woman must control management and daily operations",
      "At least 51% of business ownership interest",
      "Business must be small per SBA standards",
      "Woman must make day-to-day decisions",
      "EDWOSB requires economic disadvantage qualification",
    ],
    marketSize: "$31.7B in awards",
    achievement: "4.97% of small business awards",
  },
];

// Chart data from the provided Achievement Data
const achievementData = [
  {
    category: "Small Business",
    achievement2023: 28.35,
    goal2024: 23.0,
    achievement2024: 28.76,
    dollars: 183.5,
  },
  {
    category: "Small Disadvantaged",
    achievement2023: 12.1,
    goal2024: 13.0,
    achievement2024: 12.27,
    dollars: 78.3,
  },
  {
    category: "Women Owned",
    achievement2023: 4.91,
    goal2024: 5.0,
    achievement2024: 4.97,
    dollars: 31.7,
  },
  {
    category: "Service Disabled Vet",
    achievement2023: 5.07,
    goal2024: 5.0,
    achievement2024: 5.14,
    dollars: 32.8,
  },
  {
    category: "HUBZone",
    achievement2023: 2.78,
    goal2024: 3.0,
    achievement2024: 2.75,
    dollars: 17.6,
  },
];

const COLORS = ["#1e3a8a", "#dc2626", "#0d9488", "#7c3aed", "#ea580c"];

export default function InformationCertification() {
  const [selectedChart, setSelectedChart] = useState<"achievement" | "dollars">("achievement");

  return (
    <>
      <Helmet>
        <title>Certification Data — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Information</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Certification Data
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SBA certifications are your gateway to billions in set-aside contracts. The right certification 
              accelerates your federal sales by eliminating large competitors and providing sole-source opportunities. 
              We complete the entire certification process and have your applications submitted within 14 days.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-lg bg-gov-crimson/10 p-4 border border-gov-crimson/20">
              <Zap className="text-gov-crimson shrink-0" size={24} />
              <div>
                <div className="font-bold text-gov-crimson">Fast-Track Certification Program</div>
                <div className="text-sm text-slate-700">Complete applications submitted within 14 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Market Opportunity</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">
              The Numbers Behind Set-Asides
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Federal agencies are required to award specific percentages of contract dollars to small business categories. 
              These aren't optional goals—they're mandated benchmarks that create predictable, protected market opportunities.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5 mb-8">
            {achievementData.map((item) => (
              <Card key={item.category} className="p-4" hover>
                <div className="text-xs font-bold uppercase text-slate-500">{item.category}</div>
                <div className="mt-3 text-3xl font-bold text-gov-navy">${item.dollars}B</div>
                <div className="mt-1 text-xs text-slate-600">2024 Awards</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">Achievement Rate</div>
                  <div className="text-lg font-bold text-gov-crimson">{item.achievement2024}%</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Interactive Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6" hover={false}>
              <h3 className="font-bold text-lg text-gov-navy mb-4">2024 Achievement vs. Goal</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={achievementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 12 }} />
                  <YAxis label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="goal2024" fill="#9ca3af" name="2024 Goal" />
                  <Bar dataKey="achievement2024" fill="#1e3a8a" name="2024 Achievement" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6" hover={false}>
              <h3 className="font-bold text-lg text-gov-navy mb-4">Award Distribution by Category (2024)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={achievementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, dollars }) => `${category}: $${dollars}B`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="dollars"
                  >
                    {achievementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value}B`} />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <Card className="mt-6 p-6 bg-gov-navy text-black-1200" hover={true}>FY24 Roadmap
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <div className="text-sm font-semibold text-black-300">Total SBA Awards</div>
                <div className="text-3xl font-bold mt-2">$375.9B</div>
                <div className="text-xs text-slate-400 mt-1">Combined 2024 awards</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-black-300">Market Share</div>
                <div className="text-3xl font-bold mt-2">28.76%</div>
                <div className="text-xs text-slate-400 mt-1">Federal procurement dollars</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-black-300">Market Population</div>
                <div className="text-3xl font-bold mt-2">78,677</div>
                <div className="text-xs text-slate-400 mt-1">Small Businesses won contracts</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Detailed Certification Info */}
      <Section title="Available Certifications" kicker="SBA Programs">
        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((cert) => (
            <Card key={cert.name} className="p-6" hover>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue shrink-0">
                  <cert.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gov-navy">{cert.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{cert.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">Market Size</div>
                  <div className="text-xl font-bold text-gov-crimson mt-1">{cert.marketSize}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">Achievement</div>
                  <div className="text-xl font-bold text-gov-navy mt-1">{cert.achievement}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Key Benefits</div>
                <ul className="space-y-2">
                  {cert.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={14} className="text-gov-green shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 rounded-lg bg-slate-50 p-3">
                <div className="text-xs font-semibold text-slate-500 mb-1">Basic Eligibility</div>
                <div className="text-sm text-slate-700">{cert.eligibility}</div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Requirements Checklist</div>
                <ul className="space-y-2">
                  {cert.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle size={12} className="text-gov-blue shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process with Timeline */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Process</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy mb-2">
            Our 14-Day Certification Program
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8">
            We handle every step of the certification process so you can focus on growing your business. 
            From initial eligibility assessment to final submission, our team ensures accuracy and compliance.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-4">
            {[
              { 
                step: "1", 
                title: "Eligibility Review", 
                desc: "We verify you qualify for each certification",
                timeline: "Days 1-2"
              },
              { 
                step: "2", 
                title: "Document Collection", 
                desc: "We gather and organize all required documentation",
                timeline: "Days 3-6"
              },
              { 
                step: "3", 
                title: "Application Preparation", 
                desc: "We complete all forms and review for accuracy",
                timeline: "Days 7-12"
              },
              { 
                step: "4", 
                title: "Submission & Follow-Up", 
                desc: "Applications submitted; we monitor for updates",
                timeline: "Days 13-14"
              },
            ].map((item) => (
              <Card key={item.step} className="p-6" hover={false}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gov-blue text-white font-bold mb-2">
                  {item.step}
                </div>
                <div className="text-xs font-semibold text-gov-crimson uppercase mb-1">{item.timeline}</div>
                <h3 className="font-semibold text-gov-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales-Oriented CTA */}
      <Section title="Ready to Unlock Federal Opportunities?" kicker="Next Steps" dark>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-8 bg-white/5 border-white/10" hover={false}>
            <div className="flex items-start gap-4 mb-4">
              <Clock className="text-gov-crimson shrink-0" size={32} />
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  14-Day Turnaround
                </h3>
                <p className="mt-2 text-slate-300">
                  We complete your entire certification process and submit applications within 14 days. 
                  No delays, no surprises—just results.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white/5 border-white/10" hover={false}>
            <div className="flex items-start gap-4 mb-4">
              <DollarSign className="text-gov-green shrink-0" size={32} />
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Access Billions in Set-Asides
                </h3>
                <p className="mt-2 text-slate-300">
                  The average certified contractor gains access to $375.9B in annual federal opportunities 
                  that larger competitors can't pursue.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-6 p-8 bg-gov-navy border-2 border-gov-crimson" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We handle everything
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Eligibility verification, document collection, application completion, submission, and ongoing 
                support—all completed in 14 days. You just need to say yes.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Schedule Free Assessment
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>

      {/* Trust Indicators */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Why Choose Us</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy mb-8">
            Proven Certification Success
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "98% Approval Rate",
                desc: "Our thorough preparation ensures certifications are approved on first submission",
              },
              {
                icon: Clock,
                title: "14-Day Guarantee",
                desc: "Complete applications submitted within 14 days or we continue for free",
              },
              {
                icon: Award,
                title: "Expert Review",
                desc: "Every application reviewed by SBA-certified professionals before submission",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6" hover>
                  <Icon className="text-gov-blue mb-4" size={32} />
                  <h3 className="font-bold text-gov-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
