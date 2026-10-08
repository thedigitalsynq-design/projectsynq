import React, { useState, useMemo, useEffect } from 'react';
import { ALL_INTER_NODE_CONNECTIONS, InterNodeConnection } from '../data/connections';
import { ENTERTAINMENT_NODES } from '../data/ecosystem';
import {
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Link2,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface NodeCoordinate {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  angle: number;
}

interface OmniStakeholderConnectorProps {
  initialPrimaryNode?: string;
  initialSecondaryNode?: string;
  onStartSynq?: () => void;
  className?: string;
}

export const OmniStakeholderConnector: React.FC<OmniStakeholderConnectorProps> = ({
  initialPrimaryNode = 'talent',
  initialSecondaryNode = 'production',
  onStartSynq,
  className = ''
}) => {
  const [nodeA, setNodeA] = useState<string>(initialPrimaryNode);
  const [nodeB, setNodeB] = useState<string>(initialSecondaryNode);
  const [connectAll, setConnectAll] = useState<boolean>(true);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [pulseTick, setPulseTick] = useState<number>(0);

  // Auto-pulse ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Compute circular coordinates for all 17 nodes in a harmonious orbital layout
  const nodeCoordinates: NodeCoordinate[] = useMemo(() => {
    const total = ENTERTAINMENT_NODES.length; // 17
    const radius = 41; // % from center
    const centerX = 50;
    const centerY = 50;

    return ENTERTAINMENT_NODES.map((node, i) => {
      const angle = (i / total) * 2 * Math.PI - Math.PI / 2; // start from top
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return {
        id: node.id,
        name: node.name,
        category: node.category,
        x,
        y,
        angle
      };
    });
  }, []);

  // Active Bilateral Connection between nodeA and nodeB
  const activeBilateral = useMemo(() => {
    return ALL_INTER_NODE_CONNECTIONS.find(
      c => (c.from === nodeA && c.to === nodeB) || (c.from === nodeB && c.to === nodeA)
    ) || null;
  }, [nodeA, nodeB]);

  // All connections involving Node A
  const connectionsForNodeA = useMemo(() => {
    return ALL_INTER_NODE_CONNECTIONS.filter(c => c.from === nodeA || c.to === nodeA);
  }, [nodeA]);

  const handleNodeClick = (nodeId: string) => {
    if (nodeA === nodeId) return;
    if (nodeB === nodeId) {
      // Toggle or keep
      return;
    }
    // Set as node B if clicking a new counterparty, or swap
    setNodeB(nodeId);
  };

  const handleSetPrimary = (nodeId: string) => {
    setNodeA(nodeId);
    // Find first connected node to set as B
    const conn = ALL_INTER_NODE_CONNECTIONS.find(c => c.from === nodeId || c.to === nodeId);
    if (conn) {
      setNodeB(conn.from === nodeId ? conn.to : conn.from);
    }
  };

  const nodeAData = ENTERTAINMENT_NODES.find(n => n.id === nodeA) || ENTERTAINMENT_NODES[0];
  const nodeBData = ENTERTAINMENT_NODES.find(n => n.id === nodeB) || ENTERTAINMENT_NODES[1];

  return (
    <div className={`relative rounded-3xl border border-surface-border bg-background-card/95 shadow-2xl overflow-hidden backdrop-blur-2xl ${className}`}>
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 synq-grid-bg opacity-30 pointer-events-none" />

      {/* Control Header & Status HUD */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 p-5 md:px-8 md:py-5 border-b border-surface-border bg-background-deep/80 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-lime animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold">
              Omni-Stakeholder Mesh Engine
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-100 text-synq-dim border border-white/5">
              17 NODES • 42 BRIDGES ACTIVE
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            All Stakeholders Connected in Sync
          </h3>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setConnectAll(!connectAll)}
            className={`px-3.5 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
              connectAll
                ? 'bg-accent-cyan text-background-deep font-bold border-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'bg-surface-100 text-synq-muted border-white/10 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{connectAll ? 'Full Mesh Illuminated (42 Bridges)' : 'Illuminate All Bridges'}</span>
          </button>

          <div className="flex items-center gap-1 bg-surface-200/80 p-1 rounded-xl border border-white/5">
            {['All', 'Creation', 'Financing', 'Distribution', 'Infrastructure'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${
                  filterCategory === cat
                    ? 'bg-surface-100 text-white font-semibold'
                    : 'text-synq-dim hover:text-synq-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Workspace: Visualizer + Live Inspection Panel */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 md:p-8 items-center">
        {/* Left Column (7 cols): Full 17-Node Circular SVG Constellation Canvas */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] md:min-h-[580px] w-full">
          {/* Circular Orbit Rings */}
          <div className="absolute w-[82%] h-[82%] rounded-full border border-white/[0.04] pointer-events-none animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[56%] h-[56%] rounded-full border border-accent-cyan/[0.06] pointer-events-none" />
          <div className="absolute w-[28%] h-[28%] rounded-full border border-white/[0.03] pointer-events-none" />

          {/* Center Hub Indicator */}
          <div className="absolute z-10 w-20 h-20 rounded-full bg-background-deep/90 border border-accent-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.2)] flex flex-col items-center justify-center text-center p-2 backdrop-blur-xl">
            <span className="text-[9px] font-mono text-synq-dim uppercase tracking-wider leading-none">
              SYNQ HUB
            </span>
            <span className="text-xs font-bold text-accent-cyan mt-1 leading-none">
              CORE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime mt-1 animate-pulse" />
          </div>

          {/* SVG Canvas for all Inter-Node Arcs & Flow Particles */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              <linearGradient id="omniActiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#CCFF00" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.9" />
              </linearGradient>
              <filter id="omniGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Render ALL 42 Inter-Node Bridges */}
            {ALL_INTER_NODE_CONNECTIONS.map((conn, idx) => {
              const node1 = nodeCoordinates.find(n => n.id === conn.from);
              const node2 = nodeCoordinates.find(n => n.id === conn.to);
              if (!node1 || !node2) return null;

              const isSelectedBilateral =
                (conn.from === nodeA && conn.to === nodeB) ||
                (conn.from === nodeB && conn.to === nodeA);

              const isRelatedToPrimary = conn.from === nodeA || conn.to === nodeA;
              const isRelatedToSecondary = conn.from === nodeB || conn.to === nodeB;

              // Quadratic curve pulled slightly toward center (50, 50)
              const midX = (node1.x + node2.x) / 2;
              const midY = (node1.y + node2.y) / 2;
              const pull = 0.35; // pull toward center
              const ctrlX = midX * (1 - pull) + 50 * pull;
              const ctrlY = midY * (1 - pull) + 50 * pull;
              const pathD = `M ${node1.x} ${node1.y} Q ${ctrlX} ${ctrlY} ${node2.x} ${node2.y}`;

              if (isSelectedBilateral) {
                // Highlighted Bilateral Active Connection
                return (
                  <g key={`bilateral-${conn.id}`}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke="url(#omniActiveGrad)"
                      strokeWidth="1.6"
                      filter="url(#omniGlow)"
                      opacity="1"
                    />
                    {/* Fast moving energetic flow particle */}
                    <circle r="1.4" fill="#CCFF00">
                      <animateMotion
                        path={pathD}
                        dur="2.5s"
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                  </g>
                );
              }

              if (isRelatedToPrimary || isRelatedToSecondary) {
                // Primary node active connection
                return (
                  <g key={`related-${conn.id}`}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#00F0FF"
                      strokeWidth="0.9"
                      opacity="0.8"
                    />
                    <circle r="0.8" fill="#00F0FF" opacity="0.9">
                      <animateMotion
                        path={pathD}
                        dur={`${3.5 + (idx % 2)}s`}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                  </g>
                );
              }

              if (connectAll) {
                // Background mesh connection
                return (
                  <g key={`all-${conn.id}`}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="0.3"
                      opacity="0.5"
                    />
                    {idx % 3 === 0 && (
                      <circle r="0.4" fill="#00F0FF" opacity="0.3">
                        <animateMotion
                          path={pathD}
                          dur={`${6 + (idx % 4)}s`}
                          repeatCount="indefinite"
                          keyPoints="0;1"
                          keyTimes="0;1"
                        />
                      </circle>
                    )}
                  </g>
                );
              }

              return null;
            })}
          </svg>

          {/* Render All 17 Nodes on the Perimeter */}
          {nodeCoordinates.map((node) => {
            const isNodeA = node.id === nodeA;
            const isNodeB = node.id === nodeB;
            const isConnectedToA = connectionsForNodeA.some(
              c => c.from === node.id || c.to === node.id
            );
            const matchesFilter = filterCategory === 'All' || node.category === filterCategory;

            return (
              <div
                key={node.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 group`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  opacity: matchesFilter ? 1 : 0.35
                }}
                onClick={() => {
                  if (isNodeA) return;
                  if (isNodeB) {
                    // swap or cycle
                    setNodeA(node.id);
                  } else {
                    handleNodeClick(node.id);
                  }
                }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Outer circle button */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      isNodeA
                        ? 'bg-accent-cyan text-background-deep font-bold border-2 border-white shadow-[0_0_25px_rgba(0,240,255,0.7)] scale-125 ring-4 ring-accent-cyan/30'
                        : isNodeB
                        ? 'bg-accent-lime text-background-deep font-bold border-2 border-white shadow-[0_0_20px_rgba(204,255,0,0.6)] scale-115'
                        : isConnectedToA
                        ? 'bg-surface-100 border border-accent-cyan/60 group-hover:scale-110 group-hover:border-accent-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                        : 'bg-surface-200/90 border border-white/10 group-hover:border-white/30'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold">
                      {isNodeA ? 'A' : isNodeB ? 'B' : ''}
                    </span>
                  </div>

                  {/* Node Name Label */}
                  <div className="absolute top-full mt-1 flex flex-col items-center whitespace-nowrap pointer-events-none">
                    <span
                      className={`text-[10px] sm:text-[11px] font-mono font-medium px-1.5 py-0.5 rounded transition-all ${
                        isNodeA
                          ? 'bg-accent-cyan text-background-deep font-bold shadow'
                          : isNodeB
                          ? 'bg-accent-lime text-background-deep font-bold shadow'
                          : isConnectedToA
                          ? 'bg-background-deep/90 text-accent-cyan border border-accent-cyan/30'
                          : 'bg-background-deep/80 text-synq-muted border border-white/5'
                      }`}
                    >
                      {node.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column (5 cols): Bilateral Connection Live Inspector */}
        <div className="lg:col-span-5 bg-surface-100/60 rounded-2xl p-6 md:p-7 border border-white/10 space-y-5 backdrop-blur-xl">
          {/* Pair Selectors */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-synq-dim">
                Active Bilateral Corridor
              </span>
              <span className="text-xs font-mono text-accent-lime font-semibold">
                ● LIVE SYNCHRONIZATION
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Node A Selector */}
              <div className="p-3 rounded-xl bg-surface-200/80 border border-accent-cyan/40">
                <span className="text-[10px] font-mono text-accent-cyan uppercase font-bold block mb-1">
                  Primary Node (A)
                </span>
                <select
                  value={nodeA}
                  onChange={(e) => handleSetPrimary(e.target.value)}
                  className="w-full bg-background-deep px-2 py-1.5 rounded-lg text-xs font-mono text-white border border-white/10 focus:outline-none focus:border-accent-cyan"
                >
                  {ENTERTAINMENT_NODES.map(n => (
                    <option key={n.id} value={n.id}>{n.name}</option>
                  ))}
                </select>
                <div className="text-[10px] font-mono text-synq-dim mt-1.5 truncate">
                  Category: {nodeAData.category}
                </div>
              </div>

              {/* Node B Selector */}
              <div className="p-3 rounded-xl bg-surface-200/80 border border-accent-lime/40">
                <span className="text-[10px] font-mono text-accent-lime uppercase font-bold block mb-1">
                  Target Node (B)
                </span>
                <select
                  value={nodeB}
                  onChange={(e) => setNodeB(e.target.value)}
                  className="w-full bg-background-deep px-2 py-1.5 rounded-lg text-xs font-mono text-white border border-white/10 focus:outline-none focus:border-accent-lime"
                >
                  {ENTERTAINMENT_NODES.filter(n => n.id !== nodeA).map(n => (
                    <option key={n.id} value={n.id}>{n.name}</option>
                  ))}
                </select>
                <div className="text-[10px] font-mono text-synq-dim mt-1.5 truncate">
                  Category: {nodeBData.category}
                </div>
              </div>
            </div>
          </div>

          {/* Connection Protocol Details */}
          {activeBilateral ? (
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activeBilateral.bridgeName}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200 text-accent-cyan border border-accent-cyan/20">
                    {activeBilateral.category}
                  </span>
                </div>
              </div>

              {/* Friction & Gap */}
              <div className="p-3.5 rounded-xl bg-rose-950/25 border border-rose-500/25 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Friction Between Nodes
                </span>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  {activeBilateral.friction}
                </p>
              </div>

              {/* ProjectSynq Bridge */}
              <div className="p-3.5 rounded-xl bg-sky-950/25 border border-accent-cyan/35 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  The Synq Bridge Protocol
                </span>
                <p className="text-xs text-synq-text leading-relaxed">
                  {activeBilateral.synqBridge}
                </p>
              </div>

              {/* Flow Vector */}
              <div className="p-3 rounded-xl bg-surface-200/70 border border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-synq-dim block mb-1">
                  Orchestrated Flow Vector:
                </span>
                <div className="text-[11px] font-mono text-white">
                  {activeBilateral.flowVector}
                </div>
              </div>

              {/* Outcome */}
              <div className="p-3 rounded-xl bg-accent-lime/[0.08] border border-accent-lime/30 text-xs font-mono text-accent-lime flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{activeBilateral.outcome}</span>
              </div>
            </div>
          ) : (
            /* Multi-hop / Adjacent route */
            <div className="p-5 rounded-xl bg-surface-200/60 border border-white/5 space-y-3 text-center">
              <span className="text-xs font-mono text-accent-cyan uppercase font-bold block">
                Multilateral Ecosystem Route
              </span>
              <p className="text-xs text-synq-muted leading-relaxed">
                Direct bilateral bridge between <strong>{nodeAData.name}</strong> and <strong>{nodeBData.name}</strong> routes through intermediate orchestration layers (e.g. Studios, Rights, or Distribution).
              </p>
              <div className="text-xs font-mono text-synq-dim">
                Select an adjacent counterparty or use "Illuminate All Bridges" to inspect network topology.
              </div>
            </div>
          )}

          {/* Quick Action Button */}
          <div className="pt-2">
            <button
              onClick={onStartSynq}
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs font-mono text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all shadow-lg shadow-accent-cyan/20 flex items-center justify-center gap-2"
            >
              <span>Engineer This Inter-Node Bridge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Connectivity Matrix Status Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-3 border-t border-surface-border bg-background-deep/90 text-[11px] font-mono text-synq-dim">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-lime" />
          <span>Ecosystem Coherence: <strong className="text-white">100% Deterministic Flow</strong></span>
        </div>
        <div className="flex items-center gap-4">
          <span>Active Connections: <strong className="text-accent-cyan">42 Bilateral Rails</strong></span>
          <span>Impedance Neutralized: <strong className="text-accent-lime">Zero Gridlock</strong></span>
        </div>
      </div>
    </div>
  );
};
