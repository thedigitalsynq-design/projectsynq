import React, { useState } from 'react';
import { VALUE_PILLARS } from '../data/process';
import { Gauge, Brain, ShieldCheck, Repeat, Expand, CheckCircle2 } from 'lucide-react';

export const Outcomes: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const icons = [Gauge, Brain, ShieldCheck, Repeat, Expand];

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            14 / Tangible Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What changes when the space between nodes works?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            When inter-node impedance is removed, stakeholders do not merely close one deal — they unlock unprecedented operational velocity and collective economic upside.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {VALUE_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || Gauge;
            const isSelected = selectedPillar === idx;

            return (
              <div
                key={pillar.title}
                onClick={() => setSelectedPillar(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-surface-100 border-accent-cyan/60 shadow-xl shadow-accent-cyan/15 ring-1 ring-accent-cyan/30 scale-[1.02]'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-accent-cyan text-background-deep' : 'bg-surface-200 text-synq-muted'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-synq-dim">0{idx + 1}</span>
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight mb-1 ${isSelected ? 'text-white' : 'text-synq-text'}`}>
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-mono text-accent-cyan mb-3">
                    {pillar.metric}
                  </div>

                  <p className="text-xs text-synq-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-synq-dim">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime" />
                  <span>Ecosystem Metric</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
