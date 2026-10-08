export interface EcosystemNode {
  id: string;
  name: string;
  category: 'Creation' | 'Financing' | 'Distribution' | 'Infrastructure' | 'Governance';
  description: string;
  connectedNodes: string[];
  typicalFriction: string[];
  synqInterventions: string[];
  metricPreview: string;
}

export const ENTERTAINMENT_NODES: EcosystemNode[] = [
  {
    id: 'talent',
    name: 'Talent',
    category: 'Creation',
    description: 'Actors, directors, writers, and key creative leads navigating project discovery and contract execution.',
    connectedNodes: ['creators', 'production', 'studios', 'brands', 'live'],
    typicalFriction: [
      'Opaque fee structures and multi-agent agency friction',
      'Uncertain project greenlights stalling availability windows',
      'Dispute over back-end profit participation and credits'
    ],
    synqInterventions: [
      'Standardized availability verification & conditional escrow locks',
      'Pre-aligned engagement frameworks reducing multi-month deal stalls',
      'Direct-to-production bilateral alignment protocols'
    ],
    metricPreview: 'Reduces talent contracting latency by 68%'
  },
  {
    id: 'creators',
    name: 'Creators',
    category: 'Creation',
    description: 'Digital-first creators, showrunners, and emerging storytellers bridging independent IP to studios.',
    connectedNodes: ['talent', 'brands', 'platforms', 'advertising', 'audience'],
    typicalFriction: [
      'Incentive mismatch between brand commercial demands and creative authenticity',
      'Delayed payment cycles across cross-border campaigns',
      'Lack of legal frameworks for digital likeness and derivative IP rights'
    ],
    synqInterventions: [
      'Smart deliverable sign-offs linked to milestone liquidity',
      'Clear brand-creator governance protocols with creative guardrails',
      'Repeatable digital-rights licensing templates'
    ],
    metricPreview: '92% dispute reduction in brand collaboration workflows'
  },
  {
    id: 'production',
    name: 'Production',
    category: 'Creation',
    description: 'Line producers, production houses, and technical crews responsible for physical execution.',
    connectedNodes: ['talent', 'studios', 'finance', 'technology', 'vendors'],
    typicalFriction: [
      'Unsynchronized vendor handoffs creating daily cash-burn',
      'Budget deviations without real-time stakeholder visibility',
      'Fragmented union, crew, and logistics compliance'
    ],
    synqInterventions: [
      'Dynamic production milestone synchronization',
      'Bilateral vendor handoff protocols with automated checkpointing',
      'Multi-stakeholder contingency resolution frameworks'
    ],
    metricPreview: 'Eliminates 3-5 days of idle downtime per schedule block'
  },
  {
    id: 'finance',
    name: 'Finance',
    category: 'Financing',
    description: 'Private equity, high-net-worth investors, slate debt funds, and studio financiers.',
    connectedNodes: ['studios', 'production', 'rights', 'distribution', 'government'],
    typicalFriction: [
      'Incomplete risk visibility before committing capital',
      'Complex waterfall dispute resolution across multiple debt/equity tranches',
      'Lack of auditable, transparent milestone metrics during production'
    ],
    synqInterventions: [
      'Pre-structured capital drawdown milestones tied to auditable assets',
      'Recoupment waterfall consensus architecture before contract close',
      'Cross-stakeholder security and collateral verification protocols'
    ],
    metricPreview: 'Expedites financial close from 120 days to 24 days'
  },
  {
    id: 'studios',
    name: 'Studios',
    category: 'Creation',
    description: 'Major production studios and development hubs managing multi-project slates and IP ownership.',
    connectedNodes: ['finance', 'distribution', 'ott', 'theatrical', 'rights', 'production'],
    typicalFriction: [
      'Siloed development queues stalling slate velocity',
      'Mismatch between local regional appetite and centralized greenlight mandates',
      'Friction between theatrical release windows and streaming exclusivity'
    ],
    synqInterventions: [
      'Inter-slate decision orchestrators prioritizing high-alignment packages',
      'Hybrid release window optimization frameworks',
      'Inter-territory co-production bridge protocols'
    ],
    metricPreview: 'Accelerates greenlight-to-principal photography cycle by 45%'
  },
  {
    id: 'rights',
    name: 'Rights & IP',
    category: 'Governance',
    description: 'Copyright holders, estate managers, IP lawyers, and licensing brokers managing chain-of-title.',
    connectedNodes: ['studios', 'music', 'platforms', 'distribution', 'finance'],
    typicalFriction: [
      'Fragmented chain-of-title documentation across territorial jurisdictions',
      'Uncollected or delayed mechanical and performance royalties',
      'Stalled remake and adaptation rights due to legacy contract ambiguities'
    ],
    synqInterventions: [
      'Transparent chain-of-title verification consensus architecture',
      'Automated secondary window exploitation rights protocols',
      'Bilateral sync license negotiation frameworks'
    ],
    metricPreview: '100% audit-proof rights tracking across multi-window releases'
  },
  {
    id: 'music',
    name: 'Music Labels',
    category: 'Creation',
    description: 'Record labels, composers, publishers, and synchronization rights managers.',
    connectedNodes: ['talent', 'production', 'distribution', 'live', 'platforms'],
    typicalFriction: [
      'Master vs. Publishing synchronization clearance logjams',
      'Delayed royalty reporting from digital and broadcast distribution channels',
      'Unclear promotional commitments across talent and record labels'
    ],
    synqInterventions: [
      'Single-window sync clearance frameworks for film/OTT productions',
      'Direct-to-platform royalty audit reporting bridges',
      'Co-promotional SLA frameworks'
    ],
    metricPreview: 'Cuts sync licensing turnaround from 8 weeks to 72 hours'
  },
  {
    id: 'brands',
    name: 'Brands',
    category: 'Financing',
    description: 'Corporate sponsors, consumer brands, product placement partners, and advertising agencies.',
    connectedNodes: ['talent', 'creators', 'production', 'advertising', 'ott'],
    typicalFriction: [
      'Misaligned brand safety guidelines vs. creative artistic liberties',
      'Lack of transparent ROI attribution on in-content integrations',
      'Arbitrary content delivery timelines breaching seasonal marketing windows'
    ],
    synqInterventions: [
      'Pre-script integration guardrails with pre-cleared creative boundaries',
      'Milestone-gated brand delivery schedules with clear remedies',
      'Sponsor-to-platform co-activation frameworks'
    ],
    metricPreview: '3.4x faster brand integration execution with zero editorial friction'
  },
  {
    id: 'advertising',
    name: 'Advertising',
    category: 'Distribution',
    description: 'Media planners, programmatic ad exchanges, and promotional marketing networks.',
    connectedNodes: ['brands', 'creators', 'platforms', 'ott', 'tv'],
    typicalFriction: [
      'Audience measurement discrepancies across linear TV vs. connected TV',
      'Fragmented ad-inventory buying across multiple streaming platforms',
      'Delayed cross-media attribution data'
    ],
    synqInterventions: [
      'Unified cross-network impression reconciliation frameworks',
      'Coordinated launch window ad-flight orchestration',
      'Incentive-aligned commercial partnership frameworks'
    ],
    metricPreview: 'Eliminates cross-channel reporting discrepancies by 84%'
  },
  {
    id: 'distribution',
    name: 'Distribution',
    category: 'Distribution',
    description: 'Theatrical distributors, international sales agents, and content syndication networks.',
    connectedNodes: ['theatrical', 'ott', 'studios', 'finance', 'audience'],
    typicalFriction: [
      'Territory-by-territory minimum guarantee negotiations stalling worldwide rollouts',
      'Delayed physical delivery of DCPs and localized dubbing assets',
      'Accounting holdbacks preventing prompt downstream revenue dispersal'
    ],
    synqInterventions: [
      'Universal distribution contract modularization',
      'Synchronized multi-territory localization workflow bridges',
      'Automated box-office collection settlement protocols'
    ],
    metricPreview: 'Reduces territory negotiation cycles from 6 months to 14 days'
  },
  {
    id: 'ott',
    name: 'OTT Platforms',
    category: 'Distribution',
    description: 'Global and regional streaming services curating video-on-demand content catalogs.',
    connectedNodes: ['studios', 'creators', 'distribution', 'technology', 'audience'],
    typicalFriction: [
      'Aggressive exclusivity demands conflicting with traditional windows',
      'Opaque viewership analytics frustrating creative talent and producers',
      'Technical ingest bottlenecks across regional localization files'
    ],
    synqInterventions: [
      'Tiered windowing and retention incentive structures',
      'Neutral analytics sharing covenants protecting both sides',
      'Standardized ingest and QC certification protocols'
    ],
    metricPreview: 'Smooths onboarding cycles across multi-language regional catalog additions'
  },
  {
    id: 'theatrical',
    name: 'Theatrical / Cinema',
    category: 'Distribution',
    description: 'Multiplex chains, independent cinema owners, and screen programmers.',
    connectedNodes: ['studios', 'distribution', 'advertising', 'audience'],
    typicalFriction: [
      'Showtime allocation conflicts between tentpole titles and local cinema',
      'Disputes over theatrical-to-digital holdback windows',
      'Concession and ticketing revenue share reporting delays'
    ],
    synqInterventions: [
      'Dynamic holdback adjustment frameworks based on week-one performance',
      'Transparent multiplex ticketing verification bridges',
      'Coordinated national promotional sprint protocols'
    ],
    metricPreview: 'Optimal screen occupancy optimization through dynamic holdback bridges'
  },
  {
    id: 'tv',
    name: 'Linear TV / Broadcast',
    category: 'Distribution',
    description: 'National and regional broadcast networks, cable channels, and satellite operators.',
    connectedNodes: ['advertising', 'studios', 'government', 'audience'],
    typicalFriction: [
      'Aging commercial models struggling with digital viewing fragmentation',
      'Complex regulatory broadcast compliance checks delaying transmission',
      'Delayed broadcast rights syndication payments'
    ],
    synqInterventions: [
      'Simulcast hybrid monetization frameworks',
      'Automated compliance clearance workflows',
      'Syndication settlement bridges'
    ],
    metricPreview: 'Real-time broadcast-to-digital co-monetization synchronization'
  },
  {
    id: 'technology',
    name: 'Technology',
    category: 'Infrastructure',
    description: 'VFX houses, AI production tools, virtual production studios, and rendering pipelines.',
    connectedNodes: ['production', 'studios', 'creators', 'ott'],
    typicalFriction: [
      'Unclear pipeline integration standards across legacy studio workflows',
      'Disputes regarding generative AI IP indemnification and training data provenance',
      'Unexpected cost overruns during post-production cloud rendering'
    ],
    synqInterventions: [
      'Standardized tech-vendor SLA and milestone validation protocols',
      'Clear AI provenance and copyright warranty frameworks',
      'Elastic cloud compute cost-governance agreements'
    ],
    metricPreview: 'Prevents 100% of pipeline delivery halts caused by format incompatibilities'
  },
  {
    id: 'live',
    name: 'Live & Touring',
    category: 'Creation',
    description: 'Concert promoters, festival organizers, ticketing engines, and venue operators.',
    connectedNodes: ['talent', 'music', 'brands', 'audience', 'government'],
    typicalFriction: [
      'Uncoordinated multi-city permits and venue insurance authorizations',
      'Secondary ticketing exploitation and counterfeit access',
      'Promoter vs. artist guarantee disputes during weather or logistical force majeure'
    ],
    synqInterventions: [
      'Comprehensive live event contingency resolution frameworks',
      'Primary-to-secondary ticketing identity bridge protocols',
      'Promoter-venue-talent tripartite SLA contracts'
    ],
    metricPreview: 'Protects multi-city tour profitability against force majeure stalls'
  },
  {
    id: 'audience',
    name: 'Audience / Fans',
    category: 'Infrastructure',
    description: 'Ticketholders, streaming subscribers, fandom communities, and cultural influencers.',
    connectedNodes: ['talent', 'theatrical', 'ott', 'creators', 'brands'],
    typicalFriction: [
      'Fragmented subscription fatigue across disjointed platforms',
      'Disconnection between fandom feedback and creator story development',
      'Poor discovery of niche regional content amidst algorithmic noise'
    ],
    synqInterventions: [
      'Fandom governance and community engagement frameworks',
      'Unified discovery and recommendation handoff bridges',
      'Direct creator-fan appreciation protocols'
    ],
    metricPreview: 'Elevates organic fan conversion through seamless cross-channel discovery'
  },
  {
    id: 'government',
    name: 'Government & Regulators',
    category: 'Governance',
    description: 'Censor boards, tax rebate commissions, film facilitation offices, and tourism authorities.',
    connectedNodes: ['production', 'studios', 'finance', 'distribution'],
    typicalFriction: [
      'Complex, bureaucratic tax rebate auditing delaying critical capital returns',
      'Unpredictable censorship guidelines stalling national releases',
      'Disparate multi-state filming permits and municipal delays'
    ],
    synqInterventions: [
      'Pre-vetted subsidy compliance submission architectures',
      'Proactive regulatory clearance and script review frameworks',
      'Single-window municipal filming coordination bridges'
    ],
    metricPreview: 'Shortens subsidy rebate audit and recovery time from 18 months to 90 days'
  }
];
