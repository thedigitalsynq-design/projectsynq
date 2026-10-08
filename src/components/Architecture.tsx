import React, { useState } from 'react';
import { Brain, Cpu, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

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
    <section id="architecture" className="relative py-20 md:py-28 bg-[#08090C] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 clean-pill px-3 py-1 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-accent-cyan" />
            <span>04 / System Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-white leading-[1.04]">
            From fragmented nodes to functioning systems.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
            ProjectSynq functions as a unified three-layer architecture. Each layer reinforces the others, translating cognitive diagnostics into concrete, repeatable operations.
          </p>
        </div>

        {/* Clean Segmented Switcher Pill Bar */}
        <div className="flex flex-wrap p-1 rounded-full bg-white/[0.03] border border-white/[0.08] max-w-xl mb-8 gap-1">
          {layers.map((l) => (
            <button
              key={l.num}
              onClick={() => setSelectedLayer(l.num)}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                selectedLayer === l.num
                  ? 'bg-white/[0.12] text-white border border-white/[0.12] shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <span className="font-mono text-xs text-accent-cyan">0{l.num}</span>
              <span>{l.name.split('—')[1]?.trim() || l.name}</span>
            </button>
          ))}
        </div>

        {/* Clean Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Card 1: Core Layer Overview (Spans 8 cols) */}
          <div className="lg:col-span-8 clean-card p-8 sm:p-10 flex flex-col justify-between">
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

                <span className="clean-pill px-3 py-1 text-xs font-mono">
                  L0{active.num}
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-2">
                {active.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mb-6">
                {active.desc}
              </p>

              {/* Invariant Sequence Bar */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] mb-6">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-2">
                  Invariant Sequence Pathway
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {active.sequence.map((step, i) => (
                    <React.Fragment key={step}>
                      <span className="clean-pill px-2.5 py-1 font-mono text-xs font-bold text-accent-cyan bg-white/[0.04] border-accent-cyan/20">
                        {step}
                      </span>
                      {i < active.sequence.length - 1 && (
                        <span className="text-zinc-600 text-xs font-mono">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Atomic Breakdown Mini Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/[0.06]">
              {active.details.map((d, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-mono text-xs font-bold text-accent-cyan block mb-1">
                    {d.label}
                  </span>
                  <p className="text-xs text-zinc-400 leading-snug">
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Stack Integrity (Spans 4 cols) */}
          <div className="lg:col-span-4 clean-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 clean-pill px-3 py-1 text-xs font-mono text-accent-cyan mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
                <span>COHERENT OPERATING RAIL</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
                Why Isolated Tools Fail.
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Consultancies offer Layer 1 (reports) without mechanisms. Software platforms offer Layer 3 (dashboards) without human trust or dispute bridges. ProjectSynq binds all three into a single execution protocol.
              </p>
            </div>

            <div className="space-y-2 pt-5 border-t border-white/[0.06] text-xs font-mono">
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-zinc-500">L1: Diagnostic Rigor</span>
                <span className="text-accent-cyan">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-zinc-500">L2: Mechanism Protocol</span>
                <span className="text-accent-cyan">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-zinc-500">L3: Ground Cadence</span>
                <span className="text-accent-cyan">Synchronized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
