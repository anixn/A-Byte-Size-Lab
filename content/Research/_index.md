---
title: "Research"
layout: "main"
#url: /default/
---

<div class="image-overlay-container">
  <!-- Your image -->
  <img src="banner.webp" alt="Profile or banner image" class="background-image">

  <!-- Social icons overlay -->
  <div class="social-icons-custom">
    <a href="https://www.researchgate.net/profile/Ankit-Deshmukh-2" target="_blank">
      <img src="RG.png" alt="ResearchGate" title="ResearchGate">
    </a>
    <a href="https://scholar.google.com/citations?user=tmzuq8QAAAAJ" target="_blank">
      <img src="GS.png" alt="Google Scholar" title="Google Scholar">
    </a>
    <a href="https://orcid.org/0000-0002-1433-3872" target="_blank">
      <img src="ID.png" alt="ORCID" title="ORCID">
    </a>
    <a href="https://www.linkedin.com/in/anixn/" target="_blank">
      <img src="IN.png" alt="LinkedIn" title="LinkedIn">
    </a>
    <a href="https://twitter.com/anix7n" target="_blank">
      <img src="TW.png" alt="Twitter" title="Twitter">
    </a>
  </div>
</div>

<style>
/* Container for the image + overlay */
.image-overlay-container {
  position: relative;
  display: inline-block;
}

/* The background image */
.background-image {
  display: block;
  width: 100%;
  height: auto;
}

/* Overlay icons - positioned top-right */
.social-icons-custom {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

/* Icon styling */
.social-icons-custom img {
  width: 28px;
  height: 28px;
  display: block;
 filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.91));
}
</style>
