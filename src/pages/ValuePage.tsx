import React from 'react';
import { Outcomes } from '../components/Outcomes';
import { Intelligence } from '../components/Intelligence';
import { Flywheel } from '../components/Flywheel';
import { BusinessModel } from '../components/BusinessModel';
import { WhyProjectSynq } from '../components/WhyProjectSynq';
import { StrategicAuditFAQ } from '../components/StrategicAuditFAQ';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { TrendingUp, Sparkles } from 'lucide-react';

interface ValuePageProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const ValuePage: React.FC<ValuePageProps> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <TrendingUp className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 06 / Economics & Value</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Economics:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Value Creation & Commercial Model
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Removing bilateral friction creates compounding returns. Discover our 5 core value dimensions, how Inter-Node Intelligence™ compounds institutional IP, and our non-hourly, milestone-gated commercial model.
          </p>
        </div>
      </section>

      <main>
        {/* 01. Value Outcomes (5 Dimensions Bento Grid) */}
        <Outcomes />

        {/* 02. Inter-Node Intelligence™ */}
        <Intelligence />

        {/* 03. Compounding Flywheel */}
        <Flywheel />

        {/* 04. Commercial Model & How We Engage */}
        <BusinessModel onStartSynq={onStartSynq} />

        {/* 05. Why ProjectSynq */}
        <WhyProjectSynq />

        {/* 06. Institutional Due Diligence Accordion FAQ */}
        <StrategicAuditFAQ />

        {/* Next Chapter Progression */}
        <PageNavigationBanner
          currentPageNumber="06"
          currentPageTitle="Economics"
          nextRouteHash="#engage"
          nextPageNumber="07"
          nextPageTitle="Terminal: 72-Hour Rapid Diagnostic"
          nextPageTeaser="Submit your confidential bilateral friction brief. Receive a comprehensive root-cause diagnosis within 72 hours under institutional NDA."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
