import React, { useState } from 'react';
import { Gauge, Brain, ShieldCheck, Repeat, Expand, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Outcomes: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<number>(0);

  const bentoItems = [
    {
      id: 0,
      title: 'VELOCITY',
      tagline: '4x Production & Capital Flow',
      metric: '72h vs. 90 Days',
      metricLabel: 'Diagnostic-to-Bridge SLA',
      icon: Gauge,
      colSpan: 'lg:col-span-8',
      desc: 'Compressing bilateral deal friction, diligence loops, and payment escrow from multi-month stalemates into active real-time transaction pipelines.',
      highlight: true
    },
    {
      id: 1,
      title: 'INTELLIGENCE',
      tagline: 'Compounding Institutional Data',
      metric: '100+ Friction Vectors',
      metricLabel: 'Continuously Indexed',
      icon: Brain,
      colSpan: 'lg:col-span-4',
      desc: 'Every successful bridge feeds Inter-Node Intelligence™, ensuring recurring friction between similar stakeholders is resolved instantly.',
      highlight: false
    },
    {
      id: 2,
      title: 'DE-RISKING',
      tagline: 'Trust-Guaranteed Escrow',
      metric: '0% Capital Exposure',
      metricLabel: 'Milestone-Gated Releases',
      icon: ShieldCheck,
      colSpan: 'lg:col-span-4',
      desc: 'Independent neutral governance eliminates default panic, creative piracy fears, and back-end waterfall manipulation.',
      highlight: false
    },
    {
      id: 3,
      title: 'SYSTEMIZATION',
      tagline: 'Repeatable Operational SOPs',
      metric: '14 Standard Rails',
      metricLabel: 'Automated Protocols',
      icon: Repeat,
      colSpan: 'lg:col-span-4',
      desc: 'Converts isolated bilateral victories into standard industry contracts and repeatable workflow infrastructure.',
      highlight: false
    },
    {
      id: 4,
      title: 'EXPANSION',
      tagline: 'New Economic Corridors',
      metric: '+₹15,000 Cr',
      metricLabel: 'Unlocked Annual Velocity',
      icon: Expand,
      colSpan: 'lg:col-span-4',
      desc: 'Connects Tier-1 domestic IPs with international streaming distributors, private credit, and gaming syndicates previously closed off by distrust.',
      highlight: false
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#08090C] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 clean-pill px-3 py-1 font-mono text-[11px] text-accent-cyan tracking-wider uppercase mb-4">
            <span>14 / Tangible Value Outcomes</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-white leading-[1.04]">
            What changes when the space between nodes works?
          </h2>

          <p className="mt-5 text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
            When inter-node impedance is removed, stakeholders do not merely close one deal — they unlock compounding velocity, shared margin, and collective economic upside.
          </p>
        </div>

        {/* Clean Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {bentoItems.map((item) => {
            const Icon = item.icon;
            const isSelected = activeMetric === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveMetric(item.id)}
                className={`${item.colSpan} clean-card p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-all ${
                  item.highlight ? 'clean-card-active' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs clean-pill px-3 py-1 flex items-center gap-1.5">
                      <span>OUTCOME 0{item.id + 1}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </span>
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-semibold block mb-2">
                    {item.title}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                    {item.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Telemetry Footprint */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                      {item.metric}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {item.metricLabel}
                    </span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-accent-cyan opacity-80" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
