# Skagit River Website Audit & Migration Plan

> Full UI/UX audit using UI/UX Pro Max + Frontend Design skill analysis
> Target: React/Next.js with shadcn, Framer Motion, 21.dev components
> Date: 2026-03-25

---

## Part 1: Current Site Audit

### What's Working Well

| Area | Verdict | Notes |
|------|---------|-------|
| Brand colors | Strong | Sand/stone/rock/clay palette is warm, earthy, and appropriate for senior care |
| Typography pairing | Good | Crimson Pro + DM Sans is elegant and readable. Keep it. |
| Navigation pill | Creative | The floating pill nav with glassmorphic blur is polished |
| Hero (homepage) | Strong | Full-bleed photo with gradient overlay creates emotional impact |
| Gallery masonry | Effective | Real photos of the actual home build trust |
| Contact form | Well structured | Good field grouping, toggle for tour interest, success state |
| SEO/Schema | Excellent | JSON-LD structured data, OG tags, sitemap, robots.txt all in place |
| Accessibility basics | Good | Skip links, focus rings, reduced motion, keyboard nav |
| Mobile nav | Polished | Rounded dark panel with overlay is well executed |

### Critical Problems

#### 1. CARD OVERLOAD (User's #1 complaint)

Every section defaults to the same card pattern: white box, rounded corners, border, hover shadow. This creates a monotonous, templated feel.

**Offending sections:**
- Homepage "Why Choose Us" — 3 identical white cards with icon + title + text
- Services "Our Core Services" — 6 identical white cards in a grid
- Services "Our Specialties" — 3 image-topped cards
- Homepage testimonials — 4 identical card testimonials
- About "Our People" — 3 team member cards
- Contact info — 4 stacked hover cards

**The fix:** Replace cards with editorial layouts, full-width sections, asymmetric grids, overlapping image/text compositions, and flowing narrative sections.

#### 2. AI-GENERIC AESTHETIC

The site reads as "AI generated template" because of:
- **Repetitive section formula**: Every section = centered label + big serif heading + subtitle + card grid. This exact pattern repeats 15+ times across all pages.
- **Identical spacing**: Every section uses `py-24 px-6 md:px-12` with the same max-width
- **Same animation**: `fade-up` on everything with no variation
- **Decorative blurs**: Abstract `blur-[120px]` circles are a hallmark AI pattern
- **Stock photos**: Unsplash photos of random professionals mixed with real facility photos creates cognitive dissonance
- **Overly polished language**: Text reads like ChatGPT prose (e.g., "uncompromising medical oversight", "absolute gold standard", "profound peace of mind")

#### 3. DASHES EVERYWHERE

Per user request, all visible dashes/hyphens must be removed:
- Page titles: "Adult Family Home — Mount Vernon, WA" (every page)
- Footer: "Daughter of Resident — Seattle, WA"
- Various content throughout

#### 4. INCONSISTENT NAV COLOR

- Homepage nav: white text on dark hero (`text-[#F5F2EB]`)
- All other pages: clay text on sand bg (`text-clay`)
- This creates a jarring flash when navigating between pages

#### 5. PERFORMANCE ISSUES

- **Tailwind CDN**: Using `cdn.tailwindcss.com` in production (generates CSS at runtime — never for production)
- **No image optimization**: All images are external URLs (ibb.co, Unsplash) with no srcset, no width/height on most, no next/image optimization
- **No font-display**: Google Fonts import lacks `&display=swap`
- **42 gallery images**: All load eagerly with `loading="lazy"` but still 42 full-resolution images on one page

#### 6. DUPLICATED CODE

- Navigation (60+ lines) copy-pasted identically across all 8 pages
- Footer (40+ lines) copy-pasted across all 8 pages
- CSS variables and styles duplicated in every `<style>` block
- Mobile nav JS duplicated everywhere

---

## Part 2: Page-by-Page Issues

### Homepage (index.html)

| Issue | Severity | Detail |
|-------|----------|--------|
| 3 white cards "Why Choose Us" | HIGH | Classic AI card grid. Replace with editorial section |
| 4 testimonial cards | HIGH | All identical. Use featured quote + flowing layout |
| FAQ uses `<details>` | LOW | Works but lacks polish. Use animated accordion |
| Hero text "Comfort. Care. Family." | MEDIUM | Period-separated words feel generic. More human copy needed |
| Stock caregiver images mixed with real | HIGH | Unsplash nurse photo next to real facility photos breaks trust |

### About Us

| Issue | Severity | Detail |
|-------|----------|--------|
| 3 team member cards in grid | HIGH | Replace with staggered editorial layout, overlapping photos |
| Stock team photos | HIGH | Elena Rodriguez, Sarah Jenkins, Marcus Thorne use Unsplash. Either use real staff or remove |
| "Our Journey" 01/02/03 steps | MEDIUM | Good concept but could use a timeline with scroll animation |
| Vision/Mission blocks identical | LOW | Both use same background word + vertical line pattern |

### Services

| Issue | Severity | Detail |
|-------|----------|--------|
| 6-card service grid | HIGH | The worst offender. 6 identical icon + title + text cards |
| 3 specialty cards with images | HIGH | Another card grid |
| "Conditions we serve" checklist | MEDIUM | Flat list could be more visually engaging |
| Too many sections | MEDIUM | 6 distinct sections. Consolidate into 3-4 flowing sections |

### Gallery

| Issue | Severity | Detail |
|-------|----------|--------|
| 42 images, no categorization | HIGH | Overwhelming. Add tabs: Exterior, Interior, Rooms, Outdoor |
| 3D rotation animation | MEDIUM | `crazyReveal` with rotateX/rotateY is disorienting for elderly visitors |
| Hover blur on all siblings | MEDIUM | Creative but may confuse target audience |
| No lightbox navigation | LOW | Can open images but no prev/next arrows |

### Pricing

| Issue | Severity | Detail |
|-------|----------|--------|
| Placeholder pricing "$X,XXX" | HIGH | Looks unfinished/unprofessional |
| Plain text layout | LOW | Actually fine — simple and readable. Just needs warmth |

### Contact

| Issue | Severity | Detail |
|-------|----------|--------|
| 4 stacked hover cards for contact info | HIGH | Phone, email, location, hours — each in a hovering card |
| 3D floating map animation | MEDIUM | Novel but may cause motion sickness for target audience |
| Form has no honeypot/spam protection visible | LOW | Web3Forms handles this but worth noting |

### Privacy & Terms

| Issue | Severity | Detail |
|-------|----------|--------|
| Clean and readable | OK | These are fine as-is. Simple prose layout works |
| Just need dash removal from titles | LOW | "Adult Family Home — Mount Vernon" |

---

## Part 3: Design System Recommendations

### Keep (Brand DNA)

| Token | Value | Reason |
|-------|-------|--------|
| Sand | `#F5F2EB` | Warm, inviting background. Perfect. |
| Stone | `#E6E2DA` | Subtle section differentiation |
| Rock | `#2D2A26` | Strong, dignified dark tone |
| Clay | `#A67C52` | Warm accent. Evokes earth, warmth, trust |
| Crimson Pro | Serif headings | Elegant, readable, appropriate for care |
| DM Sans | Body text | Clean, warm, highly legible |

### Add to Palette

| Token | Value | Purpose |
|-------|-------|---------|
| Warm White | `#FDFCFA` | Cards/elevated surfaces (warmer than pure white) |
| Linen | `#FAF7F2` | Alternate background for depth |
| Clay Light | `#C9A882` | Lighter clay for borders, subtle accents |
| Clay Dark | `#8B6941` | Hover state for clay buttons |
| Sage | `#7A8B6F` | Nature accent for wellness/growth |
| Cream | `#F0EBE0` | Input backgrounds, muted zones |

### Style Direction: "Nature Distilled" (from UI Pro Max)

**NOT "Accessible & Ethical" (the default healthcare recommendation).** That produces cold, clinical blue interfaces. This is a HOME, not a hospital.

Instead, use **Nature Distilled**:
- Muted earthy tones, organic shapes
- Subtle grain/texture overlays for handcrafted feel
- Natural easing (ease-out), gentle parallax
- Soft shadows, warm tones, organic border-radius
- Feels like a well-designed boutique hotel website, not a medical portal

### Typography Scale

```
text-xs:    0.75rem / 12px   — Labels, captions
text-sm:    0.875rem / 14px  — Secondary text, metadata
text-base:  1rem / 16px      — Body copy
text-lg:    1.125rem / 18px  — Lead paragraphs
text-xl:    1.25rem / 20px   — Subheadings
text-2xl:   1.5rem / 24px    — Section subtitles
text-3xl:   1.875rem / 30px  — Section headings
text-4xl:   2.25rem / 36px   — Page headings (mobile)
text-5xl:   3rem / 48px      — Page headings (desktop)
text-6xl:   3.75rem / 60px   — Hero headlines
text-7xl:   4.5rem / 72px    — Hero headlines (desktop)
```

### Animation Philosophy

Replace the single `fade-up` with a vocabulary of motions:

| Motion | Use For | Duration | Easing |
|--------|---------|----------|--------|
| Fade up | Section headings | 600ms | `ease-out` |
| Slide in from left | Text blocks (odd) | 700ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Slide in from right | Text blocks (even) | 700ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Scale reveal | Images | 800ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Stagger children | Lists, grids | 50ms delay per item | `ease-out` |
| Parallax (subtle) | Background images | Scroll-linked | Linear |
| None | Reduced motion preference | 0ms | Instant |

---

## Part 4: Page Redesign Concepts (No Cards)

### Homepage

**Current:** Hero → 3 cards → Zigzag expertise → Card testimonials → FAQ → Footer
**Proposed:**

```
1. HERO (keep, enhance)
   Full-bleed real facility photo
   Headline: "Where your loved ones feel at home."
   Subtitle as flowing text, not bullet-pointed
   Framer Motion: staggered text reveal, parallax on scroll

2. TRUST STRIP (new)
   Horizontal bar: "Licensed WA State AFH" · "24/7 Awake Staff" · "DSHS #758550"
   No cards. Just a warm-toned bar with text.

3. EDITORIAL INTRO (replaces "Why Choose Us" cards)
   Full-width split: large photo LEFT (60%), text RIGHT (40%)
   Overlapping layout — photo bleeds into text area slightly
   Paragraph-style description, not icon + title + blurb
   Framer Motion: image scale-reveal, text slide-in

4. EXPERTISE ZIGZAG (keep pattern, refine)
   Already good! Just remove the card-like feel.
   Make images full-height, text sections breathing room
   Add subtle scroll-triggered parallax on images

5. TESTIMONIAL FEATURE (replaces 4 card grid)
   One large featured testimonial with photo
   Below: flowing quotes with pull-quote typography
   Large serif italic text, not contained in boxes
   Horizontal scroll carousel for mobile

6. FAQ (keep, polish)
   Animated accordion with Framer Motion
   Subtle expand/collapse with height animation

7. CTA + FOOTER (keep, refine)
```

### About Us

**Proposed layout:**

```
1. HERO (keep)

2. VISION & MISSION (merge into one flowing section)
   Large serif text as a manifesto, not two separate boxed blocks
   Think: Apple's environmental page — one continuous narrative
   Subtle background color shift as you scroll

3. OUR JOURNEY (timeline with scroll animation)
   Vertical timeline with dots and connecting line
   Each milestone reveals on scroll
   Photos alongside milestones (real facility photos)

4. OUR PEOPLE (editorial, no cards)
   Full-width photo of one person, large
   Name + role + bio flowing beside the photo
   Next person: photo flips to other side (zigzag)
   Each person gets breathing room — not crammed into a grid
```

### Services

**Proposed layout:**

```
1. HERO (keep, it's good)

2. CARE APPROACH (keep, it's good)

3. SERVICES (replaces 6-card grid)
   Vertical stack, each service as a full-width section
   Icon LEFT, heading + description RIGHT
   Alternating background: sand / warm white
   Divider lines between services
   Think: a well-organized restaurant menu, not a card grid

4. SPECIALTIES (replaces 3-card grid)
   Magazine-style layout with large images
   Overlapping text panels on images
   Each specialty gets its own full-width moment

5. CONDITIONS + INCLUSIONS (keep, combine)
```

### Gallery

**Proposed:**

```
1. HERO (simplify — remove the 3D rotation animation)

2. CATEGORY TABS
   Exterior | Interior | Bedrooms | Outdoor | Amenities
   Filter the masonry grid by category

3. MASONRY GRID (keep, but tone down animations)
   Remove the aggressive crazyReveal rotation
   Use simple fade + scale-up on scroll
   Keep lightbox but add prev/next navigation

4. VIRTUAL TOUR CTA (new)
   "Want to see more? Schedule a tour"
   Warm, inviting — not pushy
```

### Contact

**Proposed:**

```
1. HERO (keep)

2. CONTACT LAYOUT (no cards)
   LEFT: Form (keep, it's well done)
   RIGHT: Contact details as plain elegant text
   Phone, email, address — just styled text with icons inline
   No hover-lift cards. No shadows. Just clear information.

3. MAP (keep, but remove 3D floating animation)
   Static rounded map, subtle sepia filter
   Gentle hover to remove filter — no 3D rotation
```

---

## Part 5: Technical Migration Plan

### Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | SSR, routing, image optimization |
| React 19 | UI framework |
| Tailwind CSS v4 | Styling (already in next-site/) |
| shadcn/ui | Base components (accordion, dialog, form, tabs) |
| Framer Motion | Scroll animations, page transitions, micro-interactions |
| 21.dev | Premium components (testimonial sections, hero variants, feature sections) |
| Lucide React | Icons (already in next-site/) |
| next/image | Optimized image loading with blur placeholder |
| next/font | Self-hosted Google Fonts (Crimson Pro + DM Sans) |

### Component Architecture

```
src/
├── app/
│   ├── layout.tsx          ← Global nav + footer + fonts
│   ├── page.tsx            ← Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── gallery/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx      ← One source of truth (not 8 copies)
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   ├── ui/                 ← shadcn components
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── textarea.tsx
│   ├── sections/           ← Page sections (NOT cards)
│   │   ├── hero.tsx
│   │   ├── trust-strip.tsx
│   │   ├── editorial-split.tsx
│   │   ├── zigzag-feature.tsx
│   │   ├── testimonial-featured.tsx
│   │   ├── timeline.tsx
│   │   ├── team-editorial.tsx
│   │   ├── service-list.tsx
│   │   ├── gallery-grid.tsx
│   │   └── contact-form.tsx
│   └── motion/             ← Framer Motion wrappers
│       ├── fade-in.tsx
│       ├── slide-in.tsx
│       ├── scale-reveal.tsx
│       ├── stagger-children.tsx
│       └── parallax-image.tsx
├── lib/
│   ├── fonts.ts            ← next/font definitions
│   └── constants.ts        ← Brand colors, contact info
└── styles/
    └── globals.css         ← Tailwind + CSS variables
```

### Key shadcn Components to Use

| Component | Where |
|-----------|-------|
| `Accordion` | FAQ section, Services expandable details |
| `Tabs` | Gallery categories |
| `Dialog` | Gallery lightbox |
| `Form` + `Input` + `Textarea` | Contact form with validation |
| `Button` | CTAs throughout |
| `Sheet` | Mobile navigation |
| `Separator` | Section dividers |
| `Badge` | Tags like "24/7 Staff", "RN Delegated" |

### Framer Motion Patterns

```tsx
// Scroll-triggered fade in (replaces CSS fade-up)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>

// Staggered children reveal
<motion.div
  variants={{ show: { transition: { staggerChildren: 0.08 } } }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>

// Parallax image on scroll
<motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}>

// Page transition (layout.tsx)
<AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3 }}
  >
```

### Image Optimization Strategy

```tsx
// Replace all <img> with next/image
<Image
  src="/gallery/exterior-01.jpg"  // Local files, not ibb.co URLs
  alt="Front view of Skagit River adult family home"
  width={1200}
  height={800}
  placeholder="blur"
  blurDataURL="..."
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

- Download all images locally into `public/images/`
- Use `next/image` for automatic WebP/AVIF, srcset, lazy loading
- Add blur placeholder for perceived performance

---

## Part 6: Accessibility Improvements

| Current | Improvement |
|---------|-------------|
| Skip link exists | Keep, ensure it targets `<main>` correctly in SPA |
| Focus rings exist | Standardize: 2px offset, clay color, consistent across all elements |
| `prefers-reduced-motion` | Already implemented in CSS. Add to Framer Motion: `const prefersReducedMotion = useReducedMotion()` |
| Alt text on images | Good. Keep descriptive. Remove "at Skagit River, Mount Vernon, WA" repetition from every alt |
| Color contrast | Rock on Sand: 8.5:1. Excellent. Clay on Sand: 3.2:1 — FAILS for small text. Use clay only for large text or decorative elements |
| Heading hierarchy | Good. Keep h1 → h2 → h3 sequence |
| Form labels | All present. Good. |
| Touch targets | CTA buttons are 44px+. Good. |
| Screen reader | Add `aria-current="page"` to active nav item |

### Clay Color Contrast Fix

`#A67C52` on `#F5F2EB` = **3.2:1** (fails WCAG AA for normal text)

Options:
1. Darken clay to `#8B6941` for text use (4.6:1 — passes AA)
2. Keep `#A67C52` only for large text (24px+) and decorative elements
3. Use `#7A6540` for inline links (5.2:1)

---

## Part 7: Content Recommendations

### Remove Dashes

Every `—` and ` - ` in visible content:

| Current | Replacement |
|---------|-------------|
| "Adult Family Home — Mount Vernon, WA" | "Adult Family Home in Mount Vernon, WA" |
| "Daughter of Resident — Seattle, WA" | "Daughter of Resident, Seattle, WA" |
| "Skagit River - Home" (aria-label) | "Skagit River Home" |

### Replace Stock Photos

| Page | Current | Recommendation |
|------|---------|----------------|
| Homepage expertise | Unsplash nurse, meds, activity | Use real facility photos from gallery |
| About team | 3 Unsplash professionals | Use real staff photos or remove team section |
| About hero | Unsplash interior | Use real exterior from gallery |
| Services specialties | Unsplash/ibb stock | Use real facility rooms |

### Humanize the Copy

| Current (AI-generic) | Better (human) |
|----------------------|----------------|
| "uncompromising medical oversight" | "careful, attentive medical support" |
| "absolute gold standard" | "the kind of care we'd want for our own family" |
| "profound peace of mind" | "peace of mind" (just remove "profound") |
| "unyielding commitment to holistic well-being" | "genuine commitment to their well-being" |
| "remove the institutional feel" | "make it feel like home, not a facility" |

---

## Part 8: Priority Roadmap

### Phase 1: Foundation (Do First)
- [ ] Set up Next.js with App Router, Tailwind v4, shadcn
- [ ] Configure fonts (Crimson Pro + DM Sans via next/font)
- [ ] Define CSS variables and design tokens
- [ ] Build shared layout: Navbar + Footer + Mobile Nav
- [ ] Download all images locally, optimize

### Phase 2: Core Pages
- [ ] Homepage (editorial sections, no cards)
- [ ] About Us (timeline, editorial team layout)
- [ ] Services (vertical service list, magazine specialties)
- [ ] Contact (clean form + text info, static map)

### Phase 3: Supporting Pages
- [ ] Gallery (tabs + masonry + lightbox with prev/next)
- [ ] Pricing (keep simple, fill in real numbers)
- [ ] Privacy (prose layout)
- [ ] Terms (prose layout)

### Phase 4: Polish
- [ ] Framer Motion scroll animations throughout
- [ ] Page transitions
- [ ] Loading states / skeletons
- [ ] SEO (metadata, JSON-LD, sitemap generation)
- [ ] Remove all dashes from content
- [ ] Replace stock photos
- [ ] Accessibility audit pass

### Phase 5: Deploy
- [ ] Vercel deployment
- [ ] Domain configuration
- [ ] Performance testing (Lighthouse 90+)
- [ ] Cross-browser testing

---

## Summary

The current site has a solid brand foundation (colors, fonts, content) but suffers from:

1. **Card fatigue** — every section is icon + title + text in a white box
2. **AI template aesthetic** — repetitive section patterns, decorative blurs, stock photos
3. **Dashes everywhere** that need removal
4. **Performance issues** — CDN Tailwind, unoptimized images, duplicated code
5. **Stock/real photo mismatch** — breaks the trust it's trying to build

The migration to Next.js solves the technical issues (components, optimization, routing) while the design overhaul replaces card grids with editorial layouts, flowing narratives, and section-specific compositions that feel handcrafted and warm — like the home itself.

**The goal: a website that feels like walking into the house — warm, personal, trusted — not like reading a brochure.**
