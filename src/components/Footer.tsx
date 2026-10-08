import React from 'react';
import { ArrowRight, Zap, ExternalLink } from 'lucide-react';

interface FooterProps {
  onStartSynq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartSynq }) => {
  const footerLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'The Model', href: '#model' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Ecosystems', href: '#ecosystems' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'About', href: '#about' },
    { label: 'Engage', href: '#engage' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-background border-t border-surface-border overflow-hidden">
      {/* Final Brand Statement Section (Section 38) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center border-b border-surface-border">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-accent-cyan uppercase tracking-wider">
            Final Brand Statement
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            ProjectSynq
          </h2>
          <div className="text-xl sm:text-2xl font-semibold text-accent-cyan tracking-wide">
            The Connective Layer
          </div>

          <blockquote className="py-6 text-lg sm:text-xl md:text-2xl text-synq-muted font-normal leading-relaxed italic max-w-2xl mx-auto">
            "Assess the system.<br />
            Find the gap.<br />
            Build the bridge.<br />
            Move the flow.<br />
            Close the loop.<br />
            Learn.<br />
            Recycle.<br />
            <span className="text-white font-semibold not-italic">Synq again.</span>"
          </blockquote>

          <div className="pt-2">
            <button
              onClick={onStartSynq}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all shadow-[0_0_35px_rgba(0,240,255,0.35)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] active:scale-[0.98]"
            >
              <span>Start a Synq</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Bottom (Section 28) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                ProjectSyn<span className="text-accent-cyan">q</span>
              </span>
              <span className="text-xs font-mono text-synq-dim px-2 py-0.5 rounded bg-surface-100 border border-white/5">
                The Connective Layer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-synq-muted leading-relaxed max-w-sm">
              We don't own the nodes. We make them work in sync.
            </p>
            <div className="text-[11px] font-mono text-synq-dim pt-2">
              Category: Inter-Node Orchestration • Asset-Light • Trust-Based
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-synq-dim mb-3">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-xs sm:text-sm text-synq-muted hover:text-white transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal & Social */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-synq-dim mb-3">
              Governance & Social
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-synq-muted hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-synq-dim" />
              </a>
              <a
                href="#engage"
                onClick={() => handleNavClick('#engage')}
                className="block text-synq-muted hover:text-white transition-colors"
              >
                Direct Intake Desk
              </a>
              <span className="block text-synq-dim text-xs">
                Privacy Framework & Confidentiality Protocols
              </span>
              <span className="block text-synq-dim text-xs">
                Institutional Terms of Engagement
              </span>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-12 pt-8 border-t border-surface-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-synq-dim">
          <div>
            © {new Date().getFullYear()} ProjectSynq. All rights reserved. Inter-Node Intelligence™.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF]" />
            <span>Systems Online • Zero Friction</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
