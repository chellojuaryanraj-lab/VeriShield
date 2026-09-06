import { DocumentPreset, CapabilityItem, ArchitectureNode, ThreatFeedItem } from '../types';

export const DOCUMENT_PRESETS: DocumentPreset[] = [
  {
    id: 'altered-passport',
    title: 'Altered Passport',
    subtitle: 'High Fraud Probability — Photoshop Tamper & MRZ Spoof',
    docType: 'passport',
    country: 'United Kingdom',
    countryCode: 'GBR',
    riskScore: 87,
    verdict: 'REJECT',
    verdictReason: 'Photoshop metadata detected, facial boundary clone stamp artifacts, and invalid MRZ checksum calculation.',
    imageThumbnail: 'passport_tampered',
    tamperHighlights: [
      {
        label: 'Metadata & Exif Alteration',
        description: 'Image editor signature detected: Adobe Photoshop 2024 (Windows). Resaved at 82% quality factor.',
        x: 10,
        y: 8,
        width: 42,
        height: 14,
        severity: 'critical'
      },
      {
        label: 'Face Morphing Detected',
        description: 'Alpha feathering around collarbone and jawline indicates spliced photo over original substrate.',
        x: 12,
        y: 28,
        width: 32,
        height: 48,
        severity: 'critical'
      },
      {
        label: 'Font Kerning Anomaly in DOB',
        description: 'Sub-pixel misalignment detected on numerical glyph "8" in birthdate (1984 vs template OCR baseline).',
        x: 52,
        y: 46,
        width: 38,
        height: 12,
        severity: 'warning'
      },
      {
        label: 'MRZ Checksum Failure',
        description: 'Line 2 character 28 modulo-7 check digit mismatch. Stored: 4, Expected: 9.',
        x: 48,
        y: 78,
        width: 48,
        height: 16,
        severity: 'critical'
      }
    ],
    checks: [
      {
        id: 'chk-1',
        name: 'Hologram & Watermark Authenticity',
        category: 'security_features',
        status: 'PASS',
        detail: 'Optical variable ink refractions match ISO/IEC 18013 standard',
        confidence: 96.2,
        latencyMs: 140
      },
      {
        id: 'chk-2',
        name: 'Metadata & Exif Alteration',
        category: 'forensics',
        status: 'ALERT',
        detail: 'ALERT: Modified in Photoshop. Quantization table mismatch.',
        confidence: 99.8,
        latencyMs: 85
      },
      {
        id: 'chk-3',
        name: 'Biometric Liveness Check',
        category: 'biometrics',
        status: 'PASS',
        detail: 'Passive volumetric 3D depth verified without user challenge',
        confidence: 98.4,
        latencyMs: 210
      },
      {
        id: 'chk-4',
        name: 'MRZ OCR & Checksum Consistency',
        category: 'forensics',
        status: 'ALERT',
        detail: 'Failed Modulo-7 check digit verification in line 2 position 28',
        confidence: 99.9,
        latencyMs: 95
      },
      {
        id: 'chk-5',
        name: 'Sub-pixel Font Interpolation',
        category: 'forensics',
        status: 'WARNING',
        detail: 'Variable glyph kerning detected across expiration date block',
        confidence: 88.5,
        latencyMs: 130
      }
    ],
    forensics: {
      exifSoftware: 'Adobe Photoshop 25.4 (Win64)',
      compressionRatio: '1:14 (Multiple Re-saves)',
      mrzStatus: 'INVALID_CHECKSUM_MOD7',
      faceMatchScore: 41.2,
      livenessScore: 94.0,
      fontAnomaliesDetected: 4,
      darkWebMatches: 1
    }
  },
  {
    id: 'synthetic-id',
    title: 'Synthetic Driver\'s License',
    subtitle: 'Franken-Identity — AI Face & Stolen SSN Combination',
    docType: 'driver_license',
    country: 'United States (California)',
    countryCode: 'USA',
    riskScore: 94,
    verdict: 'REJECT',
    verdictReason: 'Generative AI facial features (GAN pupil asymmetry) and SSN issued prior to holder recorded birth year.',
    imageThumbnail: 'dl_synthetic',
    tamperHighlights: [
      {
        label: 'Generative Face Synthesis',
        description: 'StyleGAN3 spectral watermark found in frequency domain; pupillary light reflection asymmetry.',
        x: 10,
        y: 20,
        width: 34,
        height: 54,
        severity: 'critical'
      },
      {
        label: 'Synthetic Credit Bureau Flag',
        description: 'Credit bureau inquiry record created only 14 days ago for an alleged 42-year-old profile.',
        x: 48,
        y: 25,
        width: 46,
        height: 18,
        severity: 'critical'
      },
      {
        label: 'Ghost Barcode (PDF417)',
        description: '2D barcode encoding lacks mandatory DMV cryptographic salt and state jurisdiction hash.',
        x: 48,
        y: 65,
        width: 46,
        height: 24,
        severity: 'critical'
      }
    ],
    checks: [
      {
        id: 'chk-syn-1',
        name: 'Synthetic Identity Scrubbing',
        category: 'compliance',
        status: 'ALERT',
        detail: 'Credit file established 14 days ago. SSN issued in 1978, DOB claims 1993.',
        confidence: 99.4,
        latencyMs: 310
      },
      {
        id: 'chk-syn-2',
        name: 'Generative AI / GAN Face Analysis',
        category: 'biometrics',
        status: 'ALERT',
        detail: 'Fourier domain artifacts indicative of diffusion/GAN face generator',
        confidence: 97.9,
        latencyMs: 195
      },
      {
        id: 'chk-syn-3',
        name: 'Hologram & Watermark Authenticity',
        category: 'security_features',
        status: 'ALERT',
        detail: 'Simulated flat gold gradient rather than diffractive rainbow foil',
        confidence: 98.1,
        latencyMs: 120
      },
      {
        id: 'chk-syn-4',
        name: 'AAMVA Barcode Spec Alignment',
        category: 'forensics',
        status: 'ALERT',
        detail: 'PDF417 header subfile structure violates California DMV 2022 guidelines',
        confidence: 100,
        latencyMs: 110
      }
    ],
    forensics: {
      exifSoftware: 'Stable Diffusion XL / ComfyUI pipeline',
      compressionRatio: 'Lossless PNG to JPEG injected',
      mrzStatus: 'NOT_APPLICABLE',
      faceMatchScore: 12.8,
      livenessScore: 18.3,
      fontAnomaliesDetected: 7,
      darkWebMatches: 3
    }
  },
  {
    id: 'deepfake-injection',
    title: 'Deepfake Replay Attack',
    subtitle: 'Virtual Camera Injection & Presentation Replay Attack',
    docType: 'biometric_selfie',
    country: 'Germany',
    countryCode: 'DEU',
    riskScore: 91,
    verdict: 'REJECT',
    verdictReason: 'Moiré pattern indicative of digital screen capture + synthetic pulse photoplethysmography (rPPG) anomaly.',
    imageThumbnail: 'deepfake_selfie',
    tamperHighlights: [
      {
        label: 'Screen Pixel Grid & Moiré Pattern',
        description: 'Micro-raster lines detected at 120Hz frequency confirming high-res iPad screen replay attack.',
        x: 20,
        y: 12,
        width: 60,
        height: 50,
        severity: 'critical'
      },
      {
        label: 'Synthetic Pulse / Blood Flow Anomaly',
        description: 'Remote photoplethysmography (rPPG) sensor detected flatline pulse frequency in facial capillaries.',
        x: 35,
        y: 40,
        width: 30,
        height: 30,
        severity: 'critical'
      }
    ],
    checks: [
      {
        id: 'chk-df-1',
        name: 'Passive Liveness / rPPG Pulse',
        category: 'biometrics',
        status: 'ALERT',
        detail: 'No organic cardiac pulse signal detected through sub-dermal capillary analysis',
        confidence: 99.1,
        latencyMs: 240
      },
      {
        id: 'chk-df-2',
        name: 'Moiré & Screen Reflection Analysis',
        category: 'security_features',
        status: 'ALERT',
        detail: 'Screen RGB subpixel grid detected under polarized frequency filter',
        confidence: 98.7,
        latencyMs: 140
      },
      {
        id: 'chk-df-3',
        name: 'Virtual Camera & Hardware Signature',
        category: 'forensics',
        status: 'ALERT',
        detail: 'OBS VirtualCam driver signature intercepted in WebRTC video stream',
        confidence: 100,
        latencyMs: 70
      },
      {
        id: 'chk-df-4',
        name: 'Facial Landmark Temporal Stability',
        category: 'biometrics',
        status: 'ALERT',
        detail: 'Micro-jitter and warping detected during head rotation angle sweep',
        confidence: 95.8,
        latencyMs: 180
      }
    ],
    forensics: {
      exifSoftware: 'DeepFaceLive v2.1 (Interpreted)',
      compressionRatio: 'H.264 WebRTC Stream (Virtual Buffer)',
      mrzStatus: 'NOT_APPLICABLE',
      faceMatchScore: 68.4,
      livenessScore: 4.2,
      fontAnomaliesDetected: 0,
      darkWebMatches: 0
    }
  },
  {
    id: 'genuine-id',
    title: 'Authentic Biometric Passport',
    subtitle: 'Zero Anomalies — Full Cryptographic & Hologram Validation',
    docType: 'passport',
    country: 'Singapore',
    countryCode: 'SGP',
    riskScore: 3,
    verdict: 'PASS',
    verdictReason: 'All cryptographic checks passed. Microprint, UV watermark, optical variable ink, and MRZ checksum 100% genuine.',
    imageThumbnail: 'passport_genuine',
    tamperHighlights: [
      {
        label: 'ICAO Doc 9303 Compliant',
        description: 'Laser perforation, guilloche patterns, and optical variable ink verified at 600 DPI.',
        x: 10,
        y: 10,
        width: 80,
        height: 80,
        severity: 'verified'
      }
    ],
    checks: [
      {
        id: 'chk-gen-1',
        name: 'Hologram & Watermark Authenticity',
        category: 'security_features',
        status: 'PASS',
        detail: 'Optically Variable Device (OVD) kinetic light movement confirmed',
        confidence: 99.9,
        latencyMs: 120
      },
      {
        id: 'chk-gen-2',
        name: 'Metadata & Exif Alteration',
        category: 'forensics',
        status: 'PASS',
        detail: 'Original sensor color filter array (Bayer) intact; zero re-encoding detected',
        confidence: 99.7,
        latencyMs: 65
      },
      {
        id: 'chk-gen-3',
        name: 'Biometric Liveness Check',
        category: 'biometrics',
        status: 'PASS',
        detail: 'Natural micro-saccadic eye movement and capillary pulse verified',
        confidence: 99.6,
        latencyMs: 185
      },
      {
        id: 'chk-gen-4',
        name: 'MRZ OCR & Checksum Consistency',
        category: 'forensics',
        status: 'PASS',
        detail: 'Line 1 and Line 2 check digits verified with zero OCR ambiguity',
        confidence: 100,
        latencyMs: 80
      },
      {
        id: 'chk-gen-5',
        name: 'Automated AML & Sanctions Check',
        category: 'compliance',
        status: 'PASS',
        detail: 'Clean match across OFAC, Interpol Red Notices, and PEP registers',
        confidence: 100,
        latencyMs: 220
      }
    ],
    forensics: {
      exifSoftware: 'Apple iPhone 15 Pro (Native Sensor RAW)',
      compressionRatio: '1:4 Standard Direct Capture',
      mrzStatus: 'ALL_CHECKSUMS_VALID',
      faceMatchScore: 99.4,
      livenessScore: 99.8,
      fontAnomaliesDetected: 0,
      darkWebMatches: 0
    }
  }
];

export const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'doc-verification',
    title: 'Multi-Spectral Document Verification',
    description: 'Multi-spectral analysis of passports, national IDs, and driver\'s licenses from 200+ countries with sub-millimeter precision.',
    iconName: 'FileCheck2',
    tag: '200+ Countries',
    metrics: '99.94% OCR Accuracy',
    telemetry: ['ICAO Doc 9303 Compliant', 'UV & IR Emulation', 'Microprint Inspection', 'Guilloche Verification']
  },
  {
    id: 'deepfake-liveness',
    title: 'Deepfake & Liveness Detection',
    description: 'Passive biometric checks to defeat presentation attacks, silicon mask spoofs, 3D avatars, and virtual camera video injections.',
    iconName: 'Eye',
    tag: 'iBeta Level 2 Certified',
    metrics: '< 180ms Verification',
    telemetry: ['rPPG Blood Flow Analysis', 'Moiré Screen Detection', 'Micro-expression Tracking', '3D Volumetric Mesh']
  },
  {
    id: 'synthetic-scrubbing',
    title: 'Synthetic Identity Scrubbing',
    description: 'Cross-referencing global credit bureaus, telecom records, and dark web data dumps to spot fabricated or Franken-personas.',
    iconName: 'UserX',
    tag: 'Zero-Day Persona Engine',
    metrics: '99.2% Synthetic Catch Rate',
    telemetry: ['SSN/Tax ID Inconsistency', 'Identity Depth Velocity', 'Dark Web Leak Cross-Check', 'Graph Cluster Analysis']
  },
  {
    id: 'automated-compliance',
    title: 'Automated Real-Time Compliance',
    description: 'Autonomous AML, KYC, Sanction list, and Politically Exposed Persons (PEP) screening refreshed every 60 minutes globally.',
    iconName: 'ShieldAlert',
    tag: 'Continuous Audit Trail',
    metrics: '60-Min Feed Refresh',
    telemetry: ['OFAC & UN Sanction Lists', 'PEP & Adverse Media', 'Interpol Red Notices', 'Automated SAR Export']
  },
  {
    id: 'subpixel-forensics',
    title: 'Sub-Pixel Forensics & Metadata Analysis',
    description: 'Deep neural detection of clone-stamping, Photoshop layer artifacts, compression quantization inconsistencies, and font kerning drift.',
    iconName: 'Cpu',
    tag: 'Deep Quantization Scan',
    metrics: '0.01mm Sub-pixel Grid',
    telemetry: ['Error Level Analysis (ELA)', 'JPEG Ghost Artifacts', 'Glyph Geometry Verification', 'Sensor Noise Pattern (PRNU)']
  },
  {
    id: 'nfc-attestation',
    title: 'Cryptographic NFC & Chip Attestation',
    description: 'Direct zero-trust reading of e-Passport RFID chips and smart ID credentials via consumer smartphone NFC with PKI signature proof.',
    iconName: 'KeyRound',
    tag: 'Passive & Active Auth',
    metrics: '100% Cryptographic Certainty',
    telemetry: ['CSCA Master List Verifier', 'BAC / EAC / SAC Protocol', 'Cloning Defense (Active Auth)', 'Zero Hardware Required']
  }
];

export const ARCHITECTURE_STEPS: ArchitectureNode[] = [
  {
    step: 1,
    id: 'sdk-capture',
    title: 'Zero-Trust Client Capture',
    subtitle: 'Mobile SDK & Webhook Stream',
    icon: 'Smartphone',
    spec: 'End-to-end sandboxed capture with anti-tamper client integrity attestations.',
    details: [
      'iOS & Android native SDKs with jailbreak/root defense',
      'Client-side anti-emulator & virtual camera interceptor',
      'Real-time glare, blur, and angle feedback loops'
    ],
    latency: '35ms',
    standard: 'SafetyNet / Play Integrity / DeviceCheck'
  },
  {
    step: 2,
    id: 'tls-encryption',
    title: 'In-Transit Quantum-Resistant Vault',
    subtitle: 'AES-256 GCM + TLS 1.3 Strict',
    icon: 'Lock',
    spec: 'Payloads sealed with ephemeral session keys before leaving browser memory.',
    details: [
      'Perfect Forward Secrecy (PFS) with ECDHE key exchange',
      'Hardware security module (HSM) key derivation',
      'Zero unencrypted data stored to disk or caching layers'
    ],
    latency: '12ms',
    standard: 'FIPS 140-3 Level 4'
  },
  {
    step: 3,
    id: 'neural-engine',
    title: 'VeriShield AI Neural Consortium',
    subtitle: 'Multi-Model Consensus Pipeline',
    icon: 'Cpu',
    spec: '7 specialized vision and graph transformers executing parallel forensic passes.',
    details: [
      'Ensemble decision tree with Bayesian confidence calibration',
      'Optical Character Recognition (OCR) with 200+ script support',
      'Graph database matching 1.4B+ synthetic identity indicators'
    ],
    latency: '620ms',
    standard: 'SOC 2 Type II Certified'
  },
  {
    step: 4,
    id: 'instant-verdict',
    title: 'Instant Verdict & Audit Webhook',
    subtitle: 'High-Throughput Decision API',
    icon: 'CheckCircle2',
    spec: 'Structured JSON payload delivered to core banking or onboarding workflow.',
    details: [
      'Sub-second verdict with machine-readable risk score (0-100)',
      'Signed cryptographic PDF forensic certificate export',
      'Automatic SAR drafting and case management webhooks'
    ],
    latency: '45ms',
    standard: 'REST / GraphQL / gRPC'
  }
];

export const LIVE_THREAT_FEED: ThreatFeedItem[] = [
  {
    id: 'th-1',
    timestamp: '4s ago',
    threatType: 'Photoshop Tampering',
    origin: 'London, UK',
    confidence: '99.8%',
    actionTaken: 'BLOCKED'
  },
  {
    id: 'th-2',
    timestamp: '18s ago',
    threatType: 'Deepfake Injection',
    origin: 'Singapore',
    confidence: '98.9%',
    actionTaken: 'BLOCKED'
  },
  {
    id: 'th-3',
    timestamp: '32s ago',
    threatType: 'Synthetic ID',
    origin: 'Frankfurt, DE',
    confidence: '97.4%',
    actionTaken: 'BLOCKED'
  },
  {
    id: 'th-4',
    timestamp: '47s ago',
    threatType: 'Sanction Match',
    origin: 'New York, US',
    confidence: '100%',
    actionTaken: 'QUARANTINED'
  },
  {
    id: 'th-5',
    timestamp: '1m ago',
    threatType: 'Emulator Spoof',
    origin: 'São Paulo, BR',
    confidence: '99.2%',
    actionTaken: 'BLOCKED'
  }
];

export const CLIENT_LOGOS = [
  { name: 'ApexBank', sector: 'Tier 1 Digital Bank', volume: '$18B Assets' },
  { name: 'VaultPay', sector: 'Cross-Border Payments', volume: '4.2M Users' },
  { name: 'CryptoShield', sector: 'Institutional Exchange', volume: '12M Tx/mo' },
  { name: 'RevolutX', sector: 'Global Neo-Bank', volume: '30M+ Accounts' },
  { name: 'NexoPrime', sector: 'Prime Brokerage', volume: '$8.4B AUM' },
  { name: 'Monolith Capital', sector: 'Fintech Infrastructure', volume: '500+ APPs' }
];

export const COMPLIANCE_BADGES = [
  { title: 'SOC 2 Type II', subtitle: 'Continuous AICPA Audit', icon: 'ShieldCheck' },
  { title: 'ISO 27001', subtitle: 'Information Security Mgmt', icon: 'Award' },
  { title: 'GDPR / CCPA', subtitle: 'Zero-Knowledge Privacy', icon: 'Lock' },
  { title: 'iBeta Level 2', subtitle: 'Presentation Attack Defense', icon: 'CheckCircle' },
  { title: 'eIDAS High', subtitle: 'EU Qualified Trust Anchor', icon: 'Globe' }
];
