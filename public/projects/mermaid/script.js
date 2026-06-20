// CodeMirror editor setup
const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "markdown",
  lineNumbers: true,
  styleActiveLine: true,
  matchBrackets: true,
  theme: "default",
});
editor.setSize("100%", "100%");

// Initialize Mermaid
function initMermaid(theme) {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: theme,
    themeVariables: {
      primaryColor: "#ffd700",
      lineColor: "#b0b0b0",
      fontFamily: "Roboto",
    },
  });
}
initMermaid("neutral");

// Preview diagram
async function previewDiagram() {
  const code = editor.getValue();
  const theme = document.getElementById("theme-select").value;
  initMermaid(theme);
  const preview = document.getElementById("preview");
  try {
    preview.innerHTML = '<div class="mermaid">' + code + "</div>";
    await mermaid.run({
      querySelector: ".mermaid",
      suppressErrors: false,
    });

    // ---- Get the rendered SVG and force its natural size ----
    const svg = preview.querySelector("svg");
    if (svg) {
      // Remove inline width and style that Mermaid adds
      svg.removeAttribute("width");
      svg.removeAttribute("style");

      // Extract the viewBox width (e.g., "0 0 800 600" → 800)
      const viewBox = svg.getAttribute("viewBox");
      if (viewBox) {
        const parts = viewBox.split(/\s+/);
        if (parts.length >= 3) {
          const naturalWidth = parseFloat(parts[2]); // third value is width
          if (!isNaN(naturalWidth) && naturalWidth > 0) {
            // Set the width in pixels to force the natural size
            svg.style.width = naturalWidth + "px";
            svg.style.height = "auto";
            svg.style.maxWidth = "none";
          }
        }
      }
    }
    // ------------------------------------------------------------
  } catch (error) {
    preview.innerHTML = `<div class="error">${error.message}</div>`;
  }
}

// Export SVG
function exportSVG() {
  const svg = document.querySelector("#preview svg");
  if (!svg) return;
  // Ensure any inline width we set doesn't affect export – we use clone
  const clone = svg.cloneNode(true);
  clone.removeAttribute("style");
  clone.removeAttribute("width");
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(clone);
  const blob = new Blob([source], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "diagram.svg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Export PNG
async function exportPNG() {
  const svg = document.querySelector("#preview svg");
  if (!svg) return;
  const factor = parseInt(
    document.getElementById("res-factor-select").value,
    10
  );
  const svgData = new XMLSerializer().serializeToString(svg);
  const img = new Image();
  img.src =
    "data:image/svg+xml;base64," +
    btoa(unescape(encodeURIComponent(svgData)));
  await new Promise((res) => (img.onload = res));
  const dpr = window.devicePixelRatio || 1;
  const scale = dpr * factor;
  const canvas = document.createElement("canvas");
  canvas.width = img.width * scale;
  canvas.height = img.height * scale;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  canvas.toBlob((blob) => {
    const link = document.createElement("a");
    link.download = `diagram@${factor}x.png`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }, "image/png");
}

// Wire up buttons
document.getElementById("preview-btn").addEventListener("click", previewDiagram);
document.getElementById("export-svg-btn").addEventListener("click", exportSVG);
document.getElementById("export-png-btn").addEventListener("click", exportPNG);

// Initial preview
previewDiagram();
