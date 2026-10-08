import React from 'react';
import { WhatIsProjectSynq } from '../components/WhatIsProjectSynq';
import { NotAnotherModel } from '../components/NotAnotherModel';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Network, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';

export const Page08_ProjectSynqPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Network className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 08 / The Operating Identity</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            ProjectSynq:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              The Connective Layer Defined
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            ProjectSynq is an institutional Inter-Node Orchestration system. We are not an agency, not a talent management firm, and not a production studio. We do not own the nodes — we engineer the neutral protocols that make autonomous counterparties work in sync.
          </p>

          {/* Core Mandate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-sky-500/15 font-mono text-xs">
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/15">
              <span className="text-zinc-500 block text-[10px] uppercase">Category Mandate</span>
              <span className="text-white font-bold text-sm block mt-1">Inter-Node Orchestration</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/15">
              <span className="text-zinc-500 block text-[10px] uppercase">Structural Stance</span>
              <span className="text-accent-cyan font-bold text-sm block mt-1">100% Counterparty Neutral</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/15">
              <span className="text-zinc-500 block text-[10px] uppercase">Primary Output</span>
              <span className="text-white font-bold text-sm block mt-1">Friction-Free Bilateral Execution</span>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Operating Pillars Bento Grid (Connect, Orchestrate, Systemize) */}
        <WhatIsProjectSynq />

        {/* Contrasting Matrix: What ProjectSynq is NOT */}
        <NotAnotherModel />

        {/* Proceed to Chapter 09 */}
        <PageNavigationBanner
          currentPageNumber="08"
          currentPageTitle="ProjectSynq"
          nextRouteHash="#how-it-works"
          nextPageNumber="09"
          nextPageTitle="How It Works: The 9-Stage Operating Cadence"
          nextPageDescription="Discover the step-by-step invariant sequence: Discover → Understand → Map → Connect → Match → Orchestrate → Execute → Measure → Reconnect."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
