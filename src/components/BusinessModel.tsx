import React, { useState } from 'react';
import { BUSINESS_ENGAGEMENTS, ENGAGEMENT_LEVELS } from '../data/process';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Compass, Layers } from 'lucide-react';

interface BusinessModelProps {
  onStartSynq: () => void;
}

export const BusinessModel: React.FC<BusinessModelProps> = ({ onStartSynq }) => {
  const [selectedEngagement, setSelectedEngagement] = useState<number>(2); // Default to Synq Bridge

  return (
    <section className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            15 / Commercial Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered around outcomes, not consulting hours.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            We don't bill by the hour to deliver PowerPoint decks. We structure discrete, outcome-driven engagements designed to move nodes from impasse to synchronized velocity.
          </p>
        </div>

        {/* Section 24: How We Engage (3 Levels) */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-4">
            Three Operational Engagement Modes
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_LEVELS.map((lvl, idx) => (
              <div
                key={lvl.name}
                className="p-7 rounded-2xl bg-surface-100/50 border border-white/5 hover:border-accent-cyan/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-synq-dim">LEVEL 0{idx + 1}</span>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-surface-200 text-accent-cyan font-bold">
                      Outcome: {lvl.outcome}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {lvl.name}
                  </h3>
                  <div className="text-xs font-mono text-accent-cyan mb-3">
                    {lvl.subtitle}
                  </div>

                  <p className="text-xs text-synq-muted leading-relaxed mb-4">
                    {lvl.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-xs text-synq-text bg-surface-200/40 p-3 rounded-lg">
                  <span className="text-accent-cyan font-semibold block mb-0.5">ProjectSynq Action:</span>
                  {lvl.action}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-synq-dim">
            <span>CONNECT</span>
            <span>→</span>
            <span>ORCHESTRATE</span>
            <span>→</span>
            <span className="text-accent-cyan font-bold">SYSTEMIZE</span>
          </div>
        </div>

        {/* Section 23: Discrete Engagement Offerings */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-synq-dim mb-4">
            Outcome-Based Engagement Architecture
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS_ENGAGEMENTS.map((eng, idx) => {
              const isSelected = selectedEngagement === idx;

              return (
                <div
                  key={eng.title}
                  onClick={() => setSelectedEngagement(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-surface-100 border-accent-cyan/70 shadow-xl shadow-accent-cyan/15 ring-1 ring-accent-cyan/40 scale-[1.01]'
                      : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-surface-200 text-accent-cyan">
                        {eng.badge}
                      </span>
                      <span className="font-mono text-xs text-synq-dim">ENGAGEMENT</span>
                    </div>

                    <h3 className={`text-xl font-bold tracking-tight mb-1 ${isSelected ? 'text-white' : 'text-synq-text'}`}>
                      {eng.title}
                    </h3>

                    <div className="text-xs font-medium text-synq-muted mb-3">
                      {eng.purpose}
                    </div>

                    <p className="text-xs text-synq-muted leading-relaxed mb-6">
                      {eng.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-synq-dim block mb-1">
                        Concrete Deliverable:
                      </span>
                      <p className="text-xs font-medium text-white">
                        {eng.deliverable}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartSynq();
                      }}
                      className="w-full py-2 px-3 rounded-lg text-xs font-mono font-semibold text-center bg-surface-200 hover:bg-accent-cyan hover:text-background-deep transition-all text-synq-muted hover:shadow"
                    >
                      Scope This Engagement →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
