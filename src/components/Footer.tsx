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
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gov-crimson to-gov-blue">
                <span className="font-display text-2xl font-bold text-white">G</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">{BRAND.name}</div>
                <div className="text-xs text-slate-400">{BRAND.tagline}</div>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed">
              We help companies win government business through compliance, capture, 
              and proposal execution — built into a repeatable operating system.
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
                <Phone size={16} className="text-gov-crimson" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <Mail size={16} className="text-gov-crimson" />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={16} className="text-gov-crimson" />
                {BRAND.location}
              </div>
            </div>

            <a 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gov-crimson px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gov-crimson/90"
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
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
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
