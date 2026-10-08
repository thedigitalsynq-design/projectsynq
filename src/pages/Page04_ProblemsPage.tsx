import React, { useState } from 'react';
import { SUPER_PROBLEMS, ProblemCategory } from '../data/problems';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { AlertTriangle, AlertOctagon, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface Page04ProblemsProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const Page04_ProblemsPage: React.FC<Page04ProblemsProps> = ({ onNavigate, onStartSynq }) => {
  const [selectedProblemId, setSelectedProblemId] = useState<string>(SUPER_PROBLEMS[0].id);
  const activeProblem = SUPER_PROBLEMS.find(p => p.id === selectedProblemId) || SUPER_PROBLEMS[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <AlertTriangle className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 04 / The Problem Taxonomy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Problems:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Systemic Friction & Root Causes
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Ecosystem breakdowns are not isolated anomalies. They are repeatable super-problems where one stakeholder's defensive bottleneck triggers upstream and downstream paralysis across the entire value chain.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Problem Category Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-12">
          {SUPER_PROBLEMS.map(problem => {
            const isSelected = selectedProblemId === problem.id;
            return (
              <button
                key={problem.id}
                onClick={() => setSelectedProblemId(problem.id)}
                className={`p-3.5 rounded-xl border text-left transition-all font-mono text-xs ${
                  isSelected
                    ? 'bg-sky-950/80 border-accent-cyan text-white shadow-md'
                    : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[10px] text-accent-cyan block mb-1">
                  0{SUPER_PROBLEMS.indexOf(problem) + 1}
                </span>
                <span className="font-semibold block truncate">
                  {problem.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Problem Deep Diagnosis Card */}
        <div className="clean-card p-8 sm:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-8 border-b border-sky-500/15">
            <div>
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block mb-1">
                SUPER-PROBLEM DIAGNOSIS
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal text-white">
                {activeProblem.name}
              </h2>
              <p className="mt-3 text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                {activeProblem.fullDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 text-accent-cyan font-mono text-xs flex-shrink-0">
              <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Observed Impact</span>
              <span className="font-bold text-sm block mt-0.5">{activeProblem.metric}</span>
            </div>
          </div>

          {/* Granular Breakdown: Affected Stakeholders & Common Frictions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Left 5 cols: Stakeholder Intersection & Case Study */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Affected Stakeholders in this Cross-Fire
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProblem.affectedStakeholders.map((stk, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {stk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-accent-cyan space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan block">
                  Documented Real-World Case
                </span>
                <p className="text-xs text-zinc-300 italic leading-relaxed">
                  "{activeProblem.realWorldExample}"
                </p>
              </div>
            </div>

            {/* Right 7 cols: Common Friction vs Interventions */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-zinc-400 font-mono text-xs">
                  <AlertOctagon className="w-4 h-4 text-zinc-400" />
                  <span>The Systemic Impedance</span>
                </div>
                <div className="space-y-2">
                  {activeProblem.commonFriction.map((f, i) => (
                    <div key={i} className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-zinc-500 font-bold">•</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-sky-950/30 border border-accent-cyan/30 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-accent-cyan/20 text-accent-cyan font-mono text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                  <span>Required Intervention</span>
                </div>
                <div className="space-y-2">
                  {activeProblem.synqInterventions.map((intv, i) => (
                    <div key={i} className="text-xs text-sky-200 flex items-start gap-2 leading-relaxed">
                      <span className="text-accent-cyan font-bold">•</span>
                      <span>{intv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed to Chapter 05 */}
        <PageNavigationBanner
          currentPageNumber="04"
          currentPageTitle="Problems"
          nextRouteHash="#bottlenecks"
          nextPageNumber="05"
          nextPageTitle="Bottlenecks: Where Value & Capital Get Stuck"
          nextPageDescription="Separate general problems from acute bottlenecks — discover the 9 exact points where discovery, contracting, and capital freeze."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
