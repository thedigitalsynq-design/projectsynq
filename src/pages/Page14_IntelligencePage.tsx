import React from 'react';
import { Intelligence } from '../components/Intelligence';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Database, Network, ArrowRight, ShieldCheck, Cpu, LineChart } from 'lucide-react';

export const Page14_IntelligencePage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Database className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 14 / Inter-Node Intelligence™</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Data & Intelligence:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Proprietary Telemetry & Graph Learning
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Because ProjectSynq operates between counterparties, it captures data that no individual node can see in isolation: real contracting velocity, verified credit solvency, delivery reliability, and asset utilization benchmarks.
          </p>
        </div>
      </section>

      <main>
        {/* Intelligence Component */}
        <Intelligence />

        {/* Proceed to Chapter 15 */}
        <PageNavigationBanner
          currentPageNumber="14"
          currentPageTitle="Data & Intelligence"
          nextRouteHash="#participate"
          nextPageNumber="15"
          nextPageTitle="Participate: Dynamic Onboarding & Intake"
          nextPageDescription="Identify where you fit in the ecosystem and route your specific inquiry for a guaranteed 72-hour root-cause diagnostic brief."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
