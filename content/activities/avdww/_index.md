---
title: "Geometric Wood Working"
layout: "main"
weight: 11
_build:
  list: false
---

<style>
  /* PaperMod theme-aware CSS variables */
  .image-column {
    text-align: center;
    margin: 1.5rem 0;
  }

  .main-image {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border);
  }

  .hero-container {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
    margin: 1.5rem 0 2rem;
  }

  .social-button {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1.2rem;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.25s ease;
    background: var(--entry);
    border: 1px solid var(--border);
    color: var(--primary);
  }

  .social-button:hover {
    transform: translateY(-3px);
    border-color: var(--link-color);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  }

  .social-icon {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }

  .content-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .talk-date {
    font-size: 1rem;
    font-weight: 500;
    color: var(--link-color);
    margin: 1.5rem 0 0.5rem;
    border-left: 3px solid var(--link-color);
    padding-left: 1rem;
  }

  .talk-summary {
    background: var(--entry);
    border-left: 4px solid var(--link-color);
    padding: 1rem 1.2rem;
    margin: 1rem 0;
    border-radius: 12px;
    line-height: 1.6;
    color: var(--primary);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .talk-summary p {
    margin: 0;
  }

  .pdf-embed {
    margin: 2rem 0;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--entry);
  }

  .pdf-embed embed {
    display: block;
    width: 100%;
    height: 500px;
    border: none;
  }

  /* Responsive */
  @media (max-width: 600px) {
    .hero-container {
      gap: 0.8rem;
    }
    .social-button {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }
    .social-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
    .talk-date {
      font-size: 0.9rem;
    }
    .talk-summary {
      padding: 0.8rem 1rem;
      font-size: 0.9rem;
    }
    .pdf-embed embed {
      height: 350px;
    }
  }
</style>

<div class="image-column">
  <img src="Banner.png" alt="Woodworking Projects" class="main-image">
</div>

<div class="hero-container">
  <a href="https://www.youtube.com/@AVD.Wood.Working" target="_blank" rel="noopener" class="social-button youtube">
    <svg class="social-icon" viewBox="0 0 24 24">
      <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
    YouTube Channel
  </a>
  <a href="https://www.instagram.com/avd.ww" target="_blank" rel="noopener" class="social-button instagram">
    <svg class="social-icon" viewBox="0 0 24 24">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    </svg>
    Instagram Profile
  </a>
</div>

<div class="content-section">
  <h3 class="talk-date">16 April 2025 | An Invited Talk on Wood Working</h3>
  <div class="talk-summary">
    <p>My woodworking journey began in 2005, crafting furniture from scrap wood, evolving into a lifelong passion blending creativity, patience, and heritage. I taught wood basics (grain, hardwoods vs. softwoods), key tools (saws, chisels), 13 joinery techniques, and safety. Emphasized starting small, practicing, and viewing woodworking as a rewarding, evolving craft where dedication yields timeless creations.</p>
  </div>
  <div class="pdf-embed">
    <embed src="AVD_PDEU_Talk.pdf" width="100%" height="500px" type="application/pdf">
  </div>
</div>
