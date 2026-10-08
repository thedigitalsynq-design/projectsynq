import React, { useState } from 'react';
import { ECOSYSTEM_LAYERS } from '../data/matrixData';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Layers, ArrowRight, Compass, ShieldCheck, Zap, Database, Globe } from 'lucide-react';

interface Page02EcosystemProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const Page02_EcosystemPage: React.FC<Page02EcosystemProps> = ({ onNavigate, onStartSynq }) => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const activeLayer = ECOSYSTEM_LAYERS[selectedLayerIndex] || ECOSYSTEM_LAYERS[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Globe className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 02 / The Environment</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Ecosystem:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              The 12-Layer Macroscopic Landscape
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            This is the complex living world ProjectSynq connects. Spanning 12 functional layers across creation, capital, distribution, infrastructure, and governance — understanding this macroscopic landscape is the essential foundation before diagnosing individual frictions.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Layer Selector Interactive Rail */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Select an Ecosystem Layer (1 to 12)
            </span>
            <span className="text-xs font-mono text-accent-cyan">
              Layer {activeLayer.number} of 12
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {ECOSYSTEM_LAYERS.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all font-mono text-xs ${
                    isSelected
                      ? 'bg-sky-950/70 border-accent-cyan text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                      : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="text-[10px] text-zinc-500 block mb-0.5">
                    L0{layer.number}
                  </span>
                  <span className="font-semibold block truncate">
                    {layer.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Layer Inspection Card */}
        <div className="clean-card p-8 sm:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-sky-500/15">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-3">
                <span>LAYER 0{activeLayer.number} ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-white">
                {activeLayer.name}
              </h2>
              <p className="mt-3 text-base text-zinc-300 font-light max-w-2xl leading-relaxed">
                {activeLayer.shortDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 max-w-md font-mono text-xs text-zinc-300 flex-shrink-0">
              <span className="text-[10px] text-accent-cyan uppercase tracking-wider block mb-1">
                Primary Flow Vector
              </span>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                {activeLayer.flowVector}
              </p>
            </div>
          </div>

          {/* Key Stakeholders in this Layer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Core Stakeholders & Assets in this Layer
              </span>
              <div className="flex flex-wrap gap-2">
                {activeLayer.stakeholders.map((stk, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-zinc-200"
                  >
                    {stk}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Key Inter-Layer Interfaces & Dependencies
              </span>
              <div className="space-y-2">
                {activeLayer.interfaces.map((intf, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-sky-950/20 border border-sky-500/15 text-xs text-sky-200 font-mono flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                    <span>{intf}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Proceed to Chapter 03 */}
        <PageNavigationBanner
          currentPageNumber="02"
          currentPageTitle="Ecosystem"
          nextRouteHash="#stakeholders"
          nextPageNumber="03"
          nextPageTitle="Stakeholders: Directory & Dependency Landscape"
          nextPageDescription="Drill down from macroscopic layers into the 17 autonomous stakeholder profiles — what they need, what they provide, and who they depend on."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
