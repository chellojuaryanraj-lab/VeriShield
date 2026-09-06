import React, { useState } from 'react';
import { ARCHITECTURE_STEPS, COMPLIANCE_BADGES } from '../data/mockData';
import { 
  Smartphone, 
  Lock, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Globe, 
  Check, 
  Sparkles, 
  Zap, 
  Server,
  Layers,
  FileCheck
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-amber-400" />;
      default:
        return <FileCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  const currentStepData = ARCHITECTURE_STEPS[activeStep];

  return (
    <section id="architecture" className="relative py-24 border-b border-slate-800 bg-[#0B0F19]">
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>ZERO-KNOWLEDGE INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cryptographic Architecture &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Security Pipeline
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Data never sits unencrypted. Zero-knowledge tokenization and ephemeral memory processing ensure 
            complete regulatory isolation and sub-second verdicts.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="mb-16 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          <div className="flex items-center justify-between pb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              END-TO-END DATA ENCRYPTION & INSPECTION LIFECYCLE
            </span>
            <span className="text-cyan-400">TOTAL PIPELINE BUDGET: &lt; 800ms</span>
          </div>

          {/* Pipeline Horizontal Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8 relative">
            {ARCHITECTURE_STEPS.map((node, index) => {
              const isActive = activeStep === index;
              return (
                <div key={node.id} className="relative">
                  <div
                    onClick={() => setActiveStep(index)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between ${
                      isActive
                        ? 'bg-slate-800/90 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/50'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    <div>
                      {/* Step index & icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isActive ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          0{node.step}
                        </span>

                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          {getStepIcon(node.icon)}
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-1">
                        {node.title}
                      </h4>
                      <p className="text-xs font-mono text-cyan-300 mb-3">
                        {node.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Latency</span>
                      <span className="text-emerald-400 font-bold">{node.latency}</span>
                    </div>
                  </div>

                  {/* Connector arrow between columns */}
                  {index < ARCHITECTURE_STEPS.length - 1 && (
                    <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-slate-900 border border-slate-700 items-center justify-center text-slate-400 pointer-events-none">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Deep Node Inspector Box */}
          <div className="p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30 font-mono text-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                  STEP 0{currentStepData.step} INSPECTOR
                </span>
                <span className="text-white font-bold">{currentStepData.title}</span>
              </div>
              <div className="text-slate-400">
                AUDIT STANDARD: <span className="text-purple-300 font-semibold">{currentStepData.standard}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {currentStepData.spec}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {currentStepData.details.map((detail, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-[11px] leading-tight font-sans">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Highlighted Compliance Badges */}
        <div id="security" className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              ENTERPRISE COMPLIANCE CERTAINTY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Certified for Global Regulated Institutions
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPLIANCE_BADGES.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col items-center text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                  {getBadgeIcon(b.icon)}
                </div>
                <div className="font-bold text-sm text-white font-mono">{b.title}</div>
                <div className="text-[11px] text-slate-400 leading-tight">{b.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
