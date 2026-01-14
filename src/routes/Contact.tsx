import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import { Button, LinkButton } from "../components/Button";
import { BRAND, LINKS } from "../lib/constants";
import { submitContact } from "../lib/api";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cage, setCage] = useState("");
  const [interest, setInterest] = useState("General");
  const [bestTime, setBestTime] = useState("Anytime");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const r = await submitContact({ 
        name, 
        company, 
        email, 
        phone, 
        cage,
        interest,
        bestTime
      });
      setSuccess(r.id ? `Submitted successfully! Reference: ${r.id}` : "Submitted successfully!");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setCage("");
      setInterest("General");
      setBestTime("Anytime");
    } catch (e: any) {
      setError(e?.message ?? "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Contact Us</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Let's Talk.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Have questions about certifications, capture strategy, GSA schedules, or proposal support? 
              Send us a message or book a free readiness call. No pitch—just straight answers and a clear path forward.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                Book a Readiness Call
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <LinkButton href={`mailto:${BRAND.email}`} variant="secondary" size="lg">
                Email Us
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8" hover={false}>
                <h2 className="text-xl font-bold text-gov-navy">Send a Message</h2>
                <p className="mt-2 text-sm text-slate-600">
                  We respond to all inquiries within 24 hours. Tell us about your business and how we can help.
                </p>

                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700">Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-gov-blue focus:outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-gov-blue focus:outline-none transition"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700">Company</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-gov-blue focus:outline-none transition"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700">Phone</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-gov-blue focus:outline-none transition"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700">CAGE Code</label>
                      <input
                        type="text"
                        value={cage}
                        onChange={(e) => setCage(e.target.value.toUpperCase().slice(0, 5))}
                        className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-gov-blue focus:outline-none transition"
                        placeholder="e.g., 1A2B3"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700">Interest Area</label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-gov-blue focus:outline-none transition"
                      >
                        <option value="General">General Inquiry</option>
                        <option value="Compliance">Compliance & Certifications</option>
                        <option value="GSA">GSA Schedule</option>
                        <option value="Vehicles">Vehicles</option>
                        <option value="Proposals">Proposal Writing</option>
                        <option value="Programs">Federal Programs</option>
                        <option value="Bids">Bid Support</option>
                        <option value="SAM">SAM Registration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Best Time to Contact</label>
                    <select
                      value={bestTime}
                      onChange={(e) => setBestTime(e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-gov-blue focus:outline-none transition"
                    >
                      <option value="Anytime">Anytime</option>
                      <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
                      <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
                      <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
                    </select>
                  </div>

                  {error && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                      {success}
                    </div>
                  )}

                  <Button type="submit" disabled={loading} size="lg">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6" hover={false}>
                <h3 className="text-lg font-bold text-gov-navy">Contact Information</h3>
                <div className="mt-6 space-y-4">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-4 text-slate-600 hover:text-gov-blue transition">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-blue/10 text-gov-blue">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Phone</div>
                      <div className="font-semibold">{BRAND.phone}</div>
                    </div>
                  </a>
                  
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 text-slate-600 hover:text-gov-blue transition">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-blue/10 text-gov-blue">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Email</div>
                      <div className="font-semibold">{BRAND.email}</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-blue/10 text-gov-blue">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Location</div>
                      <div className="font-semibold">{BRAND.location}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6" hover={false}>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gov-crimson/10 text-gov-crimson">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gov-navy">Response Time</div>
                    <div className="text-sm text-slate-600">Within 24 hours</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gov-navy text-white" hover={false}>
                <h3 className="font-bold">Prefer to schedule a call?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Book a 15-30 minute readiness call to discuss your specific needs.
                </p>
                <a 
                  href={LINKS.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gov-navy transition hover:bg-slate-100"
                >
                  Book Now
                  <ArrowRight size={16} />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
