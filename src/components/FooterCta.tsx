import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Radar, 
  Terminal, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const FooterCta: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitted(true);
    // Simulate instant generation of sandbox API key
    const mockKey = `vsh_live_sk_${Math.random().toString(36).substring(2, 12)}_${Math.random().toString(36).substring(2, 8)}`;
    setGeneratedKey(mockKey);
  };

  return (
    <footer className="relative bg-[#070A11] border-t border-slate-800 text-slate-400 overflow-hidden">
      
      {/* ================= HERO CTA SECTION WITH RADAR GRID ================= */}
      <div className="relative py-24 border-b border-slate-800/80 overflow-hidden">
        
        {/* Subtle radar and scanning lines grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        {/* Animated radar circle sweep effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/15 pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border border-cyan-500/10 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-cyan-500/10" />
          </div>
          {/* Rotating radar ray */}
          <div className="absolute inset-0 rounded-full animate-radar pointer-events-none">
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/20 via-cyan-500/5 to-transparent origin-bottom-right rounded-tl-full" />
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <Radar className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>RADAR ACTIVE: DEFENDING 50M+ VERIFICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to eliminate fraud from{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
              your ecosystem?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Integrate the VeriShield AI SDK in less than 15 minutes. 
            Stop synthetic personas, forged documents, and deepfakes with zero user friction.
          </p>

          {/* Email Capture or Sandbox Key Box */}
          <div className="max-w-xl mx-auto">
            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.3)] space-y-4 text-left font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> SANDBOX ACCESS PROVISIONED
                  </span>
                  <span className="text-slate-400">1,000 Free Credits Active</span>
                </div>

                <div className="p-3.5 rounded-lg bg-black border border-slate-800 text-xs text-cyan-300 flex items-center justify-between">
                  <span className="truncate">{generatedKey}</span>
                  <button 
                    onClick={() => navigator.clipboard?.writeText(generatedKey || '')}
                    className="ml-2 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-[10px]"
                  >
                    Copy
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 font-sans">
                  We sent your complete API quickstart and webhook secret keys to <strong className="text-white">{email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate work email..."
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-slate-500 font-mono text-xs sm:text-sm outline-none transition-all"
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>

                <button
                  type="submit"
                  className="px-7 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 1,000 Free API inspections
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SOC 2 Type II certified
            </span>
          </div>

        </div>
      </div>

      {/* ================= COMPREHENSIVE B2B FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-lg font-bold font-mono tracking-tight text-white">
                VeriShield<span className="text-cyan-400">AI</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The autonomous B2B identity defense network. Detecting synthetic personas, 
              deepfake injection attacks, and forged credentials for global digital banking.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Edge Status: All 48 Regions Operational</span>
            </div>
          </div>

          {/* Column 1: Technology */}
          <div className="space-y-3 font-mono">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">PLATFORM</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#simulator" className="hover:text-cyan-400 transition-colors">Forensics Simulator</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Sub-Pixel ELA Engine</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capillary Pulse Biometrics</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">e-Passport NFC Attestation</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Synthetic Graph Scrubbing</a></li>
            </ul>
          </div>

          {/* Column 2: Architecture & Trust */}
          <div className="space-y-3 font-mono">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">SECURITY & TRUST</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Zero-Knowledge Pipeline</a></li>
              <li><a href="#security" className="hover:text-cyan-400 transition-colors">SOC 2 Type II Reports</a></li>
              <li><a href="#security" className="hover:text-cyan-400 transition-colors">ISO 27001 Certification</a></li>
              <li><a href="#security" className="hover:text-cyan-400 transition-colors">iBeta Level 2 PAD</a></li>
              <li><a href="#security" className="hover:text-cyan-400 transition-colors">GDPR / CCPA Whitepaper</a></li>
            </ul>
          </div>

          {/* Column 3: Developers */}
          <div className="space-y-3 font-mono">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">DEVELOPERS</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                <span>API Reference</span> <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                <span>iOS & Android SDKs</span>
              </li>
              <li className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                <span>Webhooks & Event Bus</span>
              </li>
              <li className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                <span>Postman Collection</span>
              </li>
              <li className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                <span>System Status (99.99%)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} VeriShield AI Technologies, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Responsible Disclosure</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Trust Center</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
