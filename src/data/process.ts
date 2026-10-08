export interface MechanismStage {
  step: string;
  name: string;
  action: string;
  question: string;
  details: string[];
  whatHappens: string;
}

export const MECHANISM_STAGES: MechanismStage[] = [
  {
    step: '01',
    name: 'NODE',
    action: 'Map the system.',
    question: 'Who needs to work together?',
    details: [
      'Identify stakeholders, roles, and functional capabilities',
      'Examine resource asymmetries and structural dependencies',
      'Map commercial incentives, legal covenants, and prior relationships'
    ],
    whatHappens: 'We isolate every autonomous entity in the ecosystem to understand what they possess, what they lack, and what compels them to act.'
  },
  {
    step: '02',
    name: 'GAP',
    action: 'Find the friction.',
    question: 'Why aren\'t they working together?',
    details: [
      'Uncover hidden information asymmetries and blind spots',
      'Diagnose counterparty distrust and credibility deficits',
      'Locate misaligned economic incentives and broken handoff processes'
    ],
    whatHappens: 'We locate the precise impedance preventing two capable nodes from executing together — whether informational, legal, financial, or cultural.'
  },
  {
    step: '03',
    name: 'BRIDGE',
    action: 'Build what is missing.',
    question: 'What needs to exist between them?',
    details: [
      'Engineer targeted bilateral commercial agreements & protocols',
      'Design neutral governance, escrow mechanisms, and rights frameworks',
      'Deploy milestone-gated operational workflows and technical handoffs'
    ],
    whatHappens: 'We engineer the connective infrastructure that neutralizes the friction so counterparties can interact with complete confidence.'
  },
  {
    step: '04',
    name: 'FLOW',
    action: 'Orchestrate the movement.',
    question: 'How will they work together?',
    details: [
      'Orchestrate the progression: Information → Decision → Action → Transaction → Outcome',
      'Ensure frictionless communication and milestone accountability',
      'Real-time bottleneck resolution when external shocks arise'
    ],
    whatHappens: 'We guide the live interaction through its operational lifecycle, ensuring energy translates directly into completed value.'
  },
  {
    step: '05',
    name: 'LOOP',
    action: 'Make it repeatable.',
    question: 'How can they work together repeatedly and better?',
    details: [
      'Codify the breakthrough into Standard Operating Procedures (SOPs)',
      'Institutionalize recurring frameworks, standards, and governance rules',
      'Feed performance telemetry back into the Inter-Node Intelligence layer'
    ],
    whatHappens: 'We convert a bespoke, hard-won breakthrough into an institutionalized asset that makes every subsequent interaction faster, cheaper, and frictionless.'
  }
];

export interface OperatingCycleStage {
  letter: string;
  title: string;
  headline: string;
  description: string;
  actionList: string[];
}

export const OPERATING_CYCLE: OperatingCycleStage[] = [
  {
    letter: 'A',
    title: 'ASSESS',
    headline: 'Understand the ecosystem.',
    description: 'Deep audit of the stakeholder landscape, prevailing dynamics, latent assets, and institutional incentives.',
    actionList: ['Stakeholder topology mapping', 'Incentive audit', 'Resource inventorying']
  },
  {
    letter: 'B',
    title: 'BREAK DOWN',
    headline: 'Find the root cause.',
    description: 'Dissect the impedance layer. Distinguish superficial symptoms from the fundamental friction blocking movement.',
    actionList: ['Impedance diagnosis', 'Information asymmetry mapping', 'Risk factor isolation']
  },
  {
    letter: 'C',
    title: 'CONNECT',
    headline: 'Align the right nodes.',
    description: 'Assemble the precise counterparties capable of generating compound value when properly synchronized.',
    actionList: ['Capability matching', 'Intent verification', 'Strategic alignment']
  },
  {
    letter: 'D',
    title: 'DESIGN',
    headline: 'Build the bridge.',
    description: 'Architect the contractual, operational, and financial framework required to make collaboration mutually risk-free.',
    actionList: ['Governance blueprinting', 'Milestone escrow protocol', 'Incentive synchronization']
  },
  {
    letter: 'E',
    title: 'EXECUTE',
    headline: 'Move the flow.',
    description: 'Supervise live transaction velocity, coordinate handoffs, enforce SLAs, and eliminate emergent bottlenecks.',
    actionList: ['Live flow orchestration', 'Handoff enforcement', 'Active bottleneck triage']
  },
  {
    letter: 'F',
    title: 'FORMALIZE',
    headline: 'Create the repeatable system.',
    description: 'Translate the solved interaction into durable SOPs, template instruments, and ecosystem standards.',
    actionList: ['SOP institutionalization', 'Contract template codification', 'Ecosystem playbook creation']
  }
];

export interface FourWItem {
  id: 'what' | 'why' | 'how' | 'where';
  question: string;
  tagline: string;
  explanation: string;
  examples: string[];
}

export const FOUR_W_ENGINE: FourWItem[] = [
  {
    id: 'what',
    question: 'WHAT',
    tagline: 'What is happening?',
    explanation: 'Observing the actual empirical state of the ecosystem rather than assumptions or corporate PR.',
    examples: [
      'A tier-1 regional studio has 6 projects stalled in pre-production',
      'Creators with 20M+ followers are losing 40% of brand deal revenues in agency delays',
      'Multiplex screens are running at 28% occupancy while indie films cannot get distribution'
    ]
  },
  {
    id: 'why',
    question: 'WHY',
    tagline: 'Why is it happening?',
    explanation: 'Diagnosing the structural, psychological, or informational friction between counterparties.',
    examples: [
      'Incentives are asymmetric: the financier demands IP ownership that the director cannot surrender',
      'Lack of auditable milestone verification breeds reciprocal distrust',
      'Contractual indemnity clauses are structured for legacy linear media rather than dynamic digital IP'
    ]
  },
  {
    id: 'how',
    question: 'HOW',
    tagline: 'How can it work better?',
    explanation: 'Engineering the bridging mechanism that re-aligns incentives and removes operational friction.',
    examples: [
      'By deploying milestone-gated escrow contracts with neutral third-party verification',
      'By modularizing IP rights into distinct windows and revenue tiers',
      'By establishing automated deliverable QC handoffs between camera crews and post facilities'
    ]
  },
  {
    id: 'where',
    question: 'WHERE',
    tagline: 'Where should the intervention happen?',
    explanation: 'Isolating the highest-leverage inter-node touchpoint where minimal effort creates maximum flow.',
    examples: [
      'Between the line producer and the secondary VFX vendor at Day 14 of shooting',
      'At the initial letter-of-intent stage before lawyers redline defensive standard terms',
      'At the box-office settlement layer to accelerate working capital back to content creators'
    ]
  }
];

export interface ComparisonEntity {
  name: string;
  role: string;
  mode: string;
  limitation: string;
  isSynq?: boolean;
}

export const COMPARISON_ENTITIES: ComparisonEntity[] = [
  {
    name: 'Consultant',
    role: 'Recommends.',
    mode: 'Delivers static slide decks and strategic frameworks, then exits before the mess of live execution.',
    limitation: 'Leaves the hard operational handoffs to unaligned stakeholders.'
  },
  {
    name: 'Agency',
    role: 'Represents.',
    mode: 'Fights aggressively for one specific node, often deepening adversarial friction with other nodes.',
    limitation: 'Zero systemic incentive to optimize the health of the broader ecosystem.'
  },
  {
    name: 'Intermediary',
    role: 'Introduces.',
    mode: 'Makes high-level introductions and collects broker fees without engineering the operational trust bridge.',
    limitation: 'Vanishes as soon as negotiations encounter structural friction.'
  },
  {
    name: 'Marketplace',
    role: 'Facilitates transactions.',
    mode: 'Provides a public directory and checkout cart for commoditized, low-complexity transactions.',
    limitation: 'Fails in high-stakes, nuanced, bespoke multi-stakeholder relationships.'
  },
  {
    name: 'Platform',
    role: 'Provides infrastructure.',
    mode: 'Supplies software tools and cloud dashboards, expecting human stakeholders to change behavior.',
    limitation: 'Software alone cannot resolve misaligned incentives, mistrust, or legal gridlock.'
  },
  {
    name: 'ProjectSynq',
    role: 'Makes the nodes work together.',
    mode: 'Operates directly in the space between stakeholders to identify friction, engineer bridges, orchestrate flow, and institutionalize repeatable systems.',
    limitation: 'We don\'t own the nodes. We engineer the space between them.',
    isSynq: true
  }
];

export const FLYWHEEL_STEPS = [
  'MORE NODES',
  'MORE INTERACTIONS',
  'MORE FRICTION DISCOVERED',
  'MORE GAPS IDENTIFIED',
  'MORE BRIDGES',
  'MORE FLOWS',
  'MORE OUTCOMES',
  'MORE LEARNING',
  'MORE INTELLIGENCE',
  'BETTER CONNECTIONS',
  'MORE TRUST',
  'MORE NODES'
];

export const VALUE_PILLARS = [
  {
    title: 'FASTER',
    metric: '68% Less Latency',
    desc: 'Eliminating the friction, communication dead-ends, and defensive legal stalling that turns 2-week deals into 6-month slogs.'
  },
  {
    title: 'SMARTER',
    metric: 'Inter-Node Intelligence™',
    desc: 'Replacing blind guesses and grapevine rumors with empirical insights from real-world cross-stakeholder interactions.'
  },
  {
    title: 'TRUSTED',
    metric: '100% Audit Integrity',
    desc: 'Building institutional counterparty confidence through neutral verification, escrowed milestones, and transparent governance.'
  },
  {
    title: 'REPEATABLE',
    metric: 'Institutional SOPs',
    desc: 'Converting high-friction bespoke negotiations into standardized, plug-and-play operating systems for future collaborations.'
  },
  {
    title: 'SCALABLE',
    metric: 'Ecosystem-Wide Impact',
    desc: 'A working bridge between two nodes expands into an institutionalized rail that powers hundreds of similar industry connections.'
  }
];

export const BUSINESS_ENGAGEMENTS = [
  {
    title: 'SYNQ DISCOVERY',
    badge: 'Stage 1',
    purpose: 'Ecosystem & Stakeholder Mapping',
    desc: 'Deep audit of who exists, what capabilities and assets are locked in silos, and where hidden value pools reside.',
    deliverable: 'Comprehensive Ecosystem Node Map & Dependency Blueprint'
  },
  {
    title: 'SYNQ DIAGNOSTIC',
    badge: 'Stage 2',
    purpose: 'Friction & Gap Diagnosis',
    desc: 'Rigorous forensic investigation into why specific handoffs fail, where distrust resides, and why capital or momentum is trapped.',
    deliverable: 'Inter-Node Friction Audit & Root-Cause Matrix'
  },
  {
    title: 'SYNQ BRIDGE',
    badge: 'Stage 3',
    purpose: 'Connection & Mechanism Design',
    desc: 'Engineering the exact legal, commercial, and operational bridges required to align incentives and dissolve friction.',
    deliverable: 'Bespoke Bilateral Alignment Protocol & Governance Instruments'
  },
  {
    title: 'SYNQ FLOW',
    badge: 'Stage 4',
    purpose: 'Execution & Live Orchestration',
    desc: 'Hands-on orchestration of the live transaction, coordinating handoffs, enforcing SLAs, and clearing roadblocks in real-time.',
    deliverable: 'End-to-End Orchestrated Outcome Delivery'
  },
  {
    title: 'SYNQ SYSTEM',
    badge: 'Stage 5',
    purpose: 'Repeatable Operating Model',
    desc: 'Translating successful one-off engagements into standardized SOPs, recurring workflows, and institutional playbooks.',
    deliverable: 'Enterprise SOP Playbook & Reusable Ecosystem Rail'
  },
  {
    title: 'SYNQ TRANSFORMATION',
    badge: 'Enterprise',
    purpose: 'Large-Scale Ecosystem Redesign',
    desc: 'Comprehensive multi-stakeholder operational overhaul for entire studio slates, distributor networks, or pan-regional consortiums.',
    deliverable: 'Whole-Ecosystem Operating Architecture & Continuous Sync Desk'
  }
];

export const ENGAGEMENT_LEVELS = [
  {
    name: 'CONNECT',
    subtitle: 'The nodes aren\'t connected.',
    outcome: 'Connection',
    desc: 'When critical counterparties are isolated, unaware of each other, or separated by insurmountable discovery barriers.',
    action: 'We map the nodes, verify capabilities, and engineer the initial alignment corridor.'
  },
  {
    name: 'ORCHESTRATE',
    subtitle: 'The nodes are connected but aren\'t functioning.',
    outcome: 'Function',
    desc: 'When counterparties know each other and want to collaborate, but recurring friction, distrust, or broken workflows stall momentum.',
    action: 'We design the missing bridge, align economic incentives, and actively guide the flow of execution.'
  },
  {
    name: 'SYSTEMIZE',
    subtitle: 'The same friction repeatedly occurs.',
    outcome: 'System',
    desc: 'When the same operational headaches, payment delays, or rights ambiguities drain time and resources on every single deal.',
    action: 'We codify the successful bridge into a repeatable, institutionalized operating system.'
  }
];

export const WHY_PROJECTSYNQ = [
  {
    title: 'Asset-light',
    desc: 'We don\'t need to own the ecosystem. We own zero studios, zero servers, and zero talent rosters. Our agility comes from operating without competing.'
  },
  {
    title: 'Trust-heavy',
    desc: 'Relationships and credibility are infrastructure. Neutrality is our greatest asset; neither side fears that we have a hidden agenda.'
  },
  {
    title: 'Process-driven',
    desc: 'We turn emotional, chaotic, high-stakes human complexity into structured, step-by-step movement that consistently yields results.'
  },
  {
    title: 'Ecosystem-native',
    desc: 'We understand the subtle institutional psychology and unspoken codes of complex networks, starting with high-complexity media and entertainment.'
  },
  {
    title: 'Outcome-oriented',
    desc: 'We measure success not in billable hours or slide decks, but in executed contracts, delivered masters, and functioning systems.'
  },
  {
    title: 'Continuously learning',
    desc: 'Every engagement feeds Inter-Node Intelligence™, making every subsequent bridge faster, smarter, and more resilient.'
  }
];
