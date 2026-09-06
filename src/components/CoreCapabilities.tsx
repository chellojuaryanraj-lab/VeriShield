import React, { useState } from 'react';
import { CORE_CAPABILITIES } from '../data/mockData';
import { 
  FileCheck2, 
  Eye, 
  UserX, 
  ShieldAlert, 
  Cpu, 
  KeyRound, 
  ArrowUpRight, 
  Check, 
  Sparkles, 
  Activity 
} from 'lucide-react';

export const CoreCapabilities: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-cyan-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-emerald-400" />;
      case 'UserX':
        return <UserX className="w-6 h-6 text-purple-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-amber-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="capabilities" className="relative py-24 border-b border-slate-800 bg-[#0B0F19]">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTELLIGENCE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Autonomous Defense Against Next-Gen{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Identity Threats
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Engineered for high-volume fintechs, exchanges, and neo-banks. 
            VeriShield AI executes multi-spectral forensic scrutiny across every identity vector.
          </p>
        </div>

        {/* 3x2 Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((cap) => {
            const isHovered = activeCardId === cap.id;
            return (
              <div
                key={cap.id}
                onMouseEnter={() => setActiveCardId(cap.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-slate-900/60 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? 'border-cyan-500/50 bg-slate-900/90 shadow-[0_10px_35px_rgba(6,182,212,0.15)] -translate-y-1'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Glow backdrop inside card */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />

                <div>
                  {/* Top line with Icon and Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors shadow-inner">
                      {getIcon(cap.iconName)}
                    </div>
                    
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-800/90 text-cyan-300 border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{cap.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Telemetry Pills & Metric */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">BENCHMARK</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      {cap.metrics}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cap.telemetry.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/80 text-slate-300 border border-slate-800 flex items-center gap-1"
                      >
                        <Check className="w-2.5 h-2.5 text-cyan-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
