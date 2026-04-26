# Archana N — Portfolio

A premium, dark, gradient-themed portfolio for **Archana N**, Software Test Engineer specializing in Playwright automation, API integrity, JMeter performance, and cybersecurity QA.

Built as a single-page React app with Vite, Tailwind, GSAP, and Framer Motion — designed to impress hiring managers in the first 5–10 seconds.

> **Quality is the product.**

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite 6 + TypeScript (strict) |
| Styling | Tailwind CSS 3 (custom dark theme + gradients) |
| Animations | GSAP 3 (with ScrollTrigger), Framer Motion |
| Icons | lucide-react |
| Fonts | Inter, Space Grotesk, JetBrains Mono (Google Fonts, preconnected) |
| Tooling | TypeScript strict mode, code-split sections, lazy loading |

---

## Highlights

- **Hero** with cinematic GSAP timeline (masked headline reveal, staggered CTAs, idle floating orb)
- **Proof section** — metrics-first cards + animated tools marquee
- **Projects** — Problem → Solution → Impact case studies with real product screenshots and external links (Verastel SPARK, VISIQ)
- **Skills** — 4 categorized cards with scroll-triggered animated proficiency bars
- **Experience timeline** with scrub-animated gradient rail
- **About** — story-driven copy + 4 principle cards
- **Contact** — glassmorphic form that hands off to the user's mail client
- **Cursor spotlight**, **scroll progress bar**, **section reveal animations**
- **Mobile-first responsive** from 320 px → 1440 px+
- **SEO foundation**: full Open Graph + Twitter cards, three JSON-LD schemas (Person / WebSite / ProfessionalService), `robots.txt`, `sitemap.xml`, PWA manifest, branded 1200×630 OG image
- **Accessibility**: skip-to-content link, `prefers-reduced-motion` respected, semantic landmarks, `aria-hidden` on decorative duplicates

---

## Project structure

```
archana_portfolio/
├── index.html                # SEO meta tags + JSON-LD structured data
├── public/
│   ├── favicon.svg
│   ├── og-image.svg          # 1200×630 social card
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── projects/             # Real product screenshots
│       ├── spark.png
│       └── visiq.png
├── src/
│   ├── main.tsx
│   ├── App.tsx               # Composition + lazy-loaded sections
│   ├── styles/index.css      # Globals, gradient bg, glass utilities, marquee
│   ├── data/portfolio.ts     # Single source of truth — copy + metrics
│   ├── hooks/
│   │   └── useGsapReveal.ts  # Reusable scroll-triggered reveal hook
│   └── components/
│       ├── layout/           # Background, CursorGlow, ScrollProgress, Navbar, Footer
│       ├── ui/               # SectionHeading, Marquee, SpotlightCard
│       └── sections/         # Hero, Proof, Projects, Skills, Experience, About, Contact
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
npm run dev          # starts dev server at http://localhost:5173
```

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) and build a production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (if configured) |

---

## Editing content

All copy, metrics, projects, skills, and experience live in **one file**:

```
src/data/portfolio.ts
```

To update:

- **Personal info / headline** — edit the `personal` object
- **Proof metrics** — edit the `metrics` array
- **Projects** — edit the `projects` array (each supports `image`, `href`, `hrefLabel`)
- **Skill groups + proficiency bars** — edit `skillGroups`
- **Experience** — edit the `experience` array
- **Certifications** — edit `certifications`
- **Tools marquee** — edit `trustedBy` and `tools`

No component files need to change for content updates.

### Adding a project screenshot

1. Drop the image into `public/projects/your-project.png`.
2. In `src/data/portfolio.ts`, add `image: "/projects/your-project.png"`, `href: "https://..."`, and `hrefLabel: "Visit X"` to the project entry.

The card automatically renders the screenshot, makes it clickable, and falls back to a mock test-runner UI when no image is provided.

---

## Animations

| Where | What |
|---|---|
| **Hero** | GSAP timeline: eyebrow → masked-line headline → sub → CTAs → stats → orb |
| **All sections** | `useGsapReveal` hook — fade + translate + blur on `[data-reveal]` children, tied to `ScrollTrigger` |
| **Skill bars** | Per-bar `ScrollTrigger` filling 0% → target on entry |
| **Experience rail** | `scrub: true` gradient line that draws as you scroll past |
| **Hero orb** | Infinite `sine.inOut` yoyo float |
| **Cursor glow** | rAF-based, pure transform (no React re-renders) |
| **Marquee** | CSS `@keyframes` (`translateX(0 → -50%)`) — pauses on hover |

`prefers-reduced-motion` is honored globally via `index.css`.

---

## SEO

- **Three JSON-LD schemas** in `index.html`: `Person`, `WebSite`, `ProfessionalService` (with `OfferCatalog` for service-rich Google results)
- **Full Open Graph + Twitter card** meta tags
- **Branded 1200×630 OG image** at `/og-image.svg`
- **`robots.txt`** + **`sitemap.xml`** ready for Search Console submission
- **`site.webmanifest`** — installable as a PWA (Add to Home Screen)
- **`<noscript>` fallback** with contact info for non-JS bots
- **Canonical URL** to prevent duplicate-content penalties

> Replace the placeholder domain `https://archananarsingoju.com/` in `index.html`, `sitemap.xml`, and `robots.txt` with your live deployed URL before launch.

---

## Performance

- **Code-split** every below-the-fold section (`React.lazy` + `Suspense`)
- **Lazy-loaded** project screenshots (`loading="lazy"`)
- **Preconnect + DNS-prefetch** for Google Fonts
- **Production gzipped JS:** ~120 KB (entry) + ~18 KB (GSAP/ScrollTrigger), with each section ~1–3 KB gz
- **CSS:** ~7 KB gz
- **GPU-accelerated** marquee + cursor spotlight (`translate3d`, `will-change: transform`)

---

## Deployment

Any static host works:

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

Drag-drop the `dist/` folder after running `npm run build`, or connect the repo with build command `npm run build` and publish directory `dist`.

### GitHub Pages / Cloudflare Pages / Firebase Hosting

Build with `npm run build` and deploy `dist/`.

After deployment, remember to update the placeholder domain everywhere (see SEO section).

---

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari 15+, Edge). Mobile Safari and Chrome Android tested.

---

## License

Personal portfolio — all content © Archana N. Code structure is shareable; please don't copy the personal copy/photos.

---

## Contact

- **Email:** narsingojuarchana27@gmail.com
- **Phone:** +91 77026 39270
- **Location:** Hyderabad, India
