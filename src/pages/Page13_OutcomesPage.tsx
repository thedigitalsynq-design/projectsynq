import React from 'react';
import { Outcomes } from '../components/Outcomes';
import { Flywheel } from '../components/Flywheel';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { TrendingUp, ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

export const Page13_OutcomesPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <TrendingUp className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 13 / Economic & Strategic Value</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Value & Outcomes:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              The 5 Compounding Dimensions
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Removing bilateral friction creates compounding economic returns. Discover the 5 core value dimensions unlocked when the space between nodes functions as coordinated infrastructure.
          </p>
        </div>
      </section>

      <main>
        {/* Core Value Outcomes Bento Grid */}
        <Outcomes />

        {/* The Compounding Flywheel */}
        <Flywheel />

        {/* Proceed to Chapter 14 */}
        <PageNavigationBanner
          currentPageNumber="13"
          currentPageTitle="Value & Outcomes"
          nextRouteHash="#intelligence"
          nextPageNumber="14"
          nextPageTitle="Data & Intelligence: Inter-Node Telemetry"
          nextPageDescription="Explore how ProjectSynq generates proprietary network-graph telemetry, audits liquidity, and trains predictive transaction models."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
