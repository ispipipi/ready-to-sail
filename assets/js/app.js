const viewMeta = {
  "command-center": {
    title: "Command Center",
    search: "Search fleet, crew, missions or risks...",
    footerLeft: ["UTC 09:12", "Data integrity 100%", "FleetOps sync active"],
    footerRight: ["Encrypted workspace"],
    navParent: "command-center",
  },
  "crew-changes": {
    title: "Crew Changes",
    search: "Search active rotations, vessels or ports...",
    footerLeft: ["All times displayed in UTC", "Data integrity 100%", "Rotation sync active"],
    footerRight: ["Encrypted workspace", "v2.4.1"],
    navParent: "crew-changes",
  },
  planning: {
    title: "Planning",
    search: "Search missions, embarkation windows or vessels...",
    footerLeft: ["30-day planning horizon", "Data integrity 100%", "Crew planning synced"],
    footerRight: ["Encrypted workspace", "v2.4.1"],
    navParent: "planning",
  },
  matching: {
    title: "Crew Matching",
    search: "Search candidates, roles or vessel rotations...",
    footerLeft: ["Matching detail", "Data integrity 100%", "Ready Check enabled"],
    footerRight: ["Encrypted workspace"],
    navParent: "crew-changes",
  },
  crew: {
    title: "Crew",
    search: "Search crew, rank, vessel or location...",
    footerLeft: ["Crew roster sample", "Data integrity 100%", "CrewOps sync active"],
    footerRight: ["Encrypted workspace", "v2.4.1"],
    navParent: "crew",
  },
  "crew-profile": {
    title: "Crew Profile",
    search: "Search profile records, certificates or service history...",
    footerLeft: ["Personnel record", "Data integrity 100%", "Document link state healthy"],
    footerRight: ["Encrypted workspace"],
    navParent: "crew",
  },
  documents: {
    title: "Documents",
    search: "Search documents, certificates, crew or compliance...",
    footerLeft: ["UTC 14:22:10", "Data integrity 100%", "DocOps sync active"],
    footerRight: ["Encrypted workspace"],
    navParent: "documents",
  },
  compliance: {
    title: "Compliance",
    search: "Search rules, exceptions or audits...",
    footerLeft: ["Rules engine active", "Data integrity 100%", "Audit trail captured"],
    footerRight: ["Encrypted workspace"],
    navParent: "compliance",
  },
  fleet: {
    title: "Fleet",
    search: "Search vessels, routes or compliance...",
    footerLeft: ["Fleet overview", "Data integrity 100%", "FleetOps sync active"],
    footerRight: ["Encrypted workspace"],
    navParent: "fleet",
  },
  "vessel-detail": {
    title: "Vessel Detail",
    search: "Search crew onboard, certs or vessel fields...",
    footerLeft: ["Vessel drill-down", "Data integrity 100%", "Crew manifest live"],
    footerRight: ["Encrypted workspace"],
    navParent: "fleet",
  },
  "routes-ports": {
    title: "Routes & Ports",
    search: "Search routes, ports, vessels or crew...",
    footerLeft: ["Route windows", "Data integrity 100%", "RouteOps sync active"],
    footerRight: ["Encrypted workspace", "v2.4.1-stable"],
    navParent: "routes-ports",
  },
  alerts: {
    title: "Alerts",
    search: "Search critical issues, expiring records or blocked cases...",
    footerLeft: ["Alert queue", "Data integrity 100%", "Critical watch active"],
    footerRight: ["Encrypted workspace"],
    navParent: "alerts",
  },
  reports: {
    title: "Reports",
    search: "Search reports, vessels, crew or compliance...",
    footerLeft: ["Executive reporting", "Data integrity 100%", "ReportOps sync active"],
    footerRight: ["Encrypted workspace"],
    navParent: "reports",
  },
  admin: {
    title: "Administration",
    search: "Search workspace settings, users or audit logs...",
    footerLeft: ["Workspace admin", "Data integrity 100%", "Policy controls active"],
    footerRight: ["Encrypted workspace"],
    navParent: "admin",
  },
  "ready-ai": {
    title: "Ready AI",
    search: "Search briefs, blockers, vessels or crew...",
    footerLeft: ["Operational copilot workspace", "Data integrity 100%", "Ready AI sync active"],
    footerRight: ["Encrypted workspace"],
    navParent: "ready-ai",
  },
};

const copilotProfiles = {
  "command-center": {
    label: "Module Context",
    title: "Global readiness pulse",
    copy: "Use this view to ask for the highest-priority risks, decisions required, vessel readiness movement and overall operational posture.",
    prompts: [
      "What needs attention first today?",
      "Summarize the blockers in one paragraph",
      "Which vessel is drifting downward fastest?",
      "What should Marina review before noon?",
    ],
  },
  "crew-changes": {
    label: "Module Context",
    title: "Rotation and embarkation coordination",
    copy: "This module concentrates active crew rotations, readiness percentages, urgency and document blockers affecting assignment decisions.",
    prompts: [
      "Which crew change needs action first?",
      "Who can cover the Bremen gap?",
      "Which rotations are blocked by documents?",
      "Show flight and visa issues together",
    ],
  },
  planning: {
    label: "Module Context",
    title: "30-day crew planning board",
    copy: "Ask about upcoming relief windows, planned embarkations, vessels without candidates and which mission should be opened next.",
    prompts: [
      "Which mission opens first?",
      "Show the highest-risk July handover",
      "Find the unfilled engineering role",
      "Who is next to sign off?",
    ],
  },
  matching: {
    label: "Mission Context",
    title: "Crew matching detail",
    copy: "Use this view to compare candidates, inspect readiness notes, review logistics and decide whether to finalize an assignment.",
    prompts: [
      "Why is Hakan the top match?",
      "Who is the best backup candidate?",
      "Which documents still need review?",
      "What risk remains before finalizing?",
    ],
  },
  crew: {
    label: "Module Context",
    title: "Crew readiness monitoring",
    copy: "Ask about personnel readiness, expiring medicals, available officers, blocked crew and assignment options based on the current sample roster.",
    prompts: [
      "Who is ready to embark this week?",
      "Which crew members are blocked?",
      "Find available Chief Officers",
      "Show crew with expiring medicals",
    ],
  },
  "crew-profile": {
    label: "Profile Context",
    title: "Individual readiness review",
    copy: "This profile view combines certificates, travel readiness, service history, AI recommendation and linked documents for one crew member.",
    prompts: [
      "Is this officer ready today?",
      "Which certificate expires first?",
      "Summarize service history",
      "What blocks immediate deployment?",
    ],
  },
  documents: {
    label: "Module Context",
    title: "Operational document control",
    copy: "This module tracks verification, missing records, pending reviews and expiring documentation with direct operational impact on crew changes.",
    prompts: [
      "What are the highest-impact document blockers?",
      "Show documents expiring this week",
      "Which crew members are blocked by documents?",
      "Find missing certificates for MT Scot Bremen",
    ],
  },
  compliance: {
    label: "Module Context",
    title: "Rules and exception control",
    copy: "Use this view to review active rules, enable or disable checks, and resolve current exceptions that affect readiness decisions.",
    prompts: [
      "Which rule triggers most exceptions?",
      "Show unresolved compliance exceptions",
      "What happens if a rule is disabled?",
      "Summarize current audit exposure",
    ],
  },
  fleet: {
    label: "Module Context",
    title: "Vessel-level readiness overview",
    copy: "Ask about the operational state of each vessel, readiness trends, current blockers, compliance issues and fleet-wide risk concentration.",
    prompts: [
      "Which vessels are most at risk this week?",
      "Show fleet readiness by vessel",
      "Which vessel needs attention first?",
      "Find blocked crew assignments",
    ],
  },
  "vessel-detail": {
    label: "Vessel Context",
    title: "Crew onboard and readiness detail",
    copy: "This drill-down combines vessel metadata, open crew changes, onboard readiness and linked crew profiles for a single asset.",
    prompts: [
      "Who onboard signs off next?",
      "Which crew member is the weakest link?",
      "Is this vessel ready for assignment?",
      "Summarize open vessel issues",
    ],
  },
  "routes-ports": {
    label: "Module Context",
    title: "Route and port operations",
    copy: "Use this module for embarkation windows, ETA sequencing, route constraints, port risk and readiness issues that affect current movement.",
    prompts: [
      "Which port calls are at risk this week?",
      "Show vessels arriving in the next 48 hours",
      "Which embarkation windows need action?",
      "Find routes affected by crew readiness issues",
    ],
  },
  alerts: {
    label: "Module Context",
    title: "Critical watch queue",
    copy: "This queue groups expiring documents, missing compliant candidates and blocked rotations that need operational decisions.",
    prompts: [
      "Which alert is most urgent?",
      "Show all document expiry issues",
      "Which crew change is blocked by compliance?",
      "What can be resolved today?",
    ],
  },
  reports: {
    label: "Module Context",
    title: "Executive reporting and audits",
    copy: "Ask for summarized readiness briefs, blocker categories, report status and comparative views across crew, fleet and document readiness.",
    prompts: [
      "Prepare a short executive readiness brief",
      "Show blockers by category",
      "Compare this week vs last week",
      "Which report requires review first?",
    ],
  },
  admin: {
    label: "Workspace Context",
    title: "Operational workspace controls",
    copy: "Use this area to review demo settings, notification states, user access and audit events that support the pilot environment.",
    prompts: [
      "Who has admin access?",
      "Summarize recent audit events",
      "Show system health status",
      "Which notifications are enabled?",
    ],
  },
  "ready-ai": {
    label: "Workspace Context",
    title: "Cross-module operational copilot",
    copy: "This chat can answer across crew readiness, crew changes, documents, fleet, routes & ports and reports using the current pilot dataset.",
    prompts: [
      "Which crew change needs action first?",
      "What are the highest-impact document blockers?",
      "Show fleet risk in one paragraph",
      "Prepare a short executive readiness brief",
    ],
  },
};

const systemDataNotes = {
  readyCount: 162,
  atRiskCount: 18,
  blockedCount: 6,
  actionsToday: 2,
};

const profileData = {
  hakan: {
    key: "hakan",
    name: "Hakan Çalhanoğlu",
    rank: "Chief Officer",
    availability: "Available Today",
    nationality: "Turkish",
    location: "Istanbul, TR",
    readiness: 99,
    medical: "Fit for Duty",
    travel: "Ready",
    verdict: "Ready to Sail Today",
    intelligence: [
      "No upcoming expirations for 180 days.",
      "Eligible for long-range deployment (90+ days).",
      "Prior experience on MT Scot Bremen strengthens fit.",
    ],
    summary:
      "Hakan is fully compliant for offshore embarkation. All mandatory certificates are valid, his medical, passport and seaman book are current, and his previous service on MT Scot Bremen makes him the preferred candidate for immediate assignment.",
    certificates: [
      { name: "STCW Certificate of Competency", detail: "Master II/2 - Unlimited", issued: "12 Jan 2022", exp: "11 Jan 2027", status: "ready" },
      { name: "US Visa (C1/D)", detail: "Transit / Crewmember", issued: "04 Mar 2023", exp: "03 Mar 2033", status: "ready" },
      { name: "ENG1 Medical", detail: "Fit for Duty - No restrictions", issued: "15 Aug 2024", exp: "14 Aug 2026", status: "ready" },
      { name: "Bahamas Flag Endorsement", detail: "Officer in charge of navigational watch", issued: "10 Jun 2023", exp: "09 Jun 2028", status: "ready" },
    ],
    documents: [
      { name: "Passport_HC.pdf", meta: "Bio-verified", status: "Verified" },
      { name: "SeamanBook_HC.pdf", meta: "Bio-verified", status: "Verified" },
      { name: "MedicalFit_2026.pdf", meta: "Peme approved", status: "Verified" },
    ],
    history: [
      { role: "Chief Officer", vessel: "MT Scot Bremen", years: "2022 - Present", note: "Specialized in chemical cargo handling and crew leadership during North Sea operations." },
      { role: "Second Officer", vessel: "MT Scot Hamburg", years: "2018 - 2022", note: "Navigation officer and deck maintenance supervisor. Voyage planning lead." },
      { role: "Third Officer", vessel: "MT Scot Explorer", years: "2012 - 2018", note: "Bridge support, cargo watch and safety drill coordination." },
    ],
    mission: "MT Scot Bremen",
  },
  nihat: {
    key: "nihat",
    name: "Nihat Kahveci",
    rank: "Chief Officer (Alt)",
    availability: "Available in 3 Days",
    nationality: "Turkish",
    location: "Gibraltar, UKOT",
    readiness: 95,
    medical: "Medical expires in 60 days",
    travel: "Ready",
    verdict: "Ready with Watch Item",
    intelligence: [
      "Valid backup candidate for MT Scot Bremen.",
      "Minimal risk identified in medical horizon.",
      "Requires vessel-specific familiarization note before final assignment.",
    ],
    summary:
      "Nihat remains a strong backup candidate with a 95% Ready Index. Medical, passport and travel records are still acceptable for the current window, but his shorter medical horizon means he should remain the secondary option behind Hakan.",
    certificates: [
      { name: "STCW Certificate of Competency", detail: "Chief Mate - Unlimited", issued: "08 Feb 2021", exp: "07 Feb 2027", status: "ready" },
      { name: "Medical Certificate", detail: "Expires in 60 days", issued: "03 Sep 2024", exp: "17 Sep 2026", status: "risk" },
      { name: "LPG / VLCC Familiarization", detail: "Multi-vessel deck operations", issued: "12 Nov 2023", exp: "11 Nov 2028", status: "ready" },
      { name: "Passport", detail: "Biometric", issued: "14 Jun 2022", exp: "13 Jun 2032", status: "ready" },
    ],
    documents: [
      { name: "Passport_NK.pdf", meta: "Bio-verified", status: "Verified" },
      { name: "Medical_NK.pdf", meta: "Expiring this quarter", status: "Watch" },
      { name: "Familiarization_NK.pdf", meta: "Ops accepted", status: "Verified" },
    ],
    history: [
      { role: "Chief Officer", vessel: "MT Scot Berlin", years: "2023 - Present", note: "Led deck readiness programs and familiarization planning." },
      { role: "Second Officer", vessel: "MT Scot Bremen", years: "2019 - 2023", note: "Previously sailed on the target vessel and knows the onboard routines." },
      { role: "Third Officer", vessel: "MT Scot Bremen", years: "2015 - 2019", note: "Long-term Bremen familiarity and cargo watch experience." },
    ],
    mission: "MT Scot Bremen",
  },
};

const defaultTravelItems = [
  { label: "Passport", value: "Valid and verified" },
  { label: "Seaman Book", value: "Valid and verified" },
  { label: "Preferred Airport", value: "Istanbul (IST)" },
  { label: "Visa Pack", value: "Operationally acceptable" },
];

const defaultComplianceItems = [
  { label: "Identity", score: 100, action: "Identity records verified via OCR" },
  { label: "Medical", score: 100, action: "Medical certificate valid within assignment horizon" },
  { label: "Certificates", score: 100, action: "Certificate pack accepted by rules engine" },
  { label: "Travel", score: 95, action: "Travel pack clear with one watch item" },
  { label: "Company Requirements", score: 100, action: "Induction and training complete" },
  { label: "Port Requirements", score: 100, action: "No restrictions on current itinerary" },
  { label: "Client Requirements", score: 100, action: "Client vetting accepted" },
];

function buildProfile(config) {
  return {
    key: config.key,
    name: config.name,
    rank: config.rank,
    availability: config.availability,
    nationality: config.nationality || "Turkish",
    location: config.location || "Istanbul, TR",
    readiness: config.readiness,
    medical: config.medical,
    travel: config.travel || "Ready",
    verdict: config.verdict,
    intelligence: config.intelligence,
    summary: config.summary,
    currentVessel: config.currentVessel || "Available",
    employeeId: config.employeeId || `SCOT-${config.key.toUpperCase()}`,
    contractStarted: config.contractStarted || "15 January 2026",
    contractEnds: config.contractEnds || config.signOff || "—",
    nextCrewChange: config.nextCrewChange || "Not yet opened",
    reliefStatus: config.reliefStatus || "Under review",
    certificates: config.certificates,
    documents: config.documents,
    history: config.history,
    mission: config.mission,
    travelItems: config.travelItems || defaultTravelItems,
    complianceItems: config.complianceItems || defaultComplianceItems,
    assignments: config.assignments || [
      { label: "Current vessel", value: config.currentVessel || "Available pool" },
      { label: "Next sign off", value: config.signOff || "—" },
      { label: "Manning agency", value: "Scott Crew Services" },
      { label: "Rotation", value: "6/2 Rotation" },
    ],
    timeline: config.timeline || [
      { time: "27 Jun · 09:02", action: "Ready Check executed", who: `${config.name} · Marina Castro` },
      { time: "26 Jun · 17:44", action: "Document set reviewed", who: `${config.name} · Ops desk` },
      { time: "24 Jun · 11:12", action: "Profile accessed for assignment review", who: `${config.name} · Crew planning` },
    ],
    notes: config.notes || [
      "Operationally suitable for current assignment scope.",
      "No adverse remarks in the latest pilot review.",
    ],
  };
}

Object.assign(profileData, {
  merih: buildProfile({
    key: "merih",
    name: "Merih Demiral",
    rank: "Master",
    availability: "On Board",
    currentVessel: "MT Scot Dresden",
    readiness: 97,
    medical: "Fit for Duty",
    verdict: "Ready",
    employeeId: "SCOT-0041",
    contractEnds: "15 July 2026",
    nextCrewChange: "CC-2026-0044",
    reliefStatus: "Confirmed",
    intelligence: [
      "Fully compliant for current assignment.",
      "US Visa expires in 11 months.",
      "No operational restrictions detected.",
    ],
    summary: "Merih Demiral remains fully compliant for his current command on MT Scot Dresden. Identity, medical, certificate and client requirements are all clear, with no assignment blockers detected.",
    certificates: [
      { name: "Basic Safety Training", detail: "STCW", issued: "14 Mar 2023", exp: "14 Mar 2028", status: "ready" },
      { name: "Advanced Fire Fighting", detail: "STCW", issued: "02 Dec 2022", exp: "02 Dec 2027", status: "ready" },
      { name: "Advanced Oil Tanker", detail: "Tanker", issued: "25 Jan 2024", exp: "25 Jan 2029", status: "ready" },
      { name: "Master Unlimited (CoC)", detail: "Competency", issued: "30 Apr 2021", exp: "30 Apr 2031", status: "ready" },
    ],
    documents: [
      { name: "Passport_MD.pdf", meta: "Issued Ankara • Exp 2031", status: "Verified" },
      { name: "SeamanBook_MD.pdf", meta: "Istanbul Harbour Master", status: "Verified" },
      { name: "YellowFever_MD.pdf", meta: "Expiring Sep 2026", status: "Watch" },
      { name: "NationalID_MD.pdf", meta: "OCR 99.2% confidence", status: "Verified" },
    ],
    history: [
      { role: "Master", vessel: "MT Scot Dresden", years: "2024 - Present", note: "Current command assignment." },
      { role: "Chief Officer", vessel: "MT Scot Hamburg", years: "2020 - 2024", note: "Deck leadership and voyage planning." },
      { role: "Second Officer", vessel: "MT Scot Bremen", years: "2015 - 2020", note: "Bridge watch and cargo operations." },
    ],
    mission: "MT Scot Dresden",
    notes: [
      "Passport expires in 11 months.",
      "Medical certificate expires in 215 days.",
      "Advanced Fire Fighting expires in 18 months.",
    ],
  }),
  emre: buildProfile({
    key: "emre",
    name: "Emre Belözoğlu",
    rank: "Chief Engineer",
    availability: "On Board",
    currentVessel: "MT Scot Bayern",
    readiness: 82,
    medical: "Medical watch item",
    verdict: "Action Needed",
    contractEnds: "29 July 2026",
    nextCrewChange: "Not yet opened",
    reliefStatus: "Passport alert",
    intelligence: [
      "Main blocker is passport horizon before next assignment.",
      "Medical validity is acceptable but under watch.",
      "Can return to green after document renewal.",
    ],
    summary: "Emre remains operationally experienced but is not fully clear for reassignment. Passport validity before the next assignment is the primary blocker and should be renewed before he enters the default candidate list.",
    certificates: [
      { name: "Chief Engineer CoC", detail: "Competency", issued: "06 May 2020", exp: "05 May 2030", status: "ready" },
      { name: "Advanced Oil Tanker", detail: "Tanker", issued: "12 Feb 2022", exp: "11 Feb 2027", status: "ready" },
      { name: "Medical Certificate", detail: "Watch item", issued: "04 Mar 2025", exp: "03 Mar 2027", status: "ready" },
      { name: "Passport", detail: "Renewal required before next assignment", issued: "29 Jul 2021", exp: "28 Jul 2026", status: "risk" },
    ],
    documents: [
      { name: "Passport_EB.pdf", meta: "Renewal required", status: "Watch" },
      { name: "Medical_EB.pdf", meta: "Valid", status: "Verified" },
      { name: "ChiefEngineerCoC_EB.pdf", meta: "Valid", status: "Verified" },
    ],
    history: [
      { role: "Chief Engineer", vessel: "MT Scot Bayern", years: "2023 - Present", note: "Current engineering lead." },
      { role: "Second Engineer", vessel: "MT Scot Hamburg", years: "2018 - 2023", note: "Engine department supervisor." },
      { role: "Third Engineer", vessel: "MT Scot Berlin", years: "2012 - 2018", note: "Machinery operations and maintenance." },
    ],
    mission: "MT Scot Bayern",
  }),
  cenk: buildProfile({
    key: "cenk",
    name: "Cenk Tosun",
    rank: "Second Officer",
    availability: "On Board",
    currentVessel: "MT Scot Hamburg",
    readiness: 88,
    medical: "Medical due",
    verdict: "Watch",
    contractEnds: "04 September 2026",
    nextCrewChange: "Not yet opened",
    reliefStatus: "Medical due",
    intelligence: [
      "Medical certificate expires in 12 days.",
      "Other readiness factors remain stable.",
      "Scheduling the exam returns the profile to green.",
    ],
    summary: "Cenk is operationally stable but his medical validity is now the dominant watch item. He should remain onboard-capable while the renewal is scheduled immediately.",
    certificates: [
      { name: "Second Officer CoC", detail: "Competency", issued: "22 Jan 2021", exp: "21 Jan 2031", status: "ready" },
      { name: "Medical Certificate", detail: "Expires in 12 days", issued: "16 Aug 2024", exp: "01 Aug 2026", status: "risk" },
      { name: "Bridge Resource Management", detail: "STCW", issued: "11 Jun 2023", exp: "10 Jun 2028", status: "ready" },
      { name: "Passport", detail: "Valid", issued: "02 May 2021", exp: "01 May 2031", status: "ready" },
    ],
    documents: [
      { name: "Medical_CT.pdf", meta: "Exam to be scheduled", status: "Watch" },
      { name: "Passport_CT.pdf", meta: "Bio-verified", status: "Verified" },
      { name: "BRM_CT.pdf", meta: "Valid", status: "Verified" },
    ],
    history: [
      { role: "Second Officer", vessel: "MT Scot Hamburg", years: "2024 - Present", note: "Current bridge team member." },
      { role: "Third Officer", vessel: "MT Scot Leipzig", years: "2021 - 2024", note: "Navigation support and ECDIS operations." },
    ],
    mission: "MT Scot Hamburg",
  }),
  rustu: buildProfile({
    key: "rustu",
    name: "Rüştü Reçber",
    rank: "Master",
    availability: "On Board",
    currentVessel: "MT Scot Frankfurt",
    readiness: 74,
    medical: "Fit for Duty",
    verdict: "Certificate Expired",
    contractEnds: "11 August 2026",
    nextCrewChange: "Not yet opened",
    reliefStatus: "Urgent - cert expired",
    intelligence: [
      "Advanced Oil Tanker certificate is expired.",
      "Current assignment remains highest fleet risk.",
      "Relief planning should remain active until renewal or replacement.",
    ],
    summary: "Rüştü is the most operationally sensitive profile in the current pilot set. The expired Advanced Oil Tanker certificate drives his low readiness and is the main reason MT Scot Frankfurt remains flagged.",
    certificates: [
      { name: "Master Unlimited CoC", detail: "Competency", issued: "10 Mar 2020", exp: "09 Mar 2030", status: "ready" },
      { name: "Advanced Oil Tanker", detail: "Expired", issued: "25 Jan 2019", exp: "25 Jan 2024", status: "risk" },
      { name: "Medical Certificate", detail: "Valid", issued: "01 Apr 2025", exp: "31 Mar 2027", status: "ready" },
      { name: "Passport", detail: "Valid", issued: "19 May 2022", exp: "18 May 2032", status: "ready" },
    ],
    documents: [
      { name: "AdvOilTanker_RR.pdf", meta: "Expired", status: "Watch" },
      { name: "Passport_RR.pdf", meta: "Verified", status: "Verified" },
      { name: "Medical_RR.pdf", meta: "Verified", status: "Verified" },
    ],
    history: [
      { role: "Master", vessel: "MT Scot Frankfurt", years: "2024 - Present", note: "Current command assignment." },
      { role: "Chief Officer", vessel: "MT Scot Bremen", years: "2019 - 2024", note: "Deck and cargo operations leadership." },
    ],
    mission: "MT Scot Frankfurt",
  }),
  arda: buildProfile({
    key: "arda",
    name: "Arda Güler",
    rank: "Second Officer",
    availability: "Available",
    currentVessel: "Available pool",
    readiness: 98,
    medical: "Fit for Duty",
    verdict: "Ready",
    intelligence: [
      "High readiness and no document blockers.",
      "Good replacement option for deck roles.",
      "Travel readiness fully clear.",
    ],
    summary: "Arda is one of the strongest immediately available deck officers in the pilot roster and can be used as a fast replacement option where vessel-specific experience is not mandatory.",
    certificates: [
      { name: "Second Officer CoC", detail: "Competency", issued: "21 Jun 2021", exp: "20 Jun 2031", status: "ready" },
      { name: "Medical Certificate", detail: "Valid", issued: "08 Jan 2025", exp: "07 Jan 2027", status: "ready" },
      { name: "ECDIS", detail: "STCW", issued: "14 Sep 2023", exp: "13 Sep 2028", status: "ready" },
      { name: "Passport", detail: "Valid", issued: "10 Apr 2022", exp: "09 Apr 2032", status: "ready" },
    ],
    documents: [
      { name: "Passport_AG.pdf", meta: "Verified", status: "Verified" },
      { name: "Medical_AG.pdf", meta: "Verified", status: "Verified" },
      { name: "ECDIS_AG.pdf", meta: "Verified", status: "Verified" },
    ],
    history: [
      { role: "Second Officer", vessel: "Available pool", years: "2026 - Present", note: "Currently available for assignment." },
      { role: "Third Officer", vessel: "MT Scot Flensburg", years: "2022 - 2026", note: "Bridge watch and navigation support." },
    ],
    mission: "Available pool",
  }),
  ozan: buildProfile({
    key: "ozan",
    name: "Ozan Kabak",
    rank: "Third Engineer",
    availability: "On Board",
    currentVessel: "MT Scot Stuttgart",
    readiness: 94,
    medical: "Fit for Duty",
    verdict: "Ready",
    intelligence: [
      "Stable engineering readiness.",
      "Potential fallback if promotion path opens.",
      "No hard document blockers.",
    ],
    summary: "Ozan is operationally stable and remains one of the cleaner engineering profiles in the current mission context. He is best treated as a fallback engineering option while approval paths remain under review.",
    certificates: [
      { name: "Third Engineer CoC", detail: "Competency", issued: "03 Mar 2021", exp: "02 Mar 2031", status: "ready" },
      { name: "Medical Certificate", detail: "Valid", issued: "09 Jul 2025", exp: "08 Jul 2027", status: "ready" },
      { name: "Engine Room Resource Management", detail: "STCW", issued: "12 Aug 2023", exp: "11 Aug 2028", status: "ready" },
      { name: "Passport", detail: "Valid", issued: "01 Feb 2022", exp: "31 Jan 2032", status: "ready" },
    ],
    documents: [
      { name: "Passport_OK.pdf", meta: "Verified", status: "Verified" },
      { name: "Medical_OK.pdf", meta: "Verified", status: "Verified" },
      { name: "ERRM_OK.pdf", meta: "Verified", status: "Verified" },
    ],
    history: [
      { role: "Third Engineer", vessel: "MT Scot Stuttgart", years: "2024 - Present", note: "Current assignment." },
      { role: "Junior Engineer", vessel: "MT Scot Berlin", years: "2020 - 2024", note: "Engine support operations." },
    ],
    mission: "MT Scot Stuttgart",
  }),
  kerem: buildProfile({
    key: "kerem",
    name: "Kerem Aktürkoğlu",
    rank: "Chief Officer",
    availability: "On Board",
    currentVessel: "MT Scot Munchen",
    readiness: 96,
    medical: "Fit for Duty",
    verdict: "Ready",
    intelligence: [
      "Strong vessel-readiness posture.",
      "No active document blockers.",
      "Suitable for immediate deck continuity.",
    ],
    summary: "Kerem is a highly stable Chief Officer profile and remains fully compliant on MT Scot Munchen. He is not currently the priority candidate for active gaps because vessel continuity is better preserved onboard.",
    certificates: [
      { name: "Chief Mate CoC", detail: "Competency", issued: "08 Jan 2021", exp: "07 Jan 2031", status: "ready" },
      { name: "Medical Certificate", detail: "Valid", issued: "22 May 2025", exp: "21 May 2027", status: "ready" },
      { name: "Advanced Oil Tanker", detail: "Tanker", issued: "14 Feb 2024", exp: "13 Feb 2029", status: "ready" },
      { name: "Passport", detail: "Valid", issued: "16 Mar 2022", exp: "15 Mar 2032", status: "ready" },
    ],
    documents: [
      { name: "Passport_KA.pdf", meta: "Verified", status: "Verified" },
      { name: "Medical_KA.pdf", meta: "Verified", status: "Verified" },
      { name: "OilTanker_KA.pdf", meta: "Verified", status: "Verified" },
    ],
    history: [
      { role: "Chief Officer", vessel: "MT Scot Munchen", years: "2024 - Present", note: "Current deck command support." },
      { role: "Second Officer", vessel: "MT Scot Leipzig", years: "2019 - 2024", note: "Bridge operations and cargo support." },
    ],
    mission: "MT Scot Munchen",
  }),
  ferdi: buildProfile({
    key: "ferdi",
    name: "Ferdi Kadıoğlu",
    rank: "Second Engineer",
    availability: "Available",
    currentVessel: "Available pool",
    readiness: 90,
    medical: "Fit for Duty",
    verdict: "Visa Pending",
    intelligence: [
      "Good engineering fit with one travel blocker.",
      "Visa pending remains the main watch item.",
      "Potential assignment candidate for Stuttgart scenario.",
    ],
    summary: "Ferdi is a viable engineering candidate with a strong readiness baseline, but travel readiness is not fully closed because of the visa review. He should stay in the active candidate set for engineering missions.",
    certificates: [
      { name: "Second Engineer CoC", detail: "Competency", issued: "12 Apr 2021", exp: "11 Apr 2031", status: "ready" },
      { name: "Medical Certificate", detail: "Valid", issued: "03 Feb 2025", exp: "02 Feb 2027", status: "ready" },
      { name: "Engine Room Resource Management", detail: "STCW", issued: "21 Nov 2023", exp: "20 Nov 2028", status: "ready" },
      { name: "Visa Pack", detail: "Pending review", issued: "—", exp: "—", status: "risk" },
    ],
    documents: [
      { name: "Passport_FK.pdf", meta: "Verified", status: "Verified" },
      { name: "Medical_FK.pdf", meta: "Verified", status: "Verified" },
      { name: "Visa_FK.pdf", meta: "Pending", status: "Watch" },
    ],
    history: [
      { role: "Second Engineer", vessel: "Available pool", years: "2026 - Present", note: "Available for reassignment." },
      { role: "Third Engineer", vessel: "MT Scot Stuttgart", years: "2021 - 2026", note: "Engineering support and watchkeeping." },
    ],
    mission: "Available pool",
  }),
});

const vesselData = {
  bremen: {
    key: "bremen",
    name: "MT Scot Bremen",
    imo: "9295143",
    built: "2003",
    flag: "Malta",
    dwt: "8,211 t",
    coating: "S. Epoxy",
    client: "Shell",
    openChange: "CC-2026-014 (active)",
    readiness: 92,
    port: "Gibraltar",
    eta: "14 Jul 2026 • 09:30",
    status: "Ready",
    crew: [
      { name: "Cem Demir", profileKey: "hakan", rank: "Master", end: "14 Jul 2026", certs: "STCW ok • Tanker ok", visas: "US ok • Schengen ok", readiness: 96, tone: "ready" },
      { name: "Hakan Çalhanoğlu", profileKey: "hakan", rank: "Chief Officer (incoming)", end: "—", certs: "STCW ok • Tanker ok", visas: "US ok • Schengen ok", readiness: 99, tone: "ready" },
      { name: "Onur Aydın", profileKey: "nihat", rank: "Second Officer", end: "02 Oct 2026", certs: "STCW ok • Tanker ok", visas: "Schengen ok", readiness: 93, tone: "ready" },
      { name: "Burak Yıldız", profileKey: "nihat", rank: "Chief Engineer", end: "19 Sep 2026", certs: "STCW ok • Tanker warn", visas: "US ok", readiness: 88, tone: "risk" },
    ],
  },
  stuttgart: {
    key: "stuttgart",
    name: "MT Scot Stuttgart",
    imo: "9274549",
    built: "2006",
    flag: "Marshall Islands",
    dwt: "8,184 t",
    coating: "S. Epoxy",
    client: "BP",
    openChange: "CC-2026-027 (active)",
    readiness: 70,
    port: "Rotterdam",
    eta: "22 Jul 2026 • 18:20",
    status: "Pending action",
    crew: [
      { name: "Tolga Şahin", profileKey: "nihat", rank: "Master", end: "30 Sep 2026", certs: "STCW ok • Tanker ok", visas: "Schengen ok", readiness: 95, tone: "ready" },
      { name: "İlkay Gündoğan", profileKey: "nihat", rank: "Second Engineer", end: "22 Jul 2026", certs: "STCW ok • Tanker ok", visas: "Schengen warn", readiness: 90, tone: "risk" },
      { name: "Caner Erkin", profileKey: "nihat", rank: "Second Officer", end: "14 Nov 2026", certs: "STCW ok • Tanker ok", visas: "Schengen ok", readiness: 91, tone: "ready" },
    ],
  },
};

Object.assign(vesselData, {
  hamburg: {
    key: "hamburg",
    name: "MT Scot Hamburg",
    imo: "9255799",
    built: "2002",
    flag: "Malta",
    dwt: "8,241 t",
    coating: "Marineline",
    client: "Chevron",
    openChange: "Not yet opened",
    readiness: 88,
    port: "Antwerp",
    eta: "03 Sep 2026 • 07:20",
    status: "Medical due",
    crew: [
      { name: "Cenk Tosun", profileKey: "cenk", rank: "Second Officer", end: "04 Sep 2026", certs: "Medical due • STCW ok", visas: "Schengen ok", readiness: 88, tone: "risk" },
      { name: "Kerem Aktürkoğlu", profileKey: "kerem", rank: "Chief Officer", end: "17 Oct 2026", certs: "STCW ok • Tanker ok", visas: "Schengen ok", readiness: 96, tone: "ready" },
      { name: "Arda Güler", profileKey: "arda", rank: "Second Officer (relief pool)", end: "—", certs: "STCW ok", visas: "Ready", readiness: 98, tone: "ready" },
    ],
  },
  bayern: {
    key: "bayern",
    name: "MT Scot Bayern",
    imo: "9265041",
    built: "2003",
    flag: "Malta",
    dwt: "8,234 t",
    coating: "Marineline",
    client: "BP",
    openChange: "Not yet opened",
    readiness: 82,
    port: "Algeciras",
    eta: "11 Aug 2026 • 10:10",
    status: "Passport alert",
    crew: [
      { name: "Emre Belözoğlu", profileKey: "emre", rank: "Chief Engineer", end: "29 Jul 2026", certs: "STCW ok • Tanker ok", visas: "Passport renew", readiness: 82, tone: "risk" },
      { name: "Ferdi Kadıoğlu", profileKey: "ferdi", rank: "Second Engineer (candidate)", end: "—", certs: "STCW ok", visas: "Visa pending", readiness: 90, tone: "risk" },
    ],
  },
  berlin: {
    key: "berlin",
    name: "MT Scot Berlin",
    imo: "9270218",
    built: "2003",
    flag: "Malta",
    dwt: "8,254 t",
    coating: "S. Epoxy",
    client: "Total",
    openChange: "None",
    readiness: 96,
    port: "Ravenna",
    eta: "26 Jul 2026 • 13:00",
    status: "Compliant",
    crew: [
      { name: "Nihat Kahveci", profileKey: "nihat", rank: "Chief Officer", end: "22 Sep 2026", certs: "Medical watch • STCW ok", visas: "Ready", readiness: 95, tone: "risk" },
      { name: "Ozan Kabak", profileKey: "ozan", rank: "Third Engineer", end: "09 Nov 2026", certs: "STCW ok", visas: "Ready", readiness: 94, tone: "ready" },
    ],
  },
  munchen: {
    key: "munchen",
    name: "MT Scot Munchen",
    imo: "9270220",
    built: "2003",
    flag: "Malta",
    dwt: "8,266 t",
    coating: "S. Epoxy",
    client: "Exxon",
    openChange: "None",
    readiness: 95,
    port: "Trieste",
    eta: "04 Aug 2026 • 16:45",
    status: "Fully crewed",
    crew: [
      { name: "Kerem Aktürkoğlu", profileKey: "kerem", rank: "Chief Officer", end: "15 Oct 2026", certs: "Tanker ok", visas: "Ready", readiness: 96, tone: "ready" },
      { name: "Arda Güler", profileKey: "arda", rank: "Second Officer", end: "30 Aug 2026", certs: "ECDIS ok", visas: "Ready", readiness: 98, tone: "ready" },
    ],
  },
  leipzig: {
    key: "leipzig",
    name: "MT Scot Leipzig",
    imo: "9281565",
    built: "2004",
    flag: "Malta",
    dwt: "8,230 t",
    coating: "S. Epoxy",
    client: "Lukoil",
    openChange: "None",
    readiness: 94,
    port: "Genoa",
    eta: "31 Jul 2026 • 06:40",
    status: "Compliant",
    crew: [
      { name: "Arda Güler", profileKey: "arda", rank: "Second Officer", end: "12 Sep 2026", certs: "ECDIS ok", visas: "Ready", readiness: 98, tone: "ready" },
      { name: "Cenk Tosun", profileKey: "cenk", rank: "Second Officer (prev. service)", end: "—", certs: "Medical watch", visas: "Ready", readiness: 88, tone: "risk" },
    ],
  },
  frankfurt: {
    key: "frankfurt",
    name: "MT Scot Frankfurt",
    imo: "9325142",
    built: "2005",
    flag: "Malta",
    dwt: "8,182 t",
    coating: "S. Epoxy",
    client: "Shell",
    openChange: "Not yet opened",
    readiness: 74,
    port: "Fos-sur-Mer",
    eta: "19 Aug 2026 • 11:50",
    status: "Certificate expired",
    crew: [
      { name: "Rüştü Reçber", profileKey: "rustu", rank: "Master", end: "11 Aug 2026", certs: "Adv. Oil Tanker expired", visas: "Ready", readiness: 74, tone: "blocked" },
      { name: "Nihat Kahveci", profileKey: "nihat", rank: "Backup Master review", end: "—", certs: "Medical watch", visas: "Ready", readiness: 95, tone: "risk" },
    ],
  },
  dresden: {
    key: "dresden",
    name: "MT Scot Dresden",
    imo: "9420963",
    built: "2007",
    flag: "Marshall Islands",
    dwt: "8,158 t",
    coating: "S. Epoxy",
    client: "Shell",
    openChange: "CC-2026-0044",
    readiness: 97,
    port: "Marmara",
    eta: "15 Jul 2026 • 12:15",
    status: "Ready",
    crew: [
      { name: "Merih Demiral", profileKey: "merih", rank: "Master", end: "15 Jul 2026", certs: "STCW ok • Tanker ok", visas: "US ok", readiness: 97, tone: "ready" },
      { name: "Hakan Çalhanoğlu", profileKey: "hakan", rank: "Chief Officer (relief capable)", end: "—", certs: "STCW ok", visas: "Ready", readiness: 99, tone: "ready" },
    ],
  },
  flensburg: {
    key: "flensburg",
    name: "MT Scot Flensburg",
    imo: "9438312",
    built: "2008",
    flag: "Marshall Islands",
    dwt: "8,150 t",
    coating: "S. Epoxy",
    client: "Independent",
    openChange: "None",
    readiness: 93,
    port: "Augusta",
    eta: "18 Aug 2026 • 05:10",
    status: "Compliant",
    crew: [
      { name: "Arda Güler", profileKey: "arda", rank: "Second Officer", end: "03 Oct 2026", certs: "ECDIS ok", visas: "Ready", readiness: 98, tone: "ready" },
      { name: "Ferdi Kadıoğlu", profileKey: "ferdi", rank: "Second Engineer", end: "28 Sep 2026", certs: "Engine ok", visas: "Visa watch", readiness: 90, tone: "risk" },
    ],
  },
  augsburg: {
    key: "augsburg",
    name: "MT Scot Augsburg",
    imo: "9450127",
    built: "2009",
    flag: "Marshall Islands",
    dwt: "8,142 t",
    coating: "S. Epoxy",
    client: "Independent",
    openChange: "None",
    readiness: 92,
    port: "Cartagena",
    eta: "28 Aug 2026 • 08:35",
    status: "Compliant",
    crew: [
      { name: "Kerem Aktürkoğlu", profileKey: "kerem", rank: "Chief Officer", end: "16 Sep 2026", certs: "Tanker ok", visas: "Ready", readiness: 96, tone: "ready" },
      { name: "Ozan Kabak", profileKey: "ozan", rank: "Third Engineer", end: "19 Oct 2026", certs: "ERRM ok", visas: "Ready", readiness: 94, tone: "ready" },
    ],
  },
  nuernberg: {
    key: "nuernberg",
    name: "MT Scot Nuernberg",
    imo: "9462045",
    built: "2010",
    flag: "Marshall Islands",
    dwt: "8,138 t",
    coating: "S. Epoxy",
    client: "Independent",
    openChange: "None",
    readiness: 91,
    port: "Ceuta",
    eta: "02 Sep 2026 • 14:05",
    status: "Compliant",
    crew: [
      { name: "Merih Demiral", profileKey: "merih", rank: "Master (previous service)", end: "—", certs: "Master ok", visas: "Ready", readiness: 97, tone: "ready" },
      { name: "Ferdi Kadıoğlu", profileKey: "ferdi", rank: "Second Engineer", end: "—", certs: "Engine ok", visas: "Visa watch", readiness: 90, tone: "risk" },
    ],
  },
});

const planningMissions = [
  { key: "bremen", missionId: "CC-2026-014", vessel: "MT Scot Bremen", role: "Chief Officer", port: "Gibraltar, UK", join: "14 Jul 2026", status: "Ready", candidate: "Hakan Çalhanoğlu", priority: "Low", open: true },
  { key: "stuttgart", missionId: "CC-2026-027", vessel: "MT Scot Stuttgart", role: "Second Engineer", port: "Rotterdam, NL", join: "22 Jul 2026", status: "Pending action", candidate: "Candidate pending confirmation", priority: "High", open: true },
  { key: "hamburg", missionId: "Not yet opened", vessel: "MT Scot Hamburg", role: "Second Officer", port: "Antwerp, BE", join: "03 Sep 2026", status: "Scheduled", candidate: "Relief planning", priority: "Low", open: false },
  { key: "bayern", missionId: "Not yet opened", vessel: "MT Scot Bayern", role: "Chief Engineer", port: "Algeciras, ES", join: "11 Aug 2026", status: "Scheduled", candidate: "Passport alert", priority: "Medium", open: false },
  { key: "frankfurt", missionId: "Not yet opened", vessel: "MT Scot Frankfurt", role: "Master", port: "Fos-sur-Mer, FR", join: "19 Aug 2026", status: "Urgent - cert expired", candidate: "No compliant candidate yet", priority: "Critical", open: false },
  { key: "dresden", missionId: "Not yet opened", vessel: "MT Scot Dresden", role: "Master", port: "Marmara, TR", join: "15 Jul 2026", status: "Scheduled", candidate: "Current master ready", priority: "Low", open: false },
];

const matchingMissions = {
  bremen: {
    key: "bremen",
    missionId: "CC-2026-014",
    vessel: "MT Scot Bremen",
    role: "Chief Officer",
    port: "Gibraltar",
    embarkation: "14 Jul 2026 • 09:30",
    owner: "Chief Officer (Admin)",
    positionTag: "Chief Officer Position",
    summary: "Zero document overlap risks. Shell vetting confirmed for upcoming Gibraltar inspection. Preferred by Master on previous contract.",
    alertNote: "Low operational risk. All mandatory certificates remain valid throughout the assignment.",
    rotations: [
      { key: "bremen-chief", title: "Chief Officer Relief", current: "Current onboard officer signs off 14 Jul", eta: "Gibraltar • 09:30", readiness: "99%", status: "ready" },
      { key: "bremen-second", title: "Second Officer Coverage", current: "Secondary relief opens 03 Aug", eta: "Rotterdam • 11:00", readiness: "91%", status: "live" },
    ],
    candidates: [
      {
        key: "hakan",
        name: "Hakan Çalhanoğlu",
        rank: "Chief Officer",
        readiness: 99,
        tone: "ready",
        tags: ["12Y Sea Exp", "VLCC Specialist"],
        note: "Zero document overlap risks. Shell vetting confirmed for upcoming Gibraltar inspection. Preferred by Master on previous contract.",
        action: "select-candidate",
        actionLabel: "Selected",
        secondary: "run-ready-check",
        secondaryLabel: "Ready Check",
      },
      {
        key: "nihat",
        name: "Nihat Kahveci",
        rank: "Chief Officer (Alt)",
        readiness: 95,
        tone: "risk",
        tags: ["15Y Sea Exp", "LPG/VLCC"],
        note: "Valid backup candidate. Minimal risk identified in medical expiry, but vessel-specific familiarization should be refreshed before assignment.",
        action: "open-crew-profile",
        actionLabel: "Review Candidate",
        secondary: "request-docs",
        secondaryLabel: "Request Docs",
      },
      {
        key: "emre-promo",
        name: "Emre Belözoğlu",
        rank: "Second Officer",
        readiness: 82,
        tone: "blocked",
        tags: ["Promotion Review", "Medical Watch"],
        note: "Promotion path possible, but current medical non-compliance and passport horizon make this a higher-risk alternative.",
        action: "request-promotion",
        actionLabel: "Request Promotion",
        secondary: "request-docs",
        secondaryLabel: "Request Docs",
      },
    ],
    logistics: [
      { label: "Selected Relief", value: "Hakan Çalhanoğlu" },
      { label: "ETA Gibraltar", value: "14 Jul • 09:30" },
      { label: "Flight", value: "TK 1443 • Confirmed" },
      { label: "Visa", value: "Schengen • Verified" },
    ],
    documents: [
      { name: "Passport_HC.pdf", status: "Verified" },
      { name: "SeamanBook_HC.pdf", status: "Verified" },
      { name: "MedicalFit_2026.pdf", status: "Verified" },
    ],
    rules: [
      { name: "STCW 2010 Manila", verdict: "Passed" },
      { name: "Vessel Familiarization", verdict: "Waived" },
      { name: "Shell Vetting (VIQ7)", verdict: "Passed" },
    ],
  },
  stuttgart: {
    key: "stuttgart",
    missionId: "CC-2026-027",
    vessel: "MT Scot Stuttgart",
    role: "Second Engineer",
    port: "Rotterdam",
    embarkation: "22 Jul 2026 • 18:00",
    owner: "Technical Manager",
    positionTag: "Second Engineer Position",
    summary: "No medical-compliant candidate is fully locked. Assignment remains exposed until promotion or alternate relief is approved.",
    alertNote: "Medium to high operational risk due to pending compliant candidate and document dependencies.",
    rotations: [
      { key: "stuttgart-second", title: "Second Engineer Relief", current: "Current engineer signs off 22 Jul", eta: "Rotterdam • 18:00", readiness: "70%", status: "risk" },
      { key: "stuttgart-deck", title: "Deck Support Review", current: "Support role opens 05 Aug", eta: "Hamburg • 12:00", readiness: "88%", status: "live" },
    ],
    candidates: [
      {
        key: "ferdi",
        name: "Ferdi Kadıoğlu",
        rank: "Third Engineer",
        readiness: 91,
        tone: "risk",
        tags: ["Promotion Needed", "Engine Watch"],
        note: "Strong long-term option if promotion approval is granted quickly. No document blocker today, but seniority approval remains open.",
        action: "select-candidate",
        actionLabel: "Select Candidate",
        secondary: "request-promotion",
        secondaryLabel: "Request Promotion",
      },
      {
        key: "ozan",
        name: "Ozan Kabak",
        rank: "Second Engineer",
        readiness: 84,
        tone: "blocked",
        tags: ["Visa Pending", "Travel Risk"],
        note: "Rank match is acceptable but travel documentation remains incomplete for the target embarkation window.",
        action: "request-docs",
        actionLabel: "Request Docs",
        secondary: "open-crew-profile",
        secondaryLabel: "Review Candidate",
      },
    ],
    logistics: [
      { label: "Primary Gap", value: "Second Engineer" },
      { label: "Port Window", value: "22 Jul • Rotterdam" },
      { label: "Travel", value: "2 itineraries pending" },
      { label: "Visa", value: "1 C1/D review open" },
    ],
    documents: [
      { name: "VisaReview_SE.pdf", status: "Pending" },
      { name: "PromotionRequest_SE.pdf", status: "Draft" },
      { name: "MedicalClearance_SE.pdf", status: "Verified" },
    ],
    rules: [
      { name: "Medical Validity", verdict: "Passed" },
      { name: "Rank Match", verdict: "Review" },
      { name: "Visa / Travel Pack", verdict: "Pending" },
    ],
  },
};

const alertsData = [
  { key: "emre-passport", severity: "blocked", title: "Passport expires before next assignment", subject: "Emre Belözoğlu — Chief Engineer", action: "renew-alert", actionLabel: "Renew" },
  { key: "cenk-medical", severity: "risk", title: "Medical certificate expires in 12 days", subject: "Cenk Tosun — Second Officer", action: "schedule-alert", actionLabel: "Schedule" },
  { key: "rustu-tanker", severity: "blocked", title: "Advanced Oil Tanker Certificate expired", subject: "Rüştü Reçber — Master", action: "renew-alert", actionLabel: "Renew" },
  { key: "stuttgart-candidate", severity: "blocked", title: "No medical-compliant candidate yet selected", subject: "CC-2026-027 — MT Scot Stuttgart", action: "find-alert", actionLabel: "Find" },
];

const complianceRules = [
  { key: "medical-overlap", name: "Minimum medical certificate validity at sign-on", scope: "Global", source: "ILO MLC 2006", updated: "03 Jan 2026", enabled: true, note: "Medical certificates must remain valid for the full assignment window." },
  { key: "oil-tanker", name: "Advanced Oil Tanker endorsement required for Tanker rank >= Officer", scope: "Flag: All", source: "STCW Reg. V/1-1", updated: "11 Feb 2026", enabled: true, note: "Candidate certificates must match target onboard role." },
  { key: "shell-vetting", name: "Shell vetting requirements (SIRE 2.0 crew matrix)", scope: "Client: Shell", source: "Shell Marine", updated: "22 Apr 2026", enabled: true, note: "Shell missions require a client-specific crew matrix review." },
  { key: "liberian-endorsement", name: "Liberian Endorsement required for officers on Liberia-flagged vessels", scope: "Flag: Liberia", source: "Liberian Maritime Authority", updated: "14 Nov 2025", enabled: true, note: "Applies automatically when mission flag is Liberia." },
  { key: "ilo108", name: "ILO108 eligibility determines UK Visa requirement by nationality", scope: "Port: UK", source: "ILO Convention 108", updated: "30 Sep 2025", enabled: true, note: "Port visa rules are derived automatically from nationality and itinerary." },
  { key: "ready-threshold", name: "Ready Index must exceed 90 to appear in default candidate list", scope: "Global", source: "Company Policy", updated: "05 Jun 2026", enabled: true, note: "Default ranking suppresses candidates below the threshold unless manually reviewed." },
  { key: "yellow-fever", name: "Yellow Fever vaccination required for West Africa port calls", scope: "Port: West Africa", source: "WHO / IHR", updated: "18 Mar 2026", enabled: false, note: "Disabled while no current itinerary includes West Africa." },
];

const complianceExceptions = [
  {
    key: "nihat-medical",
    title: "Medical validity exception — Nihat Kahveci",
    status: "Pending approval",
    tone: "risk",
    meta: "Requested by: Marina Castro (Crew Manager) · Mission: CC-2026-027 — MT Scot Stuttgart",
    reason:
      "Medical certificate expires 42 days into the proposed contract; ship's doctor confirms no restriction. Requesting conditional sign-on pending renewal at first port call.",
    primaryAction: "approve-exception",
    primaryLabel: "Approve",
    secondaryAction: "decline-exception",
    secondaryLabel: "Decline",
  },
  {
    key: "flag-waiver",
    title: "Flag endorsement waiver — MT Scot Frankfurt",
    status: "Approved",
    tone: "ready",
    meta: "Approved by: Operations Manager · 12 Jun 2026",
    reason: "Temporary 30-day waiver granted by Malta Flag State while replacement Master's endorsement is processed.",
  },
  {
    key: "yellow-fever-scope",
    title: "Yellow Fever rule scope — disabled for current itinerary",
    status: "Approved",
    tone: "ready",
    meta: "Approved by: Administrator · 18 Mar 2026",
    reason: "No West Africa port calls scheduled across the fleet for Q2–Q3 2026; rule disabled to reduce false alerts, re-enable before any West Africa fixture.",
  },
];

const complianceAudit = [
  { time: "27 Jun · 09:02", action: "Ready Check executed — no changes detected", who: "Merih Demiral · triggered by Marina Castro" },
  { time: "26 Jun · 17:44", action: "Candidate selected for CC-2026-014", who: "Hakan Çalhanoğlu assigned · Marina Castro" },
  { time: "26 Jun · 14:10", action: "Medical exception requested for CC-2026-027", who: "Nihat Kahveci · Marina Castro" },
  { time: "25 Jun · 08:55", action: "Rule updated: Ready Index minimum threshold -> 90", who: "Company Policy · Administrator" },
  { time: "22 Jun · 11:20", action: "Advanced Oil Tanker Certificate flagged as expired", who: "Rüştü Reçber · automatic detection" },
  { time: "19 Jun · 16:02", action: "Crew Change confirmed — Ready Index 98%", who: "CC-2026-009 · Marina Castro" },
];

const adminCards = [
  { title: "Workspace Health", value: "Nominal", meta: "All demo modules online" },
  { title: "Connected User", value: "Marina Keskin", meta: "Ops Manager / Admin access" },
  { title: "Latest Audit Event", value: "Policy export", meta: "09:04 UTC • Reports module" },
  { title: "Notification Mode", value: "Critical only", meta: "4 alerts in active watch" },
];

const documentNames = {
  "passport-hc": "Passport_HC.pdf",
  "medical-cenk": "Medical_CenkTosun.pdf",
  "seamanbook-emre": "SeamanBook_EmreBelözoğlu.pdf",
  "flag-endorsement-elena": "FlagEndorsement_ElenaRossi.pdf",
};

const reportFiles = {
  "weekly-readiness": "Weekly Readiness Report.pdf",
  "expiring-docs": "Expiring Documents Report.pdf",
  "crew-change-risk": "Crew Change Risk Report.pdf",
  "daily-brief": "Daily Brief.pdf",
  "weekly-summary": "Weekly Summary.pdf",
  "compliance-pack": "Compliance Exceptions Pack.pdf",
  "crew-plan": "Crew Planning Board.pdf",
  "doc-forecast": "Document Forecast.pdf",
};

const state = {
  activeView: "command-center",
  activeMission: "bremen",
  activeRotation: "bremen-chief",
  activeProfile: "hakan",
  activeProfileTab: "overview",
  activeComplianceTab: "rules",
  activeVessel: "bremen",
  rules: Object.fromEntries(complianceRules.map((rule) => [rule.key, rule.enabled])),
};

const searchableProfileKeys = ["merih", "hakan", "nihat", "emre", "cenk", "rustu", "arda", "ozan", "kerem", "ferdi"];
const searchableVesselKeys = ["bremen", "stuttgart", "hamburg", "bayern", "berlin", "munchen", "leipzig", "frankfurt", "dresden", "flensburg", "augsburg", "nuernberg"];

const toastEl = document.getElementById("toast");
const topbarTitle = document.getElementById("topbar-title");
const topbarSearch = document.getElementById("topbar-search");
const statusLeft = document.getElementById("status-left");
const statusRight = document.getElementById("status-right");
const copilotThread = document.getElementById("copilot-thread");
const readyAiThread = document.getElementById("ready-ai-thread");
const copilotPrompts = document.getElementById("copilot-prompts");
const copilotContextLabel = document.getElementById("copilot-context-label");
const copilotContextTitle = document.getElementById("copilot-context-title");
const copilotContextCopy = document.getElementById("copilot-context-copy");
const planningViewRoot = document.getElementById("planning-view-root");
const matchingViewRoot = document.getElementById("matching-view-root");
const crewProfileRoot = document.getElementById("crew-profile-root");
const vesselDetailRoot = document.getElementById("vessel-detail-root");
const alertsViewRoot = document.getElementById("alerts-view-root");
const complianceViewRoot = document.getElementById("compliance-view-root");
const adminViewRoot = document.getElementById("admin-view-root");

let toastTimer;
let chatHistory = [
  {
    role: "ai",
    text: "I can answer questions about crew readiness, crew changes, documents, fleet risk, routes & ports and reports using the current pilot dataset.",
    meta: "Ready AI • System overview",
  },
  {
    role: "ai",
    text: "Current headline: 162 crew are ready, 18 are at risk, 6 are blocked, and 2 decisions require action today.",
    meta: "Ready AI • Current system snapshot",
  },
];

const activityFeed = [
  { time: "20 Jul · 14:04", title: "Audit baseline loaded", meta: "Administration workspace initialized" },
  { time: "20 Jul · 13:56", title: "Weekly readiness report exported", meta: "Reports module" },
  { time: "20 Jul · 13:42", title: "Compliance rule toggle reviewed", meta: "Rules engine" },
  { time: "20 Jul · 13:18", title: "CC-2026-014 assignment draft updated", meta: "Crew Matching" },
];

function recordActivity(title, meta) {
  activityFeed.unshift({
    time: "20 Jul · 14:20",
    title,
    meta,
  });
}

function updateMissionPlanningState(missionKey, updates) {
  const mission = planningMissions.find((item) => item.key === missionKey);
  if (!mission) return;
  Object.assign(mission, updates);
}

function updateMissionSelection(missionKey, candidateKey) {
  const mission = matchingMissions[missionKey];
  if (!mission) return null;

  const candidate = mission.candidates.find((item) => item.key === candidateKey);
  if (!candidate) return null;

  mission.selectedCandidateKey = candidateKey;
  mission.logistics[0] = { ...mission.logistics[0], value: candidate.name };
  mission.summary = `${candidate.name} is now the active recommended relief for ${mission.vessel}. Candidate stack, logistics and planning summary have been updated for review.`;

  mission.candidates = mission.candidates.map((item) => ({
    ...item,
    action: item.key === candidateKey ? "select-candidate" : item.action,
    actionLabel:
      item.key === candidateKey
        ? "Selected"
        : item.key === "hakan" && missionKey === "bremen"
          ? "Review Candidate"
          : item.key === "ferdi" && missionKey === "stuttgart"
            ? "Review Candidate"
            : item.actionLabel,
  }));

  updateMissionPlanningState(missionKey, {
    candidate: candidate.name,
    status: mission.finalized ? "Finalized" : "Candidate selected",
    priority: missionKey === "stuttgart" ? "Medium" : "Low",
  });

  recordActivity(`Candidate selected for ${mission.missionId}`, `${candidate.name} · ${mission.vessel}`);
  return candidate;
}

function finalizeMission(missionKey) {
  const mission = matchingMissions[missionKey];
  if (!mission) return null;

  mission.finalized = true;
  mission.owner = "Assignment Finalized";
  mission.alertNote = "Operational risk reduced. Assignment package prepared and internal handover marked complete.";

  updateMissionPlanningState(missionKey, {
    status: "Finalized",
    priority: "Low",
  });

  recordActivity(`Assignment finalized for ${mission.missionId}`, `${mission.vessel} · ${mission.logistics[0]?.value || "Relief confirmed"}`);
  return mission;
}

function resolveAlert(alertKey, resolutionTitle, resolutionMeta) {
  const index = alertsData.findIndex((item) => item.key === alertKey);
  if (index === -1) return false;
  alertsData.splice(index, 1);
  recordActivity(resolutionTitle, resolutionMeta);
  return true;
}

function updateComplianceException(exceptionKey, status, tone, meta) {
  const exception = complianceExceptions.find((item) => item.key === exceptionKey);
  if (!exception) return false;

  exception.status = status;
  exception.tone = tone;
  exception.meta = meta;
  delete exception.primaryAction;
  delete exception.primaryLabel;
  delete exception.secondaryAction;
  delete exception.secondaryLabel;
  return true;
}

function renderStatusRow(target, items) {
  target.innerHTML = "";
  items.forEach((item, index) => {
    const p = document.createElement("p");
    p.textContent = item;
    target.appendChild(p);

    if (index < items.length - 1) {
      const sep = document.createElement("span");
      sep.className = "status-sep";
      target.appendChild(sep);
    }
  });
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}

function renderCopilotPrompts(prompts) {
  copilotPrompts.innerHTML = "";
  prompts.forEach((prompt) => {
    const button = document.createElement("button");
    button.className = "copilot-prompt";
    button.dataset.prompt = prompt;
    button.textContent = prompt;
    copilotPrompts.appendChild(button);
  });
}

function createMessageNode(entry) {
  const wrap = document.createElement("div");
  wrap.className = `message ${entry.role}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = entry.role === "ai" ? "AI" : "MK";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = entry.text;

  if (entry.meta) {
    const meta = document.createElement("div");
    meta.className = "message-meta";
    meta.textContent = entry.meta;
    bubble.appendChild(meta);
  }

  wrap.appendChild(avatar);
  wrap.appendChild(bubble);
  return wrap;
}

function renderThreadInto(target) {
  if (!target) return;
  target.innerHTML = "";
  chatHistory.forEach((entry) => target.appendChild(createMessageNode(entry)));
  target.scrollTop = target.scrollHeight;
}

function renderThreads() {
  renderThreadInto(copilotThread);
  renderThreadInto(readyAiThread);
}

function buildAnswer(question, viewName) {
  const text = question.toLowerCase();

  if (text.includes("bremen") || text.includes("chief officer") || text.includes("cover the gap") || text.includes("replace")) {
    return "For MT Scot Bremen, the strongest immediate option remains <strong>Hakan Çalhanoğlu</strong>. He is at 99% readiness, his medical, passport and seaman book are valid, and he already has prior vessel experience on MT Scot Bremen. Nihat Kahveci is the backup at 95%, but his medical horizon is tighter.";
  }

  if (text.includes("document") || text.includes("certificate") || text.includes("medical") || text.includes("visa") || text.includes("expiry") || text.includes("expiring")) {
    return "The document stack shows <strong>24 expiring soon</strong>, <strong>9 missing</strong> and <strong>16 pending review</strong>. The highest-impact blockers are Emre Belözoğlu's passport horizon, Cenk Tosun's medical renewal, Rüştü Reçber's expired Advanced Oil Tanker certificate and the open document watch items affecting MT Scot Stuttgart.";
  }

  if ((text.includes("blocked") || text.includes("blocker")) || (text.includes("why") && text.includes("blocked"))) {
    return "The current blocked stack is led by <strong>STCW certifications (6)</strong>, <strong>medical clearances (5)</strong>, <strong>visa approvals (3)</strong> and <strong>contracting issues (2)</strong>. Operationally, the most urgent blocked cases are Rüştü Reçber on MT Scot Frankfurt and the unresolved engineering gap on MT Scot Stuttgart.";
  }

  if (text.includes("fleet") || text.includes("vessel") || text.includes("risk")) {
    return "Fleet risk is concentrated in <strong>MT Scot Frankfurt</strong> and <strong>MT Scot Stuttgart</strong>. Frankfurt is the most exposed because of an expired Advanced Oil Tanker certificate on the current Master profile, while Stuttgart still needs a confirmed compliant Second Engineer. MT Scot Bremen remains the healthiest active crew-change vessel in the sample at 92%.";
  }

  if (text.includes("route") || text.includes("port") || text.includes("window") || text.includes("eta") || text.includes("arrival")) {
    return "Planning currently tracks the key port-call windows for <strong>Gibraltar</strong>, <strong>Rotterdam</strong>, <strong>Antwerp</strong>, <strong>Algeciras</strong>, <strong>Fos-sur-Mer</strong> and <strong>Marmara</strong>. The most sensitive windows are Rotterdam for MT Scot Stuttgart and Fos-sur-Mer for MT Scot Frankfurt, while Gibraltar remains the cleanest active assignment window for MT Scot Bremen.";
  }

  if (text.includes("report") || text.includes("brief") || text.includes("summary") || text.includes("executive")) {
    return `Executive summary: <strong>${systemDataNotes.readyCount} ready</strong>, <strong>${systemDataNotes.atRiskCount} at risk</strong>, <strong>${systemDataNotes.blockedCount} blocked</strong>, and <strong>${systemDataNotes.actionsToday} decisions</strong> requiring action today. Priority remains on MT Scot Bremen, MT Scot Stuttgart and document blockers linked to active crew changes.`;
  }

  if (text.includes("who is ready") || text.includes("ready to embark") || text.includes("available")) {
    return "The strongest ready-to-embark sample candidates are <strong>Hakan Çalhanoğlu</strong> (99%), <strong>Nihat Kahveci</strong> (95%), and multiple available deck and engineering profiles shown in Crew. Overall, the current pilot dataset reflects <strong>162 ready personnel</strong> and <strong>42 available now</strong>.";
  }

  if (viewName === "matching") {
    return "From Crew Matching, the safest immediate move is to finalize Hakan Çalhanoğlu for CC-2026-014 and keep Nihat Kahveci in reserve. CC-2026-027 still needs a confirmed compliant engineering candidate.";
  }

  if (viewName === "crew-profile") {
    return "This crew profile shows a positive deployment posture. The priority is to monitor certificate horizon, keep the linked documents current and use the service history to support assignment decisions.";
  }

  if (viewName === "documents") {
    return "From the Documents module, the most important operational signal is that missing and expiring records are now the fastest path to blocked rotations. The cleanest next step is to resolve the missing Seaman Book and outstanding visa / medical reviews tied to active crew changes.";
  }

  if (viewName === "crew-changes") {
    return "From the Crew Changes module, the fastest way to reduce operational risk is to clear the MT Scot Bremen and MT Scot Stuttgart rotations first. Those are the assignments with the tightest windows and the highest downstream impact.";
  }

  return "I can help with readiness, crew changes, documents, fleet risk, routes, ports and reporting using the current pilot dataset. Try asking about blockers, expiring documents, vessel risk, available crew, or which action should be prioritized next.";
}

function pushUserQuestion(question) {
  chatHistory.push({
    role: "user",
    text: question,
    meta: `Marina Keskin • ${viewMeta[state.activeView].title}`,
  });

  chatHistory.push({
    role: "ai",
    text: buildAnswer(question, state.activeView),
    meta: `Ready AI • ${copilotProfiles[state.activeView].title}`,
  });

  renderThreads();
}

function handleSend(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const value = input.value.trim();
  if (!value) {
    showToast("Type a question for Ready AI first.");
    return;
  }

  input.value = "";
  pushUserQuestion(value);
}

function toneClass(tone) {
  if (tone === "blocked") return "blocked";
  if (tone === "risk") return "risk";
  return "ready";
}

function getMissionKeyFromProfile(profile) {
  const missionByVessel = {
    "MT Scot Bremen": "bremen",
    "MT Scot Stuttgart": "stuttgart",
    "MT Scot Hamburg": "hamburg",
    "MT Scot Bayern": "bayern",
    "MT Scot Frankfurt": "frankfurt",
    "MT Scot Dresden": "dresden",
  };

  return missionByVessel[profile.mission] || "bremen";
}

function renderPlanningView() {
  planningViewRoot.innerHTML = `
    <div class="kpi-grid">
      <div class="kpi-card"><span class="kpi-label">Open Missions</span><div class="kpi-value">6</div><div class="kpi-meta">30-day horizon</div></div>
      <div class="kpi-card"><span class="kpi-label">Ready Candidates</span><div class="kpi-value text-ready">2</div><div class="kpi-meta text-ready">Immediate matches</div></div>
      <div class="kpi-card"><span class="kpi-label">Pending Approvals</span><div class="kpi-value text-risk">1</div><div class="kpi-meta text-risk">Promotion review</div></div>
      <div class="kpi-card"><span class="kpi-label">Critical Gaps</span><div class="kpi-value text-blocked">1</div><div class="kpi-meta text-blocked">No compliant candidate</div></div>
    </div>

    <div class="card table-card">
      <div class="table-toolbar">
        <div>
          <div class="headline" style="font-size:20px;">30-Day Crew Change Plan</div>
          <div class="subcopy">Upcoming sign-off windows and relief decisions from the original MVP flow.</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn" data-action="filter-planning">Filter</button>
          <button class="btn" data-action="export-planning">Export</button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Port Call Date</th>
              <th>Vessel</th>
              <th>Port</th>
              <th>Rank(s) Rotating</th>
              <th>Mission</th>
              <th>Status</th>
              <th style="text-align:right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${planningMissions
              .map(
                (mission) => `
                  <tr>
                    <td><strong>${mission.join}</strong></td>
                    <td>${mission.vessel}</td>
                    <td>${mission.port}</td>
                    <td>${mission.role}</td>
                    <td><strong>${mission.missionId}</strong></td>
                    <td><span class="badge ${mission.priority === "Critical" ? "blocked" : mission.priority === "High" || mission.priority === "Medium" ? "risk" : "ready"}">${mission.status}</span></td>
                    <td style="text-align:right;"><button class="btn ${mission.open ? "btn-primary" : ""}" data-action="${mission.open ? "open-matching" : "show-future-mission"}" data-key="${mission.key}">${mission.open ? "Open Matching" : "Queued"}</button></td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="split-grid">
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:16px;">Embarkation Timeline</div>
        </div>
        <div class="timeline">
          <div class="timeline-line"></div>
          <div class="timeline-row">
            <div class="timeline-stop"><span class="timeline-dot" style="background:#006591;"></span><div class="eyebrow" style="letter-spacing:0.08em;">14 Jul<br>GIB</div></div>
            <div class="timeline-stop"><span class="timeline-dot" style="background:#fbbf24;"></span><div class="eyebrow" style="letter-spacing:0.08em;">22 Jul<br>RTD</div></div>
            <div class="timeline-stop"><span class="timeline-dot" style="background:#ba1a1a;"></span><div class="eyebrow" style="letter-spacing:0.08em;">11 Aug<br>VLC</div></div>
          </div>
        </div>
        <div class="list-stack" style="margin-top:24px;">
          <div class="list-item"><div><div class="list-title">MT Scot Bremen</div><div class="list-meta">Hakan selected • all docs verified</div></div><button class="btn" data-action="open-matching" data-key="bremen">Review</button></div>
          <div class="list-item"><div><div class="list-title">MT Scot Stuttgart</div><div class="list-meta">Engineering gap needs decision</div></div><button class="btn" data-action="open-matching" data-key="stuttgart">Resolve</button></div>
          <div class="list-item"><div><div class="list-title">MT Scot Frankfurt</div><div class="list-meta">Master role exposed by expired tanker certificate</div></div><button class="btn" data-action="show-future-mission" data-key="frankfurt">Queue</button></div>
        </div>
      </div>

      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:16px;">Planning Watchlist</div>
        </div>
        <div class="list-stack">
          <div class="list-item"><div><div class="list-title">No compliant engineering backup</div><div class="list-meta">MT Scot Stuttgart • CC-2026-027</div></div><span class="badge blocked">High</span></div>
          <div class="list-item"><div><div class="list-title">Passport renewal before assignment</div><div class="list-meta">Emre Belözoğlu</div></div><span class="badge blocked">Critical</span></div>
          <div class="list-item"><div><div class="list-title">Medical horizon tightening</div><div class="list-meta">Nihat Kahveci • 60-day threshold</div></div><span class="badge risk">Watch</span></div>
        </div>
      </div>
    </div>
  `;
}

function renderMatchingView() {
  const mission = matchingMissions[state.activeMission];
  const selectedRotation = mission.rotations.find((rotation) => rotation.key === state.activeRotation) || mission.rotations[0];
  const selectedCandidateKey = mission.selectedCandidateKey || (mission.key === "bremen" ? "hakan" : null);

  matchingViewRoot.innerHTML = `
    <div class="detail-header">
      <div>
        <div class="eyebrow">Operations / Crew Change / ${mission.missionId}</div>
        <h3 class="headline" style="margin-top:10px;">${mission.vessel}</h3>
        <div class="detail-subline">${mission.role} • ${mission.port} • ${mission.embarkation}</div>
      </div>
      <div class="detail-actions">
        <button class="btn" data-nav="planning">Back to Planning</button>
        <button class="btn btn-primary" data-action="finalize-assignment" data-key="${mission.key}">${mission.finalized ? "Assignment Finalized" : "Finalize Assignment"}</button>
      </div>
    </div>

    ${
      mission.finalized
        ? `
          <div class="card pad-lg" style="margin-bottom:20px;">
            <div class="card-header">
              <div class="headline" style="font-size:18px;">Assignment Status</div>
              <span class="badge ready">Finalized</span>
            </div>
            <p class="subcopy">This mission is marked finalized in the demo state. Planning, logistics and audit trail have been updated to reflect the confirmed relief.</p>
          </div>
        `
        : ""
    }

    <div class="tab-row">
      ${Object.values(matchingMissions)
        .map(
          (item) => `
            <button class="seg-button ${item.key === state.activeMission ? "active" : ""}" data-action="switch-mission" data-key="${item.key}">
              ${item.vessel}
            </button>
          `
        )
        .join("")}
    </div>

    <div class="split-grid">
      <div class="card pad-lg">
        <div class="card-header">
          <div>
            <div class="eyebrow">Rotation Board</div>
            <div class="headline" style="font-size:18px; margin-top:8px;">${mission.positionTag}</div>
          </div>
          <span class="badge ${selectedRotation.status === "blocked" ? "blocked" : selectedRotation.status === "risk" ? "risk" : "ready"}">${selectedRotation.readiness}</span>
        </div>
        <div class="rotation-list">
          ${mission.rotations
            .map(
              (rotation) => `
                <div class="rotation-card ${rotation.key === state.activeRotation ? "selected" : ""}" data-action="select-rotation" data-key="${rotation.key}">
                  <div>
                    <div class="list-title">${rotation.title}</div>
                    <div class="list-meta">${rotation.current}</div>
                  </div>
                  <div style="text-align:right;">
                    <div class="badge ${rotation.status === "risk" ? "risk" : rotation.status === "blocked" ? "blocked" : "live"}">${rotation.eta}</div>
                    <div class="list-meta" style="margin-top:6px;">Ready ${rotation.readiness}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="card kpi-card--soft matching-note-card">
          <div class="eyebrow">Ready AI Recommendation</div>
          <p class="subcopy" style="margin-top:12px;">${mission.summary}</p>
        </div>
      </div>

      <div class="card pad-lg">
        <div class="card-header">
          <div>
            <div class="eyebrow">Task Owner</div>
            <div class="headline" style="font-size:18px; margin-top:8px;">${mission.owner}</div>
          </div>
          <span class="badge ${mission.key === "bremen" ? "ready" : "risk"}">${mission.key === "bremen" ? "Low Risk" : "Open Risk"}</span>
        </div>
        <div class="list-stack">
          ${mission.logistics
            .map(
              (item) => `
                <div class="list-item">
                  <div>
                    <div class="eyebrow" style="letter-spacing:0.12em;">${item.label}</div>
                    <div class="list-title" style="margin-top:8px;">${item.value}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>

    <div class="card pad-lg">
      <div class="card-header">
        <div>
          <div class="eyebrow">Candidate Stack</div>
          <div class="headline" style="font-size:18px; margin-top:8px;">${selectedRotation.title}</div>
        </div>
      </div>
      <div class="candidate-grid">
        ${mission.candidates
          .map(
            (candidate) => `
              <div class="candidate-card ${candidate.key === selectedCandidateKey ? "best" : ""}" data-action="toggle-note" data-key="${candidate.key}">
                <div class="candidate-head">
                  <div>
                    <div class="headline" style="font-size:16px;">${candidate.name}</div>
                    <div class="subcopy">${candidate.rank}</div>
                  </div>
                  <div class="candidate-score ${toneClass(candidate.tone)}">${candidate.readiness}%</div>
                </div>
                <div class="candidate-tags">
                  ${candidate.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
                </div>
                <div class="cand-ai-note" id="note-${candidate.key}">
                  ${candidate.note}
                </div>
                <div class="detail-actions detail-actions--stack">
                  <button class="btn btn-primary" data-action="${candidate.action}" data-key="${candidate.key}">${candidate.actionLabel}</button>
                  <button class="btn" data-action="${candidate.secondary}" data-key="${candidate.key}">${candidate.secondaryLabel}</button>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>

    <div class="split-grid">
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:16px;">Document Vault</div>
          <button class="btn" data-action="download-assignment-pack" data-key="${mission.key}">Download All</button>
        </div>
        <div class="document-pill-grid">
          ${mission.documents
            .map(
              (doc) => `
                <button class="document-pill-card" data-action="view-document" data-key="${doc.name}">
                  <span class="material-symbols-outlined">description</span>
                  <strong>${doc.name}</strong>
                  <span class="badge ready">${doc.status}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </div>

      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:16px;">Compliance Engine</div>
        </div>
        <div class="list-stack">
          ${mission.rules
            .map(
              (rule) => `
                <div class="list-item">
                  <div class="list-title">${rule.name}</div>
                  <span class="badge ${rule.verdict === "Passed" ? "ready" : rule.verdict === "Review" || rule.verdict === "Pending" ? "risk" : "live"}">${rule.verdict}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderProfileTabContent(profile) {
  if (state.activeProfileTab === "travel") {
    return `
      <div class="card table-card">
        <div class="table-toolbar">
          <div class="headline" style="font-size:18px;">Travel Readiness</div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${profile.travelItems
                .map(
                  (item) => `
                    <tr>
                      <td><strong>${item.label}</strong></td>
                      <td>${item.value}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (state.activeProfileTab === "compliance") {
    return `
      <div class="card table-card">
        <div class="table-toolbar">
          <div class="headline" style="font-size:18px;">Ready Check Breakdown</div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Check</th>
                <th style="text-align:center;">Score</th>
                <th>Operational Note</th>
              </tr>
            </thead>
            <tbody>
              ${profile.complianceItems
                .map(
                  (item) => `
                    <tr>
                      <td><strong>${item.label}</strong></td>
                      <td style="text-align:center;"><strong>${item.score}%</strong></td>
                      <td>${item.action}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (state.activeProfileTab === "assignments") {
    return `
      <div class="card table-card">
        <div class="table-toolbar">
          <div class="headline" style="font-size:18px;">Assignment Data</div>
        </div>
        <div class="key-value-grid">
          ${profile.assignments
            .map(
              (item) => `
                <div>
                  <span class="eyebrow">${item.label}</span>
                  <strong>${item.value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (state.activeProfileTab === "timeline") {
    return `
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Traceability Timeline</div>
        </div>
        <div class="simple-timeline">
          ${profile.timeline
            .map(
              (item) => `
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-body">
                    <div class="timeline-title-row">
                      <strong>${item.action}</strong>
                      <span class="pill">${item.time}</span>
                    </div>
                    <div class="list-meta">${item.who}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (state.activeProfileTab === "notes") {
    return `
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Operational Notes</div>
        </div>
        <div class="list-stack">
          ${profile.notes
            .map(
              (item) => `
                <div class="list-item">
                  <div class="subcopy">${item}</div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (state.activeProfileTab === "certificates") {
    return `
      <div class="card table-card">
        <div class="table-toolbar">
          <div class="headline" style="font-size:18px;">Active Certificates</div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Detail</th>
                <th>Issued</th>
                <th>Expires</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${profile.certificates
                .map(
                  (certificate) => `
                    <tr>
                      <td><strong>${certificate.name}</strong></td>
                      <td>${certificate.detail}</td>
                      <td>${certificate.issued}</td>
                      <td>${certificate.exp}</td>
                      <td><span class="badge ${certificate.status === "risk" ? "risk" : "ready"}">${certificate.status === "risk" ? "Watch" : "Valid"}</span></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (state.activeProfileTab === "documents") {
    return `
      <div class="document-pill-grid">
        ${profile.documents
          .map(
            (doc) => `
              <button class="document-pill-card" data-action="view-document" data-key="${doc.name}">
                <span class="material-symbols-outlined">description</span>
                <strong>${doc.name}</strong>
                <span class="muted">${doc.meta}</span>
                <span class="badge ${doc.status === "Watch" ? "risk" : "ready"}">${doc.status}</span>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  return `
    <div class="split-grid">
      <div class="card pad-lg matching-note-card">
        <div class="headline" style="font-size:18px;">Operational Copilot Briefing</div>
        <p class="subcopy" style="margin-top:14px;">${profile.summary}</p>
        <div style="margin-top:20px;">
          <button class="btn btn-primary" data-prompt="Why is ${profile.name} ready for ${profile.mission}?">Why? Deep Dive Analysis</button>
        </div>
      </div>
      <div class="detail-side-stack">
        <div class="card pad-lg">
          <div class="eyebrow">Medical Status</div>
          <div class="headline" style="font-size:18px; margin-top:12px;">${profile.medical}</div>
        </div>
        <div class="card pad-lg">
          <div class="eyebrow">Travel Readiness</div>
          <div class="headline" style="font-size:18px; margin-top:12px;">${profile.travel}</div>
        </div>
      </div>
    </div>

    <div class="split-grid split-grid--wide">
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Service History</div>
        </div>
        <div class="simple-timeline">
          ${profile.history
            .map(
              (item) => `
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-body">
                    <div class="timeline-title-row">
                      <strong>${item.role}</strong>
                      <span class="pill">${item.years}</span>
                    </div>
                    <div class="list-meta">${item.vessel}</div>
                    <div class="subcopy">${item.note}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>

      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Live Intelligence</div>
        </div>
        <div class="list-stack">
          ${profile.intelligence
            .map(
              (item) => `
                <div class="list-item">
                  <div class="subcopy">${item}</div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderCrewProfileView() {
  const profile = profileData[state.activeProfile];

  crewProfileRoot.innerHTML = `
    <div class="detail-header">
      <div>
        <div class="eyebrow">Fleet Command / Crew / ${profile.name}</div>
        <h3 class="headline" style="margin-top:10px;">Personnel Profile</h3>
      </div>
      <div class="detail-actions">
        <button class="btn" data-nav="crew">Back to Crew</button>
        <button class="btn btn-primary" data-action="open-matching" data-key="${getMissionKeyFromProfile(profile)}">Assign to Mission</button>
      </div>
    </div>

    <div class="split-grid split-grid--wide">
      <div class="card pad-xl">
        <div class="profile-hero">
          <div class="profile-photo">${profile.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}</div>
          <div class="profile-copy">
            <span class="badge ${profile.readiness >= 95 ? "ready" : profile.readiness >= 80 ? "risk" : "blocked"}">${profile.availability}</span>
            <h3 class="headline profile-name-heading">${profile.name}</h3>
            <div class="subcopy profile-rank">${profile.rank}</div>
            <div class="profile-meta-row">
              <span>${profile.nationality}</span>
              <span>${profile.location}</span>
            </div>
          </div>
          <div class="profile-actions">
            <button class="btn btn-primary" data-action="run-ready-check" data-key="${profile.key}">Ready Check</button>
            <button class="btn" data-action="upload-document" data-key="${profile.key}">Upload Document</button>
            <button class="btn" data-action="generate-compliance-report" data-key="${profile.key}">Compliance Report</button>
          </div>
        </div>
      </div>

      <div class="detail-side-stack">
        <div class="card pad-lg">
          <div class="eyebrow">Final Verdict</div>
          <div class="headline" style="font-size:22px; margin-top:12px;">${profile.verdict}</div>
          <div class="badge ${profile.readiness >= 95 ? "ready" : profile.readiness >= 80 ? "risk" : "blocked"}" style="margin-top:14px;">${profile.readiness}% Ready Index</div>
        </div>
        <div class="card pad-lg">
          <div class="eyebrow">Current Mission Match</div>
          <div class="headline" style="font-size:18px; margin-top:12px;">${profile.mission}</div>
          <div class="subcopy">Cross-linked to current crew change workflow.</div>
        </div>
      </div>
    </div>

    <div class="tab-row">
      <button class="seg-button ${state.activeProfileTab === "overview" ? "active" : ""}" data-action="profile-tab" data-key="overview">Overview</button>
      <button class="seg-button ${state.activeProfileTab === "certificates" ? "active" : ""}" data-action="profile-tab" data-key="certificates">Certificates</button>
      <button class="seg-button ${state.activeProfileTab === "documents" ? "active" : ""}" data-action="profile-tab" data-key="documents">Documents</button>
      <button class="seg-button ${state.activeProfileTab === "travel" ? "active" : ""}" data-action="profile-tab" data-key="travel">Travel</button>
      <button class="seg-button ${state.activeProfileTab === "compliance" ? "active" : ""}" data-action="profile-tab" data-key="compliance">Compliance</button>
      <button class="seg-button ${state.activeProfileTab === "assignments" ? "active" : ""}" data-action="profile-tab" data-key="assignments">Assignments</button>
      <button class="seg-button ${state.activeProfileTab === "timeline" ? "active" : ""}" data-action="profile-tab" data-key="timeline">Timeline</button>
      <button class="seg-button ${state.activeProfileTab === "notes" ? "active" : ""}" data-action="profile-tab" data-key="notes">Notes</button>
    </div>

    ${renderProfileTabContent(profile)}
  `;
}

function renderVesselDetailView() {
  const vessel = vesselData[state.activeVessel];

  vesselDetailRoot.innerHTML = `
    <div class="detail-header">
      <div>
        <div class="eyebrow">Fleet / ${vessel.name}</div>
        <h3 class="headline" style="margin-top:10px;">Vessel Detail</h3>
        <div class="detail-subline">IMO ${vessel.imo} • Built ${vessel.built} • ${vessel.flag}</div>
      </div>
      <div class="detail-actions">
        <button class="btn" data-nav="fleet">Back to Fleet</button>
        <button class="btn btn-primary" data-action="${matchingMissions[vessel.key] ? "open-matching" : "show-future-mission"}" data-key="${vessel.key}">${matchingMissions[vessel.key] ? "Open Crew Change" : "Open Planning Context"}</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card"><span class="kpi-label">Readiness</span><div class="kpi-value ${vessel.readiness < 70 ? "text-blocked" : vessel.readiness < 85 ? "text-risk" : "text-ready"}">${vessel.readiness}%</div><div class="kpi-meta">${vessel.status}</div></div>
      <div class="kpi-card"><span class="kpi-label">Current Port</span><div class="kpi-value">${vessel.port}</div><div class="kpi-meta">Target ETA ${vessel.eta}</div></div>
      <div class="kpi-card"><span class="kpi-label">Client</span><div class="kpi-value">${vessel.client}</div><div class="kpi-meta">${vessel.coating}</div></div>
      <div class="kpi-card"><span class="kpi-label">Open Crew Change</span><div class="kpi-value">${vessel.openChange.includes("None") ? "None" : "Active"}</div><div class="kpi-meta">${vessel.openChange}</div></div>
    </div>

    <div class="split-grid">
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Vessel Summary</div>
        </div>
        <div class="key-value-grid">
          <div><span class="eyebrow">Flag</span><strong>${vessel.flag}</strong></div>
          <div><span class="eyebrow">DWT</span><strong>${vessel.dwt}</strong></div>
          <div><span class="eyebrow">Coating</span><strong>${vessel.coating}</strong></div>
          <div><span class="eyebrow">Client</span><strong>${vessel.client}</strong></div>
        </div>
      </div>
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Operational Watch</div>
        </div>
        <div class="list-stack">
          <div class="list-item"><div><div class="list-title">Open change</div><div class="list-meta">${vessel.openChange}</div></div></div>
          <div class="list-item"><div><div class="list-title">Current status</div><div class="list-meta">${vessel.status}</div></div></div>
          <div class="list-item"><div><div class="list-title">Next port event</div><div class="list-meta">${vessel.port} • ${vessel.eta}</div></div></div>
        </div>
      </div>
    </div>

    <div class="card table-card">
      <div class="table-toolbar">
        <div class="headline" style="font-size:18px;">Crew on Board</div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Crew Member</th>
              <th>Role</th>
              <th>Contract End</th>
              <th>Certifications</th>
              <th>Visas</th>
              <th>Ready Index</th>
              <th style="text-align:right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${vessel.crew
              .map(
                (crew) => `
                  <tr>
                    <td><strong>${crew.name}</strong></td>
                    <td>${crew.rank}</td>
                    <td>${crew.end}</td>
                    <td>${crew.certs}</td>
                    <td>${crew.visas}</td>
                    <td><strong class="${crew.tone === "blocked" ? "text-blocked" : crew.tone === "risk" ? "text-risk" : "text-ready"}">${crew.readiness}%</strong></td>
                    <td style="text-align:right;"><button class="btn" data-action="open-crew-profile" data-key="${crew.profileKey}">Open Profile</button></td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAlertsView() {
  alertsViewRoot.innerHTML = `
    <div class="kpi-grid">
      <div class="kpi-card"><span class="kpi-label">Critical Alerts</span><div class="kpi-value text-blocked">4</div><div class="kpi-meta">Needs action now</div></div>
      <div class="kpi-card"><span class="kpi-label">Expiring Documents</span><div class="kpi-value text-risk">24</div><div class="kpi-meta">Top blocker source</div></div>
      <div class="kpi-card"><span class="kpi-label">Blocked Rotations</span><div class="kpi-value text-blocked">6</div><div class="kpi-meta">Across 3 vessels</div></div>
      <div class="kpi-card"><span class="kpi-label">Actionable Today</span><div class="kpi-value">3</div><div class="kpi-meta text-ready">Can be resolved today</div></div>
    </div>

    <div class="card pad-lg">
      <div class="card-header">
        <div class="headline" style="font-size:20px;">Critical Alerts Queue</div>
        <button class="btn" data-nav="command-center">Back to Dashboard</button>
      </div>
      <div class="list-stack">
        ${alertsData
          .map(
            (alert) => `
              <div class="list-item">
                <div>
                  <div class="list-title">${alert.title}</div>
                  <div class="list-meta">${alert.subject}</div>
                </div>
                <div class="detail-actions">
                  <span class="badge ${alert.severity === "blocked" ? "blocked" : "risk"}">${alert.severity === "blocked" ? "Critical" : "Warning"}</span>
                  <button class="btn btn-primary" data-action="${alert.action}" data-key="${alert.key}">${alert.actionLabel}</button>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderComplianceView() {
  let panelContent = "";

  if (state.activeComplianceTab === "rules") {
    panelContent = `
      <div class="card table-card">
        <div class="table-toolbar">
          <div class="headline" style="font-size:20px;">Active Rules Engine</div>
          <button class="btn btn-primary" data-action="new-rule">New Rule</button>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Rule</th>
                <th>Scope</th>
                <th>Source</th>
                <th>Updated</th>
                <th style="text-align:right;">State</th>
              </tr>
            </thead>
            <tbody>
              ${complianceRules
                .map(
                  (rule) => `
                    <tr>
                      <td><strong>${rule.name}</strong></td>
                      <td>${rule.scope}</td>
                      <td>${rule.source}</td>
                      <td>${rule.updated}</td>
                      <td style="text-align:right;"><button class="toggle-pill ${state.rules[rule.key] ? "on" : "off"}" data-action="toggle-rule" data-key="${rule.key}">${state.rules[rule.key] ? "Enabled" : "Disabled"}</button></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="card pad-lg">
        <p class="subcopy">Ready to Sail interprets regulations for the user. Every rule is linked to a governing source and feeds the Ready Check used in Crew Profile and Crew Matching.</p>
      </div>
    `;
  } else if (state.activeComplianceTab === "exceptions") {
    panelContent = complianceExceptions
      .map(
        (item) => `
          <div class="card pad-lg">
            <div class="card-header">
              <div class="headline" style="font-size:18px;">${item.title}</div>
              <span class="badge ${item.tone === "ready" ? "ready" : "risk"}">${item.status}</span>
            </div>
            <div class="subcopy">${item.meta}</div>
            <p class="subcopy" style="margin-top:12px;">${item.reason}</p>
            ${
              item.primaryAction
                ? `
                  <div class="detail-actions" style="margin-top:14px;">
                    <button class="btn btn-primary" data-action="${item.primaryAction}" data-key="${item.key}">${item.primaryLabel}</button>
                    <button class="btn" data-action="${item.secondaryAction}" data-key="${item.key}">${item.secondaryLabel}</button>
                  </div>
                `
                : ""
            }
          </div>
        `
      )
      .join("");
  } else {
    panelContent = `
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:20px;">Traceability Log</div>
        </div>
        <div class="simple-timeline">
          ${complianceAudit
            .map(
              (item) => `
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-body">
                    <div class="timeline-title-row">
                      <strong>${item.action}</strong>
                      <span class="pill">${item.time}</span>
                    </div>
                    <div class="list-meta">${item.who}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  complianceViewRoot.innerHTML = `
    <div class="tab-row">
      <button class="seg-button ${state.activeComplianceTab === "rules" ? "active" : ""}" data-action="compliance-tab" data-key="rules">Rules</button>
      <button class="seg-button ${state.activeComplianceTab === "exceptions" ? "active" : ""}" data-action="compliance-tab" data-key="exceptions">Exceptions</button>
      <button class="seg-button ${state.activeComplianceTab === "audit" ? "active" : ""}" data-action="compliance-tab" data-key="audit">Audit Log</button>
    </div>
    ${panelContent}
  `;
}

function renderAdminView() {
  const adminCardsView = [
    { title: "Workspace Health", value: "Nominal", meta: "All demo modules online" },
    { title: "Connected User", value: "Marina Keskin", meta: "Ops Manager / Admin access" },
    { title: "Latest Audit Event", value: activityFeed[0]?.title || "No events", meta: activityFeed[0]?.meta || "No recent activity" },
    { title: "Notification Mode", value: "Critical only", meta: `${alertsData.length} alerts in active watch` },
  ];

  adminViewRoot.innerHTML = `
    <div class="kpi-grid">
      ${adminCardsView
        .map(
          (card) => `
            <div class="kpi-card">
              <span class="kpi-label">${card.title}</span>
              <div class="kpi-value">${card.value}</div>
              <div class="kpi-meta">${card.meta}</div>
            </div>
          `
        )
        .join("")}
    </div>

    <div class="split-grid">
      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Workspace Controls</div>
        </div>
        <div class="list-stack">
          <div class="list-item"><div><div class="list-title">Notification routing</div><div class="list-meta">Critical only</div></div><button class="btn" data-action="admin-notifications">Manage</button></div>
          <div class="list-item"><div><div class="list-title">User access</div><div class="list-meta">8 pilot users</div></div><button class="btn" data-action="admin-access">Review</button></div>
          <div class="list-item"><div><div class="list-title">Export policy</div><div class="list-meta">PDF and CSV enabled</div></div><button class="btn" data-action="admin-exports">Review</button></div>
        </div>
      </div>

      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:18px;">Audit Trail</div>
        </div>
        <div class="list-stack">
          ${activityFeed
            .slice(0, 5)
            .map(
              (item) => `
                <div class="list-item">
                  <div>
                    <div class="list-title">${item.time}</div>
                    <div class="list-meta">${item.title} · ${item.meta}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderDynamicViews() {
  renderPlanningView();
  renderMatchingView();
  renderCrewProfileView();
  renderVesselDetailView();
  renderAlertsView();
  renderComplianceView();
  renderAdminView();
}

function setView(name) {
  if (!viewMeta[name]) return;

  state.activeView = name;

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `view-${name}`);
  });

  const meta = viewMeta[name];
  const navTarget = meta.navParent || name;
  document.querySelectorAll(".navitem").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === navTarget);
  });

  topbarTitle.textContent = meta.title;
  topbarSearch.placeholder = meta.search;
  renderStatusRow(statusLeft, meta.footerLeft);
  renderStatusRow(statusRight, meta.footerRight);

  const profile = copilotProfiles[name];
  copilotContextLabel.textContent = profile.label;
  copilotContextTitle.textContent = profile.title;
  copilotContextCopy.textContent = profile.copy;
  renderCopilotPrompts(profile.prompts);
  renderThreads();

  const copilotInput = document.getElementById("copilot-chat-input");
  if (copilotInput) {
    copilotInput.placeholder = `Ask Ready AI about ${meta.title.toLowerCase()}...`;
  }

  const url = new URL(window.location.href);
  url.searchParams.set("view", name);
  history.replaceState({}, "", url);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function executeSearch(rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    showToast("Type a crew name, vessel, mission or topic to search.");
    return;
  }

  const profileMatch = searchableProfileKeys.map((key) => [key, profileData[key]]).find(([, profile]) => {
    const haystack = `${profile.name} ${profile.rank} ${profile.currentVessel || ""}`.toLowerCase();
    return query.split(" ").every((term) => haystack.includes(term)) || haystack.includes(query);
  });

  if (profileMatch) {
    state.activeProfile = profileMatch[0];
    state.activeProfileTab = "overview";
    renderCrewProfileView();
    setView("crew-profile");
    return;
  }

  const vesselMatch = searchableVesselKeys.map((key) => [key, vesselData[key]]).find(([, vessel]) => {
    const haystack = `${vessel.name} ${vessel.port} ${vessel.flag}`.toLowerCase();
    return haystack.includes(query);
  });

  if (vesselMatch) {
    state.activeVessel = vesselMatch[0];
    if (matchingMissions[vesselMatch[0]] && (query.includes("mission") || query.includes("crew change"))) {
      state.activeMission = vesselMatch[0];
      state.activeRotation = vesselMatch[0] === "stuttgart" ? "stuttgart-second" : "bremen-chief";
      renderMatchingView();
      setView("matching");
      return;
    }

    renderVesselDetailView();
    setView("vessel-detail");
    return;
  }

  if (query.includes("alert") || query.includes("expired") || query.includes("risk")) {
    setView("alerts");
    return;
  }

  if (query.includes("rule") || query.includes("compliance")) {
    setView("compliance");
    return;
  }

  if (query.includes("plan") || query.includes("window")) {
    setView("planning");
    return;
  }

  if (query.includes("report") || query.includes("brief")) {
    setView("reports");
    return;
  }

  if (query.includes("ai") || query.includes("copilot")) {
    setView("ready-ai");
    return;
  }

  showToast(`No exact match for "${rawQuery}" in the pilot dataset yet.`);
}

function handleAction(action, key) {
  switch (action) {
    case "help-center":
      showToast("Help center opened. Ask Ready AI or review Alerts for operational issues.");
      recordActivity("Help center opened", "Topbar support entry");
      renderAdminView();
      return;
    case "voice-input":
      showToast("Voice capture is queued for the next Ready AI release. Use chat input for this pilot.");
      recordActivity("Voice input attempted", "Ready AI workspace");
      renderAdminView();
      return;
    case "ready-ai-settings":
      showToast("Ready AI options opened: source visibility, tone and prompt presets.");
      recordActivity("Ready AI settings reviewed", "Operational copilot");
      renderAdminView();
      return;
    case "filter-crew-changes":
    case "filter-crew":
    case "filter-fleet":
    case "filter-routes":
    case "filter-reports":
    case "filter-planning":
      showToast("Filter panel opened for this module.");
      return;
    case "export-crew-changes":
      showToast("Exporting Crew Rotation Manifest.csv...");
      return;
    case "export-crew":
      showToast("Exporting Crew Readiness Manifest.csv...");
      return;
    case "export-documents":
      showToast("Exporting Document Readiness Manifest.csv...");
      return;
    case "export-fleet":
      showToast("Exporting Fleet Readiness Matrix.csv...");
      return;
    case "export-routes":
      showToast("Exporting Route & Port Manifest.csv...");
      return;
    case "export-planning":
      showToast("Exporting 30-Day Crew Change Plan.pdf...");
      return;
    case "show-future-mission":
      state.activeVessel = vesselData[key] ? key : state.activeVessel;
      renderVesselDetailView();
      setView("vessel-detail");
      showToast("This mission remains queued in planning and has not been opened in matching yet.");
      recordActivity("Queued mission reviewed", matchingMissions[key]?.missionId || key);
      renderAdminView();
      return;
    case "clear-rotation":
      showToast("Rotation cleared from today's active queue.");
      return;
    case "open-matching":
      state.activeMission = key || "bremen";
      state.activeRotation = key === "stuttgart" ? "stuttgart-second" : "bremen-chief";
      renderMatchingView();
      setView("matching");
      return;
    case "switch-mission":
      state.activeMission = key;
      state.activeRotation = key === "stuttgart" ? "stuttgart-second" : "bremen-chief";
      renderMatchingView();
      return;
    case "select-rotation":
      state.activeRotation = key;
      renderMatchingView();
      return;
    case "toggle-note": {
      const note = document.getElementById(`note-${key}`);
      if (note) note.classList.toggle("show");
      return;
    }
    case "select-candidate": {
      const candidate = updateMissionSelection(state.activeMission, key);
      if (candidate) {
        renderPlanningView();
        renderMatchingView();
        renderAdminView();
        showToast(`${candidate.name} assigned to ${matchingMissions[state.activeMission].missionId} — Ready Check triggered.`);
      }
      return;
    }
    case "request-docs":
      showToast("Missing documents requested from candidate.");
      recordActivity("Candidate documents requested", `${key} · Crew Matching`);
      renderAdminView();
      return;
    case "request-promotion":
      showToast("Promotion approval request sent to Technical Manager.");
      recordActivity("Promotion approval requested", `${key} · Technical review`);
      renderAdminView();
      return;
    case "run-ready-check": {
      const profile = profileData[key];
      if (profile) {
        showToast(`Ready Check re-run for ${profile.name}.`);
        recordActivity("Ready Check re-run", profile.name);
        renderAdminView();
      }
      return;
    }
    case "upload-document": {
      const profile = profileData[key];
      if (profile) {
        showToast(`Upload drawer opened for ${profile.name}.`);
        recordActivity("Document upload initiated", profile.name);
        renderAdminView();
      }
      return;
    }
    case "generate-compliance-report": {
      const profile = profileData[key];
      if (profile) {
        showToast(`Generating compliance report for ${profile.name}...`);
        recordActivity("Compliance report generated", profile.name);
        renderAdminView();
      }
      return;
    }
    case "open-crew-profile":
      if (profileData[key]) {
        state.activeProfile = key;
        state.activeProfileTab = "overview";
        renderCrewProfileView();
        setView("crew-profile");
      }
      return;
    case "profile-tab":
      state.activeProfileTab = key;
      renderCrewProfileView();
      return;
    case "compliance-tab":
      state.activeComplianceTab = key;
      renderComplianceView();
      return;
    case "open-vessel-detail":
      if (vesselData[key]) {
        state.activeVessel = key;
        renderVesselDetailView();
        setView("vessel-detail");
      }
      return;
    case "view-document":
      showToast(`Opening ${documentNames[key] || key}...`);
      recordActivity("Document opened", documentNames[key] || key);
      renderAdminView();
      return;
    case "renew-document":
      showToast(`Renewal task created for ${documentNames[key] || key}.`);
      recordActivity("Renewal task created", documentNames[key] || key);
      renderAdminView();
      return;
    case "request-document":
      showToast(`Document request sent for ${documentNames[key] || key}.`);
      recordActivity("Document request sent", documentNames[key] || key);
      renderAdminView();
      return;
    case "review-document":
      showToast(`Review task opened for ${documentNames[key] || key}.`);
      recordActivity("Document review opened", documentNames[key] || key);
      renderAdminView();
      return;
    case "open-document-case":
      setView("documents");
      showToast("Opened linked document blocker in Documents.");
      recordActivity("Document blocker opened", key);
      renderAdminView();
      return;
    case "bulk-validate":
      showToast("Bulk validation started for 16 pending records.");
      recordActivity("Bulk validation started", "16 pending records");
      renderAdminView();
      return;
    case "show-roster-scope":
      showToast("Crew roster expanded to include the original operational sample set.");
      return;
    case "show-document-scope":
      showToast("Documents view shows the operational sample set from the original MVP.");
      return;
    case "finalize-assignment": {
      const mission = finalizeMission(key);
      if (mission) {
        resolveAlert(`${key}-candidate`, `Alert resolved for ${mission.missionId}`, "Candidate gap closed");
        renderPlanningView();
        renderMatchingView();
        renderAlertsView();
        renderAdminView();
        showToast(`${mission.missionId} finalized and operational handover pack queued.`);
      }
      return;
    }
    case "download-assignment-pack": {
      const mission = matchingMissions[key];
      if (mission) {
        showToast(`Downloading ${mission.missionId} assignment pack...`);
        recordActivity("Assignment pack downloaded", mission.missionId);
        renderAdminView();
      }
      return;
    }
    case "renew-alert":
      if (resolveAlert(key, "Renewal task created from Alerts", key)) {
        renderAlertsView();
        renderAdminView();
      }
      showToast("Renewal task created from Alerts.");
      return;
    case "schedule-alert":
      if (resolveAlert(key, "Medical exam scheduled from Alerts", key)) {
        renderAlertsView();
        renderAdminView();
      }
      showToast("Medical exam scheduled from Alerts.");
      return;
    case "find-alert":
      state.activeMission = "stuttgart";
      state.activeRotation = "stuttgart-second";
      renderMatchingView();
      setView("matching");
      return;
    case "toggle-rule":
      state.rules[key] = !state.rules[key];
      renderComplianceView();
      recordActivity("Compliance rule state updated", `${key} · ${state.rules[key] ? "Enabled" : "Disabled"}`);
      complianceAudit.unshift({
        time: "20 Jul · 14:20",
        action: `Rule ${state.rules[key] ? "enabled" : "disabled"} — ${key}`,
        who: "Marina Keskin · Administration",
      });
      renderAdminView();
      showToast(state.rules[key] ? "Rule enabled." : "Rule disabled.");
      return;
    case "approve-exception":
      if (updateComplianceException("nihat-medical", "Approved", "ready", "Approved by: Marina Keskin · 20 Jul 2026")) {
        complianceAudit.unshift({
          time: "20 Jul · 14:20",
          action: "Medical validity exception approved",
          who: "Nihat Kahveci · Marina Keskin",
        });
        recordActivity("Compliance exception approved", "Nihat Kahveci");
        renderComplianceView();
        renderAdminView();
      }
      showToast("Exception approved — Ready Check re-run for Nihat Kahveci.");
      return;
    case "decline-exception":
      if (updateComplianceException("nihat-medical", "Declined", "blocked", "Declined by: Marina Keskin · 20 Jul 2026")) {
        complianceAudit.unshift({
          time: "20 Jul · 14:20",
          action: "Medical validity exception declined",
          who: "Nihat Kahveci · Marina Keskin",
        });
        recordActivity("Compliance exception declined", "Nihat Kahveci");
        renderComplianceView();
        renderAdminView();
      }
      showToast("Exception declined — backup candidate remains under watch.");
      return;
    case "new-rule":
      showToast("Rule builder opened.");
      recordActivity("Rule builder opened", "Compliance");
      renderAdminView();
      return;
    case "new-report":
      showToast("Report builder opened.");
      recordActivity("Report builder opened", "Reports");
      renderAdminView();
      return;
    case "open-report":
      showToast(`Opening ${reportFiles[key] || "selected report"}...`);
      recordActivity("Report opened", reportFiles[key] || "selected report");
      renderAdminView();
      return;
    case "generate-report":
      showToast(`Generating ${reportFiles[key] || "selected report"}...`);
      recordActivity("Report generated", reportFiles[key] || "selected report");
      renderAdminView();
      return;
    case "export-brief":
      showToast(`Exporting ${reportFiles[key] || "brief"}...`);
      recordActivity("Brief exported", reportFiles[key] || "brief");
      renderAdminView();
      return;
    case "admin-notifications":
      showToast("Notification routing panel opened.");
      recordActivity("Notification routing reviewed", "Administration");
      renderAdminView();
      return;
    case "admin-access":
      showToast("User access review opened.");
      recordActivity("User access reviewed", "Administration");
      renderAdminView();
      return;
    case "admin-exports":
      showToast("Export policy review opened.");
      recordActivity("Export policy reviewed", "Administration");
      renderAdminView();
      return;
    default:
      return;
  }
}

document.querySelectorAll(".navitem").forEach((item) => {
  item.addEventListener("click", () => setView(item.dataset.view));
});

document.addEventListener("click", (event) => {
  const actionTrigger = event.target.closest("[data-action]");
  if (actionTrigger) {
    handleAction(actionTrigger.dataset.action, actionTrigger.dataset.key);
    return;
  }

  const navTrigger = event.target.closest("[data-nav]");
  if (navTrigger) {
    setView(navTrigger.dataset.nav);
    return;
  }

  const toastTrigger = event.target.closest("[data-toast]");
  if (toastTrigger) {
    showToast(toastTrigger.dataset.toast);
    return;
  }

  const promptTrigger = event.target.closest("[data-prompt]");
  if (promptTrigger) {
    pushUserQuestion(promptTrigger.dataset.prompt);
    return;
  }

  const sendTrigger = event.target.closest("[data-send]");
  if (sendTrigger) {
    handleSend(sendTrigger.dataset.send);
  }
});

document.querySelectorAll("#copilot-chat-input, #ready-ai-main-input").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend(input.id);
    }
  });
});

topbarSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    executeSearch(topbarSearch.value);
  }
});

topbarSearch.addEventListener("focus", () => {
  topbarSearch.parentElement.style.boxShadow = "0 0 0 2px rgba(14, 165, 233, 0.12)";
});

topbarSearch.addEventListener("blur", () => {
  topbarSearch.parentElement.style.boxShadow = "";
});

renderDynamicViews();
renderThreads();

const initialView = new URLSearchParams(window.location.search).get("view");
setView(initialView && viewMeta[initialView] ? initialView : "command-center");
