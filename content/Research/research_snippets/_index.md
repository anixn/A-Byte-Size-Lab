---
title: "Research Snippets"
layout: "main"
weight: 30
---

<div style="max-width: 1000px; margin: 0 auto; padding: 0 1rem;">

<p style="color: var(--secondary); margin: 0 auto 2rem auto;">
  Brief summaries of my recent research — click any card to read the full story.
</p>

<div class="snippet-grid">

  <!-- Card 1 – Red -->
  <a href="snippet1/" class="snippet-card-link">
    <div class="snippet-card card-color-1">
      <div class="card-header">
        <span class="card-number">01</span>
        <span class="card-date">June 2026</span>
        <h3 class="card-title">Physio-climatic controls on vulnerability of watersheds</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Combine exploratory modeling and comparative hydrology.</li>
          <li>Define vulnerability useful under large uncertainties.</li>
          <li>Estimate vulnerability of 69 US watersheds.</li>
        </ul>
      </div>
    </div>
  </a>

  <!-- Card 2 – Blue -->
  <a href="snippet2/" class="snippet-card-link">
    <div class="snippet-card card-color-2">
      <div class="card-header">
        <span class="card-number">02</span>
        <span class="card-date">June 2026</span>
        <h3 class="card-title">Whittaker-Biome framework for climate change impact</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Compare fixed vs. changing model parameters.</li>
          <li>Changing parameters significantly alter estimates.</li>
          <li>Covers a majority of catchments.</li>
        </ul>
      </div>
    </div>
  </a>

  <!-- Card 3 – Green -->
  <a href="snippet3/" class="snippet-card-link">
    <div class="snippet-card card-color-3">
      <div class="card-header">
        <span class="card-number">03</span>
        <span class="card-date">June 2026</span>
        <h3 class="card-title">Catchment classification &amp; hydrologic response</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Develop a standardised classification framework.</li>
          <li>Use multiple methods and performance metrics.</li>
          <li>Link water quality to catchment characteristics.</li>
        </ul>
      </div>
    </div>
  </a>

  <!-- Card 4 – Orange -->
  <a href="snippet4/" class="snippet-card-link">
    <div class="snippet-card card-color-4">
      <div class="card-header">
        <span class="card-number">04</span>
        <span class="card-date">July 2026</span>
        <h3 class="card-title">Machine learning for hydrological forecasting</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Hybrid physical-ML models for streamflow prediction.</li>
          <li>Interpretable AI for water resources management.</li>
          <li>Benchmarking across diverse catchments.</li>
        </ul>
      </div>
    </div>
  </a>

  <!-- Card 5 – Purple -->
  <a href="snippet5/" class="snippet-card-link">
    <div class="snippet-card card-color-5">
      <div class="card-header">
        <span class="card-number">05</span>
        <span class="card-date">July 2026</span>
        <h3 class="card-title">Urban water systems under climate stress</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Assess resilience of urban water infrastructure.</li>
          <li>Develop adaptive management strategies.</li>
          <li>Case studies from major metropolitan areas.</li>
        </ul>
      </div>
    </div>
  </a>

  <!-- Card 6 – Teal -->
  <a href="snippet6/" class="snippet-card-link">
    <div class="snippet-card card-color-6">
      <div class="card-header">
        <span class="card-number">06</span>
        <span class="card-date">August 2026</span>
        <h3 class="card-title">Groundwater recharge in semi-arid regions</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Evaluate natural and managed recharge methods.</li>
          <li>Combine remote sensing and in-situ data.</li>
          <li>Policy recommendations for water security.</li>
        </ul>
      </div>
    </div>
  </a>

</div>

<div style="text-align: center; margin-top: 2rem;">
  <a href="/research/" style="color: var(--link-color); text-decoration: none; font-weight: 500;">← Back to Research</a>
</div>

</div>

<style>
  /* ===== Grid ===== */
  .snippet-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    margin: 1.5rem 0;
  }

  /* ===== Card link – kill all underlines ===== */
  .snippet-card-link,
  .snippet-card-link:visited,
  .snippet-card-link:hover,
  .snippet-card-link:active,
  .snippet-card-link:focus,
  .snippet-card-link * {
    border-bottom: none !important;
    text-decoration: none !important;
  }

  .snippet-card-link {
    display: block;
    transition: transform 0.25s ease;
  }

  /* ===== Card itself ===== */
  .snippet-card {
    position: relative;
    background: var(--entry);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.2rem 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 200px;
    color: var(--primary);
    /* Override bottom border with accent via color classes */
    border-bottom: 4px solid transparent;
    /* We'll use a pseudo-element for the top stripe instead */
    overflow: hidden;
  }

  /* ----- Top accent stripe (pseudo-element) ----- */
  .snippet-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--accent-color, #ccc);
    transition: height 0.25s ease;
  }

  /* ----- Subtle background tint (pseudo-element) ----- */
  .snippet-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top left, var(--accent-color, transparent) 0%, transparent 70%);
    opacity: 0.06;
    pointer-events: none;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }

  /* Hover effects on the card */
  .snippet-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--accent-color);
  }

  .snippet-card:hover::before {
    height: 6px; /* slightly thicker on hover */
  }

  .snippet-card:hover::after {
    opacity: 0.12;
  }

  /* ===== Color classes (set accent color) ===== */
  .card-color-1 {
    --accent-color: #e74c3c;
    border-bottom-color: #e74c3c;
  }
  .card-color-2 {
    --accent-color: #3498db;
    border-bottom-color: #3498db;
  }
  .card-color-3 {
    --accent-color: #2ecc71;
    border-bottom-color: #2ecc71;
  }
  .card-color-4 {
    --accent-color: #f39c12;
    border-bottom-color: #f39c12;
  }
  .card-color-5 {
    --accent-color: #9b59b6;
    border-bottom-color: #9b59b6;
  }
  .card-color-6 {
    --accent-color: #1abc9c;
    border-bottom-color: #1abc9c;
  }

  /* Slightly darker on hover for bottom border */
  .snippet-card.card-color-1:hover { border-bottom-color: #c0392b; }
  .snippet-card.card-color-2:hover { border-bottom-color: #2980b9; }
  .snippet-card.card-color-3:hover { border-bottom-color: #27ae60; }
  .snippet-card.card-color-4:hover { border-bottom-color: #d68910; }
  .snippet-card.card-color-5:hover { border-bottom-color: #8e44ad; }
  .snippet-card.card-color-6:hover { border-bottom-color: #16a085; }

  /* ===== Card content ===== */
  .snippet-card .card-header {
    position: relative;
    z-index: 1;
    margin-bottom: 0.6rem;
  }

  .snippet-card .card-number {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--accent-color);
    background: var(--entry);
    padding: 0.1rem 0.6rem;
    border-radius: 12px;
    border: 1px solid var(--accent-color);
    margin-bottom: 0.3rem;
    letter-spacing: 0.5px;
  }

  .snippet-card .card-date {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--secondary);
    display: block;
    margin-bottom: 0.2rem;
  }

  .snippet-card .card-title {
    font-weight: 600;
    font-size: 1.05rem;
    line-height: 1.4;
    margin: 0.2rem 0 0 0;
    color: var(--primary);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .snippet-card .card-body {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    align-items: flex-start;
    margin-top: 0.3rem;
  }

  .snippet-card .card-body ul {
    margin: 0;
    padding-left: 1.2rem;
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--secondary);
    width: 100%;
  }

  .snippet-card .card-body li {
    margin-bottom: 0.15rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .snippet-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.9rem;
    }
    .snippet-card {
      padding: 1rem 0.8rem;
      min-height: 180px;
    }
    .snippet-card .card-title {
      font-size: 0.95rem;
    }
    .snippet-card .card-body ul {
      font-size: 0.8rem;
    }
    .snippet-card .card-number {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 480px) {
    .snippet-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
