import React, { useState, useEffect } from 'react';
import { CLIENT_LOGOS, LIVE_THREAT_FEED } from '../data/mockData';
import { ThreatFeedItem } from '../types';
import { ShieldCheck, Zap, TrendingUp, AlertOctagon, CheckCircle2, Globe, Building2 } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const [threats, setThreats] = useState<ThreatFeedItem[]>(LIVE_THREAT_FEED);

  // Simulated live feed updates
  useEffect(() => {
    const threatTypes: ('Synthetic ID' | 'Deepfake Injection' | 'Photoshop Tampering' | 'Sanction Match' | 'Emulator Spoof')[] = [
      'Synthetic ID', 'Deepfake Injection', 'Photoshop Tampering', 'Sanction Match', 'Emulator Spoof'
    ];
    const origins = ['Tokyo, JP', 'Zurich, CH', 'Toronto, CA', 'Sydney, AU', 'Stockholm, SE', 'Seoul, KR', 'Dubai, AE'];

    const interval = setInterval(() => {
      const randomType = threatTypes[Math.floor(Math.random() * threatTypes.length)];
      const randomOrigin = origins[Math.floor(Math.random() * origins.length)];
      
      const newThreat: ThreatFeedItem = {
        id: `th-${Date.now()}`,
        timestamp: 'Just now',
        threatType: randomType,
        origin: randomOrigin,
        confidence: `${(98 + Math.random() * 1.9).toFixed(1)}%`,
        actionTaken: 'BLOCKED'
      };

      setThreats((prev) => [newThreat, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 border-b border-slate-800 bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Metric Counters (Clean high-contrast cards, anti-slop rules) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-lg">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>GLOBAL VOLUME</span>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              50M+
            </div>
            <p className="text-xs font-mono text-cyan-300 mt-1">IDs Verified Worldwide</p>
            <p className="text-xs text-slate-400 mt-2">Across 200+ issuing passport & license jurisdictions</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-lg">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>DECISION VELOCITY</span>
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              &lt; 1.2s
            </div>
            <p className="text-xs font-mono text-emerald-400 mt-1">Average Response Time</p>
            <p className="text-xs text-slate-400 mt-2">P99 sub-second consensus with zero user friction</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-lg">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>ACCURACY BENCHMARK</span>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              99.9%
            </div>
            <p className="text-xs font-mono text-cyan-300 mt-1">Fraud Detection Rate</p>
            <p className="text-xs text-slate-400 mt-2">Validated by iBeta Level 2 presentation attack defense</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-lg">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>CAPITAL PRESERVED</span>
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              $420M+
            </div>
            <p className="text-xs font-mono text-purple-300 mt-1">Prevented Fraud Losses</p>
            <p className="text-xs text-slate-400 mt-2">Direct savings in chargebacks & synthetic loan defaults</p>
          </div>

        </div>

        {/* Live Threat Ticker */}
        <div className="rounded-xl bg-slate-950 border border-slate-800/90 p-4 sm:p-5 font-mono text-xs shadow-inner">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="font-bold text-white uppercase tracking-wider">
                LIVE GLOBAL THREAT INTERCEPT FEED
              </span>
            </div>
            <div className="text-slate-400 text-[11px] flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-Time Autonomous Edge Nodes</span>
            </div>
          </div>

          <div className="divide-y divide-slate-900 mt-2">
            {threats.map((item) => (
              <div key={item.id} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 w-16 shrink-0">{item.timestamp}</span>
                  <span className="text-white font-semibold">{item.threatType}</span>
                  <span className="text-slate-400 text-[11px]">from {item.origin}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 text-[11px]">Confidence {item.confidence}</span>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold">
                    {item.actionTaken}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Logo Marquee */}
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-xs font-mono uppercase text-slate-400 tracking-widest">
              TRUSTED BY TIER-1 FINTECHS, DIGITAL ASSET CUSTODIANS & GLOBAL REGULATORS
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 flex flex-col items-center justify-center text-center space-y-1 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-slate-200 font-bold font-mono text-sm tracking-wide">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{client.name}</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono">{client.sector}</div>
                <div className="text-[9px] text-cyan-300 font-mono">{client.volume}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
