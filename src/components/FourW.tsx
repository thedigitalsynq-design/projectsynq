import React, { useState } from 'react';
import { FOUR_W_ENGINE, FourWItem } from '../data/process';
import { HelpCircle, ChevronRight, Sparkles, Compass } from 'lucide-react';

export const FourW: React.FC = () => {
  const [activeQuadrant, setActiveQuadrant] = useState<string>('what');

  return (
    <section className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            07 / Diagnostic Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Every ProjectSynq intervention starts with four questions.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            The 4W Engine is our diagnostic radar. It prevents premature solutions by interrogating the underlying reality of the ecosystem.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FOUR_W_ENGINE.map((item) => {
            const isActive = activeQuadrant === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveQuadrant(item.id)}
                onClick={() => setActiveQuadrant(item.id)}
                className={`rounded-2xl p-7 sm:p-8 transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-surface-100/90 border-accent-cyan/60 shadow-2xl shadow-accent-cyan/10 ring-1 ring-accent-cyan/30 scale-[1.01]'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold ${
                      isActive ? 'bg-accent-cyan text-background-deep' : 'bg-surface-200 text-synq-muted'
                    }`}>
                      {item.question}
                    </span>
                    <span className="text-xs font-mono text-synq-dim uppercase tracking-wider">
                      Quadrant 0{FOUR_W_ENGINE.indexOf(item) + 1}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-accent-cyan">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.question}: {item.tagline}
                </h3>

                <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mb-6">
                  {item.explanation}
                </p>

                {/* Examples Revealed */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-synq-dim mb-2 flex items-center justify-between">
                    <span>Empirical Examples:</span>
                    <span className="text-accent-cyan text-[10px]">Active Inspection</span>
                  </div>
                  {item.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-surface-200/50 border border-white/5 text-xs text-synq-text flex items-start gap-2"
                    >
                      <span className="text-accent-cyan font-mono text-xs">›</span>
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
