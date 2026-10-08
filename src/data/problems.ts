export interface ProblemCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  affectedStakeholders: string[];
  commonFriction: string[];
  synqInterventions: string[];
  realWorldExample: string;
  metric: string;
}

export const SUPER_PROBLEMS: ProblemCategory[] = [
  {
    id: 'discovery',
    name: 'DISCOVERY',
    shortDesc: 'Finding the right people, opportunities, content and audiences.',
    fullDesc: 'Talent, assets, and capital exist in abundance, but high-friction discovery forces stakeholders to rely on closed grapevine networks, outdated directories, or algorithmic noise.',
    affectedStakeholders: ['Creators', 'Producers', 'Investors', 'Talent Agencies', 'Audiences'],
    commonFriction: [
      'Reliance on informal gatekeepers who extract non-value-add toll fees',
      'Asymmetric information on talent availability and project readiness',
      'High search cost for niche domain specialists across regional territories'
    ],
    synqInterventions: [
      'Multi-stakeholder asset & capability indexing',
      'Direct bilateral signal routing eliminating predatory middle layers',
      'Context-aware node matching based on historical execution compatibility'
    ],
    realWorldExample: 'A Tier-1 OTT platform searching for authentic regional dialect writers took 7 months through conventional agencies; Synq discovery framework cut it to 5 business days.',
    metric: '94% reduction in discovery search latency'
  },
  {
    id: 'trust',
    name: 'TRUST',
    shortDesc: 'Verification, credibility and counterparty confidence.',
    fullDesc: 'When counterparties lack verifiable proof of capability, intent, and solvency, deals collapse before term sheets are drafted, or drag through defensive legal stalling.',
    affectedStakeholders: ['Financiers', 'IP Owners', 'Lead Talent', 'Production Houses', 'Brands'],
    commonFriction: [
      'Unverifiable claims of IP ownership or slate commitments',
      'Risk aversion preventing established institutions from partnering with high-velocity creators',
      'Defensive contracting with paralyzing indemnity demands'
    ],
    synqInterventions: [
      'Institutional verification protocols & escrowed deliverable gates',
      'Operational trust scorecards generated from verifiable historical completions',
      'Neutral tripartite governance covenants'
    ],
    realWorldExample: 'A private equity slate investment stalled over solvency fears; Synq engineered an escrowed milestone verification bridge with neutral auditing.',
    metric: '100% counterparty compliance without litigation'
  },
  {
    id: 'money',
    name: 'MONEY',
    shortDesc: 'Financing, payments, monetization and economics.',
    fullDesc: 'Capital flows are jammed by convoluted payment schedules, delayed milestone approvals, opaque recoupment waterfalls, and disconnected banking bridges.',
    affectedStakeholders: ['Investors', 'Producers', 'Crew Vendors', 'Music Publishers', 'Distributors'],
    commonFriction: [
      '90-to-180 day payment cycles creating severe working capital crises for production suppliers',
      'Disputed waterfall priorities between senior debt and junior equity',
      'Lack of programmatic micro-monetization for non-theatrical IP spinoffs'
    ],
    synqInterventions: [
      'Milestone-triggered conditional liquidity architecture',
      'Pre-formalized mathematical recoupment waterfalls accepted by all tranches',
      'Dynamic settlement bridges linking client receipts to supplier disbursements'
    ],
    realWorldExample: 'Crew vendors faced 120-day delays on multi-million dollar shoots; Synq milestone protocols enabled weekly drawdowns against auditable progress reports.',
    metric: 'Cash-flow velocity increased by 3.8x'
  },
  {
    id: 'rights',
    name: 'RIGHTS',
    shortDesc: 'Ownership, licensing, IP and royalties.',
    fullDesc: 'Intellectual property is fractured across conflicting contracts, ambiguous digital rights clauses, fragmented territorial licenses, and lost royalty streams.',
    affectedStakeholders: ['Authors', 'Studios', 'Platforms', 'Music Labels', 'Remake Producers'],
    commonFriction: [
      'Unresolved chain-of-title disputes halting global distribution sales',
      'Ambiguity regarding AI training rights and digital likeness exploitation',
      'Unclaimed or improperly accounted secondary broadcast and streaming royalties'
    ],
    synqInterventions: [
      'Immutable chain-of-title verification consensus architecture',
      'Modularized multi-window licensing templates with defined clawbacks',
      'Automated royalty distribution and audit reconciliation protocols'
    ],
    realWorldExample: 'A hit regional franchise could not be adapted internationally due to conflicting 15-year-old theatrical contracts; Synq engineered a tripartite rights harmonization agreement in 3 weeks.',
    metric: 'Zero unresolved chain-of-title blocks'
  },
  {
    id: 'distribution',
    name: 'DISTRIBUTION',
    shortDesc: 'Getting the right thing to the right audience.',
    fullDesc: 'Even phenomenal content dies in isolation when theatrical release windows, digital platform agreements, international dubbing pipelines, and marketing flights fail to sync.',
    affectedStakeholders: ['Multiplexes', 'OTT Services', 'Regional Distributors', 'International Sales Agents'],
    commonFriction: [
      'Territorial embargo clashes between digital premiere dates and cinema holdbacks',
      'Bottlenecks in regional dubbing, subtitling, and metadata packaging',
      'Disjointed marketing campaigns failing to drive opening-weekend audience turnout'
    ],
    synqInterventions: [
      'Dynamic windowing protocols responsive to day-3 audience velocity',
      'Synchronized localization delivery pipelines across 14 languages simultaneously',
      'Integrated cross-platform audience funnel orchestration'
    ],
    realWorldExample: 'A multi-language feature release faced theatrical cancellations due to delayed dubbing files; Synq asset workflow bridged the localization studio directly to cinema servers.',
    metric: '100% on-schedule multi-territory day-and-date launches'
  },
  {
    id: 'operations',
    name: 'OPERATIONS',
    shortDesc: 'Making production, execution and handoffs work.',
    fullDesc: 'Production schedules hemorrhage budget and momentum whenever handoffs between creative teams, physical crews, technology vendors, and executive oversight lack orchestration.',
    affectedStakeholders: ['Line Producers', 'VFX Studios', 'Logistics Providers', 'Creative Directors', 'Crew Unions'],
    commonFriction: [
      'Idle camera crews waiting on unapproved script revisions or location permits',
      'VFX shot turnover delays compounding post-production overtime costs',
      'Fragmented communication channels causing duplicate asset generation'
    ],
    synqInterventions: [
      'Inter-node operational handoff protocols with automated readiness triggers',
      'Live bottleneck monitoring identifying workflow halts before compounding',
      'Cross-departmental standard operating procedures (SOPs)'
    ],
    realWorldExample: 'A $30M production was burning $45k/day in crew overtime due to erratic VFX plate handoffs; Synq engineered an automated readiness protocol saving $420k.',
    metric: '18% reduction in total principal photography budget variance'
  },
  {
    id: 'data',
    name: 'DATA',
    shortDesc: 'Turning fragmented information into decisions.',
    fullDesc: 'Data lives in proprietary, guarded silos. Platforms refuse to share metrics, cinemas report ticket sales manually, and creators navigate commercial negotiations blind.',
    affectedStakeholders: ['Content Strategists', 'Talent Agents', 'Showrunners', 'Brand Marketers', 'Acquisition Execs'],
    commonFriction: [
      'Opaque platform ratings preventing fair renewal and syndication pricing',
      'Delayed box-office and audience demographic data hindering live marketing pivots',
      'Incompatible analytics standards across linear TV, YouTube, OTT, and social ecosystems'
    ],
    synqInterventions: [
      'Neutral data aggregation corridors preserving commercial confidentiality',
      'Real-time box-office and engagement telemetry synthesis',
      'Standardized valuation benchmarks based on verified performance metrics'
    ],
    realWorldExample: 'A studio was flying blind during franchise season renewals; Synq synthesized multi-platform engagement telemetry to establish equitable creator bonus tiers.',
    metric: '92% decision confidence backed by cross-node data'
  },
  {
    id: 'fragmentation',
    name: 'FRAGMENTATION',
    shortDesc: 'Regions, languages, systems, networks and regulations.',
    fullDesc: 'The modern entertainment ecosystem is hyper-fragmented across dozens of regional languages, disjointed tax incentives, disparate union regulations, and isolated tech stacks.',
    affectedStakeholders: ['Pan-Regional Studios', 'State Regulators', 'International Co-Producers', 'Multi-Lingual Creators'],
    commonFriction: [
      'Inability to scale successful local regional IP across national and global markets',
      'Conflicting state-level subsidies and complex compliance bureaucracy',
      'Disconnected local guilds and disparate talent representation protocols'
    ],
    synqInterventions: [
      'Inter-territory co-production bridge frameworks',
      'Universal compliance harmonization checklists',
      'Pan-ecosystem stakeholder synchronization councils'
    ],
    realWorldExample: 'A South Indian studio attempting Bollywood and Hollywood co-distribution overcame cross-territory legal gridlock via Synq’s pre-negotiated co-production bridge.',
    metric: 'Connects 24+ regional languages and 8 regulatory regimes'
  }
];
