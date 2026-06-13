---
title: "Updates & Activities"
layout: "list"
paginate: true
---

<p style="color: var(--secondary); margin-bottom: 1.5rem; font-size: 0.95rem;">
  A timeline of my talks, publications, patents, conferences, and other activities.
</p>

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; color: var(--link-color); font-size: 0.85rem;">🛈︎ Event color legend</summary>

<div class="event-legend">
  <div class="legend-inner">
    <span class="legend-label">Event types:</span>
    <span class="legend-pill patent">Patent</span>
    <span class="legend-pill talk">Talk</span>
    <span class="legend-pill conference">Conference</span>
    <span class="legend-pill presentation">Presentation</span>
    <span class="legend-pill webinar">Webinar</span>
    <span class="legend-pill workshop">Workshop</span>
    <span class="legend-pill publication">Publication</span>
  </div>
</div>

<style>
  .event-legend {
    margin: 1rem 0;
    background: var(--entry);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0.6rem 1rem;
  }
  .legend-inner {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    align-items: center;
    font-size: 0.85rem;
  }
  .legend-label {
    font-weight: 600;
    color: var(--primary);
    margin-right: 0.2rem;
  }
  .legend-pill {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid;  /* full border, color defined per type */
    background: transparent;
    color: var(--primary);
  }

  /* Light mode border colors (full border) */
  .legend-pill.patent       { border-color: #2e7d32; }
  .legend-pill.talk         { border-color: #ed6c02; }
  .legend-pill.conference   { border-color: #1976d2; }
  .legend-pill.presentation { border-color: #c2185b; }
  .legend-pill.webinar      { border-color: #7b1fa2; }
  .legend-pill.workshop     { border-color: #00838f; }
  .legend-pill.publication  { border-color: #388e3c; }

  /* Dark mode border colors (more luminous) */
  html[data-theme="dark"] .legend-pill.patent       { border-color: #66bb6a; }
  html[data-theme="dark"] .legend-pill.talk         { border-color: #ffa726; }
  html[data-theme="dark"] .legend-pill.conference   { border-color: #42a5f5; }
  html[data-theme="dark"] .legend-pill.presentation { border-color: #f06292; }
  html[data-theme="dark"] .legend-pill.webinar      { border-color: #ce93d8; }
  html[data-theme="dark"] .legend-pill.workshop     { border-color: #4dd0e1; }
  html[data-theme="dark"] .legend-pill.publication  { border-color: #81c784; }
</style>
</details>

{{< timeline >}}

<div class="back-link">
  <a href="/" style="color: var(--link-color); text-decoration: none; font-weight: 500;">← Back to Home</a>
</div>

<style>
  /* Compact timeline cards */
  .timeline {
    margin: 1.5rem 0;
  }
  .timeline-item {
    background: var(--entry);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1rem 1.2rem;
    margin-bottom: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .timeline-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
    border-color: var(--link-color);
  }
  [data-theme="dark"] .timeline-item:hover {
    box-shadow: 0 6px 14px rgba(255, 255, 255, 0.05);
  }

  /* Date badge */
  .timeline-date {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--link-color);
    text-transform: uppercase;
    letter-spacing: 0.3px;
    display: inline-block;
    background: color-mix(in srgb, var(--link-color) 12%, transparent);
    padding: 0.15rem 0.6rem;
    border-radius: 20px;
    margin-bottom: 0.5rem;
  }

  /* Title */
  .timeline-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--primary);
    margin: 0.2rem 0 0.3rem 0;
  }

  /* Description */
  .timeline-description {
    color: var(--secondary);
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
  }

  /* Pastel colors for different event types (light mode) */
  .type-patent   { background: #e6f7e6; border-left: 4px solid #2e7d32; }
  .type-talk     { background: #fff3e0; border-left: 4px solid #ed6c02; }
  .type-conference{ background: #e3f2fd; border-left: 4px solid #1976d2; }
  .type-presentation{ background: #fce4ec; border-left: 4px solid #c2185b; }
  .type-webinar  { background: #f3e5f5; border-left: 4px solid #7b1fa2; }
  .type-workshop { background: #e0f7fa; border-left: 4px solid #00838f; }
  .type-publication{ background: #e8f5e9; border-left: 4px solid #388e3c; }

  /* Dark mode overrides – deeper pastels but still readable */
  [data-theme="dark"] .type-patent   { background: #1e3a1e; border-left-color: #66bb6a; }
  [data-theme="dark"] .type-talk     { background: #3a2a1a; border-left-color: #ffa726; }
  [data-theme="dark"] .type-conference{ background: #1a2a3a; border-left-color: #42a5f5; }
  [data-theme="dark"] .type-presentation{ background: #3a1a2a; border-left-color: #f06292; }
  [data-theme="dark"] .type-webinar  { background: #2a1a3a; border-left-color: #ce93d8; }
  [data-theme="dark"] .type-workshop { background: #1a3a3a; border-left-color: #4dd0e1; }
  [data-theme="dark"] .type-publication{ background: #1e3a1e; border-left-color: #81c784; }

  /* Override default background when type class is present */
  .timeline-item.type-patent,
  .timeline-item.type-talk,
  .timeline-item.type-conference,
  .timeline-item.type-presentation,
  .timeline-item.type-webinar,
  .timeline-item.type-workshop,
  .timeline-item.type-publication {
    background: var(--bg-color, var(--entry));
  }

  .back-link {
    text-align: center;
    margin-top: 2rem;
  }
</style>
