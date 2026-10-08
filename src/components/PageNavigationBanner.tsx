import React from 'react';
import { ArrowRight, ChevronRight, Compass } from 'lucide-react';

interface PageNavigationBannerProps {
  currentPageNumber: string;
  currentPageTitle: string;
  nextRouteHash: string;
  nextPageNumber: string;
  nextPageTitle: string;
  nextPageTeaser: string;
  onNavigate: (hash: string) => void;
}

export const PageNavigationBanner: React.FC<PageNavigationBannerProps> = ({
  currentPageNumber,
  currentPageTitle,
  nextRouteHash,
  nextPageNumber,
  nextPageTitle,
  nextPageTeaser,
  onNavigate
}) => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-transparent to-surface-100/30 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="apple-bento-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-surface-100/90 via-surface-100/60 to-background-deep border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-synq-dim mb-3">
              <span>Chapter {currentPageNumber}: {currentPageTitle}</span>
              <ChevronRight className="w-3 h-3 text-synq-dim" />
              <span className="text-accent-cyan font-semibold">Next Progression</span>
            </div>

            <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-1">
              Chapter {nextPageNumber}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {nextPageTitle}
            </h3>
            <p className="mt-2 text-sm text-synq-muted max-w-xl leading-relaxed">
              {nextPageTeaser}
            </p>
          </div>

          <button
            onClick={() => onNavigate(nextRouteHash)}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm sm:text-base text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] active:scale-95 flex-shrink-0"
          >
            <span>Proceed to Chapter {nextPageNumber}</span>
            <ArrowRight className="w-4 h-4 text-background-deep" />
          </button>
        </div>
      </div>
    </section>
  );
};
