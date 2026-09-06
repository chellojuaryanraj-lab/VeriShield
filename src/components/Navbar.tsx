import React, { useState } from 'react';
import { Shield, ShieldAlert, ChevronRight, Menu, X, Terminal, ExternalLink, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenExplainer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0B0F19]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] group">
            <Shield className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 animate-pulse pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0B0F19]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                VeriShield<span className="text-cyan-400 ml-1 font-mono">AI</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                Enterprise B2B
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 hidden sm:block tracking-wider">
              Autonomous Identity & Document Defense
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => scrollToSection('simulator')}
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Live Simulator
          </button>
          <button
            onClick={() => scrollToSection('capabilities')}
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('architecture')}
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection('security')}
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            Security & Trust
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            Pricing
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3.5">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Core API: <strong className="text-emerald-400 font-semibold">99.99% Operational</strong></span>
          </div>

          <button
            onClick={() => scrollToSection('simulator')}
            className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 px-2.5 py-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            Sandbox API
          </button>

          <button
            id="nav-book-demo-btn"
            onClick={onOpenDemo}
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Book a Demo
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 font-mono"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B0F19]/95 backdrop-blur-2xl px-5 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs font-mono text-slate-400">
            <span>NETWORK STATUS</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 99.99% UP
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('simulator')}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/70 font-medium text-sm flex items-center justify-between"
            >
              <span>Live Simulator</span>
              <span className="text-xs font-mono text-cyan-400">Interactive</span>
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/70 font-medium text-sm"
            >
              Core Capabilities
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/70 font-medium text-sm"
            >
              Architecture & Data Flow
            </button>
            <button
              onClick={() => scrollToSection('security')}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/70 font-medium text-sm"
            >
              Security & Compliance
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/70 font-medium text-sm"
            >
              Enterprise Pricing
            </button>
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-cyan-400 text-slate-950 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Book an Enterprise Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
