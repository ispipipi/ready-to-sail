const viewMeta = {
  "command-center": {
    title: "Command Center",
    search: "Search fleet or crew...",
    footerLeft: ["UTC 09:12", "Data integrity 100%", "FleetOps sync active"],
    footerRight: ["Encrypted workspace"],
  },
  "crew-changes": {
    title: "Crew Changes",
    search: "Search crew changes, vessels or ports...",
    footerLeft: ["All times displayed in UTC", "Data integrity 100%", "Last data sync: 14:02 UTC"],
    footerRight: ["Encrypted workspace", "v2.4.1"],
  },
  crew: {
    title: "Crew",
    search: "Search crew, rank, vessel or location...",
    footerLeft: ["All times displayed in UTC", "Data integrity 100%", "CrewOps sync active"],
    footerRight: ["Encrypted workspace", "v2.4.1"],
  },
  documents: {
    title: "Documents",
    search: "Search documents, vessels, crew or compliance...",
    footerLeft: ["UTC 14:22:10", "Data integrity 100%", "DocOps sync active"],
    footerRight: ["Encrypted workspace"],
  },
  fleet: {
    title: "Fleet",
    search: "Search vessels, routes or compliance...",
    footerLeft: ["All times displayed in UTC", "Data integrity 100%", "FleetOps sync active"],
    footerRight: ["Encrypted workspace"],
  },
  "routes-ports": {
    title: "Routes & Ports",
    search: "Search routes, ports, vessels or crew...",
    footerLeft: ["All times displayed in UTC", "Data integrity 100%", "RouteOps sync active"],
    footerRight: ["Encrypted workspace", "v2.4.1-stable"],
  },
  reports: {
    title: "Reports",
    search: "Search reports, vessels, crew or compliance...",
    footerLeft: ["All times displayed in UTC", "Data integrity 100%", "ReportOps sync active"],
    footerRight: ["Encrypted workspace"],
  },
  "ready-ai": {
    title: "Ready AI",
    search: "Search briefs, blockers, vessels or crew...",
    footerLeft: ["Operational copilot workspace", "Data integrity 100%", "Ready AI sync active"],
    footerRight: ["Encrypted workspace"],
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
    copy: "This module concentrates the active crew rotation manifest, readiness %, urgency, flights and visa preparation for current changes.",
    prompts: [
      "Which crew change needs action first?",
      "Who can cover the Bremen gap?",
      "Which rotations are blocked by documents?",
      "Show flight and visa issues together",
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
  "ready-ai": {
    label: "Workspace Context",
    title: "Cross-module operational copilot",
    copy: "This chat can answer across crew readiness, crew changes, documents, fleet, routes & ports and reports using the current prototype dataset.",
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

let toastTimer;
let activeView = "command-center";
let chatHistory = [
  {
    role: "ai",
    text: "I can answer questions about crew readiness, crew changes, documents, fleet risk, routes & ports and reports using the current prototype data.",
    meta: "Ready AI • System overview",
  },
  {
    role: "ai",
    text: "Current headline: 162 crew are ready, 18 are at risk, 6 are blocked, and 2 decisions require action today.",
    meta: "Ready AI • Current system snapshot",
  },
];

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

function setView(name) {
  if (!viewMeta[name]) return;

  activeView = name;

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `view-${name}`);
  });

  document.querySelectorAll(".navitem").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === name);
  });

  const meta = viewMeta[name];
  const profile = copilotProfiles[name];
  topbarTitle.textContent = meta.title;
  topbarSearch.placeholder = meta.search;
  renderStatusRow(statusLeft, meta.footerLeft);
  renderStatusRow(statusRight, meta.footerRight);

  copilotContextLabel.textContent = profile.label;
  copilotContextTitle.textContent = profile.title;
  copilotContextCopy.textContent = profile.copy;
  renderCopilotPrompts(profile.prompts);
  renderThreads();

  const input = document.getElementById("copilot-chat-input");
  if (input) {
    input.placeholder = `Ask Ready AI about ${meta.title.toLowerCase()}...`;
  }

  const url = new URL(window.location.href);
  url.searchParams.set("view", name);
  history.replaceState({}, "", url);
  window.scrollTo({ top: 0, behavior: "auto" });
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

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}

function buildAnswer(question, viewName) {
  const text = question.toLowerCase();

  if (text.includes("bremen") || text.includes("chief officer") || text.includes("cover the gap") || text.includes("replace")) {
    return "For MT Scot Bremen, the strongest immediate option remains <strong>Hakan Çalhanoğlu</strong>. He is at 99% readiness, his medical, passport and seaman book are valid, and he already has prior vessel experience on MT Scot Bremen. Nihat Kahveci is the backup at 95%, but his medical horizon is tighter.";
  }

  if (text.includes("document") || text.includes("certificate") || text.includes("medical") || text.includes("visa") || text.includes("expiry") || text.includes("expiring")) {
    return "The document stack shows <strong>24 expiring soon</strong>, <strong>9 missing</strong> and <strong>16 pending review</strong>. The highest-impact blockers are missing STCW records, pending medical clearance and visa approvals that directly affect MT Northern Star, LPG Navigator and Polar Sirius.";
  }

  if (text.includes("blocked") || text.includes("blocker") || text.includes("why") && text.includes("blocked")) {
    return "The current blocked stack is led by <strong>STCW certifications (6)</strong>, <strong>medical clearances (5)</strong>, <strong>visa approvals (3)</strong> and <strong>contracting issues (2)</strong>. Operationally, the most urgent blocked cases are MT Northern Star and Polar Sirius.";
  }

  if (text.includes("fleet") || text.includes("vessel") || text.includes("risk")) {
    return "Fleet risk is concentrated in <strong>MT Northern Star</strong> and <strong>Polar Sirius</strong>. Northern Star is at 64% with a medical block affecting crew readiness, while Polar Sirius is at 48% and blocked by missing STCW certifications. MT Scot Bremen remains the healthiest vessel in the sample at 92%.";
  }

  if (text.includes("route") || text.includes("port") || text.includes("window") || text.includes("eta") || text.includes("arrival")) {
    return "RouteOps currently tracks <strong>8 active routes</strong>, <strong>14 port calls this week</strong>, <strong>3 at-risk windows</strong> and <strong>2 delayed events</strong>. The most sensitive window is Rotterdam ahead of MT Scot Bremen, while Gibraltar and Singapore show the highest operational friction.";
  }

  if (text.includes("report") || text.includes("brief") || text.includes("summary") || text.includes("executive")) {
    return `Executive summary: <strong>${systemDataNotes.readyCount} ready</strong>, <strong>${systemDataNotes.atRiskCount} at risk</strong>, <strong>${systemDataNotes.blockedCount} blocked</strong>, and <strong>${systemDataNotes.actionsToday} decisions</strong> requiring action today. Priority remains on MT Scot Bremen, MT Northern Star and document blockers linked to active crew changes.`;
  }

  if (text.includes("who is ready") || text.includes("ready to embark") || text.includes("available")) {
    return "The strongest ready-to-embark sample candidates are <strong>Hakan Çalhanoğlu</strong> (99%), <strong>Nihat Kahveci</strong> (95%), and multiple available deck and engineering profiles shown in Crew. Overall, the prototype currently reflects <strong>162 ready personnel</strong> and <strong>42 available now</strong>.";
  }

  if (viewName === "documents") {
    return "From the Documents module, the most important operational signal is that missing and expiring records are now the fastest path to blocked rotations. The cleanest next step is to resolve the missing Seaman Book and outstanding visa / medical reviews tied to active crew changes.";
  }

  if (viewName === "crew-changes") {
    return "From the Crew Changes module, the fastest way to reduce operational risk is to clear the MT Scot Bremen and MT Northern Star rotations first. Those are the assignments with the tightest windows and the highest downstream impact.";
  }

  return "I can help with readiness, crew changes, documents, fleet risk, routes, ports and reporting using the current prototype data. Try asking about blockers, expiring documents, vessel risk, available crew, or which action should be prioritized next.";
}

function pushUserQuestion(question) {
  chatHistory.push({
    role: "user",
    text: question,
    meta: `Marina Keskin • ${viewMeta[activeView].title}`,
  });

  chatHistory.push({
    role: "ai",
    text: buildAnswer(question, activeView),
    meta: `Ready AI • ${copilotProfiles[activeView].title}`,
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

document.querySelectorAll(".navitem").forEach((item) => {
  item.addEventListener("click", () => setView(item.dataset.view));
});

document.addEventListener("click", (event) => {
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

document.querySelectorAll("input[id$='input'], #copilot-chat-input, #ready-ai-main-input").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend(input.id);
    }
  });
});

topbarSearch.addEventListener("focus", () => {
  topbarSearch.parentElement.style.boxShadow = "0 0 0 2px rgba(14, 165, 233, 0.12)";
});

topbarSearch.addEventListener("blur", () => {
  topbarSearch.parentElement.style.boxShadow = "";
});

const initialView = new URLSearchParams(window.location.search).get("view");
setView(initialView && viewMeta[initialView] ? initialView : "command-center");
