---
title: "AVD Wood Working"
layout: "main"
weight: 11
---

<div class="hero-container">
    <div class="image-column">
        <img src="AVD_Soc.png" alt="Woodworking Projects" class="main-image">
    </div>
    <div class="social-links">
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
</div>

<blockquote class="bio-quote">
    "I started woodworking back in 2005 with just a broken knife and some scrap wood from a construction site. I didn’t really know what I was doing—but I loved it. That first project lit a spark in me. Since then, working with wood has become one of the most exciting and fulfilling parts of my life. It’s creative, calming, and honestly, just really fun. I'm super excited to share that journey with you all today—and maybe even inspire some of you to pick up a chisel and start building something too!"
</blockquote>

<style>
.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 3rem auto;
    padding: 2rem;
    align-items: center;
}

.main-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.social-button {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 2rem;
    color: #e29b62;
    text-decoration: none;
    border: 2px solid rgba(226, 155, 98, 0.3);
    border-radius: 10px;
    transition: all 0.3s ease;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    background: rgba(255,255,255,0.05);
}

.social-icon {
    width: 28px;
    height: 28px;
    fill: currentColor;
}

.social-button:hover {
    background: rgba(226, 155, 98, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(226, 155, 98, 0.2);
}

.bio-quote {
    max-width: 800px;
    margin: 4rem auto;
    padding: 2rem;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #666;
    border-left: 4px solid #e29b62;
    background: #f9f9f9;
    font-style: italic;
}

@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 1rem;
    }

    .social-button {
        justify-content: center;
    }

    .bio-quote {
        margin: 2rem 1rem;
        padding: 1rem;
        font-size: 1rem;
    }
}
</style>
