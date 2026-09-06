import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Scan, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  Eye, 
  FileWarning, 
  Lock, 
  Activity
} from 'lucide-react';

interface HeroSectionProps {
  onDeployClick: () => void;
  onExplainerClick: () => void;
}

type InspectionView = 'composite' | 'forensic' | 'uv';

export const HeroSection: React.FC<HeroSectionProps> = ({ onDeployClick, onExplainerClick }) => {
  const [activeLayer, setActiveLayer] = useState<InspectionView>('composite');
  const [highlightActive, setHighlightActive] = useState(true);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-slate-800/80 bg-[#0B0F19]">
      {/* Background cyber grid & glow effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top pill badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_18px_rgba(6,182,212,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>NEXT-GEN AUTONOMOUS FRAUD INTERCEPT</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">99.9% ACCURACY</span>
          </div>
        </div>

        {/* 2-Column Grid: Text on Left, Interactive Animated Passport Scanner on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines and CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Stop Identity Fraud at the Source with{' '}
              <span className="relative whitespace-nowrap">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
                  Autonomous AI
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/80 to-transparent rounded-full" />
              </span>{' '}
              Screening.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Instantly detect deepfakes, forged documents, and synthetic identities with{' '}
              <strong className="text-white font-semibold">99.9% accuracy</strong>. Built for global compliance and instant onboarding.
            </p>

            {/* Key feature micro-bullets */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>200+ Country ID Databases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Trust Sub-Pixel ELA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Passive Capillary Biometrics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant 450ms Decision Webhook</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center md:justify-start">
              <button
                id="hero-primary-deploy-btn"
                onClick={onDeployClick}
                className="group relative px-7 py-4 rounded-xl font-bold text-sm tracking-wider uppercase bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] hover:bg-cyan-300 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-slate-950" />
                <span>Deploy VeriShield</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-explainer-btn"
                onClick={onExplainerClick}
                className="group px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-cyan-400 fill-cyan-400 ml-0.5" />
                </div>
                <span>Watch 2-Min Explainer</span>
              </button>
            </div>

            {/* Enterprise Trust Micro-Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>AES-256 Vaulted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-purple-400" />
                <span>&lt; 1.2s Latency</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Animated Passport Scanner UI Mockup */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-xl">
              
              {/* Outer Glowing Cyber Frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800/60 to-purple-600/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                
                {/* Scanner Viewport Box */}
                <div className="rounded-xl bg-[#0F172A] border border-slate-800 overflow-hidden shadow-2xl">
                  
                  {/* Viewport HUD Header */}
                  <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-slate-400 ml-2">LIVE_INSPECTION_LAYER</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] border border-rose-500/30">
                        ANOMALY FOUND
                      </span>
                    </div>

                    {/* Layer Switcher Controls */}
                    <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setActiveLayer('composite')}
                        className={`px-2 py-1 rounded text-[10px] transition-colors ${
                          activeLayer === 'composite' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        AI Neural
                      </button>
                      <button
                        onClick={() => setActiveLayer('forensic')}
                        className={`px-2 py-1 rounded text-[10px] transition-colors ${
                          activeLayer === 'forensic' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Sub-Pixel
                      </button>
                      <button
                        onClick={() => setActiveLayer('uv')}
                        className={`px-2 py-1 rounded text-[10px] transition-colors ${
                          activeLayer === 'uv' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        UV Hologram
                      </button>
                    </div>
                  </div>

                  {/* Document Canvas Container */}
                  <div className="relative p-5 sm:p-7 bg-gradient-to-b from-[#0F172A] to-[#0A0E17]">
                    
                    {/* Laser Scanning Line Bar */}
                    <div className="absolute inset-x-0 h-1 z-20 pointer-events-none">
                      <div className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06B6D4] animate-scanline" />
                    </div>

                    {/* Mock Passport Substrate */}
                    <div className={`relative rounded-xl p-5 border transition-all duration-300 ${
                      activeLayer === 'uv' 
                        ? 'bg-[#060814] border-purple-500/50 shadow-[inset_0_0_40px_rgba(139,92,246,0.3)]' 
                        : activeLayer === 'forensic' 
                        ? 'bg-[#0B1120] border-cyan-500/40 bg-dot-pattern' 
                        : 'bg-gradient-to-br from-[#1E293B]/90 via-[#0F172A] to-[#131E32] border-slate-700'
                    }`}>

                      {/* Header in document */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-sm bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-cyan-400">GBR</span>
                          </div>
                          <div>
                            <span className="text-xs font-bold tracking-widest text-slate-200 uppercase font-mono">
                              UNITED KINGDOM OF GREAT BRITAIN
                            </span>
                            <p className="text-[9px] font-mono text-slate-400">STANDARD BIOMETRIC PASSPORT</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          <span>ICAO 9303</span>
                        </div>
                      </div>

                      {/* Passport Body Grid */}
                      <div className="grid grid-cols-12 gap-4 items-start">
                        
                        {/* Portrait Section with Face Morphing Anomaly */}
                        <div className="col-span-5 relative">
                          <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-900 aspect-[3/4] flex items-center justify-center">
                            {/* Stylized Passport Avatar with Cyber Mesh */}
                            <div className="w-full h-full bg-gradient-to-t from-slate-950 via-slate-800 to-slate-700 flex flex-col items-center justify-center p-3 relative">
                              <div className="w-16 h-16 rounded-full bg-slate-600 border border-slate-500 flex items-center justify-center relative">
                                <Eye className="w-8 h-8 text-slate-300 opacity-60" />
                                {activeLayer === 'uv' && (
                                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/80 animate-ping opacity-75" />
                                )}
                              </div>
                              <div className="w-24 h-10 mt-2 bg-slate-700/80 rounded-t-xl" />
                              
                              {/* Tamper Layer Over Photo */}
                              <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay" />
                            </div>

                            {/* Bounding Box 1: Face Morphing Detected */}
                            {highlightActive && (
                              <div className="absolute inset-1 rounded border-2 border-rose-500 bg-rose-500/15 animate-pulse flex flex-col justify-between p-1 shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                                <div className="flex items-center justify-between">
                                  <span className="bg-rose-600 text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded tracking-tighter">
                                    ALERT 98.4%
                                  </span>
                                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                                </div>
                                <div className="bg-slate-950/90 border border-rose-500/60 p-1 rounded text-[8px] font-mono text-rose-300">
                                  Face Morphing Detected
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Identity Details Section */}
                        <div className="col-span-7 space-y-2.5 font-mono text-[11px]">
                          <div>
                            <span className="text-[9px] text-slate-400 block uppercase">Surname / Nom</span>
                            <span className="text-white font-bold tracking-wider">HARRINGTON</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-slate-400 block uppercase">Given Names / Prénoms</span>
                            <span className="text-slate-200">ALEXANDER JAMES</span>
                          </div>
                          
                          {/* Anomaly Bounding Box 2: Template Mismatch / DOB Altered */}
                          <div className="relative p-1.5 rounded bg-slate-900/90 border border-slate-800">
                            <span className="text-[9px] text-slate-400 block uppercase">Date of Birth / Né le</span>
                            <div className="flex items-center justify-between">
                              <span className="text-white font-bold">14 MAY / MAI 1984</span>
                              <span className="text-[9px] text-amber-400 font-mono flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3 text-amber-400" />
                                Font Kerning Mismatch
                              </span>
                            </div>
                            <div className="absolute -top-1 -right-1 px-1 py-0.2 bg-amber-500/20 text-amber-300 text-[8px] rounded border border-amber-500/40">
                              Photoshop Artifact
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="text-[9px] text-slate-400 block uppercase">Sex / Sexe</span>
                              <span className="text-slate-200">M</span>
                            </div>
                            <div>
                              <span className="text-[9px] text-slate-400 block uppercase">Nationality</span>
                              <span className="text-slate-200">BRITISH</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* MRZ Zone at Bottom with Checksum Failure Warning */}
                      <div className="mt-4 pt-3 border-t border-slate-800 font-mono text-[10px] tracking-wider text-slate-400 relative">
                        <div className="bg-slate-950/80 p-2 rounded border border-slate-800 space-y-0.5">
                          <p className="text-slate-300">P&lt;GBRHARRINGTON&lt;&lt;ALEXANDER&lt;JAMES&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
                          <p className="text-slate-300 flex items-center justify-between">
                            <span>9840214848GBR8405142M2910188&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;4</span>
                            <span className="text-rose-400 font-bold bg-rose-950/70 border border-rose-500/40 px-1 py-0.2 rounded text-[8px]">
                              MOD-7 FAIL
                            </span>
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Live Verdict Pill Overlay */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
                          <FileWarning className="w-4 h-4 text-rose-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-rose-400">AI VERDICT: REJECT</span>
                            <span className="text-slate-400 text-[10px]">RISK: 87/100</span>
                          </div>
                          <span className="text-slate-400 text-[10px]">High Probability of Synthetic Splicing</span>
                        </div>
                      </div>

                      <button
                        onClick={onDeployClick}
                        className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 transition-colors text-center text-[11px] font-semibold flex items-center justify-center gap-1.5"
                      >
                        <Scan className="w-3.5 h-3.5" />
                        Test Live Simulator
                      </button>
                    </div>

                  </div>
                </div>

                {/* Cyber Corner brackets */}
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
