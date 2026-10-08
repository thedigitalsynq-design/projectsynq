import React from 'react';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { GitBranch, ArrowRight, CheckCircle2, RefreshCw, Zap, ShieldCheck } from 'lucide-react';

const LIFECYCLE_STAGES = [
  {
    phase: '01',
    name: 'Need / Signal Intake',
    desc: 'An unmet market demand, stranded asset, or creative opportunity is surfaced.',
    action: 'Signal evaluated against ecosystem capability inventory.'
  },
  {
    phase: '02',
    name: 'Opportunity Framing',
    desc: 'The economic and creative scope is structured into a viable commercial brief.',
    action: 'Risk contours and counterparty prerequisites defined.'
  },
  {
    phase: '03',
    name: 'Stakeholder Discovery',
    desc: 'Target nodes identified based on verified availability, reputation, and solvency.',
    action: 'Bilateral compatibility scored without predatory intermediaries.'
  },
  {
    phase: '04',
    name: 'Capability & Resource Matching',
    desc: 'Physical stages, technical crew, debt tranches, and distribution pre-aligned.',
    action: 'Rate cards, terms, and schedule locks standardized.'
  },
  {
    phase: '05',
    name: 'Project Consortium Formation',
    desc: 'A unified project entity or multi-party consortium is chartered.',
    action: 'Tripartite covenants signed under neutral governance.'
  },
  {
    phase: '06',
    name: 'Roles & Escrow Covenants Defined',
    desc: 'Milestone-gated escrow capital is locked and sign-off criteria crystallized.',
    action: 'Banking rails and audit ledgers initialized.'
  },
  {
    phase: '07',
    name: 'Coordinated Execution',
    desc: 'Production, post-production, or campaign execution runs with zero handoff drift.',
    action: 'Real-time telemetry prevents budget or schedule leakage.'
  },
  {
    phase: '08',
    name: 'Verification & Milestone Release',
    desc: 'Deliverables verified against contract specifications; liquidity triggered instantly.',
    action: 'Zero 90-day waiting cycles for suppliers or talent.'
  },
  {
    phase: '09',
    name: 'Outcome & Waterfall Settlement',
    desc: 'Content masters delivered, distribution licenses fulfilled, revenues distributed.',
    action: 'Recoupment waterfalls executed mathematically.'
  },
  {
    phase: '10',
    name: 'Ecosystem Reuse & Loop',
    desc: 'Assets, relationships, and learnings repurposed for the next slate initiative.',
    action: 'Compounding network effects strengthened.'
  }
];

export const Page11_ProjectLifecyclePage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <GitBranch className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 11 / The Project Lifecycle</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Project Lifecycle:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              From Initial Signal to Completed Loop
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            How does an abstract connection materialize into concrete execution? Follow the 10-phase invariant lifecycle that guides every ProjectSynq initiative from opportunity detection to milestone liquidity and asset reuse.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Interactive Lifecycle Timeline */}
        <div className="space-y-4 mb-16">
          {LIFECYCLE_STAGES.map((stage) => (
            <div
              key={stage.phase}
              className="clean-card p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-xl bg-sky-950/50 border border-sky-500/30 text-accent-cyan flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">
                  {stage.phase}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    {stage.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-300 font-light">
                    {stage.desc}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-zinc-400 flex-shrink-0 md:max-w-xs">
                <span className="text-[10px] text-accent-cyan uppercase tracking-wider block mb-0.5">
                  Core Operation
                </span>
                <span>{stage.action}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Proceed to Chapter 12 */}
        <PageNavigationBanner
          currentPageNumber="11"
          currentPageTitle="Project Lifecycle"
          nextRouteHash="#projects"
          nextPageNumber="12"
          nextPageTitle="Projects & Use Cases: Institutional Case Studies"
          nextPageDescription="Review 8 real-world production cases across slate financing, OTT packaging, creator crossovers, and music licensing."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
