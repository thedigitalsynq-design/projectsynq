import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface PageNavigationBannerProps {
  currentPageNumber: string;
  currentPageTitle: string;
  nextRouteHash: string;
  nextPageNumber: string;
  nextPageTitle: string;
  nextPageTeaser?: string;
  nextPageDescription?: string;
  onNavigate?: (hash: string) => void;
}

export const PageNavigationBanner: React.FC<PageNavigationBannerProps> = ({
  currentPageNumber,
  currentPageTitle,
  nextRouteHash,
  nextPageNumber,
  nextPageTitle,
  nextPageTeaser,
  nextPageDescription,
  onNavigate
}) => {
  const teaser = nextPageTeaser || nextPageDescription || 'Proceed to the next chapter of the ProjectSynq operational architecture.';
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate(nextRouteHash);
    } else {
      window.location.hash = nextRouteHash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <section className="relative py-20 border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clean-card p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-3">
              <span>Chapter {currentPageNumber}: {currentPageTitle}</span>
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              <span className="text-accent-cyan font-semibold">Next Chapter</span>
            </div>

            <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-1">
              Chapter {nextPageNumber}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {nextPageTitle}
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl leading-relaxed">
              {teaser}
            </p>
          </div>

          <button
            onClick={handleNavigate}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-background-deep bg-gradient-to-r from-accent-cyan to-[#2EE4FF] hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all active:scale-95 flex-shrink-0"
          >
            <span>Proceed to Chapter {nextPageNumber}</span>
            <ArrowRight className="w-4 h-4 text-background-deep" />
          </button>
        </div>
      </div>
    </section>
  );
};
