import React, { useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProblemInsight } from '../components/ProblemInsight';
import { WhatIsProjectSynq } from '../components/WhatIsProjectSynq';
import { NotAnotherModel } from '../components/NotAnotherModel';
import { Architecture } from '../components/Architecture';
import { NodeGapBridgeFlowLoop } from '../components/NodeGapBridgeFlowLoop';
import { ABCDEF } from '../components/ABCDEF';
import { FourW } from '../components/FourW';
import { ProblemUniverse } from '../components/ProblemUniverse';
import { EntertainmentEcosystem } from '../components/EntertainmentEcosystem';
import { UseCases } from '../components/UseCases';
import { Intelligence } from '../components/Intelligence';
import { Trust } from '../components/Trust';
import { Flywheel } from '../components/Flywheel';
import { Outcomes } from '../components/Outcomes';
import { BusinessModel } from '../components/BusinessModel';
import { WhyProjectSynq } from '../components/WhyProjectSynq';
import { StrategicAuditFAQ } from '../components/StrategicAuditFAQ';
import { Engagement } from '../components/Engagement';
import { Footer } from '../components/Footer';

interface HomeProps {
  onNavigateMatrix?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateMatrix }) => {
  const scrollToEngage = () => {
    const el = document.querySelector('#engage');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToModel = () => {
    const el = document.querySelector('#model');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-synq-text selection:bg-accent-cyan/20 selection:text-accent-cyan overflow-x-hidden font-sans">
      {/* Sticky Top Navbar */}
      <Navbar onStartSynqClick={scrollToEngage} onNavigateMatrix={onNavigateMatrix} currentView="home" />

      <main>
        {/* 08. Hero Section */}
        <Hero
          onExploreModel={scrollToModel}
          onStartSynq={scrollToEngage}
          onExploreMatrix={onNavigateMatrix}
        />

        {/* 09. The Foundational Insight & The Friction Layer */}
        <ProblemInsight />

        {/* 10. What Is ProjectSynq (Connect, Orchestrate, Systemize) */}
        <WhatIsProjectSynq />

        {/* 11. What We Are Not (Comparison Matrix) */}
        <NotAnotherModel />

        {/* 12. The Three-Layer Architecture */}
        <Architecture />

        {/* 13. The Core Mechanism (NODE -> GAP -> BRIDGE -> FLOW -> LOOP) */}
        <NodeGapBridgeFlowLoop />

        {/* 14. ABCDEF Operating Cycle */}
        <ABCDEF />

        {/* 15. The 4W Diagnostic Engine */}
        <FourW />

        {/* 16. The Problem Universe (8 Super-Problems) */}
        <ProblemUniverse />

        {/* 17. Entertainment Ecosystem (17 Nodes Map) */}
        <EntertainmentEcosystem onExploreMatrix={onNavigateMatrix} />

        {/* 18. Use Cases (8 In-Depth Solutions) */}
        <UseCases />

        {/* 19. Inter-Node Intelligence™ */}
        <Intelligence />

        {/* 20. Trust as Infrastructure */}
        <Trust />

        {/* 21. The Compounding Flywheel */}
        <Flywheel />

        {/* 22. Value Outcomes */}
        <Outcomes />

        {/* 23 & 24. Business Model & How We Engage */}
        <BusinessModel onStartSynq={scrollToEngage} />

        {/* 25. Why ProjectSynq */}
        <WhyProjectSynq />

        {/* 25b. Institutional Due Diligence FAQ */}
        <StrategicAuditFAQ />

        {/* 26 & 27. CTA & Start a Synq Intake Terminal */}
        <Engagement onExploreModel={scrollToModel} />
      </main>

      {/* 28 & 38. Footer & Final Brand Statement */}
      <Footer onStartSynq={scrollToEngage} />
    </div>
  );
};
