import React, { useState } from 'react';
import { PageNavigationBanner } from '../components/PageNavigationBanner';
import { Footer } from '../components/Footer';
import { Cpu, ArrowRight, CheckCircle2, RefreshCw, Compass, ShieldCheck } from 'lucide-react';

interface CadenceStep {
  step: string;
  name: string;
  objective: string;
  actions: string[];
  output: string;
}

const NINE_CADENCE_STEPS: CadenceStep[] = [
  {
    step: '01',
    name: 'DISCOVER',
    objective: 'Surface unindexed assets, stranded slates, and latent ecosystem capacity.',
    actions: ['Scan fragmented registries, agency slates, and catalog vaults', 'Index dark stage downtime and unutilized render power', 'Catalog dormant literary and regional franchise IP'],
    output: 'Ecosystem Opportunity & Asset Dossier'
  },
  {
    step: '02',
    name: 'UNDERSTAND',
    objective: 'Decode the unstated commercial and creative incentives of both counterparties.',
    actions: ['Audit true risk tolerances, solvency constraints, and credit requirements', 'Map historical performance metrics and creative red-lines', 'Establish governance and milestone expectations'],
    output: 'Bilateral Counterparty Diagnostic Profile'
  },
  {
    step: '03',
    name: 'MAP',
    objective: 'Construct the architectural dependency graph between all prospective nodes.',
    actions: ['Diagram data, asset, cash, and approval handoffs', 'Locate the exact impedance points before agreements are circulated', 'Establish mathematical milestone gates'],
    output: 'Node Interaction & Dependency Map'
  },
  {
    step: '04',
    name: 'CONNECT',
    objective: 'Introduce qualified counterparties under institutional neutrality covenants.',
    actions: ['Execute standardized bilateral NDA & mutual discovery covenants', 'Remove predatory gatekeeper markups', 'Establish direct, transparent communication channels'],
    output: 'Neutral Bilateral Engagement Bridge'
  },
  {
    step: '05',
    name: 'MATCH',
    objective: 'Synthesize optimal capability, capital, and timeline parity.',
    actions: ['Harmonize rate cards and back-end profit participation models', 'Verify schedule locks and mutual commitment windows', 'Draft pre-cleared standard term sheets'],
    output: 'Executable Project Alignment Package'
  },
  {
    step: '06',
    name: 'ORCHESTRATE',
    objective: 'Deploy neutral operational and escrow rails.',
    actions: ['Lock milestone-gated escrow liquidity', 'Institute clear sign-off covenants for intermediate deliverables', 'Synchronize cross-functional production schedules'],
    output: 'Binding Multi-Party Execution Protocol'
  },
  {
    step: '07',
    name: 'EXECUTE',
    objective: 'Guide the live interaction through its operational lifecycle with zero drift.',
    actions: ['Monitor real-time delivery milestones and dailies', 'Trigger automated milestone disbursements upon verified sign-off', 'Resolve unexpected technical or timeline deviations in hours'],
    output: 'Live Verified Project Execution'
  },
  {
    step: '08',
    name: 'MEASURE',
    objective: 'Quantify exact cost savings, velocity gains, and yield reclaimed.',
    actions: ['Audit total budget variance against baseline', 'Verify final royalty waterfalls and secondary window revenue', 'Document counterparty execution reliability score'],
    output: 'Institutional Value & Yield Audit'
  },
  {
    step: '09',
    name: 'LEARN & RECONNECT',
    objective: 'Compound operational intelligence into the ecosystem graph.',
    actions: ['Feed delivery telemetry into Inter-Node Intelligence™', 'Identify downstream transmedia or sequel opportunities', 'Re-deploy freed capacity into new ecosystem nodes'],
    output: 'Compounding Ecosystem Flywheel Loop'
  }
];

export const Page09_HowItWorksPage: React.FC<{ onNavigate: (hash: string) => void; onStartSynq: () => void }> = ({ onNavigate, onStartSynq }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = NINE_CADENCE_STEPS[activeStepIndex] || NINE_CADENCE_STEPS[0];

  return (
    <div className="relative min-h-screen bg-transparent text-synq-text font-sans">
      {/* Chapter Page Header */}
      <section className="relative pt-36 pb-20 border-b border-sky-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 clean-pill px-3.5 py-1.5 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-5">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Chapter 09 / Operating Mechanism</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            How It Works:{' '}
            <span className="block text-gradient-cyan mt-1 sm:mt-2">
              The 9-Stage Operational Cadence
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            We operate through rigorous, repeatable systems engineering. Follow the 9-stage invariant sequence from discovery through escrow, live execution, and compounding flywheel re-engagement.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 mb-12">
          {NINE_CADENCE_STEPS.map((s, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all font-mono text-xs ${
                  isSelected
                    ? 'bg-sky-950/80 border-accent-cyan text-white shadow-md'
                    : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[10px] text-accent-cyan block mb-0.5">{s.step}</span>
                <span className="font-semibold block truncate">{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Step Profile */}
        <div className="clean-card p-8 sm:p-14 mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-8 border-b border-sky-500/15">
            <div>
              <div className="font-mono text-xs text-accent-cyan mb-2">
                STAGE {activeStep.step} OF 09
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal text-white">
                {activeStep.name}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-zinc-300 font-light max-w-2xl leading-relaxed">
                {activeStep.objective}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 text-accent-cyan font-mono text-xs flex-shrink-0">
              <span className="text-zinc-500 block text-[10px] uppercase">Concrete Stage Deliverable</span>
              <span className="font-bold text-sm block mt-0.5 text-white">{activeStep.output}</span>
            </div>
          </div>

          <div className="pt-8">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-4">
              Core Operational Directives & Workflows
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeStep.actions.map((act, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-zinc-200 leading-relaxed flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proceed to Chapter 10 */}
        <PageNavigationBanner
          currentPageNumber="09"
          currentPageTitle="How It Works"
          nextRouteHash="#journeys"
          nextPageNumber="10"
          nextPageTitle="Stakeholder Journeys: Step-by-Step Experience"
          nextPageDescription="See how this 9-stage cadence translates into the day-to-day experience of Studio Heads, OTT Commissioners, Creators, and Investors."
          onNavigate={onNavigate}
        />
      </main>

      <Footer onStartSynq={onStartSynq} />
    </div>
  );
};
