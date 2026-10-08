import React, { useState } from 'react';
import { Network, GitMerge, Repeat, ArrowRight, ShieldCheck, Zap, Layers, Activity, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhatIsProjectSynq: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'connect' | 'orchestrate' | 'systemize'>('orchestrate');

  return (
    <section id="model" className="relative py-28 md:py-36 bg-background border-t border-white/[0.06] overflow-hidden">
      {/* Cupertino Ambient Background Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent-cyan/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-accent-lime/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Apple-style Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 apple-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>02 / Operating Definition</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-white leading-[1.04]">
            A new operating layer between stakeholders.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
            ProjectSynq is an <strong className="text-white font-bold">asset-light, trust-based, process-driven operating layer</strong> engineered between stakeholders to diagnose gaps, design bridges, and convert friction into repeatable systems.
          </p>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Bento Card 1: HERO SPOTLIGHT (CONNECT) — Spans 7 columns */}
          <div
            onMouseEnter={() => setActivePillar('connect')}
            className={`lg:col-span-7 apple-bento-card p-8 sm:p-10 flex flex-col justify-between group cursor-pointer transition-all duration-500 relative overflow-hidden ${
              activePillar === 'connect' ? 'border-accent-cyan/40 bg-surface-100/90' : ''
            }`}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan shadow-inner">
                  <Network className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs apple-pill px-3 py-1 text-synq-dim">
                  PILLAR 01
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-2">
                Node Discovery & Alignment
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                CONNECT
              </h3>
              <p className="text-base text-zinc-300 font-medium mb-4">
                Bring the right nodes together without agency distortion.
              </p>
              <p className="text-sm text-synq-muted leading-relaxed max-w-xl">
                We map fragmented counterparties across the ecosystem. By identifying latent capabilities and aligning commercial intent, we open secure bilateral communication corridors where friction once reigned.
              </p>
            </div>

            {/* Embedded Live Simulation Graphic */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="font-mono text-xs text-white font-medium">Bilateral Corridor: Creator ↔ OTT Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="apple-pill px-2.5 py-1 text-[11px] font-mono text-accent-cyan">Verified Intent</span>
                  <span className="apple-pill px-2.5 py-1 text-[11px] font-mono text-synq-muted">0% Broker Fee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: ORCHESTRATE (Spans 5 columns) */}
          <div
            onMouseEnter={() => setActivePillar('orchestrate')}
            className={`lg:col-span-5 apple-bento-card p-8 sm:p-10 flex flex-col justify-between group cursor-pointer transition-all duration-500 relative overflow-hidden ${
              activePillar === 'orchestrate' ? 'border-accent-cyan/40 bg-surface-100/90' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan shadow-inner">
                  <GitMerge className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs apple-pill px-3 py-1 text-synq-dim">
                  PILLAR 02
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-2">
                Bridge Engineering
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                ORCHESTRATE
              </h3>
              <p className="text-base text-zinc-300 font-medium mb-4">
                Make the relationship work through active governance.
              </p>
              <p className="text-sm text-synq-muted leading-relaxed">
                We engineer the bridging mechanics: incentive-synchronized contracts, milestone-gated liquidity, and active live handoff supervision that dissolves execution drag.
              </p>
            </div>

            {/* Apple-style Widget: Live Flow Metric */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-synq-dim">Impedance Reduction:</span>
                <span className="text-accent-cyan font-bold">-88% Drag</span>
              </div>
              <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden p-0.5">
                <div className="bg-gradient-to-r from-accent-cyan to-accent-lime h-full rounded-full w-[88%]" />
              </div>
              <span className="text-[11px] font-mono text-synq-dim block text-right">Milestone-Gated Escrow Rails Active</span>
            </div>
          </div>

          {/* Bento Card 3: SYSTEMIZE (Spans 5 columns) */}
          <div
            onMouseEnter={() => setActivePillar('systemize')}
            className={`lg:col-span-5 apple-bento-card p-8 sm:p-10 flex flex-col justify-between group cursor-pointer transition-all duration-500 relative overflow-hidden ${
              activePillar === 'systemize' ? 'border-accent-lime/40 bg-surface-100/90' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-lime shadow-inner">
                  <Repeat className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs apple-pill px-3 py-1 text-synq-dim">
                  PILLAR 03
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-accent-lime font-semibold block mb-2">
                Institutionalization
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                SYSTEMIZE
              </h3>
              <p className="text-base text-zinc-300 font-medium mb-4">
                Turn what works into a repeatable economic rail.
              </p>
              <p className="text-sm text-synq-muted leading-relaxed">
                We codify breakthroughs into reusable contract templates, standardized operating playbooks, and compounding feedback for Inter-Node Intelligence™.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-lime flex-shrink-0" />
              <span className="text-xs font-mono text-synq-text">
                Converted 14 Ad-Hoc Handoffs into Automated Playbooks
              </span>
            </div>
          </div>

          {/* Bento Card 4: THE OPERATING MOAT (Spans 7 columns) */}
          <div className="lg:col-span-7 apple-bento-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-surface-100/90 via-surface-100/40 to-background-deep">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 apple-pill px-3 py-1 text-xs font-mono text-accent-lime">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-lime" />
                  <span>NON-EXTRACTIVE GOVERNANCE</span>
                </div>
                <span className="font-mono text-xs text-synq-dim">ZERO CAPEX</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Asset-Light by Architectural Design.
              </h4>
              <p className="text-sm text-synq-muted leading-relaxed max-w-xl">
                We do not own IP, take production slate equity, or employ creative talent. Because we remain strictly non-adversarial, counterparties trust us with sensitive commercial and contractual bottlenecks.
              </p>
            </div>

            {/* Apple Stat Matrix */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">100%</span>
                <span className="text-[11px] font-mono text-synq-dim uppercase">Neutral Posture</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-accent-cyan tracking-tight block">72h</span>
                <span className="text-[11px] font-mono text-synq-dim uppercase">Diagnosis SLA</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-accent-lime tracking-tight block">0%</span>
                <span className="text-[11px] font-mono text-synq-dim uppercase">Equity Drag</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
