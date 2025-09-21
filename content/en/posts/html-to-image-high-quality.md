---
title: "HTML Element → High-Quality Image (with html2canvas-pro)"
date: 2025-09-21
slug: "html-to-image-high-quality"
summary: "Tiny, production-ready utility to capture any DOM node as a crisp PNG—handles OKLCH colors and CORS."
tags: ["JavaScript", "Canvas", "html2canvas", "Frontend"]
categories: ["Technology", "Web Development"]
cover:
  image: "/images/html-to-image.png"
  alt: "HTML to image flow"
draft: false
------------------------------------------

Need a clean thumbnail from any HTML element on your page? This tiny helper uses html2canvas-pro to produce a sharp PNG, with a safe fallback for oklch() colors.
```bash
npm i html2canvas-pro
```
```js
import html2canvas from 'html2canvas-pro';

export async function capturePreview({
  selector = "#YOUR_TARGET_DOM",
  pixelRatio = 2
} = {}) {
  const node = document.querySelector(selector) || document.body;
  if (!node) throw new Error(`Target not found for selector: ${selector}`);

  await new Promise(r => requestAnimationFrame(r));

  const canvas = await html2canvas(node, {
    foreignObjectRendering: false,
    scale: pixelRatio,
    backgroundColor: "#fff",
    useCORS: true,
    allowTaint: true,
    logging: false,
    onclone: (doc) => {
      doc.querySelectorAll("*").forEach((el) => {
        const s = el.getAttribute("style");
        if (s?.includes("oklch(")) {
          el.setAttribute("style", s.replace(/oklch\([^)]+\)/g, "#000"));
        }
      });
    }
  });

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png", 1);
  });
}
```

### Usage
```js
const blob = await capturePreview({ selector: "#target", pixelRatio: 2 });
const form = new FormData();
form.append("file", blob, "preview.png");
await fetch("/api/upload", { method: "POST", body: form });
```

### Tips (super short):
- Set pixelRatio: 2–3 for retina-sharp output.
- Ensure fonts & images are loaded; host images with CORS headers.
- Keep the capture region small (wrap content in #target).