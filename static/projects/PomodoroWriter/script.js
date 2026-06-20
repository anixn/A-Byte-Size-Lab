// This is the complete script with working spellcheck toggle

let isDarkTheme = true;

window.addEventListener("load", () => {
  mermaid.initialize({
    startOnLoad: true,
    theme: "neutral",
    securityLevel: "loose",
    logLevel: "warn",
    themeVariables: { fontFamily: "Roboto, sans-serif" },
  });
});

const preview = document.getElementById("preview");
const statsDisplay = document.getElementById("statsDisplay");
const themeToggle = document.getElementById("themeToggle");
const spellToggle = document.getElementById("spellCheckToggle");
const modeToggle = document.getElementById("modeToggle");
const openBtn = document.getElementById("openBtn");
const saveBtn = document.getElementById("saveBtn");
const fileInput = document.getElementById("fileInput");
const zenToggle = document.getElementById("zenToggle");
const saveIndicator = document.getElementById("saveIndicator");

let codemirror;
let isPreview = false;
let spellCheckEnabled = false;
let hasUnsavedChanges = false;
let audioUnlocked = false;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const toggleTimerButton = document.getElementById("toggle-timer");
const resetButton = document.getElementById("reset");
const pomodoroCountElement = document.getElementById("pomodoro-count");
const audioSelect = document.getElementById("audio-select");
let minutes = 25,
  seconds = 0;
let timerInterval,
  isTimerRunning = false,
  pomodoroCount = 0;

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
let tasks = [];

const minimizeBtn = document.getElementById("minimizeBtn");
const assessmentMinimizeBtn1 = document.getElementById(
  "assessmentMinimizeBtn1",
);

const fkGradeSpan = document.getElementById("fkGrade");
const readingEaseSpan = document.getElementById("readingEase");
const gunningFogSpan = document.getElementById("gunningFog");
const colemanLiauSpan = document.getElementById("colemanLiau");
const avgWordLengthSpan = document.getElementById("avgWordLength");
const avgSentenceLengthSpan = document.getElementById("avgSentenceLength");
const awlCountSpan = document.getElementById("awlCount");

document.addEventListener("DOMContentLoaded", () => {
  codemirror = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "markdown",
    lineNumbers: false,
    theme: "gruvbox",
    autofocus: true,
    lineWrapping: true,
    inputStyle: "contenteditable", // Keep this for better cursor experience
    placeholder: "Start Writing …",
    extraKeys: {
      F11: (cm) => cm.setOption("fullScreen", !cm.getOption("fullScreen")),
      Esc: (cm) => {
        if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
      },
    },
  });
  codemirror.setOption("cursorBlinkRate", 0);

  // --- Initialize spellcheck (disabled by default) ---
  const editorElement = codemirror.getInputField();
  const wrapper = codemirror.getWrapperElement();

  // Set on the main editable div
  editorElement.setAttribute("spellcheck", spellCheckEnabled);
  // Also on any child textareas or contenteditable elements
  wrapper.querySelectorAll('[contenteditable="true"], textarea').forEach(el => {
    el.setAttribute("spellcheck", spellCheckEnabled);
  });
  // Set button text to reflect initial state
  spellToggle.textContent = spellCheckEnabled ? "Spell Off" : "Spell On";

  initializeApp();
});

function initializeApp() {
  const savedContent = localStorage.getItem("editorContent");
  if (savedContent) {
    codemirror.setValue(savedContent);
  }

  const mermaidExtension = {
    name: "mermaid",
    level: "block",
    start(src) {
      return src.match(/^```mermaid\s*\n/)?.index;
    },
    tokenizer(src) {
      const rule = /^```mermaid\s*\n([\s\S]+?)```/;
      const match = rule.exec(src);
      if (match) {
        return { type: "mermaid", raw: match[0], text: match[1].trim() };
      }
    },
    renderer(token) {
      return `<div class="mermaid" style="display: flex; justify-content: center;">${token.text}</div>\n`;
    },
  };

  marked.use({ extensions: [mermaidExtension] });
  marked.setOptions({
    breaks: true,
    gfm: true,
    mangle: false,
    headerIds: false,
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
  });

  setupEventListeners();
  loadTasks();
  updateStats();
  updateAssessment();
  updateTimerDisplay();
  updatePomodoroCount();

  if (!window.showSaveFilePicker) saveBtn.style.display = "none";
  if (!window.File || !window.FileReader) openBtn.style.display = "none";
  showStatus("Saved locally");
}

function setupEventListeners() {
  codemirror.on("change", () => {
    updateStats();
    updateAssessment();
    if (isPreview) processPreview();
    hasUnsavedChanges = true;

    clearTimeout(autoSaveTimeout);
    showStatus("Saving...");
    autoSaveTimeout = setTimeout(() => {
      saveToLocalStorage();
      showStatus("Saved locally");
    }, 1000);
  });

  const keySound = new Audio("https://assets.codepen.io/3/typewriter-key.mp3");
  keySound.volume = 0.08;
  codemirror.on("keypress", () => {
    keySound.currentTime = 0;
    keySound.play().catch(() => {});
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
      e.preventDefault();
      toggleMode();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "m") {
      e.preventDefault();
      document.getElementById("pomodoro-timer").classList.toggle("minimized");
      document.getElementById("assess-timer").classList.toggle("minimized");
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      saveBtn.click();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "o") {
      e.preventDefault();
      fileInput.click();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      toggleSpellcheck();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "x") {
      e.preventDefault();
      document.body.classList.toggle("zen-mode");
      zenToggle.textContent = document.body.classList.contains("zen-mode")
        ? "Exit Zen"
        : "Zen";
      if (document.body.classList.contains("zen-mode")) {
        backgroundAudio.pause();
        document.getElementById("toggle-music").textContent = "Play Music";
      }
    }
    if (e.key === "Escape" && document.body.classList.contains("zen-mode")) {
      e.preventDefault();
      document.body.classList.remove("zen-mode");
      zenToggle.textContent = "Zen";
    }
  });

  modeToggle.addEventListener("click", toggleMode);
  themeToggle.addEventListener("click", toggleTheme);
  spellToggle.addEventListener("click", toggleSpellcheck);
  openBtn.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", handleFileOpen);
  saveBtn.addEventListener("click", handleSave);
  zenToggle.addEventListener("click", () => {
    document.body.classList.toggle("zen-mode");
    zenToggle.textContent = document.body.classList.contains("zen-mode")
      ? "Exit Zen"
      : "Zen";
    if (document.body.classList.contains("zen-mode")) {
      backgroundAudio.pause();
      document.getElementById("toggle-music").textContent = "Play Music";
    }
  });

  window.addEventListener("beforeunload", (e) => {
    if (hasUnsavedChanges) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  toggleTimerButton.addEventListener("click", toggleTimer);
  resetButton.addEventListener("click", resetTimer);
  audioSelect.addEventListener("change", changeAudio);
  document
    .getElementById("toggle-music")
    .addEventListener("click", toggleMusic);

  addTaskButton.addEventListener("click", () => addTask(taskInput.value));
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask(taskInput.value);
  });

  minimizeBtn.addEventListener("click", () => {
    document.getElementById("pomodoro-timer").classList.toggle("minimized");
  });
  assessmentMinimizeBtn1.addEventListener("click", () => {
    document.getElementById("assess-timer").classList.toggle("minimized");
  });

  const toggleHeaderBtn = document.getElementById("toggleHeaderBtn");
  toggleHeaderBtn.addEventListener("click", () => {
    const headerButtons = document.querySelectorAll(
      ".controls .toggle-btn:not(#toggleHeaderBtn)",
    );
    headerButtons.forEach((btn) => {
      btn.style.display = btn.style.display !== "none" ? "none" : "inline-flex";
    });
    const firstVisible =
      document.querySelector(".controls .toggle-btn:not(#toggleHeaderBtn)")
        .style.display !== "none";
    toggleHeaderBtn.textContent = firstVisible ? "❱" : "☰";
    toggleHeaderBtn.setAttribute(
      "data-tooltip",
      firstVisible ? "Hide All" : "Show All",
    );
  });
}

let autoSaveTimeout;

function saveToLocalStorage() {
  const content = codemirror.getValue();
  localStorage.setItem("editorContent", content);
}

function showStatus(message) {
  const indicator = document.getElementById("saveIndicator");
  indicator.setAttribute("data-tooltip", message);
  if (message === "Saving...") indicator.classList.add("saving");
  else indicator.classList.remove("saving");
}

function countSyllables(word) {
  word = word.toLowerCase().trim();
  if (word.length <= 2) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const matches = word.match(/[aeiouy]{1,2}/g) || [];
  return Math.max(1, matches.length);
}

function computeColemanLiau(text) {
  const cleanText = text.replace(/[^A-Za-z\s\.!?]/g, "");
  const sentences =
    cleanText.split(/[\.\!?]+/).filter((s) => s.trim().length > 0).length || 1;
  const words =
    cleanText.split(/\s+/).filter((w) => w.trim().length > 0).length || 1;
  const letters = cleanText.replace(/[^A-Za-z]/g, "").length;
  const L = (letters / words) * 100;
  const S = (sentences / words) * 100;
  return 0.0588 * L - 0.296 * S - 15.8;
}

function countComplexWords(text) {
  const cleanText = text.replace(/[^A-Za-z\s]/g, "");
  const wordsArray = cleanText.split(/\s+/).filter((w) => w.length > 0);
  let count = 0;
  wordsArray.forEach((w) => {
    if (countSyllables(w) >= 3) count++;
  });
  return count;
}

const AWL = [
  "analyze",
  "approach",
  "area",
  "assess",
  "assume",
  "authority",
  "available",
  "benefit",
  "concept",
  "consistent",
  "constitute",
  "context",
  "contract",
  "create",
  "data",
  "define",
  "derive",
  "distribute",
  "economic",
  "environment",
  "establish",
  "estimate",
  "evident",
  "export",
  "factor",
  "finance",
  "formula",
  "function",
  "identify",
  "impact",
  "indicate",
  "individual",
  "interpret",
  "involve",
  "issue",
  "labor",
  "legal",
  "legislate",
  "major",
  "method",
  "occur",
  "percent",
  "period",
  "policy",
  "principle",
  "proceed",
  "process",
  "require",
  "research",
  "respond",
  "role",
  "section",
  "sector",
  "significant",
  "similar",
  "source",
  "structure",
  "theory",
  "vary",
  "achieve",
  "acquire",
  "administrate",
  "affect",
  "appropriate",
  "aspect",
  "assist",
  "category",
  "chapter",
  "commission",
  "community",
  "complex",
  "compute",
  "conclude",
  "conduct",
  "consequence",
  "construct",
  "consume",
  "credit",
  "culture",
  "design",
  "distinct",
  "element",
  "equate",
  "evaluate",
  "feature",
  "final",
  "focus",
  "impact",
  "injure",
  "institute",
  "invest",
  "item",
  "journal",
  "maintain",
  "normal",
  "obtain",
  "participate",
  "perceive",
  "positive",
  "potential",
  "previous",
  "primary",
  "purchase",
  "range",
  "region",
  "regulate",
  "relevant",
  "reside",
  "resource",
  "restrict",
  "secure",
  "select",
  "site",
  "strategy",
  "survey",
  "text",
  "tradition",
  "transfer",
  "alternative",
  "circumstance",
  "comment",
  "compensate",
  "component",
  "consent",
  "considerable",
  "constant",
  "constrain",
  "contribute",
  "convene",
  "coordinate",
  "core",
  "corporate",
  "correspond",
  "criteria",
  "deduce",
  "demonstrate",
  "document",
  "dominate",
  "emphasis",
  "ensure",
  "exclude",
  "framework",
  "fund",
  "illustrate",
  "immigrate",
  "imply",
  "initial",
  "instance",
  "interact",
  "justify",
  "layer",
  "link",
  "locate",
  "maximize",
  "minor",
  "negate",
  "outcome",
  "partner",
  "philosophy",
  "proportion",
  "publish",
  "react",
  "register",
  "rely",
  "remove",
  "scheme",
  "sequence",
  "sex",
  "shift",
  "specify",
  "sufficient",
  "task",
  "technical",
  "technique",
  "technology",
  "valid",
  "volume",
  "access",
  "adequate",
  "annual",
  "apparent",
  "approximate",
  "attitude",
  "attribute",
  "civil",
  "code",
  "commit",
  "communicate",
  "concentrate",
  "conference",
  "contrast",
  "cycle",
  "debate",
  "despite",
  "dimension",
  "domestic",
  "emerge",
  "error",
  "ethnic",
  "goal",
  "grant",
  "hence",
  "hypothesis",
  "implement",
  "implicate",
  "impose",
  "integrate",
  "internal",
  "investigate",
  "job",
  "label",
  "mechanism",
  "obvious",
  "occupy",
  "option",
  "output",
  "overall",
  "parallel",
  "parameter",
  "phase",
  "predict",
  "principal",
  "prior",
  "professional",
  "project",
  "promote",
  "resolve",
  "retain",
  "series",
  "statistic",
  "status",
  "stress",
  "substitute",
  "sufficient",
  "summary",
  "undertake",
  "academy",
  "adjust",
  "alter",
  "amend",
  "aware",
  "capacity",
  "challenge",
  "clause",
  "compound",
  "conflict",
  "consult",
  "contact",
  "decline",
  "discrete",
  "draft",
  "enable",
  "energy",
  "enforce",
  "entity",
  "equivalent",
  "evolve",
  "expand",
  "expose",
  "external",
  "facilitate",
  "fundamental",
  "generate",
  "generation",
  "image",
  "liberal",
  "licence",
  "logic",
  "marginal",
  "medical",
  "mental",
  "modify",
  "monitor",
  "network",
  "notion",
  "objective",
  "orient",
  "output",
  "overall",
  "perspective",
  "precise",
  "prime",
  "psychology",
  "pursue",
  "ratio",
  "reject",
  "revenue",
  "stable",
  "style",
  "subsidy",
  "substitute",
  "symbol",
  "target",
  "transition",
  "trend",
  "version",
  "welfare",
  "whereas",
  "abstract",
  "accurate",
  "acknowledge",
  "aggregate",
  "allocate",
  "assign",
  "attach",
  "author",
  "brief",
  "capable",
  "cite",
  "cooperate",
  "discriminate",
  "display",
  "diverse",
  "domain",
  "edit",
  "enhance",
  "estate",
  "exceed",
  "expert",
  "explicit",
  "federal",
  "fee",
  "flexible",
  "ignore",
  "incentive",
  "incorporate",
  "index",
  "inhibit",
  "initiate",
  "input",
  "instruction",
  "intelligence",
  "interval",
  "lecture",
  "migrate",
  "minimum",
  "nuclear",
  "overseas",
  "precede",
  "presume",
  "rational",
  "recover",
  "reveal",
  "revenue",
  "scope",
  "subsidiary",
  "tape",
  "trace",
  "transform",
  "transport",
  "underlie",
  "utilize",
  "adapt",
  "adult",
  "advocate",
  "aid",
  "channel",
  "classic",
  "comprehensive",
  "comprise",
  "confirm",
  "contrary",
  "convert",
  "decade",
  "definite",
  "deny",
  "differentiate",
  "dispose",
  "dynamic",
  "eliminate",
  "empirical",
  "equip",
  "extract",
  "file",
  "finite",
  "foundation",
  "grade",
  "guarantee",
  "hierarchy",
  "highlight",
  "identify",
  "ignore",
  "incentive",
  "incorporate",
  "index",
  "inhibit",
  "initiate",
  "input",
  "insert",
  "intervene",
  "isolate",
  "manual",
  "media",
  "mode",
  "paradigm",
  "phenomenon",
  "priority",
  "protocol",
  "publication",
  "refine",
  "reform",
  "regime",
  "relax",
  "restrain",
  "revolution",
  "scenario",
  "schedule",
  "scheme",
  "scope",
  "simulate",
  "sole",
  "somewhat",
  "submit",
  "successor",
  "survive",
  "suspend",
  "team",
  "tense",
  "terminate",
  "theme",
  "thereby",
  "topic",
  "transmit",
  "ultimate",
  "unique",
  "visible",
  "volunteer",
];

function updateAssessment() {
  const text = codemirror ? codemirror.getValue().trim() : "";
  if (!text) {
    fkGradeSpan.textContent = "—";
    readingEaseSpan.textContent = "—";
    gunningFogSpan.textContent = "—";
    colemanLiauSpan.textContent = "—";
    avgWordLengthSpan.textContent = "0";
    avgSentenceLengthSpan.textContent = "0";
    awlCountSpan.textContent = "0";
    return;
  }

  const sentenceArr = text.split(/[\.\!?]+/).filter((s) => s.trim().length > 0);
  const wordsArr = text.split(/\s+/).filter((w) => w.trim().length > 0);
  const numSentences = sentenceArr.length || 1;
  const numWords = wordsArr.length || 1;

  let totalSyllables = 0;
  let totalLetters = 0;
  wordsArr.forEach((w) => {
    totalSyllables += countSyllables(w.replace(/[^A-Za-z]/g, ""));
    totalLetters += w.replace(/[^A-Za-z]/g, "").length;
  });

  const complexWords = countComplexWords(text);

  let awlMatches = 0;
  wordsArr.forEach((w) => {
    if (AWL.includes(w.toLowerCase().replace(/[^A-Za-z]/g, ""))) {
      awlMatches++;
    }
  });

  const avgWordLength = totalLetters / numWords;
  const avgSentenceLength = numWords / numSentences;

  const fk =
    0.39 * (numWords / numSentences) +
    11.8 * (totalSyllables / numWords) -
    15.59;
  const ease =
    206.835 -
    1.015 * (numWords / numSentences) -
    84.6 * (totalSyllables / numWords);
  const fog = 0.4 * (numWords / numSentences + 100 * (complexWords / numWords));
  const cl = computeColemanLiau(text);

  fkGradeSpan.textContent = fk.toFixed(1);
  readingEaseSpan.textContent = ease.toFixed(1);
  gunningFogSpan.textContent = fog.toFixed(1);
  colemanLiauSpan.textContent = cl.toFixed(1);
  avgWordLengthSpan.textContent = avgWordLength.toFixed(2);
  avgSentenceLengthSpan.textContent = avgSentenceLength.toFixed(2);
  awlCountSpan.textContent = awlMatches;
}

function toggleMode() {
  isPreview = !isPreview;
  if (isPreview) {
    codemirror.getWrapperElement().style.display = "none";
    preview.style.display = "block";
    processPreview();
    modeToggle.textContent = "Edit";
  } else {
    preview.querySelectorAll(".copy-btn").forEach((btn) => btn.remove());
    preview.querySelectorAll(".export-btn").forEach((btn) => btn.remove());
    preview.style.display = "none";
    codemirror.getWrapperElement().style.display = "block";
    modeToggle.textContent = "Preview";
  }
  updateAssessment();
  updateStats();
}

function processPreview() {
  if (!isPreview) return;

  const rawHtml = marked.parse(codemirror.getValue());
  preview.innerHTML = rawHtml;

  preview.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });
  preview.querySelectorAll("pre").forEach((preBlock) => {
    if (!preBlock.querySelector(".copy-btn")) {
      const button = document.createElement("button");
      button.className = "copy-btn";
      button.innerText = "Copy";
      button.setAttribute("title", "Copy code to clipboard");
      preBlock.insertBefore(button, preBlock.firstChild);
      button.addEventListener("click", () => {
        const codeNode = preBlock.querySelector("code");
        if (!codeNode) return;
        const textToCopy = codeNode.innerText;
        navigator.clipboard.writeText(textToCopy).then(
          () => {
            button.innerText = "Copied!";
            setTimeout(() => (button.innerText = "Copy"), 1000);
          },
          () => {
            button.innerText = "Error";
            setTimeout(() => (button.innerText = "Copy"), 1000);
          },
        );
      });
    }
  });

  setTimeout(() => {
    if (
      typeof renderMathInElement !== "undefined" &&
      window.renderMathInElement
    ) {
      renderMathInElement(preview, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        ignoredClasses: ["cm-code"],
        throwOnError: false,
        strict: false,
      });
    }
  }, 10);

  setTimeout(() => {
    mermaid
      .run({ querySelector: ".mermaid", suppressErrors: true })
      .catch((e) => console.error("Mermaid error:", e));
  }, 100);

  setTimeout(attachExportButtons, 150);
}

function attachExportButtons() {
  const mermaidWrappers = preview.querySelectorAll(".mermaid");
  mermaidWrappers.forEach((wrapper, index) => {
    if (wrapper.querySelector(".export-btn")) return;

    const btnContainer = document.createElement("div");
    btnContainer.style.textAlign = "center";
    btnContainer.style.margin = "0.5rem auto";

    const svgBtn = document.createElement("button");
    svgBtn.textContent = "Export SVG";
    svgBtn.className = "export-btn";
    svgBtn.style.cssText = baseButtonStyle();
    svgBtn.addEventListener("click", () => exportMermaidAsSVG(wrapper));

    const pngBtn = document.createElement("button");
    pngBtn.textContent = "Export PNG";
    pngBtn.className = "export-btn";
    pngBtn.style.cssText = baseButtonStyle();
    pngBtn.addEventListener("click", () => exportMermaidAsPNG(wrapper, index));

    btnContainer.appendChild(svgBtn);
    btnContainer.appendChild(pngBtn);
    wrapper.parentNode.insertBefore(btnContainer, wrapper.nextSibling);
  });
}

function baseButtonStyle() {
  return `
    display: inline-block;
    margin: 0.3rem 0.6rem;
    padding: 0.4rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: transparent;
    color: var(--accent-color);
    cursor: pointer;
    font-size: 1.2rem;
  `;
}

function exportMermaidAsSVG(wrapper) {
  const svg = wrapper.querySelector("svg");
  if (!svg) {
    alert("No SVG found to export.");
    return;
  }
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svg);
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `diagram-${Date.now()}.svg`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

async function exportMermaidAsPNG(wrapper, index) {
  const svg = wrapper.querySelector("svg");
  if (!svg) return alert("No SVG found to export.");

  const factor = prompt("Enter export resolution (1–6 recommended)", "3");
  const scale = Math.max(1, Math.min(6, parseInt(factor))) || 3;

  const cloned = wrapper.cloneNode(true);
  cloned.style.margin = "0 auto";
  cloned.style.backgroundColor = "#ffffff";
  document.body.appendChild(cloned);

  const canvas = await html2canvas(cloned, {
    scale: scale,
    backgroundColor: "#ffffff",
    useCORS: true,
  });

  const link = document.createElement("a");
  link.download = `diagram-${index + 1}@${scale}x.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  document.body.removeChild(cloned);
}

function escapeHtml(html) {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  codemirror.setOption("theme", isDarkTheme ? "gruvbox" : "default");
  themeToggle.textContent = isDarkTheme ? "Light Mode" : "Dark Mode";
}

// ============================================================
//  FIXED SPELLCHECK TOGGLE – reliable and non‑destructive
// ============================================================
function toggleSpellcheck() {
  spellCheckEnabled = !spellCheckEnabled;

  const editorElement = codemirror.getInputField();
  const wrapper = codemirror.getWrapperElement();

  // 1. Set spellcheck on the main editable element
  editorElement.setAttribute("spellcheck", spellCheckEnabled);

  // 2. Also set on any child contenteditable elements and textareas
  wrapper.querySelectorAll('[contenteditable="true"], textarea').forEach(el => {
    el.setAttribute("spellcheck", spellCheckEnabled);
  });

  // 3. Force the browser to re‑evaluate spelling by toggling the display
  wrapper.style.display = "none";
  void wrapper.offsetHeight;          // force reflow
  wrapper.style.display = "";

  // 4. Refresh the editor and focus it after a small delay
  setTimeout(() => {
    codemirror.refresh();
    codemirror.focus();
  }, 10);

  // 5. Update the button text
  spellToggle.textContent = spellCheckEnabled ? "Spell Off" : "Spell On";
}
// ============================================================

function handleFileOpen(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    codemirror.setValue(evt.target.result);
    updateStats();
    updateAssessment();
    if (isPreview) processPreview();
    saveToLocalStorage();
    showStatus("Saved locally");
  };
  reader.onerror = () => {
    alert("Failed to read the file. Please try again.");
  };
  reader.readAsText(file);
  fileInput.value = "";
}

async function handleSave() {
  if (!window.showSaveFilePicker) {
    alert("Save feature not supported in this browser.");
    return;
  }
  const text = codemirror.getValue();
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: "document.md",
      types: [
        { description: "Markdown Files", accept: { "text/markdown": [".md"] } },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(text);
    await writable.close();
    hasUnsavedChanges = false;

    saveBtn.classList.add("save-success");
    setTimeout(() => saveBtn.classList.remove("save-success"), 1000);

    const container = document.querySelector(".writing-container");
    container.classList.add("glow-confirm");
    setTimeout(() => container.classList.remove("glow-confirm"), 1200);
  } catch (err) {
    if (err.name !== "AbortError") console.error("Save failed:", err);
  }
}

const backgroundAudio = document.getElementById("background-audio");
const toggleMusicButton = document.getElementById("toggle-music");

function unlockAudio() {
  if (audioUnlocked) return;
  const unlockSound = new Audio(
    "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=",
  );
  unlockSound
    .play()
    .then(() => {
      unlockSound.pause();
      audioUnlocked = true;
      updateTimerDisplay();
    })
    .catch(() => {});
}
document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("touchstart", unlockAudio, { once: true });

function updateTimerDisplay() {
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

function updatePomodoroCount() {
  pomodoroCountElement.textContent = `Pomodoros: ${pomodoroCount}`;
}

function startTimer() {
  if (!audioUnlocked) {
    alert("Please interact with the page to unlock audio.");
    return;
  }
  backgroundAudio.play().catch(() => {});
  timerInterval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      clearInterval(timerInterval);
      alert("Pomodoro complete!");
      pomodoroCount++;
      resetTimer();
      return;
    }
    updateTimerDisplay();
  }, 1000);
  isTimerRunning = true;
  toggleTimerButton.textContent = "Pause";
}

function pauseTimer() {
  clearInterval(timerInterval);
  backgroundAudio.pause();
  isTimerRunning = false;
  toggleTimerButton.textContent = "Start";
}

function toggleTimer() {
  if (isTimerRunning) pauseTimer();
  else startTimer();
}

function resetTimer() {
  clearInterval(timerInterval);
  backgroundAudio.pause();
  backgroundAudio.currentTime = 0;
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
  isTimerRunning = false;
  toggleTimerButton.textContent = "Start";
  updatePomodoroCount();
}

function toggleMusic() {
  if (!audioUnlocked) {
    alert("Please interact with the page to unlock audio.");
    return;
  }
  try {
    if (backgroundAudio.paused) {
      backgroundAudio.play();
      toggleMusicButton.textContent = "Pause Music";
    } else {
      backgroundAudio.pause();
      toggleMusicButton.textContent = "Play Music";
    }
  } catch (err) {
    alert("Audio playback failed: " + err.message);
  }
}

function changeAudio() {
  if (!audioUnlocked) return;
  try {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
    backgroundAudio.src = audioSelect.value;
    backgroundAudio.play();
    toggleMusicButton.textContent = "Pause Music";
  } catch (err) {
    alert("Failed to change audio: " + err.message);
  }
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (!saved) return;
  try {
    tasks = JSON.parse(saved);
    renderTasks();
  } catch {
    tasks = [];
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const newTask = { id: Date.now(), text: trimmed, completed: false };
  tasks.unshift(newTask);
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

function toggleTaskCompletion(id) {
  tasks = tasks.map((t) => {
    if (t.id === id) return { ...t, completed: !t.completed };
    return t;
  });
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.cursor = "pointer";

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "↺" : "✓";
    completeBtn.title = task.completed ? "Mark Incomplete" : "Mark Complete";
    completeBtn.addEventListener("click", () => toggleTaskCompletion(task.id));

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.title = "Delete Task";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    actions.appendChild(completeBtn);
    actions.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

function updateStats() {
  const text = codemirror ? codemirror.getValue().trim() : "";
  const words = text
    ? text.split(/\s+/).filter((w) => w.trim().length > 0).length
    : 0;
  statsDisplay.textContent = `Words: ${words} · `;
}
