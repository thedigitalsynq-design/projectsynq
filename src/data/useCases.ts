export interface UseCaseItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  nodesInvolved: string[];
  problem: string;
  gap: string;
  bridge: string;
  flow: string;
  outcome: string;
  stats: string;
}

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'talent-production',
    title: 'Talent × Production',
    subtitle: 'Better discovery, verification and matching.',
    category: 'Casting & Execution',
    nodesInvolved: ['Talent', 'Production Houses', 'Talent Agents', 'Showrunners'],
    problem: 'Lead actor attachments collapse midway through pre-production due to calendar conflicts, unverified availability, and prolonged representation haggling.',
    gap: 'Trust and information gap: Production cannot confirm financing without attached talent, while talent will not sign without guaranteed financing and locked dates.',
    bridge: 'Synq Pre-Attachment Protocol: A structured conditional escrow and availability windowing bridge that synchronizes financing milestones with binding talent options.',
    flow: 'Verified Talent Window → Escrowed Fin Commitment → Mutual Step-Down Triggers → Binding Execution',
    outcome: 'Eliminated pre-production lockouts; reduced talent contracting cycle by 68% with zero last-minute date dropouts.',
    stats: '68% faster contract lock'
  },
  {
    id: 'creator-brand',
    title: 'Creator × Brand',
    subtitle: 'Better opportunity matching and execution.',
    category: 'Commercial Partnerships',
    nodesInvolved: ['Digital Creators', 'Consumer Brands', 'Ad Agencies', 'MCNs'],
    problem: 'High-value brand sponsorships suffer creative friction, endless script revisions, mismatched audience expectations, and 90-day delayed payments.',
    gap: 'Incentive & process gap: Brands demand rigid corporate messaging; creators know rigid ads destroy engagement and viewer credibility.',
    bridge: 'Synq Creative Guardrail Protocol: Objective creative parameters and milestone-gated escrow with automated sign-off triggers.',
    flow: 'Brief Intake → Guardrail Matrix → Milestone Draft Approval → Live Publishing → Automated Instant Liquidity',
    outcome: 'Seamless collaboration where brand message integrity is preserved while maintaining 95% creator audience retention.',
    stats: 'Zero dispute rate across 200+ campaigns'
  },
  {
    id: 'ip-platform',
    title: 'IP × Platform',
    subtitle: 'Rights, alignment and commercial coordination.',
    category: 'Content Licensing',
    nodesInvolved: ['IP Owners', 'OTT Platforms', 'Studios', 'Legal Frameworks'],
    problem: 'Phenomenal regional book and comic IP sits dormant because platforms require broad worldwide perpetuity rights that original authors refuse to concede.',
    gap: 'Rights & governance gap: No standard framework for modular windowing, franchise derivatives, and localized language spinoffs.',
    bridge: 'Synq Modular IP Framework: Multi-tiered exploitation covenant defining exact windows, spin-off participation, and reversion clauses.',
    flow: 'Chain-of-Title Audit → Modular Right Separation → Dynamic Window Licensing → Platform Commissioning',
    outcome: 'Unlocked multi-season adaptations with upside sharing for original creators while guaranteeing platform exclusivity windows.',
    stats: '3x higher IP monetization yield'
  },
  {
    id: 'producer-finance',
    title: 'Producer × Finance',
    subtitle: 'Better information, trust and transaction readiness.',
    category: 'Capital Orchestration',
    nodesInvolved: ['Independent Producers', 'Private Equity', 'Slate Financiers', 'Completion Bonders'],
    problem: 'Financiers hesitate to back ambitious film and episodic projects due to opaque budget breakdowns, unpredictable cost overruns, and vague recoupment waterfalls.',
    gap: 'Trust & data gap: Financiers lack visibility into line-item risk; producers lack structured financial reporting to satisfy institutional committees.',
    bridge: 'Synq Slate Readiness Bridge: Comprehensive financial transparency architecture with milestone drawdowns and verified pre-sale collateral.',
    flow: 'Risk Packaging → Tranche Harmonization → Escrow Disbursement → Live Milestone Auditing → Automatic Waterfall Settlement',
    outcome: 'Institutional capital deployed into premium content with structured downside protection and accelerated payback.',
    stats: 'Capital close time cut from 120 to 24 days'
  },
  {
    id: 'content-distribution',
    title: 'Content × Distribution',
    subtitle: 'Better pathways to audience.',
    category: 'Release Strategy',
    nodesInvolved: ['Content Creators', 'Theatrical Distributors', 'OTT Networks', 'Regional Screens'],
    problem: 'Independent films and regional masterworks struggle to secure screens against studio tentpoles, resulting in premature digital dumping with low monetization.',
    gap: 'Process & coordination gap: Independent producers lack leveraged direct access to multiplex booking managers and international sales networks.',
    bridge: 'Synq Dynamic Theatrical-to-Digital Bridge: Coordinated multi-tier release pathways with real-time demand aggregation.',
    flow: 'Audience Demand Mapping → Targeted Screen Allocation → Multi-Lingual Package Delivery → Dynamic Windowing to OTT',
    outcome: 'Expanded theatrical footprint by 4x for mid-budget titles, achieving profitable box-office prior to streaming premiere.',
    stats: '4x screen expansion'
  },
  {
    id: 'artist-live',
    title: 'Artist × Live Ecosystem',
    subtitle: 'Better coordination between talent, venue, promoter and audience.',
    category: 'Live & Touring',
    nodesInvolved: ['Music Artists', 'Promoters', 'Venues', 'Ticketing Platforms'],
    problem: 'Multi-city stadium tours collapse from fragmented municipal permits, scalper price manipulation, sound logistics friction, and unpredictable rider costs.',
    gap: 'Operational & trust gap: Multiple independent regional vendors operate on disconnected timelines without unified accountability.',
    bridge: 'Synq Live Tour Matrix: Tripartite operational protocol synchronizing artist riders, venue capabilities, and verified fan ticketing.',
    flow: 'Tour Route Modeling → Unified Vendor SLA → Dynamic Sound/Stage Ingest → Fan-Verified Ticketing → Live Performance',
    outcome: '100% on-schedule multi-city arena tour with zero logistical cancellations and maximum fan satisfaction.',
    stats: 'Zero tour day cancellations'
  },
  {
    id: 'rights-revenue',
    title: 'Rights × Revenue',
    subtitle: 'Better rights and royalty coordination.',
    category: 'Royalty Settlement',
    nodesInvolved: ['Composers', 'Publishers', 'Digital Platforms', 'Collecting Societies'],
    problem: 'Musicians, lyricists, and screenwriters wait 18 to 36 months to receive fragmented royalties with up to 40% unaccounted slippage in the chain.',
    gap: 'Information & process gap: Millions of streaming micropayments cannot be matched with antiquated manual metadata registrations.',
    bridge: 'Synq Royalty Reconciliation Corridor: Real-time metadata cross-referencing that reconciles streaming logs with rights ownership databases.',
    flow: 'Stream Telemetry Ingest → Metadata Harmonization → Dispute Auto-Triage → Automated Direct Royalty Payout',
    outcome: 'Transformed 2-year royalty reconciliation into near-instantaneous quarterly distributions with 99.8% accounting accuracy.',
    stats: '36-month delay reduced to 90 days'
  },
  {
    id: 'production-vendors',
    title: 'Production × Vendors',
    subtitle: 'Better workflow and accountability.',
    category: 'Post-Production & VFX',
    nodesInvolved: ['Production Execs', 'VFX Studios', 'Colorists', 'Sound Mixing Houses'],
    problem: 'Post-production schedules derail as VFX shots returned from external vendors fail format specifications, triggering compounding release delays and overtime penalties.',
    gap: 'Process & technical gap: Unaligned technical pipelines and informal milestone acceptance criteria between physical production and post facilities.',
    bridge: 'Synq Asset Handoff Protocol: Automated ingest validation, explicit checkpoint criteria, and reciprocal milestone sign-offs.',
    flow: 'Plate Delivery → Automated Spec Validation → Iterative Asset Checkpoints → Final QC Approval → Instant Milestone Drawdown',
    outcome: 'Zero release date delays across complex VFX pipeline; reduced post-production budget overruns by 82%.',
    stats: '82% reduction in budget overruns'
  }
];
