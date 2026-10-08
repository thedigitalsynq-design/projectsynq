import React, { useState, useMemo } from 'react';
import { ENTERTAINMENT_NODES, EcosystemNode } from '../data/ecosystem';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Users, Search, ArrowRight, ShieldCheck, Filter, UserCheck } from 'lucide-react';

interface Page03StakeholdersProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const Page03_StakeholdersPage: React.FC<Page03StakeholdersProps> = ({ onNavigate, onStartSynq }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedNodeId, setSelectedNodeId] = useState<string>(ENTERTAINMENT_NODES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Creation', 'Financing', 'Distribution', 'Infrastructure', 'Governance'];

  const filteredNodes = useMemo(() => {
    return ENTERTAINMENT_NODES.filter(node => {
      const matchesCategory = selectedCategory === 'All' || node.category === selectedCategory;
      const matchesSearch = node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeNode = ENTERTAINMENT_NODES.find(n => n.id === selectedNodeId) || ENTERTAINMENT_NODES[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Users className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 03 / Stakeholder Landscape</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Stakeholders:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Directory & Dependency Landscape
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Every participant in the ecosystem has distinct incentives, resources, and dependencies. Explore the 17 core nodes below, find your persona, and discover what each node needs, provides, and who they depend on.
          </p>

          {/* "I'm a..." Quick Persona Jump */}
          <div className="mt-8 pt-6 border-t border-sky-500/15 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="text-accent-cyan font-bold flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-accent-cyan" />
              <span>Quick Jump:</span>
            </span>
            {['Studios', 'Creators', 'Financiers', 'Talent', 'Platforms'].map((role) => (
              <button
                key={role}
                onClick={() => {
                  const match = ENTERTAINMENT_NODES.find(n => n.name.toLowerCase().includes(role.toLowerCase()));
                  if (match) setSelectedNodeId(match.id);
                }}
                className="px-3 py-1 rounded-full bg-white/[0.03] hover:bg-sky-950/60 border border-white/10 hover:border-accent-cyan text-zinc-300 hover:text-white transition-all"
              >
                I'm in {role} →
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Controls: Search & Category Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/40 font-bold'
                    : 'bg-white/[0.02] text-zinc-400 border-white/5 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72 flex-shrink-0">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stakeholders..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-accent-cyan"
            />
          </div>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Stakeholder Directory Rail (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-2">
            {filteredNodes.map(node => {
              const isSelected = selectedNodeId === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-sky-950/70 border-accent-cyan shadow-md'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-base font-sans">
                      {node.name}
                    </span>
                    <span className="font-mono text-[10px] text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10">
                      {node.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Stakeholder Deep Profile (Right 8 cols) */}
          <div className="lg:col-span-8">
            <div className="clean-card p-8 sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-sky-500/15">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan block mb-1">
                    {activeNode.category} Node
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-normal text-white">
                    {activeNode.name}
                  </h2>
                </div>
                <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
                  {activeNode.metricPreview}
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Operational Role & Mandate
                  </span>
                  <p className="text-base text-zinc-200 font-light leading-relaxed">
                    {activeNode.description}
                  </p>
                </div>

                {/* Connected Dependencies */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Key Counterparties & Dependencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.connectedNodes.map(target => (
                      <span
                        key={target}
                        className="px-3 py-1 rounded-lg bg-sky-950/30 border border-sky-500/20 text-xs font-mono text-sky-200 capitalize"
                      >
                        ↔ {target}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Frictions Faced */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    Structural Frictions Encountered
                  </span>
                  <div className="space-y-2">
                    {activeNode.typicalFriction.map((fric, i) => (
                      <div key={i} className="text-xs text-zinc-300 flex items-start gap-2.5">
                        <span className="text-accent-cyan font-bold">•</span>
                        <span>{fric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ProjectSynq Intervention */}
                <div className="p-5 rounded-2xl bg-sky-950/30 border border-accent-cyan/30 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-bold block">
                    ProjectSynq Bilateral Intervention
                  </span>
                  <div className="space-y-2">
                    {activeNode.synqInterventions.map((intv, i) => (
                      <div key={i} className="text-xs text-sky-200 flex items-start gap-2.5">
                        <span className="text-accent-cyan font-bold">✓</span>
                        <span>{intv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed to Chapter 04 */}
        <PageNavigationBanner
          currentPageNumber="03"
          currentPageTitle="Stakeholders"
          nextRouteHash="#problems"
          nextPageNumber="04"
          nextPageTitle="Problems: Systemic Friction Taxonomy"
          nextPageDescription="Now that the stakeholders are identified, examine the 8 super-problems and 25 problem vectors causing friction across their handoffs."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
