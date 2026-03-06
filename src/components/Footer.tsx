import { Link } from "react-router-dom";
import { BRAND, LINKS } from "../lib/constants";
import { Phone, Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gov-navy text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gov-blue/5 rounded-full blur-[120px]" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Ready to win federal contracts?
              </h3>
              <p className="mt-2 text-slate-400 max-w-lg">
                Book a free 30-minute strategy call. No pitch, no obligation — just straight answers about your path to federal contracting success.
              </p>
            </div>
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gov-navy transition hover:bg-slate-100 shadow-lg shrink-0"
            >
              Book Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-display leading-none select-none">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">Fed</span><span className="text-gov-sky">Gov</span><span className="text-gov-gold">Win</span>
              </span>
            </span>
            <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider font-semibold">{BRAND.tagline}</div>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">
              Expert federal contracting consulting — GSA Schedule applications, SBA certifications,
              proposal writing, and ongoing contract management. Guaranteed timelines, proven results.
            </p>

            {/* Contact info inline */}
            <div className="mt-6 space-y-2.5">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition">
                <Phone size={15} className="text-gov-gold" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition">
                <Mail size={15} className="text-gov-gold" />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={15} className="text-gov-gold" />
                {BRAND.location}
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Information</p>
            <div className="grid gap-2.5 text-sm">
              <Link to="/information/sam-dsbs-fema" className="text-slate-300 hover:text-white transition">SAM / DSBS / FEMA</Link>
              <Link to="/information/certification-data" className="text-slate-300 hover:text-white transition">Certification Data</Link>
              <Link to="/information/finding-bids" className="text-slate-300 hover:text-white transition">Finding Government Bids</Link>
              <Link to="/information/writing-proposals" className="text-slate-300 hover:text-white transition">Writing Proposals 101</Link>
              <Link to="/information/contract-vehicles" className="text-slate-300 hover:text-white transition">Contract Vehicles 101</Link>
              <Link to="/information/search-contracts" className="text-slate-300 hover:text-white transition">Contract Award History</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Services</p>
            <div className="grid gap-2.5 text-sm">
              <Link to="/services/gsa-contractors" className="text-slate-300 hover:text-white transition">GSA Schedule Services</Link>
              <Link to="/services/programs" className="text-slate-300 hover:text-white transition">Federal Programs</Link>
              <Link to="/services/compliance-capture" className="text-slate-300 hover:text-white transition">Certifications & Compliance</Link>
              <Link to="/services/proposal-writing" className="text-slate-300 hover:text-white transition">Proposal Writing</Link>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 mt-6">Company</p>
            <div className="grid gap-2.5 text-sm">
              <Link to="/about" className="text-slate-300 hover:text-white transition">About Us</Link>
              <Link to="/about/methodology" className="text-slate-300 hover:text-white transition">Our Methodology</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition">Contact</Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">By the Numbers</p>
            <div className="space-y-4">
              {[
                { value: "7,000+", label: "Registrations" },
                { value: "$640M", label: "Largest Win" },
                { value: "87%", label: "GSA Approval Rate" },
                { value: "15+", label: "Years Experience" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display text-lg font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-5 py-5 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
            </div>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
