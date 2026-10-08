import React, { useState } from 'react';
import { ArrowRight, Sparkles, Network, Compass, ShieldCheck, Activity, Layers } from 'lucide-react';
import { SynqNetwork, NetworkState } from './SynqNetwork';
import { OmniStakeholderConnector } from './OmniStakeholderConnector';

interface HeroProps {
  onExploreModel: () => void;
  onStartSynq: () => void;
  onExploreMatrix?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreModel, onStartSynq, onExploreMatrix }) => {
  const [networkState, setNetworkState] = useState<NetworkState>('connecting');
  const [heroView, setHeroView] = useState<'core' | 'all-stakeholders'>('all-stakeholders');

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Arctic Depths ambient atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] md:w-[1100px] md:h-[600px] bg-sky-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-cyan/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Top Metadata Header — Arctic Depths Layout */}
        <div className="flex items-center justify-between border-b border-sky-500/15 pb-6 mb-10 sm:mb-14 font-mono text-xs">
          <div className="flex items-center gap-6 sm:gap-10">
            <div>
              <span className="text-zinc-500 block text-[9px] uppercase tracking-[0.22em] mb-0.5">CATEGORY</span>
              <span className="text-white font-medium text-[11px] sm:text-xs tracking-wider">INTER-NODE ORCHESTRATION</span>
            </div>
            <div className="hidden md:block">
              <span className="text-zinc-500 block text-[9px] uppercase tracking-[0.22em] mb-0.5">SPECIFICATION</span>
              <span className="text-sky-300 font-medium text-[11px] sm:text-xs tracking-wider">CONNECT THE DOTS • LEVERAGE EVERY SILO</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-right">
            <div>
              <span className="text-zinc-500 block text-[9px] uppercase tracking-[0.22em] mb-0.5">STATUS</span>
              <span className="text-accent-cyan font-bold text-[11px] sm:text-xs tracking-wider flex items-center gap-1.5 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF] animate-pulse" />
                17 NODES SYNCHRONIZED
              </span>
            </div>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="max-w-5xl text-center sm:text-left mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] tracking-tight text-white leading-[1.02] font-normal">
            The problem is often not inside the node.{' '}
            <span className="block text-gradient-cyan mt-2 relative">
              It's between the nodes.
              <span className="inline-block ml-3 sm:ml-4 align-top text-xs sm:text-sm font-mono font-bold text-accent-cyan px-2.5 py-0.5 rounded-full bg-accent-cyan/15 border border-accent-cyan/35 shadow-sm">
                01
              </span>
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            ProjectSynq is the <strong className="text-white font-medium">Connective Layer</strong> — breaking down isolated silos to connect people, projects, resources, data, and opportunities at the exact right time.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              onClick={onExploreModel}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm sm:text-base text-background-deep bg-gradient-to-r from-accent-cyan to-[#2EE4FF] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all active:scale-[0.98]"
            >
              <Compass className="w-4 h-4 text-background-deep" />
              <span>Explore the Model</span>
              <ArrowRight className="w-4 h-4 text-background-deep" />
            </button>

            <button
              onClick={onStartSynq}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-sky-950/40 hover:bg-sky-900/50 border border-sky-400/20 hover:border-accent-cyan/50 transition-all backdrop-blur-md active:scale-[0.98]"
            >
              <span>Start a Synq</span>
            </button>

            {onExploreMatrix && (
              <button
                onClick={onExploreMatrix}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-mono text-xs font-semibold text-accent-cyan bg-sky-950/20 hover:bg-sky-950/60 border border-accent-cyan/30 transition-all active:scale-[0.98]"
              >
                <span>Diagnostic Atlas (17N)</span>
                <span className="text-xs">→</span>
              </button>
            )}

            {/* Core statement chip */}
            <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-2 text-xs font-mono text-zinc-400 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF]" />
              <span>We don't own the nodes. We make them work in sync.</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Omni-Stakeholder Canvas / SynqNetwork */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-synq-dim block">
                Visual Proof Concept
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                {heroView === 'all-stakeholders'
                  ? 'All 17 Stakeholders Connected in Real-Time Mesh'
                  : 'Fragmentation → Connection → Synchronization'}
              </h2>
            </div>

            {/* View Mode & State Selectors */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex bg-surface-200 p-1 rounded-xl border border-white/10 font-mono text-xs">
                <button
                  onClick={() => setHeroView('all-stakeholders')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    heroView === 'all-stakeholders'
                      ? 'bg-accent-cyan text-background-deep font-bold shadow'
                      : 'text-synq-muted hover:text-white'
                  }`}
                >
                  All 17 Stakeholders (Mesh)
                </button>
                <button
                  onClick={() => setHeroView('core')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    heroView === 'core'
                      ? 'bg-accent-cyan text-background-deep font-bold shadow'
                      : 'text-synq-muted hover:text-white'
                  }`}
                >
                  4-State Simulation
                </button>
              </div>

              {heroView === 'core' && (
                <div className="flex items-center gap-1.5 text-xs font-mono bg-surface-200 p-1 rounded-xl border border-white/10">
                  {(['fragmented', 'diagnosing', 'connecting', 'synchronized'] as NetworkState[]).map((st) => (
                    <button
                      key={st}
                      onClick={() => setNetworkState(st)}
                      className={`px-2.5 py-1 rounded-lg transition-all capitalize ${
                        networkState === st
                          ? 'bg-accent-cyan text-background-deep font-semibold shadow'
                          : 'text-synq-muted hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Render Active Hero Visualizer */}
          {heroView === 'all-stakeholders' ? (
            <OmniStakeholderConnector
              initialPrimaryNode="talent"
              initialSecondaryNode="production"
              onStartSynq={onStartSynq}
            />
          ) : (
            <SynqNetwork
              initialState={networkState}
              onStateChange={setNetworkState}
              interactive={true}
            />
          )}
        </div>
      </div>
    </section>
  );
};
