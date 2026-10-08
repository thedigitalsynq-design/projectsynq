import React from 'react';
import { WHY_PROJECTSYNQ } from '../data/process';
import { ShieldCheck, Zap, Layers, Globe, CheckCircle2, Sparkles } from 'lucide-react';

export const WhyProjectSynq: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            16 / The Operating Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why ProjectSynq.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            The principles that make us the decisive operating partner for high-stakes ecosystem challenges.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_PROJECTSYNQ.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-surface-100/40 border border-white/5 hover:border-accent-cyan/30 hover:bg-surface-100/70 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-synq-dim group-hover:text-accent-cyan transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-synq-dim">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Foundational Trait</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
