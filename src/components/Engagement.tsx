import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Send, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';

interface EngagementProps {
  onExploreModel?: () => void;
}

export const Engagement: React.FC<EngagementProps> = ({ onExploreModel }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    ecosystem: 'Entertainment & Media',
    problemToSolve: '',
    stakeholdersInvolved: '',
    frictionLocation: '',
    desiredOutcome: '',
    helpCategory: 'Discovery',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      role: '',
      email: '',
      ecosystem: 'Entertainment & Media',
      problemToSolve: '',
      stakeholdersInvolved: '',
      frictionLocation: '',
      desiredOutcome: '',
      helpCategory: 'Discovery',
    });
  };

  return (
    <section id="engage" className="relative py-24 md:py-32 bg-background-deep border-t border-surface-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-accent-cyan/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cinematic Headline Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/5 font-mono text-xs text-accent-cyan uppercase tracking-wider mb-4">
            17 / Immediate Action
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            What's not working between your nodes?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-synq-muted leading-relaxed">
            Let's find the gap, build the bridge and make the system move.
          </p>
        </div>

        {/* Structured "Start a Synq" Intake Terminal */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-surface-border bg-background-card/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Start a Synq</h3>
              </div>
              <p className="text-xs sm:text-sm text-synq-muted mt-1">
                Ecosystem & Friction Intake Terminal • Confidential Review
              </p>
            </div>

            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-200 text-synq-dim border border-white/5">
              Protocol: Inter-Node Intake v3.1
            </div>
          </div>

          {submitted ? (
            /* Post-Submission State */
            <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
              <div className="w-16 h-16 rounded-full bg-accent-cyan/20 border border-accent-cyan flex items-center justify-center mx-auto text-accent-cyan">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Received.
                </h4>
                <p className="text-lg sm:text-xl text-accent-cyan font-medium mt-2">
                  We'll map the nodes before we talk about the solution.
                </p>
                <p className="text-xs sm:text-sm text-synq-muted max-w-lg mx-auto mt-4 leading-relaxed">
                  Our diagnostic team is auditing the stakeholders and friction vectors you provided for <strong className="text-white">{formData.organization || 'your organization'}</strong>. We will reach out within 24 hours with an initial node topology map.
                </p>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs bg-surface-200 hover:bg-surface-100 text-synq-muted hover:text-white transition-all border border-white/10"
                >
                  Submit Another Ecosystem Problem
                </button>
              </div>
            </div>
          ) : (
            /* The Intake Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Apex Slate Studios / Horizon Ventures"
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Role & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    Role / Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Managing Partner / Head of Production"
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@apexstudios.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Ecosystem & Help Category Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    Target Ecosystem *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ecosystem}
                    onChange={(e) => setFormData({ ...formData, ecosystem: e.target.value })}
                    placeholder="e.g. Indian Entertainment, Sports Rights, Music IP"
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    I need help with: *
                  </label>
                  <select
                    value={formData.helpCategory}
                    onChange={(e) => setFormData({ ...formData, helpCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white transition-colors cursor-pointer"
                  >
                    <option value="Discovery">Discovery (Finding people, assets, capital)</option>
                    <option value="Trust">Trust (Verification, escrow, counterparty confidence)</option>
                    <option value="Money">Money (Financing, payments, recoupment waterfalls)</option>
                    <option value="Rights">Rights (Chain-of-title, licensing, royalties)</option>
                    <option value="Distribution">Distribution (Release windows, platforms, reach)</option>
                    <option value="Operations">Operations (Execution, handoffs, deliverables)</option>
                    <option value="Data">Data (Analytics sharing, valuation benchmarks)</option>
                    <option value="Ecosystem fragmentation">Ecosystem Fragmentation (Languages, regulations)</option>
                    <option value="Other">Other Inter-Node Friction</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Deep Diagnostic Inquiries */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    What are you trying to make work? *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.problemToSolve}
                    onChange={(e) => setFormData({ ...formData, problemToSolve: e.target.value })}
                    placeholder="Describe the initiative, transaction, or collaboration that is currently stalling..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                      Which stakeholders are involved? *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.stakeholdersInvolved}
                      onChange={(e) => setFormData({ ...formData, stakeholdersInvolved: e.target.value })}
                      placeholder="e.g. Lead Actor, Studio Financier, OTT Platform"
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                      Where is the friction? *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.frictionLocation}
                      onChange={(e) => setFormData({ ...formData, frictionLocation: e.target.value })}
                      placeholder="e.g. Rights ownership dispute, delayed milestone sign-off"
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-synq-dim mb-2">
                    What outcome are you trying to achieve? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.desiredOutcome}
                    onChange={(e) => setFormData({ ...formData, desiredOutcome: e.target.value })}
                    placeholder="e.g. Execute binding agreement within 14 days and begin production"
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/70 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-synq-dim transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-synq-dim">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                  <span>Strict Non-Disclosure & Bilateral Confidentiality</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-background-deep bg-accent-cyan hover:bg-[#33F3FF] transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit the Problem</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
