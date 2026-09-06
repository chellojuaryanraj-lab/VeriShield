import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles, Zap, Building } from 'lucide-react';

interface PricingSectionProps {
  onBookDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookDemo }) => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(25000);

  // Volume slider calculations
  const calculateEstimate = (vol: number) => {
    if (vol <= 10000) return { price: 1490, perId: 0.15 };
    if (vol <= 50000) return { price: Math.round(vol * 0.12), perId: 0.12 };
    if (vol <= 150000) return { price: Math.round(vol * 0.09), perId: 0.09 };
    return { price: 'Custom Enterprise', perId: '< 0.06' };
  };

  const estimate = calculateEstimate(monthlyVolume);

  return (
    <section id="pricing" className="relative py-24 border-b border-slate-800 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT ENTERPRISE PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Scale Autonomous Defense with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
              Zero Hidden Fees
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Predictable per-verification pricing. No setup fees, no legacy hardware dongles, 
            and instant API keys with full sandbox access.
          </p>
        </div>

        {/* Interactive Volume Slider */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400">ESTIMATE YOUR MONTHLY WORKLOAD</span>
              <div className="text-2xl font-bold font-mono text-white">
                {monthlyVolume.toLocaleString()} <span className="text-cyan-400 text-base font-normal">IDs / month</span>
              </div>
            </div>

            <div className="sm:text-right">
              <span className="text-xs font-mono uppercase text-slate-400">ESTIMATED RATE</span>
              <div className="text-2xl font-bold font-mono text-emerald-400">
                {typeof estimate.price === 'number' ? `$${estimate.price.toLocaleString()}/mo` : estimate.price}
                <span className="text-slate-400 text-xs font-normal block">(${estimate.perId} per verification)</span>
              </div>
            </div>
          </div>

          <input
            type="range"
            min="2000"
            max="200000"
            step="2000"
            value={monthlyVolume}
            onChange={(e) => setMonthlyVolume(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />

          <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
            <span>2,000 IDs</span>
            <span>50,000 IDs</span>
            <span>100,000 IDs</span>
            <span>200,000+ IDs (Enterprise)</span>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tier 1: Growth */}
          <div className="rounded-2xl p-7 bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">GROWTH</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">Fintechs & Apps</span>
              </div>
              <div className="text-3xl font-extrabold font-mono text-white mb-1">$0.18 <span className="text-xs font-normal text-slate-400">/ check</span></div>
              <p className="text-xs text-slate-400 mb-6">Minimum $450/mo. Ideal for scaling startups requiring compliant KYC.</p>
              
              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>150+ Countries ICAO coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-pixel Photoshop ELA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Passive Capillary Biometrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>REST API & Webhooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold transition-colors"
            >
              Start Free Sandbox
            </button>
          </div>

          {/* Tier 2: Scale (Highlighted) */}
          <div className="relative rounded-2xl p-7 bg-slate-900/90 border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.25)] flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-mono text-[10px] font-extrabold tracking-wider uppercase">
              MOST POPULAR FOR REGULATED ENTITIES
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider font-semibold">SCALE CORPS</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40">Neo-Banks & Crypto</span>
              </div>
              <div className="text-3xl font-extrabold font-mono text-white mb-1">$0.11 <span className="text-xs font-normal text-slate-400">/ check</span></div>
              <p className="text-xs text-slate-400 mb-6">High-throughput volume tiers with deep synthetic scrubbing.</p>
              
              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-200 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>200+ Countries & Territories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Synthetic Identity Scrubbing Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Deepfake Video Replay Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>e-Passport NFC Direct Reading</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Real-time AML / Sanctions Feeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>24/7 Priority SecOps Support</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="mt-8 w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
            >
              Deploy Scale Tier
            </button>
          </div>

          {/* Tier 3: Enterprise Sovereign */}
          <div className="rounded-2xl p-7 bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-purple-400 uppercase tracking-wider font-semibold">SOVEREIGN</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-500/40">Tier 1 Banking</span>
              </div>
              <div className="text-3xl font-extrabold font-mono text-white mb-1">Custom <span className="text-xs font-normal text-slate-400">SLA</span></div>
              <p className="text-xs text-slate-400 mb-6">Dedicated VPC, on-prem hardware HSM, custom ML fine-tuning.</p>
              
              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Private VPC / On-Prem Kubernetes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Custom Model Training on Bank Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>99.999% Fault-Tolerant High-Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Dedicated Lead Cryptographer & TAM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Unlimited Team Seats & Audit Logs</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="mt-8 w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-colors"
            >
              Contact Solutions Architect
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
