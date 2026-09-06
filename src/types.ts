export type CheckStatus = 'PASS' | 'ALERT' | 'WARNING' | 'SCANNING';

export interface VerificationCheck {
  id: string;
  name: string;
  category: 'security_features' | 'forensics' | 'biometrics' | 'compliance';
  status: CheckStatus;
  detail: string;
  confidence: number; // 0 to 100
  latencyMs: number;
}

export interface DocumentPreset {
  id: string;
  title: string;
  subtitle: string;
  docType: 'passport' | 'id_card' | 'driver_license' | 'biometric_selfie';
  country: string;
  countryCode: string;
  riskScore: number; // 0 to 100
  verdict: 'REJECT' | 'PASS' | 'REVIEW';
  verdictReason: string;
  imageThumbnail: string;
  tamperHighlights: {
    label: string;
    description: string;
    x: number; // percentage
    y: number;
    width: number;
    height: number;
    severity: 'critical' | 'warning' | 'verified';
  }[];
  checks: VerificationCheck[];
  forensics: {
    exifSoftware?: string;
    compressionRatio: string;
    mrzStatus: string;
    faceMatchScore: number;
    livenessScore: number;
    fontAnomaliesDetected: number;
    darkWebMatches: number;
  };
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  metrics: string;
  telemetry: string[];
}

export interface ArchitectureNode {
  step: number;
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  spec: string;
  details: string[];
  latency: string;
  standard: string;
}

export interface ThreatFeedItem {
  id: string;
  timestamp: string;
  threatType: 'Synthetic ID' | 'Deepfake Injection' | 'Photoshop Tampering' | 'Sanction Match' | 'Emulator Spoof';
  origin: string;
  confidence: string;
  actionTaken: 'BLOCKED' | 'FLAGGED' | 'QUARANTINED';
}
