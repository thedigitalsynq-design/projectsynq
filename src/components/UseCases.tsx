import React, { useState } from 'react';
import { USE_CASES, UseCaseItem } from '../data/useCases';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const UseCases: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>('talent-production');

  const activeCase = USE_CASES.find(c => c.id === activeCaseId) || USE_CASES[0];

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            10 / Applied Orchestration
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Inter-Node Solutions in Action.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            Every use case demonstrates our invariant transformation vector:
            <span className="text-accent-cyan font-mono text-sm block sm:inline sm:ml-2">
              Problem → Gap → Bridge → Flow → Outcome
            </span>
          </p>
        </div>

        {/* 8 Use-Case Tabs/Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {USE_CASES.map((uc) => {
            const isSelected = activeCaseId === uc.id;

            return (
              <button
                key={uc.id}
                onClick={() => setActiveCaseId(uc.id)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-surface-100 border-accent-cyan/60 shadow-lg shadow-accent-cyan/15 ring-1 ring-accent-cyan/30'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/60'
                }`}
              >
                <div>
                  <span className="font-mono text-[10px] text-synq-dim uppercase tracking-wider block mb-1">
                    {uc.category}
                  </span>
                  <div className={`text-sm sm:text-base font-bold tracking-tight mb-1 ${
                    isSelected ? 'text-white' : 'text-synq-text'
                  }`}>
                    {uc.title}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-accent-cyan mt-2">
                  {uc.stats}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case In-Depth Breakdown Card */}
        <div className="rounded-2xl border border-surface-border bg-background-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded bg-surface-100 text-xs font-mono text-synq-dim border border-white/5">
                  {activeCase.category}
                </span>
                <span className="text-xs font-mono text-accent-cyan">{activeCase.stats}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeCase.title}
              </h3>
              <p className="text-sm font-medium text-synq-muted mt-0.5">
                {activeCase.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {activeCase.nodesInvolved.map((n, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-surface-200 text-synq-muted border border-white/5">
                  Node: {n}
                </span>
              ))}
            </div>
          </div>

          {/* 5-Step Vector Grid: Problem -> Gap -> Bridge -> Flow -> Outcome */}
          <div className="space-y-4">
            {/* Step 1: PROBLEM */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-100/40 border border-white/5 flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-36 flex-shrink-0">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-wider">
                  01. Problem
                </span>
              </div>
              <div className="text-xs sm:text-sm text-synq-text leading-relaxed">
                {activeCase.problem}
              </div>
            </div>

            {/* Step 2: GAP */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-100/40 border border-white/5 flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-36 flex-shrink-0">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  02. Gap
                </span>
              </div>
              <div className="text-xs sm:text-sm text-synq-text leading-relaxed">
                {activeCase.gap}
              </div>
            </div>

            {/* Step 3: BRIDGE */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-100/40 border border-white/5 flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-36 flex-shrink-0">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                  03. Bridge
                </span>
              </div>
              <div className="text-xs sm:text-sm text-accent-cyan leading-relaxed font-medium">
                {activeCase.bridge}
              </div>
            </div>

            {/* Step 4: FLOW */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-100/40 border border-white/5 flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-36 flex-shrink-0">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
                  04. Flow
                </span>
              </div>
              <div className="text-xs sm:text-sm font-mono text-synq-muted leading-relaxed">
                {activeCase.flow}
              </div>
            </div>

            {/* Step 5: OUTCOME */}
            <div className="p-4 sm:p-5 rounded-xl bg-accent-cyan/[0.06] border border-accent-cyan/30 flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-36 flex-shrink-0">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 uppercase tracking-wider">
                  05. Outcome
                </span>
              </div>
              <div className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                {activeCase.outcome}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
