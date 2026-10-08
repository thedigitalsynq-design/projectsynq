import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { StakeholderMatrixPage } from './pages/StakeholderMatrixPage';
import { Zap, Sparkles, Activity, Layers, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'matrix'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#matrix' || hash === '#stakeholders' || hash === '#stakeholder-matrix') {
        setCurrentView('matrix');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToMatrix = () => {
    window.location.hash = '#matrix';
  };

  const navigateToHome = () => {
    window.location.hash = '#';
  };

  const handleStartSynq = () => {
    if (currentView === 'matrix') {
      window.location.hash = '#engage';
      setTimeout(() => {
        const el = document.querySelector('#engage');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.querySelector('#engage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      {currentView === 'matrix' ? (
        <StakeholderMatrixPage
          onBackToHome={navigateToHome}
          onStartSynq={handleStartSynq}
        />
      ) : (
        <Home onNavigateMatrix={navigateToMatrix} />
      )}

      {/* Persistent Floating Ecosystem Connection HUD */}
      <aside aria-label="Ecosystem Connection Telemetry" className="fixed bottom-4 left-4 z-50 flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-full bg-background-deep/90 border border-white/10 shadow-2xl backdrop-blur-xl font-mono text-[11px] text-synq-muted transition-all hover:border-accent-cyan/40">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
          <span className="hidden sm:inline text-white font-semibold">17 Nodes</span>
          <span className="hidden md:inline text-synq-dim">•</span>
          <span className="text-accent-cyan font-bold">42 Bridges Synchronized</span>
        </div>

        <button
          onClick={currentView === 'matrix' ? navigateToHome : navigateToMatrix}
          className="ml-2 px-2.5 py-1 rounded-full bg-surface-100 hover:bg-surface-200 text-white font-medium border border-white/10 transition-colors flex items-center gap-1"
        >
          <span>{currentView === 'matrix' ? 'Overview' : 'Matrix'}</span>
          <span className="text-[10px] text-accent-lime">›</span>
        </button>
      </aside>
    </div>
  );
};

export default App;
