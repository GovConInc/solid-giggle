import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  FileText, Download, CheckCircle, Building2, User, Mail, Phone,
  Calendar, DollarSign, ArrowRight, ArrowLeft, Rocket, BarChart3,
  Crown, Shield, Settings, RefreshCw, Sparkles, Eye, Send, Edit3,
  Plus, Trash2, Clock, Target, Layers, Check, AlertCircle
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";

// ============================================
// TYPES
// ============================================

interface ClientInfo {
  companyName: string;
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface SelectedService {
  id: string;
  name: string;
  price: number;
  category: 'program' | 'gsa' | 'addon';
  description?: string;
}

interface ProposalData {
  client: ClientInfo;
  services: SelectedService[];
  validDays: number;
  notes: string;
  discount: number;
  paymentTerms: string;
}

// ============================================
// SERVICE DATA
// ============================================

const marketingPrograms = [
  {
    id: 'fedstart',
    name: 'FedStart',
    tagline: 'Your Compliance Foundation',
    duration: '3 Months',
    price: 3200,
    category: 'program' as const,
    icon: Rocket,
    color: 'blue',
    description: 'Complete compliance foundation including SAM.gov, DSBS, FEMA registrations, SBA certifications, capabilities statement, and 1,000 marketing contacts.',
    highlights: [
      'SAM.gov Registration & Optimization',
      'DSBS & FEMA Portal Setup',
      'SBA Certification Submissions',
      'Professional Capabilities Statement',
      'Marketing Strategy + 1,000 Contacts',
      'Monthly Strategy Calls (3 months)',
      '1 RFP Review'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Scale Your Pipeline',
    duration: '6 Months',
    price: 6500,
    category: 'program' as const,
    icon: BarChart3,
    color: 'rose',
    popular: true,
    description: 'Everything in FedStart plus GovCon Portal access, 2 email marketing campaigns, unlimited RFP reviews, and dedicated capture support.',
    highlights: [
      'Everything in FedStart',
      'GovCon Portal Access (6 months)',
      'Daily Bid Alerts',
      '2 Email Marketing Campaigns (2,000 contacts)',
      'Prime Contractor Targeting',
      'Unlimited Gold Team RFP Reviews',
      'Opportunity Qualification Support'
    ]
  },
  {
    id: 'prime',
    name: 'Prime',
    tagline: 'Full-Service Partnership',
    duration: '12 Months',
    price: 15500,
    category: 'program' as const,
    icon: Crown,
    color: 'amber',
    description: 'Complete business development partnership with dedicated capture manager, quarterly campaigns, up to 5 full proposals, and year-round compliance management.',
    highlights: [
      'Everything in Growth',
      'Dedicated Capture Manager',
      '4 Quarterly Marketing Campaigns',
      'Up to 5 Complete Proposals',
      'Year-Round Compliance Management',
      'Priority Support (Same Day)',
      'Quarterly Business Reviews'
    ]
  }
];

const gsaServices = [
  {
    id: 'gsa-products',
    name: 'GSA Products Schedule',
    price: 7500,
    category: 'gsa' as const,
    icon: FileText,
    color: 'slate',
    description: 'Complete GSA MAS application for commercial products and supplies.',
    highlights: [
      'Schedule eligibility assessment',
      'SIN selection strategy',
      'Complete offer package preparation',
      'FPT setup & negotiations support',
      'GSA Advantage setup'
    ]
  },
  {
    id: 'gsa-services',
    name: 'GSA Services Schedule',
    price: 9500,
    category: 'gsa' as const,
    icon: FileText,
    color: 'slate',
    description: 'Complete GSA MAS application for professional and IT services.',
    highlights: [
      'Schedule eligibility assessment',
      'Labor category development',
      'Pricing strategy & justification',
      'Complete offer package preparation',
      'GSA Advantage setup'
    ]
  },
  {
    id: 'gsa-combined',
    name: 'GSA Combined Schedule',
    price: 12500,
    category: 'gsa' as const,
    icon: Layers,
    color: 'slate',
    description: 'Complete GSA MAS application for both products and services.',
    highlights: [
      'Products + Services SINs',
      'Comprehensive pricing strategy',
      'Complete offer package',
      'Full negotiations support',
      'GSA Advantage optimization'
    ]
  },
  {
    id: 'gsa-maintenance',
    name: 'GSA Contract Maintenance',
    price: 2500,
    category: 'gsa' as const,
    priceLabel: '/year',
    icon: Settings,
    color: 'slate',
    description: 'Annual GSA Schedule compliance and maintenance services.',
    highlights: [
      'Annual compliance review',
      'Price modifications',
      'SIN additions/deletions',
      'IFF reporting support',
      'Option period exercises'
    ]
  },
  {
    id: 'fcp-migration',
    name: 'FCP Baseline Migration',
    price: 1500,
    category: 'gsa' as const,
    icon: RefreshCw,
    color: 'slate',
    description: 'Migrate from legacy SIP to the new FAS Catalog Platform.',
    highlights: [
      'Current catalog assessment',
      'FCP baseline submission',
      'Compliance verification',
      'Platform training included',
      '7-day completion guarantee'
    ]
  }
];

const addons = [
  {
    id: 'addon-capstat',
    name: 'Additional Capabilities Statement',
    price: 750,
    category: 'addon' as const,
    description: 'Additional professionally designed capabilities statement for different service lines or agencies.'
  },
  {
    id: 'addon-campaign',
    name: 'Additional Email Campaign',
    price: 1500,
    category: 'addon' as const,
    description: '1,000 targeted contacts with campaign strategy, execution, and reporting.'
  },
  {
    id: 'addon-proposal',
    name: 'Additional Proposal Development',
    price: 5000,
    category: 'addon' as const,
    description: 'Complete proposal development beyond program allocation.'
  },
  {
    id: 'addon-state',
    name: 'State Registration Package',
    price: 500,
    category: 'addon' as const,
    description: 'Single state vendor registration and certification support.'
  }
];

const paymentTermOptions = [
  'Due upon receipt',
  'Net 15',
  'Net 30',
  '50% upfront, 50% at completion',
  '3 monthly installments',
  'Custom (specify in notes)'
];

// ============================================
// COMPONENT
// ============================================

export default function ProposalGenerator() {
  const [step, setStep] = useState(1);
  const [proposalData, setProposalData] = useState<ProposalData>({
    client: {
      companyName: '',
      contactName: '',
      contactTitle: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    },
    services: [],
    validDays: 30,
    notes: '',
    discount: 0,
    paymentTerms: 'Due upon receipt'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const updateClient = (field: keyof ClientInfo, value: string) => {
    setProposalData(prev => ({
      ...prev,
      client: { ...prev.client, [field]: value }
    }));
  };

  const toggleService = (service: typeof marketingPrograms[0] | typeof gsaServices[0] | typeof addons[0]) => {
    setProposalData(prev => {
      const exists = prev.services.find(s => s.id === service.id);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s.id !== service.id) };
      } else {
        return {
          ...prev,
          services: [...prev.services, {
            id: service.id,
            name: service.name,
            price: service.price,
            category: service.category,
            description: service.description
          }]
        };
      }
    });
  };

  const isServiceSelected = (id: string) => proposalData.services.some(s => s.id === id);

  const subtotal = proposalData.services.reduce((sum, s) => sum + s.price, 0);
  const discountAmount = (subtotal * proposalData.discount) / 100;
  const total = subtotal - discountAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const proposalDate = new Date();
  const validUntil = new Date(proposalDate.getTime() + proposalData.validDays * 24 * 60 * 60 * 1000);

  const canProceed = () => {
    if (step === 1) {
      return proposalData.client.companyName && proposalData.client.contactName && proposalData.client.email;
    }
    if (step === 2) {
      return proposalData.services.length > 0;
    }
    return true;
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    
    // Create a hidden iframe with the proposal content
    const printContent = document.getElementById('proposal-preview-content');
    if (!printContent) {
      setIsGenerating(false);
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to generate the PDF');
      setIsGenerating(false);
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Proposal - ${proposalData.client.companyName}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #1e293b;
            line-height: 1.6;
            background: white;
          }
          
          .proposal-container {
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.75in;
          }
          
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 3px solid #0f172a;
          }
          
          .company-name {
            font-size: 32px;
            font-weight: 700;
            color: #0f172a;
            letter-spacing: -0.5px;
          }
          
          .company-tagline {
            font-size: 14px;
            color: #64748b;
            margin-top: 4px;
          }
          
          .proposal-label {
            text-align: right;
          }
          
          .proposal-title {
            font-size: 14px;
            font-weight: 600;
            color: #dc2626;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .proposal-number {
            font-size: 12px;
            color: #64748b;
            margin-top: 4px;
          }
          
          .proposal-date {
            font-size: 12px;
            color: #64748b;
          }
          
          .client-section {
            margin-bottom: 40px;
          }
          
          .section-label {
            font-size: 11px;
            font-weight: 600;
            color: #dc2626;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
          }
          
          .client-name {
            font-size: 24px;
            font-weight: 700;
            color: #0f172a;
          }
          
          .client-contact {
            font-size: 14px;
            color: #475569;
            margin-top: 4px;
          }
          
          .client-details {
            font-size: 13px;
            color: #64748b;
            margin-top: 8px;
          }
          
          .intro-text {
            font-size: 15px;
            color: #475569;
            margin-bottom: 40px;
            line-height: 1.7;
          }
          
          .services-section {
            margin-bottom: 40px;
          }
          
          .service-item {
            padding: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin-bottom: 16px;
            page-break-inside: avoid;
          }
          
          .service-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
          }
          
          .service-name {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
          }
          
          .service-category {
            font-size: 11px;
            font-weight: 600;
            color: #dc2626;
            background: #fef2f2;
            padding: 4px 10px;
            border-radius: 4px;
            text-transform: uppercase;
          }
          
          .service-price {
            font-size: 20px;
            font-weight: 700;
            color: #0f172a;
          }
          
          .service-description {
            font-size: 13px;
            color: #64748b;
          }
          
          .totals-section {
            background: #f8fafc;
            padding: 24px;
            border-radius: 8px;
            margin-bottom: 40px;
          }
          
          .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            font-size: 14px;
          }
          
          .total-row.subtotal {
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 16px;
            margin-bottom: 8px;
          }
          
          .total-row.discount {
            color: #16a34a;
          }
          
          .total-row.final {
            border-top: 2px solid #0f172a;
            padding-top: 16px;
            margin-top: 8px;
            font-size: 20px;
            font-weight: 700;
          }
          
          .terms-section {
            margin-bottom: 40px;
          }
          
          .terms-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          
          .term-item {
            padding: 16px;
            background: #f8fafc;
            border-radius: 8px;
          }
          
          .term-label {
            font-size: 11px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .term-value {
            font-size: 14px;
            font-weight: 600;
            color: #0f172a;
            margin-top: 4px;
          }
          
          .notes-section {
            margin-bottom: 40px;
            padding: 20px;
            background: #fffbeb;
            border-radius: 8px;
            border-left: 4px solid #f59e0b;
          }
          
          .notes-title {
            font-size: 14px;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 8px;
          }
          
          .notes-content {
            font-size: 13px;
            color: #64748b;
            white-space: pre-wrap;
          }
          
          .signature-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-top: 60px;
            padding-top: 40px;
            border-top: 1px solid #e2e8f0;
          }
          
          .signature-block {
            
          }
          
          .signature-label {
            font-size: 11px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          
          .signature-line {
            border-bottom: 1px solid #0f172a;
            height: 40px;
            margin-bottom: 8px;
          }
          
          .signature-name {
            font-size: 14px;
            font-weight: 600;
            color: #0f172a;
          }
          
          .signature-title {
            font-size: 12px;
            color: #64748b;
          }
          
          .footer {
            margin-top: 60px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
          }
          
          .footer-text {
            font-size: 12px;
            color: #94a3b8;
          }
          
          .footer-contact {
            font-size: 13px;
            color: #64748b;
            margin-top: 8px;
          }
          
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .proposal-container {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="proposal-container">
          <div class="header">
            <div>
              <div class="company-name">GovCon Inc.</div>
              <div class="company-tagline">Federal Contractor Consulting</div>
            </div>
            <div class="proposal-label">
              <div class="proposal-title">Service Proposal</div>
              <div class="proposal-number">PROP-${Date.now().toString().slice(-8)}</div>
              <div class="proposal-date">${formatDate(proposalDate)}</div>
            </div>
          </div>
          
          <div class="client-section">
            <div class="section-label">Prepared For</div>
            <div class="client-name">${proposalData.client.companyName}</div>
            <div class="client-contact">${proposalData.client.contactName}${proposalData.client.contactTitle ? ', ' + proposalData.client.contactTitle : ''}</div>
            <div class="client-details">
              ${proposalData.client.email}${proposalData.client.phone ? ' • ' + proposalData.client.phone : ''}
              ${proposalData.client.address ? '<br>' + proposalData.client.address : ''}
              ${proposalData.client.city ? ', ' + proposalData.client.city : ''}${proposalData.client.state ? ', ' + proposalData.client.state : ''} ${proposalData.client.zip}
            </div>
          </div>
          
          <div class="intro-text">
            Thank you for the opportunity to provide this proposal. GovCon Inc. is committed to helping your company succeed in the federal marketplace. The following outlines our recommended services based on your business objectives.
          </div>
          
          <div class="services-section">
            <div class="section-label">Proposed Services</div>
            ${proposalData.services.map(service => {
              const fullService = [...marketingPrograms, ...gsaServices, ...addons].find(s => s.id === service.id);
              const categoryLabels: Record<string, string> = {
                'program': 'Marketing Program',
                'gsa': 'GSA Service',
                'addon': 'Add-On Service'
              };
              return `
                <div class="service-item">
                  <div class="service-header">
                    <div>
                      <div class="service-name">${service.name}</div>
                      <div class="service-category">${categoryLabels[service.category]}</div>
                    </div>
                    <div class="service-price">${formatCurrency(service.price)}</div>
                  </div>
                  <div class="service-description">${service.description || ''}</div>
                </div>
              `;
            }).join('')}
          </div>
          
          <div class="totals-section">
            <div class="total-row subtotal">
              <span>Subtotal</span>
              <span>${formatCurrency(subtotal)}</span>
            </div>
            ${proposalData.discount > 0 ? `
              <div class="total-row discount">
                <span>Discount (${proposalData.discount}%)</span>
                <span>-${formatCurrency(discountAmount)}</span>
              </div>
            ` : ''}
            <div class="total-row final">
              <span>Total Investment</span>
              <span>${formatCurrency(total)}</span>
            </div>
          </div>
          
          <div class="terms-section">
            <div class="section-label">Terms</div>
            <div class="terms-grid">
              <div class="term-item">
                <div class="term-label">Valid Until</div>
                <div class="term-value">${formatDate(validUntil)}</div>
              </div>
              <div class="term-item">
                <div class="term-label">Payment Terms</div>
                <div class="term-value">${proposalData.paymentTerms}</div>
              </div>
              <div class="term-item">
                <div class="term-label">Proposal Valid</div>
                <div class="term-value">${proposalData.validDays} Days</div>
              </div>
            </div>
          </div>
          
          ${proposalData.notes ? `
            <div class="notes-section">
              <div class="notes-title">Additional Notes</div>
              <div class="notes-content">${proposalData.notes}</div>
            </div>
          ` : ''}
          
          <div class="signature-section">
            <div class="signature-block">
              <div class="signature-label">Client Acceptance</div>
              <div class="signature-line"></div>
              <div class="signature-name">${proposalData.client.contactName}</div>
              <div class="signature-title">${proposalData.client.companyName}</div>
            </div>
            <div class="signature-block">
              <div class="signature-label">GovCon Inc.</div>
              <div class="signature-line"></div>
              <div class="signature-name">Don Sean</div>
              <div class="signature-title">Principal Consultant</div>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-text">This proposal is confidential and intended solely for the named recipient.</div>
            <div class="footer-contact">
              GovCon Inc. • (813) 665-0308 • info@govcon.info • www.govcon.info
            </div>
          </div>
        </div>
      </body>
      </html>
    `);

    printWindow.document.close();
    
    // Wait for content to load then trigger print
    setTimeout(() => {
      printWindow.print();
      setIsGenerating(false);
    }, 500);
  };

  return (
    <>
      <Helmet>
        <title>Proposal Generator — GovCon Inc.</title>
        <meta name="description" content="Generate professional service proposals for federal contracting clients." />
      </Helmet>

      {/* HEADER */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <FileText size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Proposal Generator</h1>
              <p className="text-slate-400">Create professional service agreements in minutes</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mt-8">
            {[
              { num: 1, label: 'Client Info' },
              { num: 2, label: 'Services' },
              { num: 3, label: 'Terms' },
              { num: 4, label: 'Review' }
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <button
                  onClick={() => setStep(s.num)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition",
                    step === s.num
                      ? "bg-white text-slate-900"
                      : step > s.num
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-slate-700/50 text-slate-400"
                  )}
                >
                  {step > s.num ? (
                    <CheckCircle size={18} />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-sm">
                      {s.num}
                    </span>
                  )}
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {i < 3 && <div className="w-8 h-px bg-slate-600 mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 bg-slate-50 min-h-[600px]">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* STEP 1: CLIENT INFO */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Client Information</h2>
                <p className="text-slate-600 mt-1">Enter the client details for this proposal</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={proposalData.client.companyName}
                      onChange={(e) => updateClient('companyName', e.target.value)}
                      placeholder="Acme Federal Solutions"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      value={proposalData.client.contactName}
                      onChange={(e) => updateClient('contactName', e.target.value)}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={proposalData.client.contactTitle}
                      onChange={(e) => updateClient('contactTitle', e.target.value)}
                      placeholder="CEO"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={proposalData.client.email}
                      onChange={(e) => updateClient('email', e.target.value)}
                      placeholder="john@acme.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={proposalData.client.phone}
                      onChange={(e) => updateClient('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={proposalData.client.address}
                      onChange={(e) => updateClient('address', e.target.value)}
                      placeholder="123 Business Ave, Suite 100"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={proposalData.client.city}
                      onChange={(e) => updateClient('city', e.target.value)}
                      placeholder="Tampa"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={proposalData.client.state}
                        onChange={(e) => updateClient('state', e.target.value)}
                        placeholder="FL"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        ZIP
                      </label>
                      <input
                        type="text"
                        value={proposalData.client.zip}
                        onChange={(e) => updateClient('zip', e.target.value)}
                        placeholder="33601"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SERVICES */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Select Services</h2>
                <p className="text-slate-600 mt-1">Choose the services to include in this proposal</p>
              </div>

              {/* Marketing Programs */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Rocket size={20} className="text-blue-600" />
                  Marketing Programs
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {marketingPrograms.map((program) => {
                    const Icon = program.icon;
                    const selected = isServiceSelected(program.id);
                    return (
                      <button
                        key={program.id}
                        onClick={() => toggleService(program)}
                        className={cn(
                          "p-5 rounded-xl border-2 text-left transition-all",
                          selected
                            ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/20"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        )}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center",
                            selected ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-600"
                          )}>
                            <Icon size={20} />
                          </div>
                          {selected && <CheckCircle size={20} className="text-blue-500" />}
                        </div>
                        <h4 className="font-bold text-slate-900">{program.name}</h4>
                        <p className="text-sm text-slate-500 mb-2">{program.duration}</p>
                        <p className="text-xl font-bold text-slate-900">{formatCurrency(program.price)}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* GSA Services */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Shield size={20} className="text-emerald-600" />
                  GSA Schedule Services
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {gsaServices.map((service) => {
                    const Icon = service.icon;
                    const selected = isServiceSelected(service.id);
                    return (
                      <button
                        key={service.id}
                        onClick={() => toggleService(service)}
                        className={cn(
                          "p-5 rounded-xl border-2 text-left transition-all",
                          selected
                            ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/20"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        )}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center",
                            selected ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"
                          )}>
                            <Icon size={20} />
                          </div>
                          {selected && <CheckCircle size={20} className="text-emerald-500" />}
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{service.name}</h4>
                        <p className="text-xl font-bold text-slate-900 mt-2">
                          {formatCurrency(service.price)}
                          {(service as any).priceLabel && <span className="text-sm font-normal text-slate-500">{(service as any).priceLabel}</span>}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Plus size={20} className="text-purple-600" />
                  Add-On Services
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addons.map((addon) => {
                    const selected = isServiceSelected(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleService(addon)}
                        className={cn(
                          "p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4",
                          selected
                            ? "border-purple-500 bg-purple-50 ring-2 ring-purple-500/20"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        )}
                      >
                        <div className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center shrink-0",
                          selected ? "border-purple-500 bg-purple-500" : "border-slate-300"
                        )}>
                          {selected && <Check size={14} className="text-white" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{addon.name}</h4>
                          <p className="text-sm text-slate-500">{addon.description}</p>
                        </div>
                        <div className="font-bold text-slate-900">{formatCurrency(addon.price)}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Summary */}
              {proposalData.services.length > 0 && (
                <div className="mt-8 p-6 bg-slate-900 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-400">{proposalData.services.length} services selected</div>
                      <div className="text-2xl font-bold">{formatCurrency(subtotal)}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {proposalData.services.map(s => (
                        <span key={s.id} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: TERMS */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Proposal Terms</h2>
                <p className="text-slate-600 mt-1">Set the terms and conditions for this proposal</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Proposal Valid For
                    </label>
                    <select
                      value={proposalData.validDays}
                      onChange={(e) => setProposalData(prev => ({ ...prev, validDays: Number(e.target.value) }))}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    >
                      <option value={15}>15 days</option>
                      <option value={30}>30 days</option>
                      <option value={45}>45 days</option>
                      <option value={60}>60 days</option>
                      <option value={90}>90 days</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Payment Terms
                    </label>
                    <select
                      value={proposalData.paymentTerms}
                      onChange={(e) => setProposalData(prev => ({ ...prev, paymentTerms: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    >
                      {paymentTermOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Discount (%)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="25"
                      step="5"
                      value={proposalData.discount}
                      onChange={(e) => setProposalData(prev => ({ ...prev, discount: Number(e.target.value) }))}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="w-20 text-center">
                      <span className="text-2xl font-bold text-slate-900">{proposalData.discount}%</span>
                    </div>
                  </div>
                  {proposalData.discount > 0 && (
                    <p className="text-sm text-emerald-600 mt-2">
                      Saving client {formatCurrency(discountAmount)} ({formatCurrency(subtotal)} → {formatCurrency(total)})
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={proposalData.notes}
                    onChange={(e) => setProposalData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Any special terms, conditions, or notes for this proposal..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Review Proposal</h2>
                  <p className="text-slate-600 mt-1">Review and generate your proposal</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPreview(true)}
                    className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition flex items-center gap-2"
                  >
                    <Eye size={18} />
                    Preview
                  </button>
                  <button
                    onClick={generatePDF}
                    disabled={isGenerating}
                    className="px-6 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition flex items-center gap-2 disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Download size={18} />
                        Generate PDF
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Client Summary */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-4">
                    <Building2 size={16} />
                    CLIENT
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{proposalData.client.companyName}</h3>
                  <p className="text-slate-600 mt-1">{proposalData.client.contactName}</p>
                  {proposalData.client.contactTitle && (
                    <p className="text-slate-500 text-sm">{proposalData.client.contactTitle}</p>
                  )}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <Mail size={14} />
                      {proposalData.client.email}
                    </p>
                    {proposalData.client.phone && (
                      <p className="text-sm text-slate-600 flex items-center gap-2">
                        <Phone size={14} />
                        {proposalData.client.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Services Summary */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-4">
                    <Layers size={16} />
                    SERVICES ({proposalData.services.length})
                  </div>
                  <div className="space-y-3">
                    {proposalData.services.map(service => (
                      <div key={service.id} className="flex justify-between items-center">
                        <span className="text-slate-700 text-sm">{service.name}</span>
                        <span className="font-semibold text-slate-900">{formatCurrency(service.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className="bg-slate-900 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 mb-4">
                    <DollarSign size={16} />
                    PRICING
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Subtotal</span>
                      <span>{formatCurrency(subtotal)}</span>
                    </div>
                    {proposalData.discount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount ({proposalData.discount}%)</span>
                        <span>-{formatCurrency(discountAmount)}</span>
                      </div>
                    )}
                    <div className="pt-3 border-t border-slate-700 flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Valid Until</span>
                      <span>{formatDate(validUntil)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Payment</span>
                      <span>{proposalData.paymentTerms}</span>
                    </div>
                  </div>
                </div>
              </div>

              {proposalData.notes && (
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-800 mb-2">
                    <AlertCircle size={16} />
                    NOTES
                  </div>
                  <p className="text-amber-900 whitespace-pre-wrap">{proposalData.notes}</p>
                </div>
              )}
            </div>
          )}

          {/* NAVIGATION */}
          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 && (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* PREVIEW MODAL */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Proposal Preview</h3>
              <div className="flex gap-2">
                <button
                  onClick={generatePDF}
                  className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition flex items-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-8 bg-slate-100">
              <div id="proposal-preview-content" className="bg-white shadow-xl rounded-lg p-12 max-w-[8.5in] mx-auto">
                {/* Preview content mimics PDF */}
                <div className="flex justify-between items-start mb-10 pb-8 border-b-4 border-slate-900">
                  <div>
                    <h1 className="text-4xl font-bold text-slate-900 tracking-tight">GovCon Inc.</h1>
                    <p className="text-slate-500 mt-1">Federal Contractor Consulting</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-red-600 uppercase tracking-wider">Service Proposal</div>
                    <div className="text-sm text-slate-500 mt-1">PROP-{Date.now().toString().slice(-8)}</div>
                    <div className="text-sm text-slate-500">{formatDate(proposalDate)}</div>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Prepared For</div>
                  <h2 className="text-3xl font-bold text-slate-900">{proposalData.client.companyName}</h2>
                  <p className="text-slate-600 mt-1">{proposalData.client.contactName}{proposalData.client.contactTitle && `, ${proposalData.client.contactTitle}`}</p>
                  <p className="text-slate-500 text-sm mt-2">
                    {proposalData.client.email}{proposalData.client.phone && ` • ${proposalData.client.phone}`}
                  </p>
                </div>

                <p className="text-slate-600 mb-10 leading-relaxed">
                  Thank you for the opportunity to provide this proposal. GovCon Inc. is committed to helping your company succeed in the federal marketplace. The following outlines our recommended services based on your business objectives.
                </p>

                <div className="mb-10">
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-4">Proposed Services</div>
                  <div className="space-y-4">
                    {proposalData.services.map(service => {
                      const categoryLabels: Record<string, string> = {
                        'program': 'Marketing Program',
                        'gsa': 'GSA Service',
                        'addon': 'Add-On Service'
                      };
                      return (
                        <div key={service.id} className="p-5 border border-slate-200 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-lg text-slate-900">{service.name}</h4>
                              <span className="inline-block mt-1 px-2 py-0.5 bg-red-50 text-red-600 text-xs font-bold rounded uppercase">
                                {categoryLabels[service.category]}
                              </span>
                            </div>
                            <div className="text-xl font-bold text-slate-900">{formatCurrency(service.price)}</div>
                          </div>
                          {service.description && (
                            <p className="text-slate-500 text-sm mt-3">{service.description}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mb-10">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-semibold">{formatCurrency(subtotal)}</span>
                  </div>
                  {proposalData.discount > 0 && (
                    <div className="flex justify-between py-2 text-emerald-600">
                      <span>Discount ({proposalData.discount}%)</span>
                      <span>-{formatCurrency(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-3 border-t-2 border-slate-900 mt-2 text-xl font-bold">
                    <span>Total Investment</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-xs font-bold text-slate-500 uppercase">Valid Until</div>
                    <div className="font-semibold text-slate-900 mt-1">{formatDate(validUntil)}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-xs font-bold text-slate-500 uppercase">Payment Terms</div>
                    <div className="font-semibold text-slate-900 mt-1">{proposalData.paymentTerms}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-xs font-bold text-slate-500 uppercase">Proposal Valid</div>
                    <div className="font-semibold text-slate-900 mt-1">{proposalData.validDays} Days</div>
                  </div>
                </div>

                {proposalData.notes && (
                  <div className="p-5 bg-amber-50 border-l-4 border-amber-400 rounded-lg mb-10">
                    <div className="font-bold text-slate-900 mb-2">Additional Notes</div>
                    <p className="text-slate-600 whitespace-pre-wrap">{proposalData.notes}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-16 mt-16 pt-10 border-t border-slate-200">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">Client Acceptance</div>
                    <div className="border-b border-slate-900 h-10 mb-2" />
                    <div className="font-semibold text-slate-900">{proposalData.client.contactName}</div>
                    <div className="text-slate-500 text-sm">{proposalData.client.companyName}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">GovCon Inc.</div>
                    <div className="border-b border-slate-900 h-10 mb-2" />
                    <div className="font-semibold text-slate-900">Don Sean</div>
                    <div className="text-slate-500 text-sm">Principal Consultant</div>
                  </div>
                </div>

                <div className="mt-16 pt-6 border-t border-slate-200 text-center">
                  <p className="text-slate-400 text-sm">This proposal is confidential and intended solely for the named recipient.</p>
                  <p className="text-slate-500 text-sm mt-2">GovCon Inc. • (813) 665-0308 • info@govcon.info • www.govcon.info</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}