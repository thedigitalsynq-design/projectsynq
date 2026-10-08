import React from 'react';
import { Engagement } from '../components/Engagement';
import { Footer } from '../components/Footer';
import { Send, ShieldCheck, Clock } from 'lucide-react';

interface EngagePageProps {
  onNavigate: (hash: string) => void;
}

export const EngagePage: React.FC<EngagePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Send className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 07 / Terminal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Terminal:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              72-Hour Rapid Diagnostic Intake
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Identify the friction between your node and any counterparty. All submissions are processed under institutional non-disclosure protection with a guaranteed 72-hour root-cause diagnostic brief.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs font-mono text-synq-dim">
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

      <main>
        {/* Engagement Component Terminal */}
        <Engagement onExploreModel={() => onNavigate('#how-it-works')} />
      </main>

      <Footer onStartSynq={() => {}} />
    </div>
  );
};
