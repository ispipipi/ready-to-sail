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
    selectedCandidateKey: "hakan",
    draftSaved: true,
    rotations: [
      {
        key: "bremen-chief",
        title: "Chief Officer Relief",
        current: "Current onboard officer signs off 14 Jul",
        eta: "Gibraltar • 09:30",
        readiness: "99%",
        status: "ready",
        statusLabel: "Confirmed",
        signOff: "Cem Demir",
        signOn: "Hakan Çalhanoğlu",
        detailMode: "matching",
        selectedFilter: "Best Match",
        requirements: [
          "Passport",
          "Valid Medical Certificate",
          "Valid Seaman Book",
          "Chief Officer CoC",
          "Advanced Oil Tanker",
          "Basic Safety Training",
          "Advanced Fire Fighting",
          "Bridge Resource Management",
          "ECDIS",
          "Liberian Endorsement",
          "ILO108 Eligibility",
          "Shell Vetting",
          "Ready Index > 90",
        ],
        filters: ["Best Match", "Highest Ready Index", "Nearest Availability", "Most Experience", "Lowest Operational Risk"],
        comparison: {
          headers: ["Hakan", "Nihat", "Emre"],
          rows: [
            { label: "Passport", cells: [{ value: "✓", tone: "ready" }, { value: "✓", tone: "ready" }, { value: "✓", tone: "ready" }] },
            { label: "Medical", cells: [{ value: "✓", tone: "ready" }, { value: "⚠", tone: "risk" }, { value: "✗", tone: "blocked" }] },
            { label: "Oil Tanker", cells: [{ value: "✓", tone: "ready" }, { value: "✓", tone: "ready" }, { value: "✓", tone: "ready" }] },
            { label: "US Visa", cells: [{ value: "✓", tone: "ready" }, { value: "✓", tone: "ready" }, { value: "⚠", tone: "risk" }] },
            { label: "Schengen", cells: [{ value: "✓", tone: "ready" }, { value: "✓", tone: "ready" }, { value: "✓", tone: "ready" }] },
            { label: "Ready Index", cells: [{ value: "99", tone: "ready" }, { value: "95", tone: "risk" }, { value: "82", tone: "blocked" }] },
          ],
        },
      },
      {
        key: "bremen-second",
        title: "Second Officer Relief",
        current: "Secondary relief already coordinated",
        eta: "Gibraltar • 09:30",
        readiness: "94%",
        status: "ready",
        statusLabel: "Confirmed",
        signOff: "Onur Aydın",
        signOn: "Doğukan Sinik",
        detailMode: "summary",
        expandedDetail: false,
        requirements: [
          "Passport",
          "Valid Medical Certificate",
          "Valid Seaman Book",
          "Second Officer CoC",
          "Bridge Watchkeeping",
          "ECDIS",
          "Shell Vetting",
          "Ready Index > 85",
        ],
        confirmedCandidate: {
          name: "Doğukan Sinik",
          rank: "Second Officer",
          readiness: 94,
          tone: "ready",
          tags: ["Shell Vetting", "Bridge Watch", "Relief Confirmed"],
          note:
            "Matched and confirmed for this relief after clearing Shell requirements, valid travel pack and vessel readiness checks for Gibraltar.",
          checks: ["Passport verified", "Medical valid through Jan 2027", "Seaman Book verified", "Previous tanker service confirmed"],
        },
        callout:
          "Doğukan Sinik was matched and confirmed for this rotation by Crew Matching. Ready Index remains 94% and all Shell vetting requirements are marked complete in the original MVP flow.",
        action: "open-secondary-rotation",
        actionLabel: "Open Full Matching Detail",
      },
    ],
    candidates: [
      {
        key: "hakan",
        profileKey: "hakan",
        name: "Hakan Çalhanoğlu",
        rank: "Chief Officer",
        readiness: 99,
        experienceScore: 18,
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
        profileKey: "nihat",
        name: "Nihat Kahveci",
        rank: "Chief Officer (Alt)",
        readiness: 95,
        experienceScore: 15,
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
        profileKey: "emre",
        name: "Emre Belözoğlu",
        rank: "Second Officer",
        readiness: 82,
        experienceScore: 12,
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
    draftSaved: false,
    rotations: [
      {
        key: "stuttgart-second",
        title: "Second Engineer Relief",
        current: "Current engineer signs off 22 Jul",
        eta: "Rotterdam • 18:00",
        readiness: "70%",
        status: "risk",
        statusLabel: "Pending action",
        signOff: "İlkay Gündoğan",
        signOn: "No candidate confirmed",
        detailMode: "matching",
        selectedFilter: "Best Match",
        requirements: [
          "Passport",
          "Valid Medical Certificate",
          "Valid Seaman Book",
          "Second Engineer CoC",
          "Basic Oil Tanker",
          "Basic Safety Training",
          "Advanced Fire Fighting",
          "Marshall Islands Endorsement",
          "Schengen Eligibility",
          "Ready Index > 90",
        ],
        filters: ["Best Match", "Highest Ready Index", "Nearest Availability", "Lowest Operational Risk"],
        callout:
          "No candidate currently exceeds the Ready Index 90 threshold with full certainty. This remains the kind of borderline case that should stay connected to Compliance exceptions until assignment is closed.",
      },
      {
        key: "stuttgart-deck",
        title: "Second Officer Relief",
        current: "Companion rotation already coordinated",
        eta: "Rotterdam • 18:00",
        readiness: "89%",
        status: "ready",
        statusLabel: "Confirmed",
        signOff: "Caner Erkin",
        signOn: "Salih Uçan",
        detailMode: "summary",
        expandedDetail: false,
        requirements: [
          "Passport",
          "Valid Medical Certificate",
          "Valid Seaman Book",
          "Second Officer CoC",
          "BP Vetting",
          "Schengen Eligibility",
          "Ready Index > 85",
        ],
        confirmedCandidate: {
          name: "Salih Uçan",
          rank: "Second Officer",
          readiness: 89,
          tone: "risk",
          tags: ["BP Vetting", "Medical Renewal", "Relief Confirmed"],
          note:
            "Companion rotation remains confirmed. Medical renewal is already scheduled before join date and the Rotterdam travel pack is reserved.",
          checks: ["Passport verified", "Medical renewal booked", "Seaman Book verified", "Travel itinerary reserved"],
        },
        callout:
          "Salih Uçan was matched and confirmed for this companion rotation. Ready Index remains 89% and the scheduled medical renewal is already tracked before the join date.",
        action: "open-secondary-rotation",
        actionLabel: "Open Full Matching Detail",
      },
    ],
    candidates: [
      {
        key: "ferdi",
        profileKey: "ferdi",
        name: "Ferdi Kadıoğlu",
        rank: "Third Engineer",
        readiness: 91,
        experienceScore: 11,
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
        profileKey: "ozan",
        name: "Ozan Kabak",
        rank: "Second Engineer",
        readiness: 84,
        experienceScore: 8,
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
  "visa-ferdi": "USVisa_FerdiKadıoğlu.pdf",
  "flag-endorsement-nihat": "FlagEndorsement_NihatKahveci.pdf",
  "flag-endorsement-elena": "FlagEndorsement_ElenaRossi.pdf",
};

const documentCatalog = {
  "passport-hc": {
    title: "Medical Certificate",
    owner: "Hakan Çalhanoğlu",
    vessel: "MT Scot Bremen",
    type: "Medical",
    expiry: "12 Aug 2026",
    summary: "Validated medical record tied to the preferred Chief Officer assignment for MT Scot Bremen.",
  },
  "medical-cenk": {
    title: "STCW Advanced Fire Fighting",
    owner: "Cenk Tosun",
    vessel: "MT Scot Hamburg",
    type: "Certification",
    expiry: "02 Aug 2026",
    summary: "Near-term renewal item that should stay under watch because the current date is Tuesday, July 21, 2026 and the certificate horizon is already tight.",
  },
  "seamanbook-emre": {
    title: "Seaman Book",
    owner: "Emre Belözoğlu",
    vessel: "MT Scot Bayern",
    type: "Identity",
    expiry: "Renew now",
    summary: "Missing document pack blocking clean readiness progression for the MT Scot Bayern pathway.",
  },
  "visa-ferdi": {
    title: "USA C1/D Visa",
    owner: "Ferdi Kadıoğlu",
    vessel: "MT Scot Stuttgart",
    type: "Visa",
    expiry: "Pending approval",
    summary: "Travel readiness item linked to the still-sensitive MT Scot Stuttgart decision path.",
  },
  "flag-endorsement-nihat": {
    title: "Flag State Endorsement",
    owner: "Nihat Kahveci",
    vessel: "MT Scot Bremen",
    type: "Endorsement",
    expiry: "31 Aug 2026",
    summary: "Backup candidate endorsement under review for the MT Scot Bremen coverage plan.",
  },
};

const documentFocusAlias = {
  "flag-endorsement-elena": "flag-endorsement-nihat",
  "emre-passport": "seamanbook-emre",
  "cenk-medical": "medical-cenk",
};

const documentOpsState = {
  kpis: {
    verified: 418,
    verifiedMeta: "+12",
    expiring: 24,
    expiringMeta: "+5",
    missing: 9,
    missingMeta: "+2",
    pending: 16,
    pendingMeta: "Requires action",
  },
  rows: {
    "passport-hc": {
      verification: { label: "Verified", tone: "ready" },
      risk: { label: "Low", tone: "ready" },
      status: { label: "Ready", tone: "ready" },
      action: { label: "View", action: "view-document", key: "passport-hc" },
    },
    "medical-cenk": {
      verification: { label: "Verified", tone: "ready" },
      risk: { label: "Medium", tone: "risk" },
      status: { label: "Expiring", tone: "risk" },
      action: { label: "Renew", action: "renew-document", key: "medical-cenk" },
    },
    "seamanbook-emre": {
      verification: { label: "Not verified", tone: "blocked" },
      risk: { label: "High", tone: "blocked" },
      status: { label: "Blocked", tone: "blocked" },
      action: { label: "Request", action: "request-document", key: "seamanbook-emre" },
    },
    "visa-ferdi": {
      verification: { label: "In progress", tone: "live" },
      risk: { label: "Medium", tone: "live" },
      status: { label: "Pending", tone: "live" },
      action: { label: "Resolve", action: "open-matching", key: "stuttgart" },
    },
    "flag-endorsement-nihat": {
      verification: { label: "Verified", tone: "ready" },
      risk: { label: "Medium", tone: "risk" },
      status: { label: "At Risk", tone: "risk" },
      action: { label: "Review", action: "review-document", key: "flag-endorsement-elena" },
    },
  },
};

const reportFiles = {
  "weekly-readiness": "Weekly Readiness Report.pdf",
  "compliance-exceptions": "Compliance Exceptions Report.pdf",
  "expiring-docs": "Expiring Documents Report.pdf",
  "crew-change-risk": "Crew Change Risk Report.pdf",
  "vessel-readiness-matrix": "Vessel Readiness Matrix.html",
  "daily-brief": "Daily Brief.pdf",
  "weekly-summary": "Weekly Summary.pdf",
  "compliance-pack": "Compliance Exceptions Pack.pdf",
  "crew-plan": "Crew Planning Board.pdf",
  "doc-forecast": "Document Forecast.pdf",
};

const reportCatalog = {
  "weekly-readiness": {
    title: "Weekly Readiness Report",
    summary: "Fleet, crew and documents summary for executive review.",
  },
  "compliance-exceptions": {
    title: "Compliance Exceptions Report",
    summary: "Current exception queue across medical, STCW and promotion workflows.",
  },
  "crew-change-risk": {
    title: "Crew Change Risk Report",
    summary: "Risk concentration across active crew changes and matching gaps.",
  },
  "vessel-readiness-matrix": {
    title: "Vessel Readiness Matrix",
    summary: "Vessel-by-vessel operational posture drawn from current fleet state.",
  },
  "expiring-docs": {
    title: "Expiring Documents Report",
    summary: "Documents with the strongest near-term operational impact.",
  },
  "daily-brief": {
    title: "Daily Brief",
    summary: "Short operational briefing for the current readiness posture.",
  },
  "weekly-summary": {
    title: "Weekly Summary",
    summary: "Weekly movement across readiness, blockers and exceptions.",
  },
  "compliance-pack": {
    title: "Compliance Exceptions Pack",
    summary: "Packaged exception review set for leadership review.",
  },
  "crew-plan": {
    title: "Crew Planning Board",
    summary: "Operational 30-day planning view prepared as a handoff artifact.",
  },
  "doc-forecast": {
    title: "Document Forecast",
    summary: "Forward-looking pressure points across expiring and missing records.",
  },
};

const reportOpsState = {
  generatedCount: 24,
  generatedMeta: "MTD",
  filter: "all",
  rows: {
    "weekly-readiness": {
      status: { label: "Ready", tone: "ready" },
      lastRun: "Today 09:12",
      action: { label: "Open", type: "open-report", key: "weekly-readiness" },
    },
    "compliance-exceptions": {
      status: { label: "Requires Review", tone: "blocked" },
      lastRun: "Today 08:40",
      action: { label: "Review", type: "nav", key: "documents" },
    },
    "crew-change-risk": {
      status: { label: "At Risk", tone: "risk" },
      lastRun: "Yesterday 18:00",
      action: { label: "Generate", type: "generate-report", key: "crew-change-risk" },
    },
    "vessel-readiness-matrix": {
      status: { label: "Ready", tone: "live" },
      lastRun: "Live stream",
      action: { label: "View", type: "open-vessel-detail", key: "bremen" },
    },
    "expiring-docs": {
      status: { label: "Warning", tone: "risk" },
      lastRun: "Today 07:30",
      action: { label: "Open", type: "open-report", key: "expiring-docs" },
    },
  },
};

const adminOpsState = {
  notificationMode: "Critical only",
  userAccess: "8 pilot users",
  exportPolicy: "PDF and CSV enabled",
  readyAiMode: "Standard",
};

function setDocumentRowState(key, updates) {
  if (!documentOpsState.rows[key]) return;
  documentOpsState.rows[key] = {
    ...documentOpsState.rows[key],
    ...updates,
  };
}

function normalizeDocumentFocusKey(key) {
  return documentFocusAlias[key] || key;
}

function setDocumentFocus(key, mode = "open") {
  state.activeDocumentFocus = key ? normalizeDocumentFocusKey(key) : null;
  state.activeDocumentMode = mode;
}

function setReportFocus(key, mode = "open") {
  state.activeReportFocus = key || null;
  state.activeReportMode = mode;
}

function setAdminFocus(key = null) {
  state.activeAdminFocus = key;
}

function createArtifactUrl(content, mime = "text/plain") {
  const blob = new Blob([content], { type: mime });
  return URL.createObjectURL(blob);
}

function triggerArtifactDownload(filename, content, mime = "text/plain") {
  const url = createArtifactUrl(content, mime);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}

function openArtifactPreview(content, mime = "text/html", title = "Preview") {
  const url = createArtifactUrl(content, mime);
  const preview = window.open(url, "_blank", "noopener");
  if (!preview) {
    showToast(`${title} preview blocked by the browser.`);
  }
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}

function buildDocumentPreview(key) {
  const normalizedKey = normalizeDocumentFocusKey(key);
  const item = documentCatalog[normalizedKey];
  const row = documentOpsState.rows[normalizedKey];
  if (!item || !row) return null;

  return {
    filename: `${item.title.replace(/[^a-z0-9]+/gi, "_")}.html`,
    mime: "text/html;charset=utf-8",
    title: item.title,
    content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${item.title}</title>
    <style>
      body{font-family:Arial,sans-serif;background:#f4f7fb;color:#0f172a;margin:0;padding:40px}
      .sheet{max-width:820px;margin:0 auto;background:#fff;border:1px solid #dbe3ec;border-radius:18px;padding:32px;box-shadow:0 20px 45px rgba(15,23,42,.08)}
      h1{margin:0 0 6px;font-size:28px;color:#002b5b}
      p{line-height:1.6}
      .meta{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:24px 0}
      .meta div{padding:14px 16px;background:#f8fbff;border-radius:14px;border:1px solid #dbe3ec}
      .eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;margin-bottom:6px}
      .status{display:inline-block;padding:6px 10px;border-radius:999px;background:#e6f2ff;color:#005f8f;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
    </style>
  </head>
  <body>
    <div class="sheet">
      <div class="eyebrow">Ready to Sail document preview</div>
      <h1>${item.title}</h1>
      <p>${item.summary}</p>
      <div class="meta">
        <div><div class="eyebrow">Owner</div><strong>${item.owner}</strong></div>
        <div><div class="eyebrow">Vessel</div><strong>${item.vessel}</strong></div>
        <div><div class="eyebrow">Type</div><strong>${item.type}</strong></div>
        <div><div class="eyebrow">Expiry</div><strong>${item.expiry}</strong></div>
        <div><div class="eyebrow">Verification</div><span class="status">${row.verification.label}</span></div>
        <div><div class="eyebrow">Operational status</div><span class="status">${row.status.label}</span></div>
      </div>
      <p>This generated preview is part of the local functional demo and reflects the current frontend state as of Tuesday, July 21, 2026.</p>
    </div>
  </body>
</html>`,
  };
}

function buildReportPreview(key) {
  const item = reportCatalog[key];
  const row = reportOpsState.rows[key];
  if (!item) return null;

  const highlights = [
    `Ready personnel: ${systemDataNotes.readyCount}`,
    `At risk personnel: ${systemDataNotes.atRiskCount}`,
    `Blocked personnel: ${systemDataNotes.blockedCount}`,
    `Open alerts: ${alertsData.length}`,
  ];

  return {
    filename: `${item.title.replace(/[^a-z0-9]+/gi, "_")}.html`,
    mime: "text/html;charset=utf-8",
    title: item.title,
    content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${item.title}</title>
    <style>
      body{font-family:Arial,sans-serif;background:#f4f7fb;color:#0f172a;margin:0;padding:40px}
      .sheet{max-width:860px;margin:0 auto;background:#fff;border:1px solid #dbe3ec;border-radius:18px;padding:32px;box-shadow:0 20px 45px rgba(15,23,42,.08)}
      h1{margin:0 0 6px;font-size:28px;color:#002b5b}
      p{line-height:1.6}
      ul{padding-left:20px}
      .eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;margin-bottom:6px}
      .status{display:inline-block;padding:6px 10px;border-radius:999px;background:#e6f2ff;color:#005f8f;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
    </style>
  </head>
  <body>
    <div class="sheet">
      <div class="eyebrow">Ready to Sail report preview</div>
      <h1>${item.title}</h1>
      <p>${item.summary}</p>
      <p><span class="status">${row?.status.label || "Ready"}</span> ${row?.lastRun ? `Last run: ${row.lastRun}` : ""}</p>
      <ul>
        ${highlights.map((entry) => `<li>${entry}</li>`).join("")}
      </ul>
      <p>This generated preview reflects the current operational demo state on Tuesday, July 21, 2026.</p>
    </div>
  </body>
</html>`,
  };
}

function buildCsvArtifact(filename, headers, rows) {
  const escape = (value) => `"${String(value).replaceAll('"', '""')}"`;
  const content = [headers.map(escape).join(","), ...rows.map((row) => row.map(escape).join(","))].join("\n");
  return { filename, mime: "text/csv;charset=utf-8", content };
}

function buildModuleExportArtifact(key) {
  if (key === "crew-changes") {
    return buildCsvArtifact(
      "Crew_Rotation_Manifest.csv",
      ["Mission", "Vessel", "Role", "Port", "Embarkation", "Status"],
      planningMissions.map((mission) => [mission.missionId, mission.vessel, mission.role, mission.port, mission.join, mission.status])
    );
  }
  if (key === "crew") {
    return buildCsvArtifact(
      "Crew_Readiness_Manifest.csv",
      ["Name", "Rank", "Availability", "Mission", "Readiness"],
      searchableProfileKeys.map((profileKey) => {
        const profile = profileData[profileKey];
        return [profile.name, profile.rank, profile.availability, profile.mission, `${profile.readiness}%`];
      })
    );
  }
  if (key === "documents") {
    return buildCsvArtifact(
      "Document_Readiness_Manifest.csv",
      ["Document", "Owner", "Vessel", "Verification", "Risk", "Status"],
      Object.entries(documentCatalog).map(([docKey, item]) => {
        const row = documentOpsState.rows[docKey];
        return [item.title, item.owner, item.vessel, row.verification.label, row.risk.label, row.status.label];
      })
    );
  }
  if (key === "fleet") {
    return buildCsvArtifact(
      "Fleet_Readiness_Matrix.csv",
      ["Vessel", "Port", "Crew", "Compliance", "Readiness", "Status"],
      searchableVesselKeys.map((vesselKey) => {
        const snapshot = getVesselSnapshot(vesselKey);
        return [snapshot.name, snapshot.port, snapshot.crewLabel, snapshot.complianceLabel, `${snapshot.readiness}%`, snapshot.statusLabel];
      })
    );
  }
  if (key === "routes") {
    return buildCsvArtifact(
      "Route_Port_Manifest.csv",
      ["Vessel", "Port", "ETA", "Crew State", "Risk", "Status"],
      ["bremen", "stuttgart", "frankfurt", "dresden"].map((vesselKey) => {
        const snapshot = getVesselSnapshot(vesselKey);
        return [snapshot.name, snapshot.port, snapshot.eta, snapshot.crewLabel, snapshot.routeRisk, snapshot.statusLabel];
      })
    );
  }
  if (key === "planning") {
    return {
      filename: "Crew_Change_Plan_30_Days.html",
      mime: "text/html;charset=utf-8",
      content: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>30-Day Crew Change Plan</title></head><body><h1>30-Day Crew Change Plan</h1><ul>${planningMissions
        .map((mission) => `<li>${mission.missionId} · ${mission.vessel} · ${mission.join} · ${mission.status}</li>`)
        .join("")}</ul></body></html>`,
    };
  }
  return null;
}

function buildBriefExportArtifact(key) {
  const preview = buildReportPreview(key);
  if (!preview) return null;
  return {
    filename: preview.filename,
    mime: preview.mime,
    content: preview.content,
  };
}

function buildAssignmentPackArtifact(key) {
  const mission = matchingMissions[key];
  if (!mission) return null;
  const selected = getActionRotation(mission)?.selectedCandidateKey || mission.selectedCandidateKey;
  const candidate = selected ? findMissionCandidate(mission, selected) : null;
  return {
    filename: `${mission.missionId}_Assignment_Pack.html`,
    mime: "text/html;charset=utf-8",
    content: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${mission.missionId} Assignment Pack</title></head><body><h1>${mission.missionId} Assignment Pack</h1><p>Vessel: ${mission.vessel}</p><p>Role: ${mission.role}</p><p>Embarkation: ${mission.embarkation}</p><p>Candidate: ${candidate?.name || "Pending selection"}</p><p>Generated from the Ready to Sail local demo on Tuesday, July 21, 2026.</p></body></html>`,
  };
}

function buildReportBuilderArtifact() {
  return {
    filename: "Operational_Report_Builder_Template.html",
    mime: "text/html;charset=utf-8",
    content: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Operational Report Builder Template</title></head><body><h1>Operational Report Builder Template</h1><p>Date generated: Tuesday, July 21, 2026.</p><ul><li>Scope</li><li>Operational summary</li><li>Readiness metrics</li><li>Blockers and decisions</li><li>Recommended next actions</li></ul><p>This template is generated from the Ready to Sail MVP frontend.</p></body></html>`,
  };
}

function getDocumentFocusContent() {
  const key = state.activeDocumentFocus;
  if (!key) return null;

  const label = documentNames[key] || key;
  const modeLabel =
    state.activeDocumentMode === "renew"
      ? "Renewal workflow opened"
      : state.activeDocumentMode === "request"
        ? "Document request opened"
        : state.activeDocumentMode === "review"
          ? "Review queue opened"
          : state.activeDocumentMode === "bulk-validate"
            ? "Bulk validation running"
            : "Document opened";

  const focusCopy = {
    "passport-hc": "Hakan Çalhanoğlu remains fully covered. This record stays linked to the MT Scot Bremen assignment pack.",
    "medical-cenk": "Cenk Tosun's renewal is now the key timeline item for MT Scot Hamburg and should stay under review until the booked exam is cleared.",
    "seamanbook-emre": "Emre Belözoğlu remains one of the highest-impact document blockers because this file directly affects the MT Scot Bayern readiness path.",
    "visa-ferdi": "Ferdi Kadıoğlu's visa workflow remains tied to the MT Scot Stuttgart decision path and should be reviewed together with candidate readiness.",
    "flag-endorsement-nihat": "Nihat Kahveci's endorsement stays visible because it affects backup coverage for the MT Scot Bremen crew change.",
    "rustu-tanker": "Rüştü Reçber's Advanced Oil Tanker certificate remains a blocked compliance item and still needs direct operational resolution.",
    "bulk-validate": "Bulk validation is running on the pending queue so Operations can reduce manual review overhead before the next embarkation window.",
    "compliance-exceptions": "The exceptions workflow is linked to document-driven blockers and remains the fastest way to understand unresolved readiness exposure.",
  };

  return {
    title: `${modeLabel} · ${label}`,
    copy: focusCopy[key] || "This document context is now active inside the operational sample set.",
  };
}

function getReportFocusContent() {
  const key = state.activeReportFocus;
  if (!key) return null;

  const label =
    key === "builder"
      ? "Operational Report Builder"
      : reportFiles[key] || "Operational report context";

  const modeLabel =
    state.activeReportMode === "generate"
      ? "Report generation queued"
      : state.activeReportMode === "export"
        ? "Export queued"
        : state.activeReportMode === "build"
          ? "Builder session opened"
          : "Report opened";

  const focusCopy = {
    builder: "Use this report space to prepare operational summaries without leaving the MVP flow. Generated outputs continue to update the audit and activity panels.",
    "weekly-readiness": "This report summarizes the current crew, fleet and document posture using the same pilot data visible across the rest of the application.",
    "compliance-exceptions": "This report should stay aligned with exception approvals, document blockers and audit decisions before final operational sign-off.",
    "crew-change-risk": "This report is the fastest way to re-evaluate open crew changes after candidate, document or compliance changes.",
    "expiring-docs": "This report tracks expiring records that can still block assignments even when the crew profile looks otherwise ready.",
    "daily-brief": "The daily brief export packages the current readiness picture into a lightweight operational summary for stakeholders.",
    "weekly-summary": "The weekly summary export captures movement across blockers, readiness counts and exception handling in one bundle.",
    "compliance-pack": "This export groups compliance-sensitive records and exceptions for review outside the live dashboard.",
    "crew-plan": "This export reflects the active planning board and current mission states shown in Crew Changes and Planning.",
    "doc-forecast": "This export highlights upcoming document pressure so Operations can act before assignments move into blocked status.",
  };

  return {
    title: `${modeLabel} · ${label}`,
    copy: focusCopy[key] || "This reporting context is now active inside the operational sample set.",
  };
}

function syncDocumentsView() {
  const kpis = documentOpsState.kpis;
  const kpiMap = {
    verified: "documents-kpi-verified",
    verifiedMeta: "documents-kpi-verified-meta",
    expiring: "documents-kpi-expiring",
    expiringMeta: "documents-kpi-expiring-meta",
    missing: "documents-kpi-missing",
    missingMeta: "documents-kpi-missing-meta",
    pending: "documents-kpi-pending",
    pendingMeta: "documents-kpi-pending-meta",
  };

  Object.entries(kpiMap).forEach(([stateKey, elementId]) => {
    const el = document.getElementById(elementId);
    if (el) el.textContent = kpis[stateKey];
  });

  Object.entries(documentOpsState.rows).forEach(([rowKey, row]) => {
    const verificationEl = document.getElementById(`document-verification-${rowKey}`);
    const riskEl = document.getElementById(`document-risk-${rowKey}`);
    const statusEl = document.getElementById(`document-status-${rowKey}`);
    const actionEl = document.getElementById(`document-action-${rowKey}`);
    const rowEl = document.getElementById(`document-row-${rowKey}`);

    if (verificationEl) {
      verificationEl.className = `badge ${row.verification.tone}`;
      verificationEl.textContent = row.verification.label;
    }
    if (riskEl) {
      riskEl.className = `badge ${row.risk.tone}`;
      riskEl.textContent = row.risk.label;
    }
    if (statusEl) {
      statusEl.className = `badge ${row.status.tone}`;
      statusEl.textContent = row.status.label;
    }
    if (actionEl) {
      actionEl.textContent = row.action.label;
      actionEl.dataset.action = row.action.action;
      actionEl.dataset.key = row.action.key;
    }
    if (rowEl) rowEl.classList.toggle("focus-row", rowKey === state.activeDocumentFocus);
  });

  const bannerEl = document.getElementById("documents-context-banner");
  const titleEl = document.getElementById("documents-context-title");
  const copyEl = document.getElementById("documents-context-copy");
  const bannerContent = getDocumentFocusContent();

  if (bannerEl && titleEl && copyEl) {
    bannerEl.classList.toggle("show", Boolean(bannerContent));
    if (bannerContent) {
      titleEl.textContent = bannerContent.title;
      copyEl.textContent = bannerContent.copy;
    }
  }
}

function syncReportsView() {
  const bremenFinalized = Boolean(matchingMissions.bremen.finalized);
  const stuttgartFinalized = Boolean(matchingMissions.stuttgart.finalized);
  const readyCount = systemDataNotes.readyCount + (bremenFinalized ? 1 : 0) + (stuttgartFinalized ? 1 : 0);
  const activeBlockers = alertsData.length;
  const pendingExceptions = complianceExceptions.filter((item) => /Pending approval/i.test(item.status)).length;
  const fleetReadinessValue = activeBlockers <= 2 ? "90%" : activeBlockers <= 4 ? "88%" : "87%";

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("reports-kpi-fleet", fleetReadinessValue);
  setText("reports-kpi-fleet-meta", activeBlockers <= 2 ? "+4% wk" : activeBlockers <= 4 ? "+3% wk" : "+1% wk");
  setText("reports-kpi-crew", String(readyCount));
  setText("reports-kpi-crew-meta", "Personnel ready to embark");
  setText("reports-kpi-blockers", String(activeBlockers));
  setText("reports-kpi-blockers-meta", activeBlockers ? "High priority" : "No active blockers");
  setText("reports-kpi-generated", String(reportOpsState.generatedCount));
  setText("reports-kpi-generated-meta", reportOpsState.generatedMeta);

  reportOpsState.rows["compliance-exceptions"].status = pendingExceptions
    ? { label: "Requires Review", tone: "blocked" }
    : { label: "Ready", tone: "ready" };

  reportOpsState.rows["crew-change-risk"].status =
    activeBlockers > 2
      ? { label: "At Risk", tone: "risk" }
      : { label: "Ready", tone: "ready" };

  reportOpsState.rows["expiring-docs"].status =
    documentOpsState.kpis.expiring > 20
      ? { label: "Warning", tone: "risk" }
      : { label: "Ready", tone: "ready" };

  const filterMap = {
    all: () => true,
    daily: (key) => ["compliance-exceptions", "crew-change-risk", "expiring-docs"].includes(key),
    weekly: (key) => key === "weekly-readiness",
    attention: (key) => ["blocked", "risk"].includes(reportOpsState.rows[key]?.status.tone),
  };

  Object.entries(reportOpsState.rows).forEach(([key, row]) => {
    const statusEl = document.getElementById(`report-${key}-status`);
    const lastRunEl = document.getElementById(`report-${key}-last-run`);
    const actionEl = document.getElementById(`report-${key}-action`);
    const rowEl = document.getElementById(`report-row-${key}`);

    if (statusEl) {
      statusEl.className = `badge ${row.status.tone}`;
      statusEl.textContent = row.status.label;
    }
    if (lastRunEl) lastRunEl.textContent = row.lastRun;
    if (actionEl) {
      actionEl.textContent = row.action.label;
      if (row.action.type === "nav") {
        actionEl.dataset.nav = row.action.key;
        delete actionEl.dataset.action;
        delete actionEl.dataset.key;
      } else {
        actionEl.dataset.action = row.action.type;
        actionEl.dataset.key = row.action.key;
        delete actionEl.dataset.nav;
      }
    }
    if (rowEl) {
      rowEl.style.display = (filterMap[state.reportsFilter || "all"] || filterMap.all)(key) ? "" : "none";
      rowEl.classList.toggle("focus-row", key === state.activeReportFocus);
    }
  });

  const bannerEl = document.getElementById("reports-context-banner");
  const titleEl = document.getElementById("reports-context-title");
  const copyEl = document.getElementById("reports-context-copy");
  const bannerContent = getReportFocusContent();

  if (bannerEl && titleEl && copyEl) {
    bannerEl.classList.toggle("show", Boolean(bannerContent));
    if (bannerContent) {
      titleEl.textContent = bannerContent.title;
      copyEl.textContent = bannerContent.copy;
    }
  }
}

function getVesselSnapshot(key) {
  const vessel = vesselData[key];
  if (!vessel) return null;

  const cenkRenewalBooked = documentOpsState.rows["medical-cenk"]?.status.label === "Renewal booked";
  const emrePendingOwner = documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner";
  const rustuAlertOpen = alertsData.some((item) => item.key === "rustu-tanker");
  const stuttgartBlocked = alertsData.some((item) => item.key === "stuttgart-candidate");
  const bremenFinalized = Boolean(matchingMissions.bremen.finalized);
  const stuttgartFinalized = Boolean(matchingMissions.stuttgart.finalized);

  const snapshot = {
    ...vessel,
    crewLabel: "Crew Ready",
    complianceLabel: "Compliant",
    readiness: vessel.readiness,
    statusLabel: vessel.status,
    tone: vessel.readiness >= 85 ? "ready" : vessel.readiness >= 75 ? "risk" : "blocked",
    actionLabel: vessel.readiness >= 85 ? "View" : "Review",
    routeRisk: vessel.readiness >= 85 ? "Low" : vessel.readiness >= 75 ? "Medium" : "Critical",
    routeTone: vessel.readiness >= 85 ? "ready" : vessel.readiness >= 75 ? "risk" : "blocked",
    embarkationWindow: vessel.eta,
  };

  if (key === "bremen") {
    snapshot.readiness = bremenFinalized ? 94 : 92;
    snapshot.crewLabel = bremenFinalized ? "Assignment Finalized" : "Crew Ready";
    snapshot.complianceLabel = "Compliance Ready";
    snapshot.statusLabel = "Ready";
    snapshot.tone = "ready";
    snapshot.actionLabel = bremenFinalized ? "Open" : "View";
    snapshot.routeRisk = "Low";
    snapshot.routeTone = "ready";
    snapshot.embarkationWindow = bremenFinalized ? "Past window completed • next planning open" : "03-05 Aug • Rotterdam";
  } else if (key === "stuttgart") {
    snapshot.readiness = stuttgartFinalized ? 91 : stuttgartBlocked ? 70 : 84;
    snapshot.crewLabel = stuttgartFinalized ? "Engineering Covered" : stuttgartBlocked ? "Crew Pending" : "Candidate In Review";
    snapshot.complianceLabel = stuttgartFinalized ? "Compliance Ready" : stuttgartBlocked ? "Candidate gap" : "Promotion / visa review";
    snapshot.statusLabel = stuttgartFinalized ? "Ready" : "At Risk";
    snapshot.tone = stuttgartFinalized ? "ready" : "risk";
    snapshot.actionLabel = stuttgartFinalized ? "Open" : "Review";
    snapshot.routeRisk = stuttgartFinalized ? "Medium" : "High";
    snapshot.routeTone = stuttgartFinalized ? "risk" : "blocked";
    snapshot.embarkationWindow = "22-24 Jul • Rotterdam";
  } else if (key === "hamburg") {
    snapshot.readiness = cenkRenewalBooked ? 91 : 88;
    snapshot.crewLabel = cenkRenewalBooked ? "Medical Scheduled" : "Medical Due";
    snapshot.complianceLabel = cenkRenewalBooked ? "Renewal booked" : "Compliant";
    snapshot.statusLabel = cenkRenewalBooked ? "In Review" : "At Risk";
    snapshot.tone = cenkRenewalBooked ? "ready" : "risk";
    snapshot.actionLabel = cenkRenewalBooked ? "Open" : "Review";
    snapshot.routeRisk = cenkRenewalBooked ? "Low" : "Medium";
    snapshot.routeTone = cenkRenewalBooked ? "ready" : "risk";
    snapshot.embarkationWindow = "03 Sep • Antwerp";
  } else if (key === "bayern") {
    snapshot.readiness = emrePendingOwner ? 86 : 82;
    snapshot.crewLabel = emrePendingOwner ? "Docs In Review" : "Passport Alert";
    snapshot.complianceLabel = emrePendingOwner ? "Owner response pending" : "1 alert";
    snapshot.statusLabel = "At Risk";
    snapshot.tone = "risk";
    snapshot.actionLabel = "Review";
    snapshot.routeRisk = emrePendingOwner ? "Medium" : "High";
    snapshot.routeTone = "risk";
    snapshot.embarkationWindow = "11 Aug • Algeciras";
  } else if (key === "frankfurt") {
    snapshot.readiness = rustuAlertOpen ? 74 : 83;
    snapshot.crewLabel = rustuAlertOpen ? "Master Risk" : "Renewal Open";
    snapshot.complianceLabel = rustuAlertOpen ? "Cert expired" : "Renewal workflow";
    snapshot.statusLabel = rustuAlertOpen ? "Blocked" : "At Risk";
    snapshot.tone = rustuAlertOpen ? "blocked" : "risk";
    snapshot.actionLabel = rustuAlertOpen ? "Intervene" : "Review";
    snapshot.routeRisk = rustuAlertOpen ? "Critical" : "Medium";
    snapshot.routeTone = rustuAlertOpen ? "blocked" : "risk";
    snapshot.embarkationWindow = "19-21 Aug • Fos-sur-Mer";
  }

  return snapshot;
}

function syncFleetView() {
  const snapshots = Object.keys(vesselData).map(getVesselSnapshot).filter(Boolean);
  const readyCount = snapshots.filter((item) => item.tone === "ready").length;
  const riskCount = snapshots.filter((item) => item.tone === "risk").length;
  const blockedCount = snapshots.filter((item) => item.tone === "blocked").length;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("fleet-kpi-total", String(snapshots.length));
  setText("fleet-kpi-total-meta", "Fleet active");
  setText("fleet-kpi-ready", String(readyCount));
  setText("fleet-kpi-ready-meta", readyCount >= 9 ? "Operationally covered" : "Coverage tightening");
  setText("fleet-kpi-risk", String(riskCount));
  setText("fleet-kpi-risk-meta", riskCount ? "Requires review" : "No medium risks");
  setText("fleet-kpi-blocked", String(blockedCount));
  setText("fleet-kpi-blocked-meta", blockedCount ? "Immediate intervention" : "No hard blockers");

  const filterMap = {
    all: () => true,
    ready: (item) => item.tone === "ready",
    risk: (item) => item.tone === "risk",
    blocked: (item) => item.tone === "blocked",
  };

  snapshots.forEach((item) => {
    const rowEl = document.getElementById(`fleet-row-${item.key}`);
    if (rowEl) rowEl.style.display = (filterMap[state.fleetFilter || "all"] || filterMap.all)(item) ? "" : "none";
    setText(`fleet-row-${item.key}-crew`, item.crewLabel);
    setText(`fleet-row-${item.key}-compliance`, item.complianceLabel);
    const scoreEl = document.getElementById(`fleet-row-${item.key}-score`);
    if (scoreEl) {
      scoreEl.textContent = `${item.readiness}%`;
      scoreEl.className = item.tone === "blocked" ? "text-blocked" : item.tone === "risk" ? "text-risk" : "text-ready";
    }
    const statusEl = document.getElementById(`fleet-row-${item.key}-status`);
    if (statusEl) {
      statusEl.className = `badge ${item.tone}`;
      statusEl.textContent = item.statusLabel;
    }
    const actionEl = document.getElementById(`fleet-row-${item.key}-action`);
    if (actionEl) actionEl.textContent = item.actionLabel;
  });

  const tankerAverage = Math.round(snapshots.reduce((sum, item) => sum + item.readiness, 0) / snapshots.length);
  setText("fleet-type-tankers-label", `${tankerAverage}%`);
  const tankerBar = document.getElementById("fleet-type-tankers-bar");
  if (tankerBar) tankerBar.style.width = `${tankerAverage}%`;

  const lpgValue = blockedCount ? 68 : 74;
  const containerValue = readyCount >= 9 ? 89 : 84;
  const offshoreValue = blockedCount ? 52 : 48;
  setText("fleet-type-lpg-label", `${lpgValue}%`);
  setText("fleet-type-container-label", `${containerValue}%`);
  setText("fleet-type-offshore-label", `${offshoreValue}%`);
  const lpgBar = document.getElementById("fleet-type-lpg-bar");
  const containerBar = document.getElementById("fleet-type-container-bar");
  const offshoreBar = document.getElementById("fleet-type-offshore-bar");
  if (lpgBar) lpgBar.style.width = `${lpgValue}%`;
  if (containerBar) containerBar.style.width = `${containerValue}%`;
  if (offshoreBar) offshoreBar.style.width = `${offshoreValue}%`;

  const readyPct = Math.round((readyCount / snapshots.length) * 100);
  const riskPct = Math.round((riskCount / snapshots.length) * 100);
  const blockedPct = Math.max(100 - readyPct - riskPct, 0);
  setText("fleet-distribution-ready-label", `${readyPct}%`);
  setText("fleet-distribution-risk-label", `${riskPct}%`);
  setText("fleet-distribution-blocked-label", `${blockedPct}%`);
  const readyBar = document.getElementById("fleet-distribution-ready-bar");
  const riskBar = document.getElementById("fleet-distribution-risk-bar");
  const blockedBar = document.getElementById("fleet-distribution-blocked-bar");
  if (readyBar) readyBar.style.width = `${readyPct}%`;
  if (riskBar) riskBar.style.width = `${riskPct}%`;
  if (blockedBar) blockedBar.style.width = `${blockedPct}%`;

  const frankfurt = getVesselSnapshot("frankfurt");
  const stuttgart = getVesselSnapshot("stuttgart");
  const bayern = getVesselSnapshot("bayern");
  setText("fleet-watch-frankfurt-meta", frankfurt.complianceLabel === "Renewal workflow" ? "Renewal workflow in progress" : "Master certificate expired");
  setText("fleet-watch-stuttgart-meta", stuttgart.complianceLabel === "Compliance Ready" ? "Engineering gap resolved" : stuttgart.complianceLabel);
  setText("fleet-watch-bayern-meta", bayern.complianceLabel);
  const setBadge = (id, tone, label) => {
    const el = document.getElementById(id);
    if (el) {
      el.className = `badge ${tone}`;
      el.textContent = label;
    }
  };
  setBadge("fleet-watch-frankfurt-status", frankfurt.tone, frankfurt.tone === "blocked" ? "Critical" : "Watch");
  setBadge("fleet-watch-stuttgart-status", stuttgart.tone, stuttgart.tone === "ready" ? "Resolved" : "Priority: High");
  setBadge("fleet-watch-bayern-status", bayern.tone === "risk" ? "risk" : "live", bayern.tone === "risk" ? "Medium" : "In Review");

  setText("fleet-insight-rotterdam", stuttgart.tone === "ready" ? "Crew windows stabilized" : "High activity");
  setText("fleet-insight-gibraltar", getVesselSnapshot("bremen").tone === "ready" ? "Window stable" : "Severe weather warning");
  setText("fleet-insight-sync", "Just now");
}

function syncRoutesView() {
  const trackedKeys = ["bremen", "stuttgart", "frankfurt", "dresden"];
  const snapshots = trackedKeys.map(getVesselSnapshot).filter(Boolean);
  const riskWindows = snapshots.filter((item) => item.tone !== "ready").length;
  const delayedEvents = snapshots.filter((item) => item.tone === "blocked").length + (alertsData.some((item) => item.key === "emre-passport") ? 1 : 0);

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  const setBadge = (id, tone, label) => {
    const el = document.getElementById(id);
    if (el) {
      el.className = `badge ${tone}`;
      el.textContent = label;
    }
  };

  setText("routes-kpi-active", "8");
  setText("routes-kpi-active-meta", "Fleet moving");
  setText("routes-kpi-portcalls", "14");
  setText("routes-kpi-portcalls-meta", riskWindows ? `+${riskWindows} under watch` : "Stable schedule");
  setText("routes-kpi-risk", String(riskWindows));
  setText("routes-kpi-risk-meta", riskWindows ? "Action required" : "No risk windows");
  setText("routes-kpi-delayed", String(delayedEvents));
  setText("routes-kpi-delayed-meta", delayedEvents ? "Intervention" : "No route delays");

  const filterMap = {
    all: () => true,
    active: (item) => item.tone === "ready",
    risk: (item) => item.tone === "risk",
    blocked: (item) => item.tone === "blocked",
  };

  snapshots.forEach((item) => {
    const rowEl = document.getElementById(`routes-row-${item.key}`);
    if (rowEl) rowEl.style.display = (filterMap[state.routesFilter || "all"] || filterMap.all)(item) ? "" : "none";
    setBadge(`routes-row-${item.key}-crew`, item.tone === "ready" ? "ready" : item.tone, item.crewLabel);
    const riskEl = document.getElementById(`routes-row-${item.key}-risk`);
    if (riskEl) {
      riskEl.innerHTML = `<strong>${item.routeRisk}</strong>`;
      riskEl.className = item.routeTone === "blocked" ? "text-blocked" : item.routeTone === "risk" ? "text-risk" : "text-ready";
    }
    setBadge(`routes-row-${item.key}-status`, item.tone === "ready" ? "live" : item.tone, item.statusLabel);
    const actionEl = document.getElementById(`routes-row-${item.key}-action`);
    if (actionEl) actionEl.textContent = item.actionLabel;
  });

  setBadge("routes-watch-rotterdam-status", getVesselSnapshot("stuttgart").tone === "ready" ? "live" : "risk", getVesselSnapshot("stuttgart").tone === "ready" ? "Stable" : "Medium");
  setText("routes-watch-gibraltar-meta", getVesselSnapshot("bremen").tone === "ready" ? "Crew window stabilized" : "Weather delay");
  setBadge("routes-watch-gibraltar-status", getVesselSnapshot("bremen").tone === "ready" ? "live" : "blocked", getVesselSnapshot("bremen").tone === "ready" ? "Low" : "High");
  setText("routes-watch-fos-meta", getVesselSnapshot("frankfurt").tone === "blocked" ? "Certificate-driven intervention" : "Renewal watch");
  setBadge("routes-watch-fos-status", getVesselSnapshot("frankfurt").tone === "blocked" ? "blocked" : "risk", getVesselSnapshot("frankfurt").tone === "blocked" ? "Critical" : "Medium");

  setText("routes-window-bremen", getVesselSnapshot("bremen").embarkationWindow);
  setText("routes-window-stuttgart", getVesselSnapshot("stuttgart").embarkationWindow);
  setText("routes-window-frankfurt", getVesselSnapshot("frankfurt").embarkationWindow);

  const flights = getVesselSnapshot("stuttgart").tone === "ready" ? 88 : 84;
  const visas = documentOpsState.rows["visa-ferdi"]?.status.label === "Ready" ? 86 : documentOpsState.rows["visa-ferdi"]?.status.label === "Promotion cleared" ? 79 : 71;
  const portAccess = getVesselSnapshot("frankfurt").tone === "blocked" ? 76 : 88;
  setText("routes-logistics-flights-label", `${flights}%`);
  setText("routes-logistics-visas-label", `${visas}%`);
  setText("routes-logistics-port-label", `${portAccess}%`);
  const flightsBar = document.getElementById("routes-logistics-flights-bar");
  const visasBar = document.getElementById("routes-logistics-visas-bar");
  const portBar = document.getElementById("routes-logistics-port-bar");
  if (flightsBar) flightsBar.style.width = `${flights}%`;
  if (visasBar) visasBar.style.width = `${visas}%`;
  if (portBar) portBar.style.width = `${portAccess}%`;
}

function syncCrewChangesOverview() {
  const actionsToday = planningMissions.filter((mission) => mission.open && mission.status !== "Finalized").length;
  const stuttgartBlocked = alertsData.some((item) => item.key === "stuttgart-candidate");
  const cenkRenewalBooked = documentOpsState.rows["medical-cenk"]?.status.label === "Renewal booked";
  const emrePendingOwner = documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner";

  const kpiEmbarking = document.getElementById("crewchanges-kpi-embarking");
  const kpiRisk = document.getElementById("crewchanges-kpi-risk");
  const kpiBlocked = document.getElementById("crewchanges-kpi-blocked");
  const kpiActions = document.getElementById("crewchanges-kpi-actions");
  const kpiRiskMeta = document.getElementById("crewchanges-kpi-risk-meta");
  const kpiBlockedMeta = document.getElementById("crewchanges-kpi-blocked-meta");
  const kpiActionsMeta = document.getElementById("crewchanges-kpi-actions-meta");

  if (kpiEmbarking) kpiEmbarking.textContent = String(systemDataNotes.readyCount);
  if (kpiRisk) kpiRisk.textContent = String(systemDataNotes.atRiskCount - (cenkRenewalBooked ? 1 : 0));
  if (kpiBlocked) kpiBlocked.textContent = String(systemDataNotes.blockedCount - (stuttgartBlocked ? 0 : 1) - (emrePendingOwner ? 0 : 1));
  if (kpiActions) kpiActions.textContent = String(actionsToday);
  if (kpiRiskMeta) kpiRiskMeta.textContent = cenkRenewalBooked ? "+1 scheduled for closure" : "+2";
  if (kpiBlockedMeta) kpiBlockedMeta.textContent = stuttgartBlocked ? "-1 in progress" : "-2 reduced";
  if (kpiActionsMeta) kpiActionsMeta.textContent = actionsToday === 1 ? "Required decision" : "Required decisions";

  const bremenMission = matchingMissions.bremen;
  const bremenCandidate = findMissionCandidate(bremenMission, bremenMission.selectedCandidateKey || "hakan") || bremenMission.candidates[0];
  const stuttgartMission = matchingMissions.stuttgart;
  const stuttgartCandidate = findMissionCandidate(stuttgartMission, stuttgartMission.selectedCandidateKey || "ferdi") || stuttgartMission.candidates[0];
  const rustuAlertOpen = alertsData.some((item) => item.key === "rustu-tanker");
  const cenkDocumentState = documentOpsState.rows["medical-cenk"]?.status.label || "Expiring";

  const rowMap = {
    bremen: {
      candidateEl: "crewchanges-row-bremen-candidate",
      readyEl: "crewchanges-row-bremen-ready",
      statusEl: "crewchanges-row-bremen-status",
      urgencyEl: "crewchanges-row-bremen-urgency",
      actionEl: "crewchanges-row-bremen-action",
      candidate: `${bremenCandidate.name}<div class="muted" style="font-size:10px;">ID: #88401</div>`,
      readiness: `${bremenCandidate.readiness}%`,
      readinessClass: bremenCandidate.readiness >= 95 ? "text-ready" : "text-risk",
      status: bremenMission.finalized ? "Finalized" : planningMissions.find((item) => item.key === "bremen")?.status || "Ready",
      statusTone: bremenMission.finalized ? "ready" : "ready",
      urgency: bremenMission.finalized ? "Closed" : "Low",
      urgencyTone: bremenMission.finalized ? "ready" : "live",
      actionLabel: bremenMission.finalized ? "Open" : "Open",
    },
    stuttgart: {
      candidateEl: "crewchanges-row-stuttgart-candidate",
      readyEl: "crewchanges-row-stuttgart-ready",
      statusEl: "crewchanges-row-stuttgart-status",
      urgencyEl: "crewchanges-row-stuttgart-urgency",
      actionEl: "crewchanges-row-stuttgart-action",
      candidate: `${stuttgartCandidate.name}<div class="muted" style="font-size:10px;">ID: #88409</div>`,
      readiness: `${stuttgartCandidate.readiness}%`,
      readinessClass: stuttgartMission.finalized ? "text-ready" : stuttgartCandidate.readiness >= 90 ? "text-risk" : "text-blocked",
      status: stuttgartMission.finalized ? "Finalized" : planningMissions.find((item) => item.key === "stuttgart")?.status || "At Risk",
      statusTone: stuttgartMission.finalized ? "ready" : stuttgartBlocked ? "blocked" : "risk",
      urgency: stuttgartMission.finalized ? "Closed" : stuttgartBlocked ? "High" : "Medium",
      urgencyTone: stuttgartMission.finalized ? "ready" : stuttgartBlocked ? "blocked" : "risk",
      actionLabel: stuttgartMission.finalized ? "Open" : "View details",
    },
    frankfurt: {
      candidateEl: "crewchanges-row-frankfurt-candidate",
      readyEl: "crewchanges-row-frankfurt-ready",
      statusEl: "crewchanges-row-frankfurt-status",
      urgencyEl: "crewchanges-row-frankfurt-urgency",
      candidate: `Rüştü Reçber<div class="muted" style="font-size:10px;">ID: #88405</div>`,
      readiness: `${profileData.rustu.readiness}%`,
      readinessClass: rustuAlertOpen ? "text-blocked" : "text-risk",
      status: rustuAlertOpen ? "Blocked" : "In Review",
      statusTone: rustuAlertOpen ? "blocked" : "risk",
      urgency: rustuAlertOpen ? "High" : "Medium",
      urgencyTone: rustuAlertOpen ? "blocked" : "risk",
    },
    hamburg: {
      candidateEl: "crewchanges-row-hamburg-candidate",
      readyEl: "crewchanges-row-hamburg-ready",
      statusEl: "crewchanges-row-hamburg-status",
      urgencyEl: "crewchanges-row-hamburg-urgency",
      candidate: `Cenk Tosun<div class="muted" style="font-size:10px;">ID: #88404</div>`,
      readiness: `${profileData.cenk.readiness}%`,
      readinessClass: cenkRenewalBooked ? "text-ready" : "text-risk",
      status: cenkRenewalBooked ? "In Review" : "At Risk",
      statusTone: cenkRenewalBooked ? "live" : "risk",
      urgency: cenkRenewalBooked ? "Low" : "Medium",
      urgencyTone: cenkRenewalBooked ? "live" : "risk",
    },
  };

  Object.values(rowMap).forEach((row) => {
    const candidateEl = document.getElementById(row.candidateEl);
    const readyEl = document.getElementById(row.readyEl);
    const statusEl = document.getElementById(row.statusEl);
    const urgencyEl = document.getElementById(row.urgencyEl);
    const actionEl = row.actionEl ? document.getElementById(row.actionEl) : null;

    if (candidateEl) candidateEl.innerHTML = row.candidate;
    if (readyEl) {
      readyEl.className = row.readinessClass;
      readyEl.textContent = row.readiness;
    }
    if (statusEl) {
      statusEl.className = `badge ${row.statusTone}`;
      statusEl.textContent = row.status;
    }
    if (urgencyEl) {
      urgencyEl.className = `badge ${row.urgencyTone}`;
      urgencyEl.textContent = row.urgency;
    }
    if (actionEl && row.actionLabel) {
      actionEl.textContent = row.actionLabel;
    }
  });

  const filterMap = {
    all: () => true,
    actionable: (key) => ["bremen", "stuttgart"].includes(key),
    risk: (key) => ["stuttgart", "hamburg"].includes(key),
    blocked: (key) => key === "frankfurt",
  };

  Object.keys(rowMap).forEach((key) => {
    const rowEl = document.getElementById(`crewchanges-row-${key}-candidate`)?.closest("tr");
    if (rowEl) rowEl.style.display = filterMap[state.crewChangesFilter || "all"](key) ? "" : "none";
  });

  const logisticsBremenStatus = document.getElementById("crewchanges-logistics-bremen-status");
  const logisticsBremenRoute = document.getElementById("crewchanges-logistics-bremen-route");
  const logisticsStuttgartStatus = document.getElementById("crewchanges-logistics-stuttgart-status");
  const logisticsStuttgartRoute = document.getElementById("crewchanges-logistics-stuttgart-route");
  const logisticsStuttgartArrival = document.getElementById("crewchanges-logistics-stuttgart-arrival");
  const schengenLabel = document.getElementById("crewchanges-visa-schengen-label");
  const schengenBar = document.getElementById("crewchanges-visa-schengen-bar");
  const usLabel = document.getElementById("crewchanges-visa-us-label");
  const usBar = document.getElementById("crewchanges-visa-us-bar");

  if (logisticsBremenStatus) {
    logisticsBremenStatus.className = `badge ${bremenMission.finalized ? "ready" : "live"}`;
    logisticsBremenStatus.textContent = bremenMission.finalized ? "Confirmed" : "On Time";
  }
  if (logisticsBremenRoute) {
    logisticsBremenRoute.textContent = `IST → GIB • ${bremenCandidate.name.split(" ").slice(-1)[0]}, ${bremenCandidate.name[0]}.`;
  }
  if (logisticsStuttgartStatus) {
    const stuttgartTone = stuttgartMission.finalized ? "ready" : stuttgartBlocked ? "blocked" : "risk";
    logisticsStuttgartStatus.className = `badge ${stuttgartTone}`;
    logisticsStuttgartStatus.textContent = stuttgartMission.finalized ? "Confirmed" : stuttgartBlocked ? "Pending approval" : "In review";
  }
  if (logisticsStuttgartRoute) {
    logisticsStuttgartRoute.textContent = `IST → RTM • ${stuttgartCandidate.name.split(" ").slice(-1)[0]}, ${stuttgartCandidate.name[0]}.`;
  }
  if (logisticsStuttgartArrival) {
    logisticsStuttgartArrival.textContent = stuttgartMission.finalized ? "Arrival: 17:55" : "Arrival: pending clearance";
  }

  const schengenValue = stuttgartBlocked ? 92 : 97;
  const usValue =
    documentOpsState.rows["visa-ferdi"]?.status.label === "Ready"
      ? 91
      : documentOpsState.rows["visa-ferdi"]?.status.label === "Promotion cleared"
        ? 82
        : 68;

  if (schengenLabel) schengenLabel.textContent = `${schengenValue}%`;
  if (schengenBar) schengenBar.style.width = `${schengenValue}%`;
  if (usLabel) usLabel.textContent = `${usValue}%`;
  if (usBar) {
    usBar.style.width = `${usValue}%`;
    usBar.style.background = usValue >= 85 ? "#006591" : usValue >= 75 ? "#fbbf24" : "#ba1a1a";
  }
}

function syncCrewView() {
  const readyEl = document.getElementById("crew-kpi-ready");
  const riskEl = document.getElementById("crew-kpi-risk");
  const blockedEl = document.getElementById("crew-kpi-blocked");
  const availableEl = document.getElementById("crew-kpi-available");
  const readyMetaEl = document.getElementById("crew-kpi-ready-meta");
  const riskMetaEl = document.getElementById("crew-kpi-risk-meta");
  const blockedMetaEl = document.getElementById("crew-kpi-blocked-meta");
  const availableMetaEl = document.getElementById("crew-kpi-available-meta");

  const cenkRenewalBooked = documentOpsState.rows["medical-cenk"]?.status.label === "Renewal booked";
  const rustuAlertOpen = alertsData.some((item) => item.key === "rustu-tanker");
  const ferdiVisaState = documentOpsState.rows["visa-ferdi"]?.status.label;
  const bremenFinalized = matchingMissions.bremen.finalized;
  const stuttgartFinalized = matchingMissions.stuttgart.finalized;
  const readyCount = systemDataNotes.readyCount + (bremenFinalized ? 1 : 0) + (stuttgartFinalized ? 1 : 0);
  const riskCount = systemDataNotes.atRiskCount - (cenkRenewalBooked ? 1 : 0) - (stuttgartFinalized ? 1 : 0);
  const blockedCount = systemDataNotes.blockedCount - (rustuAlertOpen ? 0 : 1);
  const availableCount = 42 - (bremenFinalized ? 1 : 0) - (stuttgartFinalized ? 1 : 0);
  const totalStatusCount = readyCount + riskCount + blockedCount;

  if (readyEl) readyEl.textContent = String(readyCount);
  if (riskEl) riskEl.textContent = String(riskCount);
  if (blockedEl) blockedEl.textContent = String(blockedCount);
  if (availableEl) availableEl.textContent = String(availableCount);
  if (readyMetaEl) readyMetaEl.textContent = bremenFinalized || stuttgartFinalized ? "+assignment movement captured" : "+8 vs yesterday";
  if (riskMetaEl) riskMetaEl.textContent = cenkRenewalBooked ? "+medical review scheduled" : "+2 vs yesterday";
  if (blockedMetaEl) blockedMetaEl.textContent = rustuAlertOpen ? "Requires action" : "1 blocker reduced";
  if (availableMetaEl) availableMetaEl.textContent = bremenFinalized || stuttgartFinalized ? "Pool updated after assignments" : "Ready for assignment";

  const hakanMission = matchingMissions.bremen;
  const ferdiMission = matchingMissions.stuttgart;
  const ferdiCandidate = findMissionCandidate(ferdiMission, ferdiMission.selectedCandidateKey || "ferdi") || ferdiMission.candidates[0];

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  const setHtml = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  };
  const setBadge = (id, tone, label) => {
    const el = document.getElementById(id);
    if (el) {
      el.className = `badge ${tone}`;
      el.textContent = label;
    }
  };
  const setStrongClass = (id, className, label) => {
    const el = document.getElementById(id);
    if (el) {
      el.className = className;
      el.textContent = label;
    }
  };

  setText("crew-row-hakan-vessel", bremenFinalized ? "MT Scot Bremen" : "Available");
  setStrongClass("crew-row-hakan-ready", "text-ready", `${profileData.hakan.readiness}%`);
  setHtml("crew-row-hakan-medical", `<strong>${bremenFinalized ? "Embarkation Locked" : "Ready"}</strong>`);
  setBadge("crew-row-hakan-status", "ready", bremenFinalized ? "Assigned" : "Ready");
  const hakanAction = document.getElementById("crew-row-hakan-action");
  if (hakanAction) {
    hakanAction.textContent = bremenFinalized ? "Open" : "Assign";
    hakanAction.dataset.action = "open-matching";
    hakanAction.dataset.key = "bremen";
  }

  setHtml("crew-row-emre-travel", `<strong>${documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner" ? "Docs Requested" : "Passport Alert"}</strong>`);
  setBadge("crew-row-emre-status", documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner" ? "live" : "risk", documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner" ? "In Review" : "At Risk");

  setStrongClass("crew-row-cenk-ready", cenkRenewalBooked ? "text-ready" : "text-risk", `${profileData.cenk.readiness}%`);
  setHtml("crew-row-cenk-medical", `<strong>${cenkRenewalBooked ? "Renewal booked" : "Medical Due"}</strong>`);
  setBadge("crew-row-cenk-status", cenkRenewalBooked ? "live" : "risk", cenkRenewalBooked ? "In Review" : "At Risk");

  setStrongClass("crew-row-rustu-ready", rustuAlertOpen ? "text-blocked" : "text-risk", `${profileData.rustu.readiness}%`);
  setHtml("crew-row-rustu-certs", `<strong>${rustuAlertOpen ? "Cert Expired" : "Renewal open"}</strong>`);
  setBadge("crew-row-rustu-status", rustuAlertOpen ? "blocked" : "risk", rustuAlertOpen ? "Blocked" : "In Review");

  setText("crew-row-ferdi-vessel", stuttgartFinalized ? "MT Scot Stuttgart" : "Available");
  setStrongClass("crew-row-ferdi-ready", stuttgartFinalized ? "text-ready" : ferdiCandidate.readiness >= 90 ? "text-risk" : "text-blocked", `${ferdiCandidate.readiness}%`);
  setHtml(
    "crew-row-ferdi-travel",
    `<strong>${
      ferdiVisaState === "Ready"
        ? "Travel Ready"
        : ferdiVisaState === "Promotion cleared"
          ? "Promotion Cleared"
          : ferdiVisaState === "In review"
            ? "Visa In Review"
            : "Visa Pending"
    }</strong>`
  );
  setBadge("crew-row-ferdi-status", stuttgartFinalized ? "ready" : ferdiVisaState === "Ready" ? "ready" : "risk", stuttgartFinalized ? "Assigned" : ferdiVisaState === "Ready" ? "Ready" : "At Risk");
  const ferdiAction = document.getElementById("crew-row-ferdi-action");
  if (ferdiAction) {
    ferdiAction.textContent = stuttgartFinalized ? "Open" : "Review";
    ferdiAction.dataset.action = stuttgartFinalized ? "open-matching" : "open-crew-profile";
    ferdiAction.dataset.key = stuttgartFinalized ? "stuttgart" : "ferdi";
  }

  const rowStatusMap = {
    merih: "ready",
    hakan: "ready",
    nihat: "risk",
    emre: documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner" ? "risk" : "risk",
    cenk: cenkRenewalBooked ? "risk" : "risk",
    rustu: rustuAlertOpen ? "blocked" : "risk",
    arda: "ready",
    ozan: "ready",
    kerem: "ready",
    ferdi: stuttgartFinalized ? "ready" : ferdiVisaState === "Ready" ? "ready" : "risk",
  };

  document.querySelectorAll("[data-crew-key]").forEach((row) => {
    const crewKey = row.getAttribute("data-crew-key");
    const tone = rowStatusMap[crewKey] || "ready";
    row.dataset.status = tone;
    const visible = state.crewFilter === "all" ? true : tone === state.crewFilter;
    row.style.display = visible ? "" : "none";
  });

  const setWatch = (prefix, title, meta, tone, status) => {
    const titleEl = document.getElementById(`crew-watch-${prefix}-title`);
    const metaEl = document.getElementById(`crew-watch-${prefix}-meta`);
    const statusEl = document.getElementById(`crew-watch-${prefix}-status`);
    if (titleEl) titleEl.textContent = title;
    if (metaEl) metaEl.textContent = meta;
    if (statusEl) {
      statusEl.className = `badge ${tone}`;
      statusEl.textContent = status;
    }
  };

  setWatch(
    "emre",
    documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner" ? "Seaman Book" : "Passport",
    documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner"
      ? "Emre Belözoğlu • Owner response pending"
      : "Emre Belözoğlu • Expires before next assignment",
    documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner" ? "risk" : "blocked",
    documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner" ? "In Review" : "Critical"
  );
  setWatch(
    "cenk",
    "Medical Certificate",
    cenkRenewalBooked ? "Cenk Tosun • Renewal booked before 03 Sep 2026 embarkation" : "Cenk Tosun • Exp: 12 days",
    cenkRenewalBooked ? "live" : "risk",
    cenkRenewalBooked ? "Scheduled" : "Expiring"
  );
  setWatch(
    "rustu",
    "Advanced Oil Tanker",
    rustuAlertOpen ? "Rüştü Reçber • Expired" : "Rüştü Reçber • Renewal workflow in progress",
    rustuAlertOpen ? "blocked" : "risk",
    rustuAlertOpen ? "Blocked" : "In Review"
  );

  const availabilityMap = {
    master: { count: rustuAlertOpen ? 12 : 13, width: rustuAlertOpen ? 75 : 82 },
    chiefeng: { count: stuttgartFinalized ? 7 : 8, width: stuttgartFinalized ? 40 : 45 },
    deck: { count: bremenFinalized ? 21 : 22, width: bremenFinalized ? 84 : 90 },
  };

  Object.entries(availabilityMap).forEach(([key, value]) => {
    const labelEl = document.getElementById(`crew-availability-${key}-label`);
    const barEl = document.getElementById(`crew-availability-${key}-bar`);
    if (labelEl) labelEl.textContent = `${value.count} Available`;
    if (barEl) barEl.style.width = `${value.width}%`;
  });

  const readyPercent = Math.round((readyCount / totalStatusCount) * 100);
  const riskPercent = Math.round((riskCount / totalStatusCount) * 100);
  const blockedPercent = Math.max(100 - readyPercent - riskPercent, 0);
  const distributionMap = {
    ready: readyPercent,
    risk: riskPercent,
    blocked: blockedPercent,
  };

  Object.entries(distributionMap).forEach(([key, value]) => {
    const labelEl = document.getElementById(`crew-distribution-${key}-label`);
    const barEl = document.getElementById(`crew-distribution-${key}-bar`);
    if (labelEl) labelEl.textContent = `${value}%`;
    if (barEl) barEl.style.width = `${value}%`;
  });
}

function addProfileTimelineEntry(profileKey, action, who) {
  const profile = profileData[profileKey];
  if (!profile) return;
  profile.timeline.unshift({
    time: "20 Jul · 14:20",
    action,
    who,
  });
}

function addProfileNote(profileKey, note) {
  const profile = profileData[profileKey];
  if (!profile) return;
  if (profile.notes.includes(note)) return;
  profile.notes.unshift(note);
}

function ensureComplianceException(exception) {
  const existing = complianceExceptions.find((item) => item.key === exception.key);
  if (existing) {
    Object.assign(existing, exception);
    return existing;
  }
  complianceExceptions.unshift(exception);
  return exception;
}

const state = {
  activeView: "command-center",
  activeMission: "bremen",
  activeRotation: "bremen-chief",
  activeProfile: "hakan",
  activeProfileTab: "overview",
  activeComplianceTab: "rules",
  activeVessel: "bremen",
  crewChangesFilter: "all",
  crewFilter: "all",
  planningFilter: "all",
  fleetFilter: "all",
  routesFilter: "all",
  reportsFilter: "all",
  pendingPlanningContext: null,
  activeDocumentFocus: null,
  activeDocumentMode: "open",
  activeReportFocus: null,
  activeReportMode: "open",
  activeAdminFocus: null,
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
const fileUploadInput = document.getElementById("file-upload-input");

let toastTimer;
let pendingUploadProfileKey = null;
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

const STORAGE_KEY = "ready-to-sail-v1-demo-state";

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function replaceArrayContents(target, source) {
  if (!Array.isArray(target) || !Array.isArray(source)) return;
  target.splice(0, target.length, ...source);
}

function replaceObjectContents(target, source) {
  if (!target || !source || typeof target !== "object" || typeof source !== "object") return;
  Object.keys(target).forEach((key) => delete target[key]);
  Object.assign(target, source);
}

function collectPersistedState() {
  return {
    version: 1,
    state: cloneJson(state),
    chatHistory: cloneJson(chatHistory),
    activityFeed: cloneJson(activityFeed),
    documentOpsState: cloneJson(documentOpsState),
    reportOpsState: cloneJson(reportOpsState),
    adminOpsState: cloneJson(adminOpsState),
    planningMissions: cloneJson(planningMissions),
    matchingMissions: cloneJson(matchingMissions),
    alertsData: cloneJson(alertsData),
    complianceRules: cloneJson(complianceRules),
    complianceExceptions: cloneJson(complianceExceptions),
    complianceAudit: cloneJson(complianceAudit),
    profileData: cloneJson(profileData),
  };
}

function persistAppState() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(collectPersistedState()));
  } catch (error) {
    console.warn("Unable to persist Ready to Sail state locally.", error);
  }
}

function restorePersistedState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const persisted = JSON.parse(raw);
    if (!persisted || persisted.version !== 1) return;

    if (persisted.state) Object.assign(state, persisted.state);
    if (persisted.chatHistory) chatHistory = persisted.chatHistory;
    if (persisted.activityFeed) replaceArrayContents(activityFeed, persisted.activityFeed);
    if (persisted.documentOpsState) replaceObjectContents(documentOpsState, persisted.documentOpsState);
    if (persisted.reportOpsState) replaceObjectContents(reportOpsState, persisted.reportOpsState);
    if (persisted.adminOpsState) replaceObjectContents(adminOpsState, persisted.adminOpsState);
    if (persisted.planningMissions) replaceArrayContents(planningMissions, persisted.planningMissions);
    if (persisted.matchingMissions) replaceObjectContents(matchingMissions, persisted.matchingMissions);
    if (persisted.alertsData) replaceArrayContents(alertsData, persisted.alertsData);
    if (persisted.complianceRules) replaceArrayContents(complianceRules, persisted.complianceRules);
    if (persisted.complianceExceptions) replaceArrayContents(complianceExceptions, persisted.complianceExceptions);
    if (persisted.complianceAudit) replaceArrayContents(complianceAudit, persisted.complianceAudit);
    if (persisted.profileData) replaceObjectContents(profileData, persisted.profileData);
  } catch (error) {
    console.warn("Unable to restore Ready to Sail state from local storage.", error);
  }
}

function recordActivity(title, meta) {
  activityFeed.unshift({
    time: "21 Jul · 14:20",
    title,
    meta,
  });
}

function updateMissionPlanningState(missionKey, updates) {
  const mission = planningMissions.find((item) => item.key === missionKey);
  if (!mission) return;
  Object.assign(mission, updates);
}

function getDefaultRotationKey(missionKey) {
  return matchingMissions[missionKey]?.rotations?.[0]?.key || "";
}

function getMissionRotation(mission, rotationKey = state.activeRotation) {
  return mission.rotations.find((rotation) => rotation.key === rotationKey) || mission.rotations[0];
}

function getActionRotation(mission) {
  return mission.rotations.find((rotation) => rotation.detailMode !== "summary") || mission.rotations[0];
}

function getPlanningMissionSnapshot(mission) {
  const missionContext = matchingMissions[mission.key];
  const rustuAlertOpen = alertsData.some((item) => item.key === "rustu-tanker");
  const stuttgartBlocked = alertsData.some((item) => item.key === "stuttgart-candidate");
  const emrePendingOwner = documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner";
  const cenkRenewalBooked = documentOpsState.rows["medical-cenk"]?.status.label === "Renewal booked";

  if (!missionContext) {
    const queuedStatusMap = {
      hamburg: {
        status: "Scheduled",
        tone: "ready",
        candidate: cenkRenewalBooked ? "Medical renewal booked" : "Relief planning",
        openAction: "show-future-mission",
        actionLabel: "Queued",
      },
      bayern: {
        status: emrePendingOwner ? "Passport review" : "Scheduled",
        tone: emrePendingOwner ? "risk" : "ready",
        candidate: emrePendingOwner ? "Document pack in review" : "Passport alert",
        openAction: "show-future-mission",
        actionLabel: "Queued",
      },
      frankfurt: {
        status: rustuAlertOpen ? "Urgent - cert expired" : "Relief planning",
        tone: rustuAlertOpen ? "blocked" : "risk",
        candidate: rustuAlertOpen ? "No compliant candidate yet" : "Renewal workflow open",
        openAction: "show-future-mission",
        actionLabel: "Queued",
      },
      dresden: {
        status: "Scheduled",
        tone: "ready",
        candidate: "Current master ready",
        openAction: "show-future-mission",
        actionLabel: "Queued",
      },
    };

    const queuedState = queuedStatusMap[mission.key] || {
      status: mission.status,
      tone: "ready",
      candidate: mission.candidate,
      openAction: "show-future-mission",
      actionLabel: "Queued",
    };

    return {
      ...mission,
      ...queuedState,
      isQueued: true,
      isRisk: ["risk", "blocked"].includes(queuedState.tone),
    };
  }

  const actionRotation = getActionRotation(missionContext);
  const selectedCandidate = findMissionCandidate(missionContext, actionRotation?.selectedCandidateKey || missionContext.selectedCandidateKey) || missionContext.candidates[0];
  const isFinalized = Boolean(missionContext.finalized);
  const status =
    mission.key === "bremen"
      ? isFinalized
        ? "Finalized"
        : "Ready"
      : isFinalized
        ? "Finalized"
        : stuttgartBlocked
          ? "Pending action"
          : "In review";
  const tone =
    mission.key === "bremen"
      ? "ready"
      : isFinalized
        ? "ready"
        : stuttgartBlocked
          ? "blocked"
          : "risk";

  return {
    ...mission,
    status,
    tone,
    candidate: selectedCandidate?.name || mission.candidate,
    actionLabel: "Open Matching",
    openAction: "open-matching",
    isQueued: false,
    isRisk: tone !== "ready",
  };
}

function getPlanningVisibleMissions() {
  const snapshots = planningMissions.map(getPlanningMissionSnapshot);
  switch (state.planningFilter) {
    case "active":
      return snapshots.filter((mission) => !mission.isQueued);
    case "risk":
      return snapshots.filter((mission) => mission.isRisk);
    case "queued":
      return snapshots.filter((mission) => mission.isQueued);
    default:
      return snapshots;
  }
}

function getAvailabilityScore(candidate) {
  const availability = candidate.profileKey ? profileData[candidate.profileKey]?.availability || "" : "";
  if (/today/i.test(availability)) return 0;
  if (/available/i.test(availability)) return 1;
  if (/assigned/i.test(availability)) return 2;
  if (/3 days/i.test(availability)) return 3;
  if (/review/i.test(availability)) return 4;
  if (/on board/i.test(availability)) return 5;
  return 6;
}

function getToneScore(tone) {
  if (tone === "ready") return 0;
  if (tone === "risk") return 1;
  return 2;
}

function sortCandidatesForFilter(candidates, filterLabel, selectedCandidateKey) {
  const sorted = [...candidates];

  if (filterLabel === "Highest Ready Index") {
    return sorted.sort((a, b) => b.readiness - a.readiness);
  }

  if (filterLabel === "Nearest Availability") {
    return sorted.sort((a, b) => getAvailabilityScore(a) - getAvailabilityScore(b) || b.readiness - a.readiness);
  }

  if (filterLabel === "Most Experience") {
    return sorted.sort((a, b) => (b.experienceScore || 0) - (a.experienceScore || 0) || b.readiness - a.readiness);
  }

  if (filterLabel === "Lowest Operational Risk") {
    return sorted.sort((a, b) => getToneScore(a.tone) - getToneScore(b.tone) || b.readiness - a.readiness);
  }

  return sorted.sort((a, b) => {
    if (a.key === selectedCandidateKey) return -1;
    if (b.key === selectedCandidateKey) return 1;
    return b.readiness - a.readiness;
  });
}

function findMissionCandidate(mission, candidateKey) {
  if (!mission) return null;
  const missionCandidate = mission.candidates?.find((item) => item.key === candidateKey);
  if (missionCandidate) return missionCandidate;
  for (const rotation of mission.rotations) {
    if (!Array.isArray(rotation.candidates)) continue;
    const rotationCandidate = rotation.candidates.find((item) => item.key === candidateKey);
    if (rotationCandidate) return rotationCandidate;
  }
  return null;
}

function updateMissionSelection(missionKey, candidateKey) {
  const mission = matchingMissions[missionKey];
  if (!mission) return null;
  const rotation = getMissionRotation(mission);
  const candidateSource = rotation.candidates || mission.candidates;

  const candidate = candidateSource.find((item) => item.key === candidateKey);
  if (!candidate) return null;

  mission.selectedCandidateKey = candidateKey;
  rotation.selectedCandidateKey = candidateKey;
  rotation.signOn = candidate.name;
  rotation.statusLabel = mission.finalized ? "Confirmed" : "Candidate selected";
  rotation.status = candidate.readiness >= 95 ? "ready" : "risk";
  rotation.readiness = `${candidate.readiness}%`;
  mission.logistics[0] = { ...mission.logistics[0], value: candidate.name };
  mission.summary = `${candidate.name} is now the active recommended relief for ${mission.vessel}. Candidate stack, logistics and planning summary have been updated for review.`;
  mission.draftSaved = false;
  mission.finalized = false;
  mission.owner = mission.key === "bremen" ? "Crew Manager Review" : "Technical Manager Review";
  mission.alertNote =
    mission.key === "stuttgart"
      ? `${candidate.name} is now the working candidate, but promotion / travel dependencies still need review before sign-on is closed.`
      : "Low operational risk. Candidate selected and assignment pack remains within certificate horizon.";

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
    status: mission.finalized ? "Finalized" : mission.draftSaved ? "Draft saved" : "Candidate selected",
    priority: missionKey === "stuttgart" ? "Medium" : "Low",
  });

  if (candidate.profileKey && profileData[candidate.profileKey]) {
    profileData[candidate.profileKey].mission = mission.vessel;
    profileData[candidate.profileKey].availability = mission.finalized ? "Assigned" : "Under Assignment Review";
    addProfileTimelineEntry(candidate.profileKey, `Selected for ${mission.missionId}`, `${mission.vessel} · Crew Matching`);
    addProfileNote(candidate.profileKey, `Selected as active candidate for ${mission.missionId}.`);
  }

  if (missionKey === "stuttgart" && candidate.key === "ferdi") {
    setDocumentRowState("visa-ferdi", {
      verification: { label: "Review started", tone: "live" },
      risk: { label: "Medium", tone: "risk" },
      status: { label: "In review", tone: "risk" },
      action: { label: "Review", action: "review-document", key: "visa-ferdi" },
    });
    documentOpsState.kpis.pending = 17;
    documentOpsState.kpis.pendingMeta = "Crew change follow-up";
  }

  recordActivity(`Candidate selected for ${mission.missionId}`, `${candidate.name} · ${mission.vessel}`);
  return candidate;
}

function saveMissionDraft(missionKey) {
  const mission = matchingMissions[missionKey];
  if (!mission) return null;

  mission.draftSaved = true;
  mission.finalized = false;
  mission.owner = "Draft Saved";

  updateMissionPlanningState(missionKey, {
    status: mission.selectedCandidateKey ? "Draft saved" : "Pending action",
    candidate: mission.logistics[0]?.value || "Candidate pending confirmation",
  });

  recordActivity(`Draft saved for ${mission.missionId}`, `${mission.vessel} · ${mission.logistics[0]?.value || "Selection pending"}`);
  return mission;
}

function finalizeMission(missionKey) {
  const mission = matchingMissions[missionKey];
  if (!mission) return null;
  const rotation = getActionRotation(mission);
  const selectedCandidateKey = rotation.selectedCandidateKey || mission.selectedCandidateKey;
  const selectedCandidate = selectedCandidateKey ? findMissionCandidate(mission, selectedCandidateKey) : null;
  if (!selectedCandidate) return null;

  mission.finalized = true;
  mission.draftSaved = true;
  mission.owner = "Assignment Finalized";
  mission.alertNote = "Operational risk reduced. Assignment package prepared and internal handover marked complete.";
  rotation.statusLabel = "Confirmed";
  rotation.status = "ready";
  rotation.signOn = selectedCandidate.name;
  rotation.readiness = `${selectedCandidate.readiness}%`;

  updateMissionPlanningState(missionKey, {
    status: "Finalized",
    priority: "Low",
    candidate: selectedCandidate.name,
  });

  if (selectedCandidate.profileKey && profileData[selectedCandidate.profileKey]) {
    profileData[selectedCandidate.profileKey].availability = "Embarkation Confirmed";
    profileData[selectedCandidate.profileKey].verdict = "Assignment Finalized";
    addProfileTimelineEntry(selectedCandidate.profileKey, `Assignment finalized for ${mission.missionId}`, `${mission.vessel} · Operations`);
    addProfileNote(selectedCandidate.profileKey, `Final assignment confirmed for ${mission.vessel}.`);
  }

  if (missionKey === "stuttgart" && selectedCandidate.key === "ferdi") {
    setDocumentRowState("visa-ferdi", {
      verification: { label: "Verified", tone: "ready" },
      risk: { label: "Low", tone: "ready" },
      status: { label: "Ready", tone: "ready" },
      action: { label: "View", action: "view-document", key: "visa-ferdi" },
    });
    documentOpsState.kpis.pending = 15;
    documentOpsState.kpis.pendingMeta = "One blocker cleared";
  }

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
  persistAppState();
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
  persistAppState();
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
  const snapshots = planningMissions.map(getPlanningMissionSnapshot);
  const visibleMissions = getPlanningVisibleMissions();
  const bremenMission = snapshots.find((mission) => mission.key === "bremen");
  const stuttgartMission = snapshots.find((mission) => mission.key === "stuttgart");
  const hamburgMission = snapshots.find((mission) => mission.key === "hamburg");
  const bayernMission = snapshots.find((mission) => mission.key === "bayern");
  const frankfurtMission = snapshots.find((mission) => mission.key === "frankfurt");
  const dresdenMission = snapshots.find((mission) => mission.key === "dresden");
  const cenkRenewalBooked = documentOpsState.rows["medical-cenk"]?.status.label === "Renewal booked";
  const emrePendingOwner = documentOpsState.rows["seamanbook-emre"]?.status.label === "Pending owner";
  const stuttgartBlocked = alertsData.some((item) => item.key === "stuttgart-candidate");
  const pendingApprovals = complianceExceptions.filter((item) => /Pending approval/i.test(item.status)).length;
  const criticalGaps = [stuttgartBlocked, alertsData.some((item) => item.key === "rustu-tanker")].filter(Boolean).length;
  const filterLabels = {
    all: "All missions",
    active: "Active matching",
    risk: "Risk / blocked",
    queued: "Queued only",
  };

  planningViewRoot.innerHTML = `
    <div class="kpi-grid">
      <div class="kpi-card"><span class="kpi-label">Open Missions</span><div class="kpi-value">6</div><div class="kpi-meta">30-day horizon</div></div>
      <div class="kpi-card"><span class="kpi-label">Ready Candidates</span><div class="kpi-value text-ready">2</div><div class="kpi-meta text-ready">Immediate matches</div></div>
      <div class="kpi-card"><span class="kpi-label">Pending Approvals</span><div class="kpi-value text-risk">${pendingApprovals}</div><div class="kpi-meta text-risk">${pendingApprovals ? "Promotion / exception review" : "No pending approvals"}</div></div>
      <div class="kpi-card"><span class="kpi-label">Critical Gaps</span><div class="kpi-value text-blocked">${criticalGaps}</div><div class="kpi-meta text-blocked">${stuttgartBlocked ? "No compliant candidate" : "Gap pressure reduced"}</div></div>
    </div>

    <div class="card table-card">
      <div class="table-toolbar">
        <div>
          <div class="headline" style="font-size:20px;">30-Day Crew Change Plan</div>
          <div class="subcopy">Upcoming sign-off windows and relief decisions from the original MVP flow.</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn" data-action="filter-planning">Filter: ${filterLabels[state.planningFilter] || filterLabels.all}</button>
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
            ${visibleMissions
              .map(
                (mission) => `
                  <tr data-action="${mission.openAction}" data-key="${mission.key}" style="cursor:pointer;">
                    <td><strong>${mission.join}</strong></td>
                    <td>${mission.vessel}</td>
                    <td>${mission.port}</td>
                    <td>${mission.role}</td>
                    <td><strong>${mission.missionId}</strong></td>
                    <td><span class="badge ${mission.tone}">${mission.status}</span></td>
                    <td style="text-align:right;"><button class="btn ${mission.openAction === "open-matching" ? "btn-primary" : ""}" data-action="${mission.openAction}" data-key="${mission.key}">${mission.actionLabel}</button></td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card pad-lg planning-gantt-card">
      <div class="card-header">
        <div>
          <div class="headline" style="font-size:18px;">Fleet Timeline View</div>
          <div class="subcopy">Operational timeline across July to December 2026 with active and queued coverage states.</div>
        </div>
      </div>
      <div class="planning-gantt">
        <div class="planning-gantt-head">
          <div>Vessel</div>
          <div>Jul</div>
          <div>Aug</div>
          <div>Sep</div>
          <div>Oct</div>
          <div>Nov</div>
          <div>Dec</div>
        </div>

        <div class="planning-gantt-row">
          <div class="planning-gantt-vessel">Scot Bremen</div>
          <div class="planning-gantt-track">
            <button class="planning-gantt-bar onboard" data-action="open-matching" data-key="bremen" style="left:0%; width:14%;">Demir, onboard</button>
            <button class="planning-gantt-bar relief" data-action="open-matching" data-key="bremen" style="left:14%; width:30%;">${bremenMission.status === "Finalized" ? "Çalhanoğlu finalized" : "Çalhanoğlu confirmed"}</button>
          </div>
        </div>
        <div class="planning-gantt-row">
          <div class="planning-gantt-vessel">Scot Stuttgart</div>
          <div class="planning-gantt-track">
            <button class="planning-gantt-bar onboard" data-action="open-matching" data-key="stuttgart" style="left:0%; width:36%;">2nd Eng, onboard</button>
            <button class="planning-gantt-bar ${stuttgartMission.status === "Finalized" ? "relief" : "gap"}" data-action="open-matching" data-key="stuttgart" style="left:36%; width:18%;">${stuttgartMission.status === "Finalized" ? `${stuttgartMission.candidate} confirmed` : "No candidate yet"}</button>
          </div>
        </div>
        <div class="planning-gantt-row">
          <div class="planning-gantt-vessel">Scot Hamburg</div>
          <div class="planning-gantt-track">
            <button class="planning-gantt-bar onboard" data-action="show-future-mission" data-key="hamburg" style="left:0%; width:60%;">2nd Officer, onboard</button>
            <button class="planning-gantt-bar relief" data-action="show-future-mission" data-key="hamburg" style="left:60%; width:20%;">${hamburgMission.candidate}</button>
          </div>
        </div>
        <div class="planning-gantt-row">
          <div class="planning-gantt-vessel">Scot Bayern</div>
          <div class="planning-gantt-track">
            <button class="planning-gantt-bar onboard" data-action="show-future-mission" data-key="bayern" style="left:0%; width:24%;">Chief Eng, onboard</button>
            <button class="planning-gantt-bar ${emrePendingOwner ? "gap" : "relief"}" data-action="show-future-mission" data-key="bayern" style="left:24%; width:10%;">${emrePendingOwner ? "Docs pending" : "Passport risk"}</button>
          </div>
        </div>
        <div class="planning-gantt-row">
          <div class="planning-gantt-vessel">Scot Frankfurt</div>
          <div class="planning-gantt-track">
            <button class="planning-gantt-bar ${frankfurtMission.tone === "blocked" ? "gap" : "relief"}" data-action="show-future-mission" data-key="frankfurt" style="left:0%; width:8%;">${frankfurtMission.tone === "blocked" ? "Master, cert expired" : "Renewal open"}</button>
            <button class="planning-gantt-bar relief" data-action="show-future-mission" data-key="frankfurt" style="left:8%; width:26%;">Relief planning</button>
          </div>
        </div>
        <div class="planning-gantt-row">
          <div class="planning-gantt-vessel">Scot Dresden</div>
          <div class="planning-gantt-track">
            <button class="planning-gantt-bar onboard" data-action="show-future-mission" data-key="dresden" style="left:0%; width:48%;">${dresdenMission.candidate}</button>
          </div>
        </div>

        <div class="planning-legend">
          <span><i class="planning-legend-swatch onboard"></i> On board, compliant</span>
          <span><i class="planning-legend-swatch relief"></i> Relief planned or confirmed</span>
          <span><i class="planning-legend-swatch gap"></i> Gap or at-risk coverage</span>
        </div>
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
          <div class="list-item"><div><div class="list-title">MT Scot Bremen</div><div class="list-meta">${bremenMission.candidate} • ${bremenMission.status === "Finalized" ? "assignment confirmed" : "all docs verified"}</div></div><button class="btn" data-action="open-matching" data-key="bremen">${bremenMission.status === "Finalized" ? "Open" : "Review"}</button></div>
          <div class="list-item"><div><div class="list-title">MT Scot Stuttgart</div><div class="list-meta">${stuttgartMission.candidate} • ${stuttgartMission.status === "Finalized" ? "assignment confirmed" : stuttgartBlocked ? "needs decision" : "candidate under review"}</div></div><button class="btn" data-action="open-matching" data-key="stuttgart">${stuttgartMission.status === "Finalized" ? "Open" : "Resolve"}</button></div>
          <div class="list-item"><div><div class="list-title">MT Scot Frankfurt</div><div class="list-meta">Master role exposed by expired tanker certificate</div></div><button class="btn" data-action="show-future-mission" data-key="frankfurt">Queue</button></div>
        </div>
      </div>

      <div class="card pad-lg">
        <div class="card-header">
          <div class="headline" style="font-size:16px;">Planning Watchlist</div>
        </div>
        <div class="list-stack">
          <div class="list-item"><div><div class="list-title">No compliant engineering backup</div><div class="list-meta">MT Scot Stuttgart • CC-2026-027</div></div><span class="badge ${stuttgartBlocked ? "blocked" : "risk"}">${stuttgartBlocked ? "High" : "Watch"}</span></div>
          <div class="list-item"><div><div class="list-title">Passport renewal before assignment</div><div class="list-meta">Emre Belözoğlu</div></div><span class="badge ${emrePendingOwner ? "risk" : "blocked"}">${emrePendingOwner ? "In Review" : "Critical"}</span></div>
          <div class="list-item"><div><div class="list-title">Medical horizon tightening</div><div class="list-meta">Cenk Tosun • renewal workflow</div></div><span class="badge ${cenkRenewalBooked ? "live" : "risk"}">${cenkRenewalBooked ? "Scheduled" : "Watch"}</span></div>
        </div>
      </div>
    </div>
  `;
}

function renderMatchingView() {
  const mission = matchingMissions[state.activeMission];
  const selectedRotation = getMissionRotation(mission);
  const selectedCandidateKey =
    selectedRotation.selectedCandidateKey || mission.selectedCandidateKey || (mission.key === "bremen" ? "hakan" : null);
  const rotationCandidates = sortCandidatesForFilter(
    selectedRotation.candidates || mission.candidates,
    selectedRotation.selectedFilter || selectedRotation.filters?.[0] || "Best Match",
    selectedCandidateKey
  );
  const summaryExpanded = selectedRotation.detailMode === "summary" && selectedRotation.expandedDetail;
  const missionRiskTone = mission.finalized ? "ready" : mission.key === "bremen" ? "ready" : "risk";
  const missionRiskLabel = mission.finalized ? "Finalized" : mission.key === "bremen" ? "Low Risk" : "Open Risk";

  matchingViewRoot.innerHTML = `
    <div class="detail-header">
      <div>
        <div class="eyebrow">Operations / Crew Change / ${mission.missionId}</div>
        <h3 class="headline" style="margin-top:10px;">${mission.vessel}</h3>
        <div class="detail-subline">${mission.role} • ${mission.port} • ${mission.embarkation}</div>
      </div>
      <div class="detail-actions">
        <button class="btn" data-nav="planning">Back to Planning</button>
        <button class="btn" data-action="save-assignment-draft" data-key="${mission.key}">${mission.draftSaved ? "Draft Saved" : "Save Draft"}</button>
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
          <span class="badge ${selectedRotation.status === "blocked" ? "blocked" : selectedRotation.status === "risk" ? "risk" : "ready"}">${selectedRotation.statusLabel || selectedRotation.readiness}</span>
        </div>
        <div class="rotation-list">
          ${mission.rotations
            .map(
              (rotation) => `
                <div class="rotation-card ${rotation.key === state.activeRotation ? "selected" : ""}" data-action="select-rotation" data-key="${rotation.key}">
                  <div style="flex:1; min-width:0;">
                    <div class="list-title">${rotation.title}</div>
                    <div class="list-meta">${rotation.current}</div>
                    <div class="candidate-tags" style="margin-top:10px;">
                      <span class="pill">Sign-off: ${rotation.signOff}</span>
                      <span class="pill">Sign-on: ${rotation.signOn}</span>
                    </div>
                  </div>
                  <div style="text-align:right;">
                    <div class="badge ${rotation.status === "risk" ? "risk" : rotation.status === "blocked" ? "blocked" : "live"}">${rotation.statusLabel}</div>
                    <div class="list-meta" style="margin-top:6px;">Ready ${rotation.readiness}</div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="card kpi-card--soft matching-note-card">
          <div class="eyebrow">Ready AI Recommendation</div>
          <p class="subcopy" style="margin-top:12px;">${selectedRotation.callout || mission.summary}</p>
        </div>
      </div>

      <div class="card pad-lg">
        <div class="card-header">
          <div>
            <div class="eyebrow">Task Owner</div>
            <div class="headline" style="font-size:18px; margin-top:8px;">${mission.owner}</div>
          </div>
          <span class="badge ${missionRiskTone}">${missionRiskLabel}</span>
        </div>
        <div class="list-stack">
          <div class="list-item">
            <div>
              <div class="eyebrow" style="letter-spacing:0.12em;">Assignment State</div>
              <div class="list-title" style="margin-top:8px;">${mission.finalized ? "Finalized" : mission.draftSaved ? "Draft saved" : "In review"}</div>
            </div>
          </div>
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

    ${
      selectedRotation.detailMode === "summary" && !summaryExpanded
        ? `
          <div class="card pad-lg">
            <div class="card-header">
              <div>
                <div class="eyebrow">Rotation Detail</div>
                <div class="headline" style="font-size:18px; margin-top:8px;">${selectedRotation.title}</div>
              </div>
            </div>
            <div class="card kpi-card--soft matching-note-card">
              <div class="eyebrow">Confirmed Rotation</div>
              <p class="subcopy" style="margin-top:12px;">${selectedRotation.callout}</p>
            </div>
            <div class="detail-actions" style="margin-top:16px;">
              <button class="btn" data-action="${selectedRotation.action}" data-key="${selectedRotation.key}">${selectedRotation.actionLabel}</button>
            </div>
          </div>
        `
        : selectedRotation.detailMode === "summary"
          ? `
            <div class="card pad-lg">
              <div class="card-header">
                <div>
                  <div class="eyebrow">Companion Rotation Detail</div>
                  <div class="headline" style="font-size:18px; margin-top:8px;">${selectedRotation.title}</div>
                </div>
                <span class="badge ${selectedRotation.confirmedCandidate?.tone || "ready"}">${selectedRotation.statusLabel}</span>
              </div>
              <div class="candidate-tags">
                ${(selectedRotation.requirements || []).map((item) => `<span class="pill">${item}</span>`).join("")}
              </div>
              <div class="card kpi-card--soft matching-note-card">
                <div class="candidate-head">
                  <div>
                    <div class="headline" style="font-size:16px;">${selectedRotation.confirmedCandidate?.name}</div>
                    <div class="subcopy">${selectedRotation.confirmedCandidate?.rank}</div>
                  </div>
                  <div class="candidate-score ${toneClass(selectedRotation.confirmedCandidate?.tone)}">${selectedRotation.confirmedCandidate?.readiness}%</div>
                </div>
                <div class="candidate-tags" style="margin-top:14px;">
                  ${(selectedRotation.confirmedCandidate?.tags || []).map((tag) => `<span class="pill">${tag}</span>`).join("")}
                </div>
                <p class="subcopy" style="margin-top:14px;">${selectedRotation.confirmedCandidate?.note}</p>
              </div>
              <div class="list-stack" style="margin-top:16px;">
                ${(selectedRotation.confirmedCandidate?.checks || [])
                  .map(
                    (item) => `
                      <div class="list-item">
                        <div>
                          <div class="list-title">${item}</div>
                          <div class="list-meta">${selectedRotation.signOn} • ${selectedRotation.eta}</div>
                        </div>
                        <span class="badge ready">Verified</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
              <div class="detail-actions" style="margin-top:16px;">
                <button class="btn" data-action="${selectedRotation.action}" data-key="${selectedRotation.key}">Collapse Detail</button>
                <button class="btn btn-primary" data-action="download-assignment-pack" data-key="${mission.key}">Download Pack</button>
              </div>
            </div>
          `
        : `
          <div class="card pad-lg">
            <div class="card-header">
              <div>
                <div class="eyebrow">Mission Requirements</div>
                <div class="headline" style="font-size:18px; margin-top:8px;">${selectedRotation.title}</div>
              </div>
            </div>
            <div class="candidate-tags">
              ${selectedRotation.requirements.map((item) => `<span class="pill">${item}</span>`).join("")}
            </div>
            <div class="candidate-tags" style="margin-top:16px;">
              ${selectedRotation.filters
                .map(
                  (item) => `
                    <button
                      class="pill ${item === (selectedRotation.selectedFilter || selectedRotation.filters[0]) ? "pill-strong" : ""}"
                      data-action="filter-matching"
                      data-key="${item}"
                    >
                      ${item}
                    </button>
                  `
                )
                .join("")}
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
              ${rotationCandidates
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

          ${
            selectedRotation.comparison
              ? `
                <div class="card table-card">
                  <div class="table-toolbar">
                    <div class="headline" style="font-size:18px;">Candidate Comparison</div>
                  </div>
                  <div class="table-wrap">
                    <table class="data-table">
                      <thead>
                        <tr>
                          <th>Requirement</th>
                          ${selectedRotation.comparison.headers.map((header) => `<th>${header}</th>`).join("")}
                        </tr>
                      </thead>
                      <tbody>
                        ${selectedRotation.comparison.rows
                          .map(
                            (row) => `
                              <tr>
                                <td>${row.label}</td>
                                ${row.cells.map((cell) => `<td class="text-${cell.tone}"><strong>${cell.value}</strong></td>`).join("")}
                              </tr>
                            `
                          )
                          .join("")}
                      </tbody>
                    </table>
                  </div>
                </div>
              `
              : ""
          }
        `
    }

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
  const snapshot = getVesselSnapshot(state.activeVessel);
  const openMissionAction = matchingMissions[vessel.key] ? "open-matching" : "show-future-mission";
  const secondaryAction = snapshot.tone === "blocked" ? "open-document-case" : snapshot.tone === "risk" ? "open-document-case" : "open-vessel-detail";
  const secondaryKey = snapshot.tone === "blocked" ? "rustu-tanker" : snapshot.tone === "risk" ? "seamanbook-emre" : vessel.key;
  const planningContextOpen = state.pendingPlanningContext === vessel.key;

  vesselDetailRoot.innerHTML = `
    <div class="detail-header">
      <div>
        <div class="eyebrow">Fleet / ${vessel.name}</div>
        <h3 class="headline" style="margin-top:10px;">Vessel Detail</h3>
        <div class="detail-subline">IMO ${vessel.imo} • Built ${vessel.built} • ${vessel.flag}</div>
      </div>
      <div class="detail-actions">
        <button class="btn" data-nav="fleet">Back to Fleet</button>
        <button class="btn" data-nav="routes-ports">Open Route Window</button>
        <button class="btn btn-primary" data-action="${openMissionAction}" data-key="${vessel.key}">${matchingMissions[vessel.key] ? "Open Crew Change" : "Open Planning Context"}</button>
      </div>
    </div>

    ${
      planningContextOpen
        ? `
          <div class="card pad-lg" style="margin-bottom:20px;">
            <div class="card-header">
              <div class="headline" style="font-size:18px;">Queued Planning Context</div>
              <span class="badge risk">Future Window</span>
            </div>
            <p class="subcopy">This vessel does not yet have an active Crew Change mission in the demo. The queued planning context is open so Operations can review route timing, onboard readiness and document exposure before promoting it into Crew Matching.</p>
            <div class="detail-actions" style="margin-top:16px;">
              <button class="btn" data-nav="planning">Back to Planning</button>
              <button class="btn btn-primary" data-nav="routes-ports">Review Port Window</button>
            </div>
          </div>
        `
        : ""
    }

    <div class="kpi-grid">
      <div class="kpi-card"><span class="kpi-label">Readiness</span><div class="kpi-value ${snapshot.tone === "blocked" ? "text-blocked" : snapshot.tone === "risk" ? "text-risk" : "text-ready"}">${snapshot.readiness}%</div><div class="kpi-meta">${snapshot.statusLabel}</div></div>
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
          <div class="list-item"><div><div class="list-title">Open change</div><div class="list-meta">${vessel.openChange}</div></div><button class="btn" data-action="${openMissionAction}" data-key="${vessel.key}">${matchingMissions[vessel.key] ? "Open" : "Queue"}</button></div>
          <div class="list-item"><div><div class="list-title">Current status</div><div class="list-meta">${snapshot.statusLabel} • ${snapshot.complianceLabel}</div></div><button class="btn" data-action="${secondaryAction}" data-key="${secondaryKey}">${snapshot.tone === "blocked" ? "Resolve" : snapshot.tone === "risk" ? "Review" : "Refresh"}</button></div>
          <div class="list-item"><div><div class="list-title">Next port event</div><div class="list-meta">${snapshot.embarkationWindow}</div></div><button class="btn" data-nav="routes-ports">Ports</button></div>
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
  const criticalCount = alertsData.filter((item) => item.severity === "blocked").length;
  const warningCount = alertsData.filter((item) => item.severity !== "blocked").length;
  alertsViewRoot.innerHTML = `
    <div class="kpi-grid">
      <div class="kpi-card"><span class="kpi-label">Critical Alerts</span><div class="kpi-value text-blocked">${criticalCount}</div><div class="kpi-meta">Needs action now</div></div>
      <div class="kpi-card"><span class="kpi-label">Expiring Documents</span><div class="kpi-value text-risk">${documentOpsState.kpis.expiring}</div><div class="kpi-meta">Top blocker source</div></div>
      <div class="kpi-card"><span class="kpi-label">Blocked Rotations</span><div class="kpi-value text-blocked">${alertsData.filter((item) => item.subject.includes("CC-")).length}</div><div class="kpi-meta">Active assignment exposure</div></div>
      <div class="kpi-card"><span class="kpi-label">Actionable Today</span><div class="kpi-value">${Math.max(1, criticalCount + warningCount - 1)}</div><div class="kpi-meta text-ready">Can be resolved today</div></div>
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
    { title: "Notification Mode", value: adminOpsState.notificationMode, meta: `${alertsData.length} alerts in active watch` },
  ];

  adminViewRoot.innerHTML = `
    <div class="kpi-grid">
      ${adminCardsView
        .map(
          (card, index) => `
            <div class="kpi-card ${state.activeAdminFocus === "user" && index === 1 ? "focus-card" : ""}">
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
          <div class="list-item"><div><div class="list-title">Notification routing</div><div class="list-meta">${adminOpsState.notificationMode}</div></div><button class="btn" data-action="admin-notifications">Manage</button></div>
          <div class="list-item"><div><div class="list-title">User access</div><div class="list-meta">${adminOpsState.userAccess}</div></div><button class="btn" data-action="admin-access">Review</button></div>
          <div class="list-item"><div><div class="list-title">Export policy</div><div class="list-meta">${adminOpsState.exportPolicy}</div></div><button class="btn" data-action="admin-exports">Review</button></div>
          <div class="list-item"><div><div class="list-title">Ready AI mode</div><div class="list-meta">${adminOpsState.readyAiMode}</div></div><button class="btn" data-action="ready-ai-settings">Cycle</button></div>
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

  syncCrewChangesOverview();
  syncCrewView();
  syncReportsView();
  syncFleetView();
  syncRoutesView();
}

function renderDynamicViews() {
  renderPlanningView();
  renderMatchingView();
  renderCrewProfileView();
  renderVesselDetailView();
  renderAlertsView();
  renderComplianceView();
  renderAdminView();
  syncDocumentsView();
  syncCrewChangesOverview();
  syncCrewView();
  syncReportsView();
  syncFleetView();
  syncRoutesView();
}

function setView(name) {
  if (!viewMeta[name]) return;

  state.activeView = name;
  if (name !== "admin") state.activeAdminFocus = null;

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
  persistAppState();
}

function executeSearch(rawQuery) {
  try {
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
        state.activeRotation = getDefaultRotationKey(state.activeMission);
        renderMatchingView();
        setView("matching");
        return;
      }

      renderVesselDetailView();
      setView("vessel-detail");
      return;
    }

    const missionMatch = planningMissions.find((mission) => mission.missionId.toLowerCase().includes(query));
    if (missionMatch) {
      if (matchingMissions[missionMatch.key]) {
        state.activeMission = missionMatch.key;
        state.activeRotation = getDefaultRotationKey(state.activeMission);
        renderMatchingView();
        setView("matching");
      } else {
        state.activeVessel = missionMatch.key;
        renderVesselDetailView();
        setView("vessel-detail");
      }
      return;
    }

    const documentMatch = Object.entries(documentCatalog).find(([, item]) => {
      const haystack = `${item.title} ${item.owner} ${item.vessel} ${item.type} ${item.summary}`.toLowerCase();
      return haystack.includes(query) || query.split(" ").every((term) => haystack.includes(term));
    });

    if (documentMatch) {
      setDocumentFocus(documentMatch[0], "open");
      setView("documents");
      syncDocumentsView();
      return;
    }

    const reportMatch = Object.keys(reportCatalog).find((reportKey) => {
      const haystack = `${reportCatalog[reportKey].title} ${reportCatalog[reportKey].summary}`.toLowerCase();
      return haystack.includes(query) || query.split(" ").every((term) => haystack.includes(term));
    });

    if (reportMatch) {
      state.reportsFilter = "all";
      setReportFocus(reportMatch, "open");
      setView("reports");
      syncReportsView();
      return;
    }

    const alertMatch = alertsData.find((alert) => {
      const haystack = `${alert.title} ${alert.subject}`.toLowerCase();
      return haystack.includes(query) || query.split(" ").every((term) => haystack.includes(term));
    });

    if (alertMatch) {
      setView("alerts");
      return;
    }

    const complianceRuleMatch = complianceRules.find((rule) => {
      const haystack = `${rule.name} ${rule.scope} ${rule.source} ${rule.note || ""}`.toLowerCase();
      return haystack.includes(query) || query.split(" ").every((term) => haystack.includes(term));
    });

    if (complianceRuleMatch) {
      state.activeComplianceTab = "rules";
      setView("compliance");
      renderComplianceView();
      return;
    }

    const complianceExceptionMatch = complianceExceptions.find((item) => {
      const haystack = `${item.title} ${item.meta} ${item.reason}`.toLowerCase();
      return haystack.includes(query) || query.split(" ").every((term) => haystack.includes(term));
    });

    if (complianceExceptionMatch) {
      state.activeComplianceTab = "exceptions";
      setView("compliance");
      renderComplianceView();
      return;
    }

    if (query.includes("marina") || query.includes("ops manager") || query.includes("workspace") || query.includes("access policy")) {
      setAdminFocus("user");
      setView("admin");
      renderAdminView();
      return;
    }

    if (query.includes("route") || query.includes("port") || query.includes("rotterdam") || query.includes("gibraltar")) {
      setView("routes-ports");
      return;
    }

    if (query.includes("report") || query.includes("brief") || query.includes("summary")) {
      setView("reports");
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

    if (query.includes("ai") || query.includes("copilot")) {
      setView("ready-ai");
      return;
    }

    showToast(`No exact match for "${rawQuery}" in the pilot dataset yet.`);
  } finally {
    persistAppState();
  }
}

function handleAction(action, key) {
  try {
    switch (action) {
    case "workspace-profile":
      setAdminFocus("user");
      setView("admin");
      renderAdminView();
      showToast("Workspace profile opened.");
      recordActivity("Workspace profile opened", "Marina Keskin");
      return;
    case "help-center":
      setView("ready-ai");
      pushUserQuestion("Show me the fastest workflows available in this module and what I can ask Ready AI.");
      recordActivity("Help center opened", "Guided help sent to Ready AI");
      renderAdminView();
      return;
    case "voice-input":
      {
        const sourceView = state.activeView;
        setView("ready-ai");
        pushUserQuestion(`Summarize the top operational issues for ${viewMeta[sourceView].title}.`);
      }
      showToast("Voice shortcut simulated and sent to Ready AI.");
      recordActivity("Voice shortcut used", "Ready AI");
      renderAdminView();
      return;
    case "ready-ai-settings":
      {
        const modes = ["Standard", "Concise", "Detailed"];
        const nextIndex = (modes.indexOf(adminOpsState.readyAiMode) + 1) % modes.length;
        adminOpsState.readyAiMode = modes[nextIndex];
      }
      showToast(`Ready AI mode set to ${adminOpsState.readyAiMode}.`);
      recordActivity("Ready AI settings reviewed", adminOpsState.readyAiMode);
      renderAdminView();
      return;
    case "filter-crew-changes": {
      const filterOrder = ["all", "actionable", "risk", "blocked"];
      const nextIndex = (filterOrder.indexOf(state.crewChangesFilter || "all") + 1) % filterOrder.length;
      state.crewChangesFilter = filterOrder[nextIndex];
      syncCrewChangesOverview();
      const labelMap = {
        all: "all active rows",
        actionable: "actionable rotations",
        risk: "at-risk rotations",
        blocked: "blocked rotations",
      };
      showToast(`Crew Changes filtered to ${labelMap[state.crewChangesFilter]}.`);
      return;
    }
    case "filter-fleet":
      {
        const filterOrder = ["all", "ready", "risk", "blocked"];
        const nextIndex = (filterOrder.indexOf(state.fleetFilter || "all") + 1) % filterOrder.length;
        state.fleetFilter = filterOrder[nextIndex];
        syncFleetView();
        const labelMap = {
          all: "all vessels",
          ready: "ready vessels",
          risk: "at-risk vessels",
          blocked: "blocked vessels",
        };
        showToast(`Fleet filtered to ${labelMap[state.fleetFilter]}.`);
      }
      return;
    case "filter-routes":
      {
        const filterOrder = ["all", "active", "risk", "blocked"];
        const nextIndex = (filterOrder.indexOf(state.routesFilter || "all") + 1) % filterOrder.length;
        state.routesFilter = filterOrder[nextIndex];
        syncRoutesView();
        const labelMap = {
          all: "all route windows",
          active: "stable route windows",
          risk: "at-risk route windows",
          blocked: "blocked route windows",
        };
        showToast(`Routes filtered to ${labelMap[state.routesFilter]}.`);
      }
      return;
      return;
    case "filter-reports": {
      const filterOrder = ["all", "daily", "weekly", "attention"];
      const nextIndex = (filterOrder.indexOf(state.reportsFilter || "all") + 1) % filterOrder.length;
      state.reportsFilter = filterOrder[nextIndex];
      syncReportsView();
      const labelMap = {
        all: "all reports",
        daily: "daily reports",
        weekly: "weekly reports",
        attention: "reports needing attention",
      };
      showToast(`Reports filtered to ${labelMap[state.reportsFilter]}.`);
      return;
    }
    case "filter-crew": {
      const filterOrder = ["all", "ready", "risk", "blocked"];
      const nextIndex = (filterOrder.indexOf(state.crewFilter || "all") + 1) % filterOrder.length;
      state.crewFilter = filterOrder[nextIndex];
      syncCrewView();
      const labelMap = {
        all: "all crew rows",
        ready: "ready crew",
        risk: "at-risk crew",
        blocked: "blocked crew",
      };
      showToast(`Crew filtered to ${labelMap[state.crewFilter]}.`);
      return;
    }
    case "filter-planning": {
      const filterOrder = ["all", "active", "risk", "queued"];
      const nextIndex = (filterOrder.indexOf(state.planningFilter || "all") + 1) % filterOrder.length;
      state.planningFilter = filterOrder[nextIndex];
      renderPlanningView();
      const labelMap = {
        all: "all missions",
        active: "active matching missions",
        risk: "risk and blocked missions",
        queued: "queued missions only",
      };
      showToast(`Planning filtered to ${labelMap[state.planningFilter]}.`);
      return;
    }
    case "filter-matching": {
      const mission = matchingMissions[state.activeMission];
      const rotation = getMissionRotation(mission);
      rotation.selectedFilter = key;
      renderMatchingView();
      showToast(`Candidate stack sorted by ${key}.`);
      return;
    }
    case "export-crew-changes":
      {
        const artifact = buildModuleExportArtifact("crew-changes");
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Crew change export queued";
      syncReportsView();
      showToast("Crew Rotation Manifest.csv downloaded.");
      recordActivity("Crew Changes export queued", "Crew Rotation Manifest.csv");
      renderAdminView();
      return;
    case "export-crew":
      {
        const artifact = buildModuleExportArtifact("crew");
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Crew export queued";
      syncReportsView();
      showToast("Crew Readiness Manifest.csv downloaded.");
      recordActivity("Crew export queued", "Crew Readiness Manifest.csv");
      renderAdminView();
      return;
    case "export-documents":
      {
        const artifact = buildModuleExportArtifact("documents");
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Documents export queued";
      syncReportsView();
      showToast("Document Readiness Manifest.csv downloaded.");
      recordActivity("Documents export queued", "Document Readiness Manifest.csv");
      renderAdminView();
      return;
    case "export-fleet":
      {
        const artifact = buildModuleExportArtifact("fleet");
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Fleet export queued";
      syncReportsView();
      showToast("Fleet Readiness Matrix.csv downloaded.");
      recordActivity("Fleet export queued", "Fleet Readiness Matrix.csv");
      renderAdminView();
      return;
    case "export-routes":
      {
        const artifact = buildModuleExportArtifact("routes");
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Route export queued";
      syncReportsView();
      showToast("Route & Port Manifest.csv downloaded.");
      recordActivity("Route export queued", "Route & Port Manifest.csv");
      renderAdminView();
      return;
    case "export-planning":
      {
        const artifact = buildModuleExportArtifact("planning");
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Planning export queued";
      syncReportsView();
      showToast("30-Day Crew Change Plan artifact downloaded.");
      recordActivity("Planning export queued", "30-Day Crew Change Plan.pdf");
      renderAdminView();
      return;
    case "show-future-mission":
      state.pendingPlanningContext = key;
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
      state.activeRotation = getDefaultRotationKey(state.activeMission);
      renderMatchingView();
      setView("matching");
      return;
    case "switch-mission":
      state.activeMission = key;
      state.activeRotation = getDefaultRotationKey(state.activeMission);
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
        syncDocumentsView();
        if (state.activeView === "crew-profile") renderCrewProfileView();
        showToast(`${candidate.name} assigned to ${matchingMissions[state.activeMission].missionId} — Ready Check triggered.`);
      }
      return;
    }
    case "save-assignment-draft": {
      const mission = saveMissionDraft(key);
      if (mission) {
        renderPlanningView();
        renderMatchingView();
        renderAdminView();
        showToast(`${mission.missionId} saved as draft.`);
      }
      return;
    }
    case "request-docs": {
      const mission = matchingMissions[state.activeMission];
      const candidate = findMissionCandidate(mission, key);
      if (candidate) {
        candidate.action = candidate.action === "request-docs" ? "open-crew-profile" : candidate.action;
        candidate.actionLabel = candidate.actionLabel === "Request Docs" ? "Docs Requested" : candidate.actionLabel;
        candidate.secondaryLabel = candidate.secondaryLabel === "Request Docs" ? "Docs Requested" : candidate.secondaryLabel;
        candidate.note = `${candidate.note} Document request sent to close the missing file pack.`;

        if (candidate.profileKey) {
          addProfileTimelineEntry(candidate.profileKey, "Document pack requested", `${mission.missionId} · Crew Matching`);
          addProfileNote(candidate.profileKey, `Document request sent during ${mission.missionId} review.`);
        }

        if (candidate.profileKey === "nihat") {
          setDocumentRowState("flag-endorsement-nihat", {
            verification: { label: "Queued", tone: "live" },
            risk: { label: "Medium", tone: "risk" },
            status: { label: "Pending review", tone: "live" },
            action: { label: "Open", action: "review-document", key: "flag-endorsement-elena" },
          });
        }

        if (candidate.profileKey === "emre") {
          setDocumentRowState("seamanbook-emre", {
            verification: { label: "Requested", tone: "risk" },
            risk: { label: "Medium", tone: "risk" },
            status: { label: "Pending owner", tone: "risk" },
            action: { label: "Review", action: "review-document", key: "seamanbook-emre" },
          });
        }
      }
      showToast("Missing documents requested from candidate.");
      recordActivity("Candidate documents requested", `${candidate?.name || key} · Crew Matching`);
      renderMatchingView();
      renderAdminView();
      syncDocumentsView();
      if (state.activeView === "crew-profile") renderCrewProfileView();
      return;
    }
    case "request-promotion": {
      const mission = matchingMissions[state.activeMission];
      const candidate = findMissionCandidate(mission, key);
      if (candidate) {
        candidate.action = "open-crew-profile";
        candidate.actionLabel = "Promotion Requested";
        candidate.note = `${candidate.note} Promotion approval request has been sent to the Technical Manager and remains open.`;
        if (candidate.profileKey) {
          addProfileTimelineEntry(candidate.profileKey, "Promotion approval requested", `${mission.missionId} · Technical Manager`);
          addProfileNote(candidate.profileKey, `Promotion approval opened from ${mission.missionId}.`);
        }
        ensureComplianceException({
          key: `${candidate.profileKey || candidate.key}-promotion`,
          title: `Promotion review — ${candidate.name}`,
          status: "Pending approval",
          tone: "risk",
          meta: `Requested by: Marina Keskin · Mission: ${mission.missionId} — ${mission.vessel}`,
          reason: `Temporary promotion approval is being reviewed so ${candidate.name} can remain in the active candidate set for ${mission.role}.`,
          primaryAction: "approve-exception",
          primaryLabel: "Approve",
          secondaryAction: "decline-exception",
          secondaryLabel: "Decline",
        });
      }
      mission.draftSaved = false;
      showToast("Promotion approval request sent to Technical Manager.");
      recordActivity("Promotion approval requested", `${candidate?.name || key} · Technical review`);
      renderMatchingView();
      renderComplianceView();
      renderAdminView();
      return;
    }
    case "run-ready-check": {
      const profile = profileData[key];
      if (profile) {
        addProfileTimelineEntry(key, "Ready Check re-run", "Crew Profile");
        addProfileNote(key, "Ready Check executed with no new blockers detected.");
        reportOpsState.rows["weekly-readiness"].lastRun = "Today 14:20";
        reportOpsState.rows["weekly-readiness"].status = { label: "Ready", tone: "ready" };
        syncReportsView();
        showToast(`Ready Check re-run for ${profile.name}.`);
        recordActivity("Ready Check re-run", profile.name);
        renderAdminView();
        if (state.activeView === "crew-profile") renderCrewProfileView();
      }
      return;
    }
    case "upload-document": {
      const profile = profileData[key];
      if (profile) {
        pendingUploadProfileKey = key;
        if (fileUploadInput) {
          fileUploadInput.value = "";
          fileUploadInput.click();
        } else {
          showToast("Upload control is not available in this browser.");
        }
      }
      return;
    }
    case "generate-compliance-report": {
      const profile = profileData[key];
      if (profile) {
        state.reportsFilter = "all";
        setReportFocus("compliance-exceptions", "generate");
        setView("reports");
        reportOpsState.generatedCount += 1;
        reportOpsState.generatedMeta = "Compliance export queued";
        reportOpsState.rows["compliance-exceptions"].lastRun = "Today 14:20";
        syncReportsView();
        showToast(`Generating compliance report for ${profile.name}...`);
        recordActivity("Compliance report generated", profile.name);
        renderAdminView();
      }
      return;
    }
    case "open-crew-profile":
      if (profileData[key] || findMissionCandidate(matchingMissions[state.activeMission], key)?.profileKey) {
        state.activeProfile = profileData[key] ? key : findMissionCandidate(matchingMissions[state.activeMission], key).profileKey;
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
        state.pendingPlanningContext = null;
        state.activeVessel = key;
        renderVesselDetailView();
        setView("vessel-detail");
      }
      return;
    case "view-document":
      setDocumentFocus(key, "open");
      setView("documents");
      syncDocumentsView();
      {
        const preview = buildDocumentPreview(key);
        if (preview) openArtifactPreview(preview.content, preview.mime, preview.title);
      }
      showToast(`${documentNames[key] || key} preview opened.`);
      recordActivity("Document opened", documentNames[key] || key);
      renderAdminView();
      return;
    case "renew-document":
      if (key === "medical-cenk") {
        setDocumentRowState("medical-cenk", {
          verification: { label: "Scheduled", tone: "live" },
          risk: { label: "Low", tone: "ready" },
          status: { label: "Renewal booked", tone: "live" },
          action: { label: "Review", action: "review-document", key: "medical-cenk" },
        });
        addProfileTimelineEntry("cenk", "Medical renewal booked", "Documents module");
      }
      setDocumentFocus(key, "renew");
      setView("documents");
      showToast(`Renewal task created for ${documentNames[key] || key}.`);
      recordActivity("Renewal task created", documentNames[key] || key);
      syncDocumentsView();
      renderAdminView();
      return;
    case "request-document":
      if (key === "seamanbook-emre") {
        setDocumentRowState("seamanbook-emre", {
          verification: { label: "Requested", tone: "risk" },
          risk: { label: "Medium", tone: "risk" },
          status: { label: "Pending owner", tone: "risk" },
          action: { label: "Review", action: "review-document", key: "seamanbook-emre" },
        });
        addProfileTimelineEntry("emre", "Seaman Book requested", "Documents module");
      }
      setDocumentFocus(key, "request");
      setView("documents");
      showToast(`Document request sent for ${documentNames[key] || key}.`);
      recordActivity("Document request sent", documentNames[key] || key);
      syncDocumentsView();
      renderAdminView();
      return;
    case "review-document":
      if (key === "flag-endorsement-elena") {
        setDocumentRowState("flag-endorsement-nihat", {
          verification: { label: "Reviewed", tone: "ready" },
          risk: { label: "Low", tone: "ready" },
          status: { label: "Cleared", tone: "ready" },
          action: { label: "View", action: "view-document", key: "flag-endorsement-elena" },
        });
        addProfileTimelineEntry("nihat", "Flag endorsement reviewed", "Documents module");
      }
      if (key === "visa-ferdi") {
        setDocumentRowState("visa-ferdi", {
          verification: { label: "Reviewed", tone: "live" },
          risk: { label: "Medium", tone: "risk" },
          status: { label: "Awaiting clearance", tone: "risk" },
          action: { label: "Resolve", action: "open-matching", key: "stuttgart" },
        });
        addProfileTimelineEntry("ferdi", "Visa pack reviewed", "Documents module");
      }
      setDocumentFocus(key, "review");
      setView("documents");
      showToast(`Review task opened for ${documentNames[key] || key}.`);
      recordActivity("Document review opened", documentNames[key] || key);
      syncDocumentsView();
      renderAdminView();
      return;
    case "open-document-case":
      setDocumentFocus(key, "review");
      setView("documents");
      syncDocumentsView();
      showToast("Opened linked document blocker in Documents.");
      recordActivity("Document blocker opened", key);
      renderAdminView();
      return;
    case "bulk-validate":
      setDocumentFocus("bulk-validate", "bulk-validate");
      setView("documents");
      showToast("Bulk validation started for 16 pending records.");
      recordActivity("Bulk validation started", "16 pending records");
      documentOpsState.kpis.pending = 14;
      documentOpsState.kpis.pendingMeta = "Validation running";
      syncDocumentsView();
      renderAdminView();
      return;
    case "show-roster-scope":
      state.crewFilter = "all";
      setView("crew");
      syncCrewView();
      showToast("Crew roster opened on the original operational sample set.");
      recordActivity("Crew roster scope opened", "Crew module");
      renderAdminView();
      return;
    case "show-document-scope":
      setDocumentFocus(null);
      setView("documents");
      syncDocumentsView();
      showToast("Documents opened on the operational sample set.");
      recordActivity("Document scope opened", "Documents module");
      renderAdminView();
      return;
    case "finalize-assignment": {
      const missionContext = matchingMissions[key];
      const actionRotation = missionContext ? getActionRotation(missionContext) : null;
      const selectedCandidateKey = actionRotation?.selectedCandidateKey || missionContext?.selectedCandidateKey;
      if (!missionContext || !selectedCandidateKey) {
        showToast("Select a candidate before finalizing this assignment.");
        return;
      }
      const mission = finalizeMission(key);
      if (mission) {
        resolveAlert(`${key}-candidate`, `Alert resolved for ${mission.missionId}`, "Candidate gap closed");
        renderPlanningView();
        renderMatchingView();
        renderAlertsView();
        renderAdminView();
        syncDocumentsView();
        if (state.activeView === "crew-profile") renderCrewProfileView();
        showToast(`${mission.missionId} finalized and operational handover pack queued.`);
      }
      return;
    }
    case "open-secondary-rotation":
      {
        const mission = matchingMissions[state.activeMission];
        const rotation = mission?.rotations.find((item) => item.key === key);
        if (!rotation) return;
        state.activeRotation = key;
        rotation.expandedDetail = !rotation.expandedDetail;
        renderMatchingView();
        showToast(rotation.expandedDetail ? "Companion rotation detail opened." : "Companion rotation detail collapsed.");
        recordActivity("Companion rotation reviewed", `${state.activeMission} · ${key}`);
      }
      renderAdminView();
      return;
    case "download-assignment-pack": {
      const mission = matchingMissions[key];
      if (mission) {
        const artifact = buildAssignmentPackArtifact(key);
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
        showToast(`${mission.missionId} assignment pack downloaded.`);
        recordActivity("Assignment pack downloaded", mission.missionId);
        renderAdminView();
      }
      return;
    }
    case "renew-alert":
      if (key === "emre-passport") {
        setDocumentRowState("seamanbook-emre", {
          verification: { label: "Requested", tone: "risk" },
          risk: { label: "Medium", tone: "risk" },
          status: { label: "Pending owner", tone: "risk" },
          action: { label: "Review", action: "review-document", key: "seamanbook-emre" },
        });
        addProfileTimelineEntry("emre", "Travel document renewal opened", "Alerts module");
        addProfileNote("emre", "Travel renewal task opened from Alerts.");
      }
      if (key === "rustu-tanker") {
        addProfileTimelineEntry("rustu", "Advanced Oil Tanker renewal opened", "Alerts module");
        addProfileNote("rustu", "Renewal task opened from Alerts.");
      }
      setDocumentFocus(key, "renew");
      if (resolveAlert(key, "Renewal task created from Alerts", key)) {
        renderAlertsView();
        renderAdminView();
        syncDocumentsView();
        syncCrewView();
        syncReportsView();
      }
      showToast("Renewal task created from Alerts.");
      return;
    case "schedule-alert":
      if (key === "cenk-medical") {
        setDocumentRowState("medical-cenk", {
          verification: { label: "Scheduled", tone: "live" },
          risk: { label: "Low", tone: "ready" },
          status: { label: "Renewal booked", tone: "live" },
          action: { label: "Review", action: "review-document", key: "medical-cenk" },
        });
        addProfileTimelineEntry("cenk", "Medical renewal booked", "Alerts module");
      }
      setDocumentFocus(key, "renew");
      if (resolveAlert(key, "Medical exam scheduled from Alerts", key)) {
        renderAlertsView();
        renderAdminView();
        syncDocumentsView();
        syncCrewView();
        syncReportsView();
      }
      showToast("Medical exam scheduled from Alerts.");
      return;
    case "find-alert":
      state.activeMission = "stuttgart";
      state.activeRotation = getDefaultRotationKey(state.activeMission);
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
      if (updateComplianceException(key, "Approved", "ready", "Approved by: Marina Keskin · 20 Jul 2026")) {
        const exception = complianceExceptions.find((item) => item.key === key);
        complianceAudit.unshift({
          time: "20 Jul · 14:20",
          action: `${exception?.title || key} approved`,
          who: "Marina Keskin · Compliance",
        });
        recordActivity("Compliance exception approved", exception?.title || key);
        if (key === "ferdi-promotion") {
          const mission = matchingMissions.stuttgart;
          const candidate = mission.candidates.find((item) => item.profileKey === "ferdi");
          if (candidate) {
            candidate.note = `${candidate.note} Promotion approval is now cleared by Compliance.`;
            candidate.action = "select-candidate";
            candidate.actionLabel = "Select Candidate";
            candidate.tone = "ready";
            candidate.readiness = 93;
          }
          addProfileTimelineEntry("ferdi", "Promotion approved", "Compliance");
          addProfileNote("ferdi", "Promotion approval cleared by Compliance.");
          setDocumentRowState("visa-ferdi", {
            verification: { label: "Reviewed", tone: "live" },
            risk: { label: "Low", tone: "ready" },
            status: { label: "Promotion cleared", tone: "live" },
            action: { label: "Resolve", action: "open-matching", key: "stuttgart" },
          });
          renderMatchingView();
          syncDocumentsView();
        }
        if (key === "nihat-medical") {
          const candidate = matchingMissions.bremen.candidates.find((item) => item.profileKey === "nihat");
          if (candidate) {
            candidate.note = `${candidate.note} Medical exception approval recorded in Compliance.`;
            candidate.tone = "ready";
            candidate.readiness = Math.max(candidate.readiness, 96);
          }
          addProfileTimelineEntry("nihat", "Medical exception approved", "Compliance");
          addProfileNote("nihat", "Medical exception approved for assignment review.");
          renderMatchingView();
        }
        renderComplianceView();
        renderAdminView();
        syncCrewView();
        syncReportsView();
      }
      showToast("Exception approved — Ready Check re-run queued.");
      return;
    case "decline-exception":
      if (updateComplianceException(key, "Declined", "blocked", "Declined by: Marina Keskin · 20 Jul 2026")) {
        const exception = complianceExceptions.find((item) => item.key === key);
        complianceAudit.unshift({
          time: "20 Jul · 14:20",
          action: `${exception?.title || key} declined`,
          who: "Marina Keskin · Compliance",
        });
        recordActivity("Compliance exception declined", exception?.title || key);
        if (key === "ferdi-promotion") {
          addProfileTimelineEntry("ferdi", "Promotion declined", "Compliance");
          addProfileNote("ferdi", "Promotion approval was declined.");
          renderMatchingView();
        }
        if (key === "nihat-medical") {
          addProfileTimelineEntry("nihat", "Medical exception declined", "Compliance");
          addProfileNote("nihat", "Medical exception declined; backup remains under review.");
          renderMatchingView();
        }
        renderComplianceView();
        renderAdminView();
        syncReportsView();
      }
      showToast("Exception declined — backup candidate remains under watch.");
      return;
    case "new-rule":
      if (!complianceRules.find((rule) => rule.key === "temporary-visa-horizon")) {
        complianceRules.unshift({
          key: "temporary-visa-horizon",
          name: "Visa validity must cover embarkation window + 14 days",
          scope: "Travel readiness",
          source: "Pilot policy draft",
          updated: "21 Jul 2026",
          enabled: false,
          note: "Draft rule created from Administration for pilot review.",
        });
        state.rules["temporary-visa-horizon"] = false;
      }
      renderComplianceView();
      showToast("Draft rule created in Compliance.");
      recordActivity("Draft rule created", "Visa validity horizon");
      renderAdminView();
      return;
    case "new-report":
      state.reportsFilter = "all";
      setReportFocus("builder", "build");
      setView("reports");
      {
        const artifact = buildReportBuilderArtifact();
        triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Builder session opened";
      syncReportsView();
      showToast("Report builder template downloaded.");
      recordActivity("Report builder opened", "Reports");
      renderAdminView();
      return;
    case "open-report":
      state.reportsFilter = "all";
      setReportFocus(key, "open");
      setView("reports");
      if (reportOpsState.rows[key]) {
        reportOpsState.rows[key].lastRun = "Today 14:20";
        reportOpsState.rows[key].status = { label: "Ready", tone: "ready" };
        reportOpsState.rows[key].action = { label: "Open", type: "open-report", key };
        syncReportsView();
      }
      {
        const preview = buildReportPreview(key);
        if (preview) openArtifactPreview(preview.content, preview.mime, preview.title);
      }
      showToast(`${reportFiles[key] || "selected report"} preview opened.`);
      recordActivity("Report opened", reportFiles[key] || "selected report");
      renderAdminView();
      return;
    case "generate-report":
      state.reportsFilter = "all";
      setReportFocus(key, "generate");
      setView("reports");
      if (reportOpsState.rows[key]) {
        reportOpsState.rows[key].lastRun = "Today 14:20";
        reportOpsState.rows[key].status = { label: "Ready", tone: "ready" };
        reportOpsState.rows[key].action = { label: "Open", type: "open-report", key };
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = "Updated just now";
      syncReportsView();
      {
        const preview = buildReportPreview(key);
        if (preview) triggerArtifactDownload(preview.filename, preview.content, preview.mime);
      }
      showToast(`${reportFiles[key] || "selected report"} generated and downloaded.`);
      recordActivity("Report generated", reportFiles[key] || "selected report");
      renderAdminView();
      return;
    case "export-brief":
      state.reportsFilter = "all";
      setReportFocus(key, "export");
      {
        const artifact = buildBriefExportArtifact(key);
        if (artifact) triggerArtifactDownload(artifact.filename, artifact.content, artifact.mime);
      }
      reportOpsState.generatedCount += 1;
      reportOpsState.generatedMeta = `Last export: ${reportFiles[key] || "brief"}`;
      syncReportsView();
      showToast(`${reportFiles[key] || "brief"} downloaded.`);
      recordActivity("Brief exported", reportFiles[key] || "brief");
      renderAdminView();
      return;
    case "admin-notifications":
      {
        const modes = ["Critical only", "Priority and critical", "All operational updates"];
        const nextIndex = (modes.indexOf(adminOpsState.notificationMode) + 1) % modes.length;
        adminOpsState.notificationMode = modes[nextIndex];
      }
      showToast(`Notification mode updated to ${adminOpsState.notificationMode}.`);
      recordActivity("Notification routing reviewed", adminOpsState.notificationMode);
      renderAdminView();
      return;
    case "admin-access":
      {
        const states = ["8 pilot users", "8 reviewed / 1 pending", "9 pilot users"];
        const nextIndex = (states.indexOf(adminOpsState.userAccess) + 1) % states.length;
        adminOpsState.userAccess = states[nextIndex];
      }
      showToast(`User access updated to ${adminOpsState.userAccess}.`);
      recordActivity("User access reviewed", adminOpsState.userAccess);
      renderAdminView();
      return;
    case "admin-exports":
      {
        const policies = ["PDF and CSV enabled", "PDF only", "Restricted exports"];
        const nextIndex = (policies.indexOf(adminOpsState.exportPolicy) + 1) % policies.length;
        adminOpsState.exportPolicy = policies[nextIndex];
      }
      showToast(`Export policy updated to ${adminOpsState.exportPolicy}.`);
      recordActivity("Export policy reviewed", adminOpsState.exportPolicy);
      renderAdminView();
      return;
      default:
        return;
    }
  } finally {
    persistAppState();
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
    if (navTrigger.id === "report-compliance-exceptions-action") {
      setDocumentFocus("compliance-exceptions", "review");
    }
    setView(navTrigger.dataset.nav);
    if (navTrigger.dataset.nav === "documents") syncDocumentsView();
    if (navTrigger.dataset.nav === "reports") syncReportsView();
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

if (fileUploadInput) {
  fileUploadInput.addEventListener("change", () => {
    const selectedFile = fileUploadInput.files?.[0];
    const profileKey = pendingUploadProfileKey;
    pendingUploadProfileKey = null;
    if (!selectedFile || !profileKey || !profileData[profileKey]) return;

    const profile = profileData[profileKey];
    const uploadedName = selectedFile.name || `Upload_${profile.name.replace(/[^a-z0-9]+/gi, "_")}.pdf`;

    documentOpsState.kpis.pending += 1;
    documentOpsState.kpis.pendingMeta = "New upload pending validation";
    profile.documents.unshift({
      name: uploadedName,
      meta: "Pending validation",
      status: "Watch",
    });

    addProfileTimelineEntry(profileKey, `Document uploaded: ${uploadedName}`, "Crew Profile");
    addProfileNote(profileKey, `${uploadedName} uploaded on Tuesday, July 21, 2026 and queued for validation.`);
    setDocumentFocus("bulk-validate", "request");
    setView("documents");
    syncDocumentsView();
    renderAdminView();
    renderCrewProfileView();
    showToast(`${uploadedName} uploaded and queued for validation.`);
    recordActivity("Document uploaded", `${profile.name} · ${uploadedName}`);
    persistAppState();
  });
}

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

restorePersistedState();
renderDynamicViews();
renderThreads();

const initialView = new URLSearchParams(window.location.search).get("view");
setView(initialView && viewMeta[initialView] ? initialView : state.activeView || "command-center");
