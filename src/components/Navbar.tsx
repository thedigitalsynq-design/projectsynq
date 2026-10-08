import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, Sparkles, Compass } from 'lucide-react';

export type PageRoute = 'overview' | 'why' | 'how-it-works' | 'stakeholders' | 'matrix' | 'value' | 'engage';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navChapters: { id: PageRoute; label: string; num: string }[] = [
    { id: 'overview', label: 'Overview', num: '01' },
    { id: 'why', label: 'Why It Exists', num: '02' },
    { id: 'how-it-works', label: 'How It Works', num: '03' },
    { id: 'stakeholders', label: 'Who We Serve', num: '04' },
    { id: 'matrix', label: 'Connection Atlas', num: '05' },
    { id: 'value', label: 'Value & Model', num: '06' },
  ];

  const handleSelectRoute = (route: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-background-deep/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/60'
          : 'py-5 bg-background-deep/60 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Wordmark */}
        <button
          onClick={() => handleSelectRoute('overview')}
          className="flex items-center gap-2 group focus:outline-none text-left"
          aria-label="ProjectSynq Home"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-baseline">
            <span>ProjectSyn</span>
            <span className="relative inline-flex items-center text-accent-cyan">
              q
              <span className="absolute -bottom-0.5 right-0 w-2.5 h-1.5 border-b-2 border-r-2 border-accent-cyan rounded-br-full opacity-90 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-accent-lime opacity-80" />
            </span>
          </span>
          <span className="hidden xl:inline-block ml-2 text-[10px] uppercase font-mono tracking-widest text-synq-dim px-2 py-0.5 rounded border border-white/5 bg-surface-100/60">
            The Connective Layer
          </span>
        </button>

        {/* Desktop Progressive Multi-Page Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl">
          {navChapters.map((chapter) => {
            const isActive = currentRoute === chapter.id;

            return (
              <button
                key={chapter.id}
                onClick={() => handleSelectRoute(chapter.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white/[0.12] text-white border border-white/[0.12] shadow-sm'
                    : 'text-synq-muted hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-accent-cyan font-bold' : 'text-synq-dim'}`}>
                  {chapter.num}
                </span>
                <span>{chapter.label}</span>
                {chapter.id === 'matrix' && (
                  <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-surface-200 text-accent-lime">
                    17N
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSelectRoute('engage')}
            className={`group relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md active:scale-95 ${
              currentRoute === 'engage'
                ? 'bg-accent-lime text-background-deep font-bold shadow-[0_0_25px_rgba(204,255,0,0.3)]'
                : 'bg-accent-cyan hover:bg-[#33F3FF] text-background-deep shadow-[0_0_20px_rgba(0,240,255,0.25)]'
            }`}
          >
            <span>Start a Synq</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-synq-muted hover:text-white rounded-xl hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-background-deep/98 backdrop-blur-2xl border-b border-surface-border px-6 py-8 min-h-[calc(100vh-65px)] flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-synq-dim mb-4">
              Ecosystem Navigation Chapters
            </div>

            {navChapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => handleSelectRoute(chapter.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between border ${
                  currentRoute === chapter.id
                    ? 'bg-white/[0.08] text-white border-accent-cyan/40 shadow-sm'
                    : 'text-synq-muted hover:text-white border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent-cyan">
                    {chapter.num}
                  </span>
                  <span>{chapter.label}</span>
                </div>
                {chapter.id === 'matrix' && (
                  <span className="text-xs font-mono text-accent-lime">17 NODES →</span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => handleSelectRoute('engage')}
              className="w-full py-3.5 rounded-xl text-center text-sm font-bold bg-accent-cyan text-background-deep shadow-lg"
            >
              Start a Synq (Friction Intake)
            </button>
            <div className="text-center font-mono text-[11px] text-synq-dim">
              72-Hour Rapid Diagnostic • Institutional NDA Protected
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
