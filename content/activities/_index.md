---
title: "Activities"
layout: "main"
---

<style>
  /* Theme-aware variables - uses PaperMod's CSS vars */
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.2rem;
    margin: 1.5rem 0;
  }

  .activity-card {
    background: var(--entry);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.2rem 1rem;
    text-align: center;
    transition: all 0.25s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    display: block;
    color: var(--primary);
  }

  .activity-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--link-color);
  }

  .activity-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.6rem;
  }

  .activity-icon svg {
    width: 2.2rem;
    height: 2.2rem;
    stroke: var(--primary);
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 0.2s ease, fill 0.2s ease;
  }

  .activity-card:hover .activity-icon svg {
    stroke: var(--link-color);
  }

  /* Make filled elements (currentColor) also change on hover */
  .activity-card:hover .activity-icon svg [fill="currentColor"] {
    fill: var(--link-color);
  }

  .activity-title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
    color: var(--primary);
  }

  .activity-subtitle {
    font-size: 0.8rem;
    color: var(--secondary);
    line-height: 1.3;
  }

  @media (max-width: 600px) {
    .activities-grid {
      grid-template-columns: 1fr 1fr;
      gap: 0.9rem;
    }
    .activity-card {
      padding: 1rem 0.8rem;
    }
    .activity-icon svg {
      width: 1.8rem;
      height: 1.8rem;
    }
    .activity-title {
      font-size: 1rem;
    }
    .activity-subtitle {
      font-size: 0.7rem;
    }
  }
</style>

<div style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">

<p style="color: var(--secondary); margin: 0 auto 2rem auto;">
  Beyond research — I am actively engaged in teaching, speaking, organizing, and contributing to the academic community. Outside of work, I enjoy cartography, geometric woodworking, and generative art.
</p>

<div class="activities-grid">

  <!-- Teaching: Mortarboard / graduation cap -->
  <a href="teaching/" class="activity-card">
    <span class="activity-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M2 9L12 4L22 9L12 14L2 9Z" stroke="currentColor"/>
        <path d="M5 11v5c0 2 3 4 7 4s7-2 7-4v-5" stroke="currentColor"/>
        <path d="M19 11v3" stroke="currentColor" stroke-width="1.2"/>
      </svg>
    </span>
    <div class="activity-title">Teaching</div>
    <div class="activity-subtitle">Deep Learning &amp; Hydroinformatics</div>
  </a>

  <!-- Talks: Presentation screen with pointer -->
  <a href="slides/" class="activity-card">
    <span class="activity-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="12" rx="2" ry="2" stroke="currentColor"/>
        <path d="M8 20h8" stroke="currentColor"/>
        <path d="M12 16v4" stroke="currentColor"/>
        <path d="M7 8l3 2-3 2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M17 10h-4" stroke="currentColor" stroke-width="1.2"/>
      </svg>
    </span>
    <div class="activity-title">Talks &amp; Workshops</div>
    <div class="activity-subtitle">Conference &amp; Invited Talks</div>
  </a>

  <!-- Service: Handshake -->
  <a href="service/" class="activity-card">
    <span class="activity-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17 8L20 11L17 14" stroke="currentColor"/>
        <path d="M7 8L4 11L7 14" stroke="currentColor"/>
        <path d="M11 7L9 17" stroke="currentColor" stroke-width="1.2"/>
        <path d="M13 7L15 17" stroke="currentColor" stroke-width="1.2"/>
        <path d="M4 11h5" stroke="currentColor"/>
        <path d="M15 11h5" stroke="currentColor"/>
      </svg>
    </span>
    <div class="activity-title">Service &amp; Projects</div>
    <div class="activity-subtitle">Reviewing &amp; Community Work</div>
  </a>
</div>

<hr />

<div class="activities-grid">

  <!-- Cartography: Compass / map pin -->
  <a href="gen_art_carto/" class="activity-card">
    <span class="activity-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="10" r="6" stroke="currentColor"/>
        <path d="M12 4V2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M12 18v2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M18 10h2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M4 10H2" stroke="currentColor" stroke-width="1.2"/>
        <path d="M14.5 8.5L16 16L10.5 14.5L8 7L14.5 8.5Z" stroke="currentColor" fill="currentColor" fill-opacity="0.15"/>
        <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
      </svg>
    </span>
    <div class="activity-title">Cartography & Generative Art</div>
    <div class="activity-subtitle">Mapping &amp; Spatial Stories</div>
  </a>

  <!-- Woodworking: Saw + wood plank -->
  <a href="avdww/" class="activity-card">
    <span class="activity-icon">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="12" width="16" height="3" rx="0.5" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/>
        <path d="M8 8L5 15L8 18" stroke="currentColor"/>
        <path d="M16 8L19 15L16 18" stroke="currentColor"/>
        <path d="M12 8v10" stroke="currentColor" stroke-width="1.2"/>
        <path d="M10 8l2-3 2 3" stroke="currentColor" fill="none"/>
      </svg>
    </span>
    <div class="activity-title">Geometric Wood Working</div>
    <div class="activity-subtitle">Craft &amp; Timber Design</div>
  </a>

</div>

<div style="text-align: center; margin-top: 2rem;">
  <a href="/" style="color: var(--link-color); text-decoration: none; font-weight: 500;">← Back to Home</a>
</div>

</div>
