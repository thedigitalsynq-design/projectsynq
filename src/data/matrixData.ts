export interface EcosystemLayer {
  id: string;
  number: number;
  name: string;
  shortDesc: string;
  stakeholders: string[];
  interfaces: string[];
  flowVector: string;
}

export const ECOSYSTEM_LAYERS: EcosystemLayer[] = [
  {
    id: 'audience',
    number: 1,
    name: 'AUDIENCE & DEMAND',
    shortDesc: 'Consumers, Cinema Goers, OTT Viewers, Music Listeners, Gamers, Fan Clubs & Communities.',
    stakeholders: ['Cinema Audiences', 'OTT Viewers', 'TV Viewers', 'Music Listeners', 'Gamers', 'Concert Goers', 'Fan Communities'],
    interfaces: ['Attention → Distribution', 'Subscription / Box Office → Commerce', 'Engagement Signals → Marketing'],
    flowVector: 'Generates primary capital and attention for the entire downstream funnel.'
  },
  {
    id: 'distribution',
    number: 2,
    name: 'DISTRIBUTION CHANNELS',
    shortDesc: 'OTT Platforms, Theatrical Multiplexes, Single Screens, TV Networks, FAST channels, YouTube.',
    stakeholders: ['Global & Regional OTT', 'Multiplex Chains', 'Single Screen Theatres', 'DTH Operators', 'Broadcasters'],
    interfaces: ['Content Delivery → Audience', 'License Negotiation → Content IP', 'Telemetry → Analytics'],
    flowVector: 'Aggregates audience attention and meters access to finished content assets.'
  },
  {
    id: 'marketing',
    number: 3,
    name: 'MARKETING & PROMOTION',
    shortDesc: 'PR Agencies, Media Planners, Social Networks, Influencer Marketing, Programmatic Ad Exchanges.',
    stakeholders: ['Brand Sponsors', 'PR Firms', 'Media Buying Agencies', 'Influencer Platforms', 'Entertainment Journalists'],
    interfaces: ['Trailer & Asset Release → Audience', 'Sponsorship Dollars → Production', 'Attribution Data → Studio'],
    flowVector: 'Bridges content awareness to ticket sales and streaming conversions.'
  },
  {
    id: 'commerce',
    number: 4,
    name: 'COMMERCE & MONETIZATION',
    shortDesc: 'Ticketing platforms, Merchandising, Secondary rights syndication, Brand integrations.',
    stakeholders: ['BookMyShow / Ticketing Platforms', 'Merch Manufacturers', 'Licensing Brokers', 'Brand Sponsors'],
    interfaces: ['Liquidity Ingest → Production', 'Derivative IP → Retail', 'Reconciliation → Royalty Pool'],
    flowVector: 'Converts audience enthusiasm into diversified cash flows.'
  },
  {
    id: 'content_ip',
    number: 5,
    name: 'CONTENT & IP CORE',
    shortDesc: 'Original scripts, Books, Comic IP, Remake options, Song masters, Franchise universes.',
    stakeholders: ['IP Owners', 'Screenwriters', 'Novelists', 'Publishers', 'Franchise Stewards'],
    interfaces: ['Story Pipeline → Production', 'Chain-of-Title → Legal', 'Option Deals → Financiers'],
    flowVector: 'The generative asset around which all execution, talent, and capital organizes.'
  },
  {
    id: 'creator_economy',
    number: 6,
    name: 'CREATOR ECONOMY',
    shortDesc: 'Digital-first creators, YouTubers, Podcasters, Streamers, MCNs, Influencer talent agencies.',
    stakeholders: ['Digital Video Creators', 'Podcasters', 'Live Streamers', 'MCNs', 'Creator Managers'],
    interfaces: ['Direct Audience Fandom → Commerce', 'Brand Partnerships → Sponsors', 'Crossover Projects → Film/OTT'],
    flowVector: 'High-velocity decentralized production with direct audience ownership.'
  },
  {
    id: 'vertical_sectors',
    number: 7,
    name: 'VERTICAL SECTORS (Film, Music, Live)',
    shortDesc: 'Feature Film, Episodic Series, Music Labels, Live Concerts, Festivals, Regional Theatre.',
    stakeholders: ['Film Studios', 'Record Labels', 'Concert Promoters', 'Festival Curators', 'Theatre Groups'],
    interfaces: ['Asset Packaging → Distribution', 'Talent Booking → Performers', 'Venue Contracting → Logistics'],
    flowVector: 'Medium-specific operational engines with distinct economic cycles.'
  },
  {
    id: 'production',
    number: 8,
    name: 'PHYSICAL PRODUCTION',
    shortDesc: 'Line producers, Camera, Lighting, Sound, Location scouting, Equipment rental houses, Catering.',
    stakeholders: ['Production Houses', 'Line Producers', 'Equipment Hire', 'Location Managers', 'Shooting Crews'],
    interfaces: ['Budget Drawdowns → Financiers', 'Footage / Plates → Post & VFX', 'Union Compliance → Labor'],
    flowVector: 'The heavy capital-burn phase transforming script and cast into captured media.'
  },
  {
    id: 'talent_crew_tech',
    number: 9,
    name: 'TALENT, CREW & TECHNOLOGY',
    shortDesc: 'Performers, Directors, HODs, VFX Studios, Sound Designers, Animators, AI tools, Cloud render.',
    stakeholders: ['Lead & Supporting Cast', 'Directors & HODs', 'VFX / Animation Studios', 'Editors & Colorists'],
    interfaces: ['Availability & Options → Casting', 'Deliverable Handoffs → QC', 'Remuneration → Payroll'],
    flowVector: 'The human and technical capability creating aesthetic differentiation.'
  },
  {
    id: 'rights_legal',
    number: 10,
    name: 'RIGHTS & LEGAL INFRASTRUCTURE',
    shortDesc: 'Chain-of-title, Copyright registries, Sync licenses, Windowing holdbacks, Collecting societies.',
    stakeholders: ['Entertainment Attorneys', 'Collecting Societies (IPRS, ISRA)', 'Copyright Registrars', 'Auditors'],
    interfaces: ['Clearances → Production', 'Territory Carveouts → Distribution', 'Dispute Resolution → Courts'],
    flowVector: 'The legal framework that protects IP exclusivity and validates monetization rights.'
  },
  {
    id: 'finance_capital',
    number: 11,
    name: 'FINANCE & CAPITAL ARCHITECTURE',
    shortDesc: 'Private equity, Slate funds, HNWIs, Completion bonders, Minimum guarantees, Pre-sales.',
    stakeholders: ['Institutional PE / Slate Funds', 'NBFCs & Banks', 'Co-Producers', 'Completion Guarantors'],
    interfaces: ['Milestone Escrow → Production', 'Waterfall Recoupment → Distribution', 'Risk Scoring → Underwriters'],
    flowVector: 'Provides liquidity runway and absorbs financial downside risk.'
  },
  {
    id: 'government_policy',
    number: 12,
    name: 'GOVERNMENT & POLICY',
    shortDesc: 'Ministry of I&B, CBFC Censor Board, State Film Facilitation Offices, Subsidy boards, Tax authorities.',
    stakeholders: ['Ministry of I&B', 'CBFC (Censor Board)', 'State Subsidy Commissions', 'Tax / GST Authorities'],
    interfaces: ['Permits → Location Management', 'Censor Certificate → Exhibition', 'Rebates → Producers'],
    flowVector: 'Sets sovereign boundaries, censorship standards, and fiscal subsidies.'
  }
];

export interface TalentProblemItem {
  id: string;
  problem: string;
  description: string;
  severity: 'high' | 'medium';
  solutions: string[];
}

export const TALENT_PROBLEMS: TalentProblemItem[] = [
  { id: 't1', problem: 'Talent discovery', description: 'Producers and casting directors struggle to find suitable, verified people beyond familiar circles.', severity: 'high', solutions: ['AI casting filter', 'Verified credit graph', 'Open digital audition reels'] },
  { id: 't2', problem: 'Talent verification', description: 'Rampant fake profiles, exaggerated credits, and unverified showreels on informal networks.', severity: 'high', solutions: ['Verified entertainment identity', 'Studio-backed credit confirmation'] },
  { id: 't3', problem: 'Portfolio standardization', description: 'No universal professional standard for casting cards, headshots, showreels, and vocal samples.', severity: 'high', solutions: ['Standardized EPK / digital actor card', 'Centralized media portfolio hosting'] },
  { id: 't4', problem: 'Casting opacity', description: 'Fragmented casting calls circulated informally across closed WhatsApp groups and personal networks.', severity: 'high', solutions: ['Transparent casting portal', 'Direct audition tracking workflow'] },
  { id: 't5', problem: 'Auditions transparency', description: 'Performers submit auditions with zero feedback, read confirmations, or role status updates.', severity: 'high', solutions: ['Automated audition status tracking', 'Structured feedback corridors'] },
  { id: 't6', problem: 'Job discovery', description: 'Legitimate opportunities scattered across dozens of agency desks with high barrier to entry.', severity: 'high', solutions: ['Ecosystem-wide job index', 'Automated role alert engine'] },
  { id: 't7', problem: 'Informal networking gatekeepers', description: 'Access heavily gated by personal relationships and unaccredited middle brokers extracting informal fees.', severity: 'high', solutions: ['Direct-to-producer pitch rails', 'Objective capability scoring'] },
  { id: 't8', problem: 'Payment delays & disputes', description: 'Actors, technicians, and writers waiting 90 to 180 days for milestone checks with frequent payment defaults.', severity: 'high', solutions: ['Milestone-gated escrow payroll', 'Automated contract drawdown triggers'] },
  { id: 't9', problem: 'Contract complexity & ambiguity', description: 'Inconsistent, legally vulnerable deal memos with ambiguous clauses regarding overtime, likeness, and credits.', severity: 'high', solutions: ['Standardized modular contract templates', 'Plain-English legal summarizers'] },
  { id: 't10', problem: 'Rights understanding', description: 'Creative talent routinely signs away secondary rights, digital likeness, and remake participation without realizing it.', severity: 'high', solutions: ['Rights literacy playbooks', 'Automated clause risk highlighting'] },
  { id: 't11', problem: 'Credit attribution', description: 'Writers, colorists, Foley artists, and technicians excluded from official credits or IMDb metadata.', severity: 'high', solutions: ['Immutable credit ledger', 'Master production asset sign-off metadata'] },
  { id: 't12', problem: 'Reputation fragmentation', description: 'No reliable cross-industry reputation layer for work ethic, reliability, and punctuality.', severity: 'high', solutions: ['Verified peer & director endorsements', 'Track-record delivery score'] },
  { id: 't13', problem: 'Career management isolation', description: 'Over 90% of working performers self-manage without strategic agents or long-term guidance.', severity: 'medium', solutions: ['Talent CRM & calendar suite', 'Self-serve career optimization analytics'] },
  { id: 't14', problem: 'Fragmented skill training', description: 'Acting and craft institutes disconnected from dynamic on-set technical demands.', severity: 'medium', solutions: ['Masterclass micro-credentialing', 'Production-shadowing programs'] },
  { id: 't15', problem: 'Insurance & health coverage', description: 'Stunt coordinators, crew, and freelance actors lack set accident and health insurance.', severity: 'medium', solutions: ['Production-embedded micro-insurance', 'Guild-wide group coverage'] },
  { id: 't16', problem: 'Financial planning volatility', description: 'Severe income unpredictability with zero credit access or banking underwriting for irregular creative earnings.', severity: 'high', solutions: ['Contract-backed income smoothing', 'Entertainment invoice factoring'] },
  { id: 't17', problem: 'International market access', description: 'Elite Indian craft specialists unable to access Hollywood or European co-productions.', severity: 'medium', solutions: ['Global agency syndication bridges', 'Bilingual showreel localization'] },
  { id: 't18', problem: 'Regional cross-mobility', description: 'Friction moving across Mumbai (Hindi), Hyderabad (Telugu), Chennai (Tamil), and Kochi (Malayalam) industries.', severity: 'medium', solutions: ['Pan-Indian cross-industry casting bridges', 'Dialect & linguistic talent mapping'] }
];

export interface WorkflowTransition {
  step: string;
  from: string;
  to: string;
  friction: string;
  synqBridge: string;
}

export const WORKFLOW_TRANSITIONS: WorkflowTransition[] = [
  { step: '01', from: 'Script', to: 'Producer', friction: 'Discoverability & IP vetting stall for 12+ months', synqBridge: 'Standardized pitch deck & script intelligence corridor' },
  { step: '02', from: 'Producer', to: 'Finance', friction: 'Lack of verified pre-collateral & budget risk transparency', synqBridge: 'Institutional slate underwriting & risk-scoring bridge' },
  { step: '03', from: 'Finance', to: 'Production', friction: 'Cash-flow delays & tranche disbursement friction', synqBridge: 'Milestone escrow with conditional drawdown triggers' },
  { step: '04', from: 'Production', to: 'Talent', friction: 'Date availability conflicts & prolonged deal negotiations', synqBridge: 'Bilateral availability locking & standard deal memo protocol' },
  { step: '05', from: 'Talent', to: 'Contract', friction: 'Excessive back-and-forth on riders, billing, and indemnity', synqBridge: 'Modular contract generator with pre-aligned legal terms' },
  { step: '06', from: 'Contract', to: 'Payment', friction: 'Delayed invoice sign-offs & manual payroll reconciliation', synqBridge: 'Automated milestone-linked entertainment payroll rail' },
  { step: '07', from: 'Production', to: 'Location', friction: 'Bureaucratic permissions, local union extortion, police clearances', synqBridge: 'Single-window verified municipal location clearance portal' },
  { step: '08', from: 'Production', to: 'Crew', friction: 'Informal daily hiring, scheduling clashes, unvetted technical skills', synqBridge: 'Verified crew roster & dynamic call-sheet management' },
  { step: '09', from: 'Shoot', to: 'Post-Production', friction: 'Data loss, unstandardized dailies, spec mismatches with VFX', synqBridge: 'Automated camera-to-cloud QC & ingest handoff protocol' },
  { step: '10', from: 'Post-Production', to: 'Distributor', friction: 'QC rejections, dubbing delays, delivery format mismatch', synqBridge: 'Multi-language packaging & automated deliverable inspection' },
  { step: '11', from: 'Distributor', to: 'Audience', friction: 'Mismatched release windows & unmeasured marketing ad spend', synqBridge: 'Dynamic release windowing & unified audience demand funnel' },
  { step: '12', from: 'Audience', to: 'Platform', friction: 'Siloed viewership metrics & lack of raw consumption data', synqBridge: 'Audited performance telemetry & box-office reconciliation' },
  { step: '13', from: 'Platform', to: 'Rights Holder', friction: 'Delayed royalty reporting & multi-year accounting holdbacks', synqBridge: 'Real-time revenue corridor & automated streaming royalty audit' },
  { step: '14', from: 'Rights Holder', to: 'Talent', friction: 'Opaque backend profit splits & uncollected residuals', synqBridge: 'Transparent mathematical recoupment waterfall settlement' }
];

export interface StrategicHeatCell {
  stakeholder: string;
  discovery: 'very_high' | 'high' | 'medium' | 'none';
  money: 'high' | 'very_high' | 'medium';
  rights: 'high' | 'very_high' | 'medium';
  data: 'high' | 'very_high' | 'medium';
  workflow: 'high' | 'very_high' | 'medium';
  marketing: 'high' | 'very_high' | 'medium' | 'none';
  trust: 'high' | 'medium';
  monetisation: 'high' | 'very_high' | 'medium';
}

export const STRATEGIC_HEAT_MATRIX: StrategicHeatCell[] = [
  { stakeholder: 'Actors', discovery: 'high', money: 'high', rights: 'high', data: 'medium', workflow: 'medium', marketing: 'medium', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Writers', discovery: 'high', money: 'high', rights: 'very_high', data: 'medium', workflow: 'medium', marketing: 'medium', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Directors', discovery: 'medium', money: 'high', rights: 'high', data: 'medium', workflow: 'high', marketing: 'medium', trust: 'medium', monetisation: 'high' },
  { stakeholder: 'Crew', discovery: 'high', money: 'high', rights: 'medium', data: 'medium', workflow: 'high', marketing: 'none', trust: 'high', monetisation: 'medium' },
  { stakeholder: 'Producers', discovery: 'high', money: 'very_high', rights: 'very_high', data: 'high', workflow: 'very_high', marketing: 'high', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Studios', discovery: 'medium', money: 'high', rights: 'very_high', data: 'high', workflow: 'high', marketing: 'high', trust: 'medium', monetisation: 'high' },
  { stakeholder: 'Music Labels', discovery: 'medium', money: 'high', rights: 'very_high', data: 'very_high', workflow: 'high', marketing: 'high', trust: 'medium', monetisation: 'high' },
  { stakeholder: 'Music Artists', discovery: 'high', money: 'high', rights: 'very_high', data: 'high', workflow: 'medium', marketing: 'high', trust: 'high', monetisation: 'high' },
  { stakeholder: 'OTT Platforms', discovery: 'high', money: 'high', rights: 'very_high', data: 'very_high', workflow: 'high', marketing: 'high', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Linear TV', discovery: 'medium', money: 'high', rights: 'high', data: 'high', workflow: 'high', marketing: 'high', trust: 'medium', monetisation: 'high' },
  { stakeholder: 'Cinema Exhibitors', discovery: 'medium', money: 'high', rights: 'medium', data: 'high', workflow: 'high', marketing: 'high', trust: 'medium', monetisation: 'high' },
  { stakeholder: 'Digital Creators', discovery: 'very_high', money: 'high', rights: 'high', data: 'high', workflow: 'high', marketing: 'very_high', trust: 'high', monetisation: 'very_high' },
  { stakeholder: 'Talent Agencies', discovery: 'high', money: 'high', rights: 'high', data: 'high', workflow: 'very_high', marketing: 'high', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Brand Advertisers', discovery: 'high', money: 'high', rights: 'medium', data: 'very_high', workflow: 'high', marketing: 'very_high', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Live Promoters', discovery: 'high', money: 'very_high', rights: 'high', data: 'high', workflow: 'very_high', marketing: 'high', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Investors & PE', discovery: 'high', money: 'high', rights: 'high', data: 'very_high', workflow: 'medium', marketing: 'medium', trust: 'high', monetisation: 'high' },
  { stakeholder: 'Audience / Fans', discovery: 'very_high', money: 'medium', rights: 'medium', data: 'medium', workflow: 'medium', marketing: 'high', trust: 'high', monetisation: 'medium' },
];

export interface UltimateDatabaseRow {
  id: string;
  stakeholder: string;
  subStakeholder: string;
  jobToBeDone: string;
  problem: string;
  frequency: 'High' | 'Medium' | 'Critical';
  severity: 'Very High' | 'High' | 'Medium';
  currentSolution: string;
  existingCompetitors: string;
  spendLevel: '₹' | '₹₹' | '₹₹₹';
  buyer: string;
  user: string;
  revenueModel: string;
  technology: string;
  marketSize: 'Very Large' | 'Large' | 'Massive';
  whitespace: 'High' | 'Medium' | 'Critical';
}

export const ULTIMATE_DATABASE_ROWS: UltimateDatabaseRow[] = [
  {
    id: 'db-1',
    stakeholder: 'Actor',
    subStakeholder: 'Emerging & Mid-tier Actor',
    jobToBeDone: 'Find verified audition work and secure paid gigs',
    problem: 'Discovery & fake casting scams on WhatsApp',
    frequency: 'High',
    severity: 'High',
    currentSolution: 'Informal agents, casting WhatsApp groups',
    existingCompetitors: 'Fragmented casting directors, Instagram',
    spendLevel: '₹',
    buyer: 'Actor / Producer',
    user: 'Actor',
    revenueModel: 'SaaS / Verified profile fee / Commission',
    technology: 'AI casting filter, identity verification',
    marketSize: 'Large',
    whitespace: 'High'
  },
  {
    id: 'db-2',
    stakeholder: 'Producer',
    subStakeholder: 'Indie Film & Series Producer',
    jobToBeDone: 'Hire reliable technical crew under strict budget',
    problem: 'Crew discovery, unvetted references, schedule clashes',
    frequency: 'High',
    severity: 'High',
    currentSolution: 'Personal phone calls, word of mouth',
    existingCompetitors: 'Local guilds, personal address books',
    spendLevel: '₹₹',
    buyer: 'Producer / Line Producer',
    user: 'Line Producer',
    revenueModel: 'SaaS per shoot block / Marketplace fee',
    technology: 'Crew marketplace, dynamic calendar sync',
    marketSize: 'Large',
    whitespace: 'High'
  },
  {
    id: 'db-3',
    stakeholder: 'Music Label',
    subStakeholder: 'Catalog & Rights Licensing Team',
    jobToBeDone: 'Track multi-platform rights and collect sync royalties',
    problem: 'Metadata chaos, unclaimed YouTube/streaming royalties',
    frequency: 'High',
    severity: 'Very High',
    currentSolution: 'Disparate Excel spreadsheets, manual claims',
    existingCompetitors: 'Manual copyright agencies, legacy databases',
    spendLevel: '₹₹₹',
    buyer: 'Record Label / Publisher',
    user: 'Rights Manager',
    revenueModel: 'Enterprise SaaS + % of recovered royalties',
    technology: 'Audio fingerprinting, automated audit ledger',
    marketSize: 'Very Large',
    whitespace: 'Critical'
  },
  {
    id: 'db-4',
    stakeholder: 'Creator',
    subStakeholder: 'Regional & Micro Influencer',
    jobToBeDone: 'Find brand sponsorships without predatory agent cuts',
    problem: 'Pricing opacity, delayed 120-day brand payouts',
    frequency: 'High',
    severity: 'High',
    currentSolution: 'Agency DMs, barter deals',
    existingCompetitors: 'Traditional influencer marketing agencies',
    spendLevel: '₹₹',
    buyer: 'Brand / Creator',
    user: 'Creator',
    revenueModel: 'Escrow transaction fee / Subscription',
    technology: 'Creator business OS, milestone escrow',
    marketSize: 'Large',
    whitespace: 'Medium'
  },
  {
    id: 'db-5',
    stakeholder: 'Live Promoter',
    subStakeholder: 'Concert & Arena Organizer',
    jobToBeDone: 'Predict demand and execute multi-city permits',
    problem: 'Scalping fraud, bureaucratic venue clearances, weather risk',
    frequency: 'Medium',
    severity: 'High',
    currentSolution: 'Local PR fixers, standard ticketing sites',
    existingCompetitors: 'BookMyShow, Zomato Live, local vendors',
    spendLevel: '₹₹₹',
    buyer: 'Promoter',
    user: 'Event Operations Team',
    revenueModel: 'SaaS + Per-ticket infrastructure fee',
    technology: 'Identity-locked ticketing, permit tracking OS',
    marketSize: 'Large',
    whitespace: 'Medium'
  },
  {
    id: 'db-6',
    stakeholder: 'OTT Platform',
    subStakeholder: 'Content Acquisition & Commissioning Team',
    jobToBeDone: 'Evaluate commercially viable regional scripts',
    problem: 'Information asymmetry on script IP and talent packaging',
    frequency: 'High',
    severity: 'High',
    currentSolution: 'Agency pitches, executive networks',
    existingCompetitors: 'Studio heads, talent managers',
    spendLevel: '₹₹₹',
    buyer: 'OTT Platform / Studio',
    user: 'VP Content Acquisitions',
    revenueModel: 'Enterprise Data Subscription',
    technology: 'Script intelligence & audience propensity ML',
    marketSize: 'Very Large',
    whitespace: 'High'
  },
  {
    id: 'db-7',
    stakeholder: 'Screenwriter',
    subStakeholder: 'Guild Screenwriter & Dialogue Writer',
    jobToBeDone: 'Protect script copyright and receive backend royalties',
    problem: 'Script theft, denied credits, zero box-office upside',
    frequency: 'Medium',
    severity: 'Very High',
    currentSolution: 'SWA registration, verbal agreements',
    existingCompetitors: 'Screenwriters Association manual archive',
    spendLevel: '₹',
    buyer: 'Writer / Producer',
    user: 'Writer',
    revenueModel: 'Registry fee / Legal escrow fee',
    technology: 'Cryptographic timestamping, chain-of-title OS',
    marketSize: 'Large',
    whitespace: 'High'
  },
  {
    id: 'db-8',
    stakeholder: 'VFX & Post House',
    subStakeholder: 'Boutique VFX & Color Grading Studio',
    jobToBeDone: 'Receive clear plate specs and get paid on delivery',
    problem: 'Endless scope creep, unapproved revisions, delayed payout',
    frequency: 'High',
    severity: 'High',
    currentSolution: 'FTP / Aspera transfers, WhatsApp review notes',
    existingCompetitors: 'Frame.io, ShotGrid, disparate email trails',
    spendLevel: '₹₹',
    buyer: 'VFX Studio / Producer',
    user: 'VFX Supervisor',
    revenueModel: 'Usage-based SaaS / Milestone escrow',
    technology: 'Automated QC pipeline, milestone-gated payout',
    marketSize: 'Large',
    whitespace: 'Medium'
  },
  {
    id: 'db-9',
    stakeholder: 'Financier',
    subStakeholder: 'Private Slate Debt & Equity Fund',
    jobToBeDone: 'Underwrite production risk and verify recoupment waterfalls',
    problem: 'Opaque budget reporting, diversion of funds, waterfall default',
    frequency: 'Medium',
    severity: 'Very High',
    currentSolution: 'Bespoke audit consultants, legal threats',
    existingCompetitors: 'Big 4 audit firms (expensive, non-realtime)',
    spendLevel: '₹₹₹',
    buyer: 'Institutional Fund / Family Office',
    user: 'Investment Committee',
    revenueModel: '% of Capital Deployed / Audit Fee',
    technology: 'Real-time production ledger, audited waterfall rail',
    marketSize: 'Massive',
    whitespace: 'Critical'
  }
];

export interface HighValueOpportunity {
  rank: number;
  title: string;
  why: string;
  description: string;
  tier: 'Tier 1 — Infrastructure' | 'Tier 2 — Marketplace' | 'Tier 3 — Consumer' | 'Tier 4 — AI';
}

export const TOP_15_OPPORTUNITY_MAP: HighValueOpportunity[] = [
  { rank: 1, title: 'Entertainment Rights OS', why: 'Massive multi-jurisdiction fragmentation + multi-decade recurring value', description: 'Centralized operating system tracking copyright, territories, windows, licenses, usage, and automated audit trails.', tier: 'Tier 1 — Infrastructure' },
  { rank: 2, title: 'Royalty & Revenue OS', why: 'Money directly attached; solves billions in uncollected royalties', description: 'Automated ingestion of streaming and broadcast logs, reconciled against ownership metadata for instant payout.', tier: 'Tier 1 — Infrastructure' },
  { rank: 3, title: 'Production OS', why: 'High-frequency daily operational pain with hundreds of millions at stake', description: 'Real-time scheduling, call sheets, vendor handoffs, budget tracking, and shoot-to-post pipeline synchronization.', tier: 'Tier 1 — Infrastructure' },
  { rank: 4, title: 'Talent Identity + Credits Ledger', why: 'Network-effect potential: one source of verified truth for the entire industry', description: 'Bloomberg/LinkedIn for entertainment: verified credits, availability calendars, and authentic portfolios.', tier: 'Tier 1 — Infrastructure' },
  { rank: 5, title: 'Casting Infrastructure', why: 'Large recurring demand across 1,000+ film, OTT, and ad productions annually', description: 'End-to-end casting workflow from role breakdown to self-tape management and bilateral deal locking.', tier: 'Tier 2 — Marketplace' },
  { rank: 6, title: 'Entertainment Payments & Escrow', why: 'Transaction-based monetization with zero counterparty default', description: 'Milestone-gated escrow rails for talent, crew payroll, location vendors, and post houses.', tier: 'Tier 1 — Infrastructure' },
  { rank: 7, title: 'Creator Business OS', why: 'Fast-growing customer base with extreme fragmentation', description: 'Unified CRM, contract management, brand deliverable approvals, and instant invoice discounting for creators.', tier: 'Tier 2 — Marketplace' },
  { rank: 8, title: 'Entertainment Data & Intelligence', why: 'Extreme information asymmetry between legacy studios and emerging creatives', description: 'Neutral data clearinghouse for box office telemetry, viewership benchmarks, and talent pricing indexes.', tier: 'Tier 1 — Infrastructure' },
  { rank: 9, title: 'Entertainment Project Financing & Underwriting', why: 'Large capital flows locked behind subjective, unscientific pitch decks', description: 'Algorithmic project scoring, completion guarantee underwriting, and slate co-investment syndication.', tier: 'Tier 2 — Marketplace' },
  { rank: 10, title: 'Music Rights & Sync Licensing Rail', why: 'Exponential explosion of video content requiring instant cleared music', description: 'Micro-licensing portal matching indie and film music catalogs to creators, OTT producers, and ad agencies in hours.', tier: 'Tier 2 — Marketplace' },
  { rank: 11, title: 'IP & Adaptation Marketplace', why: 'Unlocks thousands of dormant literary, comic, and regional book IP', description: 'Bilateral discovery exchange connecting authors and estates directly with studio development heads.', tier: 'Tier 2 — Marketplace' },
  { rank: 12, title: 'Live Entertainment OS', why: 'Highly fragmented municipal permissions, promoter logistics, and fan ticketing', description: 'Integrated operations suite for tour routing, venue contracts, artist riders, and verified fan ticketing.', tier: 'Tier 3 — Consumer' },
  { rank: 13, title: 'Production Services Marketplace', why: 'Fragmented supply of cameras, lighting, studios, catering, and transport', description: 'Vetted equipment hire and service directory with transparent rate cards and insurance verification.', tier: 'Tier 2 — Marketplace' },
  { rank: 14, title: 'AI Entertainment Workflow & Localisation', why: 'Massive multi-language dubbing and VFX productivity gains across 24 Indian languages', description: 'AI-assisted voice cloning, lip-sync translation, metadata tagging, and background generation with clear IP provenance.', tier: 'Tier 4 — AI' },
  { rank: 15, title: 'Fan Economy & Direct IP Commerce', why: 'Massive superfan willingness to pay currently captured by counterfeit goods', description: 'Official merchandise drops, VIP access, digital collectibles, and community governance for franchises.', tier: 'Tier 3 — Consumer' }
];

export interface WhiteSpaceItem {
  intersection: string;
  question: string;
  breakthrough: string;
}

export const NINE_WHITE_SPACES: WhiteSpaceItem[] = [
  {
    intersection: 'Talent × Trust',
    question: 'Is this person actually who they claim to be, and have they genuinely delivered before?',
    breakthrough: 'A verified industry identity layer with authenticated production credits confirmed by directors.'
  },
  {
    intersection: 'Talent × Payments',
    question: 'Has everyone who worked on this 60-day shoot been paid correctly, transparently, and on time?',
    breakthrough: 'Milestone escrow with conditional payroll drawdown triggers eliminating 90-day wait periods.'
  },
  {
    intersection: 'Content × Rights',
    question: 'Who owns this piece of IP, across which territories, formats, and languages, and where can it legally be used?',
    breakthrough: 'Immutable chain-of-title register with automated modular windowing validation.'
  },
  {
    intersection: 'Rights × Money',
    question: 'When ₹100 crore is generated across theatres, OTT, satellite, and music, who receives exactly what?',
    breakthrough: 'Pre-formalized mathematical recoupment waterfalls accepted by all tranches before principal photography.'
  },
  {
    intersection: 'Production × Workflow',
    question: 'How do 350 people across 18 departments coordinate complex shooting days without burning ₹50k/hour in downtime?',
    breakthrough: 'Dynamic operational handoff protocols with automated readiness triggers and cloud dailies ingest.'
  },
  {
    intersection: 'Content × Data',
    question: 'Which stories, genres, regional languages, and talent combinations have genuine audience propensity?',
    breakthrough: 'Neutral telemetry synthesis aggregating cross-platform viewing signals while protecting privacy.'
  },
  {
    intersection: 'Audience × IP',
    question: 'How do we convert an engaged viewer or fan into a perpetual, paying, high-LTV stakeholder?',
    breakthrough: 'Direct fan commerce corridors, tiered access memberships, and verified franchise communities.'
  },
  {
    intersection: 'Creator × Brand',
    question: 'Which creator matches the brand values, and what authentic commercial ROI was actually generated?',
    breakthrough: 'Objective creative guardrail matrix and verified conversion telemetry replacing vanity metrics.'
  },
  {
    intersection: 'Indian IP × Global Market',
    question: 'How do we take Indian epics, regional masterpieces, and music across worldwide distribution without predatory gatekeeper haircuts?',
    breakthrough: 'Universal co-production bridges, automated 14-language dubbing pipelines, and global digital syndication rails.'
  }
];

export const MASTER_PROBLEM_TAXONOMY_25 = [
  '01. Discovery (Talent, IP, Crew)',
  '02. Talent Matching & Compatibility',
  '03. Hiring & Team Assembling',
  '04. Verification & Counterparty Trust',
  '05. Identity & Credentials',
  '06. Reputation & Credit History',
  '07. Contracts & Deal Modularity',
  '08. Rights & Licensing Architecture',
  '09. Copyright Ownership Tracking',
  '10. Royalties & Residual Accounting',
  '11. Payments & Liquidity Velocity',
  '12. Financing & Slate Underwriting',
  '13. Production Management & Ingest',
  '14. Scheduling & Call Sheet Sync',
  '15. Cross-Department Collaboration',
  '16. Multi-Window Distribution',
  '17. Marketing & Demand Funneling',
  '18. Audience Acquisition & Discovery',
  '19. Audience Engagement & Fandom',
  '20. Analytics & Telemetry Synthesis',
  '21. Monetisation & Diversified Yield',
  '22. Compliance & Censor Regulation',
  '23. Piracy & Leakage Prevention',
  '24. Internationalisation & Co-Production',
  '25. Franchise & Transmedia IP Expansion'
];

export const SEVEN_BIG_PICTURE_LAYERS = [
  { name: 'PEOPLE', items: 'Talent, Creators, Producers, Agents, Managers, Technicians, Crew' },
  { name: 'CONTENT', items: 'Film, TV, OTT, Music, Gaming, Live, Theatre, Audio IP' },
  { name: 'CAPITAL', items: 'Investors, Studios, Brands, Banks, NBFCs, Streaming Platforms' },
  { name: 'INFRASTRUCTURE', items: 'Production, Technology, Distribution, Venues, Ticketing, Cloud' },
  { name: 'IP', items: 'Copyright, Music, Characters, Stories, Formats, Brand Trademarks' },
  { name: 'DATA', items: 'Audience, Talent, Content, Revenue, Rights, Box Office Telemetry' },
  { name: 'MONEY', items: 'Box Office, Subscriptions, Advertising, Licensing, Royalties, Sponsorship' }
];
