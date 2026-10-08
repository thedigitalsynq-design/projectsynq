import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

interface NavbarProps {
  onStartSynqClick?: () => void;
  onNavigateMatrix?: () => void;
  currentView?: 'home' | 'matrix';
}

export const Navbar: React.FC<NavbarProps> = ({ onStartSynqClick, onNavigateMatrix, currentView = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'The Model', href: '#model' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Ecosystems', href: '#ecosystems' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'About', href: '#about' },
    { label: 'Engage', href: '#engage' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (currentView === 'matrix') {
      window.location.hash = href;
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-background-deep/85 backdrop-blur-xl border-b border-surface-border shadow-lg shadow-black/40'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="ProjectSynq Home"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-baseline">
            <span>ProjectSyn</span>
            <span className="relative inline-flex items-center text-accent-cyan">
              q
              {/* Subtle connective loop motif for 'q' */}
              <span className="absolute -bottom-0.5 right-0 w-2.5 h-1.5 border-b-2 border-r-2 border-accent-cyan rounded-br-full opacity-90 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-accent-lime opacity-80" />
            </span>
          </span>
          <span className="hidden xl:inline-block ml-2 text-[10px] uppercase font-mono tracking-widest text-synq-dim px-2 py-0.5 rounded border border-white/5 bg-surface-100/60">
            The Connective Layer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-synq-muted hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {link.label}
            </button>
          ))}

          {/* Dedicated Stakeholder Matrix Nav Button */}
          <button
            onClick={() => {
              if (onNavigateMatrix) onNavigateMatrix();
              else {
                window.location.hash = '#matrix';
                window.dispatchEvent(new HashChangeEvent('hashchange'));
              }
            }}
            className={`ml-1 px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              currentView === 'matrix'
                ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 shadow-sm'
                : 'text-synq-text hover:text-accent-cyan hover:bg-white/[0.04] border border-white/5'
            }`}
          >
            <span>Stakeholder Matrix</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-200 text-accent-lime font-bold">
              12L
            </span>
          </button>
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onStartSynqClick) {
                onStartSynqClick();
              } else {
                handleNavClick('#engage');
              }
            }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] active:scale-[0.98]"
          >
            <span>Start a Synq</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-synq-muted hover:text-white rounded-lg hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-background-deep/98 backdrop-blur-2xl border-b border-surface-border px-6 py-8 min-h-[calc(100vh-65px)] flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-synq-dim mb-4">
              Navigation Index
            </div>
            
            {/* Mobile Matrix Direct Link */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateMatrix) onNavigateMatrix();
                else {
                  window.location.hash = '#matrix';
                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                }
              }}
              className="w-full text-left py-3 text-lg font-bold text-accent-cyan border-b border-accent-cyan/20 transition-colors flex items-center justify-between"
            >
              <span>Stakeholder Matrix (12 Layers)</span>
              <span className="text-xs font-mono text-accent-lime">100+ NODES →</span>
            </button>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-3 text-lg font-medium text-synq-text hover:text-accent-cyan border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-synq-dim">→</span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-surface-border space-y-4">
            <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5">
              <div className="text-xs font-mono text-accent-cyan flex items-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5" />
                Inter-Node Orchestration
              </div>
              <p className="text-xs text-synq-muted leading-relaxed">
                We don't own the nodes. We make them work in sync.
              </p>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onStartSynqClick) onStartSynqClick();
                else handleNavClick('#engage');
              }}
              className="w-full py-3.5 px-4 rounded-xl font-semibold text-center text-sm text-background-deep bg-accent-cyan hover:bg-[#33F3FF] shadow-lg shadow-accent-cyan/20"
            >
              Start a Synq
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
