import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, CheckCircle, Clock, Target, Rocket, 
  Calendar, Phone, Mail, BarChart3, Crown, ChevronDown,
  Zap, Shield, Star, TrendingUp, Check, FileText,
  Users, Database, MessageSquare, ClipboardCheck, Award,
  Building2, Briefcase, Globe, Search, PieChart, 
  ChevronRight, Layers, Handshake, CircleDollarSign,
  Timer, AlertCircle, CheckCheck, Sparkles, ArrowDown,
  Lightbulb, Repeat, Trophy, BookOpen, Compass, Eye,
  BarChart, Send, RefreshCw, Settings, Megaphone
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

// ============================================
// THE 5 C's - CORRECT VERSION
// ============================================

const fiveCsData = [
  {
    number: '1',
    name: 'Compliance',
    tagline: 'The Foundation',
    color: 'blue',
    icon: Shield,
    description: "Before you can bid, you must be registered. Before you can get paid, you must be compliant. This is where every federal contractor starts.",
    whatItMeans: "Compliance covers all required registrations, certifications, and ongoing maintenance that keeps you eligible to win and perform on government contracts.",
    elements: [
      { name: 'SAM.gov Registration', desc: 'The federal contractor database — required for all federal contracts' },
      { name: 'DSBS Profile', desc: 'SBA Dynamic Small Business Search — how COs find small businesses' },
      { name: 'FEMA Vendor Portal', desc: 'Emergency response contracting — a $20B+ market most miss' },
      { name: 'SBA Certifications', desc: '8(a), WOSB, SDVOSB, HUBZone — access to set-aside contracts' },
      { name: 'State Registrations', desc: 'State vendor portals and certifications for state/local work' },
      { name: 'Representations & Certifications', desc: 'Annual attestations required to maintain eligibility' },
    ],
    outcome: 'You become visible and eligible to pursue federal contracts.',
  },
  {
    number: '2',
    name: 'Concept',
    tagline: 'Build the Plan',
    color: 'emerald',
    icon: Lightbulb,
    description: "Before you pursue, you need a plan. Who are you? What do you sell? Who buys it? How do you stand out? This phase builds your strategic foundation.",
    whatItMeans: "Concept is about defining your value proposition, target market, and go-to-market strategy for federal contracting.",
    elements: [
      { name: 'Capabilities Statement', desc: 'Your federal business card — the #1 marketing document' },
      { name: 'Target Agency Analysis', desc: 'Which agencies buy what you sell and how much they spend' },
      { name: 'NAICS & PSC Strategy', desc: 'Proper classification determines what you can bid on' },
      { name: 'Competitive Positioning', desc: 'How you differentiate against incumbents and competitors' },
      { name: 'Pricing Strategy', desc: 'Understanding government pricing structures and expectations' },
      { name: 'Past Performance Mapping', desc: 'Translating commercial experience into federal relevance' },
    ],
    outcome: 'You have a clear strategy and professional materials to pursue opportunities.',
  },
  {
    number: '3',
    name: 'Capture',
    tagline: 'Find Opportunities',
    color: 'rose',
    icon: Target,
    description: "Now you hunt. Capture is the systematic process of finding opportunities, qualifying them, and positioning to win — before the RFP even drops.",
    whatItMeans: "Capture management is about building a pipeline of qualified opportunities and executing pre-RFP activities to maximize win probability.",
    elements: [
      { name: 'Opportunity Identification', desc: 'Finding opportunities across 2,200+ bid sources' },
      { name: 'Bid/No-Bid Analysis', desc: 'Qualifying opportunities worth your time and resources' },
      { name: 'Competitive Intelligence', desc: 'Understanding incumbents, competitors, and pricing' },
      { name: 'Pre-RFP Positioning', desc: 'Shaping requirements and building relationships early' },
      { name: 'Pipeline Management', desc: 'Tracking opportunities from identification to award' },
      { name: 'Teaming Strategy', desc: 'Finding partners to strengthen your position' },
    ],
    outcome: 'You have a qualified pipeline of opportunities you can actually win.',
  },
  {
    number: '4',
    name: 'Compete',
    tagline: 'Win the Work',
    color: 'amber',
    icon: Trophy,
    description: "The RFP drops. Now you compete. This is proposal development, pricing, reviews, and submission — the make-or-break moment.",
    whatItMeans: "Compete is the proposal phase — turning your positioning into a winning submission that scores highest against evaluation criteria.",
    elements: [
      { name: 'Proposal Management', desc: 'End-to-end coordination of the proposal process' },
      { name: 'Technical Writing', desc: 'Compelling solutions that address every requirement' },
      { name: 'Pricing Development', desc: 'Competitive pricing that protects your margins' },
      { name: 'Compliance Review', desc: 'Ensuring you answer every requirement completely' },
      { name: 'Red Team Reviews', desc: 'Simulating government evaluation to find weaknesses' },
      { name: 'Production & Submission', desc: 'Final packaging and on-time delivery' },
    ],
    outcome: 'You submit winning proposals that score highest and get awarded.',
  },
  {
    number: '5',
    name: 'Continue',
    tagline: 'Sustain & Grow',
    color: 'purple',
    icon: Repeat,
    description: "You won. Now perform, maintain compliance, and set up for recompetes. Continuity keeps you in the game long-term.",
    whatItMeans: "Continue is about contract performance, compliance maintenance, and positioning for follow-on work and recompetes.",
    elements: [
      { name: 'Contract Compliance', desc: 'Meeting all contractual and regulatory requirements' },
      { name: 'Registration Renewals', desc: 'Keeping SAM.gov, certs, and profiles current' },
      { name: 'Performance Documentation', desc: 'Building past performance for future bids' },
      { name: 'Recompete Positioning', desc: 'Starting capture 18 months before contract ends' },
      { name: 'Contract Modifications', desc: 'Adding scope, extending periods, adjusting terms' },
      { name: 'Growth Strategy', desc: 'Expanding into new agencies and contract vehicles' },
    ],
    outcome: 'You build a sustainable federal practice that grows year over year.',
  },
];

const processSteps = [
  { step: 1, title: 'Get Compliant', desc: 'Registrations & Certs', color: 'blue' },
  { step: 2, title: 'Build Concept', desc: 'Strategy & Materials', color: 'emerald' },
  { step: 3, title: 'Capture Opps', desc: 'Pipeline & Intelligence', color: 'rose' },
  { step: 4, title: 'Compete & Win', desc: 'Proposals & Awards', color: 'amber' },
  { step: 5, title: 'Continue Growing', desc: 'Perform & Expand', color: 'purple' },
];

// ============================================
// MARKETING PROGRAMS DATA - EXPANDED
// ============================================

const marketingPrograms = [
  {
    id: 'fedstart',
    name: 'FedStart',
    tagline: 'Your Compliance Foundation',
    duration: '3 Months',
    price: 3200,
    icon: Rocket,
    gradient: 'from-blue-600 to-blue-800',
    bgLight: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    bg: 'bg-blue-600',
    idealFor: 'New contractors entering the federal market',
    overview: 'Everything you need to become a qualified, visible federal contractor. We handle all your registrations, certifications, and create your first marketing foundation — so you can start pursuing contracts within 30 days.',
    csCoverage: [
      { c: 'Compliance', level: 'Full' },
      { c: 'Concept', level: 'Foundation' },
    ],
    keyMetrics: [
      { metric: '5 Days', label: 'SAM.gov Registration' },
      { metric: '14 Days', label: 'SBA Cert Submission' },
      { metric: '1,000', label: 'Marketing Contacts' },
      { metric: 'Monthly', label: 'Strategy Calls' },
    ],
    deliverables: [
      {
        category: 'Compliance Services',
        icon: Shield,
        items: [
          { 
            name: 'SAM.gov Registration & Optimization', 
            timeline: '5 Business Days',
            description: 'Complete System for Award Management registration including CAGE code acquisition, UEI validation, entity information, NAICS code selection, and profile optimization.',
            details: [
              'Entity registration and validation',
              'CAGE code acquisition',
              'NAICS code strategy (up to 10 codes)',
              'Goods/services classification',
              'Core data optimization for searchability',
              'Representations and certifications',
            ]
          },
          { 
            name: 'DSBS Profile Creation', 
            timeline: '14 Business Days',
            description: 'SBA Dynamic Small Business Search profile — the database contracting officers are required to check before making awards under $250K.',
            details: [
              'Profile creation and optimization',
              'Capability narrative development',
              'Keyword optimization for searches',
              'Certification linkage',
              'Search ranking improvement',
            ]
          },
          { 
            name: 'FEMA Vendor Portal Registration', 
            timeline: '14 Business Days',
            description: 'Access to FEMA emergency response contracting — a massive market most contractors completely miss.',
            details: [
              'Vendor portal registration',
              'Capability documentation',
              'Emergency response classification',
              'Geographic coverage setup',
            ]
          },
          { 
            name: 'SBA Certification Submissions', 
            timeline: '14 Days to Submit',
            description: 'We analyze your eligibility and submit applications for every SBA certification you qualify for.',
            details: [
              'Eligibility analysis for all programs',
              '8(a) Business Development application',
              'WOSB/EDWOSB certification',
              'SDVOSB/VOSB certification',
              'HUBZone certification',
              'Documentation preparation',
              'Application submission and tracking',
            ]
          },
        ]
      },
      {
        category: 'Concept Development',
        icon: Lightbulb,
        items: [
          { 
            name: 'Professional Capabilities Statement', 
            timeline: 'Weeks 2-3',
            description: 'The single most important marketing document in federal contracting. Professionally designed to make an impression in 30 seconds.',
            details: [
              'Professional graphic design',
              'Core competency articulation',
              'Differentiator identification',
              'Past performance formatting',
              'Certification and contact display',
              'Print-ready and digital versions',
              'Editable template for updates',
            ]
          },
          { 
            name: 'Marketing Strategy Document', 
            timeline: 'Week 4',
            description: 'Your attack plan. Which agencies, which opportunities, which approach — customized to your capabilities.',
            details: [
              'Target agency identification (top 10)',
              'Agency spend analysis',
              'Competitor landscape overview',
              'Approach strategy recommendations',
              'Introduction templates',
              'Timeline and milestones',
            ]
          },
          { 
            name: '1,000 Targeted Contacts', 
            timeline: 'Week 4',
            description: 'Curated contact list of contracting officers, small business specialists, and program managers at your target agencies.',
            details: [
              '400 Contracting Officers',
              '200 Small Business Specialists',
              '200 Program Managers',
              '200 Prime Contractors',
              'Contact verification',
              'Agency and role mapping',
            ]
          },
        ]
      },
      {
        category: 'Ongoing Support',
        icon: MessageSquare,
        items: [
          { 
            name: 'Monthly Capture Calls', 
            timeline: 'Months 1-3',
            description: 'Standing strategy sessions to review progress, answer questions, and adjust approach.',
            details: [
              '60-minute monthly calls',
              'Opportunity review',
              'Strategy adjustments',
              'Q&A sessions',
              'Introduction facilitation',
            ]
          },
          { 
            name: 'One RFP Review', 
            timeline: 'When Ready',
            description: 'Professional review of your first proposal before submission.',
            details: [
              'Compliance matrix verification',
              'Technical approach review',
              'Pricing sanity check',
              'Narrative strengthening',
              'Submission checklist',
            ]
          },
        ]
      },
    ],
    timeline: [
      { phase: 'Week 1', title: 'Kickoff & SAM.gov', items: ['Initial consultation & document collection', 'SAM.gov registration submitted', 'CAGE code initiated'] },
      { phase: 'Week 2', title: 'Registrations & Certs', items: ['DSBS profile created', 'FEMA portal registration', 'SBA certification applications submitted'] },
      { phase: 'Weeks 3-4', title: 'Marketing Foundation', items: ['Capabilities statement design', 'Marketing strategy document', '1,000 contacts delivered'] },
      { phase: 'Months 2-3', title: 'Ongoing Support', items: ['Monthly strategy calls', 'Opportunity guidance', 'RFP review when ready'] },
    ],
    notIncluded: [
      'GovCon Portal access',
      'Marketing campaign execution',
      'Multiple proposal reviews',
      'Dedicated capture management',
    ],
    upgradeNote: 'Upgrade to Growth anytime — full FedStart investment applies as credit.',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Scale Your Pipeline',
    duration: '6 Months',
    price: 6500,
    icon: BarChart3,
    gradient: 'from-rose-600 to-rose-800',
    bgLight: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'border-rose-200',
    bg: 'bg-rose-600',
    popular: true,
    idealFor: 'Contractors ready to actively pursue and win contracts',
    overview: 'You have your foundation — now it\'s time to hunt. Growth adds the tools, data, and campaigns you need to build a real pipeline and start winning. Most clients see their first contract wins during this program.',
    includesPrevious: 'FedStart',
    csCoverage: [
      { c: 'Compliance', level: 'Full' },
      { c: 'Concept', level: 'Full' },
      { c: 'Capture', level: 'Full' },
      { c: 'Compete', level: 'Reviews' },
    ],
    keyMetrics: [
      { metric: '2,200+', label: 'Bid Sources' },
      { metric: '2,000', label: 'Campaign Contacts' },
      { metric: 'Unlimited', label: 'RFP Reviews' },
      { metric: '6 Months', label: 'Portal Access' },
    ],
    deliverables: [
      {
        category: 'Everything in FedStart',
        icon: CheckCheck,
        items: [
          { 
            name: 'Complete FedStart Package', 
            timeline: 'Month 1',
            description: 'All compliance services, concept development, and support from FedStart included.',
            details: [
              'SAM.gov, DSBS, FEMA registrations',
              'SBA certification submissions',
              'Capabilities statement',
              'Marketing strategy + 1,000 contacts',
              'Monthly support calls',
            ]
          },
        ]
      },
      {
        category: 'Capture Tools & Intelligence',
        icon: Target,
        items: [
          { 
            name: 'GovCon Portal Access', 
            timeline: '6 Months',
            description: 'Stop checking 50 different websites. Our portal aggregates 2,200+ federal and state bid sources into one searchable interface.',
            details: [
              'Full portal access (6 months)',
              '2,200+ bid source aggregation',
              'Custom search filter setup',
              'Daily bid alert configuration',
              'Award data and history',
              'Competitor tracking',
              'Forecast data access',
              'Training session included',
            ]
          },
          { 
            name: 'Daily Bid Alerts', 
            timeline: 'Automated',
            description: 'Wake up every morning to a curated list of opportunities matching your capabilities.',
            details: [
              'Customized to your NAICS codes',
              'Filtered by agency preferences',
              'Set-aside matching',
              'Geographic filtering',
              'Delivered to your inbox daily',
            ]
          },
          { 
            name: 'Opportunity Qualification Support', 
            timeline: 'Ongoing',
            description: 'We help you decide which opportunities to pursue and which to skip.',
            details: [
              'Bid/no-bid analysis framework',
              'Win probability assessment',
              'Competitive landscape review',
              'Resource requirement estimation',
            ]
          },
        ]
      },
      {
        category: 'Marketing Campaigns',
        icon: Megaphone,
        items: [
          { 
            name: '2 Email Marketing Campaigns', 
            timeline: 'Months 2 & 4',
            description: 'Professional outreach campaigns targeting contracting officers and prime contractors. These aren\'t spam blasts — they\'re strategic introductions that generate meetings.',
            details: [
              'Campaign strategy development',
              '1,000 contacts per campaign (2,000 total)',
              'Target list curation and verification',
              'Email copy and design',
              'Campaign execution from your domain',
              'Open/click/reply tracking',
              'Response handling guidance',
              'Performance reporting',
            ]
          },
          { 
            name: 'Prime Contractor Targeting', 
            timeline: 'Months 2-6',
            description: '40% of federal dollars flow through primes to subs. We identify primes who need your capabilities.',
            details: [
              'Prime contractor identification',
              'Subcontracting opportunity research',
              'Introduction facilitation',
              'Teaming agreement guidance',
              'Mentor-protégé exploration',
            ]
          },
        ]
      },
      {
        category: 'Proposal Support',
        icon: FileText,
        items: [
          { 
            name: 'Unlimited Gold Team RFP Reviews', 
            timeline: 'As Needed',
            description: 'Every proposal you submit gets a professional review. Our team evaluates your submission exactly like government evaluators would.',
            details: [
              'Unlimited reviews during 6 months',
              'Compliance matrix verification',
              'Technical approach evaluation',
              'Pricing review',
              'Strengths/weaknesses report',
              'Specific fix recommendations',
              'Debrief call after each review',
              '3-5 day turnaround',
            ]
          },
        ]
      },
      {
        category: 'Ongoing Support',
        icon: MessageSquare,
        items: [
          { 
            name: 'Regular Strategy Sessions', 
            timeline: 'Monthly',
            description: 'Standing meetings throughout the engagement to review pipeline, adjust strategy, and keep momentum.',
            details: [
              'Monthly 60-minute calls',
              'Pipeline review',
              'Campaign performance analysis',
              'Strategy adjustments',
              'Q&A and guidance',
            ]
          },
        ]
      },
    ],
    timeline: [
      { phase: 'Month 1', title: 'Foundation + Portal', items: ['Complete FedStart deliverables', 'Portal access and training', 'Search filters configured', 'Daily alerts activated'] },
      { phase: 'Month 2', title: 'Campaign 1 Launch', items: ['First campaign strategy', 'Target list curation (1,000)', 'Campaign execution', 'Begin opportunity pursuit'] },
      { phase: 'Months 3-4', title: 'Active Pursuit', items: ['Proposal reviews as needed', 'Opportunity qualification', 'Prime contractor outreach', 'Pipeline building'] },
      { phase: 'Month 4-5', title: 'Campaign 2 Launch', items: ['Second campaign strategy', 'New target list (1,000)', 'Campaign execution', 'Continued pursuit'] },
      { phase: 'Month 6', title: 'Acceleration', items: ['Pipeline review', 'Strategy refinement', 'Transition planning', 'Upgrade discussion'] },
    ],
    notIncluded: [
      'Dedicated capture manager',
      'Full proposal writing',
      'Quarterly campaigns',
      'Year-round compliance management',
    ],
    upgradeNote: 'Upgrade to Prime anytime — full Growth investment applies as credit.',
  },
  {
    id: 'prime',
    name: 'Prime',
    tagline: 'Full-Service Partnership',
    duration: '12 Months',
    price: 15500,
    icon: Crown,
    gradient: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
    bg: 'bg-amber-500',
    idealFor: 'Serious contractors committed to building a federal practice',
    overview: 'We become your business development team. Dedicated capture management, quarterly campaigns, up to 5 full proposal developments, and year-round compliance. This is for contractors who are serious about winning.',
    includesPrevious: 'Growth',
    csCoverage: [
      { c: 'Compliance', level: 'Full + Managed' },
      { c: 'Concept', level: 'Full + Ongoing' },
      { c: 'Capture', level: 'Dedicated' },
      { c: 'Compete', level: 'Full Proposals' },
      { c: 'Continue', level: 'Full' },
    ],
    keyMetrics: [
      { metric: 'Dedicated', label: 'Capture Manager' },
      { metric: '5', label: 'Full Proposals' },
      { metric: '4', label: 'Campaigns/Year' },
      { metric: 'Same Day', label: 'Response Time' },
    ],
    deliverables: [
      {
        category: 'Everything in Growth',
        icon: CheckCheck,
        items: [
          { 
            name: 'Complete Growth Package', 
            timeline: 'Included',
            description: 'All FedStart and Growth services included as your foundation.',
            details: [
              'All compliance registrations',
              'Capabilities statement and strategy',
              'GovCon Portal (12 months)',
              'Daily bid alerts',
              '2 marketing campaigns',
              'Unlimited RFP reviews',
            ]
          },
        ]
      },
      {
        category: 'Dedicated Capture Management',
        icon: PieChart,
        items: [
          { 
            name: 'Dedicated Capture Manager', 
            timeline: '12 Months',
            description: 'Your own capture manager who builds and maintains your opportunity pipeline. This is like having a full-time BD person without the salary.',
            details: [
              'Named capture manager assigned',
              'Weekly pipeline updates',
              'Opportunity identification and qualification',
              'Pre-RFP intelligence gathering',
              'Agency relationship mapping',
              'Win probability assessments',
              'Bid/no-bid recommendations',
              '30-50 opportunities tracked',
              '10-15 qualified pursuits active',
            ]
          },
          { 
            name: 'Pipeline Dashboard', 
            timeline: 'Always Current',
            description: 'Living pipeline spreadsheet tracking every opportunity from identification through award.',
            details: [
              'Real-time opportunity tracking',
              'Stage progression monitoring',
              'Action item management',
              'Win/loss tracking',
              'Forecast reporting',
            ]
          },
        ]
      },
      {
        category: 'Quarterly Marketing Campaigns',
        icon: Megaphone,
        items: [
          { 
            name: '4 Full Marketing Campaigns', 
            timeline: 'Q1, Q2, Q3, Q4',
            description: 'Sustained market presence with quarterly campaigns targeting different verticals and audiences throughout the year.',
            details: [
              'Q1: Fiscal year planning targeting',
              'Q2: Mid-year budget spending',
              'Q3: Year-end use-it-or-lose-it',
              'Q4: Next year positioning',
              'Full reply management included',
              'Meeting scheduling support',
              'Campaign performance reporting',
              'Year-over-year optimization',
            ]
          },
        ]
      },
      {
        category: 'Full Proposal Development',
        icon: FileText,
        items: [
          { 
            name: 'Up to 5 Complete Proposals', 
            timeline: 'As Opportunities Arise',
            description: 'We don\'t just review — we write. Complete proposal development from RFP analysis through submission-ready package. This alone is worth $25,000+.',
            details: [
              '5 full proposal developments included',
              'RFP analysis and compliance matrix',
              'Win theme development',
              'Technical approach writing',
              'Management plan development',
              'Past performance volume',
              'Pricing strategy and development',
              'Graphics and visual elements',
              'Red team review',
              'Final production and formatting',
              '10-14 day typical turnaround',
            ]
          },
        ]
      },
      {
        category: 'Year-Round Compliance',
        icon: Shield,
        items: [
          { 
            name: 'Compliance Management', 
            timeline: 'Continuous',
            description: 'Never worry about expirations or renewals. We monitor everything and handle it proactively.',
            details: [
              'SAM.gov annual renewal',
              'Certification maintenance',
              'Representations updates',
              'Size standard monitoring',
              'Expiration alerts',
              'Proactive renewal handling',
              'Regulation change alerts',
            ]
          },
        ]
      },
      {
        category: 'Priority Support',
        icon: Zap,
        items: [
          { 
            name: 'Priority Access', 
            timeline: 'Same Day',
            description: 'Questions don\'t wait for monthly calls. Direct access to senior consultants with same-day response.',
            details: [
              'Same-day email response',
              'Live phone or 2-hour callback',
              '1-hour text response',
              'Emergency escalation available',
              'After-hours availability',
              'Priority scheduling',
            ]
          },
          { 
            name: 'Quarterly Business Reviews', 
            timeline: '4x/Year',
            description: 'Comprehensive strategic reviews every quarter to assess results and adjust approach.',
            details: [
              '90-minute QBR sessions',
              'Win/loss analysis',
              'Pipeline health assessment',
              'Market trend briefing',
              'Strategy adjustments',
              'Next quarter planning',
              'Goal setting and accountability',
            ]
          },
        ]
      },
    ],
    timeline: [
      { phase: 'Month 1', title: 'Foundation & Setup', items: ['Complete Growth setup', 'Capture manager assigned', 'Initial pipeline build', 'Strategy alignment'] },
      { phase: 'Q1 (Months 2-3)', title: 'Ramp Up', items: ['First campaign launch', 'Pipeline development', 'First proposal pursuits', 'QBR #1'] },
      { phase: 'Q2 (Months 4-6)', title: 'Active Pursuit', items: ['Second campaign', 'Proposals 1-2', 'Pipeline refinement', 'QBR #2'] },
      { phase: 'Q3 (Months 7-9)', title: 'Acceleration', items: ['Third campaign', 'Proposals 3-4', 'Strategy optimization', 'QBR #3'] },
      { phase: 'Q4 (Months 10-12)', title: 'Optimization & Renewal', items: ['Fourth campaign', 'Proposal 5', 'Year review', 'Renewal planning', 'QBR #4'] },
    ],
    notIncluded: [],
    upgradeNote: null,
  },
];

// ============================================
// GSA SERVICES
// ============================================

const gsaServices = [
  {
    id: 'gsa-submission',
    name: 'GSA Schedule Submission',
    price: 5500,
    timeline: '60-90 Days',
    icon: FileText,
    description: 'Complete GSA Multiple Award Schedule (MAS) application from initial assessment through contract award.',
    features: [
      'Schedule eligibility assessment',
      'SIN (Special Item Number) selection strategy',
      'Pricing strategy development',
      'Complete offer package preparation',
      'FPT (Federal Procurement Tool) setup',
      'Negotiations support',
      'Award documentation',
      'GSA Advantage setup',
    ],
    requirements: [
      '2+ years in business',
      '2 years financial statements',
      'Relevant past performance',
      'Commercial pricing history',
    ],
    process: [
      { phase: 'Assessment', time: 'Week 1', desc: 'Evaluate eligibility and determine best SINs' },
      { phase: 'Preparation', time: 'Weeks 2-4', desc: 'Gather documentation, develop pricing' },
      { phase: 'Submission', time: 'Week 5', desc: 'Submit complete offer package' },
      { phase: 'Negotiations', time: 'Weeks 6-12', desc: 'Respond to GSA questions, negotiate terms' },
      { phase: 'Award', time: 'Week 12+', desc: 'Receive contract, begin GSA Advantage setup' },
    ],
  },
  {
    id: 'gsa-maintenance',
    name: 'GSA Schedule Maintenance',
    price: 2500,
    timeline: 'Annual',
    icon: Settings,
    description: 'Keep your GSA Schedule compliant and competitive with ongoing management.',
    features: [
      'Annual compliance review',
      'Price increase modifications',
      'SIN additions and deletions',
      'Mass modification processing',
      'Industrial Funding Fee (IFF) reporting',
      'Sales reporting support',
      'Option period exercises',
      'Catalog updates',
    ],
  },
  {
    id: 'fcp-migration',
    name: 'FCP Baseline Migration',
    price: 1500,
    timeline: '7-14 Days',
    icon: RefreshCw,
    description: 'Migrate from legacy SIP/EDI to the new FAS Catalog Platform (FCP) before your deadline.',
    features: [
      'Current catalog assessment',
      'Product/Services Plus file creation',
      'FCP baseline submission',
      'Compliance verification',
      'Training on new platform',
    ],
  },
];

// ============================================
// COMPARISON DATA
// ============================================

const comparisonFeatures = [
  { category: 'Compliance (C1)', features: [
    { name: 'SAM.gov Registration', fedstart: true, growth: true, prime: true },
    { name: 'DSBS & FEMA Portals', fedstart: true, growth: true, prime: true },
    { name: 'SBA Certification Submissions', fedstart: true, growth: true, prime: true },
    { name: 'State Registrations', fedstart: 'Available', growth: 'Available', prime: 'Included' },
    { name: 'Compliance Updates', fedstart: '3 months', growth: '6 months', prime: '12 months' },
    { name: 'Renewal Management', fedstart: false, growth: false, prime: true },
  ]},
  { category: 'Concept (C2)', features: [
    { name: 'Capabilities Statement', fedstart: true, growth: true, prime: true },
    { name: 'Marketing Strategy', fedstart: true, growth: true, prime: 'Ongoing' },
    { name: 'Contact Lists', fedstart: '1,000', growth: '2,000', prime: 'Quarterly' },
    { name: 'Email Campaigns', fedstart: false, growth: '2', prime: '4' },
    { name: 'Prime Targeting', fedstart: false, growth: true, prime: true },
  ]},
  { category: 'Capture (C3)', features: [
    { name: 'GovCon Portal Access', fedstart: false, growth: '6 months', prime: '12 months' },
    { name: 'Daily Bid Alerts', fedstart: false, growth: true, prime: true },
    { name: 'Opportunity Qualification', fedstart: false, growth: true, prime: true },
    { name: 'Capture Management', fedstart: false, growth: 'Guided', prime: 'Dedicated' },
    { name: 'Pipeline Dashboard', fedstart: false, growth: false, prime: true },
  ]},
  { category: 'Compete (C4)', features: [
    { name: 'RFP Reviews', fedstart: '1', growth: 'Unlimited', prime: 'Unlimited' },
    { name: 'Full Proposal Writing', fedstart: false, growth: false, prime: 'Up to 5' },
    { name: 'Pricing Support', fedstart: false, growth: true, prime: 'Full' },
    { name: 'Red Team Reviews', fedstart: false, growth: false, prime: true },
  ]},
  { category: 'Continue (C5)', features: [
    { name: 'Strategy Calls', fedstart: 'Monthly', growth: 'Monthly', prime: 'Priority' },
    { name: 'Response Time', fedstart: '48 hrs', growth: '24 hrs', prime: 'Same day' },
    { name: 'Quarterly Business Reviews', fedstart: false, growth: false, prime: '4x/year' },
    { name: 'Year-Round Compliance', fedstart: false, growth: false, prime: true },
  ]},
];

// ============================================
// STATS
// ============================================

const stats = [
  { value: '200+', label: 'Contractors Launched', icon: Rocket },
  { value: '87%', label: 'Client Win Rate', icon: Target },
  { value: '$109M+', label: 'Awards Facilitated', icon: CircleDollarSign },
  { value: '14 Days', label: 'Cert Turnaround', icon: Timer },
];

// ============================================
// HELPER
// ============================================

const getColorClasses = (color: string) => ({
  bg: color === 'blue' ? 'bg-blue-600' : color === 'emerald' ? 'bg-emerald-600' : color === 'rose' ? 'bg-rose-600' : color === 'amber' ? 'bg-amber-500' : 'bg-purple-600',
  bgLight: color === 'blue' ? 'bg-blue-50' : color === 'emerald' ? 'bg-emerald-50' : color === 'rose' ? 'bg-rose-50' : color === 'amber' ? 'bg-amber-50' : 'bg-purple-50',
  text: color === 'blue' ? 'text-blue-600' : color === 'emerald' ? 'text-emerald-600' : color === 'rose' ? 'text-rose-600' : color === 'amber' ? 'text-amber-600' : 'text-purple-600',
  border: color === 'blue' ? 'border-blue-200' : color === 'emerald' ? 'border-emerald-200' : color === 'rose' ? 'border-rose-200' : color === 'amber' ? 'border-amber-200' : 'border-purple-200',
  gradient: color === 'blue' ? 'from-blue-500 to-blue-700' : color === 'emerald' ? 'from-emerald-500 to-emerald-700' : color === 'rose' ? 'from-rose-500 to-rose-700' : color === 'amber' ? 'from-amber-400 to-orange-600' : 'from-purple-500 to-purple-700',
});

// ============================================
// COMPONENT
// ============================================

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [expandedC, setExpandedC] = useState<string | null>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const fiveCsRef = useRef<HTMLDivElement>(null);

  const scrollToComparison = () => comparisonRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToPrograms = () => programsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToFiveCs = () => fiveCsRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Helmet>
        <title>Federal Contractor Programs — GovCon Inc.</title>
        <meta name="description" content="Win federal contracts with our proven 5 C's methodology. FedStart, Growth, and Prime programs plus GSA Schedule services." />
      </Helmet>

      {/* HERO */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm text-white/80 mb-6">
              <Sparkles size={16} className="text-amber-400" />
              Federal Contractor Programs
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Win Federal Contracts
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Built on our proven 5 C's methodology: Compliance, Concept, Capture, Compete, and Continue. Three programs with clear deliverables and guaranteed timelines.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={scrollToFiveCs} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition">
                The 5 C's <ArrowDown size={18} />
              </button>
              <button onClick={scrollToPrograms} className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition">
                View Programs
              </button>
              <button onClick={scrollToComparison} className="px-6 py-3 text-white/70 hover:text-white transition">
                Compare All →
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <Icon size={20} className="text-amber-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE 5 C's METHODOLOGY */}
      <section ref={fiveCsRef} className="py-20 lg:py-28 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-700 font-medium mb-6">
              <Layers size={16} />
              Our Proven Framework
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">The 5 C's of Federal Contracting</h2>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              Every successful government contractor masters these five disciplines. Our programs are structured around this proven methodology.
            </p>
          </div>

          {/* Process Flow - Visual */}
          <div className="relative py-8 mb-16">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-rose-500 to-purple-500 -translate-y-1/2" />
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step) => {
                const colors = getColorClasses(step.color);
                return (
                  <div key={step.step} className="flex flex-col items-center text-center">
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 relative z-10 shadow-lg bg-gradient-to-br", colors.gradient)}>
                      {step.step}
                    </div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5 C's Expandable Cards */}
          <div className="space-y-4">
            {fiveCsData.map((c) => {
              const Icon = c.icon;
              const colors = getColorClasses(c.color);
              const isExpanded = expandedC === c.number;
              
              return (
                <div key={c.number} className={cn("rounded-2xl border-2 transition-all overflow-hidden", colors.border, isExpanded ? "shadow-lg" : "")}>
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => setExpandedC(isExpanded ? null : c.number)}
                    className="w-full p-6 flex items-center gap-6 text-left hover:bg-slate-50 transition"
                  >
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0 bg-gradient-to-br", colors.gradient)}>
                      <Icon size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className={cn("text-sm font-bold px-2 py-0.5 rounded", colors.bgLight, colors.text)}>C{c.number}</span>
                        <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
                        <span className="text-slate-500">—</span>
                        <span className={cn("font-medium", colors.text)}>{c.tagline}</span>
                      </div>
                      <p className="text-slate-600 mt-1">{c.description}</p>
                    </div>
                    <ChevronDown size={24} className={cn("text-slate-400 shrink-0 transition-transform", isExpanded && "rotate-180")} />
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className={cn("px-6 pb-6 border-t", colors.border)}>
                      <div className="pt-6 grid lg:grid-cols-2 gap-8">
                        {/* What It Means */}
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3">What It Means</h4>
                          <p className="text-slate-600 mb-6">{c.whatItMeans}</p>
                          
                          <div className={cn("p-4 rounded-xl", colors.bgLight)}>
                            <h5 className={cn("font-bold mb-2", colors.text)}>Outcome</h5>
                            <p className="text-slate-700">{c.outcome}</p>
                          </div>
                        </div>

                        {/* Elements */}
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3">Key Elements</h4>
                          <div className="space-y-3">
                            {c.elements.map((el, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <Check size={18} className={cn("shrink-0 mt-0.5", colors.text)} />
                                <div>
                                  <span className="font-medium text-slate-900">{el.name}</span>
                                  <p className="text-sm text-slate-500">{el.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARKETING PROGRAMS */}
      <section ref={programsRef} className="py-20 lg:py-28 bg-slate-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Marketing Programs</h2>
            <p className="mt-4 text-lg text-slate-600">Choose your level of support — upgrade anytime with full credit applied</p>
          </div>

          {/* Program Cards */}
          <div className="space-y-8">
            {marketingPrograms.map((program) => {
              const Icon = program.icon;
              const isExpanded = expandedProgram === program.id;
              
              return (
                <div 
                  key={program.id}
                  className={cn(
                    "rounded-3xl border-2 bg-white transition-all overflow-hidden",
                    program.popular ? "border-rose-300 shadow-xl" : "border-slate-200",
                  )}
                >
                  {program.popular && (
                    <div className="bg-rose-600 text-white text-center py-2 text-sm font-bold">
                      Most Popular — Best Value for Active Pursuit
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
                      <div className="flex items-center gap-5">
                        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br", program.gradient)}>
                          <Icon size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{program.name}</h3>
                          <p className={cn("font-medium", program.text)}>{program.tagline}</p>
                          <p className="text-sm text-slate-500 mt-1">{program.idealFor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-4xl font-bold text-slate-900">${program.price.toLocaleString()}</div>
                          <div className="text-slate-500">{program.duration}</div>
                        </div>
                        <LinkButton href="/register" className={cn("px-6 py-3 text-white bg-gradient-to-r whitespace-nowrap", program.gradient)}>
                          Get Started
                        </LinkButton>
                      </div>
                    </div>

                    {/* Overview */}
                    <p className="text-slate-600 mb-6">{program.overview}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {program.keyMetrics.map((m, i) => (
                        <div key={i} className={cn("p-4 rounded-xl text-center", program.bgLight)}>
                          <div className={cn("text-2xl font-bold", program.text)}>{m.metric}</div>
                          <div className="text-sm text-slate-600">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* 5 C's Coverage */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="text-sm text-slate-500 mr-2">Covers:</span>
                      {program.csCoverage.map((coverage, i) => (
                        <span key={i} className={cn("px-3 py-1 rounded-full text-sm font-medium", program.bgLight, program.text)}>
                          {coverage.c}: {coverage.level}
                        </span>
                      ))}
                    </div>

                    {program.includesPrevious && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium mb-6">
                        <CheckCheck size={18} />
                        Includes everything in {program.includesPrevious}
                      </div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setExpandedProgram(isExpanded ? null : program.id)}
                      className={cn(
                        "w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2",
                        isExpanded ? "bg-slate-100 text-slate-700" : cn(program.bgLight, program.text)
                      )}
                    >
                      {isExpanded ? 'Hide Details' : 'View Full Details & Deliverables'}
                      <ChevronDown size={20} className={cn("transition-transform", isExpanded && "rotate-180")} />
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-8 pt-8 border-t border-slate-200">
                        {/* Deliverables by Category */}
                        <div className="space-y-10">
                          {program.deliverables.map((category, catIdx) => {
                            const CatIcon = category.icon;
                            return (
                              <div key={catIdx}>
                                <div className="flex items-center gap-3 mb-6">
                                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", program.bgLight, program.text)}>
                                    <CatIcon size={22} />
                                  </div>
                                  <h4 className="text-xl font-bold text-slate-900">{category.category}</h4>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-6">
                                  {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className={cn("p-6 rounded-2xl border", program.border)}>
                                      <div className="flex items-start justify-between mb-3">
                                        <h5 className="font-bold text-slate-900">{item.name}</h5>
                                        <span className={cn("text-xs font-medium px-2 py-1 rounded shrink-0 ml-2", program.bgLight, program.text)}>
                                          {item.timeline}
                                        </span>
                                      </div>
                                      <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                                      <ul className="space-y-2">
                                        {item.details.map((detail, dIdx) => (
                                          <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-700">
                                            <Check size={14} className={cn("shrink-0 mt-0.5", program.text)} />
                                            {detail}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Timeline */}
                        <div className="mt-10 pt-10 border-t border-slate-200">
                          <h4 className="text-xl font-bold text-slate-900 mb-6">{program.duration} Timeline</h4>
                          <div className="grid lg:grid-cols-5 gap-4">
                            {program.timeline.map((t, i) => (
                              <div key={i} className={cn("p-4 rounded-xl", program.bgLight)}>
                                <div className={cn("text-sm font-bold mb-1", program.text)}>{t.phase}</div>
                                <div className="font-bold text-slate-900 mb-2">{t.title}</div>
                                <ul className="space-y-1">
                                  {t.items.map((item, j) => (
                                    <li key={j} className="text-xs text-slate-600 flex items-start gap-1">
                                      <Check size={10} className={cn("shrink-0 mt-0.5", program.text)} />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Not Included */}
                        {program.notIncluded && program.notIncluded.length > 0 && (
                          <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                            <h5 className="font-bold text-slate-700 mb-3">Not Included (Available in Higher Tiers)</h5>
                            <div className="flex flex-wrap gap-2">
                              {program.notIncluded.map((item, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-sm">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Upgrade Note */}
                        {program.upgradeNote && (
                          <div className="mt-6 p-4 bg-emerald-50 rounded-xl flex items-center gap-3">
                            <TrendingUp size={20} className="text-emerald-600" />
                            <span className="text-emerald-700 font-medium">{program.upgradeNote}</span>
                          </div>
                        )}

                        {/* CTA */}
                        <div className="mt-8 flex justify-center">
                          <LinkButton href="/register" className={cn("px-10 py-4 text-lg text-white bg-gradient-to-r", program.gradient)}>
                            Start {program.name} — ${program.price.toLocaleString()}
                            <ArrowRight size={20} className="ml-2" />
                          </LinkButton>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section ref={comparisonRef} className="py-20 lg:py-28 bg-slate-900 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Complete Comparison</h2>
            <p className="mt-4 text-slate-400">Every feature across all programs, organized by the 5 C's</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left text-slate-400">Feature</th>
                  {marketingPrograms.map((p) => (
                    <th key={p.id} className="p-4 text-center">
                      <span className={cn("inline-block px-3 py-1 rounded-full text-sm font-bold", p.bgLight, p.text)}>{p.name}</span>
                      <div className="text-white font-bold text-xl mt-2">${p.price.toLocaleString()}</div>
                      <div className="text-slate-500 text-sm">{p.duration}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((cat) => (
                  <>
                    <tr key={cat.category}>
                      <td colSpan={4} className="pt-8 pb-3 text-xs font-bold uppercase tracking-wide text-amber-400">{cat.category}</td>
                    </tr>
                    {cat.features.map((f, i) => (
                      <tr key={f.name} className={i % 2 === 0 ? 'bg-slate-800/50' : ''}>
                        <td className="p-3 text-slate-300">{f.name}</td>
                        {['fedstart', 'growth', 'prime'].map((pid) => {
                          const val = f[pid as keyof typeof f];
                          return (
                            <td key={pid} className="p-3 text-center">
                              {val === true ? <Check size={18} className="mx-auto text-emerald-400" /> : val === false ? <span className="text-slate-600">—</span> : <span className="text-white">{val}</span>}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {marketingPrograms.map((p) => (
              <LinkButton key={p.id} href="/register" className={cn("px-6 py-3 text-white bg-gradient-to-r", p.gradient)}>
                Start {p.name}
              </LinkButton>
            ))}
          </div>
        </div>
      </section>

      {/* GSA SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-700 font-medium mb-4">
              <FileText size={16} />
              Contract Vehicles
            </div>
            <h2 className="text-3xl font-bold text-slate-900">GSA Schedule Services</h2>
            <p className="mt-2 text-slate-600">Separate from marketing programs — add to any tier</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {gsaServices.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="p-8 rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Icon size={24} className="text-slate-700" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">${s.price.toLocaleString()}</div>
                      <div className="text-sm text-slate-500">{s.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{s.name}</h3>
                  <p className="mt-2 text-slate-600 mb-4">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check size={14} className="text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <LinkButton href="/register" className="w-full justify-center bg-slate-900 text-white">
                    Get Started
                  </LinkButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-slate-300">Book a free consultation or call us directly.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton href={LINKS.booking} target="_blank" className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100">
              Book Free Consultation
            </LinkButton>
            <a href="tel:8136650308" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold transition">
              <Phone size={18} />
              (813) 665-0308
            </a>
          </div>
        </div>
      </section>
    </>
  );
}