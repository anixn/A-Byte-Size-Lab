// ============================================================
// TAB FUNCTIONALITY
// ============================================================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn, .tab-content').forEach(el => {
            el.classList.remove('active');
        });
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.style.background = isError ? 'var(--accent)' : 'var(--primary)';

    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3000);
}

// ============================================================
// IMAGE COLOR EXTRACTION
// ============================================================
const imageUpload = document.getElementById('imageUpload');
const previewImage = document.getElementById('previewImage');
const imagePreview = document.getElementById('imagePreview');
const imageColors = document.getElementById('imageColors');
const colorCount = document.getElementById('colorCount');
const copyAllBtn = document.getElementById('copyAllBtn');
const analyzeBtn = document.getElementById('analyzeBtn');

// Drag & drop
imageUpload.addEventListener('dragover', (e) => {
    e.preventDefault();
    imageUpload.parentElement.style.borderColor = 'var(--primary)';
    imageUpload.parentElement.style.background = 'rgba(67, 97, 238, 0.1)';
});

imageUpload.addEventListener('dragleave', () => {
    imageUpload.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    imageUpload.parentElement.style.background = 'rgba(0, 0, 0, 0.1)';
});

imageUpload.addEventListener('drop', (e) => {
    e.preventDefault();
    imageUpload.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    imageUpload.parentElement.style.background = 'rgba(0, 0, 0, 0.1)';

    if (e.dataTransfer.files.length) {
        imageUpload.files = e.dataTransfer.files;
        const event = new Event('change');
        imageUpload.dispatchEvent(event);
    }
});

// File change
imageUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        previewImage.src = e.target.result;
        imagePreview.style.display = 'block';
        analyzeBtn.disabled = false;

        previewImage.onload = () => {
            extractColorsFromImage(previewImage);
        };
    };
    reader.readAsDataURL(file);
});

// Analyze button
analyzeBtn.addEventListener('click', () => {
    if (previewImage.src && previewImage.complete) {
        extractColorsFromImage(previewImage);
    } else if (previewImage.src) {
        previewImage.onload = () => {
            extractColorsFromImage(previewImage);
        };
    } else {
        showToast('Please upload an image first', true);
    }
});

async function extractColorsFromImage(img) {
    imageColors.innerHTML = '';
    const count = parseInt(colorCount.value);

    try {
        const vibrant = new Vibrant(img);
        const palette = await vibrant.getPalette();

        const allSwatches = Object.values(palette).filter(swatch => swatch !== null);
        const sortedSwatches = allSwatches.sort((a, b) => b.population - a.population);

        let colorsToUse = sortedSwatches.slice(0, count);

        if (colorsToUse.length < count) {
            const baseColor = colorsToUse[0].getHex();
            const additionalColors = generateAdditionalColors(baseColor, count - colorsToUse.length);
            additionalColors.forEach(color => {
                colorsToUse.push({ getHex: () => color, population: 1 });
            });
        }

        colorsToUse.forEach(swatch => createColorCard(swatch.getHex()));
        showToast(`Extracted ${colorsToUse.length} colors from image`);
    } catch (err) {
        showToast('Error processing image', true);
        console.error(err);
    }
}

function generateAdditionalColors(baseColor, count) {
    const baseHsl = hexToHsl(baseColor);
    const colors = [];

    for (let i = 0; i < count; i++) {
        const hue = (baseHsl.h + (i * 30)) % 360;
        const saturation = Math.min(100, Math.max(20, baseHsl.s + (i % 2 === 0 ? 10 : -10)));
        const lightness = Math.min(90, Math.max(10, baseHsl.l + (i - Math.floor(count / 2)) * 5));

        const rgb = hslToRgb(hue, saturation, lightness);
        colors.push(rgbToHex(rgb.r, rgb.g, rgb.b));
    }
    return colors;
}

function createColorCard(hex) {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.style.backgroundColor = hex;

    const info = document.createElement('div');
    info.className = 'color-info';
    info.textContent = hex.toUpperCase();

    card.appendChild(info);

    card.addEventListener('click', () => {
        navigator.clipboard.writeText(hex);
        showToast(`Copied ${hex.toUpperCase()}`);
    });

    imageColors.appendChild(card);
}

copyAllBtn.addEventListener('click', () => {
    const colors = [...document.querySelectorAll('#imageColors .color-info')]
        .map(el => el.textContent)
        .join('\n');

    if (colors) {
        navigator.clipboard.writeText(colors);
        showToast('Copied all colors');
    } else {
        showToast('No colors to copy', true);
    }
});

// ============================================================
// COLOR MIXER
// ============================================================
const sliders = {
    red: document.getElementById('redSlider'),
    green: document.getElementById('greenSlider'),
    blue: document.getElementById('blueSlider'),
    alpha: document.getElementById('alphaSlider')
};
const values = {
    red: document.getElementById('redValue'),
    green: document.getElementById('greenValue'),
    blue: document.getElementById('blueValue'),
    alpha: document.getElementById('alphaValue')
};
const colorPreview = document.getElementById('colorPreview');
const copyHexBtn = document.getElementById('copyHexBtn');
const copyRgbaBtn = document.getElementById('copyRgbaBtn');
const randomColorBtn = document.getElementById('randomColorBtn');

function updateColor() {
    const r = sliders.red.value;
    const g = sliders.green.value;
    const b = sliders.blue.value;
    const a = sliders.alpha.value;

    values.red.textContent = r;
    values.green.textContent = g;
    values.blue.textContent = b;
    values.alpha.textContent = Number(a).toFixed(2);

    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    const hexColor = rgbToHex(r, g, b);

    colorPreview.style.backgroundColor = rgbaColor;
    return { rgbaColor, hexColor };
}

Object.values(sliders).forEach(slider => {
    slider.addEventListener('input', updateColor);
});

copyHexBtn.addEventListener('click', () => {
    const { hexColor } = updateColor();
    navigator.clipboard.writeText(hexColor);
    showToast(`Copied ${hexColor.toUpperCase()}`);
});

copyRgbaBtn.addEventListener('click', () => {
    const { rgbaColor } = updateColor();
    navigator.clipboard.writeText(rgbaColor);
    showToast(`Copied ${rgbaColor}`);
});

randomColorBtn.addEventListener('click', () => {
    const randomColor = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        a: 1.00
    };

    sliders.red.value = randomColor.r;
    sliders.green.value = randomColor.g;
    sliders.blue.value = randomColor.b;
    sliders.alpha.value = randomColor.a;

    updateColor();
    showToast('Generated random color');
});

// ============================================================
// COLOR SCHEME GENERATOR
// ============================================================
const baseColorInput = document.getElementById('baseColor');
const schemeCount = document.getElementById('schemeCount');
const schemeType = document.getElementById('schemeType');
const generateSchemeBtn = document.getElementById('generateSchemeBtn');
const generatedScheme = document.getElementById('generatedScheme');

generateSchemeBtn.addEventListener('click', generateColorScheme);
baseColorInput.addEventListener('change', generateColorScheme);

function generateColorScheme() {
    const count = parseInt(schemeCount.value);
    const type = schemeType.value;
    const baseColor = baseColorInput.value;

    generatedScheme.innerHTML = '';

    const colors = generateSchemeColors(baseColor, count, type);

    colors.forEach(color => {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.style.backgroundColor = color.hex;

        const info = document.createElement('div');
        info.className = 'color-info';
        info.textContent = color.hex.toUpperCase();

        card.appendChild(info);

        card.addEventListener('click', () => {
            navigator.clipboard.writeText(color.hex);
            showToast(`Copied ${color.hex.toUpperCase()}`);
        });

        generatedScheme.appendChild(card);
    });

    showToast('Generated new color scheme');
}

function generateSchemeColors(baseColor, count, type) {
    const baseHsl = hexToHsl(baseColor);
    const colors = [];

    // ----- Monochromatic: vary lightness only -----
    if (type === 'monochromatic') {
        for (let i = 0; i < count; i++) {
            const lightness = Math.min(90, Math.max(10, baseHsl.l + (i - Math.floor(count / 2)) * 10));
            const rgb = hslToRgb(baseHsl.h, baseHsl.s, lightness);
            colors.push({ hex: rgbToHex(rgb.r, rgb.g, rgb.b), rgb });
        }
        return colors;
    }

    // ----- Build hue array based on scheme type -----
    let hues = [];

    if (type === 'complementary') {
        const comp = (baseHsl.h + 180) % 360;
        if (count === 2) {
            hues = [baseHsl.h, comp];
        } else {
            // Split‑complementary: base + alternating offsets around complement
            hues = [baseHsl.h];
            const offsetStep = 30;
            for (let i = 1; i < count; i++) {
                const sign = (i % 2 === 1) ? 1 : -1;
                const step = Math.ceil(i / 2) * offsetStep;
                let h = (comp + sign * step) % 360;
                if (h < 0) h += 360;
                // Avoid duplicates with base or previous
                if (Math.abs(h - baseHsl.h) < 5 || hues.some(ex => Math.abs(ex - h) < 5)) {
                    h = (h + 15) % 360;
                }
                hues.push(h);
            }
        }
    } else if (type === 'triadic') {
        const triHues = [
            baseHsl.h,
            (baseHsl.h + 120) % 360,
            (baseHsl.h + 240) % 360
        ];
        if (count <= 3) {
            for (let i = 0; i < count; i++) {
                hues.push(triHues[i]);
            }
        } else {
            // Extended triadic: distribute count among the three nodes
            const perNode = Math.floor(count / 3);
            const remainder = count % 3;
            for (let node = 0; node < 3; node++) {
                const num = perNode + (node < remainder ? 1 : 0);
                if (num === 0) continue;
                // Spread hues within a range around the node
                const spread = Math.min(25, 15 + (num - 1) * 3); // dynamic spread
                if (num === 1) {
                    hues.push(triHues[node]);
                } else {
                    for (let j = 0; j < num; j++) {
                        let offset = (j / (num - 1) - 0.5) * 2 * spread;
                        let h = (triHues[node] + offset + 360) % 360;
                        hues.push(h);
                    }
                }
            }
        }
    } else if (type === 'analogous') {
        const range = 60; // total spread (±30°)
        if (count === 1) {
            hues = [baseHsl.h];
        } else {
            const step = range / (count - 1);
            for (let i = 0; i < count; i++) {
                let h = (baseHsl.h - range / 2 + i * step) % 360;
                if (h < 0) h += 360;
                hues.push(h);
            }
        }
    }

    // ----- Build final colors with saturation/lightness variations -----
    for (let i = 0; i < count; i++) {
        let hue = hues[i] !== undefined ? hues[i] : (baseHsl.h + i * 30) % 360;
        let sat = baseHsl.s;
        let lig = baseHsl.l;

        // For triadic with >3, we already have varied hues, so only small lightness/sat variation
        if (type === 'triadic' && count > 3) {
            // Slight variation per index to differentiate
            const offset = (i % 3 === 0) ? 5 : (i % 3 === 1 ? -5 : 0);
            lig = Math.min(90, Math.max(10, lig + offset));
            sat = Math.min(100, Math.max(20, sat + (i % 2 === 0 ? 5 : -5)));
        } else {
            // For other schemes: small variations
            const satOffset = (i % 2 === 0) ? 5 : -5;
            const ligOffset = (i % 3 === 0) ? 5 : (i % 3 === 1 ? -5 : 0);
            sat = Math.min(100, Math.max(20, sat + satOffset));
            lig = Math.min(90, Math.max(10, lig + ligOffset));
        }

        const rgb = hslToRgb(hue, sat, lig);
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

        // Avoid duplicate hex (fallback: shift lightness)
        if (colors.some(c => c.hex === hex)) {
            lig = Math.min(90, Math.max(10, lig + 10));
            const newRgb = hslToRgb(hue, sat, lig);
            const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
            if (!colors.some(c => c.hex === newHex)) {
                colors.push({ hex: newHex, rgb: newRgb });
                continue;
            }
        }
        colors.push({ hex, rgb });
    }

    return colors;
}

// ============================================================
// PALETTES
// ============================================================
const palettes = [
    {
        name: "Oceanic Depth",
        description: "Deep sea inspired sequential palette",
        colors: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"],
        citation: "Scientific Color"
    },
    {
        name: "Forest Canopy",
        description: "Natural green qualitative palette",
        colors: ["#004d40", "#00695c", "#00796b", "#00897b", "#009688", "#26a69a", "#4db6ac", "#80cbc4"],
        citation: "Scientific Color"
    },
    {
        name: "Sunset Horizon",
        description: "Warm sunset color progression",
        colors: ["#ff6b6b", "#ff8e8e", "#ffaaa5", "#ffd3b6", "#ffe8d6", "#dcedc1", "#a8e6cf", "#64ccc5"],
        citation: "Scientific Color"
    },
    {
        name: "Galaxy Core",
        description: "Deep space color scheme",
        colors: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4"],
        citation: "Scientific Color"
    },
    {
        name: "Celestial Bloom",
        description: "A gradient of a blooming nebula",
        colors: ["#14213d", "#1a535c", "#4ecdc4", "#f7fff7", "#ff6b6b", "#ffe66d"],
        citation: "Inspired by cosmic florals"
    },
    {
        name: "Aurora Whisper",
        description: "Soft, ethereal colors",
        colors: ["#0b486b", "#3b8686", "#79bd9a", "#c6e2b1", "#f0f0f0", "#ff9a8b"],
        citation: "Inspired by polar lights"
    },
    {
        name: "Modern UI",
        description: "Clean UI color palette",
        colors: ["#4361ee", "#3a0ca3", "#7209b7", "#f72585", "#4cc9f0"],
        citation: "Modern UI Colors"
    },
    {
        name: "Earth Tones",
        description: "Natural earth-inspired colors",
        colors: ["#582f0e", "#7f4f24", "#936639", "#a68a64", "#b6ad90", "#c2c5aa", "#a4ac86", "#656d4a"],
        citation: "Natural Palette"
    },
    {
        name: "Viridis",
        description: "A perceptually uniform color palette.",
        colors: ["#440154", "#482878", "#3e4989", "#31688e", "#26828e", "#1f9e89", "#35b779", "#6ece58", "#b5de2b", "#fde725"],
        citation: "viridis R package (Simon Garnier, 2018)"
    },
    {
        name: "Magma",
        description: "Perceptually uniform, dark-friendly palette from black to white with purple-red tones",
        colors: ["#000004", "#180f3d", "#440f76", "#721f81", "#9e2f7f", "#cd4071", "#f1605d", "#fd9668", "#feca8d", "#fcfdbf"],
        citation: "viridis R package (Simon Garnier, 2018)"
    },
    {
        name: "Plasma",
        description: "Perceptually uniform, vibrant palette from dark blue to yellow",
        colors: ["#0d0887", "#46039f", "#7201a8", "#9c179e", "#bd3786", "#d8576b", "#ed7953", "#fb9f3a", "#fdca26", "#f0f921"],
        citation: "viridis R package (Simon Garnier, 2018)"
    },
    {
        name: "Inferno",
        description: "Perceptually uniform, high-contrast palette from black to yellow",
        colors: ["#000004", "#1b0c41", "#4a0c6b", "#781c6d", "#a52c60", "#cf4446", "#ed6925", "#fb9b06", "#f7d13d", "#fcffa4"],
        citation: "viridis R package (Simon Garnier, 2018)"
    },
    {
        name: "Cividis",
        description: "Perceptually uniform, optimized for color vision deficiency (CVD)",
        colors: ["#00204d", "#123570", "#354f7e", "#4b6a8a", "#628394", "#7b9d8e", "#98b584", "#bace78", "#dbe36c", "#fdffa4"],
        citation: "viridis R package (Simon Garnier, 2018)"
    },
    {
        name: "Outlier Highlight",
        description: "Diverging palette with a neutral mid-point and high-contrast extremes to emphasize outliers",
        colors: ["#053061", "#2166ac", "#4393c3", "#92c5de", "#d1e5f0", "#f7f7f7", "#fddbc7", "#f4a582", "#d6604d", "#b2182b", "#67001f"],
        citation: "Modified from 'RColorBrewer' diverging palette (RdYlBu reversed)"
    },
    {
        name: "Viridis-Outlier",
        description: "Viridis with a stark white mid-point to highlight deviations",
        colors: ["#440154", "#482878", "#3e4989", "#31688e", "#26828e", "#FFFFFF", "#35b779", "#6ece58", "#b5de2b", "#fde725"],
        citation: "Adapted from viridis (Simon Garnier, 2018)"
    },
    {
        name: "Terrain Elevation",
        description: "Natural gradient from water (dark blue) to lowlands (green) to mountains (brown/white)",
        colors: ["#00008b", "#1e90ff", "#00bfff", "#5f9ea0", "#8fbc8f", "#9acd32", "#ffff00", "#ffd700", "#daa520", "#b8860b", "#a52a2a", "#d2691e", "#f5f5f5"],
        citation: "Inspired by GMT 'etopo1' and QGIS terrain palettes"
    },
    {
        name: "RdBu",
        description: "Classic diverging palette for highlighting extremes",
        colors: ["#67001F", "#B2182B", "#D6604D", "#F4A582", "#FDDBC7", "#F7F7F7", "#D1E5F0", "#92C5DE", "#4393C3", "#2166AC", "#053061"],
        citation: "ColorBrewer"
    },
    {
        name: "Turbo",
        description: "Vibrant alternative to 'jet' without perceptual distortion",
        colors: ["#30123B", "#4662D7", "#36AAF9", "#1AE4B6", "#72FE5E", "#C7EF34", "#FABA39", "#F66B19", "#CB2A04", "#7A0403"],
        citation: "Google Research (Anton Mikhailov)"
    },
    {
        name: "Batlow",
        description: "Colorblind-friendly, perceptually uniform heatmap palette",
        colors: ["#001959", "#0D3A69", "#3A5270", "#6A6F78", "#9B8B7D", "#CBAA7F", "#FBCB7B", "#F7934A", "#E95D22", "#A90000"],
        citation: "Scientific colour maps (Crameri, 2020)"
    },
    {
        name: "Pastel 1",
        description: "Light, muted colors for subtle visualizations",
        colors: ["#FBB4AE", "#B3CDE3", "#CCEBC5", "#DECBE4", "#FED9A6", "#FFFFCC", "#E5D8BD", "#FDDAEC", "#F2F2F2"],
        citation: "ColorBrewer"
    }
];

const paletteContainer = document.getElementById('paletteContainer');
const searchBox = document.querySelector('.search-box');
const randomPaletteBtn = document.querySelector('.random-palette');
const exportImageBtn = document.getElementById('exportImage');

function renderPalettes(palettesToRender) {
    paletteContainer.innerHTML = '';

    palettesToRender.forEach(palette => {
        const paletteCard = document.createElement('div');
        paletteCard.className = 'palette-card';

        paletteCard.addEventListener('click', (event) => {
            if (!event.target.closest('.palette-color')) {
                const colors = palette.colors.join('\n');
                navigator.clipboard.writeText(colors);
                showToast(`📋 Copied all ${palette.colors.length} colors from ${palette.name}`);
            }
        });

        paletteCard.innerHTML = `
            <h3 style="font-size: 1rem; margin-bottom: 0.25rem; color: var(--text-light);">${palette.name}</h3>
            <p style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--text-muted);">${palette.description}</p>
            <div class="palette-colors">
                ${palette.colors.map(color => `
                    <div class="palette-color" style="background-color: ${color};" title="${color}"></div>
                `).join('')}
            </div>
            <div class="palette-meta">
                <span>${palette.colors.length} colors</span>
                <span>${palette.citation}</span>
            </div>
        `;

        paletteContainer.appendChild(paletteCard);

        paletteCard.querySelectorAll('.palette-color').forEach((colorEl, index) => {
            colorEl.addEventListener('click', (event) => {
                event.stopPropagation();
                const color = palette.colors[index];
                navigator.clipboard.writeText(color);
                showToast(`🎨 Copied ${color.toUpperCase()}`);
            });
        });
    });
}

searchBox.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = palettes.filter(palette =>
        palette.name.toLowerCase().includes(term) ||
        palette.description.toLowerCase().includes(term)
    );
    renderPalettes(filtered);
});

randomPaletteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * palettes.length);
    renderPalettes([palettes[randomIndex]]);
    showToast('Loaded random palette');
});

exportImageBtn.addEventListener('click', async () => {
    try {
        const canvas = await html2canvas(paletteContainer, {
            backgroundColor: getComputedStyle(document.body).backgroundColor,
            scale: 2
        });

        const link = document.createElement('a');
        link.download = 'color-palettes.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('Exported palettes as image');
    } catch (error) {
        showToast('Export failed', true);
        console.error('Export error:', error);
    }
});

// ============================================================
// HELPER FUNCTIONS
// ============================================================
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

function hexToHsl(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    return { r: Math.round(255 * f(0)), g: Math.round(255 * f(8)), b: Math.round(255 * f(4)) };
}

// ============================================================
// INITIALIZATION
// ============================================================
function init() {
    updateColor();
    renderPalettes(palettes);
    generateColorScheme();
    analyzeBtn.disabled = true;

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
