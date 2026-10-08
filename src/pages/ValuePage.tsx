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
    <div className="relative min-h-screen bg-background text-synq-text font-sans pt-28">
      {/* Chapter Page Header */}
      <section className="relative pb-16 border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 apple-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-lime tracking-wider uppercase mb-5">
            <TrendingUp className="w-3.5 h-3.5 text-accent-lime" />
            <span>Chapter 06 / Value & Economics</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            How Value Is Created:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Intelligence, Flywheel & Commercial Model
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-synq-muted leading-relaxed max-w-3xl">
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
          currentPageTitle="Value Creation & Business Model"
          nextRouteHash="#engage"
          nextPageNumber="07"
          nextPageTitle="Start a Synq: Friction Intake Terminal"
          nextPageTeaser="Submit your confidential bilateral friction brief. Receive a comprehensive root-cause diagnosis within 72 hours under institutional NDA."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
