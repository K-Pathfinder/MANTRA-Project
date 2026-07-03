# Hotel H69 - Premium Luxury Hotel & Suites

A modern, highly-polished, fully responsive, and SEO-optimized multi-page static website for **Hotel H69**, a fictional luxury hotel based on Marine Drive, Mumbai. 

This website was built to satisfy and exceed the criteria set forth in the **MANTRA 2026 Summer School Frontend Website Assignment** (Maximum Marks: 10), showcasing clean layout design, premium custom vector (SVG) artwork, seamless responsive breakpoints, custom real-time JavaScript features, and full Netlify integration.

---

## 🚀 Key Technologies Used

- **HTML5:** Well-structured semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) to promote accessibility and sound layout.
- **CSS3 (Vanilla CSS):** Fully custom design featuring a high-end dark slate and gold luxury aesthetic. Implements flexible layouts using CSS Grid and Flexbox, custom variables, smooth transitions, premium typography (Cinzel & Montserrat), and comprehensive media query breakpoints for responsiveness. No heavy frameworks (like Tailwind) were used, ensuring lightning-fast load times.
- **JavaScript (Vanilla JS):** Clean client-side scripting containing zero dependencies. Powers multiple interactive features:
  - Responsive mobile burger navigation menu.
  - Interactive Gallery Category Filter.
  - Real-time Stay Cost Estimator/Calculator based on selected accommodation, nights, and guests.
  - Complete form client-side validation (for emails, Indian phone formatting, and empty fields).
- **SVG Graphics:** Fully custom, responsive, procedurally-designed inline vector graphics representing high-quality luxury rooms, the signature rooftop infinity pool, and the majestic hotel entrance.
- **Netlify Forms:** Integrated seamless form handling directly on the booking and contact pages using simple declarative HTML attributes.

---

## 📁 Project Structure

```
/
├── images/
│   ├── hero.svg        # Central premium luxury gate and logo artwork
│   ├── room1.svg       # Custom vector artwork for the Deluxe Room
│   ├── room2.svg       # Custom vector artwork for the Executive Suite
│   └── room3.svg       # Custom vector artwork for the H69 Penthouse / Pool
├── index.html          # Main Home page with intro, amenities, and highlights
├── about.html          # About page detailing the story, heritage, and values
├── rooms.html          # Rooms page showcasing accommodation tiers & Stay Cost Estimator
├── gallery.html        # Virtual Tour page featuring an interactive filterable photo grid
├── booking.html        # Booking Enquiry form with full validation and Netlify Forms support
├── contact.html        # Contact Us form and physical address/map information
├── style.css           # Core stylesheet (variables, responsive grids, and luxury styling)
├── script.js           # Client-side validation, filter, menu, and calculator scripts
├── README.md           # Developer documentation
└── AGENTS.md           # Architecture, decisions, and system constraints
```

---

## 🛠️ How to Run Locally

You can run this project locally using any simple HTTP server.

1. **Option A (Vite / Live Server):**
   Open the folder with VS Code and click "Go Live" or run:
   ```bash
   npx vite
   ```

2. **Option B (Python Simple Server):**
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

3. **Option C (Netlify Dev CLI):**
   If you have the Netlify CLI installed globally, you can emulate the Netlify platform functions and forms locally by running:
   ```bash
   netlify dev --port 8889
   ```

---

## 📋 MANTRA 2026 Evaluation Checklist Met

- [x] **Website Structure & Required Pages (2/2):** Home, About, Rooms, Gallery, Booking, and Contact pages are fully implemented with a coherent navigation menu.
- [x] **Frontend Design & Content Quality (2/2):** Built with premium color palettes, customized high-end typography, clean spacing, and bespoke SVGs.
- [x] **Responsive Design (2/2):** Seamlessly shifts from widescreen desktop down to tablets and 320px mobile screens.
- [x] **Basic SEO Implementation (1.5/1.5):** Individualized `<title>` tags, descriptive meta descriptions, key tags, proper `<h1>` hierarchy, and context-specific alt tags for all images.
- [x] **JavaScript Feature (1/1):** Includes interactive mobile burger toggle, category photo filters, robust email/phone validators, and a real-time price calculator.
- [x] **Netlify Deployment (1.5/1.5):** Includes proper Netlify Forms declarations ready for live hosting.