import { Link } from "react-router-dom";
import { BRAND, LINKS } from "../lib/constants";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gov-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div>
              <span className="font-display leading-none select-none">
                <span className="text-2xl font-black tracking-tight">
                  <span className="text-white">Fed</span><span className="text-gov-sky">Gov</span><span className="text-gov-gold">Win</span>
                </span>
              </span>
              <div className="mt-1 text-xs text-slate-400 uppercase tracking-wider font-semibold">{BRAND.tagline}</div>
            </div>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed">
              Expert federal contracting consulting — GSA Schedule applications, SBA certifications,
              proposal writing, and ongoing contract management. Guaranteed timelines, proven results.
            </p>
          </div>

          {/* Information */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Information</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link to="/information/sam-dsbs-fema" className="text-slate-300 hover:text-white transition">SAM / DSBS / FEMA</Link>
              <Link to="/information/certification-data" className="text-slate-300 hover:text-white transition">Certification Data</Link>
              <Link to="/information/finding-bids" className="text-slate-300 hover:text-white transition">Finding Government Bids</Link>
              <Link to="/information/writing-proposals" className="text-slate-300 hover:text-white transition">Writing Proposals 101</Link>
              <Link to="/information/contract-vehicles" className="text-slate-300 hover:text-white transition">Contract Vehicles 101</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Services</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link to="/services/gsa-contractors" className="text-slate-300 hover:text-white transition">GSA Contractors</Link>
              <Link to="/services/programs" className="text-slate-300 hover:text-white transition">Programs</Link>
              <Link to="/services/compliance-capture" className="text-slate-300 hover:text-white transition">Compliance & Capture</Link>
              <Link to="/services/proposal-writing" className="text-slate-300 hover:text-white transition">Proposal Writing</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <Phone size={16} className="text-slate-400" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <Mail size={16} className="text-slate-400" />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={16} className="text-slate-400" />
                {BRAND.location}
              </div>
            </div>

            <a 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gov-navy transition hover:bg-slate-100"
            >
              Book a Call
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto w-full max-w-7xl px-5 py-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
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
