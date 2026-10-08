import React, { useState, useMemo } from 'react';
import {
  ECOSYSTEM_LAYERS,
  TALENT_PROBLEMS,
  WORKFLOW_TRANSITIONS,
  STRATEGIC_HEAT_MATRIX,
  ULTIMATE_DATABASE_ROWS,
  TOP_15_OPPORTUNITY_MAP,
  NINE_WHITE_SPACES,
  MASTER_PROBLEM_TAXONOMY_25,
  SEVEN_BIG_PICTURE_LAYERS,
} from '../data/matrixData';
import { OmniStakeholderConnector } from '../components/OmniStakeholderConnector';
import {
  Search,
  Filter,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  AlertTriangle,
  Flame,
  CheckCircle2,
  Database,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Compass,
  ArrowLeft
} from 'lucide-react';

interface StakeholderMatrixPageProps {
  onBackToHome: () => void;
  onStartSynq: () => void;
}

export const StakeholderMatrixPage: React.FC<StakeholderMatrixPageProps> = ({
  onBackToHome,
  onStartSynq,
}) => {
  const [activeTab, setActiveTab] = useState<'mesh' | 'heatmap' | 'database' | 'layers' | 'opportunities' | 'workflow' | 'talent'>('mesh');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHeatStakeholder, setSelectedHeatStakeholder] = useState<string | null>(null);
  const [databaseFilter, setDatabaseFilter] = useState<string>('All');

  // Filtered rows for the Ultimate Database
  const filteredDatabase = useMemo(() => {
    return ULTIMATE_DATABASE_ROWS.filter(row => {
      const matchesSearch =
        row.stakeholder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.jobToBeDone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.technology.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.revenueModel.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = databaseFilter === 'All' || row.stakeholder === databaseFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, databaseFilter]);

  const uniqueStakeholders = ['All', ...Array.from(new Set(ULTIMATE_DATABASE_ROWS.map(r => r.stakeholder)))];

  return (
    <div className="relative min-h-screen bg-background text-synq-text selection:bg-accent-cyan/20 selection:text-accent-cyan overflow-x-hidden font-sans pb-24">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-50 py-4 bg-background-deep/90 backdrop-blur-xl border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-200 border border-white/5 text-xs font-mono text-synq-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white flex items-baseline">
                ProjectSyn<span className="text-accent-cyan">q</span>
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200 text-accent-cyan border border-accent-cyan/20">
                ECOSYSTEM MATRIX
              </span>
            </div>
          </div>

          <button
            onClick={onStartSynq}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all shadow-md active:scale-95"
          >
            <span>Start a Synq</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-surface-border bg-gradient-to-b from-surface-100/30 to-background overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[500px] h-[350px] bg-accent-cyan/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-synq-dim uppercase tracking-wider mb-4 w-fit">
            Master Diagnostic Atlas
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Indian Entertainment Ecosystem:{' '}
            <span className="block text-gradient-cyan mt-1">
              Stakeholder × Problem Category Matrix
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed max-w-4xl">
            A granular systems analysis treating entertainment across its entire value chain: <strong>film, OTT, television, music, creator economy, live entertainment, theatre, gaming, animation/VFX, sports entertainment, and advertising</strong>.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5">
              <span className="text-synq-dim block">Ecosystem Architecture</span>
              <span className="text-base font-bold text-white mt-0.5 block">12 Interconnected Layers</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5">
              <span className="text-synq-dim block">Taxonomy Coverage</span>
              <span className="text-base font-bold text-accent-cyan mt-0.5 block">25 Master Problem Sets</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5">
              <span className="text-synq-dim block">Strategic Heat Matrix</span>
              <span className="text-base font-bold text-amber-400 mt-0.5 block">17 Core Stakeholders</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5">
              <span className="text-synq-dim block">B2B Software & Rail Moats</span>
              <span className="text-base font-bold text-accent-lime mt-0.5 block">15 Ranked Opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main View Navigation Tabs */}
      <section className="sticky top-[65px] z-40 bg-background-deep/95 backdrop-blur-xl border-b border-surface-border py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'mesh', label: 'All Stakeholders Connected (Omni-Mesh)' },
              { id: 'heatmap', label: 'Stakeholder Heat Matrix' },
              { id: 'database', label: 'Ecosystem Problem Database' },
              { id: 'layers', label: '12-Layer Master Map' },
              { id: 'workflow', label: '14-Step Pain Chain' },
              { id: 'opportunities', label: 'Top 15 Opportunities & White Spaces' },
              { id: 'talent', label: 'Talent & Music Gaps' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                  activeTab === tab.id
                    ? 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/40 font-bold shadow-sm'
                    : 'bg-surface-100/40 text-synq-muted border-white/5 hover:text-white hover:bg-surface-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* TAB 0: ALL STAKEHOLDERS CONNECTED (OMNI-MESH) */}
        {activeTab === 'mesh' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                Full-Mesh Inter-Node Synchronization
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Every Single Stakeholder Inter-Connected
              </h2>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-1">
                Select any two nodes across Creation, Financing, Distribution, Governance, and Technology to inspect the exact structural friction and the bilateral ProjectSynq bridge that turns deadlock into flow.
              </p>
            </div>

            <OmniStakeholderConnector onStartSynq={onStartSynq} />
          </div>
        )}

        {/* TAB 1: STAKEHOLDER HEAT MATRIX */}
        {activeTab === 'heatmap' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                    Strategic Stakeholder × Problem Matrix
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Systemic Friction Across 17 Stakeholders
                  </h2>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-synq-muted">🔴 Critical Pain</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="text-synq-muted">🟠 Moderate Friction</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
                Click any stakeholder row to inspect their deepest structural bottlenecks and where ProjectSynq engineers the bilateral remedy.
              </p>
            </div>

            {/* Responsive Heat Matrix Table */}
            <div className="rounded-2xl border border-surface-border bg-background-card overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-surface-border bg-surface-100/80 font-mono text-synq-dim">
                      <th className="p-4 font-semibold">Stakeholder</th>
                      <th className="p-4 font-semibold text-center">Discovery</th>
                      <th className="p-4 font-semibold text-center">Money</th>
                      <th className="p-4 font-semibold text-center">Rights</th>
                      <th className="p-4 font-semibold text-center">Data</th>
                      <th className="p-4 font-semibold text-center">Workflow</th>
                      <th className="p-4 font-semibold text-center">Marketing</th>
                      <th className="p-4 font-semibold text-center">Trust</th>
                      <th className="p-4 font-semibold text-center">Monetisation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {STRATEGIC_HEAT_MATRIX.map((row) => {
                      const isSelected = selectedHeatStakeholder === row.stakeholder;

                      const renderPill = (val: string) => {
                        if (val === 'very_high') {
                          return (
                            <span className="px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-500/40 font-mono font-bold text-[10px]">
                              🔴🔴 CRITICAL
                            </span>
                          );
                        }
                        if (val === 'high') {
                          return (
                            <span className="px-2 py-0.5 rounded bg-rose-900/40 text-rose-400 border border-rose-500/20 font-mono text-[10px]">
                              🔴 HIGH
                            </span>
                          );
                        }
                        if (val === 'medium') {
                          return (
                            <span className="px-2 py-0.5 rounded bg-amber-950/40 text-amber-400 border border-amber-500/20 font-mono text-[10px]">
                              🟠 MED
                            </span>
                          );
                        }
                        return <span className="text-synq-dim font-mono text-[11px]">—</span>;
                      };

                      return (
                        <tr
                          key={row.stakeholder}
                          onClick={() => setSelectedHeatStakeholder(isSelected ? null : row.stakeholder)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-accent-cyan/[0.08]'
                              : 'hover:bg-surface-100/50'
                          }`}
                        >
                          <td className="p-4 font-semibold text-white flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-accent-cyan' : 'bg-transparent'}`} />
                            <span>{row.stakeholder}</span>
                          </td>
                          <td className="p-4 text-center">{renderPill(row.discovery)}</td>
                          <td className="p-4 text-center">{renderPill(row.money)}</td>
                          <td className="p-4 text-center">{renderPill(row.rights)}</td>
                          <td className="p-4 text-center">{renderPill(row.data)}</td>
                          <td className="p-4 text-center">{renderPill(row.workflow)}</td>
                          <td className="p-4 text-center">{renderPill(row.marketing)}</td>
                          <td className="p-4 text-center">{renderPill(row.trust)}</td>
                          <td className="p-4 text-center">{renderPill(row.monetisation)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Strategic Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-surface-100/40 border border-white/5 space-y-2">
                <span className="text-xs font-mono uppercase text-accent-cyan tracking-wider">
                  Highest Density of Pain
                </span>
                <h3 className="text-lg font-bold text-white">Producers & Creators</h3>
                <p className="text-xs text-synq-muted leading-relaxed">
                  Face compound friction across virtually all 8 categories simultaneously — from discovery and financing to rights ambiguity, uncollected royalties, and broken handoffs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-100/40 border border-white/5 space-y-2">
                <span className="text-xs font-mono uppercase text-rose-400 tracking-wider">
                  Most Severe Monetization Drag
                </span>
                <h3 className="text-lg font-bold text-white">Music & Rights Layers</h3>
                <p className="text-xs text-synq-muted leading-relaxed">
                  Record labels, publishers, and composers lose up to 40% of collectible revenue due to missing audio metadata, opaque YouTube claiming, and multi-year collection lags.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-100/40 border border-white/5 space-y-2">
                <span className="text-xs font-mono uppercase text-accent-lime tracking-wider">
                  Highest Velocity Unlock
                </span>
                <h3 className="text-lg font-bold text-white">Inter-Node Orchestration</h3>
                <p className="text-xs text-synq-muted leading-relaxed">
                  Standardized escrow, verifiable credits, and algorithmic rights windowing eliminate defensive contracting, reducing transaction latency by 68%.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ULTIMATE DATABASE EXPLORER */}
        {activeTab === 'database' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                The 100+ Problem Ecosystem Database
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Ecosystem Jobs-to-be-Done & White Space Engine
              </h2>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-1">
                Forensic breakdown mapping each sub-stakeholder, their core operational friction, current workarounds, spend appetite, and high-margin whitespace.
              </p>
            </div>

            {/* Filter and Search Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-surface-100/50 border border-white/5">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-synq-dim absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search problem, job-to-be-done, tech, revenue model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-background-deep border border-white/10 text-xs text-white placeholder-synq-dim focus:outline-none focus:border-accent-cyan"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-synq-dim" />
                <span className="text-xs font-mono text-synq-dim">Filter Stakeholder:</span>
                <select
                  value={databaseFilter}
                  onChange={(e) => setDatabaseFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-background-deep border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-accent-cyan cursor-pointer"
                >
                  {uniqueStakeholders.map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Database Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredDatabase.length === 0 ? (
                <div className="col-span-full p-12 text-center rounded-2xl bg-surface-100/30 border border-white/5 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-surface-200 border border-white/10 flex items-center justify-center mx-auto text-synq-muted">
                    <Search className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white">No Friction Vectors Found</h3>
                  <p className="text-xs text-synq-muted max-w-md mx-auto">
                    No stakeholder problem entries match your query "{searchQuery}" in the selected filter. Try clearing your search or selecting "All" stakeholders.
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setDatabaseFilter('All'); }}
                    className="px-4 py-2 rounded-lg bg-surface-200 hover:bg-surface-300 text-xs font-mono text-white border border-white/10 transition-colors"
                  >
                    Reset Search & Filters
                  </button>
                </div>
              ) : (
                filteredDatabase.map((row) => (
                  <div
                    key={row.id}
                    className="p-6 rounded-2xl bg-surface-100/40 border border-white/5 hover:border-accent-cyan/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-surface-200 text-accent-cyan font-semibold">
                          {row.stakeholder}
                        </span>
                        <span className="font-mono text-xs text-synq-dim">
                          Spend: <strong className="text-white">{row.spendLevel}</strong>
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-1">
                        {row.subStakeholder}
                      </h3>

                      <div className="space-y-3 mt-4 text-xs">
                        <div>
                          <span className="font-mono text-[10px] text-synq-dim uppercase tracking-wider block">Job To Be Done</span>
                          <p className="text-synq-text leading-snug mt-0.5">{row.jobToBeDone}</p>
                        </div>

                        <div>
                          <span className="font-mono text-[10px] text-rose-400 uppercase tracking-wider block">Core Problem & Friction</span>
                          <p className="text-rose-200/90 leading-snug mt-0.5">{row.problem}</p>
                        </div>

                        <div className="pt-2 border-t border-white/5">
                          <span className="font-mono text-[10px] text-synq-dim uppercase tracking-wider block">Current Workaround</span>
                          <p className="text-synq-muted italic">{row.currentSolution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
                      <div className="flex justify-between items-center text-[11px] font-mono">
                        <span className="text-synq-dim">Revenue Model:</span>
                        <span className="text-accent-cyan">{row.revenueModel}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono">
                        <span className="text-synq-dim">Technology Vector:</span>
                        <span className="text-white">{row.technology}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono">
                        <span className="text-synq-dim">Whitespace Opportunity:</span>
                        <span className="text-accent-lime font-bold">{row.whitespace}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 3: 12-LAYER MASTER MAP */}
        {activeTab === 'layers' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                The Master Topology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                12 Interconnected Layers of Indian Entertainment
              </h2>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-1">
                Ecosystem flows cascade from Audience demand down through distribution, content creation, production, talent, legal rights, and government policy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ECOSYSTEM_LAYERS.map((layer) => (
                <div
                  key={layer.id}
                  className="p-6 rounded-2xl bg-surface-100/40 border border-white/5 hover:border-accent-cyan/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-lg bg-surface-200 border border-white/5 font-mono text-xs font-bold text-accent-cyan flex items-center justify-center">
                        {layer.number < 10 ? `0${layer.number}` : layer.number}
                      </span>
                      <span className="text-[10px] font-mono text-synq-dim uppercase tracking-wider">Layer Architecture</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {layer.name}
                    </h3>
                    <p className="text-xs text-synq-muted leading-relaxed mb-4">
                      {layer.shortDesc}
                    </p>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-[10px] font-mono text-synq-dim uppercase tracking-wider block mb-1">
                          Key Stakeholders:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {layer.stakeholders.map((s, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-surface-200 text-[11px] text-synq-text font-mono">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider block mb-1">
                          Active Interfaces:
                        </span>
                        {layer.interfaces.map((intf, idx) => (
                          <div key={idx} className="text-[11px] text-synq-muted font-mono flex items-center gap-1">
                            <span className="text-accent-cyan">›</span>
                            <span>{intf}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-accent-lime">
                    {layer.flowVector}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: 14-STEP WORKFLOW PAIN CHAIN */}
        {activeTab === 'workflow' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                The "Pain Chain" — Where Money Gets Lost
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                The 14 Critical Production Transitions
              </h2>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-1">
                A series or film follows an invariant path: <em>Idea → Script → Finance → Casting → Crew → Location → Schedule → Shoot → Post → Marketing → Distribution → Revenue → Rights</em>. Every arrow is where energy stalls and software/orchestration opportunities arise.
              </p>
            </div>

            <div className="space-y-3">
              {WORKFLOW_TRANSITIONS.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-surface-100/40 border border-white/5 hover:border-accent-cyan/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                    <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-surface-200 text-synq-muted">
                      STEP {step.step}
                    </span>
                    <div className="font-mono text-sm font-semibold text-white">
                      {step.from} <span className="text-accent-cyan font-normal">→</span> {step.to}
                    </div>
                  </div>

                  <div className="flex-1 text-xs text-rose-300 bg-rose-950/20 px-3.5 py-2 rounded-xl border border-rose-500/20">
                    <span className="font-mono font-bold text-rose-400 mr-1.5 uppercase text-[10px]">Existing Friction:</span>
                    {step.friction}
                  </div>

                  <div className="md:w-80 flex-shrink-0 text-xs text-synq-text bg-sky-950/20 px-3.5 py-2 rounded-xl border border-accent-cyan/30">
                    <span className="font-mono font-bold text-accent-cyan mr-1.5 uppercase text-[10px]">Synq Bridge:</span>
                    {step.synqBridge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: TOP 15 OPPORTUNITIES & WHITE SPACES */}
        {activeTab === 'opportunities' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Top 15 Ranked Opportunities */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                Commercial Prioritization
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Highest-Value Opportunity Map (Ranked 1 to 15)
              </h2>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-1">
                Ranked by pain severity + industry fragmentation + capital volume involved + recurring frequency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {TOP_15_OPPORTUNITY_MAP.map((op) => (
                  <div
                    key={op.rank}
                    className="p-6 rounded-2xl bg-surface-100/40 border border-white/5 hover:border-accent-cyan/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-lg bg-accent-cyan/15 text-accent-cyan font-mono text-xs font-bold flex items-center justify-center border border-accent-cyan/30">
                          #{op.rank}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200 text-synq-dim">
                          {op.tier}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1.5">
                        {op.title}
                      </h3>
                      <p className="text-xs text-synq-muted leading-relaxed mb-4">
                        {op.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-accent-lime">
                      Why: {op.why}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The 9 White Spaces */}
            <div className="pt-8 border-t border-surface-border">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                Bilateral Intersections
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                The 9 Most Strategic White Spaces
              </h2>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-1">
                Where two distinct layers cross and neither party currently has trust, liquidity, or verifiable data.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {NINE_WHITE_SPACES.map((ws, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-surface-100/30 border border-white/5 hover:border-accent-lime/40 transition-all space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent-lime px-2 py-0.5 rounded bg-accent-lime/10 border border-accent-lime/30">
                        {ws.intersection}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5">
                      <span className="text-[10px] font-mono text-synq-dim uppercase tracking-wider block mb-1">
                        Core Existential Question
                      </span>
                      <p className="text-xs text-synq-text italic">
                        "{ws.question}"
                      </p>
                    </div>

                    <div className="text-xs text-synq-muted">
                      <strong className="text-white block font-mono text-[11px] mb-0.5">The Breakthrough Rail:</strong>
                      {ws.breakthrough}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: TALENT & MUSIC DEEP DIVE */}
        {activeTab === 'talent' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* 18 Talent Problems */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                Human Node Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                18 Structural Talent Problems & Solutions
              </h2>
              <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-1">
                Performers, creative directors, screenwriters, and technical crew are plagued by asymmetric information and delayed payments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {TALENT_PROBLEMS.map((tp) => (
                  <div
                    key={tp.id}
                    className="p-5 rounded-2xl bg-surface-100/40 border border-white/5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm">{tp.problem}</h4>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        tp.severity === 'high' ? 'bg-rose-950 text-rose-400 border border-rose-500/30' : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                      }`}>
                        {tp.severity === 'high' ? '🔴 HIGH' : '🟠 MED'}
                      </span>
                    </div>

                    <p className="text-xs text-synq-muted leading-relaxed">
                      {tp.description}
                    </p>

                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-synq-dim uppercase tracking-wider">Potential Solutions:</span>
                      {tp.solutions.map((sol, i) => (
                        <div key={i} className="text-[11px] font-mono text-accent-cyan flex items-center gap-1.5">
                          <span>›</span>
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Master Problem Taxonomy (25 Categories) */}
            <div className="pt-8 border-t border-surface-border">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block">
                Universal Classification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                25 Master Problem Categories
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mt-6 font-mono text-xs">
                {MASTER_PROBLEM_TAXONOMY_25.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-surface-100/50 border border-white/5 text-synq-muted hover:text-white hover:border-accent-cyan/30 transition-all">
                    {cat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Bottom CTA Terminal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-surface-border">
        <div className="rounded-3xl border border-accent-cyan/30 bg-gradient-to-r from-surface-100/90 to-background-card p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-accent-lime uppercase tracking-widest font-semibold">
              Ready to Bridge Your Ecosystem Nodes?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Identify the friction. Deploy the bridge.
            </h3>
            <p className="text-xs sm:text-sm text-synq-muted leading-relaxed">
              Whether you are an institutional PE fund underwriting slate financing, an indie producer stuck in talent attachments, or a label managing catalogs, ProjectSynq operates between your counterparties.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={onStartSynq}
              className="px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] active:scale-95"
            >
              Start a Synq
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-surface-200 hover:bg-surface-100 border border-white/10 transition-all"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
