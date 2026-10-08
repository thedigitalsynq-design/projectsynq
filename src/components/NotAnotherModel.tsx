import React, { useState } from 'react';
import { COMPARISON_ENTITIES } from '../data/process';
import { Check, X, ShieldAlert, Zap, ArrowRight } from 'lucide-react';

export const NotAnotherModel: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<string>('ProjectSynq');

  return (
    <section className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            03 / Category Differentiation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Not another version of something that already exists.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            ProjectSynq is not a consultancy, agency, intermediary, marketplace, or SaaS platform. We do not represent a single party, collect passive finder fees, or sell software seats.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {COMPARISON_ENTITIES.map((item) => {
            const isSynq = item.isSynq;
            const isSelected = selectedEntity === item.name;

            return (
              <div
                key={item.name}
                onClick={() => setSelectedEntity(item.name)}
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer border relative flex flex-col justify-between ${
                  isSynq
                    ? 'bg-gradient-to-b from-accent-cyan/[0.12] to-background-card border-accent-cyan/60 shadow-[0_0_40px_rgba(0,240,255,0.15)] ring-1 ring-accent-cyan/40 scale-[1.02]'
                    : isSelected
                    ? 'bg-surface-100/90 border-white/20 shadow-xl'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/10 hover:bg-surface-100/50'
                }`}
              >
                {isSynq && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-accent-cyan text-background-deep font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 shadow">
                    <Zap className="w-3 h-3 fill-background-deep" />
                    NEW CATEGORY
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-synq-dim uppercase tracking-wider">
                      {isSynq ? 'Category Creator' : 'Conventional Model'}
                    </span>
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                      isSynq ? 'bg-accent-cyan/20 text-accent-cyan' : 'bg-surface-200 text-synq-muted'
                    }`}>
                      {item.role}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold tracking-tight mb-3 ${isSynq ? 'text-white' : 'text-synq-text'}`}>
                    {item.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-synq-dim mb-1">
                        Operating Mode
                      </div>
                      <p className="text-xs sm:text-sm text-synq-text leading-relaxed">
                        {item.mode}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-synq-dim mb-1">
                        {isSynq ? 'Core Proposition' : 'Structural Limitation'}
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isSynq ? 'text-accent-cyan font-medium' : 'text-synq-muted'}`}>
                        {item.limitation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className={isSynq ? 'text-accent-cyan' : 'text-synq-dim'}>
                    {isSynq ? 'Inter-Node Orchestration' : 'Single-Node Bias'}
                  </span>
                  {isSynq ? (
                    <span className="flex items-center gap-1 text-accent-lime">
                      <Check className="w-3.5 h-3.5" />
                      Integrated
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-synq-dim">
                      <X className="w-3.5 h-3.5 text-rose-400/70" />
                      Fragmented
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Pullquote Statement */}
        <div className="p-8 md:p-10 rounded-2xl bg-surface-100/40 border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight leading-snug">
              "We don't simply identify opportunities.{' '}
              <span className="text-accent-cyan">We engineer the conditions for stakeholders to act on them.</span>"
            </p>
            <div className="mt-4 text-xs font-mono text-synq-dim uppercase tracking-widest">
              The ProjectSynq Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
