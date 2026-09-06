import React, { useState } from 'react';
import { X, Shield, CheckCircle2, Calendar, Clock, Sparkles, Building, Mail, User } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '25,000 - 100,000 / mo',
    primaryThreat: 'Deepfake & Video Injection',
    preferredDate: 'Tomorrow at 10:00 AM EST'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-[#0F172A] border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                SCHEDULE ENTERPRISE DEMO
              </h3>
              <p className="text-[11px] text-slate-400">1-on-1 with a Lead Fraud Detection Engineer</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 font-mono">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              
              <h4 className="text-xl font-bold text-white">Demo Reserved Successfully</h4>
              
              <p className="text-xs text-slate-300 max-w-sm mx-auto font-sans leading-relaxed">
                We have scheduled your private session for <strong className="text-cyan-300">{formData.preferredDate}</strong>. 
                A calendar invitation with zoom link and pre-demo SDK package was dispatched to <strong className="text-white">{formData.email}</strong>.
              </p>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">YOUR NAME</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 outline-none"
                    />
                    <User className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">CORPORATE WORK EMAIL</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="sarah@fintechbank.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 outline-none"
                    />
                    <Mail className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">COMPANY NAME</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g., Apex NeoBank"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 outline-none"
                    />
                    <Building className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">ESTIMATED MONTHLY VOLUME</label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 outline-none font-mono"
                  >
                    <option>5,000 - 25,000 / mo</option>
                    <option>25,000 - 100,000 / mo</option>
                    <option>100,000 - 500,000 / mo</option>
                    <option>500,000+ / mo (Enterprise Sovereign)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">PRIMARY SECURITY PRIORITY</label>
                <select
                  value={formData.primaryThreat}
                  onChange={(e) => setFormData({ ...formData, primaryThreat: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 outline-none font-mono"
                >
                  <option>Deepfake & Video Injection Attacks</option>
                  <option>Synthetic ID & Ghost Persona Scrubbing</option>
                  <option>Photoshop / Sub-pixel Document Tampering</option>
                  <option>e-Passport Cryptographic NFC Attestation</option>
                  <option>Automated AML & Sanctions Compliance</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Confirm Demo Reservation</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-mono">
                Includes custom threat briefing & NDA-covered API sandbox keys.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
