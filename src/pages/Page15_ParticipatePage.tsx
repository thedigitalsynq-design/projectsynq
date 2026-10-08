import React, { useState } from 'react';
import { Engagement } from '../components/Engagement';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Send, ShieldCheck, Clock, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';

export const Page15_ParticipatePage: React.FC<{ onNavigate: (hash: string) => void }> = ({ onNavigate }) => {
  const [selectedIntent, setSelectedIntent] = useState<string>('problem');

  const intents = [
    { id: 'problem', label: 'I Have a Friction / Problem', desc: 'Diagnose a stalled bilateral agreement, contractor dispute, or delayed milestone.' },
    { id: 'project', label: 'I Have a Project / Slate', desc: 'Package, attach talent, or finance an active film, series, or interactive IP.' },
    { id: 'capability', label: 'I Have a Capability / Skills', desc: 'Offer line production, VFX, showrunning, or specialized creative infrastructure.' },
    { id: 'resources', label: 'I Have Idle Resources', desc: 'Monetize dark soundstages, render power, dormant IP, or unutilized equipment.' },
    { id: 'capital', label: 'I Need / Provide Capital', desc: 'Underwrite private credit, slate debt, completion bond, or seek co-financing.' },
    { id: 'collaborate', label: 'I Want to Collaborate / Partner', desc: 'Explore institutional alliance or transmedia IP crossover opportunities.' }
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Send className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 15 / Dynamic Onboarding</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Participate:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Route Your Specific Ecosystem Inquiry
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Choose your exact entry point below. All submissions are processed under institutional non-disclosure protection with a guaranteed 72-hour root-cause diagnostic brief.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 clean-pill px-3 py-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Institutional NDA Protected</span>
            </span>
            <span className="flex items-center gap-1.5 clean-pill px-3 py-1">
              <Clock className="w-3.5 h-3.5 text-accent-cyan" />
              <span>72-Hour Rapid Diagnostic SLA</span>
            </span>
            <span className="flex items-center gap-1.5 clean-pill px-3 py-1">
              <span>0% Upfront Financial Exposure</span>
            </span>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dynamic Entry Intent Selector */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-bold block mb-4">
            SELECT YOUR INSTITUTIONAL INTENT
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {intents.map((item) => {
              const isSelected = selectedIntent === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIntent(item.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-sky-950/70 border-accent-cyan shadow-lg'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-base font-sans">
                      {item.label}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement Terminal Component */}
        <div className="clean-card p-6 sm:p-10 mb-16">
          <Engagement onExploreModel={() => onNavigate('#how-it-works')} />
        </div>

        {/* Proceed to Chapter 16 */}
        <PageNavigationBanner
          currentPageNumber="15"
          currentPageTitle="Participate"
          nextRouteHash="#about"
          nextPageNumber="16"
          nextPageTitle="About & Why: Philosophy, Covenants & Due Diligence"
          nextPageDescription="Review ProjectSynq's core founding thesis, neutrality covenants, commercial alignment model, and institutional FAQ."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={() => {}} />
    </div>
  );
};
