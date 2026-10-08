import React, { useState } from 'react';
import { Brain, Cpu, RefreshCw, ChevronRight, ArrowDown, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export const Architecture: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(1);

  const layers = [
    {
      num: 1,
      name: 'Layer 1 — Intelligence',
      subtitle: 'This is how ProjectSynq thinks.',
      tag: 'COGNITIVE ENGINE',
      icon: Brain,
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
      icon: Cpu,
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
      icon: RefreshCw,
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

  const active = layers.find(l => l.num === selectedLayer) || layers[0];
  const ActiveIcon = active.icon;

  return (
    <section id="architecture" className="relative py-28 md:py-36 bg-background border-t border-white/[0.06] overflow-hidden">
      {/* Cupertino Spotlight Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-accent-cyan/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 apple-pill px-3.5 py-1.5 font-mono text-[11px] text-synq-dim tracking-wider uppercase mb-5">
            <Layers className="w-3.5 h-3.5 text-accent-cyan" />
            <span>04 / System Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-white leading-[1.04]">
            From fragmented nodes to functioning systems.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-zinc-300 leading-relaxed">
            ProjectSynq functions as a unified three-layer architecture. Each layer reinforces the others, translating cognitive diagnostics into concrete, repeatable operations.
          </p>
        </div>

        {/* Apple Segmented Switcher Pill Bar */}
        <div className="flex flex-wrap p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-2xl max-w-2xl mb-10 gap-1">
          {layers.map((l) => (
            <button
              key={l.num}
              onClick={() => setSelectedLayer(l.num)}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                selectedLayer === l.num
                  ? 'bg-white/[0.12] text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/[0.1]'
                  : 'text-synq-muted hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <span className="font-mono text-xs text-accent-cyan">0{l.num}</span>
              <span>{l.name.split('—')[1]?.trim() || l.name}</span>
            </button>
          ))}
        </div>

        {/* Apple Bento Grid for Active Layer Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Bento Card 1: Core Layer Overview (Spans 8 columns) */}
          <div className="lg:col-span-8 apple-bento-card p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent-cyan/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-accent-cyan uppercase tracking-wider block">
                      {active.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {active.name}
                    </h3>
                  </div>
                </div>

                <span className="apple-pill px-3 py-1 text-xs font-mono text-synq-dim">
                  ARCHITECTURE L0{active.num}
                </span>
              </div>

              <p className="text-base text-zinc-300 font-medium mb-3">
                {active.subtitle}
              </p>
              <p className="text-sm text-synq-muted leading-relaxed max-w-2xl mb-8">
                {active.desc}
              </p>

              {/* Invariant Sequence Bar */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] mb-8">
                <span className="font-mono text-[10px] text-synq-dim uppercase tracking-wider block mb-3">
                  Invariant Sequence Pathway
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {active.sequence.map((step, i) => (
                    <React.Fragment key={step}>
                      <span className="apple-pill px-3 py-1 font-mono text-xs font-bold text-accent-cyan bg-accent-cyan/[0.08] border-accent-cyan/20">
                        {step}
                      </span>
                      {i < active.sequence.length - 1 && (
                        <span className="text-synq-dim text-xs font-mono">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Atomic Breakdown Mini Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.06]">
              {active.details.map((d, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-mono text-xs font-bold text-accent-cyan block mb-1">
                    {d.label}
                  </span>
                  <p className="text-xs text-synq-text leading-snug">
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 2: Stack Integrity & Cross-Layer Synthesis (Spans 4 columns) */}
          <div className="lg:col-span-4 apple-bento-card p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-surface-100/90 to-background-deep">
            <div>
              <div className="flex items-center gap-2 apple-pill px-3 py-1 text-xs font-mono text-accent-lime mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-lime" />
                <span>COHERENT OPERATING RAIL</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-4">
                Why Individual Tools Fail Ecosystems.
              </h4>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mb-6">
                Consultancies offer Layer 1 (reports) without mechanisms. Software platforms offer Layer 3 (dashboards) without human trust or dispute bridges. ProjectSynq binds all three into a single execution protocol.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.06] text-xs font-mono">
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-synq-dim">L1: Diagnostic Rigor</span>
                <span className="text-accent-cyan">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-synq-dim">L2: Mechanism Protocol</span>
                <span className="text-accent-cyan">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-synq-dim">L3: Ground Cadence</span>
                <span className="text-accent-lime">Synchronized</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
