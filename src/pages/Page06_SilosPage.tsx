import React, { useState } from 'react';
import { ConnectTheDots } from '../components/ConnectTheDots';
import { ALL_INTER_NODE_CONNECTIONS, InterNodeConnection } from '../data/connections';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Boxes, Network, ArrowRight, Zap, RefreshCw, Layers } from 'lucide-react';

export const Page06_SilosPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Operational', 'Commercial', 'Financial', 'Legal', 'Governance'];

  const filteredConnections = ALL_INTER_NODE_CONNECTIONS.filter(conn =>
    activeCategory === 'All' || conn.category === activeCategory
  );

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Boxes className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 06 / The Silo Breakout Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Silos & Connections:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Unlocking Value Trapped in Isolation
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            The resources, knowledge, and capabilities already exist — but they remain quarantined inside institutional silos. When you connect the dots between stranded assets and unfulfilled demand, friction transforms into compounding yield.
          </p>
        </div>
      </section>

      <main>
        {/* Core Silo Breakout Demonstration */}
        <ConnectTheDots />

        {/* 42 Bilateral Bridges Directory */}
        <section className="py-20 border-t border-sky-500/15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-bold block mb-1">
                BILATERAL BRIDGES INVENTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white">
                42 Inter-Node Bridges Operating Between Silos
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar font-mono text-xs">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-3 py-1.5 rounded-full border transition-all ${
                    activeCategory === c
                      ? 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan font-bold'
                      : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredConnections.slice(0, 12).map((conn) => (
              <div
                key={conn.id}
                className="clean-card p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
                    <span className="capitalize text-white font-medium">{conn.from} ↔ {conn.to}</span>
                    <span className="px-2 py-0.5 rounded bg-sky-950/40 border border-sky-500/20 text-accent-cyan text-[10px]">
                      {conn.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-sans">
                    {conn.bridgeName}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    <strong className="text-zinc-300">Friction:</strong> {conn.friction}
                  </p>
                  <p className="text-xs text-sky-200 leading-relaxed">
                    <strong className="text-accent-cyan">Bridge:</strong> {conn.synqBridge}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-500/15 font-mono text-[11px] text-zinc-400">
                  <span className="text-accent-cyan font-bold">Outcome: </span>
                  {conn.outcome}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proceed to Chapter 07 */}
        <PageNavigationBanner
          currentPageNumber="06"
          currentPageTitle="Silos & Connections"
          nextRouteHash="#opportunities"
          nextPageNumber="07"
          nextPageTitle="Opportunities: The 15 Ecosystem Whitespaces"
          nextPageDescription="Discover the massive uncaptured economic value unlocked when trapped silos connect across the entertainment value chain."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
