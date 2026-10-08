import React, { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { OverviewPage } from './pages/OverviewPage';
import { WhyPage } from './pages/WhyPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { WhoItServesPage } from './pages/WhoItServesPage';
import { StakeholderMatrixPage } from './pages/StakeholderMatrixPage';
import { ValuePage } from './pages/ValuePage';
import { EngagePage } from './pages/EngagePage';
import { ChevronRight, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('overview');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      
      if (!hash || hash === 'overview') {
        setCurrentRoute('overview');
      } else if (hash === 'why' || hash === 'problem') {
        setCurrentRoute('why');
      } else if (hash === 'how-it-works' || hash === 'mechanism' || hash === 'architecture') {
        setCurrentRoute('how-it-works');
      } else if (hash === 'stakeholders' || hash === 'ecosystems' || hash === 'use-cases') {
        setCurrentRoute('stakeholders');
      } else if (hash === 'matrix' || hash === 'constellation' || hash === 'heatmap') {
        setCurrentRoute('matrix');
      } else if (hash === 'value' || hash === 'model' || hash === 'intelligence') {
        setCurrentRoute('value');
      } else if (hash === 'engage' || hash === 'contact' || hash === 'diagnostic') {
        setCurrentRoute('engage');
      } else {
        setCurrentRoute('overview');
      }

      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute | string) => {
    const cleanRoute = route.replace('#', '');
    window.location.hash = `#${cleanRoute}`;
  };

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'overview':
        return (
          <OverviewPage
            onNavigate={(hash) => navigateTo(hash)}
            onStartSynq={() => navigateTo('engage')}
          />
        );
      case 'why':
        return (
          <WhyPage
            onNavigate={(hash) => navigateTo(hash)}
            onStartSynq={() => navigateTo('engage')}
          />
        );
      case 'how-it-works':
        return (
          <HowItWorksPage
            onNavigate={(hash) => navigateTo(hash)}
            onStartSynq={() => navigateTo('engage')}
          />
        );
      case 'stakeholders':
        return (
          <WhoItServesPage
            onNavigate={(hash) => navigateTo(hash)}
            onStartSynq={() => navigateTo('engage')}
          />
        );
      case 'matrix':
        return (
          <StakeholderMatrixPage
            onBackToHome={() => navigateTo('overview')}
            onStartSynq={() => navigateTo('engage')}
          />
        );
      case 'value':
        return (
          <ValuePage
            onNavigate={(hash) => navigateTo(hash)}
            onStartSynq={() => navigateTo('engage')}
          />
        );
      case 'engage':
        return (
          <EngagePage
            onNavigate={(hash) => navigateTo(hash)}
          />
        );
      default:
        return (
          <OverviewPage
            onNavigate={(hash) => navigateTo(hash)}
            onStartSynq={() => navigateTo('engage')}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-synq-text selection:bg-accent-cyan/20 selection:text-accent-cyan overflow-x-hidden font-sans">
      {/* Sticky Top Multi-Page Header */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={(route) => navigateTo(route)}
      />

      {/* Render Current Active Page */}
      {renderActivePage()}

      {/* Persistent Floating Ecosystem Connection Telemetry HUD */}
      <aside
        aria-label="Ecosystem Connection Telemetry"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-full bg-background-deep/90 border border-white/10 shadow-2xl backdrop-blur-xl font-mono text-[11px] text-synq-muted transition-all hover:border-accent-cyan/40"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
          <span className="hidden sm:inline text-white font-semibold">17 Nodes</span>
          <span className="hidden md:inline text-synq-dim">•</span>
          <span className="text-accent-cyan font-bold">42 Bridges Synchronized</span>
        </div>

        <button
          onClick={() => navigateTo(currentRoute === 'matrix' ? 'overview' : 'matrix')}
          className="ml-2 px-2.5 py-1 rounded-full bg-surface-100 hover:bg-surface-200 text-white font-medium border border-white/10 transition-colors flex items-center gap-1"
        >
          <span>{currentRoute === 'matrix' ? 'Overview' : 'Matrix'}</span>
          <span className="text-[10px] text-accent-lime">›</span>
        </button>
      </aside>
    </div>
  );
};

export default App;
