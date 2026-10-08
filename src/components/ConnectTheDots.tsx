import React, { useState } from 'react';
import {
  GitFork,
  Boxes,
  Zap,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Film,
  Users,
  DollarSign,
  Gamepad2,
  CheckCircle2,
  Eye,
  RefreshCw,
  Clock,
  Shuffle
} from 'lucide-react';

interface SiloConnection {
  id: string;
  siloName: string;
  category: string;
  icon: React.ElementType;
  trappedAsset: string;
  isolatedProblem: string;
  targetNode: string;
  targetNeed: string;
  connectedDot: string;
  valueUnlocked: string;
  metrics: {
    idleReclaimed: string;
    velocityGain: string;
    capitalSaved: string;
  };
}

export const ConnectTheDots: React.FC = () => {
  const [selectedSiloId, setSelectedSiloId] = useState<string>('silo-infrastructure');

  const silos: SiloConnection[] = [
    {
      id: 'silo-infrastructure',
      siloName: 'Idle Infrastructure & Facilities',
      category: 'PHYSICAL & TECH ASSETS',
      icon: Film,
      trappedAsset: 'Sound stages, virtual production LED volumes, and VFX render clusters sitting dark between project slates.',
      isolatedProblem: 'Production studios bear heavy fixed real estate and hardware leasing costs with 35–45% unmonetized idle downtime.',
      targetNode: 'Gaming Studios & Direct-to-Consumer Brands',
      targetNeed: 'Need AAA-grade volumetric capture & high-speed rendering for episodic trailers and ad campaigns on short notice.',
      connectedDot: 'Dynamic Inter-Node Time-Share Protocol with pre-cleared rate cards and zero agent friction.',
      valueUnlocked: 'Monetizes 100% of dark stage days, slashes overhead for primary studios, and reduces indie production CapEx by 60%.',
      metrics: {
        idleReclaimed: '42 Days/Year Reclaimed',
        velocityGain: '3.5x Faster Turnaround',
        capitalSaved: '₹18 Cr CapEx Avoided'
      }
    },
    {
      id: 'silo-dormant-ip',
      siloName: 'Dormant IP & Vaulted Scripts',
      category: 'CREATIVE & RIGHTS SILO',
      icon: Boxes,
      trappedAsset: '1,000+ optioned books, unproduced screenplays, and dormant regional franchise rights locked in corporate archives.',
      isolatedProblem: 'Traditional studios hold rights without production greenlights due to slate caps; writers remain unpaid and locked out.',
      targetNode: 'Regional OTT Buyers & Audio/Podcast Networks',
      targetNeed: 'Aggressively competing for proven narrative lore, established IP, and ready episodic outlines for vernacular audiences.',
      connectedDot: 'Transmedia Rights Carve-Out Bridge separating audio/regional derivative licenses from theatrical exclusivity.',
      valueUnlocked: 'Transforms dead library balance sheets into immediate recurring IP licensing revenue without forfeiting primary studio equity.',
      metrics: {
        idleReclaimed: '100% Vault Monetization',
        velocityGain: '4-Week License Clearance',
        capitalSaved: '₹35 Cr Trapped Value Unfrozen'
      }
    },
    {
      id: 'silo-talent-windows',
      siloName: 'Fragmented Talent Windows',
      category: 'HUMAN CAPITAL SILO',
      icon: Users,
      trappedAsset: 'A-list directors, cinematographers, and actors stranded in 60-day calendar gaps caused by third-party production delays.',
      isolatedProblem: 'Talent loses earning velocity while locked in exclusivity limbo; independent creators cannot access premier directors.',
      targetNode: 'Prestige Mini-Series & Commercial Content Houses',
      targetNeed: 'High-budget 15-day brand anthology slates that require marquee directorial craft on precise short schedules.',
      connectedDot: 'Time-Window Arbitrage Corridor matching sudden schedule voids to fast-turnaround, premium non-compete productions.',
      valueUnlocked: 'Eliminates talent idle fatigue, unlocks premium packaging for agile producers, and generates incremental talent income.',
      metrics: {
        idleReclaimed: '60 Days Rescheduled',
        velocityGain: 'Zero Talent Window Drag',
        capitalSaved: '₹12 Cr Revenue Unlocked'
      }
    },
    {
      id: 'silo-trapped-data',
      siloName: 'Trapped Data & Asymmetric Insights',
      category: 'INTELLIGENCE SILO',
      icon: Database,
      trappedAsset: 'Theatrical ticketing data, streaming completion telemetry, and music streaming metrics isolated across walled gardens.',
      isolatedProblem: 'Financiers and producers evaluate commercial viability using year-old gut-feel anecdotes rather than empirical signals.',
      targetNode: 'Independent Film Financiers & Co-Producers',
      targetNeed: 'Require reliable, anonymized audience demographic demand trends to price risk and pre-sell distribution corridors.',
      connectedDot: 'Inter-Node Intelligence™ Aggregation Rail synthesizing anonymous cross-platform demand vectors.',
      valueUnlocked: 'Replaces defensive speculation with empirical audience demand mapping; de-risks greenlight decisions across slates.',
      metrics: {
        idleReclaimed: 'Zero Blind Guesswork',
        velocityGain: 'Real-Time Market Signals',
        capitalSaved: '40% Underwriting Drag Reduced'
      }
    },
    {
      id: 'silo-stranded-capital',
      siloName: 'Stranded Private Capital & HNIs',
      category: 'FINANCIAL SILO',
      icon: DollarSign,
      trappedAsset: '₹2,500+ Cr of institutional credit, family office funds, and private wealth seeking 18%+ entertainment returns.',
      isolatedProblem: 'Capital remains on the sidelines due to opaque balance sheets, non-transparent waterfalls, and delayed audit trails.',
      targetNode: 'Mid-Budget High-Concept Independent Producers',
      targetNeed: 'Starved for cash-flow liquidity during production-to-OTT delivery gaps; crippled by predatory informal lenders.',
      connectedDot: 'Milestone-Gated Smart Escrow Bridge with automated waterfall priority and direct platform delivery triggers.',
      valueUnlocked: 'Mobilizes dry capital into structured, protected production debt, lowering borrowing costs for creators by 50%.',
      metrics: {
        idleReclaimed: '100% Escrow Transparency',
        velocityGain: 'T+24h Milestone Settlement',
        capitalSaved: '14% Lower Financing Cost'
      }
    },
    {
      id: 'silo-cross-sector',
      siloName: 'Cross-Sector Synergies (Film ↔ Gaming)',
      category: 'CROSS-FUNCTIONAL SILO',
      icon: Gamepad2,
      trappedAsset: 'High-poly 3D production assets, world-building lore, and character models built for 120-minute theatrical releases.',
      isolatedProblem: 'Film producers discard digital assets after theatrical wrap; Indian game studios spend millions rebuilding similar assets from scratch.',
      targetNode: 'Mobile & PC Game Studios',
      targetNeed: 'Need culturally resonant, blockbuster-quality 3D assets to build mobile battle-royale and narrative action titles.',
      connectedDot: 'Cross-Industry Asset Repurposing Pipeline with shared revenue waterfalls between game studios and film producers.',
      valueUnlocked: 'Cuts game development timelines by 8 months while providing film producers with high-margin interactive royalties.',
      metrics: {
        idleReclaimed: '8 Months Dev Cut',
        velocityGain: 'Instant Transmedia Parity',
        capitalSaved: '₹25 Cr Asset Reuse Yield'
      }
    }
  ];

  const activeSilo = silos.find(s => s.id === selectedSiloId) || silos[0];
  const ActiveIcon = activeSilo.icon;

  return (
    <section id="silos" className="relative py-28 md:py-36 bg-background border-t border-white/[0.06] overflow-hidden scroll-mt-20">
      {/* Cupertino Spotlight Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[500px] bg-accent-cyan/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[450px] bg-accent-lime/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Apple-style Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 apple-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Core Operating Principle</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-white leading-[1.04]">
            Connect the Dots.{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2 font-black">
              Leverage Every Silo.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
            Every day, billions in capabilities, resources, talent hours, and creative IP remain trapped in isolated silos. ProjectSynq identifies hidden intersections and orchestrates bilateral bridges — <strong className="text-white font-bold">connecting the right stakeholder, asset, and opportunity at the exact right time</strong>.
          </p>
        </div>

        {/* 6 Silo Quick-Selector Bar (Apple Cupertino Segmented Control) */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-synq-dim block mb-3">
            Select a Trapped Silo to Simulate the Inter-Node Bridge:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {silos.map((s) => {
              const SIcon = s.icon;
              const isSelected = selectedSiloId === s.id;

              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSiloId(s.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-surface-100/90 border-accent-cyan shadow-[0_0_25px_rgba(0,240,255,0.15)] ring-1 ring-accent-cyan/30 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-accent-cyan text-background-deep' : 'bg-surface-200 text-synq-muted'
                    }`}>
                      <SIcon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                    )}
                  </div>
                  <span className="text-xs font-bold text-white line-clamp-1">
                    {s.siloName}
                  </span>
                  <span className="text-[10px] font-mono text-synq-dim line-clamp-1 mt-0.5">
                    {s.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Apple Bento Grid Demonstration: Silo Trapped vs. Bridge Connected */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Bento Card 1: THE TRAPPED SILO (Spans 5 Columns) */}
          <div className="lg:col-span-5 apple-bento-card p-8 sm:p-10 flex flex-col justify-between border-rose-500/20 bg-gradient-to-br from-rose-950/20 via-surface-100/60 to-background-deep relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="apple-pill px-3 py-1 text-xs font-mono text-rose-400 border-rose-500/30 bg-rose-500/10">
                  BEFORE: ISOLATED SILO
                </span>
                <span className="font-mono text-xs text-synq-dim">VALUE TRAPPED</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeSilo.siloName}
                  </h3>
                  <span className="text-[11px] font-mono text-rose-300">
                    {activeSilo.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-6 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.05]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-synq-dim block mb-1">
                    Trapped Asset / Capability:
                  </span>
                  <p className="text-zinc-200 leading-relaxed font-medium">
                    {activeSilo.trappedAsset}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block mb-1">
                    Systemic Cost of Isolation:
                  </span>
                  <p className="text-rose-200/90 leading-relaxed">
                    {activeSilo.isolatedProblem}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-synq-dim">
              <span>Status: Underutilized Capacity</span>
              <span className="text-rose-400 font-bold">● High Friction Drag</span>
            </div>
          </div>

          {/* Bento Card 2: THE CONNECTED DOT (Spans 7 Columns) */}
          <div className="lg:col-span-7 apple-bento-card p-8 sm:p-10 flex flex-col justify-between border-accent-cyan/40 bg-gradient-to-br from-surface-100/90 via-surface-100/60 to-background-deep relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 apple-pill px-3 py-1 text-xs font-mono text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10">
                  <Zap className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>PROJECTSYNQ: THE CONNECTIVE BRIDGE</span>
                </div>
                <span className="font-mono text-xs text-accent-lime font-bold">VALUE UNLOCKED</span>
              </div>

              {/* Counterparty Target Node */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-synq-dim block">
                    Counterparty Node in Need:
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    {activeSilo.targetNode}
                  </h4>
                </div>
                <div className="apple-pill px-3 py-1 text-xs font-mono text-accent-lime">
                  Unmet Demand Matched
                </div>
              </div>

              {/* The Dot Connected */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan block mb-1">
                    How ProjectSynq Connects the Dots:
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    {activeSilo.connectedDot}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
                  {activeSilo.valueUnlocked}
                </p>
              </div>
            </div>

            {/* Apple 3-Metric Quantified Impact Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/[0.06]">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-synq-dim block">Capacity Recycled</span>
                <span className="text-lg font-black text-white mt-1 block">
                  {activeSilo.metrics.idleReclaimed}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-synq-dim block">Speed-to-Execution</span>
                <span className="text-lg font-black text-accent-cyan mt-1 block">
                  {activeSilo.metrics.velocityGain}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-synq-dim block">Waste Eliminated</span>
                <span className="text-lg font-black text-accent-lime mt-1 block">
                  {activeSilo.metrics.capitalSaved}
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: CORE PILLAR MANIFESTO (Spans 12 Columns Full Width) */}
          <div className="lg:col-span-12 apple-bento-card p-8 sm:p-10 relative overflow-hidden bg-surface-100/40">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan flex-shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Make Visible the Invisible</h4>
                  <p className="text-xs text-synq-muted leading-relaxed">
                    Surfacing untapped cross-functional partnerships that autonomous stakeholders cannot see from inside their silo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center text-accent-lime flex-shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Recycle Idle Capabilities</h4>
                  <p className="text-xs text-synq-muted leading-relaxed">
                    Zero duplication. Instead of building parallel infrastructure, we channel existing assets into high-yield utilization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Precision Timing</h4>
                  <p className="text-xs text-synq-muted leading-relaxed">
                    Connecting the right stakeholder, resource, and contract at the exact calendar window when incentives align.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Shuffle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Cross-Sector Multipliers</h4>
                  <p className="text-xs text-synq-muted leading-relaxed">
                    Bridging entertainment with gaming, audio, private debt, and brands to turn linear slates into multi-revenue flywheels.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
