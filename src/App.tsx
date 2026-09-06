/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LiveSimulator } from './components/LiveSimulator';
import { CoreCapabilities } from './components/CoreCapabilities';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SocialProofSection } from './components/SocialProofSection';
import { PricingSection } from './components/PricingSection';
import { FooterCta } from './components/FooterCta';
import { DemoModal } from './components/DemoModal';
import { ExplainerModal } from './components/ExplainerModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [explainerModalOpen, setExplainerModalOpen] = useState(false);

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Security Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-cyan-950/70 to-slate-950 border-b border-cyan-500/20 py-2 px-4 text-center text-xs font-mono text-cyan-300 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>CYBER BULLETIN: New generative biometric injection threat vector defeated in VeriShield v4.2.</span>
        <button 
          onClick={() => setExplainerModalOpen(true)}
          className="underline hover:text-white ml-1 font-semibold"
        >
          Read Security Advisory →
        </button>
      </div>

      {/* 1. Navigation Bar */}
      <Navbar 
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenExplainer={() => setExplainerModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section with Animated Passport Scanner UI */}
        <HeroSection 
          onDeployClick={handleScrollToSimulator}
          onExplainerClick={() => setExplainerModalOpen(true)}
        />

        {/* 3. Live De-Anonymization Simulator (Split Screen Interactive Widget) */}
        <LiveSimulator />

        {/* 4. Core Capabilities (3x2 Grid with Icons) */}
        <CoreCapabilities />

        {/* 5. Architecture & Security Pipeline */}
        <ArchitectureSection />

        {/* 6. Social Proof, Live Threat Feed & Metrics */}
        <SocialProofSection />

        {/* Enterprise Pricing & Volume Calculator */}
        <PricingSection onBookDemo={() => setDemoModalOpen(true)} />

        {/* 7. Footer Hero CTA (Radar Grid + Email Capture) & Footer */}
        <FooterCta />
      </main>

      {/* Interactive Modals */}
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />

      <ExplainerModal 
        isOpen={explainerModalOpen} 
        onClose={() => setExplainerModalOpen(false)}
        onDeploy={handleScrollToSimulator}
      />
    </div>
  );
}

