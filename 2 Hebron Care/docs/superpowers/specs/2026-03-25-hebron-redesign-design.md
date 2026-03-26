# Hebron Care Website Redesign — Full Spec

## Overview
Complete rebuild of hebron-careafh.live from static HTML/Tailwind to Next.js 14 App Router + shadcn/ui + Framer Motion. Redesign all 7 pages to eliminate AI-generated aesthetic. Adapt 21st.dev component patterns. Full content rewrite.

## Brand (Preserved)
- Primary: `#0F4C5C` (deep teal)
- Accent: `#C9A24D` (gold)
- Background: `#FAFAF8` (warm off-white)
- Text: `#2B2B2B`
- Heading font: Cormorant Garamond
- Body font: Inter

## Visual Direction: "Editorial Warmth"
The site should feel like a magazine feature about real people, not a SaaS landing page.

### Anti-AI Rules
1. No uniform card grids — every section has a different layout rhythm
2. No icon-in-a-circle + title + paragraph pattern
3. No equal-weight everything — each page has a clear visual protagonist
4. Rounded corners used sparingly and intentionally
5. Motion is subtle and purposeful — gentle scroll reveals, not bouncing cards
6. Real photography over icons wherever possible
7. Content is first-person, specific, human

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- shadcn/ui (accordion, dialog, tabs, input, textarea, select, button, navigation-menu, sheet)
- Framer Motion (scroll reveals, page transitions, parallax)
- next/font/google (Cormorant Garamond + Inter)
- Formspree (contact form)
- Vercel (deployment)

## Project Structure
```
app/
  layout.tsx, page.tsx
  about-us/page.tsx
  services/page.tsx
  gallery/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms-of-service/page.tsx
components/
  ui/              — shadcn/ui base
  layout/          — navbar, footer, mobile-menu
  sections/        — hero-editorial, bento-services, testimonials-masonry,
                     story-section, cta-quiet, values-accordion,
                     gallery-masonry, contact-form
  shared/          — scroll-reveal, parallax-image, section-divider
lib/
  fonts.ts, utils.ts
public/images/     — migrated from ibb.co
```

## Page Designs

### Homepage
1. **Hero:** Split layout — bold typographic headline left, warm full-bleed photo right. Subtle parallax. No badges/pills.
2. **Trust strip:** Single quiet line — "Licensed by Washington State DSHS · Serving Everett families · 24/7 care". No animation.
3. **Story section:** Full-width photo with overlaid pull quote from owner. Magazine editorial style.
4. **Services preview:** Asymmetric bento grid. One large tile (2/3 width) + two stacked smaller tiles. Next row reverses. Each tile visually distinct.
5. **Social proof:** Staggered masonry — 3 testimonials at different sizes. No star ratings, no stock headshots.
6. **CTA:** "Come visit. We'll make coffee." Phone number, tour link. Generous whitespace.

### About Us
1. **Hero:** Full-width editorial photograph with headline overlay.
2. **Origin story:** Two-column editorial — first-person narrative left, stacked photographs right.
3. **Values:** Accordion feature section — each value expands to reveal a real story/example.
4. **Team:** Simple names + roles + one candid group photo.

### Services
1. **Hero:** Clean typographic hero — large headline, one sentence. No competing background image.
2. **Service sections:** Each service gets its own full-width section with alternating layouts (photo left/right, full-width text, pull quotes). NOT cards.
3. **Approach:** Typographic blocks with large numbers as anchors ("1:6 caregiver ratio" as giant "1:6").

### Gallery
1. **Layout:** Masonry grid with varied aspect ratios. Some images span two columns.
2. **Interaction:** Lightbox with Framer Motion transitions. Gentle hover scale + caption fade.
3. **Categories:** Horizontal scroll text tabs (Living Spaces / Dining / Outdoors / Community).

### Contact
1. **Layout:** Two-column — simplified form left, map + info right.
2. **Form:** Name, phone, message, dropdown. No checkbox wall.
3. **Map:** Embedded with 3D tilt effect preserved.
4. **Tone:** Warm invitation, not corporate.

### Privacy Policy & Terms of Service
Clean typography, proper heading hierarchy, comfortable reading width. Minimal design.

## SEO
- Migrate all JSON-LD structured data to Next.js metadata API
- Preserve canonical URLs
- OpenGraph + Twitter cards for all pages
- Sitemap.xml via next-sitemap

## Images
- Migrate from ibb.co to public/images/ + Next.js Image component
- Automatic optimization, lazy loading, responsive srcset

## Content Rewrite Guidelines
- First person, specific, human
- Name real moments: "We sit with Margaret every morning while she has her coffee"
- No corporate jargon: "compassionate care solutions" becomes "we take care of people"
- Short paragraphs, breathing room
- Pull quotes from real families (or realistic composites)
