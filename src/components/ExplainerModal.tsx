import React, { useState } from 'react';
import { X, Play, Shield, Eye, Cpu, Database, CheckCircle2, ChevronRight, Activity, Zap } from 'lucide-react';

interface ExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeploy: () => void;
}

export const ExplainerModal: React.FC<ExplainerModalProps> = ({ isOpen, onClose, onDeploy }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: 'Layer 1: Sub-Pixel Physics & ELA',
      tag: 'Forensic Tamper Detection',
      icon: Cpu,
      description: 'Human eyes cannot see sub-pixel quantization differences. When a fraudster alters a birthdate or photo in Photoshop, the JPEG compression matrix changes frequency. VeriShield calculates Error Level Analysis (ELA) and Photo-Response Non-Uniformity (PRNU) sensor noise to highlight modified pixels instantly.',
      keyStat: '0.01mm Sub-pixel precision',
      highlights: ['Detects Photoshop clone stamp & healing brush', 'Identifies font glyph kerning anomalies', 'Flags resaved lossy compression mismatches']
    },
    {
      title: 'Layer 2: Capillary Pulse & 3D Liveness',
      tag: 'Deepfake & Replay Defense',
      icon: Eye,
      description: 'Deepfake avatars and iPad screen replay attacks look convincing, but they lack organic biology. VeriShield passive photoplethysmography (rPPG) tracks micro-changes in skin color caused by arterial capillary blood flow synced with the human heart rate. No funny head tilts or user challenges required.',
      keyStat: '99.8% Presentation Attack Defense',
      highlights: ['Defeats virtual camera OBS injections', 'Spots high-res iPad & monitor screen pixel grids', 'Identifies 3D silicone mask temperature/motion absence']
    },
    {
      title: 'Layer 3: Autonomous Synthetic Graph Scrubbing',
      tag: 'Franken-Identity Hunter',
      icon: Database,
      description: 'Synthetic identity theft blends stolen SSNs of minors or deceased individuals with real addresses and AI-generated portraits. VeriShield connects to global credit bureaus, telecom velocity databases, and 1.4B+ dark web records to check if the applicant is a newly fabricated ghost persona.',
      keyStat: '1.4B+ Dark web identity links',
      highlights: ['SSN issuance date vs applicant birthdate check', 'Bureau inquiry velocity and address churn detection', 'Reverse image search across known synthetic rings']
    }
  ];

  const currentStep = steps[activeTab];
  const StepIcon = currentStep.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#0F172A] border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400 ml-0.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                VERISHIELD AI ARCHITECTURAL WALKTHROUGH
              </h3>
              <p className="text-[11px] text-slate-400">2-Minute Forensic Deep Dive</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-3 border-b border-slate-800 bg-[#0C1220] text-xs font-mono">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`py-3 px-3 border-b-2 text-center transition-all ${
                activeTab === idx
                  ? 'border-cyan-400 bg-slate-800/80 text-cyan-300 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              0{idx + 1}. {step.tag}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center shrink-0">
              <StepIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="inline-block px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] font-mono border border-cyan-500/40 mb-1">
                {currentStep.tag}
              </div>
              <h4 className="text-lg font-bold text-white">{currentStep.title}</h4>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {currentStep.description}
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-cyan-300 font-bold border-b border-slate-800 pb-1.5">
              <span>ACTIVE FORENSIC ENGINE CAPABILITY</span>
              <span className="text-emerald-400">{currentStep.keyStat}</span>
            </div>
            {currentStep.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeTab === i ? 'bg-cyan-400 w-6' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              {activeTab < steps.length - 1 ? (
                <button
                  onClick={() => setActiveTab(activeTab + 1)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Next: Layer {activeTab + 2}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    onDeploy();
                  }}
                  className="px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-slate-950" />
                  <span>Launch Live Simulator</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
