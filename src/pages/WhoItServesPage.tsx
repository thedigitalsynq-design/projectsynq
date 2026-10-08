import React from 'react';
import { EntertainmentEcosystem } from '../components/EntertainmentEcosystem';
import { UseCases } from '../components/UseCases';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Users, Sparkles } from 'lucide-react';

interface WhoItServesPageProps {
  onNavigate: (hash: string) => void;
  onStartSynq: () => void;
}

export const WhoItServesPage: React.FC<WhoItServesPageProps> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-background text-synq-text font-sans pt-28">
      {/* Chapter Page Header */}
      <section className="relative pb-16 border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 apple-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Users className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 04 / Stakeholder Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Who ProjectSynq Serves:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              Solutions & Real-World Use Cases
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-synq-muted leading-relaxed max-w-3xl">
            Whether you are a studio head managing stranded development slates, an OTT commissioner seeking de-risked delivery, or an investor demanding milestone escrow — see how our operating layer resolves your specific friction.
          </p>
        </div>
      </section>

      <main>
        {/* 01. Entertainment Ecosystem (17 Nodes Directory) */}
        <EntertainmentEcosystem onExploreMatrix={() => onNavigate('#matrix')} />

        {/* 02. Deep Use Cases (8 Concrete Solutions) */}
        <UseCases />

        {/* Next Chapter Progression */}
        <PageNavigationBanner
          currentPageNumber="04"
          currentPageTitle="Who We Serve"
          nextRouteHash="#matrix"
          nextPageNumber="05"
          nextPageTitle="How Stakeholders Connect: The Complete Ecosystem Atlas"
          nextPageTeaser="Dive into the 17-Stakeholder Constellation Mesh with 42 bilateral bridges, the 17x8 heat matrix, and searchable 100+ problem catalog."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
