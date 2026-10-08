import React, { useState } from 'react';
import { Shield, CheckCircle2, Lock, Eye, FileText, Scale, History, UserCheck, Zap } from 'lucide-react';

export const Trust: React.FC = () => {
  const [activeTrustIndex, setActiveTrustIndex] = useState<number>(0);

  const trustComponents = [
    {
      title: 'Verification',
      icon: Shield,
      desc: 'Independent validation of IP chain-of-title, financial escrow, and talent availability before commitments lock.',
      metric: 'Zero Title Ambiguity'
    },
    {
      title: 'Transparency',
      icon: Eye,
      desc: 'Open waterfall accounting and milestone metrics visible to all authorized counterparties simultaneously.',
      metric: 'Real-time Waterfall Audits'
    },
    {
      title: 'Accountability',
      icon: Scale,
      desc: 'Explicit pre-agreed remedy protocols and conditional escrow releases triggered strictly by deliverable acceptance.',
      metric: 'Contractual Escrow Triggers'
    },
    {
      title: 'Clear Roles',
      icon: UserCheck,
      desc: 'Demarcated decision boundaries that eliminate territory confusion between talent, producers, and financiers.',
      metric: 'Eliminates Scope Creep'
    },
    {
      title: 'Defined Incentives',
      icon: Zap,
      desc: 'Compounding upside structures that ensure when one node wins, all participating nodes share in the economic upside.',
      metric: 'Non-Zero-Sum Economics'
    },
    {
      title: 'Documentation',
      icon: FileText,
      desc: 'Institutional-grade contract modularity replacing 100-page adversarial documents with streamlined, clear schedules.',
      metric: 'Standardized Schedules'
    },
    {
      title: 'Governance',
      icon: Lock,
      desc: 'Neutral tripartite dispute arbitration and fast-track resolution mechanisms preventing legal gridlock.',
      metric: '3-Day Dispute Mediation'
    },
    {
      title: 'Performance History',
      icon: History,
      desc: 'Verifiable track records of execution reliability recorded across the Inter-Node Intelligence layer.',
      metric: 'Verified Historical Delivery'
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            12 / Foundational Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Trust isn't a feature.{' '}
            <span className="block text-gradient-cyan mt-2">
              It's infrastructure.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            Without operational trust, transaction velocity plummets to zero. We engineer trust not as an abstract sentiment, but as rigorous, auditable operational mechanics.
          </p>
        </div>

        {/* 8 Components Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustComponents.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTrustIndex === idx;

            return (
              <div
                key={item.title}
                onClick={() => setActiveTrustIndex(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-surface-100 border-accent-cyan/60 shadow-xl shadow-accent-cyan/10 ring-1 ring-accent-cyan/30 scale-[1.02]'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-accent-cyan text-background-deep' : 'bg-surface-200 text-synq-muted'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-synq-dim">0{idx + 1}</span>
                  </div>

                  <h3 className={`text-lg font-bold tracking-tight mb-2 ${isActive ? 'text-white' : 'text-synq-text'}`}>
                    {item.title}
                  </h3>

                  <p className="text-xs text-synq-muted leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-accent-cyan">
                  {item.metric}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout: Trust Strengthens Network Connections */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-surface-100/80 to-surface-200/40 border border-accent-cyan/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-accent-lime uppercase tracking-widest font-semibold">
              The Operational Law of Ecosystems
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Higher Trust = Exponentially Faster Flow
            </h4>
            <p className="text-xs sm:text-sm text-synq-muted max-w-2xl">
              When trust is engineered into protocols, counterparties stop hiring defensive legal armies, contracts close in days instead of quarters, and capital moves without friction.
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-synq-dim flex-shrink-0">
            <div className="px-4 py-2 rounded-xl bg-background-deep border border-white/10 text-center">
              <span className="text-lg font-bold text-accent-cyan block">100%</span>
              <span>Auditable Escrow</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-background-deep border border-white/10 text-center">
              <span className="text-lg font-bold text-accent-lime block">3x</span>
              <span>Deal Velocity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
