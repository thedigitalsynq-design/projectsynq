import React, { useState, useEffect } from 'react';
import { FLYWHEEL_STEPS } from '../data/process';
import { RotateCw, ArrowDown, Zap, Sparkles } from 'lucide-react';

export const Flywheel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % FLYWHEEL_STEPS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            13 / Compounding Network Dynamics
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The ProjectSynq Flywheel.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            The more nodes we orchestrate, the more friction we catalog. Every solved gap turns into permanent institutional intelligence, driving higher trust and attracting more nodes.
          </p>
        </div>

        {/* Circular / Step Progression Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Flywheel Steps Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {FLYWHEEL_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-center transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-accent-cyan/15 border-accent-cyan text-white shadow-lg shadow-accent-cyan/20 scale-105 z-10'
                      : 'bg-surface-100/40 border-white/5 text-synq-muted hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="font-mono text-[10px] text-synq-dim mb-1">
                    STEP {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className={`font-mono text-xs font-bold leading-tight ${isActive ? 'text-accent-cyan' : 'text-synq-text'}`}>
                    {step}
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mx-auto mt-2 block animate-ping" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Compounding Acceleration Card */}
          <div className="lg:col-span-4 rounded-2xl border border-accent-cyan/30 bg-gradient-to-b from-surface-100/90 to-background-card p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-accent-cyan" />
              <span>Self-Reinforcing Engine</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              Network Effect of Inter-Node Intelligence™
            </h3>

            <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
              Unlike traditional consultancies whose scale is constrained by headcount, ProjectSynq’s leverage expands exponentially with every node connection.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-synq-muted">
                <span>Cycle Velocity:</span>
                <span className="text-accent-cyan font-bold">Compounding</span>
              </div>
              <div className="flex justify-between text-synq-muted">
                <span>Current Step:</span>
                <span className="text-white font-bold">{FLYWHEEL_STEPS[activeStep]}</span>
              </div>
              <div className="flex justify-between text-synq-muted">
                <span>Terminal State:</span>
                <span className="text-accent-lime font-bold">Zero Impedance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
