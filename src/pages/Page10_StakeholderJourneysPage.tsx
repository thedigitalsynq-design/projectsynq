import React, { useState } from 'react';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Compass, UserCheck, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Journey {
  role: string;
  tagline: string;
  situation: string;
  problem: string;
  synqDiscovery: string;
  whatGetsConnected: string;
  myContribution: string;
  whatIReceive: string;
  finalOutcome: string;
}

const JOURNEYS: Journey[] = [
  {
    role: 'Studio Head / Producer',
    tagline: 'Unblocking stranded multi-crore development slates',
    situation: 'Managing 8 active screenplays in development, with 3 projects stalled waiting on Tier-1 talent confirmations and co-financing.',
    problem: 'Talent agents demand pay-or-play guarantees before commit; financiers demand talent attachments before funding. Complete gridlock.',
    synqDiscovery: 'ProjectSynq maps the conditional attachment window and identifies a regional PE slate fund seeking de-risked packages.',
    whatGetsConnected: 'Director Attachment ↔ Conditional Private Credit Escrow ↔ Pre-Cleared OTT Territory Distribution.',
    myContribution: 'Optioned literary rights, production infrastructure, and line-producing oversight.',
    whatIReceive: '100% financed production package with milestone liquidity and guaranteed principal photography start date.',
    finalOutcome: 'Packaging cycle compressed from 11 months to 24 days; production wraps on budget with zero legal disputes.'
  },
  {
    role: 'OTT Commissioner',
    tagline: 'Securing de-risked, culturally authentic local slates',
    situation: 'Mandated to commission 15 original Indian series annually across regional markets while curbing escalating production inflation.',
    problem: 'High default risk on independent production houses; lack of transparency on real shoot budgets and dailies progress.',
    synqDiscovery: 'ProjectSynq presents an auditable production consortium with standardized completion covenants and verified track records.',
    whatGetsConnected: 'Platform Slate Mandate ↔ Verified Line Producers ↔ Milestone-Gated Smart Escrow.',
    myContribution: 'Territory distribution license fee and platform delivery specifications.',
    whatIReceive: 'Real-time daily production telemetry, zero budget leakage, and on-schedule 4K master delivery.',
    finalOutcome: 'Zero delivery defaults, 22% lower commissioning friction, and immediate franchise renewal visibility.'
  },
  {
    role: 'Digital Creator / Showrunner',
    tagline: 'Transitioning from short-form attention to premium long-form IP',
    situation: 'Cultivating a 4M+ superfan audience with high engagement, attempting to develop a premium multi-episode web series.',
    problem: 'Traditional legacy studios treat digital creators as marketing novelties; offer predatory rights-buyout deals with zero IP ownership.',
    synqDiscovery: 'ProjectSynq identifies the creator’s proven audience conversion data and bridges them directly to an independent production studio.',
    whatGetsConnected: 'Creator Superfan Audience ↔ Independent Production House ↔ Brand Sponsor Integration.',
    myContribution: 'Proprietary IP concept, showrunner creative direction, and built-in audience conversion funnel.',
    whatIReceive: 'Retained 50% IP ownership, executive producer credit, and milestone-backed development budget.',
    finalOutcome: 'Series trends #1 in regional streaming; creator establishes standalone multi-season franchise production banner.'
  },
  {
    role: 'Private Credit / Entertainment Financier',
    tagline: 'Deploying structured capital with ironclad escrow governance',
    situation: 'Underwriting slate debt facilities with a mandate for predictable 16–22% IRR while avoiding equity box-office downside.',
    problem: 'Opaque production cash burn, diverted funds, and multi-year legal delays when producers default on bank loans.',
    synqDiscovery: 'ProjectSynq deploys an Inter-Node Escrow Bridge where drawn funds are gated strictly by verified completion milestones.',
    whatGetsConnected: 'Financier Capital Tranche ↔ Audited Production Escrow ↔ OTT Presale Recoupment Waterfall.',
    myContribution: 'Senior secured debt tranche and structured slate credit facility.',
    whatIReceive: 'First-priority recoupment security, real-time banking ledger visibility, and zero diversion risk.',
    finalOutcome: '100% capital returned on schedule with full yield; facility re-invested into consecutive 3-project slate.'
  }
];

export const Page10_StakeholderJourneysPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);
  const activeJourney = JOURNEYS[selectedRoleIndex] || JOURNEYS[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Compass className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 10 / Personal Stakeholder Experience</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Stakeholder Journeys:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              From Friction to Verified Value
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            This is where abstract ecosystem engineering becomes personally concrete. Select your institutional role below to trace your exact journey through ProjectSynq.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {JOURNEYS.map((j, idx) => {
            const isSelected = selectedRoleIndex === idx;
            return (
              <button
                key={j.role}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-sky-950/80 border-accent-cyan text-white shadow-md'
                    : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[10px] font-mono text-accent-cyan block mb-1">
                  ROLE 0{idx + 1}
                </span>
                <span className="font-bold font-sans text-sm block">
                  {j.role}
                </span>
              </button>
            );
          })}
        </div>

        {/* Journey Card */}
        <div className="clean-card p-8 sm:p-14 mb-16">
          <div className="pb-8 border-b border-sky-500/15">
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider block mb-1">
              PERSONA JOURNEY BREAKDOWN
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white">
              {activeJourney.role}
            </h2>
            <p className="mt-2 text-base text-zinc-300 font-light italic">
              "{activeJourney.tagline}"
            </p>
          </div>

          {/* 7-Step Journey Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">1. My Starting Reality</span>
              <p className="text-sm text-zinc-200 font-light leading-relaxed">{activeJourney.situation}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-rose-400 uppercase tracking-wider block">2. The Friction Barrier</span>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">{activeJourney.problem}</p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-950/30 border border-sky-500/20 space-y-2">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">3. ProjectSynq Diagnosis</span>
              <p className="text-sm text-sky-200 font-light leading-relaxed">{activeJourney.synqDiscovery}</p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-950/30 border border-sky-500/20 space-y-2">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">4. What Gets Connected</span>
              <p className="text-sm text-sky-200 font-light leading-relaxed">{activeJourney.whatGetsConnected}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">5. What I Contribute</span>
              <p className="text-sm text-zinc-200 font-light leading-relaxed">{activeJourney.myContribution}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">6. What I Receive</span>
              <p className="text-sm text-zinc-200 font-light leading-relaxed">{activeJourney.whatIReceive}</p>
            </div>

            <div className="md:col-span-2 p-6 rounded-2xl bg-sky-950/50 border border-accent-cyan/40 space-y-2">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider font-bold block">7. The Final Unlocked Outcome</span>
              <p className="text-base text-white font-medium leading-relaxed">{activeJourney.finalOutcome}</p>
            </div>
          </div>
        </div>

        {/* Proceed to Chapter 11 */}
        <PageNavigationBanner
          currentPageNumber="10"
          currentPageTitle="Stakeholder Journeys"
          nextRouteHash="#lifecycle"
          nextPageNumber="11"
          nextPageTitle="Project Lifecycle: From Signal to Completed Loop"
          nextPageDescription="Trace how a real project emerges, packages, finances, executes, and returns value through the invariant lifecycle."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
