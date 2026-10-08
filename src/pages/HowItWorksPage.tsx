import React from 'react';
import { NodeGapBridgeFlowLoop } from '../components/NodeGapBridgeFlowLoop';
import { ABCDEF } from '../components/ABCDEF';
import { Architecture } from '../components/Architecture';
import { Trust } from '../components/Trust';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Cpu, Sparkles } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-background text-synq-text font-sans pt-28">
      {/* Chapter Page Header */}
      <section className="relative pb-16 border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 apple-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 03 / The Mechanism</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Mechanism:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              The Orchestration Engine
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-synq-muted leading-relaxed max-w-3xl">
            We operate through rigorous, repeatable systems engineering. Explore our core invariant pathway, the end-to-end execution cadence, and how neutral trust is engineered as foundational infrastructure.
          </p>
        </div>
      </section>

      <main>
        {/* 01. The Core Mechanism (NODE -> GAP -> BRIDGE -> FLOW -> LOOP) */}
        <NodeGapBridgeFlowLoop />

        {/* 02. The ABCDEF Operating Cycle */}
        <ABCDEF />

        {/* 03. Three-Layer Architecture (Intelligence -> Mechanism -> Operating Cadence) */}
        <Architecture />

        {/* 04. Trust as Infrastructure */}
        <Trust />

        {/* Next Chapter Progression */}
        <PageNavigationBanner
          currentPageNumber="03"
          currentPageTitle="Mechanism"
          nextRouteHash="#stakeholders"
          nextPageNumber="04"
          nextPageTitle="Ecosystem: Stakeholder Solutions"
          nextPageTeaser="Review dedicated solutions tailored for Studio Heads, OTT Commissioners, Creators, Talent Agencies, and Private Credit."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
