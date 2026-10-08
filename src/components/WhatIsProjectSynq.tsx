import React, { useState } from 'react';
import { Network, GitMerge, Repeat, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export const WhatIsProjectSynq: React.FC = () => {
  const [activeCard, setActiveCard] = useState<'connect' | 'orchestrate' | 'systemize'>('connect');

  const cards = [
    {
      id: 'connect' as const,
      title: 'CONNECT',
      tagline: 'Bring the right nodes together.',
      icon: Network,
      color: 'border-sky-500/40 text-sky-400',
      glow: 'rgba(56, 189, 248, 0.15)',
      description: 'Mapping fragmented, siloed stakeholders. Identifying latent capabilities, aligning initial intent, and opening secure bilateral communication corridors.',
      bullets: [
        'Stakeholder & capability topology mapping',
        'Verification of bona fide intent and availability',
        'Neutral introduction corridors without agent distortion'
      ],
      vizTitle: 'Bilateral Corridors Active',
      nodesCount: '12 Target Nodes Identified',
      flowState: 'Corridor Established'
    },
    {
      id: 'orchestrate' as const,
      title: 'ORCHESTRATE',
      tagline: 'Make the relationship work.',
      icon: GitMerge,
      color: 'border-accent-cyan/60 text-accent-cyan',
      glow: 'rgba(0, 240, 255, 0.2)',
      description: 'Engineering the bridging mechanics — bilateral governance covenants, milestone-gated escrow, and live handoff supervision that dissolves execution drag.',
      bullets: [
        'Incentive-synchronized commercial structures',
        'Milestone-triggered liquidity and asset handoffs',
        'Active bottleneck clearance during live execution'
      ],
      vizTitle: 'Live Operational Flow',
      nodesCount: 'Bridges Synchronizing Data & Capital',
      flowState: 'Impedance Reduced by 88%'
    },
    {
      id: 'systemize' as const,
      title: 'SYSTEMIZE',
      tagline: 'Turn what works into a repeatable system.',
      icon: Repeat,
      color: 'border-accent-lime/50 text-accent-lime',
      glow: 'rgba(204, 255, 0, 0.15)',
      description: 'Translating successful, hard-won collaboration breakthroughs into institutionalized SOPs, standardized agreements, and recurring ecosystem rails.',
      bullets: [
        'Codification of reusable contract templates & SLAs',
        'Institutionalization into standard operating playbooks',
        'Telemetry feedback into Inter-Node Intelligence™'
      ],
      vizTitle: 'Institutional Operating Rail',
      nodesCount: 'Repeatable Multi-Stakeholder Engine',
      flowState: 'Perpetual Systemic Loop'
    }
  ];

  return (
    <section id="model" className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-accent-cyan uppercase tracking-wider mb-4">
            02 / Operating Definition
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            A new operating layer between stakeholders.
          </h2>
          <blockquote className="mt-6 p-5 rounded-xl bg-surface-100/60 border-l-2 border-accent-cyan text-base sm:text-lg text-synq-text leading-relaxed font-normal">
            "ProjectSynq is an <strong className="text-white">asset-light, trust-based, process-driven operating layer</strong> that works between stakeholders to identify friction, diagnose gaps, design bridges, orchestrate flows, resolve bottlenecks, and create repeatable systems."
          </blockquote>
        </div>

        {/* 3 Pillar Cards with hover interactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((c) => {
            const Icon = c.icon;
            const isHovered = activeCard === c.id;

            return (
              <div
                key={c.id}
                onMouseEnter={() => setActiveCard(c.id)}
                className={`relative rounded-2xl p-7 md:p-8 transition-all duration-300 cursor-pointer border ${
                  isHovered
                    ? `bg-surface-100/90 ${c.color} shadow-2xl scale-[1.01]`
                    : 'bg-surface-100/40 border-white/5 hover:border-white/20'
                }`}
                style={{
                  boxShadow: isHovered ? `0 12px 40px -10px ${c.glow}` : 'none'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-surface-200 border border-white/5 ${c.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-synq-dim uppercase tracking-wider">
                    Pillar {c.id === 'connect' ? '01' : c.id === 'orchestrate' ? '02' : '03'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-sm font-medium text-accent-cyan mb-4">
                  {c.tagline}
                </p>

                <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mb-6">
                  {c.description}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  {c.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-synq-text">
                      <span className="text-accent-cyan mt-0.5">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Visual Response Box based on Active Pillar */}
        <div className="rounded-2xl border border-surface-border bg-background-deep p-6 md:p-8 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-synq-dim uppercase tracking-wider">
                Active System State Response
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                {cards.find(c => c.id === activeCard)?.vizTitle}
              </h4>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-surface-100 border border-white/5 text-synq-muted">
                {cards.find(c => c.id === activeCard)?.nodesCount}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                {cards.find(c => c.id === activeCard)?.flowState}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
