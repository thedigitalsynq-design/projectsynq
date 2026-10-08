import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Database, Sparkles, TrendingUp, RefreshCw, Zap, ShieldCheck } from 'lucide-react';

export const Intelligence: React.FC = () => {
  const [intelStep, setIntelStep] = useState(0);

  const loopSteps = [
    { name: 'Experience', desc: 'Real-world execution data across hundreds of transactions.' },
    { name: 'Pattern', desc: 'Diagnosing repeated failure modes and successful alignments.' },
    { name: 'Intelligence', desc: 'Synthesis into proprietary Inter-Node Intelligence™.' },
    { name: 'Better Decision', desc: 'Predictive structuring before counterparties commit resources.' },
    { name: 'Better Connection', desc: 'Frictionless, high-yield bilateral synchronization.' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIntelStep(prev => (prev + 1) % loopSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [loopSteps.length]);

  const learningPillars = [
    'Which nodes work well together under tight delivery timelines',
    'Where friction predictably recurs during contract negotiations',
    'Why high-stakes transactions fail at the secondary verification layer',
    'What economic incentive structures elicit maximum creative alignment',
    'Which operational handoff processes minimize downstream budget burn',
    'Which bridge architectures create durable, multi-year outcomes',
    'Where recurring regulatory, banking, and rights bottlenecks exist',
  ];

  return (
    <section id="intelligence" className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-accent-cyan uppercase tracking-wider mb-4">
            11 / The System Moat
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Every connection makes the system smarter.
          </h2>
          <div className="mt-4">
            <span className="text-2xl sm:text-4xl font-bold text-gradient-cyan">
              Inter-Node Intelligence™
            </span>
          </div>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            ProjectSynq does not start from zero with every project. Every engagement feeds a living, proprietary intelligence layer that continuously refines our diagnosis and accelerates resolution.
          </p>
        </div>

        {/* Intelligence Progression Flow Loop */}
        <div className="mb-16 rounded-2xl border border-surface-border bg-background-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-synq-dim">
                Continuous Knowledge Accumulation Loop
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                How Experience Compounds into Predictive Intelligence
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
              Active Step: {loopSteps[intelStep].name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {loopSteps.map((step, idx) => {
              const isActive = intelStep === idx;

              return (
                <div
                  key={step.name}
                  onClick={() => setIntelStep(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-surface-100 border-accent-cyan/70 shadow-lg shadow-accent-cyan/15 ring-1 ring-accent-cyan/40 scale-[1.02]'
                      : 'bg-surface-100/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-synq-dim">0{idx + 1}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />}
                  </div>
                  <h4 className={`text-base font-bold ${isActive ? 'text-white' : 'text-synq-text'}`}>
                    {step.name}
                  </h4>
                  <p className="text-xs text-synq-muted mt-1 leading-snug">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs font-mono text-synq-dim">
            <span>Experience</span>
            <span>→</span>
            <span>Pattern</span>
            <span>→</span>
            <span className="text-accent-cyan font-bold">Intelligence</span>
            <span>→</span>
            <span>Better Decision</span>
            <span>→</span>
            <span>Better Connection</span>
            <span>→</span>
            <span className="text-accent-lime font-bold">Repeat</span>
          </div>
        </div>

        {/* What the Intelligence Layer Learns (7 Pillars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan">
              Cumulative Telemetry
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Inter-Node Intelligence™ Learns
            </h3>
            <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
              While conventional intermediaries treat each transaction as an isolated commission, ProjectSynq extracts structural metadata that turns human chaos into predictable science.
            </p>
            <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 font-mono text-xs text-synq-text">
              <div className="text-accent-cyan mb-1 font-bold">Metric Yield:</div>
              Every subsequent connection executes with 40% less friction and 3x faster consensus.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-2.5">
            {learningPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-surface-100/40 border border-white/5 hover:border-accent-cyan/30 hover:bg-surface-100 transition-all flex items-start gap-3"
              >
                <span className="font-mono text-xs text-accent-cyan mt-0.5">0{idx + 1}.</span>
                <span className="text-xs sm:text-sm text-synq-text leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
