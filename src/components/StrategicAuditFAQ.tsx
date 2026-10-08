import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Zap, Scale, Lock, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  proofMetric: string;
}

export const StrategicAuditFAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Governance & Neutrality',
      question: 'How does ProjectSynq maintain strict neutrality between competing counterparties?',
      answer: 'We never represent a single party, hold equity in production slates, or accept exclusive agency mandates. Neutrality is our institutional moat. Both counterparties enter the bridge knowing ProjectSynq has zero financial interest in favoring either side — our sole objective is removing the impedance and completing the flow.',
      proofMetric: '100% Non-Adversarial Mandate'
    },
    {
      id: 'faq-2',
      category: 'Commercial Model',
      question: 'Who pays for the intervention, and how is compensation structured?',
      answer: 'Engagements are structured around discrete, milestone-gated outcomes rather than open-ended consulting hours. Depending on the ecosystem structure, fees are either shared bilaterally by counterparties benefiting from unlocked capital, or funded as a fractional escrow fee upon successful transaction settlement.',
      proofMetric: 'Zero Hourly Billing Drag'
    },
    {
      id: 'faq-3',
      category: 'Confidentiality & IP',
      question: 'How does ProjectSynq safeguard proprietary IP, fee terms, and unreleased scripts?',
      answer: 'All bilateral diagnostics execute under strict institutional non-disclosure agreements with isolated data corridors. We do not aggregate raw trade secrets or store unreleased scripts; we only extract structural metadata regarding where friction occurs to train Inter-Node Intelligence™.',
      proofMetric: 'Zero IP Exposure Guarantee'
    },
    {
      id: 'faq-4',
      category: 'Platform vs Operating Layer',
      question: 'Why can’t existing project management or workflow software solve this?',
      answer: 'Software assumes alignment; ecosystems fail due to distrust, misaligned incentives, and defensive contracting. Dashboards cannot negotiate a back-end profit waterfall or mediate an actor attachment conflict. ProjectSynq combines process-driven protocols with active human mediation that software alone cannot achieve.',
      proofMetric: 'Solves Human & Structural Gridlock'
    },
    {
      id: 'faq-5',
      category: 'Deployment Velocity',
      question: 'How fast can a ProjectSynq intervention diagnose friction and unlock flow?',
      answer: 'Initial stakeholder topology mapping and root-cause friction diagnosis (WHAT → WHY) complete within 72 hours. Bespoke bilateral bridge design and escrow protocols deploy within 14 business days, converting multi-month gridlocks into active execution.',
      proofMetric: '72-Hour Rapid Diagnostic'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-accent-cyan uppercase tracking-wider mb-4">
            Institutional Due Diligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Strategic Governance & Architecture FAQ.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-synq-muted leading-relaxed">
            Direct answers to the core governance, financial, and operational questions institutional leaders evaluate before engaging the connective layer.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-surface-100/90 border-accent-cyan/60 shadow-xl shadow-accent-cyan/10 ring-1 ring-accent-cyan/30'
                    : 'bg-surface-100/30 border-white/5 hover:border-white/20 hover:bg-surface-100/50'
                }`}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-accent-cyan text-background-deep rotate-180' : 'bg-surface-200 text-synq-muted'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-white/5 animate-in fade-in duration-300 space-y-4">
                    <p className="text-xs sm:text-sm text-synq-muted leading-relaxed mt-4">
                      {faq.answer}
                    </p>

                    <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-accent-cyan">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Institutional Standard: {faq.proofMetric}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
