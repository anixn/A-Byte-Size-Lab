---
title: "My Web Apps - Productivity toolkit!"
layout: "main"
weight: 500
date: 2025-05-29
draft: false
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      margin: 0;
      padding: 2rem;
      background: var(--theme);
      color: var(--primary);
    }
    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .app-card {
        display: block;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--entry);
        box-sizing: border-box;
        overflow: hidden;
        padding: 1.5rem;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        text-decoration: none;
        color: inherit;
    }
    .app-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      border-color: var(--primary);
    }
    .app-icon {
      width: 100%;
      max-height: 200px;
      object-fit: contain;
      padding: 1rem;
    }
    .app-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--primary);
    }
    .app-description {
      font-size: 0.85rem;
      margin-top: 0.5rem;
      color: var(--secondary);
    }
    .section-title {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 2rem 0 1rem 0;
      text-align: center;
      border-bottom: 2px solid var(--border);
      display: inline-block;
      width: auto;
      padding-bottom: 0.3rem;
      color: var(--primary);
    }
    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      max-width: 1200px;
      margin: 2rem auto;
    }
    .tool-card {
      background: var(--entry);
      border-radius: 8px;
      padding: 1.2rem;
      text-align: center;
      transition: transform 0.2s ease;
      border: 1px solid var(--border);
      color: var(--primary);
    }
    .tool-card:hover {
      transform: translateY(-3px);
      border-color: var(--primary);
      background: var(--entry);
    }
    .tool-name {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
      color: var(--primary);
    }
    .tool-desc {
      font-size: 0.85rem;
      color: var(--secondary);
    }
    hr {
      margin: 2rem 0;
      border-color: var(--border);
    }
    a {
      color: var(--link-color);
    }
  </style>
</head>
<body>

A collection of interactive tools I've built and the essential software I use daily in my research workflow.

<!-- Web Apps Section -->
<h2 class="section-title">Interactive Web Apps</h2>
<div class="apps-grid">

  <!-- App 1 -->
  <a href="/projects/colorpicker/index.html" target="_blank" class="app-card">
    <img src="/projects/colorpicker/color.svg" alt="Color Picker" class="app-icon" />
    <div class="app-title">Chromatica Pro</div>
    <div class="app-description">Advanced color picker & palette generator – perfect for UI/design work.</div>
  </a>

  <!-- App 2 -->
  <a href="/projects/pomodoro/index.html" target="_blank" class="app-card">
    <img src="/projects/pomodoro/logo.svg" alt="Timer" class="app-icon" />
    <div class="app-title">Pomodoro Timer</div>
    <div class="app-description">Classic focus timer with task logging and break reminders.</div>
  </a>

  <!-- App 3 -->
  <a href="/projects/mermaid/index.html" target="_blank" class="app-card">
    <img src="/projects/mermaid/mermaid.svg" alt="Mermaid Diagram" class="app-icon" />
    <div class="app-title">Mermaid Diagram Studio</div>
    <div class="app-description">Live editor for Mermaid flowcharts, sequence diagrams, and Gantt charts.</div>
  </a>

  <!-- App 4 -->
  <a href="/projects/PomodoroWriter/index.html" target="_blank" class="app-card">
    <img src="/projects/PomodoroWriter/fevicon.svg" alt="Pomodoro Writer" class="app-icon" />
    <div class="app-title">Pomodoro Writer</div>
    <div class="app-description">Distraction‑free writing environment with built‑in Pomodoro timer.</div>
  </a>
</div>

<hr />

<!-- Research Software & Tools Section -->
<h2 class="section-title">Research Software & Tools</h2>
<p style="text-align: center; max-width: 800px; margin: 0 auto 1rem auto; color: var(--secondary);">Essential software I use daily for data analysis, visualisation, and scientific writing.</p>

<div class="tools-grid">
  <div class="tool-card">
    <div class="tool-name">🐍 R + RStudio</div>
    <div class="tool-desc">Statistical computing, hydrological modelling, and data visualisation (ggplot2, tidyverse).</div>
  </div>
  <div class="tool-card">
    <div class="tool-name">📊 QGIS</div>
    <div class="tool-desc">Geospatial analysis, catchment delineation, and map production.</div>
  </div>
  <div class="tool-card">
    <div class="tool-name">✍️ LaTeX (Overleaf)</div>
    <div class="tool-desc">Writing research papers, theses, and presentations with professional typesetting.</div>
  </div>
  <div class="tool-card">
    <div class="tool-name">🎨 Inkscape</div>
    <div class="tool-desc">Vector graphics for figures, schematics, and publication‑ready illustrations.</div>
  </div>
  <div class="tool-card">
    <div class="tool-name">🐍 Python (Jupyter)</div>
    <div class="tool-desc">Machine learning, data pipelines, and scripting for hydrologic time series.</div>
  </div>
  <div class="tool-card">
    <div class="tool-name">🗄️ Git / GitHub</div>
    <div class="tool-desc">Version control for code, collaborative research, and website deployment.</div>
  </div>
  <div class="tool-card">
    <div class="tool-name">🌍 Google Earth Engine</div>
    <div class="tool-desc">Cloud‑based geospatial analysis for large‑scale environmental data.</div>
  </div>
  <div class="tool-card">
    <div class="tool-name">📈 MATLAB</div>
    <div class="tool-desc">Numerical computing and hydrologic model calibration.</div>
  </div>
</div>

<hr />

<!-- Additional workflow note -->
<p style="text-align: center; font-size: 0.9rem; color: var(--secondary);">All web apps are open source and available on <a href="https://github.com/anixn" target="_blank" style="color: var(--link-color);">my GitHub</a>. Feel free to adapt them for your own workflow.</p>

</body>
</html>
<br />
