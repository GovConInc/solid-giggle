import { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LinkButton } from "./Button";
import { BRAND, LINKS } from "../lib/constants";
import { cn } from "./cn";
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  BookOpen, Award, Search, FileText, Truck, Database,
  Shield, Rocket, ClipboardCheck, PenTool,
  Users, Compass, ArrowRight,
} from "lucide-react";

type NavItem = {
  label: string;
  to: string;
  icon?: typeof BookOpen;
  desc?: string;
  children?: NavItem[];
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primary: NavItem[] = useMemo(
    () => [
      { label: "Home", to: "/" },
      {
        label: "Information",
        to: "/information",
        children: [
          { label: "SAM, DSBS & FEMA Guide", to: "/information/sam-dsbs-fema", icon: Database, desc: "Registration essentials" },
          { label: "Certification Data", to: "/information/certification-data", icon: Award, desc: "8(a), HUBZone, SDVOSB, WOSB market data" },
          { label: "Finding Government Bids", to: "/information/finding-bids", icon: Search, desc: "Where to find RFPs & RFQs" },
          { label: "Writing Proposals 101", to: "/information/writing-proposals", icon: FileText, desc: "Color teams & proposal structure" },
          { label: "Contract Vehicles 101", to: "/information/contract-vehicles", icon: Truck, desc: "GSA MAS, OASIS+, SEWP & more" },
          { label: "Contract Award History", to: "/information/search-contracts", icon: BookOpen, desc: "Search past federal awards" },
        ],
      },
      {
        label: "Services",
        to: "/services",
        children: [
          { label: "GSA Schedule Services", to: "/services/gsa-contractors", icon: Shield, desc: "MAS applications from $5,500" },
          { label: "Federal Contractor Programs", to: "/services/programs", icon: Rocket, desc: "FedStart, Growth & Prime" },
          { label: "Certifications & Compliance", to: "/services/compliance-capture", icon: ClipboardCheck, desc: "SBA certs & registration mgmt" },
          { label: "Proposal Writing That Wins", to: "/services/proposal-writing", icon: PenTool, desc: "Shipley method, 87% win rate" },
        ],
      },
      {
        label: "About Us",
        to: "/about",
        children: [
          { label: "About FedGovWin", to: "/about", icon: Users, desc: "Our story & team" },
          { label: "Our Methodology", to: "/about/methodology", icon: Compass, desc: "The 5 C's framework" },
        ],
      },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled
        ? "glass border-b border-slate-200/60 shadow-sm"
        : "bg-white border-b border-slate-100"
    )}>
      {/* Top bar */}
      <div className={cn(
        "border-b border-slate-100 transition-all duration-300 overflow-hidden",
        scrolled ? "max-h-0 opacity-0 border-none" : "max-h-12 opacity-100"
      )}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-gov-navy transition">
              <Phone size={11} className="text-gov-crimson" />
              {BRAND.phone}
            </a>
            <span className="hidden sm:inline text-slate-200">|</span>
            <a href={`mailto:${BRAND.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-gov-navy transition">
              <Mail size={11} className="text-gov-blue" />
              {BRAND.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin size={11} />
            {BRAND.location}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center group shrink-0">
          <span className="font-display leading-none select-none">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-gov-navy">Fed</span><span className="text-gov-blue">Gov</span><span className="text-gov-crimson">Win</span>
            </span>
            <span className="hidden sm:inline ml-2.5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] align-middle">
              Professional Services
            </span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {primary.map((x) => {
            const isActiveParent = x.children
              ? location.pathname.startsWith(x.to)
              : location.pathname === x.to;

            if (x.children) {
              return (
                <div key={x.label} className="group relative">
                  <NavLink
                    to={x.to}
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all",
                      isActiveParent
                        ? "text-gov-crimson"
                        : "text-slate-700 hover:text-gov-navy hover:bg-slate-50"
                    )}
                  >
                    {x.label}
                    <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180 opacity-60" />
                  </NavLink>

                  {/* Mega dropdown */}
                  <div className="invisible absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className={cn(
                      "rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-200/60",
                      x.children.length > 4 ? "w-[520px] grid grid-cols-2 gap-1" : "w-72"
                    )}>
                      {x.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              cn(
                                "flex items-start gap-3 rounded-xl px-3.5 py-3 transition-all group/item",
                                isActive
                                  ? "bg-gov-navy/5 text-gov-navy"
                                  : "text-slate-600 hover:bg-slate-50"
                              )
                            }
                          >
                            {Icon && (
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 shrink-0 group-hover/item:bg-gov-blue/10 group-hover/item:text-gov-blue transition-colors">
                                <Icon size={17} />
                              </div>
                            )}
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-gov-navy">{child.label}</div>
                              {child.desc && (
                                <div className="text-xs text-slate-400 mt-0.5 leading-snug">{child.desc}</div>
                              )}
                            </div>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={x.to}
                to={x.to}
                className={({ isActive }) =>
                  cn(
                    "px-3.5 py-2 text-sm font-semibold rounded-lg transition-all",
                    isActive
                      ? "text-gov-crimson"
                      : "text-slate-700 hover:text-gov-navy hover:bg-slate-50"
                  )
                }
                end={x.to === "/"}
              >
                {x.label}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <LinkButton
            href={LINKS.booking}
            target="_blank"
            rel="noreferrer"
            size="md"
            className="gap-2 shadow-sm"
          >
            Book a Call
            <ArrowRight size={15} />
          </LinkButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl px-5 py-4">
            <div className="grid gap-1">
              {primary.map((x) => {
                if (x.children) {
                  const isExpanded = openDropdown === x.label;
                  return (
                    <div key={x.label} className="rounded-xl border border-slate-200 overflow-hidden">
                      <button
                        onClick={() => toggleMobileDropdown(x.label)}
                        className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-semibold text-slate-800 bg-white"
                      >
                        {x.label}
                        <ChevronDown
                          size={18}
                          className={cn(
                            "text-slate-400 transition-transform",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      {isExpanded && (
                        <div className="border-t border-slate-100 bg-slate-50/50 px-2 py-2">
                          {x.children.map(child => {
                            const Icon = child.icon;
                            return (
                              <NavLink
                                key={child.to}
                                to={child.to}
                                className={({ isActive }) =>
                                  cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                                    isActive
                                      ? "text-gov-crimson bg-white"
                                      : "text-slate-600 hover:text-gov-navy hover:bg-white"
                                  )
                                }
                              >
                                {Icon && <Icon size={16} className="text-slate-400 shrink-0" />}
                                <div>
                                  <div>{child.label}</div>
                                  {child.desc && <div className="text-xs text-slate-400">{child.desc}</div>}
                                </div>
                              </NavLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={x.to}
                    to={x.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-xl border px-4 py-3.5 text-sm font-semibold transition",
                        isActive
                          ? "border-slate-300 bg-slate-100 text-gov-navy font-bold"
                          : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                      )
                    }
                    end={x.to === "/"}
                  >
                    {x.label}
                  </NavLink>
                );
              })}
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" className="mt-3 justify-center">
                Book a Call <ArrowRight size={15} className="ml-1" />
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
