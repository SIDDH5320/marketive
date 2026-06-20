# Marketive — Complete Project Context

> Single source of truth for AI-assisted development. Read this file instead of scanning the codebase.
> Last updated: 2026-06-14

---

## 1. Project Overview

**Name:** Marketive  
**Type:** Marketing agency website (React SPA)  
**Stack:** React 19, Vite 8, Tailwind CSS v4, Framer Motion v12, React Router v7  
**Design theme:** Brutalist — hard borders, stark box-shadows (`6px 6px 0 0`), uppercase typography, neon yellow accent  
**Primary font:** Syne (display/headings) + Inter (body) — loaded via Google Fonts in `index.html`  
**Accent color:** `#D4FF00` (neon yellow) — user-configurable via ThemeSwitcher  
**Modes:** Dark (default) + Light — toggled via `useTheme` hook, persisted in `localStorage`

---

## 2. File Structure

```
marketive/
├── index.html                          # HTML shell, static meta tags, font links
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                        # React root, StrictMode
│   ├── App.jsx                         # Router, ThemeProvider, BuilderProvider, Layout
│   ├── index.css                       # Tailwind v4 @theme, @layer base/components/utilities
│   ├── content/
│   │   └── content.js                  # ALL site copy (880+ lines, single source of truth)
│   ├── context/
│   │   └── BuilderContext.jsx          # Page builder state + localStorage persistence
│   ├── hooks/
│   │   ├── useTheme.jsx                # ThemeContext: dark/light + accent color
│   │   ├── useScrollProgress.js        # Scroll % for progress bar
│   │   └── useCountUp.js              # Animated number counter (IntersectionObserver)
│   ├── utils/
│   │   └── animations.js              # Framer Motion presets (fadeInUp, staggerContainer, etc.)
│   ├── pages/
│   │   ├── Home.jsx                   # Landing page (hero, trusted-by, services, stats, case studies, testimonials, CTA)
│   │   ├── Services.jsx               # Services detail page
│   │   ├── CaseStudies.jsx            # Case studies grid + filter + modal
│   │   ├── Blog.jsx                   # Blog listing + category filter + modal
│   │   ├── About.jsx                  # Mission/values/timeline/team
│   │   ├── Contact.jsx                # Contact form + info cards + map placeholder
│   │   ├── Admin.jsx                  # Page builder admin UI
│   │   └── DynamicPage.jsx            # Renders builder pages by slug
│   └── components/
│       ├── Navbar.jsx                 # Fixed top nav, mobile menu, scroll-aware bg
│       ├── Footer.jsx                 # Links, socials, contact info
│       ├── ThemeSwitcher.jsx          # Floating buttons: theme toggle + color picker panel
│       ├── SectionWrapper.jsx         # Reusable section shell (tagline + heading + description + children)
│       ├── ServiceCard.jsx            # Service card (number icon, title, desc, "Explore Service" CTA)
│       ├── CaseStudyCard.jsx          # Case study card (image placeholder, badge, metric, title, desc)
│       ├── BlogCard.jsx               # Blog card (category image, meta, title, excerpt, author avatar)
│       ├── CTASection.jsx             # Full-width yellow CTA banner (brutalist style)
│       ├── AnimatedText.jsx           # Word-by-word 3D flip animation (whileInView)
│       ├── sections/                  # Builder-compatible section components
│       │   ├── HeroSection.jsx        # Hero with editable text + bg image upload
│       │   ├── ServicesSection.jsx    # Services grid (add/remove in edit mode)
│       │   ├── CTASection.jsx         # Editable CTA (NOTE: duplicate name from components/CTASection.jsx)
│       │   ├── CaseStudiesSection.jsx # Case studies grid (edit mode)
│       │   └── BlogPreviewSection.jsx # Blog preview grid (edit mode)
│       └── admin/
│           ├── EditableText.jsx       # Inline editable text field
│           ├── EditableImage.jsx      # Inline editable image
│           ├── SectionOverlay.jsx     # Edit-mode overlay with move/delete controls
│           ├── EditorPanel.jsx        # Sidebar panel for builder
│           └── SectionForms.jsx       # Forms for section data in builder
```

---

## 3. Routing (`App.jsx`)

```
/              → Home.jsx
/services      → Services.jsx
/case-studies  → CaseStudies.jsx
/about         → About.jsx
/blog          → Blog.jsx
/contact       → Contact.jsx
/admin         → Admin.jsx  (no Navbar/Footer)
/builder/:slug → DynamicPage.jsx
```

- **No lazy loading** — all pages eagerly imported. `React.lazy()` not used anywhere.
- `AnimatePresence mode="wait"` wraps routes for page transitions.
- Admin route skips Navbar/Footer.
- `ScrollToTop` component resets scroll on route change.
- `ScrollProgress` renders the fixed top progress bar.

---

## 4. Theme System (`useTheme.jsx` + `index.css`)

### How it works
- `ThemeProvider` wraps the entire app in `App.jsx`
- Theme state: `'dark'` (default) or `'light'`, persisted to `localStorage('marketive-theme')`
- Accent color: hex string, default `#D4FF00`, persisted to `localStorage('theme-color')`
- Applying dark/light: `document.body.classList.remove('dark','light'); document.body.classList.add(theme)`
- Applying accent: `setProperty` on `:root` for `--primary`, `--color-primary-300/400/500/600`, `--primary-glow`, `--primary-foreground`, `--primary-on-dark`, `--primary-on-light`

### CSS Variable Architecture (`index.css`)

**`@theme` block** (Tailwind v4 — generates utility classes):
```
--color-primary-300/400/500/600  → bg-primary-*, text-primary-*, border-primary-* etc.
--color-accent-400/500/600
--color-surface-dark/darker/card/card-hover/border
--color-surface-light/light-card/light-card-hover/light-border
--font-sans / --font-display
```

**`:root` block** (plain CSS vars, NOT Tailwind utilities):
```
--primary             → used by @layer components (buttons, cards, glow)
--primary-glow
--primary-foreground
--primary-on-dark
--primary-on-light
```

**`@layer base`** — `body.dark` and `body.light` classes set background/text colors.  
**`@layer components`** — `.card-dark`, `.card-light`, `.btn-primary`, `.btn-secondary-dark`, `.btn-secondary-light`  
**`@layer utilities`** — `.accent-text`, `.noise-overlay`, `.scroll-progress`, `.bg-accent-solid`

### ThemeSwitcher UI
- Two always-visible floating buttons (bottom-right): theme toggle + palette open
- Theme toggle shows Sun (dark mode → will switch to light) / Moon (light mode → will switch to dark)
- Palette button opens panel with: mode toggle button, 6 color presets, custom color picker, reset button
- `DEFAULT_COLOR = "#D4FF00"` — reset button appears only when color differs

---

## 5. Content Architecture (`content/content.js`)

All text/data lives here. Pages import and destructure:
```js
import content from '../content/content';
const { home, services, caseStudies, blog, about, contact } = content;
```

**Top-level keys:**
- `siteName` — "Marketive"
- `nav` — `{ links: [{label, path}], cta: {label, path} }`
- `home` — `{ hero, trustedBy, servicesPreview, stats, caseStudiesPreview, testimonials, ctaBanner }`
- `services` — `{ hero, items: [{title, description, features, icon?}] }`
- `caseStudies` — `{ hero, items: [{id, title, client, industry, description, metrics:[{label,value}]}] }`
- `blog` — `{ hero, items: [{id, title, category, date, readTime, author, excerpt, content}] }`
- `about` — `{ hero, mission, values, timeline, team }`
- `contact` — `{ hero, form: {heading, fields, submitLabel, successMessage}, info, cta }`

---

## 6. Page Builder (`BuilderContext.jsx`)

- A lightweight CMS built into the site. Accessible at `/admin`.
- State: `pages` (object keyed by slug), `activePageSlug`, `isEditing` boolean
- Persisted entirely to `localStorage('marketive_builder_data')`
- Default page: `home` with 4 sections: hero, services, caseStudies, cta
- Section types: `hero`, `services`, `caseStudies`, `blogPreview`, `cta`
- API: `addPage`, `deletePage`, `updatePageNav`, `addSection`, `updateSection`, `removeSection`, `moveSection`, `exportData`, `importData`
- `isEditing` controls whether `EditableText` fields are active inline editors
- Builder pages render at `/builder/:slug` via `DynamicPage.jsx` using `SectionRenderer`
- **Critical bug:** Hero section allows bg image upload → stored as base64 data URL in localStorage → will hit 5MB quota

---

## 7. Key Components

### `SectionWrapper`
```jsx
<SectionWrapper tagline="" heading="" description="" id="" className="" noPadding={false}>
  {children}
</SectionWrapper>
```
Renders `<section>` with `max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28`. Tagline/heading/description are animated with `staggerContainer` + `fadeInUp` on `whileInView`.

### `AnimatedText`
Word-by-word 3D flip animation (`rotateX: -90 → 0`). Uses `whileInView` with `staggerChildren: 0.04`.  
**Bug:** No `aria-label` on the container — screen readers struggle with staggered words.

### `useCountUp(end, duration, startOnView)`
Returns `{ count, ref }`. Attach `ref` to the element. Uses `IntersectionObserver` threshold 0.3. Eases out cubic. Handles decimals.

### `CTASection` (components/)
Full-width yellow (`bg-accent-solid`) brutalist banner with diagonal stripe overlay. Black text. Hard border. Button inverts on hover.

---

## 8. Animations (`utils/animations.js`)

```js
fadeInUp          // opacity 0→1, y 40→0, duration 0.6, cubic-bezier
fadeInDown        // opacity 0→1, y -30→0
fadeIn            // opacity only
scaleIn           // opacity + scale 0.9→1
slideInLeft       // opacity + x -60→0
slideInRight      // opacity + x 60→0
staggerContainer  // staggerChildren: 0.1, delayChildren: 0.1
staggerContainerSlow  // staggerChildren: 0.15, delayChildren: 0.2
pageTransition    // spread onto <motion.div> — initial/animate/exit
```

Used pattern:
```jsx
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
  <motion.div variants={fadeInUp}>...</motion.div>
</motion.div>
```

---

## 9. Dependencies

### Production
| Package | Version | Used? | Notes |
|---------|---------|-------|-------|
| `react` | ^19.2.6 | ✅ | |
| `react-dom` | ^19.2.6 | ✅ | |
| `react-router-dom` | ^7.15.1 | ✅ | |
| `framer-motion` | ^12.40.0 | ✅ | Heavy use throughout |
| `lucide-react` | ^1.16.0 | ✅ | Icons |
| `lenis` | ^1.3.23 | ❌ | Installed, NEVER initialized |
| `@studio-freight/lenis` | ^1.0.42 | ❌ | Old package name duplicate of above |
| `three` | ^0.184.0 | ❌ | ~600KB, imported NOWHERE |
| `zod` | ^4.4.3 | ❌ | Installed, not used (form validation TODO) |

### Dev
Tailwind CSS v4, Vite 8, ESLint

---

## 10. Known Bugs & Issues

### 🔴 Critical

| # | File | Issue | Status |
|---|------|-------|--------|
| 1 | `Contact.jsx:16` | Form never submits — fake `isSubmitted` toggle only | ⏳ Skipped (needs real backend/service) |
| 2 | `Contact.jsx` | No real validation, `zod` unused | ✅ FIXED — zod schema, field errors, controlled inputs |
| 3 | `Contact.jsx` | `<label>` no `htmlFor`, inputs no `id` | ✅ FIXED — matching `htmlFor`/`id`, `aria-invalid`, `aria-describedby` |
| 4 | `HeroSection.jsx` | Base64 images in localStorage → quota crash | ✅ FIXED — IndexedDB with `saveImage`/`loadImage`/`deleteImage` helpers |
| 5 | `package.json` | `three` (600KB) + `@studio-freight/lenis` unused | ✅ FIXED — both uninstalled |
| 6 | `App.jsx` | No code splitting — all pages eager-loaded | ✅ FIXED — all 8 routes use `React.lazy()` + `Suspense` with `PageLoader` |

### 🟠 Important

| # | File | Issue | Fix |
|---|------|-------|-----|
| 7 | `Home.jsx:57` | Hero right half is empty on desktop | Add visual element (mockup, SVG, 3D text) |
| 8 | `Home.jsx:158` | Logos at `text-white/15` — unreadable | Raise to 40%+ opacity or use marquee animation |
| 9 | `HeroSection.jsx:94` | Uses `whileInView` on hero (always visible) | Change to `initial="hidden" animate="visible"` |
| 10 | `Contact.jsx` vs rest | Aesthetic clash: rounded/glass on contact vs brutalist elsewhere | Standardize to brutalist (`rounded-none`, hard borders) |
| 11 | `useTheme.jsx:45` | OLD: `document.body.className = theme` nuked all classes | FIXED: now uses `classList.remove/add` |
| 12 | `ThemeSwitcher.jsx` | Two buttons that both toggle theme (redundant) | Remove panel toggle button, keep only floating one |
| 13 | `Home.jsx:6-7` | Two `import` statements from same `animations.js` | Merge into one import |
| 14 | All pages | No per-page `<title>` update — every page shows same title | Add `react-helmet-async` |
| 15 | `index.html` | No `og:image`, no Twitter Card meta tags | Add both with 1200×630 branded image |
| 16 | `AnimatedText.jsx` | No `aria-label` — screen readers read each word with pause | Add `aria-label={text}` + `aria-hidden` on spans |
| 17 | `Home.jsx:51`, `HeroSection.jsx:43` | Grid uses `rgba(99,102,241)` (indigo) — wrong brand color | Use `var(--primary)` at low opacity instead |
| 18 | `Contact.jsx:208` | Map placeholder is an empty grey box with a pin icon | Embed real Google Maps iframe |

### 🟡 Nice-to-have

| # | Issue | Fix |
|---|-------|-----|
| 19 | `lenis` installed but dormant | Initialize in `App.jsx` for buttery smooth scroll |
| 20 | Service/case study cards use numbers not icons | Add `icon` field to `content.js`, render lucide icons |
| 21 | Testimonials are static 2-col grid | Add auto-play carousel or drag-scroll with Framer Motion |
| 22 | No cursor effect or micro-interactions | Add magnetic cursor follower (20 lines of FM) |
| 23 | No skeleton/loading states | Add shimmer skeletons for cards |
| 24 | No `robots.txt` or `sitemap.xml` in `/public/` | Create both |
| 25 | `Home.jsx:121` scroll indicator uses `ease: 'linear'` | Change to `[0.45, 0, 0.55, 1]` for natural bounce |
| 26 | `body.dark { background: #000000 }` | Shift to `#080808` — less harsh, more premium |
| 27 | `CaseStudyCard.jsx:14` | Hardcoded `#ccff00` in shadow — doesn't respect custom accent | Change to `var(--primary)` |
| 28 | `BlogCard.jsx:14` | Same hardcoded `#ccff00` shadow issue | Same fix |

---

## 11. Design System Reference

### Card Classes (from `index.css @layer components`)
```
.card-dark   → bg-surface-card, border-surface-border, hover: border-primary, translate(-4,-4), shadow-primary
.card-light  → bg-surface-light-card, border-black, hover: bg-white, translate(-4,-4), shadow-black
```

### Button Classes
```
.btn-primary          → bg-primary, text-primary-foreground, uppercase, 16px 36px, transition
.btn-secondary-dark   → transparent, text-white, border-white, hover: bg-white, text-black
.btn-secondary-light  → transparent, text-black, border-black, hover: bg-black, text-white
```

### Utility Classes
```
.accent-text      → color: var(--primary-on-dark) in dark, var(--primary-on-light) in light
.bg-accent-solid  → background: var(--primary), color: var(--primary-foreground)
.noise-overlay    → fixed, full-screen, 3% opacity noise texture, pointer-events: none
.scroll-progress  → fixed top bar, height 4px, var(--primary) background
```

### Tailwind Color Tokens (available as utilities: `bg-*`, `text-*`, `border-*`)
```
primary-300/400/500/600  → neon yellow family
accent-400/500/600       → hot pink family
surface-dark/darker/card/card-hover/border    → dark theme surfaces
surface-light/light-card/light-card-hover/light-border  → light theme surfaces
```

---

## 12. SEO Status

**`index.html` has:**
- `<title>` (static, not per-page)
- `meta description`, `meta keywords`, `meta author`
- `og:title`, `og:description`, `og:type`, `og:url`

**`index.html` is MISSING:**
- `og:image` (social preview image)
- Twitter Card meta tags (`twitter:card`, `twitter:image`)
- Per-page dynamic titles (needs `react-helmet-async`)
- Canonical URL `<link rel="canonical">`
- Structured data (JSON-LD) for Organization, Article, etc.

**`/public/` is MISSING:**
- `robots.txt`
- `sitemap.xml`

---

## 13. Accessibility Gaps

- Form labels not associated with inputs (`htmlFor`/`id` mismatch) — WCAG 2.1 SC 1.3.1 (Level A)
- `AnimatedText` staggered spans have no parent `aria-label`
- Decorative icons (Quote, ArrowUpRight) not `aria-hidden`
- No skip navigation link
- Focus indicators: Tailwind resets focus, custom focus ring not consistently applied
- `text-gray-400` on dark (`#0a0a0a`) may fail WCAG AA (4.5:1 ratio) for small text

---

## 14. Performance Concerns

1. **No route-level code splitting** — entire app JS loaded on every page
2. **`three.js`** in `node_modules` (~600KB min) — unused, may be in bundle
3. **Two Lenis packages** — duplicate dead weight
4. **No `loading="lazy"`** on images
5. **Base64 images in `localStorage`** — blocks main thread, risks quota
6. **`AnimatedText`** creates many DOM nodes per heading — acceptable but watch at scale
7. **`useCountUp`** uses `requestAnimationFrame` — correct, no memory leak (returns cleanup)
8. **`BuilderContext` re-serializes entire `pages` object to localStorage on every section update**

---

## 15. Component Gotchas

- **Two `CTASection` components exist:**
  - `src/components/CTASection.jsx` — used by static pages (Home, Contact)
  - `src/components/sections/CTASection.jsx` — used by builder
  - They have different props: `{heading, description, cta}` vs `{heading, description, ctaLabel, ctaPath}`

- **`ServiceCard` vs `ServicesSection`:** Home page uses `<ServiceCard>` (components/). The builder admin uses `ServicesSection` (sections/) which has its own inline card rendering. These are maintained separately.

- **`AnimatedText` tag prop:** Accepts `tag="h1"` etc. but renders inside a `<motion.div>`. The semantic heading tag is correct but the outer `div` breaks block-level semantics in some contexts.

- **`useTheme` consumed everywhere:** Nearly every component calls `useTheme()` for `isDark`. This is fine in React 19 (context reads are cheap) but means ALL components re-render on theme toggle.

---

## 16. Decisions Made in This Project

- **Brutalist design** chosen over glassmorphic — but Contact page inconsistently uses glassmorphic (`rounded-2xl`, soft shadows). Needs standardization.
- **Single `content.js`** as content source — no CMS, no API. Good for static deploy.
- **Builder system** is localStorage-only — not suitable for multi-user or server-side use.
- **Tailwind v4** with `@theme` (not `tailwind.config.js`) — `--color-*` prefix required for color utilities.
- **Dynamic accent color** via JS `setProperty` — must update both `--primary` AND `--color-primary-*` to affect both component CSS and Tailwind utilities.
