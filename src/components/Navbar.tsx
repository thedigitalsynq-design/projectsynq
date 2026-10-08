import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronDown, Compass, Layers, GitBranch, Briefcase, TrendingUp, Database, Send, ShieldCheck } from 'lucide-react';

export type PageRoute =
  | 'overview'
  | 'ecosystem'
  | 'stakeholders'
  | 'problems'
  | 'bottlenecks'
  | 'silos'
  | 'opportunities'
  | 'projectsynq'
  | 'how-it-works'
  | 'journeys'
  | 'lifecycle'
  | 'projects'
  | 'outcomes'
  | 'intelligence'
  | 'participate'
  | 'about'
  | 'why'
  | 'matrix'
  | 'value'
  | 'engage';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const ALL_16_CHAPTERS: { id: PageRoute; num: string; title: string; phase: string }[] = [
  { id: 'overview', num: '01', title: 'The Big Picture', phase: 'Phase I: The Trapped Ecosystem' },
  { id: 'ecosystem', num: '02', title: 'The 12-Layer Landscape', phase: 'Phase I: The Trapped Ecosystem' },
  { id: 'stakeholders', num: '03', title: 'Stakeholder Directory', phase: 'Phase I: The Trapped Ecosystem' },
  { id: 'problems', num: '04', title: 'Systemic Friction Taxonomy', phase: 'Phase I: The Trapped Ecosystem' },
  { id: 'bottlenecks', num: '05', title: 'Structural Bottlenecks', phase: 'Phase I: The Trapped Ecosystem' },
  { id: 'silos', num: '06', title: 'Silos & Connections', phase: 'Phase I: The Trapped Ecosystem' },
  { id: 'opportunities', num: '07', title: '15 High-Yield Whitespaces', phase: 'Phase I: The Trapped Ecosystem' },
  { id: 'projectsynq', num: '08', title: 'ProjectSynq Defined', phase: 'Phase II: The Connective Mechanism' },
  { id: 'how-it-works', num: '09', title: '9-Stage Operating Cadence', phase: 'Phase II: The Connective Mechanism' },
  { id: 'journeys', num: '10', title: 'Stakeholder Journeys', phase: 'Phase II: The Connective Mechanism' },
  { id: 'lifecycle', num: '11', title: 'Project Lifecycle', phase: 'Phase II: The Connective Mechanism' },
  { id: 'projects', num: '12', title: 'Projects & Use Cases', phase: 'Phase II: The Connective Mechanism' },
  { id: 'outcomes', num: '13', title: 'Value & Outcomes', phase: 'Phase III: Value & Participation' },
  { id: 'intelligence', num: '14', title: 'Inter-Node Intelligence™', phase: 'Phase III: Value & Participation' },
  { id: 'participate', num: '15', title: 'Participate & Intake', phase: 'Phase III: Value & Participation' },
  { id: 'about', num: '16', title: 'About & Governance', phase: 'Phase III: Value & Participation' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indexDropdownOpen, setIndexDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary desktop bookmarks
  const desktopBookmarks: { id: PageRoute; label: string; num: string }[] = [
    { id: 'overview', label: 'Overview', num: '01' },
    { id: 'ecosystem', label: 'Ecosystem', num: '02' },
    { id: 'problems', label: 'Problems', num: '04' },
    { id: 'silos', label: 'Silos', num: '06' },
    { id: 'projectsynq', label: 'ProjectSynq', num: '08' },
    { id: 'how-it-works', label: 'Mechanism', num: '09' },
    { id: 'projects', label: 'Projects', num: '12' },
    { id: 'outcomes', label: 'Outcomes', num: '13' },
  ];

  const handleSelectRoute = (route: PageRoute) => {
    setMobileMenuOpen(false);
    setIndexDropdownOpen(false);
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#030914]/85 backdrop-blur-2xl border-b border-sky-500/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
          : 'py-5 bg-[#030914]/50 backdrop-blur-md border-b border-sky-500/10'
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
          <span className="hidden xl:inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-sky-300/80 px-2.5 py-1 rounded-full border border-sky-500/20 bg-sky-950/30">
            <span className="w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_6px_#00F0FF]" />
            <span>The Connective Layer</span>
          </span>
        </button>

        {/* Apple Cupertino Island Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#071629]/80 border border-sky-400/20 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.4)]">
          {desktopBookmarks.map((chapter) => {
            const isActive = currentRoute === chapter.id;

            return (
              <button
                key={chapter.id}
                onClick={() => handleSelectRoute(chapter.id)}
                className={`group relative px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-white/[0.12] text-white border border-white/[0.16] shadow-[0_2px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF]" />
                ) : (
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-300">
                    {chapter.num}
                  </span>
                )}
                <span className="tracking-tight">{chapter.label}</span>
              </button>
            );
          })}

          {/* All 16 Chapters Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setIndexDropdownOpen(!indexDropdownOpen)}
              className="px-3 py-1.5 text-xs font-mono font-bold rounded-full bg-sky-950/50 hover:bg-sky-900/60 border border-sky-400/30 text-accent-cyan flex items-center gap-1.5 transition-all"
            >
              <span>Index (16Ch)</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${indexDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {indexDropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-80 max-h-[460px] overflow-y-auto clean-card p-3 shadow-2xl border border-sky-500/25 z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-b border-sky-500/15">
                  16-Chapter Ecosystem Master Index
                </div>
                <div className="space-y-1 py-2">
                  {ALL_16_CHAPTERS.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => handleSelectRoute(ch.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                        currentRoute === ch.id
                          ? 'bg-sky-950/80 text-white font-bold border border-accent-cyan/40'
                          : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] text-accent-cyan">{ch.num}</span>
                        <span>{ch.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Primary CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSelectRoute('participate')}
            className={`group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 active:scale-95 whitespace-nowrap ${
              currentRoute === 'participate'
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#030914]/98 backdrop-blur-3xl border-b border-sky-500/20 px-6 py-6 min-h-[calc(100vh-60px)] overflow-y-auto flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 px-2">
              16-Chapter Ecosystem Storyline
            </div>

            <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
              {ALL_16_CHAPTERS.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => handleSelectRoute(chapter.id)}
                  className={`w-full text-left py-2.5 px-3.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between border ${
                    currentRoute === chapter.id
                      ? 'bg-sky-950/80 text-white border-accent-cyan font-bold'
                      : 'text-zinc-400 hover:text-white border-transparent hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent-cyan">{chapter.num}</span>
                    <span>{chapter.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-sky-500/15 space-y-3">
            <button
              onClick={() => handleSelectRoute('participate')}
              className="w-full py-4 rounded-full text-center text-sm font-bold bg-gradient-to-r from-accent-cyan to-[#2EE4FF] text-background-deep shadow-xl"
            >
              Start a Synq (72h Diagnostic Brief)
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
