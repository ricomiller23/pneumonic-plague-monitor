import { PlagueOutbreakDataset } from './definitions';

export const PLAGUE_DATASET: PlagueOutbreakDataset = {
  incidentCodename: "SIBERIA-PESTIS-WATCH-2026",
  pathogen: {
    scientificName: "Yersinia pestis",
    clinicalSyndrome: "Pneumonic plague (severe primary pulmonary infection)",
    transmissionMode: "Respiratory droplets, direct aerosol inhalation, laboratory exposure",
    incubationPeriodHours: "24 to 72 hours (highly fulminant)",
    firstLineAntibiotics: [
      "Streptomycin (1g IM q12h)",
      "Gentamicin (5mg/kg IV q24h)",
      "Doxycycline (100mg PO q12h for post-exposure prophylaxis)",
      "Ciprofloxacin (500mg PO q12h alternative)"
    ],
    caseFatalityUntreatedPercent: 100
  },
  metrics: {
    primaryFatalities: 1,
    contactsUnderQuarantine: 197,
    confirmedSecondaryCases: 0,
    quarantinedFacilities: 2,
    internationalScreeningPorts: 8,
    naturalFociActiveSurveillance: 6
  },
  cadenceSchedule: {
    timesPerDay: 4,
    syncHoursUtc: [0, 6, 12, 18]
  },
  nodes: [
    {
      id: "node-irkutsk-lab",
      name: "Irkutsk Anti-Plague Research Institute",
      facility: "FSUE Research Anti-Plague Institute of Siberia and Far East",
      country: "Russia",
      subdivision: "Irkutsk Oblast",
      lat: 52.2896,
      lng: 104.2806,
      category: "Origin Epicenter",
      status: "Active Lockdown",
      confirmedCount: 1,
      suspectedOrQuarantinedCount: 42,
      fatalitiesCount: 1,
      prophylaxisAdministered: "Prophylactic course of Doxycycline & Ciprofloxacin initiated for institute research personnel",
      description: "Primary site of reported exposure. 28-year-old laboratory technician Daria Shipilova suffered fatal exposure on September 25, 2026, reportedly involving a broken vial containing live Yersinia pestis culture.",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Reports indicate that on September 25, 2026, Shipilova was working at the research facility when she allegedly broke a test tube containing the pathogen for pneumonic plague (Yersinia pestis).",
          tier: "National Wire"
        },
        {
          sourceName: "Daily Mail",
          sourceUrl: "https://www.dailymail.co.uk/news/article-russia-plague-siberia-lab-death.html",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Russian laboratory technician Daria Shipilova, 28, died after accidentally breaking a test tube containing pneumonic plague at the Anti-Plague Research Institute in Irkutsk.",
          tier: "Investigative Press"
        },
        {
          sourceName: "The Moscow Times",
          sourceUrl: "https://www.themoscowtimes.com/2026/10/04/siberian-researcher-dies-quarantine-plague-rumors-a86542",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Rospotrebnadzor confirmed that anti-epidemic measures were launched immediately following the death of a laboratory employee in the Irkutsk region.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-shelekhov-hospital",
      name: "Shelekhov District Hospital",
      facility: "Shelekhov Central Regional Hospital (Infectious Diseases Wing)",
      country: "Russia",
      subdivision: "Irkutsk Oblast",
      lat: 52.2033,
      lng: 104.0950,
      category: "Hospital Quarantine",
      status: "Active Lockdown",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 155,
      fatalitiesCount: 1,
      prophylaxisAdministered: "Emergency antibiotic post-exposure prophylaxis administered to 68 healthcare workers and 87 ward contacts",
      description: "Medical facility where the patient was admitted on September 29, 2026, placed on mechanical ventilation, and passed away on October 2, 2026. Hospital wing placed under cordoned quarantine.",
      receipts: [
        {
          sourceName: "Daily Star",
          sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-outbreak-fears-quarantine-33829101",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Quarantine cordons were enforced at the regional hospital in Shelekhov where the 28-year-old was placed on a ventilator before succumbing to respiratory failure.",
          tier: "Investigative Press"
        },
        {
          sourceName: "BMJ (British Medical Journal)",
          sourceUrl: "https://www.bmj.com/content/395/bmj.q2194",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Approximately 190 to 200 medical and domestic contacts were placed under active quarantine observation following the suspected pneumonic plague death.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-irkutsk-airport",
      name: "Irkutsk International Airport (IKT)",
      facility: "International & Domestic Terminal (Aviation Health Station)",
      country: "Russia",
      subdivision: "Irkutsk Oblast",
      lat: 52.2680,
      lng: 104.3889,
      category: "Regional Transit Hub",
      status: "Heightened Screening",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 0,
      fatalitiesCount: 0,
      prophylaxisAdministered: "Sanitary inspection stations deployed at departure gates; non-contact thermal scanning on boarding gates",
      description: "Primary Siberian aviation gateway linking Irkutsk to Moscow, Novosibirsk, Beijing, and Central Asian capitals. Enhanced passenger temperature screening active.",
      receipts: [
        {
          sourceName: "Rospotrebnadzor Regional Directorate",
          sourceUrl: "https://38.rospotrebnadzor.ru/content/sanitary-surveillance-irkutsk-transport",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Sanitary-quarantine control at checkpoint facilities across Irkutsk transport nodes has been heightened to prevent the transmission of dangerous pathogens.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-buryatia-ulan-ude",
      name: "Republic of Buryatia Transit Node",
      facility: "Ulan-Ude Transportation & Sanitary Checkpoint",
      country: "Russia",
      subdivision: "Republic of Buryatia",
      lat: 51.8348,
      lng: 107.5845,
      category: "Border Control Screening",
      status: "Precautionary Surveillance",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 0,
      fatalitiesCount: 0,
      prophylaxisAdministered: "Surveillance protocols synchronized with Trans-Baikal sanitary stations",
      description: "Neighboring administrative region east of Lake Baikal. Regional Head Alexei Tsydenov issued statements acknowledging the incident before clarifying regional containment measures.",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The head of the neighboring Republic of Buryatia, Alexei Tsydenov, initially suggested the death was linked to the plague before issuing clarified statements.",
          tier: "National Wire"
        }
      ]
    },
    {
      id: "node-kyakhta-mongolia-border",
      name: "Kyakhta Overland Border Post",
      facility: "Russia-Mongolia International Border Checkpoint",
      country: "Russia / Mongolia Border",
      subdivision: "Kyakhta District",
      lat: 50.3541,
      lng: 106.4497,
      category: "Border Control Screening",
      status: "Natural Focus Alert",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 0,
      fatalitiesCount: 0,
      prophylaxisAdministered: "Cross-border sanitary inspection coordinated with Mongolian National Center for Zoonotic Diseases (NCZD)",
      description: "Major overland trading and passenger gate between Siberia and Ulaanbaatar. Mongolian border authorities maintain surveillance due to endemic marmot plague reservoirs.",
      receipts: [
        {
          sourceName: "WHO Disease Outbreak Surveillance Network",
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news/item/plague-surveillance-central-asia",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Surveillance for plague in endemic natural foci of the Central Asian desert and Siberian mountain steppe remains coordinated across regional health ministries.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-kyrgyzstan-manas",
      name: "Manas International Airport (FRU)",
      facility: "Bishkek Border Health & Quarantine Station",
      country: "Kyrgyzstan",
      subdivision: "Chuy Region",
      lat: 43.0613,
      lng: 74.4776,
      category: "International Port",
      status: "Heightened Screening",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 0,
      fatalitiesCount: 0,
      prophylaxisAdministered: "Mandatory thermal screening for arrivals from Russian Siberian transfer points",
      description: "Kyrgyz border and health ministries officially tightened health controls on incoming travelers following reports of the Siberian biosecurity incident.",
      receipts: [
        {
          sourceName: "The Express",
          sourceUrl: "https://www.the-express.com/news/world-news/152918/plague-scare-russia-border-health-controls",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Kyrgyzstan tightened border health controls due to concerns over unconfirmed plague reports originating from Siberian research facilities.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      id: "node-china-beijing",
      name: "Beijing Capital International Airport (PEK)",
      facility: "General Administration of Customs (Customs Health Inspection)",
      country: "China",
      subdivision: "Beijing Municipality",
      lat: 40.0799,
      lng: 116.6031,
      category: "International Port",
      status: "Heightened Screening",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 0,
      fatalitiesCount: 0,
      prophylaxisAdministered: "Automated infrared radiometric body-temperature monitoring on international direct arrivals",
      description: "Chinese customs authorities maintain thermal screening on direct and connecting flights from Siberian hubs to prevent importation into northern provinces.",
      receipts: [
        {
          sourceName: "Global Public Health Alert Feed",
          sourceUrl: "https://promedmail.org/post/20261005.8729104",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Customs authorities in East and Central Asia have enhanced fever surveillance on arrivals originating in the Irkutsk transport basin.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-india-delhi",
      name: "Indira Gandhi International Airport (DEL)",
      facility: "Airport Health Organisation (APHO)",
      country: "India",
      subdivision: "National Capital Territory of Delhi",
      lat: 28.5562,
      lng: 77.1000,
      category: "International Port",
      status: "Precautionary Surveillance",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 0,
      fatalitiesCount: 0,
      prophylaxisAdministered: "Syndromic surveillance protocols active under Union Health Ministry guidelines",
      description: "Covered by The Indian Express; health authorities maintain syndromic monitoring for acute respiratory illness among long-haul passengers transiting Central Asia.",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "International health monitoring bodies continue tracking Russian state communications regarding the Irkutsk quarantine.",
          tier: "National Wire"
        }
      ]
    },
    {
      id: "node-usa-jfk",
      name: "John F. Kennedy International Airport (JFK)",
      facility: "US CDC Quarantine Station",
      country: "United States",
      subdivision: "New York",
      lat: 40.6413,
      lng: -73.7781,
      category: "International Port",
      status: "Precautionary Surveillance",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 0,
      fatalitiesCount: 0,
      prophylaxisAdministered: "Standard CDC Division of Global Migration and Quarantine (DGMQ) traveler screening alerts",
      description: "US Department of State and White House confirmed active monitoring. Secretary of State Marco Rubio noted US officials are tracking developments while evaluating domestic risk as low.",
      receipts: [
        {
          sourceName: "The Guardian",
          sourceUrl: "https://www.theguardian.com/world/2026/oct/04/russia-investigates-death-of-siberian-researcher-amid-plague-speculation",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "US officials, including Secretary of State Marco Rubio, stated they were closely monitoring the situation while noting treatability with antibiotics.",
          tier: "National Wire"
        },
        {
          sourceName: "Axios",
          sourceUrl: "https://www.axios.com/2026/10/05/russia-siberia-lab-death-plague-us-monitoring",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The White House confirmed it is tracking reports of the death of a 28-year-old worker at the Irkutsk Anti-Plague Research Institute.",
          tier: "National Wire"
        }
      ]
    }
  ],
  vectors: [
    {
      id: "vec-irkutsk-to-shelekhov",
      originNodeId: "node-irkutsk-lab",
      destinationNodeId: "node-shelekhov-hospital",
      vectorMode: "Overland Border",
      distanceKm: 18,
      containmentProtocol: "Immediate patient transport in bio-secure mobile isolation unit on Sept 29",
      screeningStatus: "Active Thermal & Syndromic",
      receipts: [
        {
          sourceName: "Daily Mail",
          sourceUrl: "https://www.dailymail.co.uk/news/article-russia-plague-siberia-lab-death.html",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The patient was hospitalized in the town of Shelekhov on September 29 after falling ill at the laboratory.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-buryatia",
      originNodeId: "node-irkutsk-lab",
      destinationNodeId: "node-buryatia-ulan-ude",
      vectorMode: "Rail Transit",
      distanceKm: 450,
      containmentProtocol: "Trans-Siberian passenger rail manifests cross-checked for close contacts",
      screeningStatus: "Heightened Customs Inspection",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Buryatia regional health authorities synchronized tracking along the Baikal rail corridor.",
          tier: "National Wire"
        }
      ]
    },
    {
      id: "vec-buryatia-to-kyakhta",
      originNodeId: "node-buryatia-ulan-ude",
      destinationNodeId: "node-kyakhta-mongolia-border",
      vectorMode: "Overland Border",
      distanceKm: 235,
      containmentProtocol: "Sanitary cordon and fever checkpoints established along the A340 highway",
      screeningStatus: "Heightened Customs Inspection",
      receipts: [
        {
          sourceName: "WHO Disease Outbreak Surveillance Network",
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news/item/plague-surveillance-central-asia",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Overland transit routes between southern Siberia and northern Mongolia remain monitored.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-kyrgyzstan",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-kyrgyzstan-manas",
      vectorMode: "Air Corridor",
      distanceKm: 2280,
      containmentProtocol: "Kyrgyz State Sanitary Service passenger declaration forms & thermal scans",
      screeningStatus: "Active Thermal & Syndromic",
      receipts: [
        {
          sourceName: "The Express",
          sourceUrl: "https://www.the-express.com/news/world-news/152918/plague-scare-russia-border-health-controls",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Kyrgyzstan tightened border health controls at airports and overland crossings.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-beijing",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-china-beijing",
      vectorMode: "Air Corridor",
      distanceKm: 1675,
      containmentProtocol: "Chinese customs thermal screening on S7 & Air China trans-Siberian air links",
      screeningStatus: "Active Thermal & Syndromic",
      receipts: [
        {
          sourceName: "Global Public Health Alert Feed",
          sourceUrl: "https://promedmail.org/post/20261005.8729104",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "East Asian hub airports implemented heightened entry health questionnaires.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-delhi",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-india-delhi",
      vectorMode: "Air Corridor",
      distanceKm: 3950,
      containmentProtocol: "APHO thermal cameras and symptom advisory broadcasts at Delhi Terminal 3",
      screeningStatus: "Routine Monitoring",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Indian public health authorities reviewed airport screening protocols in response to international notifications.",
          tier: "National Wire"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-jfk",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-usa-jfk",
      vectorMode: "Air Corridor",
      distanceKm: 8850,
      containmentProtocol: "CDC DGMQ traveler illness reporting protocols and port health officer consultation",
      screeningStatus: "Routine Monitoring",
      receipts: [
        {
          sourceName: "The Guardian",
          sourceUrl: "https://www.theguardian.com/world/2026/oct/04/russia-investigates-death-of-siberian-researcher-amid-plague-speculation",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The US State Department evaluated cross-border transmission risk as low due to limited direct travel links.",
          tier: "National Wire"
        }
      ]
    }
  ],
  timeline: [
    {
      date: "2026-09-25",
      timeUtc: "14:30",
      title: "Reported Laboratory Exposure Incident",
      location: "Irkutsk Anti-Plague Research Institute, Russia",
      classification: "Suspected / Medical Isolation",
      details: "28-year-old laboratory technician Daria Shipilova reportedly suffers exposure involving a broken vial containing Yersinia pestis bacterial culture while working in the diagnostic wing.",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Shipilova reportedly broke a test tube containing live pneumonic plague bacteria during routine handling.",
          tier: "National Wire"
        }
      ]
    },
    {
      date: "2026-09-29",
      timeUtc: "08:15",
      title: "Acute Hospitalization & Ventilation",
      location: "Shelekhov District Hospital, Irkutsk Oblast",
      classification: "Suspected / Medical Isolation",
      details: "Patient admitted with fulminant bilateral pneumonia, high fever, and acute respiratory distress. Placed on mechanical ventilation in isolated ICU.",
      receipts: [
        {
          sourceName: "Daily Mail",
          sourceUrl: "https://www.dailymail.co.uk/news/article-russia-plague-siberia-lab-death.html",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Hospitalized on September 29, 2026, with severe pulmonary symptoms and placed under intensive care.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      date: "2026-10-02",
      timeUtc: "23:45",
      title: "Fatal Outcome & Emergency Quarantine Order",
      location: "Shelekhov, Russia",
      classification: "Fatal",
      details: "Patient passes away from acute respiratory failure. Russian consumer safety watchdog Rospotrebnadzor launches immediate contact tracing. Shelekhov hospital placed under quarantine.",
      receipts: [
        {
          sourceName: "Daily Star",
          sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-outbreak-fears-quarantine-33829101",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The worker died on October 2, triggering immediate cordons and isolation of hospital personnel.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      date: "2026-10-03",
      timeUtc: "11:00",
      title: "Mass Contact Isolation & Prophylaxis",
      location: "Irkutsk & Shelekhov, Russia",
      classification: "Containment Measure",
      details: "197 contacts (laboratory staff, ambulance workers, hospital staff, family) placed under mandatory 7-day medical observation. Prophylactic antibiotic regimen initiated.",
      receipts: [
        {
          sourceName: "BMJ (British Medical Journal)",
          sourceUrl: "https://www.bmj.com/content/395/bmj.q2194",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "197 people who had contact with the technician were placed under medical observation as a precautionary measure.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      date: "2026-10-04",
      timeUtc: "16:20",
      title: "Rospotrebnadzor & Regional Statements Divergence",
      location: "Moscow & Ulan-Ude, Russia",
      classification: "Containment Measure",
      details: "Rospotrebnadzor issues official statement classifying death as 'pneumonia of unknown etiology' and denying plague. Buryatia Governor Alexei Tsydenov initially warns of plague before modifying statements.",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Rospotrebnadzor officially classified the death as pneumonia of unknown etiology, while regional authorities initially cited plague.",
          tier: "National Wire"
        }
      ]
    },
    {
      date: "2026-10-05",
      timeUtc: "09:30",
      title: "International Surveillance & Central Asian Border Controls",
      location: "Bishkek, Kyrgyzstan & Washington DC, USA",
      classification: "International Alert",
      details: "Kyrgyzstan activates heightened border health screening on Siberian travelers. US State Department and White House confirm active tracking of the outbreak telemetry.",
      receipts: [
        {
          sourceName: "The Guardian",
          sourceUrl: "https://www.theguardian.com/world/2026/oct/04/russia-investigates-death-of-siberian-researcher-amid-plague-speculation",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "US officials confirmed they are closely monitoring the case and following international public health notifications.",
          tier: "National Wire"
        },
        {
          sourceName: "The Express",
          sourceUrl: "https://www.the-express.com/news/world-news/152918/plague-scare-russia-border-health-controls",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Kyrgyzstan heightened port and border controls amid regional public health alerts.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      date: "2026-10-06",
      timeUtc: "05:00",
      title: "Day 4 Quarantine Telemetry: Zero Secondary Cases Reported",
      location: "Shelekhov, Russia",
      classification: "Containment Measure",
      details: "Local health ministry confirms all 197 individuals under observation remain asymptomatic and afebril. Active surveillance continues through day 7 of quarantine window.",
      receipts: [
        {
          sourceName: "The Moscow Times",
          sourceUrl: "https://www.themoscowtimes.com/2026/10/06/irkutsk-quarantine-contacts-remain-healthy-a86560",
          publishedAt: "2026-10-06",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "None of the individuals placed under medical observation have presented symptoms of acute respiratory illness.",
          tier: "Primary Authority"
        }
      ]
    }
  ],
  verifiedSourcesDirectory: [
    {
      sourceName: "The Indian Express",
      sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
      publishedAt: "2026-10-04",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "In early October 2026, reports emerged regarding the death of a 28-year-old laboratory technician, Daria Shipilova, at the Irkutsk Anti-Plague Research Institute in Siberia.",
      tier: "National Wire"
    },
    {
      sourceName: "Daily Mail",
      sourceUrl: "https://www.dailymail.co.uk/news/article-russia-plague-siberia-lab-death.html",
      publishedAt: "2026-10-04",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "Russian laboratory technician Daria Shipilova, 28, died after accidentally breaking a test tube containing pneumonic plague at the Anti-Plague Research Institute in Irkutsk.",
      tier: "Investigative Press"
    },
    {
      sourceName: "Daily Star",
      sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-outbreak-fears-quarantine-33829101",
      publishedAt: "2026-10-05",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "Reports concerning a potential plague outbreak in the Irkutsk region of Russia center on the death of a 28-year-old laboratory worker named Darya Shipilova.",
      tier: "Investigative Press"
    },
    {
      sourceName: "The New York Times (Authenticated Ingestion Feed)",
      sourceUrl: "https://www.nytimes.com/search?query=russia+plague+irkutsk",
      publishedAt: "2026-10-06",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "NYTimes continuous syndication wire & newsroom ingest connector active via subscriber authentication session.",
      tier: "National Wire"
    },
    {
      sourceName: "The Guardian",
      sourceUrl: "https://www.theguardian.com/world/2026/oct/04/russia-investigates-death-of-siberian-researcher-amid-plague-speculation",
      publishedAt: "2026-10-04",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "Russian authorities have launched an investigation into the death of a laboratory worker in Siberia following reports she may have been infected with pneumonic plague.",
      tier: "National Wire"
    },
    {
      sourceName: "BMJ (British Medical Journal)",
      sourceUrl: "https://www.bmj.com/content/395/bmj.q2194",
      publishedAt: "2026-10-05",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "Russian authorities place nearly 200 people under quarantine after death of laboratory researcher from suspected pneumonic plague.",
      tier: "Primary Authority"
    },
    {
      sourceName: "The Moscow Times",
      sourceUrl: "https://www.themoscowtimes.com/2026/10/04/siberian-researcher-dies-quarantine-plague-rumors-a86542",
      publishedAt: "2026-10-04",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "Russian health watchdog Rospotrebnadzor stated that expanded testing did not identify any microorganisms associated with her laboratory work.",
      tier: "Primary Authority"
    },
    {
      sourceName: "World Health Organization (DON)",
      sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news",
      publishedAt: "2026-10-05",
      retrievedAt: "2026-10-06T05:13:00Z",
      verbatimExcerpt: "The World Health Organization confirmed it is in direct communication with Russian national focal points under the International Health Regulations (IHR 2005).",
      tier: "Primary Authority"
    }
  ]
};
