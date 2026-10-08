import React from 'react';
import { WhyProjectSynq } from '../components/WhyProjectSynq';
import { BusinessModel } from '../components/BusinessModel';
import { StrategicAuditFAQ } from '../components/StrategicAuditFAQ';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { ShieldCheck, ArrowRight, Compass, Heart, CheckCircle2 } from 'lucide-react';

export const Page16_AboutPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 16 / Philosophy & Governance</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            About & Why:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Founding Thesis, Principles & Neutrality
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            ProjectSynq exists to solve a singular structural paradox: why massive creative and financial capabilities continue to stall between capable counterparties. Review our operating covenants, commercial alignment model, and institutional due diligence FAQ.
          </p>
        </div>
      </section>

      <main>
        {/* Core Principles */}
        <WhyProjectSynq />

        {/* Commercial Alignment Model */}
        <BusinessModel onStartSynq={onStartSynq} />

        {/* Institutional Due Diligence FAQ */}
        <StrategicAuditFAQ />

        {/* Loop Back to Chapter 01 */}
        <PageNavigationBanner
          currentPageNumber="16"
          currentPageTitle="About & Why"
          nextRouteHash="#overview"
          nextPageNumber="01"
          nextPageTitle="Home: The Big Picture"
          nextPageDescription="Return to the macroscopic overview and explore any phase of the ProjectSynq operating ecosystem."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
