import React, { useState, useEffect } from 'react';
import { MECHANISM_STAGES } from '../data/process';
import { ArrowRight, RotateCw, CheckCircle2, ChevronRight, HelpCircle, Layers, Zap } from 'lucide-react';

export const NodeGapBridgeFlowLoop: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Auto-advance through the 5 stages unless paused
  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % MECHANISM_STAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const activeStage = MECHANISM_STAGES[activeStageIndex];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-accent-cyan uppercase tracking-wider mb-4">
            05 / The Core Mechanism
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            We don't just connect nodes.{' '}
            <span className="block text-gradient-cyan mt-2">
              We engineer the space between them.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            A deterministic 5-stage transformation pipeline that takes any fragmented multi-stakeholder ecosystem from latent dysfunction into high-velocity, repeatable execution.
          </p>
        </div>

        {/* Circular Loop Visual Header & Play/Pause */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-lime animate-ping" />
            <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
              Perpetual Mechanism Loop:
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-synq-dim">
              <span>NODE</span>
              <span>→</span>
              <span>GAP</span>
              <span>→</span>
              <span>BRIDGE</span>
              <span>→</span>
              <span>FLOW</span>
              <span>→</span>
              <span>LOOP</span>
              <span>→</span>
              <span className="text-accent-cyan">NODE</span>
            </div>
          </div>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-synq-muted hover:text-white"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin text-accent-cyan' : ''}`} />
            <span>{autoRotate ? 'Looping Live (Pause)' : 'Auto-Loop (Resume)'}</span>
          </button>
        </div>

        {/* Horizontal Mechanism Step Selector (5 Stages) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {MECHANISM_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;

            return (
              <button
                key={stage.step}
                onClick={() => {
                  setActiveStageIndex(idx);
                  setAutoRotate(false);
                }}
                className={`p-4 rounded-xl text-left transition-all border relative ${
                  isActive
                    ? 'bg-surface-100 border-accent-cyan/60 shadow-lg shadow-accent-cyan/10 ring-1 ring-accent-cyan/30'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/15 hover:bg-surface-100/60'
                }`}
              >
                {isActive && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-cyan" />
                )}
                <div className="font-mono text-xs text-synq-dim mb-1">
                  STAGE {stage.step}
                </div>
                <div className={`text-base font-bold tracking-tight ${isActive ? 'text-white' : 'text-synq-text'}`}>
                  {stage.name}
                </div>
                <div className="text-[11px] text-synq-muted mt-0.5 truncate">
                  {stage.action}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="rounded-2xl border border-surface-border bg-background-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Core Inquiry & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-accent-cyan/15 text-accent-cyan font-mono text-xs font-bold border border-accent-cyan/30">
                  STAGE {activeStage.step}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-synq-dim">
                  {activeStage.action}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeStage.name}
              </h3>

              {/* Guiding Question */}
              <div className="p-4 rounded-xl bg-surface-100/70 border-l-2 border-accent-cyan space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan flex items-center gap-1">
                  <HelpCircle className="w-3 h-3" />
                  Primary Systemic Question
                </div>
                <p className="text-sm sm:text-base font-semibold text-white italic">
                  "{activeStage.question}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
                {activeStage.whatHappens}
              </p>

              {/* Special Flow Progression for Stage 04 FLOW */}
              {activeStage.name === 'FLOW' && (
                <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-2">
                  <div className="text-[11px] font-mono text-accent-cyan uppercase tracking-wider">
                    Orchestrated Movement Vector:
                  </div>
                  <div className="text-xs font-mono text-white flex flex-wrap items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-surface-100">Information</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-surface-100">Decision</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-surface-100">Action</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-surface-100">Transaction</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-accent-cyan/20 text-accent-cyan font-bold">Outcome</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Concrete Execution Checklist & Bridges */}
            <div className="lg:col-span-7 bg-surface-100/50 rounded-xl p-6 sm:p-8 border border-white/5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-synq-dim">
                  Operational Execution Parameters
                </span>
                <span className="text-xs font-mono text-accent-lime">
                  Verified Synq Protocol
                </span>
              </div>

              <div className="space-y-3">
                {activeStage.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-surface-200/60 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-synq-text leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stage Navigation Arrows */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveStageIndex((prev) => (prev === 0 ? MECHANISM_STAGES.length - 1 : prev - 1));
                    setAutoRotate(false);
                  }}
                  className="text-xs font-mono text-synq-muted hover:text-white px-3 py-1.5 rounded bg-surface-200 border border-white/5"
                >
                  ← Previous Stage
                </button>

                <button
                  onClick={() => {
                    setActiveStageIndex((prev) => (prev + 1) % MECHANISM_STAGES.length);
                    setAutoRotate(false);
                  }}
                  className="text-xs font-mono text-accent-cyan hover:text-white px-3 py-1.5 rounded bg-surface-200 border border-accent-cyan/30 flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
