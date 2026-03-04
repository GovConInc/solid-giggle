import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, CheckCircle, Target, Rocket,
  BarChart3, Crown, ChevronDown, Shield, Check,
  Lightbulb, Trophy, Repeat, CheckCheck, MessageSquare,
  FileText, Megaphone, PieChart, Zap,
  Layers, CircleDollarSign, Timer, Sparkles,
  TrendingUp, Phone
} from "lucide-react";
import { cn } from "../../components/cn";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

// ============================================
// THE 5 C's DATA
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

// ============================================
// PROGRAMS DATA
// ============================================

const marketingPrograms = [
  {
    id: 'fedstart',
    name: 'FedStart',
    tagline: 'Your Compliance Foundation',
    duration: '3 Months',
    price: 3200,
    icon: Rocket,
    idealFor: 'New contractors entering the federal market',
    whoHeadline: 'New to federal contracting?',
    whoDesc: 'Get fully registered, certified, and positioned to pursue contracts — all within 30 days. The compliance foundation every contractor needs before they can win.',
    highlights: [
      'SAM.gov registration completed in 5 business days',
      'All applicable SBA certifications submitted (8(a), WOSB, SDVOSB, HUBZone)',
      'DSBS & FEMA vendor portal profiles created',
      'Professional capabilities statement — designed & print-ready',
      'Marketing strategy document + 1,000 curated federal contacts',
      'Monthly strategy calls for 3 months + 1 RFP review included',
    ],
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
      'Federal Bid Portal access',
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
    popular: true,
    idealFor: 'Contractors ready to actively pursue and win contracts',
    whoHeadline: 'Registered but not winning?',
    whoDesc: 'Turn your foundation into an active pipeline. Bid portal, marketing campaigns, and unlimited proposal reviews — so you stop leaving federal dollars on the table.',
    highlights: [
      'Everything in FedStart, included',
      'Federal Bid Portal — 2,200+ bid sources, 6 months of access',
      '2 professional email marketing campaigns (2,000 contacts)',
      'Unlimited RFP reviews with debrief calls (3–5 day turnaround)',
      'Daily bid alerts + opportunity qualification support',
      'Prime contractor targeting and teaming strategy',
    ],
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
            name: 'Federal Bid Portal Access',
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
            description: "Professional outreach campaigns targeting contracting officers and prime contractors. These aren't spam blasts — they're strategic introductions that generate meetings.",
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
    idealFor: 'Serious contractors committed to building a federal practice',
    whoHeadline: 'Ready to make federal your primary revenue?',
    whoDesc: "We become your business development team — dedicated capture management, full proposal writing, and year-round compliance. For contractors who aren't dabbling, they're building.",
    highlights: [
      'Everything in Growth, included',
      'Dedicated named capture manager for 12 full months',
      'Up to 5 fully written and submitted proposals',
      '4 quarterly marketing campaigns all year (Q1–Q4)',
      'Year-round compliance management — no renewals missed',
      'Same-day priority access via phone, email & text',
    ],
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
              'Federal Bid Portal (12 months)',
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
            description: "Your own capture manager who builds and maintains your opportunity pipeline. This is like having a full-time BD person without the salary.",
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
            description: "We don't just review — we write. Complete proposal development from RFP analysis through submission-ready package. This alone is worth $25,000+.",
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
            description: "Questions don't wait for monthly calls. Direct access to senior consultants with same-day response.",
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
    { name: 'Federal Bid Portal Access', fedstart: false, growth: '6 months', prime: '12 months' },
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
// COLOR HELPERS
// ============================================

const getColorClasses = (color: string) => ({
  bg: color === 'blue' ? 'bg-blue-600' : color === 'emerald' ? 'bg-emerald-600' : color === 'rose' ? 'bg-rose-600' : color === 'amber' ? 'bg-amber-500' : 'bg-purple-600',
  bgLight: color === 'blue' ? 'bg-blue-50' : color === 'emerald' ? 'bg-emerald-50' : color === 'rose' ? 'bg-rose-50' : color === 'amber' ? 'bg-amber-50' : 'bg-purple-50',
  text: color === 'blue' ? 'text-blue-600' : color === 'emerald' ? 'text-emerald-600' : color === 'rose' ? 'text-rose-600' : color === 'amber' ? 'text-amber-600' : 'text-purple-600',
  border: color === 'blue' ? 'border-blue-200' : color === 'emerald' ? 'border-emerald-200' : color === 'rose' ? 'border-rose-200' : color === 'amber' ? 'border-amber-200' : 'border-purple-200',
  gradient: color === 'blue' ? 'from-blue-500 to-blue-700' : color === 'emerald' ? 'from-emerald-500 to-emerald-700' : color === 'rose' ? 'from-rose-500 to-rose-700' : color === 'amber' ? 'from-amber-400 to-orange-600' : 'from-purple-500 to-purple-700',
});

// Brand-aligned program colors
const programAccent: Record<string, { header: string; accent: string; light: string; border: string; badge: string }> = {
  fedstart: { header: 'bg-gov-blue', accent: 'text-gov-blue', light: 'bg-gov-blue/8', border: 'border-gov-blue/25', badge: 'bg-gov-blue/10 text-gov-blue' },
  growth:   { header: 'bg-gov-crimson', accent: 'text-gov-crimson', light: 'bg-gov-crimson/8', border: 'border-gov-crimson/25', badge: 'bg-gov-crimson/10 text-gov-crimson' },
  prime:    { header: 'bg-gov-navy', accent: 'text-gov-gold', light: 'bg-gov-navy/5', border: 'border-gov-navy/20', badge: 'bg-gov-gold/20 text-gov-navy' },
};

// ============================================
// COMPONENT
// ============================================

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [expandedC, setExpandedC] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Federal Contractor Programs — FedGovWin Professional Services</title>
        <meta name="description" content="Win federal contracts with our proven 5 C's methodology. FedStart ($3,200), Growth ($6,500), and Prime ($15,500) — clear deliverables, guaranteed timelines." />
      </Helmet>

      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative bg-gov-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gov-blue/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gov-crimson/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm text-white/80 mb-6">
            <Sparkles size={15} className="text-gov-gold" />
            Federal Contractor Programs
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Everything You Need to
                <span className="block text-gov-gold mt-1">Win Federal Contracts.</span>
              </h1>
              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Three programs built on our proven 5 C's methodology — from getting registered to building a serious federal practice. Clear deliverables, real timelines, no guesswork.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="bg-white text-gov-navy hover:bg-slate-100 font-bold">
                  Book Free Consultation
                  <ArrowRight size={18} className="ml-2" />
                </LinkButton>
                <a href="#programs" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition font-semibold">
                  View Programs
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Quick program price pills */}
            <div className="space-y-3">
              {marketingPrograms.map((p) => {
                const colors = programAccent[p.id];
                const Icon = p.icon;
                return (
                  <a
                    key={p.id}
                    href="#programs"
                    className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0", colors.header)}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{p.name}</span>
                          {p.popular && (
                            <span className="px-2 py-0.5 rounded-full bg-gov-gold/20 text-gov-gold text-xs font-bold">Popular</span>
                          )}
                        </div>
                        <span className="text-sm text-slate-400">{p.duration} · {p.idealFor}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <div className="font-display text-xl font-bold text-white">${p.price.toLocaleString()}</div>
                      <ArrowRight size={14} className="ml-auto text-slate-500 group-hover:text-white transition mt-0.5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-white/10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <Icon size={22} className="text-gov-gold shrink-0" />
                  <div>
                    <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROGRAM CARDS — 3-column grid */}
      {/* ============================================ */}
      <section id="programs" className="bg-slate-50 py-20 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Choose Your Program</p>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-gov-navy">
              Three Levels of Support. One Path to Winning.
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Pick where you are. Upgrade anytime — your full investment carries forward as credit.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {marketingPrograms.map((program) => {
              const Icon = program.icon;
              const colors = programAccent[program.id];
              const isExpanded = expandedProgram === program.id;

              return (
                <div
                  key={program.id}
                  className={cn(
                    "rounded-2xl bg-white border-2 flex flex-col overflow-hidden transition-all",
                    program.popular
                      ? "border-gov-crimson shadow-xl shadow-gov-crimson/10 ring-2 ring-gov-crimson/20"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
                  )}
                >
                  {/* Popular banner */}
                  {program.popular && (
                    <div className="bg-gov-crimson text-white text-center py-1.5 text-xs font-bold tracking-wider uppercase">
                      Most Popular — Best Value for Active Pursuit
                    </div>
                  )}

                  {/* Colored header */}
                  <div className={cn("p-6 text-white", colors.header)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-bold">{program.name}</h3>
                          <p className="text-sm text-white/80">{program.tagline}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <div className="font-display text-3xl font-bold">${program.price.toLocaleString()}</div>
                        <div className="text-sm text-white/70">{program.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Who it's for */}
                    <div className={cn("rounded-xl p-4 mb-5", colors.light, colors.border, "border")}>
                      <p className={cn("font-bold text-sm mb-1", colors.accent)}>{program.whoHeadline}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{program.whoDesc}</p>
                    </div>

                    {/* Top highlights */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {program.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle size={16} className="text-gov-green shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Key metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {program.keyMetrics.map((m) => (
                        <div key={m.label} className={cn("p-3 rounded-lg text-center", colors.light)}>
                          <div className={cn("font-display text-lg font-bold", colors.accent)}>{m.metric}</div>
                          <div className="text-xs text-slate-600 font-medium">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <LinkButton
                      href={LINKS.booking}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "w-full justify-center font-bold mb-3",
                        program.popular
                          ? "bg-gov-crimson hover:bg-gov-crimson/90 text-white"
                          : program.id === 'prime'
                          ? "bg-gov-navy hover:bg-gov-navy/90 text-white"
                          : ""
                      )}
                    >
                      Start {program.name} — ${program.price.toLocaleString()}
                      <ArrowRight size={16} className="ml-1.5" />
                    </LinkButton>

                    {/* Full details toggle */}
                    <button
                      onClick={() => setExpandedProgram(isExpanded ? null : program.id)}
                      className={cn(
                        "w-full py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 border",
                        isExpanded
                          ? "bg-slate-100 text-slate-700 border-slate-200"
                          : cn("bg-white text-slate-600 hover:bg-slate-50 border-slate-200", "hover:border-slate-300")
                      )}
                    >
                      {isExpanded ? 'Hide Full Breakdown' : 'See Full Deliverables'}
                      <ChevronDown size={16} className={cn("transition-transform", isExpanded && "rotate-180")} />
                    </button>
                  </div>

                  {/* Expanded deliverables */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 px-6 pb-6">
                      <div className="pt-6 space-y-8">
                        {program.deliverables.map((cat, catIdx) => {
                          const CatIcon = cat.icon;
                          return (
                            <div key={catIdx}>
                              <div className="flex items-center gap-2 mb-4">
                                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", colors.light)}>
                                  <CatIcon size={16} className={colors.accent} />
                                </div>
                                <h4 className="font-bold text-gov-navy">{cat.category}</h4>
                              </div>
                              <div className="space-y-4">
                                {cat.items.map((item, itemIdx) => (
                                  <div key={itemIdx} className={cn("p-4 rounded-xl border", colors.border, "bg-white")}>
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                      <h5 className="font-bold text-gov-navy text-sm">{item.name}</h5>
                                      <span className={cn("text-xs font-medium px-2 py-0.5 rounded shrink-0", colors.badge)}>
                                        {item.timeline}
                                      </span>
                                    </div>
                                    <p className="text-slate-600 text-xs mb-3 leading-relaxed">{item.description}</p>
                                    <ul className="space-y-1.5">
                                      {item.details.map((d, di) => (
                                        <li key={di} className="flex items-start gap-2 text-xs text-slate-700">
                                          <Check size={12} className={cn("shrink-0 mt-0.5", colors.accent)} />
                                          {d}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}

                        {/* Timeline */}
                        <div>
                          <h4 className="font-bold text-gov-navy mb-4">{program.duration} Timeline</h4>
                          <div className="space-y-2">
                            {program.timeline.map((t, i) => (
                              <div key={i} className={cn("p-3 rounded-lg", colors.light)}>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={cn("text-xs font-bold", colors.accent)}>{t.phase}</span>
                                  <span className="text-xs font-semibold text-gov-navy">— {t.title}</span>
                                </div>
                                <ul className="space-y-0.5">
                                  {t.items.map((item, j) => (
                                    <li key={j} className="text-xs text-slate-600 flex items-start gap-1">
                                      <Check size={10} className={cn("shrink-0 mt-0.5", colors.accent)} />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Not included */}
                        {program.notIncluded && program.notIncluded.length > 0 && (
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <h5 className="font-bold text-slate-600 text-sm mb-2">Available in Higher Tiers</h5>
                            <div className="flex flex-wrap gap-1.5">
                              {program.notIncluded.map((item, i) => (
                                <span key={i} className="px-2.5 py-1 bg-slate-200 text-slate-600 rounded-full text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Upgrade note */}
                        {program.upgradeNote && (
                          <div className="p-4 bg-gov-green/10 rounded-xl border border-gov-green/25 flex items-center gap-3">
                            <TrendingUp size={18} className="text-gov-green shrink-0" />
                            <span className="text-sm text-gov-navy font-medium">{program.upgradeNote}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Not sure which program fits? We'll help you decide in a free 30-minute consultation. No pitch, no obligation.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE 5 C's — COMPACT EXPANDABLE */}
      {/* ============================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gov-blue/10 text-gov-blue text-sm font-semibold mb-4">
              <Layers size={15} />
              Our Proven Framework
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gov-navy">The 5 C's of Federal Contracting</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Every successful government contractor masters these five disciplines. Our programs are structured around this methodology.
            </p>
          </div>

          {/* Process flow visual */}
          <div className="relative mb-10">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-400 via-rose-400 to-purple-400" />
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {fiveCsData.map((c) => {
                const colors = getColorClasses(c.color);
                const Icon = c.icon;
                return (
                  <div key={c.number} className="flex flex-col items-center text-center">
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 relative z-10 shadow-md bg-gradient-to-br", colors.gradient)}>
                      {c.number}
                    </div>
                    <h4 className="font-bold text-gov-navy text-sm">{c.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{c.tagline}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expandable C cards */}
          <div className="space-y-3">
            {fiveCsData.map((c) => {
              const Icon = c.icon;
              const colors = getColorClasses(c.color);
              const isExpanded = expandedC === c.number;
              return (
                <div key={c.number} className={cn("rounded-xl border-2 overflow-hidden transition-all", colors.border)}>
                  <button
                    onClick={() => setExpandedC(isExpanded ? null : c.number)}
                    className="w-full p-5 flex items-center gap-5 text-left hover:bg-slate-50 transition"
                  >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 bg-gradient-to-br shadow-sm", colors.gradient)}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={cn("text-xs font-bold px-2 py-0.5 rounded", colors.bgLight, colors.text)}>C{c.number}</span>
                        <span className="font-display text-lg font-bold text-gov-navy">{c.name}</span>
                        <span className="text-slate-400 text-sm hidden sm:inline">—</span>
                        <span className={cn("text-sm font-semibold hidden sm:inline", colors.text)}>{c.tagline}</span>
                      </div>
                      <p className="text-slate-600 text-sm mt-1 leading-snug">{c.description}</p>
                    </div>
                    <ChevronDown size={20} className={cn("text-slate-400 shrink-0 transition-transform", isExpanded && "rotate-180")} />
                  </button>

                  {isExpanded && (
                    <div className={cn("px-5 pb-5 border-t", colors.border)}>
                      <div className="pt-5 grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gov-navy mb-2 text-sm uppercase tracking-wider">What It Means</h4>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.whatItMeans}</p>
                          <div className={cn("p-4 rounded-xl", colors.bgLight)}>
                            <h5 className={cn("font-bold text-sm mb-1", colors.text)}>Outcome</h5>
                            <p className="text-slate-700 text-sm">{c.outcome}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gov-navy mb-3 text-sm uppercase tracking-wider">Key Elements</h4>
                          <div className="space-y-2.5">
                            {c.elements.map((el, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <Check size={16} className={cn("shrink-0 mt-0.5", colors.text)} />
                                <div>
                                  <span className="font-semibold text-gov-navy text-sm">{el.name}</span>
                                  <p className="text-xs text-slate-500 mt-0.5">{el.desc}</p>
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

      {/* ============================================ */}
      {/* COMPARISON TABLE */}
      {/* ============================================ */}
      <section className="bg-gov-navy py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-gold mb-3">Side-by-Side</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">Full Program Comparison</h2>
            <p className="mt-4 text-slate-400">Every feature across all three programs, organized by the 5 C's</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left text-slate-400 text-sm font-medium">Feature</th>
                  {marketingPrograms.map((p) => {
                    const colors = programAccent[p.id];
                    const Icon = p.icon;
                    return (
                      <th key={p.id} className="p-4 text-center min-w-[120px]">
                        <div className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold text-white mb-2", colors.header)}>
                          <Icon size={14} />
                          {p.name}
                        </div>
                        <div className="font-display text-xl font-bold text-white">${p.price.toLocaleString()}</div>
                        <div className="text-slate-500 text-xs">{p.duration}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((cat) => (
                  <>
                    <tr key={cat.category}>
                      <td colSpan={4} className="pt-6 pb-2 px-4 text-xs font-bold uppercase tracking-widest text-gov-gold">{cat.category}</td>
                    </tr>
                    {cat.features.map((f, i) => (
                      <tr key={f.name} className={cn("border-b border-white/5", i % 2 === 0 ? 'bg-white/3' : '')}>
                        <td className="p-3 px-4 text-slate-300 text-sm">{f.name}</td>
                        {(['fedstart', 'growth', 'prime'] as const).map((pid) => {
                          const val = f[pid as keyof typeof f];
                          return (
                            <td key={pid} className="p-3 text-center">
                              {val === true
                                ? <Check size={16} className="mx-auto text-gov-green" />
                                : val === false
                                ? <span className="text-slate-600 text-lg">—</span>
                                : <span className="text-white text-sm font-medium">{val}</span>
                              }
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

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {marketingPrograms.map((p) => {
              const colors = programAccent[p.id];
              return (
                <LinkButton
                  key={p.id}
                  href={LINKS.booking}
                  target="_blank"
                  rel="noreferrer"
                  className={cn("text-white font-bold", colors.header)}
                >
                  Start {p.name} — ${p.price.toLocaleString()}
                  <ArrowRight size={16} className="ml-1.5" />
                </LinkButton>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GSA CROSSLINK */}
      {/* ============================================ */}
      <section className="bg-gov-blue py-12">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">Also Available</p>
              <h3 className="font-display text-xl font-bold">Need a GSA Schedule?</h3>
              <p className="text-white/80 text-sm mt-1">
                Get on the GSA MAS contract — $5,500 Essentials or $9,000 Full-Service — or upload your existing catalog to the GSA Catalog Platform for a flat $999.
              </p>
            </div>
            <LinkButton
              href="/services"
              className="bg-white text-gov-blue hover:bg-slate-100 font-bold shrink-0"
            >
              GSA Schedule Services
              <ArrowRight size={16} className="ml-1.5" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue mb-3">Start Here</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gov-navy">
            One Conversation.<br />A Clear Path Forward.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Book a free 30-minute consultation. We'll assess where you are, recommend the right program, and give you a concrete action plan — no pitch, no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="font-bold"
            >
              Book Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <a
              href="tel:8136650308"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gov-navy/20 text-gov-navy hover:bg-gov-navy/5 rounded-lg font-semibold transition"
            >
              <Phone size={18} />
              (813) 665-0308
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Upgrade anytime — your full investment always applies as credit toward the next tier.
          </p>
        </div>
      </section>
    </>
  );
}
