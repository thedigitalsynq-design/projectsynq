import React, { useState } from 'react';
import { TOP_15_OPPORTUNITY_MAP, NINE_WHITE_SPACES, HighValueOpportunity } from '../data/matrixData';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Sparkles, TrendingUp, ArrowRight, Zap, Target, Layers } from 'lucide-react';

export const Page07_OpportunitiesPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  const [activeTier, setActiveTier] = useState<string>('All');
  const tiers = ['All', 'Tier 1 — Infrastructure', 'Tier 2 — Marketplace', 'Tier 3 — Consumer', 'Tier 4 — AI'];

  const filteredOpportunities = TOP_15_OPPORTUNITY_MAP.filter(op =>
    activeTier === 'All' || op.tier === activeTier
  );

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 07 / Unlocked Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Opportunities:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              The 15 High-Yield Ecosystem Whitespaces
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Now that the ecosystem's friction, bottlenecks, and silos are fully mapped — what becomes possible when the dots connect? Massive new liquidity, uncaptured yield, and structural breakthroughs emerge.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tier Selector */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-10 font-mono text-xs">
          {tiers.map(t => (
            <button
              key={t}
              onClick={() => setActiveTier(t)}
              className={`px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all ${
                activeTier === t
                  ? 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan font-bold'
                  : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Top 15 Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredOpportunities.map((op) => (
            <div
              key={op.rank}
              className="clean-card p-7 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
                  <span className="w-6 h-6 rounded-full bg-accent-cyan/15 text-accent-cyan flex items-center justify-center font-bold text-[11px]">
                    {op.rank}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-sky-950/40 border border-sky-500/20 text-sky-300 text-[10px]">
                    {op.tier.split(' — ')[1]}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-sans">
                  {op.title}
                </h3>

                <p className="text-xs text-accent-cyan font-mono mb-3 leading-relaxed">
                  Why: {op.why}
                </p>

                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  {op.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-500/15 flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>Value Layer:</span>
                <span className="text-white font-semibold">{op.tier.split(' — ')[0]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 9 Systemic Intersections (White Spaces) */}
        <div className="clean-card p-8 sm:p-14 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-bold block mb-1">
              STRUCTURAL INTERSECTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white">
              The 9 High-Leverage Ecosystem Whitespaces
            </h2>
            <p className="mt-2 text-sm text-zinc-300 font-light">
              Where two fundamental axes intersect and create immediate compounding yield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {NINE_WHITE_SPACES.map((ws, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3"
              >
                <div className="font-mono text-xs font-bold text-accent-cyan px-2 py-0.5 rounded bg-sky-950/40 inline-block">
                  {ws.intersection}
                </div>
                <div className="text-xs text-zinc-400 italic">
                  "{ws.question}"
                </div>
                <div className="pt-2 border-t border-white/5 text-xs text-zinc-200 leading-relaxed">
                  <strong className="text-white font-medium">Breakthrough: </strong>
                  {ws.breakthrough}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proceed to Chapter 08: Introduction of ProjectSynq */}
        <PageNavigationBanner
          currentPageNumber="07"
          currentPageTitle="Opportunities"
          nextRouteHash="#projectsynq"
          nextPageNumber="08"
          nextPageTitle="ProjectSynq: The Operating Identity & Definition"
          nextPageDescription="Now that the ecosystem, friction, bottlenecks, and opportunities are fully clear — meet ProjectSynq: the neutral connective layer that orchestrates the whole."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
