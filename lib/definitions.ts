export type CaseClassification = 'Confirmed' | 'Suspected / Medical Isolation' | 'Ruled Out' | 'Fatal';

export interface SourceReceipt {
  sourceName: string;
  sourceUrl: string;
  publishedAt: string;
  retrievedAt: string;
  verbatimExcerpt: string;
  tier: 'Primary Authority' | 'National Wire' | 'Investigative Press';
}

export interface EpicenterNode {
  id: string;
  name: string;
  facility: string;
  country: string;
  subdivision: string;
  lat: number;
  lng: number;
  category: 'Origin Epicenter' | 'Hospital Quarantine' | 'Regional Transit Hub' | 'Border Control Screening' | 'International Port';
  status: 'Active Lockdown' | 'Precautionary Surveillance' | 'Heightened Screening' | 'Natural Focus Alert';
  confirmedCount: number;
  suspectedOrQuarantinedCount: number;
  fatalitiesCount: number;
  prophylaxisAdministered: string;
  description: string;
  receipts: SourceReceipt[];
}

export interface TransmissionVector {
  id: string;
  originNodeId: string;
  destinationNodeId: string;
  vectorMode: 'Air Corridor' | 'Rail Transit' | 'Overland Border' | 'Maritime Transit';
  distanceKm: number;
  containmentProtocol: string;
  screeningStatus: 'Active Thermal & Syndromic' | 'Heightened Customs Inspection' | 'Routine Monitoring';
  receipts: SourceReceipt[];
}

export interface TimelineMilestone {
  date: string;
  timeUtc?: string;
  title: string;
  location: string;
  classification: CaseClassification | 'Containment Measure' | 'International Alert';
  details: string;
  receipts: SourceReceipt[];
}

export interface PlagueOutbreakDataset {
  incidentCodename: string;
  pathogen: {
    scientificName: string;
    clinicalSyndrome: string;
    transmissionMode: string;
    incubationPeriodHours: string;
    firstLineAntibiotics: string[];
    caseFatalityUntreatedPercent: number;
  };
  metrics: {
    primaryFatalities: number;
    contactsUnderQuarantine: number;
    confirmedSecondaryCases: number;
    quarantinedFacilities: number;
    internationalScreeningPorts: number;
    naturalFociActiveSurveillance: number;
  };
  cadenceSchedule: {
    timesPerDay: number;
    syncHoursUtc: number[];
  };
  nodes: EpicenterNode[];
  vectors: TransmissionVector[];
  timeline: TimelineMilestone[];
  verifiedSourcesDirectory: SourceReceipt[];
}
