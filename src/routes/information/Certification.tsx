import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Award, Building2, Users, Star } from "lucide-react";
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
  },
  {
    name: "HUBZone",
    icon: Building2,
    desc: "Historically Underutilized Business Zone program",
    benefits: ["10% price evaluation preference", "Sole-source contracts", "Set-aside competitions"],
    eligibility: "Principal office in HUBZone, 35% of employees reside in HUBZone",
  },
  {
    name: "SDVOSB",
    icon: Award,
    desc: "Service-Disabled Veteran-Owned Small Business",
    benefits: ["VA set-aside contracts", "Sole-source up to $5M", "Subcontracting requirements"],
    eligibility: "51% owned by service-disabled veteran(s)",
  },
  {
    name: "WOSB / EDWOSB",
    icon: Users,
    desc: "Women-Owned Small Business programs",
    benefits: ["NAICS-specific set-asides", "Sole-source contracts", "Federal contracting access"],
    eligibility: "51% owned by women who control management",
  },
];

export default function InformationCertification() {
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
              Understanding SBA certifications is critical for accessing set-aside contracts. 
              The right certification can be your competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-gov-navy">
                Why Certifications Matter
              </h2>
              <p className="mt-4 text-slate-600">
                The federal government is required to award 23% of prime contract dollars to 
                small businesses. Certifications give you access to set-aside contracts that 
                larger competitors can't compete for.
              </p>
              
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { value: "23%", label: "Small Business Goal" },
                  { value: "5%", label: "WOSB Goal" },
                  { value: "3%", label: "HUBZone Goal" },
                  { value: "3%", label: "SDVOSB Goal" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white p-4 border border-slate-200">
                    <div className="text-2xl font-bold text-gov-crimson">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gov-navy text-white" hover={false}>
              <h3 className="font-bold text-lg">Not Sure Which Applies?</h3>
              <p className="mt-2 text-sm text-slate-300">
                We'll review your business and identify all certifications you qualify for.
              </p>
              <a 
                href={LINKS.booking}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gov-navy transition hover:bg-slate-100"
              >
                Free Assessment
                <ArrowRight size={16} />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <Section title="Available Certifications" kicker="SBA Programs">
        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((cert) => (
            <Card key={cert.name} className="p-6" hover>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue shrink-0">
                  <cert.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gov-navy">{cert.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{cert.desc}</p>
                  
                  <div className="mt-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Benefits</div>
                    <ul className="mt-2 space-y-1">
                      {cert.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle size={14} className="text-gov-green" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 rounded-lg bg-slate-50 p-3">
                    <div className="text-xs font-semibold text-slate-500">Eligibility</div>
                    <div className="text-sm text-slate-700">{cert.eligibility}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Process</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">
            Certification Steps
          </h2>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {[
              { step: "1", title: "Verify Eligibility", desc: "Check size standards and requirements" },
              { step: "2", title: "Gather Documents", desc: "Tax returns, agreements, ownership proof" },
              { step: "3", title: "Apply via certify.sba.gov", desc: "Unified SBA certification portal" },
              { step: "4", title: "Update SAM", desc: "Reflect new certification status" },
            ].map((item) => (
              <Card key={item.step} className="p-6" hover={false}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gov-blue text-white font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-gov-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Ready to Get Certified?" kicker="Next Steps" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We handle the certification process
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                From eligibility review to application submission and follow-up, 
                we ensure your certification goes through smoothly.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Start Certification
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
