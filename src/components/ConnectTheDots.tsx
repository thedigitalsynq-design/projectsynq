import React, { useState } from 'react';
import {
  Boxes,
  Zap,
  ArrowRight,
  Film,
  Users,
  DollarSign,
  Gamepad2,
  CheckCircle2,
  Eye,
  RefreshCw,
  Clock,
  Layers,
  Database
} from 'lucide-react';

interface SiloConnection {
  id: string;
  siloName: string;
  category: string;
  icon: React.ElementType;
  trappedAsset: string;
  isolatedProblem: string;
  targetNode: string;
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
      connectedDot: 'Transmedia Rights Carve-Out Bridge separating audio/regional derivative licenses from theatrical exclusivity.',
      valueUnlocked: 'Transforms dead library balance sheets into immediate recurring IP licensing revenue without forfeiting primary studio equity.',
      metrics: {
        idleReclaimed: '100% Vault Monetization',
        velocityGain: '4-Week License Clearance',
        capitalSaved: '₹35 Cr Trapped Capital Freed'
      }
    },
    {
      id: 'silo-talent-windows',
      siloName: 'Fragmented Talent Windows',
      category: 'HUMAN CAPITAL SILO',
      icon: Users,
      trappedAsset: 'A-list directors, cinematographers, and actors stranded in 60-day calendar gaps caused by third-party production delays.',
      isolatedProblem: 'Talent loses earning velocity while locked in exclusivity limbo; independent creators cannot access premier craft.',
      targetNode: 'Prestige Mini-Series & Commercial Content Houses',
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
    <section id="silos" className="relative py-24 md:py-32 border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 clean-pill px-3 py-1 font-mono text-[11px] text-accent-cyan uppercase tracking-wider mb-4">
            <span>Core Principle</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Connect the Dots.{' '}
            <span className="text-gradient-cyan block mt-1">
              Leverage Every Silo.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Every day, billions in capabilities, resources, talent hours, and creative IP remain trapped in isolated silos. ProjectSynq identifies hidden intersections and orchestrates bilateral bridges — <strong className="text-white">connecting the right stakeholder, asset, and opportunity at the exact right time</strong>.
          </p>
        </div>

        {/* Silo Selector Bar (Uniform Slate Glass) */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
            Select a Trapped Silo:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {silos.map((s) => {
              const SIcon = s.icon;
              const isSelected = selectedSiloId === s.id;

              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSiloId(s.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 border ${
                    isSelected
                      ? 'bg-white/[0.06] border-accent-cyan/40 text-white shadow-sm'
                      : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-accent-cyan text-background-deep' : 'bg-white/[0.05] text-zinc-400'
                    }`}>
                      <SIcon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_6px_#00F0FF]" />
                    )}
                  </div>
                  <span className="text-xs font-bold text-white line-clamp-1 block">
                    {s.siloName}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 line-clamp-1 mt-0.5 block">
                    {s.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Bento Grid: Isolated Silo vs. Connected Bridge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Card 1: The Isolated Silo */}
          <div className="lg:col-span-5 clean-card p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="clean-pill px-3 py-1 text-xs font-mono text-zinc-400">
                  ISOLATED SILO
                </span>
                <span className="font-mono text-xs text-zinc-500">TRAPPED VALUE</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeSilo.siloName}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {activeSilo.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mt-6 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.05]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    Trapped Asset:
                  </span>
                  <p className="text-zinc-200 leading-relaxed font-medium">
                    {activeSilo.trappedAsset}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.05]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    Cost of Isolation:
                  </span>
                  <p className="text-zinc-400 leading-relaxed">
                    {activeSilo.isolatedProblem}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Status: Underutilized Asset</span>
              <span className="text-zinc-400">Zero Cross-Node Flow</span>
            </div>
          </div>

          {/* Card 2: The Connected Bridge */}
          <div className="lg:col-span-7 clean-card clean-card-active p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 clean-pill px-3 py-1 text-xs font-mono text-accent-cyan">
                  <Zap className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>PROJECTSYNQ BRIDGE</span>
                </div>
                <span className="font-mono text-xs text-accent-cyan">FLOW UNLOCKED</span>
              </div>

              {/* Target Node in Need */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Counterparty Node in Need:
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    {activeSilo.targetNode}
                  </h4>
                </div>
                <div className="clean-pill px-2.5 py-1 text-[11px] font-mono text-white">
                  Demand Matched
                </div>
              </div>

              {/* Connected Dot Description */}
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan block mb-1">
                    How ProjectSynq Connects the Dots:
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                    {activeSilo.connectedDot}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {activeSilo.valueUnlocked}
                </p>
              </div>
            </div>

            {/* 3 Metric Blocks (Uniform Clean Slate) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7 pt-5 border-t border-white/[0.06]">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-zinc-500 block">Capacity Recycled</span>
                <span className="text-base font-bold text-white mt-0.5 block">
                  {activeSilo.metrics.idleReclaimed}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-zinc-500 block">Turnaround</span>
                <span className="text-base font-bold text-accent-cyan mt-0.5 block">
                  {activeSilo.metrics.velocityGain}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-zinc-500 block">Waste Eliminated</span>
                <span className="text-base font-bold text-white mt-0.5 block">
                  {activeSilo.metrics.capitalSaved}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: 4 Core Capabilities Footer */}
          <div className="lg:col-span-12 clean-card p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan flex-shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Make Visible the Invisible</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Surfacing untapped cross-functional partnerships that autonomous stakeholders cannot see from inside their silo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan flex-shrink-0">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Recycle Idle Capabilities</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Zero duplication. Instead of building parallel infrastructure, we channel existing assets into high-yield utilization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Precision Timing</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Connecting the right stakeholder, resource, and contract at the exact calendar window when incentives align.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan flex-shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Cross-Sector Multipliers</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
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
