import React from 'react';
import { Hero } from '../components/Hero';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Compass, Layers, AlertTriangle, ArrowRight, Sparkles, Network } from 'lucide-react';

interface Page01HomeProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const Page01_HomePage: React.FC<Page01HomeProps> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      <main>
        {/* Hero Section */}
        <Hero
          onExploreModel={() => onNavigate('#ecosystem')}
          onStartSynq={onStartSynq}
          onExploreMatrix={() => onNavigate('#stakeholders')}
        />

        {/* Macroscopic Ecosystem Summary Map */}
        <section className="relative py-20 border-t border-sky-500/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="clean-card p-8 sm:p-14 relative overflow-hidden">
              <div className="max-w-3xl mb-10">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-2">
                  The Macroscopic Storyline
                </span>
                <h2 className="text-3xl sm:text-5xl font-normal text-white leading-tight">
                  From disconnected fragments to coordinated velocity.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                  Most modern failures are not caused by incompetent creators, bankrupt studios, or reckless financiers. They are caused by the invisible impedance trapped in between them. Follow the guided 16-chapter discovery below.
                </p>
              </div>

              {/* 3-Phase Progression Roadmap */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-sky-500/15 font-mono text-xs">
                <div className="p-6 rounded-2xl bg-sky-950/20 border border-sky-500/15 space-y-3">
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>PHASE I</span>
                    <span className="text-accent-cyan">01 — 07</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">The Ecosystem & Friction</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Explore the 12 macroscopic layers, 17 stakeholder nodes, 25 problem vectors, structural bottlenecks, and assets locked in silos.
                  </p>
                  <button
                    onClick={() => onNavigate('#ecosystem')}
                    className="inline-flex items-center gap-1.5 text-accent-cyan font-semibold hover:underline"
                  >
                    <span>Begin Phase I</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-sky-950/20 border border-sky-500/15 space-y-3">
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>PHASE II</span>
                    <span className="text-accent-cyan">08 — 12</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">The Connective Mechanism</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Discover how ProjectSynq operates as neutral connective infrastructure via a 9-stage cadence, stakeholder journeys, and real projects.
                  </p>
                  <button
                    onClick={() => onNavigate('#projectsynq')}
                    className="inline-flex items-center gap-1.5 text-accent-cyan font-semibold hover:underline"
                  >
                    <span>Inspect Mechanism</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-sky-950/20 border border-sky-500/15 space-y-3">
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>PHASE III</span>
                    <span className="text-accent-cyan">13 — 16</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">Value, Intelligence & Intake</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Review verified value unlocks, Inter-Node Intelligence telemetry, dynamic onboarding, and due diligence covenants.
                  </p>
                  <button
                    onClick={() => onNavigate('#outcomes')}
                    className="inline-flex items-center gap-1.5 text-accent-cyan font-semibold hover:underline"
                  >
                    <span>Review Outcomes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceed to Chapter 02 */}
        <PageNavigationBanner
          currentPageNumber="01"
          currentPageTitle="The Big Picture"
          nextRouteHash="#ecosystem"
          nextPageNumber="02"
          nextPageTitle="Ecosystem: The 12-Layer Landscape"
          nextPageDescription="Explore the macroscopic world ProjectSynq operates across — from creation and capital to distribution, physical infrastructure, and governance."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
