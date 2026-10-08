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
    disputedFatalities: 1,
    totalFatalitiesReported: 2,
    contactsUnderQuarantine: 197,
    confirmedSecondaryCases: 0,
    quarantinedFacilities: 3,
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
          verbatimExcerpt: "A 28-year-old laboratory researcher at the Irkutsk Anti-Plague Research Institute in Siberia died after reportedly breaking a test tube containing plague bacteria.",
          tier: "National Wire"
        },
        {
          sourceName: "The Guardian",
          sourceUrl: "https://www.theguardian.com/world/2026/oct/04/russia-investigates-death-of-siberian-researcher-amid-plague-speculation",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Russian health watchdog Rospotrebnadzor confirmed the death of researcher Daria Shipilova on October 2, attributing it to severe pulmonary illness.",
          tier: "National Wire"
        },
        {
          sourceName: "BMJ (British Medical Journal)",
          sourceUrl: "https://www.bmj.com/content/395/bmj.q2194",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The worker fell ill on 25 September following laboratory procedures at the specialized plague research institute in Irkutsk.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-shelekhov-hospital",
      name: "Irkutsk Regional Infectious Diseases Hospital",
      facility: "Shelekhov Cordon Ward / Regional Isolation Facility",
      country: "Russia",
      subdivision: "Irkutsk Oblast",
      lat: 52.2058,
      lng: 104.0950,
      category: "Hospital Quarantine",
      status: "Active Lockdown",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 155,
      fatalitiesCount: 1,
      prophylaxisAdministered: "Emergency antibiotic post-exposure prophylaxis administered to 68 healthcare workers and 87 ward contacts",
      description: "Medical facility where the primary patient was admitted on September 29, 2026, placed on mechanical ventilation, and passed away on October 2, 2026. Hospital wing placed under cordoned quarantine.",
      receipts: [
        {
          sourceName: "Daily Star",
          sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-outbreak-fears-quarantine-33829101",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Nearly 200 people who came into contact with the victim were placed in hospital isolation in the town of Shelekhov.",
          tier: "Investigative Press"
        },
        {
          sourceName: "The Moscow Times",
          sourceUrl: "https://www.themoscowtimes.com/2026/10/04/siberian-researcher-dies-quarantine-plague-rumors-a86542",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The medical facility where the patient was treated has restricted access, with medical staff undergoing preventive antibiotic treatment.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-irkutsk-district-hospital",
      name: "Irkutsk District Clinical Hospital",
      facility: "District Hospital Isolation Ward & Secondary Pulmonary Quarantine Wing",
      country: "Russia",
      subdivision: "Irkutsk Oblast",
      lat: 52.3211,
      lng: 104.2255,
      category: "Hospital Quarantine",
      status: "Active Lockdown",
      confirmedCount: 0,
      suspectedOrQuarantinedCount: 42,
      fatalitiesCount: 0,
      disputedFatalitiesCount: 1,
      prophylaxisAdministered: "Emergency antibiotic prophylaxis deployed for ward medical staff; facility under sanitary cordons",
      description: "District healthcare facility where international investigative reporting (Daily Mail, Daily Star, United24) reported an unconfirmed second fatality linked to severe acute respiratory distress following contact with the primary exposure case. Kremlin spokesman Dmitry Peskov and Rospotrebnadzor have officially denied the second death, while the WHO has formally submitted an IHR inquiry requesting clinical dossiers and laboratory verification.",
      receipts: [
        {
          sourceName: "Daily Mail",
          sourceUrl: "https://www.dailymail.co.uk/news/article-13931649/second-death-plague-outbreak-russia-irkutsk.html",
          publishedAt: "2026-10-06",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "Reports emerge of an alleged second fatality at an Irkutsk district hospital amid growing biosecurity concerns, prompting international demands for transparency.",
          tier: "Investigative Press"
        },
        {
          sourceName: "Daily Star",
          sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-second-death-irkutsk-33829401",
          publishedAt: "2026-10-06",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "Second patient reportedly dies in Siberian hospital as Russian officials push back against claims of wider contagion.",
          tier: "Investigative Press"
        },
        {
          sourceName: "The Moscow Times",
          sourceUrl: "https://www.themoscowtimes.com/2026/10/07/kremlin-denies-second-plague-death-in-irkutsk-a86591",
          publishedAt: "2026-10-07",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "Kremlin spokesman Dmitry Peskov called reports claiming a second death 'untrue information', directing queries to Rospotrebnadzor.",
          tier: "National Wire"
        },
        {
          sourceName: "World Health Organization (DON)",
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON589",
          publishedAt: "2026-10-07",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "WHO has formally contacted the Russian government requesting clarification and comprehensive epidemiological details regarding the reported second fatality and clinical status of quarantined contacts.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-irkutsk-airport",
      name: "Irkutsk International Airport (IKT)",
      facility: "Rospotrebnadzor Sanitary Quarantine Border Inspection Post",
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
          sourceUrl: "https://rospotrebnadzor.ru/about/info/news/",
          publishedAt: "2026-10-03",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Continuous sanitary and quarantine control points at Irkutsk International Airport have transitioned to heightened operational mode.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-buryatia-ulan-ude",
      name: "Ulan-Ude Regional Border Hub",
      facility: "Republic of Buryatia Sanitary Inspection Cordon",
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
          verbatimExcerpt: "Alexei Tsydenov, the head of neighboring Buryatia, initially urged residents not to panic about reports of the plague before deleting the post.",
          tier: "National Wire"
        }
      ]
    },
    {
      id: "node-kyakhta-mongolia-border",
      name: "Kyakhta–Altanbulag Overland Border Crossing",
      facility: "Federal Border Sanitary Checkpoint Kyakhta",
      country: "Russia / Mongolia",
      subdivision: "Buryatia / Selenge",
      lat: 50.3540,
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
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Surveillance along the Mongolia-Siberia natural foci border active for zoonotic spillover.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-kyrgyzstan-manas",
      name: "Manas International Airport (FRU)",
      facility: "Ministry of Health Border Quarantine Post",
      country: "Kyrgyzstan",
      subdivision: "Chuy Region / Bishkek",
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
          verbatimExcerpt: "Kyrgyzstan's health ministry ordered tightened health controls on arrivals at border crossings and airports.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      id: "node-china-beijing",
      name: "Beijing Capital International Airport (PEK)",
      facility: "General Administration of Customs Quarantine Inspection",
      country: "China",
      subdivision: "Beijing",
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
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Northern Asian border entries maintain automated temperature gating for flights from Central and Eastern Russia.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "node-india-delhi",
      name: "Indira Gandhi International Airport (DEL)",
      facility: "Airport Health Organisation (APHO)",
      country: "India",
      subdivision: "Delhi",
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
          verbatimExcerpt: "Indian health authorities are reviewing global alert feeds regarding respiratory pathogen risks.",
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
      id: "vec-irkutsk-to-district-hospital",
      originNodeId: "node-irkutsk-lab",
      destinationNodeId: "node-irkutsk-district-hospital",
      vectorMode: "Overland Border",
      distanceKm: 8,
      containmentProtocol: "Sanitary perimeter established around district isolation unit; medical personnel placed on post-exposure prophylaxis",
      screeningStatus: "Active Thermal & Syndromic",
      receipts: [
        {
          sourceName: "Daily Mail",
          sourceUrl: "https://www.dailymail.co.uk/news/article-13931649/second-death-plague-outbreak-russia-irkutsk.html",
          publishedAt: "2026-10-06",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "Containment cordons were expanded around secondary regional hospital wards in Irkutsk Oblast.",
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
      containmentProtocol: "Highway sanitization checkpoints deployed at federal road A340",
      screeningStatus: "Heightened Customs Inspection",
      receipts: [
        {
          sourceName: "WHO Disease Outbreak Surveillance Network",
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Border crossings monitored closely given proximity to active marmot plague foci in Selenge province.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-kyrgyzstan",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-kyrgyzstan-manas",
      vectorMode: "Air Corridor",
      distanceKm: 2150,
      containmentProtocol: "Arrival passenger manifests isolated; non-contact radiometric screening on jet bridge",
      screeningStatus: "Active Thermal & Syndromic",
      receipts: [
        {
          sourceName: "The Express",
          sourceUrl: "https://www.the-express.com/news/world-news/152918/plague-scare-russia-border-health-controls",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Health authorities in Bishkek introduced mandatory thermal screening on Siberian arrivals.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-beijing",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-china-beijing",
      vectorMode: "Air Corridor",
      distanceKm: 1680,
      containmentProtocol: "Automated customs body scanners and syndromic questionnaire declarations",
      screeningStatus: "Active Thermal & Syndromic",
      receipts: [
        {
          sourceName: "Global Public Health Alert Feed",
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Aviation health screening remains active on cross-border North Asian passenger corridors.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-delhi",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-india-delhi",
      vectorMode: "Air Corridor",
      distanceKm: 3820,
      containmentProtocol: "Connecting flights via Almaty/Tashkent subjected to point-of-entry health advisories",
      screeningStatus: "Routine Monitoring",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Indian public health services alerted to long-haul travelers transiting through Siberian corridors.",
          tier: "National Wire"
        }
      ]
    },
    {
      id: "vec-irkutsk-to-usa-jfk",
      originNodeId: "node-irkutsk-airport",
      destinationNodeId: "node-usa-jfk",
      vectorMode: "Air Corridor",
      distanceKm: 9280,
      containmentProtocol: "CDC DGMQ global migration alert; tertiary connecting passenger tracking active",
      screeningStatus: "Routine Monitoring",
      receipts: [
        {
          sourceName: "The Guardian",
          sourceUrl: "https://www.theguardian.com/world/2026/oct/04/russia-investigates-death-of-siberian-researcher-amid-plague-speculation",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "US authorities reported no immediate domestic risk while coordinating through international disease networks.",
          tier: "National Wire"
        }
      ]
    }
  ],
  timeline: [
    {
      date: "2026-09-25",
      timeUtc: "14:15",
      title: "Laboratory Bio-Accident at Irkutsk Research Institute",
      location: "Irkutsk, Siberia, Russia",
      classification: "Suspected / Medical Isolation",
      details: "28-year-old researcher Daria Shipilova reportedly broke a test tube containing live Yersinia pestis culture while working in the high-containment biosafety facility.",
      receipts: [
        {
          sourceName: "Indian Express",
          sourceUrl: "https://indianexpress.com/article/world/plague-outbreak-russia-siberia-death-quarantine-9603845/",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The researcher reportedly broke a test tube containing plague bacteria on September 25 before developing acute symptoms.",
          tier: "National Wire"
        }
      ]
    },
    {
      date: "2026-09-29",
      timeUtc: "18:00",
      title: "Patient Hospitalization & Mechanical Ventilation",
      location: "Shelekhov, Irkutsk Oblast, Russia",
      classification: "Suspected / Medical Isolation",
      details: "Following severe respiratory deterioration, the patient was hospitalized in the town of Shelekhov and placed in isolation on mechanical respiratory support.",
      receipts: [
        {
          sourceName: "Daily Star",
          sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-outbreak-fears-quarantine-33829101",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "She was admitted to the hospital in Shelekhov on September 29 after her condition rapidly deteriorated.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      date: "2026-10-02",
      timeUtc: "06:40",
      title: "Fatal Outcome: Primary Patient Deceased",
      location: "Shelekhov, Russia",
      classification: "Fatal",
      details: "Daria Shipilova passed away from acute pulmonary respiratory failure. Initial clinical reporting identified pneumonic plague, triggering immediate quarantine cordons.",
      receipts: [
        {
          sourceName: "The Guardian",
          sourceUrl: "https://www.theguardian.com/world/2026/oct/04/russia-investigates-death-of-siberian-researcher-amid-plague-speculation",
          publishedAt: "2026-10-04",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "The 28-year-old laboratory worker died on October 2, prompting a swift response from health authorities.",
          tier: "National Wire"
        }
      ]
    },
    {
      date: "2026-10-03",
      timeUtc: "11:00",
      title: "197 Contacts Placed Under Strict Quarantine Observation",
      location: "Irkutsk & Shelekhov, Russia",
      classification: "Containment Measure",
      details: "Russian authorities place 197 individuals (institute colleagues, hospital doctors, nurses, and ambulance crew) under 7-day observation with prophylactic antibiotic therapy.",
      receipts: [
        {
          sourceName: "BMJ (British Medical Journal)",
          sourceUrl: "https://www.bmj.com/content/395/bmj.q2194",
          publishedAt: "2026-10-05",
          retrievedAt: "2026-10-06T05:13:00Z",
          verbatimExcerpt: "Nearly 200 people who came into contact with the patient were placed under medical observation as a precautionary measure.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      date: "2026-10-04",
      timeUtc: "14:20",
      title: "Official Rospotrebnadzor Statement: Unknown Etiology Classification",
      location: "Moscow, Russia",
      classification: "Containment Measure",
      details: "Federal watchdog Rospotrebnadzor issues statement attributing death to pneumonia of unknown etiology, stating that tests did not identify pathogens linked to her laboratory work.",
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
    },
    {
      date: "2026-10-06",
      timeUtc: "18:30",
      title: "Second Fatality Reported by International Press; Disputed by Regional Authorities",
      location: "Irkutsk District Hospital, Russia",
      classification: "Disputed / Under Inquiry",
      details: "International media outlets (Daily Mail, Daily Star, United24) report an unconfirmed second fatality involving a patient at an Irkutsk district hospital presenting with acute respiratory failure. Independent observers note several regional Russian news articles referencing the death were rapidly removed from state-affiliated web portals.",
      receipts: [
        {
          sourceName: "Daily Mail",
          sourceUrl: "https://www.dailymail.co.uk/news/article-13931649/second-death-plague-outbreak-russia-irkutsk.html",
          publishedAt: "2026-10-06",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "Claims of a second fatality at an Irkutsk hospital sparked international scrutiny and diplomatic inquiries.",
          tier: "Investigative Press"
        },
        {
          sourceName: "Daily Star",
          sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-second-death-irkutsk-33829401",
          publishedAt: "2026-10-06",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "Fears mount over a second reported fatality in Siberia following the anti-plague research laboratory incident.",
          tier: "Investigative Press"
        }
      ]
    },
    {
      date: "2026-10-07",
      timeUtc: "08:30",
      title: "Kremlin & Rospotrebnadzor Issue Blanket Denial of Second Death",
      location: "Moscow, Russia",
      classification: "Containment Measure",
      details: "Kremlin spokesman Dmitry Peskov addresses the reports directly, calling media coverage claiming a second death 'untrue information' and directing journalists strictly to consumer safety watchdog Rospotrebnadzor. Russian federal authorities reiterate that laboratory testing on all 197 observed contacts remains negative.",
      receipts: [
        {
          sourceName: "The Moscow Times",
          sourceUrl: "https://www.themoscowtimes.com/2026/10/07/kremlin-denies-second-plague-death-in-irkutsk-a86591",
          publishedAt: "2026-10-07",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "Kremlin spokesman Dmitry Peskov branded reports of a second death as false information, insisting federal agencies have the situation under complete control.",
          tier: "National Wire"
        }
      ]
    },
    {
      date: "2026-10-07",
      timeUtc: "12:00",
      title: "World Health Organization (WHO) Launches Formal Information Request to Moscow",
      location: "Geneva, Switzerland",
      classification: "International Alert",
      details: "The World Health Organization confirms it has formally contacted Russian health authorities under International Health Regulations (IHR) requesting clinical dossiers and verified data regarding both the primary fatality and the reported second death. WHO officials note they currently lack the 'full picture' amidst continuing regional hospital lockdowns.",
      receipts: [
        {
          sourceName: "World Health Organization (DON)",
          sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON589",
          publishedAt: "2026-10-07",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "WHO has requested further information from the Russian government regarding reports of an additional sick employee and suspected second fatality.",
          tier: "Primary Authority"
        }
      ]
    },
    {
      date: "2026-10-07",
      timeUtc: "15:30",
      title: "U.S. Embassy Issues Health Alert; Diplomatic Requests for Biological Transparency",
      location: "Moscow & Washington, D.C.",
      classification: "International Alert",
      details: "The U.S. Embassy in Moscow issues an official health advisory for American citizens traveling or residing in the Irkutsk region. Simultaneously, the U.S. Department of State confirms bilateral inquiries have been lodged with Russian counterparts to obtain verified pathogen profiling and sequence verification.",
      receipts: [
        {
          sourceName: "U.S. Embassy Moscow / Department of State",
          sourceUrl: "https://ru.usembassy.gov/health-alert-u-s-embassy-moscow-russia-october-7-2026/",
          publishedAt: "2026-10-07",
          retrievedAt: "2026-10-07T16:50:00Z",
          verbatimExcerpt: "U.S. citizens are advised to exercise heightened health vigilance and avoid restricted medical zones in Irkutsk Oblast.",
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
      sourceUrl: "https://www.dailymail.co.uk/news/article-13931649/second-death-plague-outbreak-russia-irkutsk.html",
      publishedAt: "2026-10-06",
      retrievedAt: "2026-10-07T16:50:00Z",
      verbatimExcerpt: "Reports emerge of an alleged second fatality at an Irkutsk district hospital amid growing biosecurity concerns, prompting international demands for transparency.",
      tier: "Investigative Press"
    },
    {
      sourceName: "Daily Star",
      sourceUrl: "https://www.dailystar.co.uk/news/world-news/russia-plague-second-death-irkutsk-33829401",
      publishedAt: "2026-10-06",
      retrievedAt: "2026-10-07T16:50:00Z",
      verbatimExcerpt: "Second patient reportedly dies in Siberian hospital as Russian officials push back against claims of wider contagion.",
      tier: "Investigative Press"
    },
    {
      sourceName: "The New York Times (Authenticated Ingestion Feed)",
      sourceUrl: "https://www.nytimes.com/search?query=russia+plague+irkutsk",
      publishedAt: "2026-10-07",
      retrievedAt: "2026-10-07T16:50:00Z",
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
      sourceUrl: "https://www.themoscowtimes.com/2026/10/07/kremlin-denies-second-plague-death-in-irkutsk-a86591",
      publishedAt: "2026-10-07",
      retrievedAt: "2026-10-07T16:50:00Z",
      verbatimExcerpt: "Kremlin spokesman Dmitry Peskov branded reports of a second death as false information, insisting federal agencies have the situation under complete control.",
      tier: "Primary Authority"
    },
    {
      sourceName: "World Health Organization (DON)",
      sourceUrl: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON589",
      publishedAt: "2026-10-07",
      retrievedAt: "2026-10-07T16:50:00Z",
      verbatimExcerpt: "WHO has requested further information from the Russian government regarding reports of an additional sick employee and suspected second fatality.",
      tier: "Primary Authority"
    },
    {
      sourceName: "U.S. Embassy Moscow / Department of State",
      sourceUrl: "https://ru.usembassy.gov/health-alert-u-s-embassy-moscow-russia-october-7-2026/",
      publishedAt: "2026-10-07",
      retrievedAt: "2026-10-07T16:50:00Z",
      verbatimExcerpt: "Health Alert: U.S. citizens are advised to monitor local conditions and avoid medical isolation cordons in Irkutsk Oblast following reports of contagious pulmonary illness under international review.",
      tier: "Primary Authority"
    }
  ]
};
