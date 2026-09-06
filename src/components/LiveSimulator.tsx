import React, { useState, useEffect, useRef } from 'react';
import { 
  DOCUMENT_PRESETS 
} from '../data/mockData';
import { DocumentPreset, VerificationCheck } from '../types';
import { 
  Upload, 
  Scan, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  RefreshCw, 
  FileText, 
  Download, 
  Send, 
  Sliders, 
  Layers, 
  Eye, 
  ShieldAlert, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Info,
  Clock,
  Sparkles,
  Search
} from 'lucide-react';

export const LiveSimulator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('altered-passport');
  const [activePreset, setActivePreset] = useState<DocumentPreset>(DOCUMENT_PRESETS[0]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<'forensics' | 'raw_json'>('forensics');
  const [customUploadedUrl, setCustomUploadedUrl] = useState<string | null>(null);
  const [hoveredHighlightIndex, setHoveredHighlightIndex] = useState<number | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle Preset Selection
  const handleSelectPreset = (presetId: string) => {
    const preset = DOCUMENT_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    
    setSelectedPresetId(presetId);
    setCustomUploadedUrl(null);
    runScanCycle(preset);
  };

  // Run the animated scanning cycle
  const runScanCycle = (preset: DocumentPreset) => {
    setIsScanning(true);
    setScanProgress(10);
    setActivePreset(preset);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 18;
      });
    }, 110);
  };

  // File Upload Handler (Drag & Drop or browse)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setCustomUploadedUrl(objectUrl);
    
    // Create a dynamic analyzed preset for custom upload
    const customPreset: DocumentPreset = {
      id: 'custom-upload',
      title: file.name.substring(0, 24),
      subtitle: `Analyzed User Document (${(file.size / 1024).toFixed(1)} KB)`,
      docType: 'passport',
      country: 'International / Detected',
      countryCode: 'INT',
      riskScore: 78,
      verdict: 'REVIEW',
      verdictReason: 'Image compression quantization anomalies and potential photo-resave detected. Manual review recommended.',
      imageThumbnail: 'custom',
      tamperHighlights: [
        {
          label: 'Compression Artifact Inconsistency',
          description: 'High-frequency noise variance between foreground subject and background document canvas.',
          x: 22,
          y: 20,
          width: 50,
          height: 45,
          severity: 'warning'
        },
        {
          label: 'Metadata Strip Warning',
          description: 'Original EXIF camera payload removed or rewritten by third-party raster export tool.',
          x: 10,
          y: 8,
          width: 80,
          height: 12,
          severity: 'warning'
        }
      ],
      checks: [
        {
          id: 'custom-1',
          name: 'Hologram & Watermark Authenticity',
          category: 'security_features',
          status: 'WARNING',
          detail: 'Diffractive reflectance cannot be verified from 2D flat image capture',
          confidence: 78.4,
          latencyMs: 145
        },
        {
          id: 'custom-2',
          name: 'Metadata & Exif Alteration',
          category: 'forensics',
          status: 'ALERT',
          detail: 'EXIF payload stripped; re-compression quant tables match web export',
          confidence: 96.2,
          latencyMs: 90
        },
        {
          id: 'custom-3',
          name: 'Biometric Liveness Check',
          category: 'biometrics',
          status: 'PASS',
          detail: 'Facial landmarks structurally aligned with ICAO portrait guidelines',
          confidence: 94.1,
          latencyMs: 205
        },
        {
          id: 'custom-4',
          name: 'Synthetic Identity Scrubbing',
          category: 'compliance',
          status: 'PASS',
          detail: 'No duplicate identity clusters flagged across global dark web registry',
          confidence: 98.9,
          latencyMs: 310
        }
      ],
      forensics: {
        exifSoftware: 'Web Rasterizer / Stripped EXIF',
        compressionRatio: '1:12 Variable',
        mrzStatus: 'OCR_PARTIAL_MATCH',
        faceMatchScore: 82.5,
        livenessScore: 89.0,
        fontAnomaliesDetected: 1,
        darkWebMatches: 0
      }
    };

    setSelectedPresetId('custom-upload');
    runScanCycle(customPreset);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const objectUrl = URL.createObjectURL(file);
      setCustomUploadedUrl(objectUrl);
      // trigger custom scan
      const pseudoEvent = {
        target: { files: [file] }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleFileUpload(pseudoEvent);
    }
  };

  const copyNotification = (text: string) => {
    setCopiedNotification(text);
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  return (
    <section id="simulator" className="relative py-24 border-b border-slate-800 bg-[#0B0F19]">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Scan className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>INTERACTIVE SCREENING WORKBENCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live De-Anonymization{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Forensics Simulator
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Test real-world fraudulent passports, synthetic driver's licenses, and deepfake injection attacks. 
            Inspect sub-pixel EXIF tampering, AI face morphing, and biometric liveness in real-time.
          </p>

          {/* Quick Preset Selector Bar */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Presets:
            </span>
            {DOCUMENT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 border ${
                  selectedPresetId === preset.id
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${
                  preset.verdict === 'REJECT' ? 'bg-rose-500' : 'bg-emerald-400'
                }`} />
                <span>{preset.title}</span>
                <span className={`text-[10px] px-1 py-0.2 rounded font-bold ${
                  preset.verdict === 'REJECT' ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {preset.riskScore}%
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* The Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDE: Uploaded Document Viewer ================= */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden shadow-2xl">
              
              {/* Left Top Bar */}
              <div className="px-5 py-3.5 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-slate-300">
                    EVIDENCE_CONTAINER: {activePreset.countryCode}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => runScanCycle(activePreset)}
                    disabled={isScanning}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className={`w-3 h-3 text-cyan-400 ${isScanning ? 'animate-spin' : ''}`} />
                    <span>Re-Scan</span>
                  </button>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1 rounded bg-cyan-500/15 hover:bg-cyan-500/25 text-[11px] font-mono text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition-colors"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload Own</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>

              {/* Document Stage Viewport */}
              <div 
                className="relative p-6 sm:p-8 bg-[#090D16] min-h-[440px] flex flex-col justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                
                {/* Laser scan line when isScanning */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 z-30 pointer-events-none">
                    <div className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#06B6D4] animate-scanline" />
                  </div>
                )}

                {/* Document Display Canvas */}
                {customUploadedUrl ? (
                  <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 mx-auto max-w-md w-full shadow-lg">
                    <img 
                      src={customUploadedUrl} 
                      alt="Uploaded test identity" 
                      className="w-full h-auto max-h-[360px] object-contain mx-auto"
                    />
                    {/* Bounding box overlays for custom upload */}
                    {activePreset.tamperHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        style={{
                          left: `${hl.x}%`,
                          top: `${hl.y}%`,
                          width: `${hl.width}%`,
                          height: `${hl.height}%`
                        }}
                        className={`absolute border-2 rounded transition-all cursor-pointer ${
                          hl.severity === 'critical'
                            ? 'border-rose-500 bg-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                            : 'border-amber-400 bg-amber-400/20'
                        }`}
                        onMouseEnter={() => setHoveredHighlightIndex(idx)}
                        onMouseLeave={() => setHoveredHighlightIndex(null)}
                      >
                        <div className="absolute -top-3 left-0 bg-slate-950 px-1 py-0.2 rounded text-[8px] font-mono text-rose-300 border border-rose-500/40 whitespace-nowrap">
                          {hl.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* High Fidelity Procedural Credential Visualizer */
                  <div className="relative mx-auto w-full max-w-md rounded-xl p-5 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#111C2E] border border-slate-700/80 shadow-xl overflow-hidden">
                    
                    {/* Security Watermark Hologram BG */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                    <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />
                    
                    {/* Header in doc */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-slate-800 border border-slate-600 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                          {activePreset.countryCode}
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                            {activePreset.country}
                          </div>
                          <div className="text-[9px] font-mono text-slate-400 uppercase">
                            OFFICIAL IDENTITY DOCUMENT
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] font-mono text-cyan-400">
                        ICAO 9303 SECURE
                      </div>
                    </div>

                    {/* Middle: Photo & Core Metadata */}
                    <div className="grid grid-cols-12 gap-4 my-4 items-center">
                      
                      {/* Photo / Face Section */}
                      <div className="col-span-5 relative">
                        <div className="relative rounded-lg overflow-hidden border border-slate-600 bg-slate-800 aspect-[3/4] flex items-center justify-center">
                          {/* Stylized Portrait Visual */}
                          <div className="w-full h-full bg-gradient-to-t from-slate-950 via-slate-800 to-slate-700 flex flex-col items-center justify-center p-2">
                            <div className="w-14 h-14 rounded-full bg-slate-600 border border-slate-500 flex items-center justify-center">
                              <Eye className="w-6 h-6 text-slate-300" />
                            </div>
                            <div className="w-20 h-8 mt-1.5 bg-slate-700 rounded-t-lg" />
                          </div>

                          {/* Interactive Bounding box on face */}
                          {activePreset.tamperHighlights.map((hl, i) => {
                            if (hl.label.includes('Face') || hl.label.includes('Capillary') || hl.label.includes('Screen') || hl.label.includes('Generative')) {
                              return (
                                <div
                                  key={i}
                                  className={`absolute inset-0.5 border-2 rounded ${
                                    hl.severity === 'critical'
                                      ? 'border-rose-500 bg-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                                      : 'border-emerald-400 bg-emerald-400/20'
                                  }`}
                                  onMouseEnter={() => setHoveredHighlightIndex(i)}
                                  onMouseLeave={() => setHoveredHighlightIndex(null)}
                                >
                                  <div className="absolute bottom-1 inset-x-1 bg-slate-950/90 text-rose-300 text-[8px] font-mono p-0.5 rounded text-center border border-rose-500/40">
                                    {hl.label}
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className="col-span-7 space-y-2 font-mono text-[11px]">
                        <div>
                          <span className="text-[9px] text-slate-400 uppercase">IDENTIFIER</span>
                          <span className="text-white block font-bold tracking-wider">
                            {selectedPresetId === 'synthetic-id' ? 'MORGAN, RILEY' : 'HARRINGTON, ALEXANDER'}
                          </span>
                        </div>

                        <div>
                          <span className="text-[9px] text-slate-400 uppercase">DOB / DATE OF BIRTH</span>
                          <span className="text-slate-200 block font-bold">14 MAY 1984</span>
                        </div>

                        <div>
                          <span className="text-[9px] text-slate-400 uppercase">DOCUMENT ID #</span>
                          <span className="text-cyan-300 block font-mono">984021484-X9</span>
                        </div>

                        <div>
                          <span className="text-[9px] text-slate-400 uppercase">ISSUING AUTHORITY</span>
                          <span className="text-slate-300 block text-[10px]">DIRECTORATE GENERAL IMMIGRATION</span>
                        </div>
                      </div>

                    </div>

                    {/* MRZ / Machine Readable Zone Bar */}
                    <div className="pt-3 border-t border-slate-700/80 font-mono text-[9px] text-slate-400 tracking-wider bg-slate-950/60 p-2 rounded">
                      <p className="truncate text-slate-300">P&lt;GBRHARRINGTON&lt;&lt;ALEXANDER&lt;JAMES&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
                      <p className="truncate text-slate-300">9840214848GBR8405142M2910188&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;4</p>
                    </div>

                  </div>
                )}

                {/* Drag and Drop Zone Hint Banner */}
                <div className="mt-5 p-3 rounded-xl border border-dashed border-slate-700 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Drag & drop passport, driver's license, or selfie image</span>
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-cyan-400 hover:text-cyan-300 underline text-xs"
                  >
                    Browse
                  </button>
                </div>

                {/* Tamper Highlights Interactive Chips */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    Detected Forensic Anomalies ({activePreset.tamperHighlights.length}):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activePreset.tamperHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredHighlightIndex(idx)}
                        onMouseLeave={() => setHoveredHighlightIndex(null)}
                        className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                          hl.severity === 'critical'
                            ? 'bg-rose-950/30 border-rose-500/40 text-rose-300 hover:bg-rose-900/40'
                            : hl.severity === 'warning'
                            ? 'bg-amber-950/30 border-amber-500/40 text-amber-300 hover:bg-amber-900/40'
                            : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/40'
                        } ${hoveredHighlightIndex === idx ? 'ring-1 ring-white' : ''}`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>{hl.label}</span>
                          <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-black/40">
                            {hl.severity}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                          {hl.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE: AI Analysis Results ================= */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden shadow-2xl">
              
              {/* Right Top Header */}
              <div className="px-5 py-3.5 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200">
                    AI_ANALYSIS_RESULTS: MULTI-MODEL ENGINE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>Avg Latency: 480ms</span>
                </div>
              </div>

              <div className="p-6 space-y-6 bg-gradient-to-b from-[#0F172A] to-[#0A0E17]">
                
                {/* 1. Overall Verdict & Fraud Risk Score Card */}
                <div className={`p-5 rounded-xl border transition-all ${
                  activePreset.verdict === 'REJECT'
                    ? 'bg-rose-950/20 border-rose-500/40 shadow-[0_0_30px_rgba(244,63,94,0.15)]'
                    : 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {activePreset.verdict === 'REJECT' ? (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider">
                            <XCircle className="w-3.5 h-3.5" /> VERDICT: REJECT
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider">
                            <CheckCircle2 className="w-3.5 h-3.5" /> VERDICT: PASS
                          </div>
                        )}
                        <span className="text-xs font-mono text-slate-400">Confidence: 99.8%</span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-300 pt-1 leading-snug">
                        {activePreset.verdictReason}
                      </p>
                    </div>

                    {/* Circular Risk Score Badge */}
                    <div className="shrink-0 flex items-center gap-3 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                      <div className="text-right">
                        <div className="text-[10px] font-mono uppercase text-slate-400">RISK SCORE</div>
                        <div className="text-[10px] font-mono text-slate-300">
                          {activePreset.riskScore > 50 ? 'High Fraud Probability' : 'Authentic Certified'}
                        </div>
                      </div>
                      <div className={`w-14 h-14 rounded-full flex flex-col items-center justify-center font-mono font-extrabold text-xl border-2 ${
                        activePreset.riskScore > 75 
                          ? 'border-rose-500 bg-rose-500/20 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                          : activePreset.riskScore > 30 
                          ? 'border-amber-400 bg-amber-400/20 text-amber-300'
                          : 'border-emerald-400 bg-emerald-400/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                      }`}>
                        <span>{activePreset.riskScore}%</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 2. Dynamic Progress Bars Checking (Specific Requirements from Prompt) */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-1">
                    <span>FORENSIC SUBSYSTEM INSPECTIONS</span>
                    <span>ENGINE CONFIDENCE</span>
                  </div>

                  {activePreset.checks.map((check) => (
                    <div 
                      key={check.id} 
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          {check.status === 'PASS' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : check.status === 'ALERT' ? (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0 animate-pulse" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                          )}
                          <span className="font-semibold text-slate-200">{check.name}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${
                            check.status === 'PASS' 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                              : check.status === 'ALERT'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          }`}>
                            [{check.status}]
                          </span>
                          <span className="text-slate-400 text-[11px] font-mono">{check.confidence}%</span>
                        </div>
                      </div>

                      {/* Progress meter bar */}
                      <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${
                            check.status === 'PASS' 
                              ? 'bg-emerald-400' 
                              : check.status === 'ALERT'
                              ? 'bg-rose-500'
                              : 'bg-amber-400'
                          }`}
                          style={{ width: isScanning ? `${scanProgress * 0.7}%` : `${check.confidence}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-0.5">
                        <span className={`${check.status === 'ALERT' ? 'text-rose-300 font-medium' : ''}`}>
                          {check.detail}
                        </span>
                        <span className="text-slate-400 text-[10px] shrink-0 ml-2">
                          {check.latencyMs}ms
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Deep Forensic Metadata Grid */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs space-y-2.5">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      SUB-PIXEL & TELEMETRY ATTESTATION
                    </span>
                    <span className="text-[10px] text-cyan-400">HASH: SHA256-VSH-9281F</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[10px]">EXIF SOFTWARE</span>
                      <span className={`font-semibold ${
                        activePreset.forensics.exifSoftware?.includes('Photoshop') || activePreset.forensics.exifSoftware?.includes('Stable')
                          ? 'text-rose-400' 
                          : 'text-slate-200'
                      }`}>
                        {activePreset.forensics.exifSoftware || 'Original RAW'}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">COMPRESSION RATIO</span>
                      <span className="text-slate-200">{activePreset.forensics.compressionRatio}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">MRZ STATUS</span>
                      <span className={`font-bold ${
                        activePreset.forensics.mrzStatus.includes('INVALID') ? 'text-rose-400' : 'text-emerald-400'
                      }`}>
                        {activePreset.forensics.mrzStatus}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">DARK WEB CLUSTER MATCHES</span>
                      <span className={`font-bold ${
                        activePreset.forensics.darkWebMatches > 0 ? 'text-rose-400' : 'text-emerald-400'
                      }`}>
                        {activePreset.forensics.darkWebMatches} Identity Links
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => copyNotification('Forensic Audit Certificate (PDF) generated and downloaded.')}
                    className="flex-1 min-w-[140px] px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-950" />
                    <span>Export Forensic PDF</span>
                  </button>

                  <button
                    onClick={() => copyNotification('Webhook dispatched to: https://api.clientbank.com/v1/kyc/verdict')}
                    className="flex-1 min-w-[140px] px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs font-mono border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Trigger Webhook</span>
                  </button>

                  <button
                    onClick={() => copyNotification('Audit Hash SHA-256 copied to clipboard.')}
                    className="px-3.5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
                    title="Copy Forensic Hash"
                  >
                    Copy Hash
                  </button>
                </div>

                {/* Copied Toast Banner */}
                {copiedNotification && (
                  <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-xs font-mono text-center animate-fade-in flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{copiedNotification}</span>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
