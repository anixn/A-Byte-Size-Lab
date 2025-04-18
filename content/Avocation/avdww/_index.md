---
title: "AVD Wood Working"
layout: "main"
weight: 11
---

<div class="image-column">
    <img src="AVD_Soc.png" alt="Woodworking Projects" class="main-image">
</div>
<div class="hero-container">
    <div class="social-links">
        <a href="https://www.youtube.com/@AVD.Wood.Working" target="_blank" rel="noopener" class="social-button youtube">
            <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            YouTube Channel
        </a>
    </div>
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

<style>
.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 1rem; */
    max-width: 1200px;
    /* margin: 1rem auto; */
    /* padding: 1rem; */
    align-items: center;
}

.image-column img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

.social-button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.4rem 0.9rem;
    color: #e29b62;
    text-decoration: none;
    border: 2px solid rgba(226, 155, 98, 0.3);
    border-radius: 8px;
    transition: all 0.2s ease;
    font-size: 0.95rem;
    background: rgba(255,255,255,0.05);
}

.social-icon {
    width: 24px;
    height: 24px;
fill: #e29b62;
}

.social-button:hover {
    background: rgba(226, 155, 98, 0.1);
    transform: translateY(-2px);
}

.content-section {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.talk-date {
    color: #e29b62;
    margin: 1.5rem 0 1rem;
}

.talk-summary {
    margin-bottom: 1.5rem;
    line-height: 1.6;
}


.pdf-embed {
    width: 100%;
    max-width: 100%;
    border: 2px solid #e29b62;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin: 1rem 0;
    box-sizing: border-box;
}

/* Prevent horizontal scroll */
.pdf-embed embed {
    width: 106%;
    display: block;
    border: none;
    margin: 0;
    padding: 0;
}


@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .social-links {
        padding: 0;

    }
}
</style>
