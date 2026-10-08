import React from 'react';
import { Hero } from '../components/Hero';
import { ConnectTheDots } from '../components/ConnectTheDots';
import { WhatIsProjectSynq } from '../components/WhatIsProjectSynq';
import { NotAnotherModel } from '../components/NotAnotherModel';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';

interface OverviewPageProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-background text-synq-text font-sans">
      <main>
        {/* Hero Section */}
        <Hero
          onExploreModel={() => onNavigate('#how-it-works')}
          onStartSynq={onStartSynq}
          onExploreMatrix={() => onNavigate('#matrix')}
        />

        {/* Core Operating Principle: Connect the Dots. Leverage Every Silo */}
        <ConnectTheDots />

        {/* Operating Definition (Connect, Orchestrate, Systemize Bento Grid) */}
        <WhatIsProjectSynq />

        {/* Contrasting Matrix: What We Are NOT */}
        <NotAnotherModel />

        {/* Next Chapter Progression */}
        <PageNavigationBanner
          currentPageNumber="01"
          currentPageTitle="Overview"
          nextRouteHash="#why"
          nextPageNumber="02"
          nextPageTitle="Friction: The Invisible Layer"
          nextPageTeaser="Discover why ecosystem breakdowns happen between nodes — examining the 8 super-problems causing ₹15,000+ Cr of annual leakage."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
