import React, { useState } from 'react';
import { OPERATING_CYCLE } from '../data/process';
import { RotateCcw, Check, Sparkles, ArrowRight, RefreshCw, Zap } from 'lucide-react';

export const ABCDEF: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');

  const selectedStage = OPERATING_CYCLE.find(s => s.letter === selectedLetter) || OPERATING_CYCLE[0];

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            06 / Execution Cadence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The ProjectSynq Operating Cycle.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            A continuous, institutional cadence: from rigorous initial assessment to formalized SOPs, returning to the cycle with amplified intelligence.
          </p>
        </div>

        {/* Circular Cycle Layout (A through F + RECYCLE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: 6-Stage Grid / Orbital Buttons */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {OPERATING_CYCLE.map((stage) => {
              const isSelected = selectedLetter === stage.letter;

              return (
                <div
                  key={stage.letter}
                  onClick={() => setSelectedLetter(stage.letter)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                    isSelected
                      ? 'bg-surface-100 border-accent-cyan/70 shadow-xl shadow-accent-cyan/15 ring-1 ring-accent-cyan/40 scale-[1.02]'
                      : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-8 h-8 rounded-lg font-mono text-sm font-bold flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-accent-cyan text-background-deep'
                        : 'bg-surface-200 text-synq-dim'
                    }`}>
                      {stage.letter}
                    </span>
                    <span className="text-[10px] font-mono text-synq-dim">STEP 0{OPERATING_CYCLE.indexOf(stage) + 1}</span>
                  </div>

                  <h3 className={`text-base font-bold tracking-tight ${isSelected ? 'text-white' : 'text-synq-text'}`}>
                    {stage.title}
                  </h3>
                  <p className="text-xs text-synq-muted mt-1 leading-snug line-clamp-2">
                    {stage.headline}
                  </p>
                </div>
              );
            })}

            {/* Stage 7: RECYCLE Return Node */}
            <div
              onClick={() => setSelectedLetter('A')}
              className="col-span-2 sm:col-span-3 p-4 rounded-2xl border border-accent-cyan/30 bg-accent-cyan/[0.04] hover:bg-accent-cyan/[0.08] transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/20 border border-accent-cyan/50 flex items-center justify-center text-accent-cyan">
                  <RefreshCw className="w-4 h-4 animate-spin duration-3000" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider">
                    RECYCLE → RETURN TO ASSESS
                  </div>
                  <div className="text-xs text-synq-muted">
                    Every solved friction point strengthens the baseline for the next engagement.
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-accent-cyan hidden sm:inline">CYCLE RESET →</span>
            </div>
          </div>

          {/* Right: Selected Stage Deep-Dive Card */}
          <div className="lg:col-span-5 rounded-2xl border border-surface-border bg-background-card p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-synq-dim uppercase tracking-wider">
                  CYCLE STAGE {selectedStage.letter}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-200 text-accent-cyan">
                Active Inspection
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedStage.letter} — {selectedStage.title}
                </h3>
                <p className="text-sm font-semibold text-accent-cyan mt-1">
                  {selectedStage.headline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
                {selectedStage.description}
              </p>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-synq-dim uppercase tracking-wider mb-2">
                  Key Operational Directives:
                </div>
                {selectedStage.actionList.map((act, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-100/60 text-xs text-synq-text">
                    <Check className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Editorial statement banner */}
        <div className="p-8 rounded-2xl bg-surface-100/50 border border-white/10 text-center">
          <p className="text-lg sm:text-2xl font-bold text-white tracking-tight">
            "Every solution becomes intelligence for the next solution."
          </p>
          <div className="mt-3 text-xs font-mono text-synq-dim uppercase tracking-widest">
            Continuous Operational Learning Loop
          </div>
        </div>
      </div>
    </section>
  );
};
