import React, { useState } from 'react';
import { Network, GitMerge, Repeat, ArrowRight, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export const WhatIsProjectSynq: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'connect' | 'orchestrate' | 'systemize'>('orchestrate');

  return (
    <section id="model" className="relative py-24 md:py-32 border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 clean-pill px-3 py-1 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-4">
            <span>02 / Operating Definition</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-white leading-[1.04]">
            A new operating layer between stakeholders.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
            ProjectSynq is an <strong className="text-white font-bold">asset-light, trust-based, process-driven operating layer</strong> engineered between stakeholders to diagnose gaps, design bridges, and convert friction into repeatable systems.
          </p>
        </div>

        {/* Uniform Clean Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

          {/* Bento Card 1: CONNECT (Spans 7 cols) */}
          <div
            onMouseEnter={() => setActivePillar('connect')}
            className={`lg:col-span-7 clean-card p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-all ${
              activePillar === 'connect' ? 'clean-card-active' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
                  <Network className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs clean-pill px-3 py-1">
                  PILLAR 01
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-2">
                Node Discovery & Alignment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                CONNECT
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-3">
                Bring the right nodes together without agency distortion.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                We map fragmented counterparties across the ecosystem. By identifying latent capabilities and aligning commercial intent, we open secure bilateral communication corridors where friction once reigned.
              </p>
            </div>

            {/* Embedded Live Simulation Graphic */}
            <div className="mt-8 pt-5 border-t border-white/[0.06]">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="font-mono text-xs text-white">Bilateral Corridor: Creator ↔ OTT Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="clean-pill px-2.5 py-0.5 text-[10px] font-mono text-accent-cyan">Verified Intent</span>
                  <span className="clean-pill px-2.5 py-0.5 text-[10px] font-mono text-zinc-400">0% Broker Fee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: ORCHESTRATE (Spans 5 cols) */}
          <div
            onMouseEnter={() => setActivePillar('orchestrate')}
            className={`lg:col-span-5 clean-card p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-all ${
              activePillar === 'orchestrate' ? 'clean-card-active' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
                  <GitMerge className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs clean-pill px-3 py-1">
                  PILLAR 02
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-2">
                Bridge Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                ORCHESTRATE
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-3">
                Make the relationship work through active governance.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We engineer the bridging mechanics: incentive-synchronized contracts, milestone-gated liquidity, and active live handoff supervision that dissolves execution drag.
              </p>
            </div>

            {/* Live Flow Metric */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] space-y-2.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">Impedance Reduction:</span>
                <span className="text-accent-cyan font-bold">-88% Drag</span>
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                <div className="bg-accent-cyan h-full rounded-full w-[88%]" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 block text-right">Milestone-Gated Escrow Rails Active</span>
            </div>
          </div>

          {/* Bento Card 3: SYSTEMIZE (Spans 5 cols) */}
          <div
            onMouseEnter={() => setActivePillar('systemize')}
            className={`lg:col-span-5 clean-card p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-all ${
              activePillar === 'systemize' ? 'clean-card-active' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
                  <Repeat className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs clean-pill px-3 py-1">
                  PILLAR 03
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-2">
                Institutionalization
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                SYSTEMIZE
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-3">
                Turn what works into a repeatable economic rail.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We codify breakthroughs into reusable contract templates, standardized operating playbooks, and compounding feedback for Inter-Node Intelligence™.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
              <span className="text-xs font-mono text-zinc-300">
                14 Reusable Protocols Codified into Institutional SOPs
              </span>
            </div>
          </div>

          {/* Bento Card 4: THE OPERATING MOAT (Spans 7 cols) */}
          <div className="lg:col-span-7 clean-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 clean-pill px-3 py-1 text-xs font-mono text-accent-cyan">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>NON-EXTRACTIVE GOVERNANCE</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">ZERO CAPEX</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Asset-Light by Architectural Design.
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                We do not own IP, take production slate equity, or employ creative talent. Because we remain strictly non-adversarial, counterparties trust us with sensitive commercial and contractual bottlenecks.
              </p>
            </div>

            {/* Stat Matrix */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">100%</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Neutral Posture</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-accent-cyan tracking-tight block">72h</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Diagnosis SLA</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">0%</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Equity Drag</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
