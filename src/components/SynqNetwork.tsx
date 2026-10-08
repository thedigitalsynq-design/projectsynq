import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Zap, RefreshCw, Cpu, Layers } from 'lucide-react';

export type NetworkState = 'fragmented' | 'diagnosing' | 'connecting' | 'synchronized';

interface NodeData {
  id: string;
  name: string;
  x: number;
  y: number;
  category: string;
  load: string;
  status: string;
}

interface SynqNetworkProps {
  initialState?: NetworkState;
  interactive?: boolean;
  compact?: boolean;
  onStateChange?: (state: NetworkState) => void;
  className?: string;
}

export const SynqNetwork: React.FC<SynqNetworkProps> = ({
  initialState = 'fragmented',
  interactive = true,
  compact = false,
  onStateChange,
  className = ''
}) => {
  const [currentState, setCurrentState] = useState<NetworkState>(initialState);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [pulseTick, setPulseTick] = useState(0);

  // Synchronize external state
  useEffect(() => {
    setCurrentState(initialState);
  }, [initialState]);

  // Periodic pulse ticker for animated signal particles
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTick(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleSetState = (newState: NetworkState) => {
    setCurrentState(newState);
    onStateChange?.(newState);
  };

  const nodes: NodeData[] = useMemo(() => [
    { id: 'talent', name: 'Talent', x: 18, y: 28, category: 'Human Node', load: '82%', status: 'Available' },
    { id: 'capital', name: 'Capital', x: 26, y: 72, category: 'Liquidity Node', load: '$120M', status: 'Reserved' },
    { id: 'content', name: 'Content', x: 38, y: 44, category: 'IP Core', load: 'Slate 04', status: 'In Review' },
    { id: 'rights', name: 'Rights', x: 48, y: 18, category: 'Governance', load: 'Clean Chain', status: 'Verified' },
    { id: 'production', name: 'Production', x: 50, y: 78, category: 'Execution', load: 'Day 22/60', status: 'Active' },
    { id: 'brands', name: 'Brands', x: 64, y: 32, category: 'Commercial', load: '3 Sponsors', status: 'Aligned' },
    { id: 'technology', name: 'Technology', x: 74, y: 68, category: 'Infrastructure', load: 'VFX / Ingest', status: 'Synchronized' },
    { id: 'platforms', name: 'Platforms', x: 82, y: 22, category: 'OTT / VOD', load: 'Global SVOD', status: 'Direct' },
    { id: 'distribution', name: 'Distribution', x: 86, y: 54, category: 'Theatrical', load: '2,400 Screens', status: 'Booked' },
    { id: 'audience', name: 'Audience', x: 78, y: 88, category: 'Market', load: '14M Fans', status: 'Engaged' }
  ], []);

  // Connections definition
  const connections = useMemo(() => [
    { from: 'talent', to: 'content', bridge: 'Attachment Protocol' },
    { from: 'capital', to: 'content', bridge: 'Escrow Liquidity Rail' },
    { from: 'content', to: 'rights', bridge: 'Chain-of-Title Verifier' },
    { from: 'content', to: 'production', bridge: 'Milestone Handoff' },
    { from: 'rights', to: 'platforms', bridge: 'Modular License Engine' },
    { from: 'brands', to: 'content', bridge: 'Creative Guardrails' },
    { from: 'production', to: 'technology', bridge: 'Automated QC Protocol' },
    { from: 'platforms', to: 'distribution', bridge: 'Dynamic Windowing' },
    { from: 'distribution', to: 'audience', bridge: 'Telemetry Feedback' },
    { from: 'technology', to: 'audience', bridge: 'Low-latency Delivery' },
    { from: 'talent', to: 'brands', bridge: 'Endorsement SLA' },
    { from: 'capital', to: 'production', bridge: 'Drawdown Consensus' },
  ], []);

  // State metrics calculation
  const stateMetrics = useMemo(() => {
    switch (currentState) {
      case 'fragmented':
        return {
          label: 'State: Fragmented',
          subtitle: 'Independent nodes operating in isolation with high friction & zero shared intelligence.',
          flowRate: '12%',
          frictionIndex: 'HIGH (84%)',
          trustLevel: 'Low / Disjointed',
          color: 'text-rose-400',
          borderColor: 'border-rose-500/30'
        };
      case 'diagnosing':
        return {
          label: 'State: Diagnosing Gaps',
          subtitle: 'Scanning inter-node interfaces, uncovering hidden trust barriers and information asymmetries.',
          flowRate: '38%',
          frictionIndex: 'ISOLATING (58%)',
          trustLevel: 'Audit in Progress',
          color: 'text-amber-400',
          borderColor: 'border-amber-500/30'
        };
      case 'connecting':
        return {
          label: 'State: Connecting Bridges',
          subtitle: 'Deploying bilateral protocols, conditional escrow structures, and clear handoff standards.',
          flowRate: '74%',
          frictionIndex: 'NEUTRALIZING (18%)',
          trustLevel: 'Structured Escrow',
          color: 'text-sky-400',
          borderColor: 'border-sky-500/30'
        };
      case 'synchronized':
        return {
          label: 'State: Synchronized Flow',
          subtitle: 'Harmonic flow enabled. System learning feeds directly into Inter-Node Intelligence™.',
          flowRate: '98%',
          frictionIndex: 'ZERO IMPEDANCE',
          trustLevel: 'Institutional Grade',
          color: 'text-accent-cyan',
          borderColor: 'border-accent-cyan/40'
        };
    }
  }, [currentState]);

  return (
    <div className={`relative w-full rounded-2xl border border-surface-border bg-background-card/90 overflow-hidden backdrop-blur-xl shadow-2xl ${className}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 synq-grid-bg opacity-40 pointer-events-none" />

      {/* Atmospheric Glow depending on state */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: currentState === 'synchronized'
            ? 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 70%)'
            : currentState === 'connecting'
            ? 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.06) 0%, transparent 70%)'
            : currentState === 'diagnosing'
            ? 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.04) 0%, transparent 70%)'
        }}
      />

      {/* Control Header & State Selector */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 p-4 md:px-6 md:py-4 border-b border-surface-border bg-background-deep/60 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-synq-muted">
            SYNQ NETWORK ENGINE v4.2
          </span>
          <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded bg-surface-100 text-synq-dim border border-white/5 font-mono">
            INTER-NODE TOPOLOGY
          </span>
        </div>

        {interactive && (
          <div className="flex items-center gap-1 p-1 bg-surface-200/80 rounded-lg border border-white/5">
            {(['fragmented', 'diagnosing', 'connecting', 'synchronized'] as NetworkState[]).map((state) => {
              const isActive = currentState === state;
              return (
                <button
                  key={state}
                  onClick={() => handleSetState(state)}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-all capitalize ${
                    isActive
                      ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 shadow-sm'
                      : 'text-synq-dim hover:text-synq-muted hover:bg-white/5'
                  }`}
                >
                  {state}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Canvas / SVG Visualizer Area */}
      <div className={`relative w-full ${compact ? 'h-[360px]' : 'h-[440px] md:h-[540px]'} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <linearGradient id="lineGradSync" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="lineGradDiag" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
            </linearGradient>
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render Connections */}
          {connections.map((conn, idx) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;

            const isRelatedToActive = activeNode === conn.from || activeNode === conn.to;
            const midX = (fromNode.x + toNode.x) / 2;
            const midY = (fromNode.y + toNode.y) / 2;
            const curveOffset = (idx % 2 === 0 ? 3 : -3);
            const pathD = `M ${fromNode.x} ${fromNode.y} Q ${midX + curveOffset} ${midY - curveOffset} ${toNode.x} ${toNode.y}`;

            if (currentState === 'fragmented') {
              // Only draw 3 broken / incomplete connections
              if (idx > 2) return null;
              return (
                <path
                  key={`frag-${idx}`}
                  d={pathD}
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="0.4"
                  strokeDasharray="2, 4"
                  opacity={0.35}
                />
              );
            }

            if (currentState === 'diagnosing') {
              // Dashed warning links with pulsing scan points
              return (
                <g key={`diag-${idx}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth={isRelatedToActive ? "0.8" : "0.4"}
                    strokeDasharray="1.5, 2.5"
                    opacity={isRelatedToActive ? 0.9 : 0.45}
                  />
                  {/* Warning friction indicator node halfway */}
                  <circle
                    cx={midX + curveOffset}
                    cy={midY - curveOffset}
                    r="0.8"
                    fill="#EF4444"
                    className="animate-pulse"
                    opacity={0.8}
                  />
                </g>
              );
            }

            if (currentState === 'connecting') {
              // Solidifying cyan bridges
              return (
                <g key={`conn-${idx}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth={isRelatedToActive ? "1.0" : "0.5"}
                    opacity={isRelatedToActive ? 0.95 : 0.6}
                    strokeDasharray={idx % 3 === 0 ? "none" : "3, 1"}
                  />
                </g>
              );
            }

            // SYNCHRONIZED state
            return (
              <g key={`sync-${idx}`}>
                {/* Background glow path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#lineGradSync)"
                  strokeWidth={isRelatedToActive ? "1.2" : "0.6"}
                  opacity={isRelatedToActive ? 1 : 0.7}
                  filter="url(#cyanGlow)"
                />
                
                {/* Moving signal pulse particle along the wire */}
                <circle
                  r={isRelatedToActive ? "0.9" : "0.6"}
                  fill="#CCFF00"
                  opacity={0.9}
                >
                  <animateMotion
                    path={pathD}
                    dur={`${4 + (idx % 3)}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Nodes layer */}
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          const isFrictionAlert = currentState === 'diagnosing' && (node.id === 'capital' || node.id === 'rights' || node.id === 'talent');
          const isDisconnected = currentState === 'fragmented' && (node.id === 'rights' || node.id === 'brands' || node.id === 'technology');

          return (
            <motion.div
              key={node.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              whileHover={{ scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer halo */}
                <div
                  className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-cyan/20 border-accent-cyan shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : currentState === 'synchronized'
                      ? 'bg-surface-100/90 border-accent-cyan/40 group-hover:border-accent-cyan group-hover:bg-accent-cyan/10'
                      : isFrictionAlert
                      ? 'bg-amber-950/40 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse'
                      : isDisconnected
                      ? 'bg-surface-200/50 border-rose-500/30 opacity-60'
                      : 'bg-surface-100/90 border-white/10 group-hover:border-white/30'
                  }`}
                >
                  {/* Center core pip */}
                  <div
                    className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-accent-cyan'
                        : currentState === 'synchronized'
                        ? 'bg-accent-cyan/80 group-hover:bg-accent-cyan'
                        : isFrictionAlert
                        ? 'bg-amber-400'
                        : isDisconnected
                        ? 'bg-rose-500/50'
                        : 'bg-synq-muted'
                    }`}
                  />
                </div>

                {/* Node Tag Label */}
                <div className="absolute top-full mt-1.5 flex flex-col items-center pointer-events-none whitespace-nowrap">
                  <span
                    className={`text-[10px] md:text-xs font-medium tracking-tight px-1.5 py-0.5 rounded transition-all ${
                      isActive
                        ? 'text-accent-cyan bg-background-card border border-accent-cyan/30 shadow'
                        : currentState === 'synchronized'
                        ? 'text-synq-text bg-background-deep/80 border border-white/5'
                        : isFrictionAlert
                        ? 'text-amber-300 bg-amber-950/70 border border-amber-500/30'
                        : isDisconnected
                        ? 'text-rose-400/80 bg-background-deep/60'
                        : 'text-synq-muted bg-background-deep/60'
                    }`}
                  >
                    {node.name}
                  </span>
                  
                  {currentState === 'synchronized' && (
                    <span className="text-[9px] font-mono text-accent-lime opacity-80 mt-0.5">
                      SYNC
                    </span>
                  )}
                  {isFrictionAlert && (
                    <span className="text-[9px] font-mono text-amber-400 opacity-90 mt-0.5">
                      GAP DETECTED
                    </span>
                  )}
                  {isDisconnected && (
                    <span className="text-[9px] font-mono text-rose-400 opacity-70 mt-0.5">
                      ISOLATED
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Selected Node Details Tooltip card */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-30 p-4 rounded-xl bg-surface-100/95 border border-accent-cyan/40 shadow-2xl backdrop-blur-xl"
            >
              {(() => {
                const node = nodes.find(n => n.id === activeNode);
                if (!node) return null;
                const nodeConns = connections.filter(c => c.from === node.id || c.to === node.id);

                return (
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                          <h4 className="font-semibold text-white text-sm">{node.name}</h4>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-200 text-synq-muted">
                            {node.category}
                          </span>
                        </div>
                        <p className="text-xs text-synq-muted mt-1">Status: {node.status} • Active Load: {node.load}</p>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActiveNode(null); }}
                        className="text-xs text-synq-dim hover:text-white px-1"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <div className="text-[11px] font-mono text-synq-dim uppercase tracking-wider">
                        Synq Inter-Node Bridges ({nodeConns.length}):
                      </div>
                      <div className="space-y-1 max-h-24 overflow-y-auto pr-1">
                        {nodeConns.map((c, i) => {
                          const otherId = c.from === node.id ? c.to : c.from;
                          const otherNode = nodes.find(n => n.id === otherId);
                          return (
                            <div key={i} className="text-xs flex items-center justify-between text-synq-muted py-0.5">
                              <span>↔ {otherNode?.name}</span>
                              <span className="text-[10px] text-accent-cyan font-mono">{c.bridge}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Telemetry Footer */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 md:px-6 md:py-3.5 border-t border-surface-border bg-background-deep/90">
        <div>
          <div className="text-[10px] font-mono text-synq-dim uppercase tracking-wider">Architecture State</div>
          <div className={`text-xs md:text-sm font-semibold mt-0.5 ${stateMetrics.color}`}>
            {currentState.toUpperCase()}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-synq-dim uppercase tracking-wider">Flow Throughput</div>
          <div className="text-xs md:text-sm font-semibold font-mono text-white mt-0.5">
            {stateMetrics.flowRate}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-synq-dim uppercase tracking-wider">Friction Level</div>
          <div className="text-xs md:text-sm font-semibold font-mono text-synq-text mt-0.5">
            {stateMetrics.frictionIndex}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-synq-dim uppercase tracking-wider">Counterparty Trust</div>
          <div className="text-xs md:text-sm font-semibold text-accent-cyan mt-0.5">
            {stateMetrics.trustLevel}
          </div>
        </div>
      </div>
    </div>
  );
};
