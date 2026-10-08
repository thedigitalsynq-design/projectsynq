import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navChapters: { id: PageRoute; label: string; num: string }[] = [
    { id: 'overview', label: 'Overview', num: '01' },
    { id: 'why', label: 'Friction', num: '02' },
    { id: 'how-it-works', label: 'Mechanism', num: '03' },
    { id: 'stakeholders', label: 'Ecosystem', num: '04' },
    { id: 'matrix', label: 'Atlas', num: '05' },
    { id: 'value', label: 'Economics', num: '06' },
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
          ? 'py-3.5 bg-[#07090E]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.65)]'
          : 'py-5 bg-[#07090E]/40 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <button
          onClick={() => handleSelectRoute('overview')}
          className="flex items-center gap-3 group focus:outline-none text-left"
          aria-label="ProjectSynq Home"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-baseline">
            <span>ProjectSyn</span>
            <span className="relative inline-flex items-center text-accent-cyan">
              q
              <span className="absolute -bottom-0.5 right-0 w-2.5 h-1.5 border-b-2 border-r-2 border-accent-cyan rounded-br-full opacity-90 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-accent-cyan opacity-80" />
            </span>
          </span>
          <span className="hidden xl:inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-synq-dim px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="w-1 h-1 rounded-full bg-accent-cyan" />
            <span>The Connective Layer</span>
          </span>
        </button>

        {/* Apple Cupertino Island Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0D121D]/80 border border-white/[0.09] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
          {navChapters.map((chapter) => {
            const isActive = currentRoute === chapter.id;

            return (
              <button
                key={chapter.id}
                onClick={() => handleSelectRoute(chapter.id)}
                className={`group relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-white/[0.12] text-white border border-white/[0.16] shadow-[0_2px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {/* Active Indicator Micro-Dot */}
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF]" />
                ) : (
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {chapter.num}
                  </span>
                )}

                <span className="tracking-tight">{chapter.label}</span>

                {/* 17 Nodes Badge on Atlas */}
                {chapter.id === 'matrix' && (
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 leading-none">
                    17N
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSelectRoute('engage')}
            className={`group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 active:scale-95 whitespace-nowrap ${
              currentRoute === 'engage'
                ? 'bg-accent-cyan text-background-deep shadow-[0_0_30px_rgba(0,240,255,0.4)]'
                : 'bg-gradient-to-r from-accent-cyan to-[#2EE4FF] text-background-deep shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:scale-[1.02]'
            }`}
          >
            <span>Start a Synq</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Apple-Grade Full-Screen Blur) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#07090E]/98 backdrop-blur-3xl border-b border-white/[0.08] px-6 py-8 min-h-[calc(100vh-60px)] flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-3 px-2">
              Ecosystem Chapters
            </div>

            {navChapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => handleSelectRoute(chapter.id)}
                className={`w-full text-left py-3.5 px-4 rounded-2xl text-base font-bold transition-all flex items-center justify-between border ${
                  currentRoute === chapter.id
                    ? 'bg-white/[0.1] text-white border-accent-cyan/40 shadow-sm'
                    : 'text-zinc-400 hover:text-white border-transparent hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent-cyan">
                    {chapter.num}
                  </span>
                  <span>{chapter.label}</span>
                </div>
                {chapter.id === 'matrix' && (
                  <span className="text-xs font-mono text-accent-cyan font-bold">17 NODES →</span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <button
              onClick={() => handleSelectRoute('engage')}
              className="w-full py-4 rounded-full text-center text-sm font-bold bg-gradient-to-r from-accent-cyan to-[#2EE4FF] text-background-deep shadow-xl"
            >
              Start a Synq (72h Diagnostic)
            </button>
            <div className="text-center font-mono text-[11px] text-zinc-500">
              Institutional Non-Disclosure Guaranteed • 0% Equity Drag
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
