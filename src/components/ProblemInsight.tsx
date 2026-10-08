import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, ShieldAlert, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export const ProblemInsight: React.FC = () => {
  const [synqActive, setSynqActive] = useState(false);

  const frictionPoints = [
    { label: 'Missing Information', desc: 'Asymmetric data, hidden availability & opaque pricing.' },
    { label: 'Lack of Trust', desc: 'Counterparty suspicion requiring defensive contractual delays.' },
    { label: 'Misaligned Incentives', desc: 'Zero-sum bargaining instead of compound mutual upside.' },
    { label: 'Broken Processes', desc: 'Informal handoffs, lost messages, and unaligned timelines.' },
    { label: 'Unclear Ownership', desc: 'Ambiguous chain-of-title, IP claims, and deliverable sign-offs.' },
    { label: 'Disconnected Systems', desc: 'Siloed tools that cannot exchange data or status triggers.' },
    { label: 'Inefficient Handoffs', desc: 'Post-production plate delays, invoice approval bottlenecks.' },
    { label: 'Fragmented Markets', desc: 'Territorial, language, and regulatory borders preventing scale.' },
  ];

  return (
    <section id="problem" className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            01 / The Foundational Insight
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ecosystems don't usually fail at the nodes.{' '}
            <span className="block text-gradient-subtle mt-2">
              They fail in the space between them.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-synq-muted leading-relaxed">
            Every complex ecosystem contains extraordinarily capable stakeholders — visionary creators, well-capitalized funds, world-class studios, and eager platforms. The failure occurs in the void that separates them.
          </p>
        </div>

        {/* Interactive Visual: The Friction Layer vs The Connective Layer */}
        <div className="mb-20 rounded-2xl border border-surface-border bg-background-card p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
            <div>
              <span className="text-xs font-mono text-synq-dim uppercase tracking-wider">
                Interactive Architecture Simulation
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {synqActive ? 'The Connective Layer: Converting Friction into Flow' : 'The Default Reality: The Impedance Layer'}
              </h3>
            </div>

            <button
              onClick={() => setSynqActive(!synqActive)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-lg ${
                synqActive
                  ? 'bg-accent-cyan text-background-deep hover:bg-[#33F3FF] shadow-accent-cyan/20'
                  : 'bg-surface-200 text-synq-text hover:text-white border border-white/10 hover:border-accent-cyan/40'
              }`}
            >
              <Zap className={`w-4 h-4 ${synqActive ? 'fill-background-deep' : 'text-accent-cyan'}`} />
              <span>{synqActive ? 'Active: ProjectSynq Connective Layer' : 'Deploy ProjectSynq Into Friction Layer'}</span>
            </button>
          </div>

          {/* Diagram Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Cluster A: Creation & IP Nodes */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-surface-100/70 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-synq-dim uppercase tracking-wider">Node Cluster A</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-200 text-accent-cyan">IP & Talent</span>
              </div>
              <h4 className="text-base font-semibold text-white">Creative & Execution Nodes</h4>
              <p className="text-xs text-synq-muted leading-relaxed">
                Creators, Actors, Scriptwriters, Showrunners, Physical Production Crews, VFX Houses.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {['High Vision', 'IP Inventory', 'Cultural Velocity'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200/80 text-synq-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: Friction Layer vs Synq Bridge */}
            <div className="lg:col-span-4 relative flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-700 min-h-[220px]">
              {synqActive ? (
                /* ProjectSynq Operating Layer */
                <div className="w-full h-full p-5 rounded-xl bg-accent-cyan/[0.08] border border-accent-cyan/50 text-center relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                  <div className="w-8 h-8 rounded-full bg-accent-cyan/20 border border-accent-cyan flex items-center justify-center mx-auto mb-2 text-accent-cyan">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest font-semibold">
                    PROJECTSYNQ
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    The Connective Layer
                  </div>
                  <p className="text-[11px] text-synq-muted mt-2 leading-relaxed">
                    Diagnosing Gaps • Engineering Bridges • Flow Orchestration • Repeatable Systems
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-mono text-accent-lime">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Friction Neutralized into Flow</span>
                  </div>
                </div>
              ) : (
                /* The Default Friction Layer */
                <div className="w-full h-full p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 text-center relative animate-in fade-in duration-500">
                  <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center mx-auto mb-2 text-rose-400">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-mono text-rose-400 uppercase tracking-widest font-semibold">
                    THE FRICTION LAYER
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    Structural Impedance
                  </div>
                  <p className="text-[11px] text-synq-muted mt-2 leading-relaxed">
                    Distrust • Unaligned Incentives • Defensive Paperwork • Broken Handoffs • Stalled Momentum
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-mono text-rose-400">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Transactions Stall in the Void</span>
                  </div>
                </div>
              )}
            </div>

            {/* Cluster B: Capital & Distribution Nodes */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-surface-100/70 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-synq-dim uppercase tracking-wider">Node Cluster B</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-200 text-sky-400">Capital & Screens</span>
              </div>
              <h4 className="text-base font-semibold text-white">Commercial & Distribution Nodes</h4>
              <p className="text-xs text-synq-muted leading-relaxed">
                PE Funds, Slate Financiers, OTT Platforms, Theatrical Screens, Global Brand Sponsors.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Capital Depth', 'Audience Scale', 'Monetization Rails'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200/80 text-synq-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 8 Friction Sources Breakdown Grid */}
        <div className="mt-12">
          <div className="text-center md:text-left mb-8">
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
              Diagnosing the Inter-Node Void
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Where Friction Originates Between Stakeholders
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {frictionPoints.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-surface-100/50 border border-white/5 hover:border-accent-cyan/30 hover:bg-surface-100 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-synq-dim group-hover:text-accent-cyan transition-colors">
                    0{i + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 group-hover:bg-accent-cyan transition-colors" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5 group-hover:text-accent-cyan transition-colors">
                  {item.label}
                </h4>
                <p className="text-xs text-synq-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-surface-100/30 border border-white/5 text-center">
            <p className="text-base sm:text-lg text-synq-text font-medium">
              "ProjectSynq operates <span className="text-accent-cyan underline decoration-accent-cyan/40 underline-offset-4">precisely in that space</span>. We do not replace the stakeholders. We engineer the condition for them to act together."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
