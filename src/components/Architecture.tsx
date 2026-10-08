import React, { useState } from 'react';
import { Brain, Cpu, RefreshCw, ChevronRight, ArrowDown, Sparkles } from 'lucide-react';

export const Architecture: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(1);

  const layers = [
    {
      num: 1,
      name: 'Layer 1 — Intelligence',
      subtitle: 'This is how ProjectSynq thinks.',
      tag: 'COGNITIVE ENGINE',
      sequence: ['WHAT', 'WHY', 'HOW', 'WHERE'],
      desc: 'Before touching contracts or deploying capital, we apply rigorous multi-dimensional diagnostic inquiry into the underlying friction.',
      details: [
        { label: 'WHAT', text: 'Empirical reality of the ecosystem without marketing spin.' },
        { label: 'WHY', text: 'Root causes of friction, mistrust, and asymmetry.' },
        { label: 'HOW', text: 'Bespoke mechanism design required to unlock cooperation.' },
        { label: 'WHERE', text: 'Exact inter-node interface where high-leverage intervention succeeds.' },
      ]
    },
    {
      num: 2,
      name: 'Layer 2 — Mechanism',
      subtitle: 'This is how ProjectSynq solves.',
      tag: 'STRUCTURAL PROTOCOL',
      sequence: ['NODE', 'GAP', 'BRIDGE', 'FLOW', 'LOOP'],
      desc: 'The invariant architectural pathway that converts autonomous counterparties into an aligned, self-reinforcing economic network.',
      details: [
        { label: 'NODE', text: 'Map autonomous stakeholders, capabilities & incentives.' },
        { label: 'GAP', text: 'Diagnose the precise structural friction between them.' },
        { label: 'BRIDGE', text: 'Engineer the missing legal, financial, or operational bridge.' },
        { label: 'FLOW', text: 'Orchestrate live transaction & deliverable movement.' },
        { label: 'LOOP', text: 'Institutionalize into repeatable systems and SOPs.' },
      ]
    },
    {
      num: 3,
      name: 'Layer 3 — Operating Cycle',
      subtitle: 'This is how ProjectSynq operates.',
      tag: 'EXECUTION CADENCE',
      sequence: ['ASSESS', 'BREAK DOWN', 'CONNECT', 'DESIGN', 'EXECUTE', 'FORMALIZE', 'RECYCLE'],
      desc: 'The continuous operational lifecycle executed by ProjectSynq on the ground to move complex stakeholders from gridlock to velocity.',
      details: [
        { label: 'ASSESS', text: 'Full ecosystem topology audit.' },
        { label: 'BREAK DOWN', text: 'Deconstruct friction to atomic causes.' },
        { label: 'CONNECT', text: 'Align counterparties on shared intent.' },
        { label: 'DESIGN', text: 'Blueprint governance & milestone rails.' },
        { label: 'EXECUTE', text: 'Active live handoff and flow supervision.' },
        { label: 'FORMALIZE', text: 'Convert wins into institutional standards.' },
        { label: 'RECYCLE', text: 'Feed intelligence back to the next engagement.' },
      ]
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
            04 / System Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From fragmented nodes to functioning systems.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            ProjectSynq functions as a unified three-layer architecture. Each layer reinforces the others, translating high-level cognitive diagnostics into concrete, repeatable operations.
          </p>
        </div>

        {/* Stacked Architecture Visual */}
        <div className="space-y-6">
          {layers.map((layer) => {
            const isSelected = selectedLayer === layer.num;

            return (
              <div
                key={layer.num}
                onClick={() => setSelectedLayer(layer.num)}
                className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-surface-100/90 border-accent-cyan/60 shadow-[0_0_35px_rgba(0,240,255,0.12)]'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/50'
                }`}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-accent-cyan" />
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center ${
                      isSelected ? 'bg-accent-cyan text-background-deep' : 'bg-surface-200 text-synq-muted'
                    }`}>
                      L0{layer.num}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {layer.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-accent-cyan mt-0.5">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-surface-200 border border-white/5 text-synq-dim">
                    {layer.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-synq-muted leading-relaxed max-w-3xl mb-6">
                  {layer.desc}
                </p>

                {/* Sequence Flow Pills */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-3 px-4 rounded-xl bg-background-deep/80 border border-white/5 mb-6 overflow-x-auto">
                  {layer.sequence.map((step, i) => (
                    <React.Fragment key={step}>
                      <span className={`px-3 py-1 rounded-md font-mono text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                          : 'bg-surface-200 text-synq-muted'
                      }`}>
                        {step}
                      </span>
                      {i < layer.sequence.length - 1 && (
                        <span className="text-synq-dim text-xs font-mono">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Expandable / Detailed Breakdown */}
                {isSelected && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-white/5 animate-in fade-in duration-300">
                    {layer.details.map((d, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-surface-200/50 border border-white/5">
                        <div className="text-[11px] font-mono text-accent-cyan font-semibold mb-1">
                          {d.label}
                        </div>
                        <p className="text-xs text-synq-text leading-snug">
                          {d.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stack Integration Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-synq-dim">
            <span>Layer 1 (Intelligence)</span>
            <span>→</span>
            <span>Layer 2 (Mechanism)</span>
            <span>→</span>
            <span>Layer 3 (Operating Cycle)</span>
            <span className="text-accent-cyan font-semibold">• Coherent Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
};
