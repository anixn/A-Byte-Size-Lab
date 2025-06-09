
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
      /* font-family: sans-serif; */
      margin: 0;
      padding: 2rem;
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
        border: 1px solid rgb(13, 61, 31);            /* 1px solid green (or whatever green you prefer) */
        box-sizing: border-box;               /* include border in the box’s size */
        overflow: hidden;                     /* important if you have any rounded‐corner children */
        padding: 1.5rem;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* you can tweak this shadow to taste */
    }
    .app-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
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
      /* padding: 1rem; */
    }
  </style>
</head>
<body>

<div class="apps-grid">

  <!-- App 1 -->
  <a href="/projects/colorpicker/index.html" target="_blank" class="app-card">
    <img src="/projects/colorpicker/color.svg" alt="Color Picker" class="app-icon" />
    <div class="app-title">Chromatica Pro</div>
  </a>

  <!-- App 2 -->
  <a href="/projects/pomodoro/index.html" target="_blank" class="app-card">
    <img src="/projects/pomodoro/logo.svg" alt="Timer" class="app-icon" />
    <div class="app-title">Pomodoro Timer</div>
  </a>


  <!-- App 3 -->
  <a href="/projects/mermaid/index.html" target="_blank" class="app-card">
    <img src="/projects/mermaid/mermaid.svg" alt="Mermaid Diagram" class="app-icon" />
    <div class="app-title">Mermaid Diagram Studio</div>
  </a>

  <!-- App 4 -->
  <a href="/projects/PomodoroWriter/index.html" target="_blank" class="app-card">
    <img src="/projects/PomodoroWriter/fevicon.svg" alt="Pomodoro Writer" class="app-icon" />
    <div class="app-title">Pomodoro Writer</div>
  </a>

</div>

</body>
</html>
<br />
