# Agent-runner Memory & Architecture Index - Hotel H69

This document acts as the private memory file for AI agents in future sessions to understand the codebase structure, choices, and non-obvious architecture of the **Hotel H69** static web application.

---

## 🏛️ Project Architecture

Hotel H69 is constructed as an optimized, multi-page frontend static application with direct integration with Netlify's serverless forms platform.

```
/
├── images/
│   ├── hero.svg        # Complex SVG representing luxury archway and skyline
│   ├── room1.svg       # SVG representing Deluxe Room beds and interior
│   ├── room2.svg       # SVG representing Executive Suite chandeliers and lounge
│   └── room3.svg       # SVG representing the Penthouse skyline and infinity pool
├── index.html          # Main homepage landing section
├── about.html          # Secondary editorial brand heritage section
├── rooms.html          # Interactive accommodation pricing grid and stay cost calculator
├── gallery.html        # Filterable visual showroom gallery 
├── booking.html        # Booking enquiry form with integrated validation
├── contact.html        # General message contact form
├── style.css           # Centralized premium variables and styling core
└── script.js           # Client-side routing, calculator, menu, and validator script
```

---

## 🛠️ Non-Obvious Engineering Decisions

### 1. Fully-Custom High-Fidelity SVG Illustrations
- **The Problem:** Stock or external hotlinked hotel images can be blocked, suffer from slow load times, or produce visual inconsistency.
- **The Solution:** Custom, modern, CSS-variables-aware inline and local SVGs were created. Each room and pool asset is rendered procedurally with responsive scaling, giving the site a distinctive premium "hand-crafted" luxury aesthetic without relying on external media.

### 2. Standardized Native Styling over Heavy Frameworks
- **Decision:** Do not use TailwindCSS or utility libraries. 
- **Rationale:** Hotel H69 demands a premium, high-end editorial feel that standard utility CSS cannot easily reproduce without large config files. Custom Vanilla CSS allows precise controls over micro-animations, custom variables, responsive breakpoints, backdrop filters, and font scaling while loading instantly.

### 3. Progressive Client Interactivity
- **Calculator Form:** The Stay Cost Estimator on `rooms.html` recalculates estimated room pricing in real time (using change and key input events) to deliver immediate responsiveness.
- **Input Validation:** Rather than basic browser constraints, custom JavaScript validation has been applied. It runs comprehensive format checks on Emails and ensures Phone fields match active 10-digit Indian formats (crucial for local MANTRA 2026 guidelines).
- **Netlify Forms Emulation:** Both forms (`booking.html` and `contact.html`) are marked with `data-netlify="true"`. JavaScript intercepts form submission, performs absolute layout validation, displays a clean luxury notification toast, and resets inputs. Netlify automatically picks up the raw POST submission from the DOM.

---

## 🏷️ SEO & Compliance Constraints
- Under MANTRA 2026 guidelines, each page must adhere to a strict SEO audit.
- **Rules Met:**
  - One main `<h1>` per page.
  - Contextual metadata (keywords, meta descriptions, correct responsive viewports).
  - Explicit semantic layout headings (`<h2>`, `<h3>`).
  - Strict image `alt` texts explaining the luxury visual elements for screen readers.
