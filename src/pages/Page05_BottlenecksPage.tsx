import React, { useState } from 'react';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Filter, ArrowRight, AlertCircle, Clock, DollarSign, FileText, Users, Cpu, ShieldCheck } from 'lucide-react';

interface BottleneckItem {
  id: string;
  name: string;
  category: string;
  input: string;
  bottleneck: string;
  consequence: string;
  annualLeakage: string;
  remedyVector: string;
}

const BOTTLENECKS: BottleneckItem[] = [
  {
    id: 'discovery',
    name: 'Discovery & Attachment Bottleneck',
    category: 'Information & Sourcing',
    input: 'Viable creative projects seeking attached lead stars and specialized crew.',
    bottleneck: 'Informal gatekeeping, non-standardized availability, and speculative middleman pitching.',
    consequence: 'Projects spend 9–14 months in packaging limbo before a single frame is shot.',
    annualLeakage: '₹2,400 Cr in stranded pre-production capital',
    remedyVector: 'Verified bilateral availability indexes & pre-cleared engagement windows.'
  },
  {
    id: 'coordination',
    name: 'Multi-Party Contracting Bottleneck',
    category: 'Legal & Negotiation',
    input: 'Term sheets agreed between studio, lead talent, director, and co-financiers.',
    bottleneck: 'Defensive redlines, unaligned waterfall definitions, and non-standard IP indemnities.',
    consequence: 'Legal contracting latency averages 120+ days; 35% of packages collapse at long-form.',
    annualLeakage: '₹1,800 Cr in aborted legal and opportunity costs',
    remedyVector: 'Pre-harmonized standard legal covenants & automated escrow gates.'
  },
  {
    id: 'financial',
    name: 'Milestone Liquidity & Escrow Bottleneck',
    category: 'Capital & Treasury',
    input: 'Approved institutional debt/equity allocated for multi-stage production schedules.',
    bottleneck: 'Disputed delivery sign-offs, delayed banking handoffs, and lack of real-time audit visibility.',
    consequence: 'Vendor cash burn, paused shooting schedules, and distressed emergency borrowing.',
    annualLeakage: '₹3,200 Cr in interest penalties and production overruns',
    remedyVector: 'Milestone-triggered smart escrow disbursement protocol.'
  },
  {
    id: 'resource',
    name: 'Production Capacity & Facility Bottleneck',
    category: 'Physical & Tech Infrastructure',
    input: 'Surge in regional film and OTT shooting schedules demanding high-end soundstages & VFX.',
    bottleneck: 'Uncoordinated scheduling; stages sit idle during slate delays, then face acute booking gridlock.',
    consequence: 'Tier-1 projects pushed back quarters; indie productions priced out entirely.',
    annualLeakage: '₹1,500 Cr in unmonetized idle stage downtime',
    remedyVector: 'Dynamic Inter-Node Facility Time-Share & swap clearinghouse.'
  },
  {
    id: 'decision',
    name: 'Greenlight Committee Bottleneck',
    category: 'Governance & Analytics',
    input: 'High-concept pitches and transmedia adaptations submitted to studio slates.',
    bottleneck: 'Fear of asymmetric failure; siloed executives analyzing disjointed data in isolation.',
    consequence: 'Analysis paralysis; fast-moving cultural opportunities expire before greenlight.',
    annualLeakage: '₹2,100 Cr in missed transmedia windows',
    remedyVector: 'Unified counterparty due diligence scorecards and verifiable audience demand signals.'
  },
  {
    id: 'rights',
    name: 'Music & Derivative Rights Clearance Bottleneck',
    category: 'Intellectual Property',
    input: 'Films, games, and web series requiring licensed catalog music and secondary IP rights.',
    bottleneck: 'Fragmented publishing splits, unresponsive legacy labels, and cross-border sync ambiguities.',
    consequence: 'Post-production halts, unreleased soundtracks, and massive copyright strike exposure.',
    annualLeakage: '₹1,200 Cr in suppressed catalog royalties',
    remedyVector: 'Pre-cleared bilateral catalog licensing bridges with split-waterfall automation.'
  }
];

export const Page05_BottlenecksPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  const [selectedId, setSelectedId] = useState<string>(BOTTLENECKS[0].id);
  const activeBottleneck = BOTTLENECKS.find(b => b.id === selectedId) || BOTTLENECKS[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Filter className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 05 / Structural Bottlenecks</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Bottlenecks:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Where Capital, Work & Momentum Get Stuck
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            A problem is a condition; a bottleneck is a structural constriction point where momentum grinds to a halt. Isolating these 6 choke points explains why hundreds of crores evaporate annually between eager counterparties.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bottleneck Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {BOTTLENECKS.map((b) => {
            const isSelected = selectedId === b.id;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedId(b.id)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-sky-950/70 border-accent-cyan shadow-lg'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
                  <span>{b.category}</span>
                  <span className="text-accent-cyan font-bold">{b.annualLeakage.split(' ')[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-sans">
                  {b.name}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {b.bottleneck}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Choke-Point Engine: Input -> Bottleneck -> Consequence */}
        <div className="clean-card p-8 sm:p-12 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-sky-500/15">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan block mb-1">
                CHOKE-POINT ANATOMY
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white">
                {activeBottleneck.name}
              </h2>
            </div>
            <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/20 font-mono text-xs text-right">
              <span className="text-zinc-500 block text-[10px] uppercase">Estimated Industry Leakage</span>
              <span className="text-accent-cyan font-bold text-base mt-0.5 block">{activeBottleneck.annualLeakage}</span>
            </div>
          </div>

          {/* 3-Step Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            {/* Step 1: Input */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 pb-2 border-b border-white/10">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                <span className="uppercase tracking-wider">The Input / Intention</span>
              </div>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {activeBottleneck.input}
              </p>
            </div>

            {/* Step 2: Bottleneck */}
            <div className="p-6 rounded-2xl bg-sky-950/40 border border-sky-500/30 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan pb-2 border-b border-sky-500/20">
                <span className="w-5 h-5 rounded-full bg-accent-cyan text-background-deep flex items-center justify-center text-[10px] font-bold">2</span>
                <span className="uppercase tracking-wider">The Choke-Point</span>
              </div>
              <p className="text-sm text-sky-200 font-light leading-relaxed">
                {activeBottleneck.bottleneck}
              </p>
            </div>

            {/* Step 3: Consequence */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 pb-2 border-b border-white/10">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                <span className="uppercase tracking-wider">The Consequence</span>
              </div>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {activeBottleneck.consequence}
              </p>
            </div>
          </div>

          {/* Neutralizing Vector */}
          <div className="mt-8 pt-6 border-t border-sky-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <span className="text-zinc-400">Required Neutralizing Vector:</span>
            <span className="text-accent-cyan font-bold bg-sky-950/30 px-3 py-1.5 rounded-lg border border-accent-cyan/30">
              ✓ {activeBottleneck.remedyVector}
            </span>
          </div>
        </div>

        {/* Proceed to Chapter 06 */}
        <PageNavigationBanner
          currentPageNumber="05"
          currentPageTitle="Bottlenecks"
          nextRouteHash="#silos"
          nextPageNumber="06"
          nextPageTitle="Silos & Connections: Trapped Assets & Bridges"
          nextPageDescription="The problem is not a lack of resources — it is that assets are trapped inside disconnected silos. Explore the Silo Breakout Engine and 42 bilateral bridges."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
