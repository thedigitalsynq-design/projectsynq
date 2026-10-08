import React, { useState } from 'react';
import { SUPER_PROBLEMS, ProblemCategory } from '../data/problems';
import { Search, Shield, DollarSign, FileText, Share2, Cog, BarChart3, Globe, CheckCircle2, AlertOctagon, ArrowRight } from 'lucide-react';

export const ProblemUniverse: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('discovery');

  const iconsMap: Record<string, any> = {
    discovery: Search,
    trust: Shield,
    money: DollarSign,
    rights: FileText,
    distribution: Share2,
    operations: Cog,
    data: BarChart3,
    fragmentation: Globe,
  };

  const activeProblem = SUPER_PROBLEMS.find(p => p.id === selectedId) || SUPER_PROBLEMS[0];
  const ActiveIcon = iconsMap[activeProblem.id] || Search;

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            08 / The Problem Universe
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Every ecosystem has friction.{' '}
            <span className="block text-gradient-cyan mt-2">
              We organize it.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            Across industries, friction manifests across eight universal impedance vectors. We systematically diagnose and dismantle each one.
          </p>
        </div>

        {/* 8 Category Interactive Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {SUPER_PROBLEMS.map((problem) => {
            const Icon = iconsMap[problem.id] || Search;
            const isSelected = selectedId === problem.id;

            return (
              <button
                key={problem.id}
                onClick={() => setSelectedId(problem.id)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-surface-100 border-accent-cyan/60 shadow-lg shadow-accent-cyan/10 ring-1 ring-accent-cyan/30'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/15 hover:bg-surface-100/60'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-accent-cyan text-background-deep' : 'bg-surface-200 text-synq-muted'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  )}
                </div>

                <div>
                  <div className={`font-mono text-xs font-bold tracking-wider mb-0.5 ${
                    isSelected ? 'text-accent-cyan' : 'text-synq-dim'
                  }`}>
                    {problem.name}
                  </div>
                  <p className="text-[11px] text-synq-muted line-clamp-1">
                    {problem.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Card for Selected Super-Problem */}
        <div className="rounded-2xl border border-surface-border bg-background-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Overview & Real World Example */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeProblem.name}
                  </h3>
                  <span className="text-xs font-mono text-accent-cyan">
                    {activeProblem.metric}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-synq-text leading-relaxed">
                {activeProblem.fullDesc}
              </p>

              {/* Affected Stakeholders */}
              <div>
                <div className="text-[11px] font-mono text-synq-dim uppercase tracking-wider mb-2">
                  Affected Stakeholders:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProblem.affectedStakeholders.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-surface-100 text-xs text-synq-muted border border-white/5 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Example */}
              <div className="p-4 rounded-xl bg-surface-200/70 border-l-2 border-accent-lime space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent-lime">
                  Demonstrated Intervention
                </div>
                <p className="text-xs text-synq-text leading-relaxed italic">
                  "{activeProblem.realWorldExample}"
                </p>
              </div>
            </div>

            {/* Right: Common Friction vs Synq Interventions */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Common Friction */}
              <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-rose-500/20 text-rose-400">
                  <AlertOctagon className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Common Friction
                  </span>
                </div>
                <div className="space-y-2.5">
                  {activeProblem.commonFriction.map((f, i) => (
                    <div key={i} className="text-xs text-rose-200/80 flex items-start gap-2 leading-relaxed">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Synq Intervention */}
              <div className="p-5 rounded-xl bg-sky-950/20 border border-accent-cyan/30 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-accent-cyan/30 text-accent-cyan">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    ProjectSynq Intervention
                  </span>
                </div>
                <div className="space-y-2.5">
                  {activeProblem.synqInterventions.map((intv, i) => (
                    <div key={i} className="text-xs text-synq-text flex items-start gap-2 leading-relaxed">
                      <span className="text-accent-cyan font-bold">•</span>
                      <span>{intv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
