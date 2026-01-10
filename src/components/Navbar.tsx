import { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LinkButton } from "./Button";
import { BRAND, LINKS } from "../lib/constants";
import { cn } from "./cn";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

type NavItem = { label: string; to: string; children?: NavItem[] };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const primary: NavItem[] = useMemo(
    () => [
      { label: "Home", to: "/" },
      {
        label: "Information",
        to: "/information",
        children: [
          { label: "SAM / DSBS / FEMA", to: "/information/sam-dsbs-fema" },
          { label: "Certification Data", to: "/information/certification-data" },
          { label: "Finding Government Bids", to: "/information/finding-bids" },
          { label: "Writing Proposals 101", to: "/information/writing-proposals" },
          { label: "Contract Vehicles 101", to: "/information/contract-vehicles" },
        ],
      },
      {
        label: "Services",
        to: "/services",
        children: [
          { label: "GSA Contractors", to: "/services/gsa-contractors" },
          { label: "Programs", to: "/services/programs" },
          { label: "Compliance & Capture", to: "/services/compliance-capture" },
          { label: "Proposal Writing", to: "/services/proposal-writing" },
        ],
      },
      {
        label: "About Us",
        to: "/about",
        children: [
          { label: "Methodology", to: "/about/methodology" },
        ],
      },
      { label: "Contact Us", to: "/contact" },
    ],
    []
  );

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-gov-navy text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
          <div className="flex items-center gap-4 text-xs">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-gov-sky transition">
              <Phone size={12} />
              {BRAND.phone}
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a href={`mailto:${BRAND.email}`} className="hidden sm:block hover:text-gov-sky transition">
              {BRAND.email}
            </a>
          </div>
          <div className="text-xs text-slate-300">
            {BRAND.location}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gov-crimson to-gov-blue shadow-lg transition-transform group-hover:scale-105">
            <span className="font-display text-2xl font-bold text-white">G</span>
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold text-gov-navy tracking-tight">{BRAND.name}</div>
            <div className="text-xs font-medium text-slate-500">{BRAND.tagline}</div>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
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
                      "flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all",
                      isActiveParent 
                        ? "text-gov-crimson" 
                        : "text-slate-700 hover:text-gov-navy hover:bg-slate-50"
                    )}
                  >
                    {x.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-60 rounded-xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/60">
                      {x.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            cn(
                              "block rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                              isActive 
                                ? "text-gov-crimson bg-red-50/60" 
                                : "text-slate-600 hover:text-gov-navy hover:bg-slate-50"
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
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
                    "px-4 py-2.5 text-sm font-semibold rounded-lg transition-all",
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
          <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="md">
            Book a Call
          </LinkButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
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
                          {x.children.map(child => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                cn(
                                  "block rounded-lg px-4 py-2.5 text-sm font-medium transition",
                                  isActive 
                                    ? "text-gov-crimson bg-white" 
                                    : "text-slate-600 hover:text-gov-navy hover:bg-white"
                                )
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
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
                          ? "border-gov-crimson/20 bg-red-50/50 text-gov-crimson" 
                          : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                      )
                    }
                    end={x.to === "/"}
                  >
                    {x.label}
                  </NavLink>
                );
              })}
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" className="mt-3">
                Book a Call
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
