import React, { useState, useEffect } from 'react';
import { Navbar, PageRoute, ALL_16_CHAPTERS } from './components/Navbar';
import { Page01_HomePage } from './pages/Page01_HomePage';
import { Page02_EcosystemPage } from './pages/Page02_EcosystemPage';
import { Page03_StakeholdersPage } from './pages/Page03_StakeholdersPage';
import { Page04_ProblemsPage } from './pages/Page04_ProblemsPage';
import { Page05_BottlenecksPage } from './pages/Page05_BottlenecksPage';
import { Page06_SilosPage } from './pages/Page06_SilosPage';
import { Page07_OpportunitiesPage } from './pages/Page07_OpportunitiesPage';
import { Page08_ProjectSynqPage } from './pages/Page08_ProjectSynqPage';
import { Page09_HowItWorksPage } from './pages/Page09_HowItWorksPage';
import { Page10_StakeholderJourneysPage } from './pages/Page10_StakeholderJourneysPage';
import { Page11_ProjectLifecyclePage } from './pages/Page11_ProjectLifecyclePage';
import { Page12_ProjectsPage } from './pages/Page12_ProjectsPage';
import { Page13_OutcomesPage } from './pages/Page13_OutcomesPage';
import { Page14_IntelligencePage } from './pages/Page14_IntelligencePage';
import { Page15_ParticipatePage } from './pages/Page15_ParticipatePage';
import { Page16_AboutPage } from './pages/Page16_AboutPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('overview');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');

      if (!hash || hash === 'overview' || hash === 'home') {
        setCurrentRoute('overview');
      } else if (hash === 'ecosystem' || hash === 'layers') {
        setCurrentRoute('ecosystem');
      } else if (hash === 'stakeholders' || hash === 'directory') {
        setCurrentRoute('stakeholders');
      } else if (hash === 'problems' || hash === 'why' || hash === 'friction') {
        setCurrentRoute('problems');
      } else if (hash === 'bottlenecks' || hash === 'chokepoints') {
        setCurrentRoute('bottlenecks');
      } else if (hash === 'silos' || hash === 'connections' || hash === 'matrix') {
        setCurrentRoute('silos');
      } else if (hash === 'opportunities' || hash === 'whitespaces') {
        setCurrentRoute('opportunities');
      } else if (hash === 'projectsynq' || hash === 'concept') {
        setCurrentRoute('projectsynq');
      } else if (hash === 'how-it-works' || hash === 'mechanism' || hash === 'cadence') {
        setCurrentRoute('how-it-works');
      } else if (hash === 'journeys' || hash === 'experience') {
        setCurrentRoute('journeys');
      } else if (hash === 'lifecycle' || hash === 'project-lifecycle') {
        setCurrentRoute('lifecycle');
      } else if (hash === 'projects' || hash === 'use-cases') {
        setCurrentRoute('projects');
      } else if (hash === 'outcomes' || hash === 'value') {
        setCurrentRoute('outcomes');
      } else if (hash === 'intelligence' || hash === 'telemetry') {
        setCurrentRoute('intelligence');
      } else if (hash === 'participate' || hash === 'engage' || hash === 'intake') {
        setCurrentRoute('participate');
      } else if (hash === 'about' || hash === 'why-synq' || hash === 'faq') {
        setCurrentRoute('about');
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
        return <Page01_HomePage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'ecosystem':
        return <Page02_EcosystemPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'stakeholders':
        return <Page03_StakeholdersPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'problems':
      case 'why':
        return <Page04_ProblemsPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'bottlenecks':
        return <Page05_BottlenecksPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'silos':
      case 'matrix':
        return <Page06_SilosPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'opportunities':
        return <Page07_OpportunitiesPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'projectsynq':
        return <Page08_ProjectSynqPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'how-it-works':
        return <Page09_HowItWorksPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'journeys':
        return <Page10_StakeholderJourneysPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'lifecycle':
        return <Page11_ProjectLifecyclePage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'projects':
        return <Page12_ProjectsPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'outcomes':
      case 'value':
        return <Page13_OutcomesPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'intelligence':
        return <Page14_IntelligencePage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      case 'participate':
      case 'engage':
        return <Page15_ParticipatePage onNavigate={navigateTo} />;
      case 'about':
        return <Page16_AboutPage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
      default:
        return <Page01_HomePage onNavigate={navigateTo} onStartSynq={() => navigateTo('participate')} />;
    }
  };

  // Locate chapter number for current route
  const currentChapter = ALL_16_CHAPTERS.find(c => c.id === currentRoute) || ALL_16_CHAPTERS[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans antialiased selection:bg-accent-cyan/20 selection:text-accent-cyan">
      {/* Universal Floating Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={(route) => navigateTo(route)}
      />

      {/* Render Current Active Chapter */}
      {renderActivePage()}

      {/* Floating Ecosystem Telemetry HUD with Chapter Progression */}
      <aside
        aria-label="Ecosystem Storyline HUD"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 p-2 sm:px-4 sm:py-2 rounded-full bg-[#040D1A]/90 border border-sky-500/25 shadow-2xl backdrop-blur-xl font-mono text-[11px] text-zinc-300 transition-all hover:border-accent-cyan/50"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF] animate-pulse" />
          <span className="text-white font-bold">Ch {currentChapter.num}:</span>
          <span className="hidden sm:inline text-sky-300 truncate max-w-[140px] sm:max-w-[200px]">{currentChapter.title}</span>
        </div>

        <button
          onClick={() => {
            const nextIdx = (ALL_16_CHAPTERS.findIndex(c => c.id === currentRoute) + 1) % ALL_16_CHAPTERS.length;
            navigateTo(ALL_16_CHAPTERS[nextIdx].id);
          }}
          className="ml-2 px-2.5 py-1 rounded-full bg-sky-950/60 hover:bg-sky-900/80 text-accent-cyan font-bold border border-sky-500/30 transition-colors flex items-center gap-1"
        >
          <span>Next Ch</span>
          <span className="text-[10px]">›</span>
        </button>
      </aside>
    </div>
  );
};

export default App;
