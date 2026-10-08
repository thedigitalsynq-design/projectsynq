import React, { useState } from 'react';
import { USE_CASES, UseCaseItem } from '../data/useCases';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Briefcase, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export const Page12_ProjectsPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(USE_CASES[0].id);
  const activeCase = USE_CASES.find(c => c.id === selectedCaseId) || USE_CASES[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Briefcase className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 12 / Grounded Institutional Projects</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Projects & Use Cases:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              How Inter-Node Orchestration Works in Reality
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            No fictional hypotheticals. Explore 8 rigorous, real-world case studies detailing the starting problem, counterparties involved, ProjectSynq intervention, and verified commercial outcome.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {USE_CASES.map(item => {
            const isSelected = selectedCaseId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCaseId(item.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-sky-950/80 border-accent-cyan text-white shadow-md'
                    : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="font-mono text-[10px] text-accent-cyan block mb-1">{item.category}</span>
                <span className="font-bold text-sm font-sans block">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Project Deep Dive Card */}
        <div className="clean-card p-8 sm:p-14 mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-8 border-b border-sky-500/15">
            <div>
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block mb-1">
                {activeCase.category}
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal text-white">
                {activeCase.title}
              </h2>
              <p className="mt-2 text-base text-zinc-300 font-light">
                {activeCase.subtitle}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 text-accent-cyan font-mono text-xs text-right flex-shrink-0">
              <span className="text-zinc-500 block text-[10px] uppercase">Verified Efficiency Gain</span>
              <span className="font-bold text-sm block mt-0.5 text-white">{activeCase.stats}</span>
            </div>
          </div>

          <div className="space-y-6 pt-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                Counterparty Nodes Engaged
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCase.nodesInvolved.map((node, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-sky-950/30 border border-sky-500/20 text-xs font-mono text-sky-200">
                    {node}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block font-semibold">1. The Starting Friction & Barrier</span>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{activeCase.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">2. The Structural Gap</span>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{activeCase.gap}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-sky-950/30 border border-accent-cyan/30 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-bold block">
                3. ProjectSynq Bilateral Intervention & Bridge
              </span>
              <p className="text-sm text-sky-200 font-light leading-relaxed">{activeCase.bridge}</p>
              <div className="pt-2 font-mono text-xs text-zinc-400">
                <strong className="text-white">Execution Flow: </strong>
                {activeCase.flow}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-bold block mb-1">
                  4. Final Outcome & Unlocked Yield
                </span>
                <p className="text-sm text-white font-medium leading-relaxed">{activeCase.outcome}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed to Chapter 13 */}
        <PageNavigationBanner
          currentPageNumber="12"
          currentPageTitle="Projects & Use Cases"
          nextRouteHash="#outcomes"
          nextPageNumber="13"
          nextPageTitle="Value & Outcomes: The 5 Tangible Dimensions"
          nextPageDescription="Quantify the systematic economic returns of Inter-Node Orchestration: higher capacity utilization, zero legal deadlocks, and verified yield."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
