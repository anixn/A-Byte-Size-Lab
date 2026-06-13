---
title: "Research"
layout: "main"
#url: /default/
---

<div class="image-overlay-container">
  <!-- Your image -->
  <img src="banner.jpg" alt="Profile or banner image" class="background-image">

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
}


</style>

<style>
  /* Minimal styling for collapsible details – does not break theme */
  details {
    margin: 1.5em 0;
  }
  details summary {
    cursor: pointer;
    list-style: none; /* Removes default triangle in some browsers */
  }
  details summary::-webkit-details-marker {
    display: none; /* Hides default triangle in WebKit */
  }
  details summary::before {
    content: "▶";
    margin-right: 0.5rem;
    font-size: 0.9em;
    display: inline-block;
    transition: transform 0.2s;
  }
  details[open] summary::before {
    transform: rotate(90deg);
  }
  /* Keep heading inside summary inline */
  details summary h3,
  details summary h2 {
    display: inline;
    font-size: inherit;
  }
</style>

<details>

<summary><h3>Research Interests</h3></summary>

My research lies at the intersection of **computational hydrology, water resources engineering, geospatial analytics, and environmental change science**. I am particularly interested in understanding how climatic variability, land-use change, and anthropogenic interventions alter catchment-scale hydrological processes and water availability.

During my doctoral research, I developed methodologies for assessing **catchment vulnerability to environmental change**, with a focus on quantifying the sensitivity and resilience of river basins under changing hydro-climatic conditions. This work strengthened my interest in data-driven hydrological analysis and large-scale environmental assessment.

My current research focuses on developing a comprehensive **physio-climatic catchment characteristics database for the Indian subcontinent** to support hydrological prediction in ungauged basins (PUB), regionalization studies, drought assessment, and large-sample hydrology applications. I am also interested in understanding how climate variability, socio-economic development, and landscape alterations influence streamflow dynamics and catchment response.

My expertise includes **geospatial data processing, remote sensing, hydrological modeling, drought analysis, statistical computing, and reproducible environmental research**. I work extensively with R and open-source geospatial tools to develop scalable workflows for environmental data analysis and decision support. I actively seek interdisciplinary collaborations that combine hydrology, climate science, geospatial technologies, and data-driven modeling approaches.

---

## Current Research Topics

- Development of a physio-climatic catchment characteristics dataset for Indian river basins.
- Catchment vulnerability assessment under climate and environmental change.
- Prediction in ungauged basins using regionalization and machine learning approaches.
- Large-sample hydrology and comparative catchment analysis.
- Hydrological and agricultural drought monitoring, forecasting, and risk assessment.
- Impacts of climate variability and socio-economic development on streamflow response.
- Geospatial and remote sensing applications in water resources management.

---

## Skills

| Category             | Expertise                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Research Areas**   | Computational Hydrology, Water Resources Engineering, Drought Analysis, Hydrological Modeling, Catchment Regionalization, Climate Change Impact Assessment, Geospatial Analytics |
| **Programming**      | R, Python, MATLAB                                                                                                                                                                |
| **Geospatial Tools** | QGIS, GDAL, Google Earth Engine (GEE)                                                                                                                                            |
| **R Ecosystem**      | tidyverse, terra, sf, stars, data.table, tidymodels, RMarkdown                                                                                                                   |
| **Data & Modeling**  | Statistical Analysis, Machine Learning, Hydrological Forecasting, Time-Series Analysis, Reproducible Research                                                                    |
| **Remote Sensing**   | Sentinel, Landsat, Climate Reanalysis Data, Geospatial Data Processing                                                                                                           |

</details>

<!-- Collapsible section: My work presented in the following studies (default collapsed) -->
<details>
<summary><h3>Research Snippets</h3></summary>

### 1. Physio-climatic controls on vulnerability of watersheds to climate and land use change across the United States.

> - We combine the strengths of recently developed exploratory modeling frameworks and comparative hydrology to quantify the relationship between watershed’s vulnerability and its physio-climatic characteristics.
> - We propose a definition of vulnerability that can be used by a diverse range of water system managers and is useful in the presence of large uncertainties in drivers of environmental change.
> - We estimate the vulnerability of 69 watersheds in the United States to climate and land use change.

<p align="center">
  <img src="Research01.png" width="450">
</p>

---

### 2. A Whittaker-Biome based framework to account for the impact of climate change on catchment behavior

> - Rainfall-runoff models are often used to simulate the impact of long-term climate change on future water availability.
> - We compare estimates of catchment's vulnerability to climate change obtained from fixed and changing parameters.
> - Our analysis shows that considering changes in catchment's representative parameters with climate significantly alters the estimated vulnerability to climate change for a majority of catchments.

<p align="center">
  <img src="Research02.png" width="450">
</p>

---

### 3. Discovering linkages between catchment characteristics and hydrologic response within a catchment classification framework

> - Our main goals in this study was to develop a framework for classification that can be employed to standardize classification exercises in hydrology.
> - We stress on two important aspects: the use of multiple classification methods and standardized performance metrics to gauge the success of a classification exercise.
> - We compare clustering based on water quality metrics and clustering based on catchment characteristics to identify combinations of catchment characteristics that best explain water quality variations.
> - We prepare a comprehensive database for catchment characteristics for catchments across India and use it to understand regional drivers of water quality.

<p align="center">
  <img src="Research03.png" width="450">
</p>

</details>

<!-- Collapsible section: Publications (default collapsed) -->
<details>
<summary><h3>Publications</h3></summary>

### Peer Reviewed Articles

- Deshmukh, A., and Singh, R. (2019). A Whittaker‐Biome based framework to account for the impact of climate change on catchment behavior. Water Resources Research, In Press, doi: 10.1029/2018WR023113

- Deshmukh, A., and Singh, R. (2016). Physio-climatic controls on vulnerability of watersheds to climate and land use change across the United States. Water Resources Research, doi: 10.1002/2016WR019189

### Book Chapter

- Singh, R., Veena, S., and Deshmukh, A., 2017. Assessing the vulnerability of water avialabilty across India to climate change and interlinking of rivers. In, Sustainable Holistic Water Resources Management, Raju, S., and Vasan, A. (eds)., 2017, M/S Jain Brothers, New Delhi

### Conferences & Meetings

_\*\* presented by_

- Deshmukh, D., Singh\*\*, R., and Samal, A. Catchment classification: a tool to understand hydrology in data scarce regions. 15th Annual Meeting of the Asia Oceania Geosciences Society (AOGS), 03-08 June 2018, Honolulu, Hawaii.

- Deshmukh\*\*, A., and Singh, R., 2018. Identifying physio-climatic controls on watershed vulnerability to climate and land use change. International Soil and Water Assessment Tool Conference, 10-12 January 2018, Chennai, India

- Deshmukh\*\*, A., Samal, S., and Singh, R., 2017. Towards a robust framework for catchment classification. Fall Meeting of the American Geophysical Union, 11-15 December 2017, New Orleans, USA.

- Singh\*\*, R., and Deshmukh, A., 2015, December. What controls vulnerability of watersheds to climate and land use change across the United States? Fall meeting of the American Geophysical Union, 14-18 December 2015, San Francisco, USA

</details>
