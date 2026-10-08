import React, { useState } from 'react';
import { ENTERTAINMENT_NODES } from '../data/ecosystem';
import { Film, AlertTriangle, CheckCircle2, ArrowRight, Zap, Link2, Sparkles } from 'lucide-react';
import { OmniStakeholderConnector } from './OmniStakeholderConnector';

interface EntertainmentEcosystemProps {
  onExploreMatrix?: () => void;
  onStartSynq?: () => void;
}

export const EntertainmentEcosystem: React.FC<EntertainmentEcosystemProps> = ({
  onExploreMatrix,
  onStartSynq
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('talent');
  const [viewMode, setViewMode] = useState<'mesh' | 'cards'>('mesh');

  const selectedNode = ENTERTAINMENT_NODES.find(n => n.id === selectedNodeId) || ENTERTAINMENT_NODES[0];

  return (
    <section id="ecosystems" className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4">
              09 / Initial Opportunity Matrix
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Start where complexity is highest.{' '}
              <span className="block text-gradient-cyan mt-2">
                Indian Entertainment Ecosystem.
              </span>
            </h2>
            <blockquote className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed italic border-l-2 border-accent-cyan pl-4">
              "A new way to operate complex entertainment ecosystems."
            </blockquote>
            <p className="mt-3 text-sm text-synq-muted leading-relaxed">
              We connect all 17 autonomous stakeholders — creative, financial, technological, and regulatory — into one synchronized, frictionless network.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Switcher */}
            <div className="flex items-center gap-1 bg-surface-200/90 p-1 rounded-xl border border-white/10 font-mono text-xs">
              <button
                onClick={() => setViewMode('mesh')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'mesh'
                    ? 'bg-accent-cyan text-background-deep font-bold shadow'
                    : 'text-synq-muted hover:text-white'
                }`}
              >
                All Connected (Omni-Mesh)
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'cards'
                    ? 'bg-accent-cyan text-background-deep font-bold shadow'
                    : 'text-synq-muted hover:text-white'
                }`}
              >
                Node Inspector
              </button>
            </div>

            {/* Link to Full 12-Layer Matrix */}
            {onExploreMatrix && (
              <button
                onClick={onExploreMatrix}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-surface-100 hover:bg-surface-200 text-accent-cyan border border-accent-cyan/30 transition-all shadow-sm"
              >
                <span>Full 12-Layer Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* View Mode 1: Omni-Stakeholder Mesh Connector (All 17 Nodes Connected) */}
        {viewMode === 'mesh' && (
          <div className="mb-12 animate-in fade-in duration-300">
            <OmniStakeholderConnector
              initialPrimaryNode="talent"
              initialSecondaryNode="production"
              onStartSynq={onStartSynq}
            />
          </div>
        )}

        {/* View Mode 2: Node Deep-Dive Cards Grid */}
        {viewMode === 'cards' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* 17 Nodes Constellation Grid Chips */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-synq-dim mb-3 flex items-center justify-between">
                <span>Select Any Ecosystem Node (17 Active Nodes):</span>
                <span className="text-accent-cyan font-semibold">Active: {selectedNode.name}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {ENTERTAINMENT_NODES.map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  const isConnected = selectedNode.connectedNodes.includes(node.id);

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono transition-all border flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-accent-cyan text-background-deep font-bold border-accent-cyan shadow-lg shadow-accent-cyan/20 scale-105 z-10'
                          : isConnected
                          ? 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/40 hover:bg-accent-cyan/20'
                          : 'bg-surface-100/60 text-synq-muted border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-background-deep' : isConnected ? 'bg-accent-cyan animate-pulse' : 'bg-synq-dim'}`} />
                      <span>{node.name}</span>
                      {isConnected && (
                        <span className="text-[10px] opacity-75 font-normal">↔</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node Details Card */}
            <div className="rounded-2xl border border-surface-border bg-background-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Node Identity & Connected Counterparties */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-center text-accent-cyan">
                      <Film className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {selectedNode.name}
                        </h3>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-200 text-accent-lime">
                          {selectedNode.category}
                        </span>
                      </div>
                      <p className="text-xs text-synq-muted mt-1">
                        {selectedNode.description}
                      </p>
                    </div>
                  </div>

                  {/* Connected Counterparties */}
                  <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 space-y-2">
                    <div className="text-[11px] font-mono text-synq-dim uppercase tracking-wider flex items-center gap-1.5">
                      <Link2 className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>Inter-Connected Counterparties ({selectedNode.connectedNodes.length}):</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.connectedNodes.map((connId) => {
                        const connNode = ENTERTAINMENT_NODES.find(n => n.id === connId);
                        return (
                          <button
                            key={connId}
                            onClick={() => setSelectedNodeId(connId)}
                            className="px-2.5 py-1 rounded bg-surface-200 text-xs text-accent-cyan hover:bg-accent-cyan hover:text-background-deep transition-all font-mono border border-accent-cyan/20"
                          >
                            ↔ {connNode?.name || connId}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-accent-cyan/[0.05] border border-accent-cyan/30 text-xs font-mono text-accent-cyan flex items-center gap-2">
                    <Zap className="w-4 h-4 flex-shrink-0" />
                    <span>{selectedNode.metricPreview}</span>
                  </div>
                </div>

                {/* Right: Typical Friction vs ProjectSynq Interventions */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-rose-500/20 text-rose-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                        Typical Inter-Node Friction
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      {selectedNode.typicalFriction.map((f, i) => (
                        <div key={i} className="text-xs text-rose-200/80 flex items-start gap-2 leading-relaxed">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-sky-950/20 border border-accent-cyan/30 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-accent-cyan/30 text-accent-cyan">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                        Synq Intervention Points
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      {selectedNode.synqInterventions.map((intv, i) => (
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
        )}
      </div>
    </section>
  );
};
