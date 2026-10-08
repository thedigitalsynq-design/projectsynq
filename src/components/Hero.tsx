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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] bg-accent-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-accent-blue/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Pill Tag */}
        {/* Category Pill Tag & Core Principle */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-100/90 border border-white/10 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
            <span className="text-xs font-mono font-medium tracking-wide text-synq-muted">
              CATEGORY: <span className="text-accent-cyan uppercase font-semibold">INTER-NODE ORCHESTRATION</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200 text-accent-lime">
              17 NODES CONNECTED
            </span>
          </div>

          <div className="inline-flex items-center gap-2 apple-pill px-3 py-1 font-mono text-xs text-accent-cyan bg-accent-cyan/[0.08] border-accent-cyan/20">
            <Sparkles className="w-3 h-3 text-accent-cyan" />
            <span>CONNECT THE DOTS • LEVERAGE EVERY SILO</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="max-w-4xl text-center sm:text-left mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            The problem is often not inside the node.{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              It's between the nodes.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-synq-muted font-normal leading-relaxed max-w-3xl">
            ProjectSynq is the <span className="text-white font-medium">Connective Layer</span> — breaking down isolated silos to connect people, projects, resources, data, and opportunities at the exact right time.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              onClick={onExploreModel}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] active:scale-[0.98]"
            >
              <Compass className="w-4 h-4 text-background-deep" />
              <span>Explore the Model</span>
              <ArrowRight className="w-4 h-4 text-background-deep" />
            </button>

            <button
              onClick={onStartSynq}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-surface-100/90 hover:bg-surface-100 border border-white/15 hover:border-accent-cyan/50 transition-all backdrop-blur-md active:scale-[0.98]"
            >
              <span>Start a Synq</span>
            </button>

            {onExploreMatrix && (
              <button
                onClick={onExploreMatrix}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold text-accent-cyan bg-surface-100/60 hover:bg-surface-100 border border-accent-cyan/30 transition-all active:scale-[0.98]"
              >
                <span>Stakeholder Matrix (12L)</span>
                <span className="text-xs">→</span>
              </button>
            )}

            {/* Core statement chip */}
            <div className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 text-xs font-mono text-synq-dim flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
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
