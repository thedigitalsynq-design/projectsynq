import React from 'react';
import { ProblemInsight } from '../components/ProblemInsight';
import { ProblemUniverse } from '../components/ProblemUniverse';
import { FourW } from '../components/FourW';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { AlertTriangle, Sparkles } from 'lucide-react';

interface WhyPageProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const WhyPage: React.FC<WhyPageProps> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <AlertTriangle className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 02 / The Friction Layer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Friction:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              The Invisible Space Between Nodes
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            In complex creative and commercial industries, catastrophic delays and stalled capital are rarely caused by incompetent nodes. They are caused by the distrust, misaligned incentives, and defensive contracting that exist <strong className="text-white font-medium">between</strong> the nodes.
          </p>
        </div>
      </section>

      <main>
        {/* 01. Problem Insight (Before/After Friction Comparison) */}
        <ProblemInsight />

        {/* 02. Problem Universe (8 Super-Problems) */}
        <ProblemUniverse />

        {/* 03. The 4W Diagnostic Engine */}
        <FourW />

        {/* Next Chapter Progression */}
        <PageNavigationBanner
          currentPageNumber="02"
          currentPageTitle="Friction"
          nextRouteHash="#how-it-works"
          nextPageNumber="03"
          nextPageTitle="Mechanism: The Operating Engine"
          nextPageTeaser="Inspect the exact invariant pathway (NODE → GAP → BRIDGE → FLOW → LOOP), the ABCDEF operating cycle, and trust protocols."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
