# SEO Action Plan: hebroncareafh2.com

**Generated:** 2026-04-08
**Current Score:** 38/100
**Target Score:** 75+ (after Critical + High fixes)

---

## Critical (Fix Immediately)

### 1. Fix www SSL certificate
- **Impact:** Visitors using www get a security error
- **Fix:** Vercel Dashboard > Settings > Domains > Add `www.hebroncareafh2.com` as redirect to `hebroncareafh2.com`
- **Effort:** 5 minutes
- **Expected lift:** Prevents visitor loss, consolidates link equity

### 2. Add robots.txt
- **Impact:** Search engines have no crawl directives
- **Fix:** Create `public/robots.txt` or configure in `next.config.js`:
```
User-agent: *
Allow: /
Disallow: /_next/
Sitemap: https://hebroncareafh2.com/sitemap.xml
```
- **Effort:** 5 minutes

### 3. Add sitemap.xml
- **Impact:** Search engines cannot efficiently discover pages
- **Fix:** Use Next.js App Router sitemap generation:
```ts
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://hebroncareafh2.com/', lastModified: new Date(), priority: 1.0 },
    { url: 'https://hebroncareafh2.com/about-us', lastModified: new Date(), priority: 0.8 },
    { url: 'https://hebroncareafh2.com/services', lastModified: new Date(), priority: 0.9 },
    { url: 'https://hebroncareafh2.com/gallery', lastModified: new Date(), priority: 0.6 },
    { url: 'https://hebroncareafh2.com/contact', lastModified: new Date(), priority: 0.8 },
    { url: 'https://hebroncareafh2.com/privacy-policy', lastModified: new Date(), priority: 0.2 },
    { url: 'https://hebroncareafh2.com/terms-of-service', lastModified: new Date(), priority: 0.2 },
  ]
}
```
- **Effort:** 10 minutes

### 4. Add LocalBusiness JSON-LD schema to all pages
- **Impact:** Zero rich result eligibility, invisible to local search features
- **Fix:** Add to root layout:
```json
{
  "@context": "https://schema.org",
  "@type": "AssistedLivingFacility",
  "name": "Hebron Care Adult Family Home LLC #2",
  "url": "https://hebroncareafh2.com",
  "telephone": "+1-425-374-7954",
  "email": "hebroncareafhllc@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2421 81st Pl SE",
    "addressLocality": "Everett",
    "addressRegion": "WA",
    "postalCode": "98203",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "description": "Licensed adult family home in Everett, WA providing 24/7 personalized care, memory support, and daily living assistance for up to 6 residents.",
  "numberOfBeds": 6,
  "areaServed": {
    "@type": "City",
    "name": "Everett",
    "sameAs": "https://en.wikipedia.org/wiki/Everett,_Washington"
  }
}
```
- **Effort:** 30 minutes

### 5. Add canonical tags to all pages
- **Impact:** Risk of duplicate content across URL variants
- **Fix:** In Next.js metadata for each page, add:
```ts
export const metadata = {
  alternates: {
    canonical: 'https://hebroncareafh2.com/page-path',
  },
}
```
- **Effort:** 15 minutes

---

## High (Fix Within 1 Week)

### 6. Fix og:url -- old domain reference
- **Impact:** Social shares and search engines see wrong domain
- **Fix:** Update `metadataBase` in root layout from `https://2hebron-careafh.live` to `https://hebroncareafh2.com`
- **Effort:** 5 minutes

### 7. Fix duplicate titles on About Us and Contact
- **Impact:** Search engines cannot distinguish these pages
- **Fix:**
  - About Us: `About Us | Hebron Care Adult Family Home | Everett, WA`
  - Contact: `Contact Us | Schedule a Tour | Hebron Care AFH`
- **Effort:** 10 minutes

### 8. Fix duplicate meta descriptions on About Us and Contact
- **Impact:** Same as above
- **Fix:**
  - About Us: `Meet the family behind Hebron Care. Learn why we opened our home to provide personalized elder care in Everett, WA.`
  - Contact: `Schedule a tour of Hebron Care Adult Family Home. Call (425) 374-7954 or fill out our contact form. Located at 2421 81st Pl SE, Everett, WA.`
- **Effort:** 10 minutes

### 9. Fix homepage title
- **Impact:** "Home" is not descriptive for search
- **Fix:** `Hebron Care Adult Family Home | Memory Care & Assisted Living | Everett, WA`
- **Effort:** 2 minutes

### 10. Add OG image
- **Impact:** Social shares have no preview image
- **Fix:** Create a 1200x630 image showing the home exterior or a warm interior shot. Set as default in root layout metadata.
- **Effort:** 30 minutes

### 11. Add favicon
- **Impact:** No browser tab icon, looks unfinished
- **Fix:** Add `app/favicon.ico` or configure in metadata
- **Effort:** 5 minutes

### 12. Fix garbled character in footer
- **Impact:** "Adult Family Home [?] Everett, WA" shows a replacement character
- **Fix:** Replace the special character (likely a bullet or middot) with a plain ` - ` or ` | `
- **Effort:** 2 minutes

---

## Medium (Fix Within 1 Month)

### 13. Add Service schema to /services page
- **Fix:** Add JSON-LD for each service offered (Memory Care, Daily Living Support, etc.)
- **Effort:** 30 minutes

### 14. Add BreadcrumbList schema
- **Fix:** Add breadcrumb JSON-LD to all inner pages
- **Effort:** 20 minutes

### 15. Add FAQ content and FAQPage schema
- **Fix:** Add FAQ sections to Services and About pages with common questions families ask
- **Effort:** 2 hours

### 16. Improve internal cross-linking
- **Fix:** Add CTAs linking Services to Contact, About to Services, Gallery to Contact
- **Effort:** 30 minutes

### 17. Move logo to local hosting
- **Fix:** Move logo from i.ibb.co to public/ directory -- external CDN dependency is a reliability risk
- **Effort:** 10 minutes

### 18. Add security headers
- **Fix:** In `vercel.json` or `next.config.js`, add headers:
```js
headers: [
  {
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  },
]
```
- **Effort:** 15 minutes

### 19. Set up Google Business Profile and link it
- **Fix:** Create/claim GBP listing, add URL to schema `sameAs`
- **Effort:** 1 hour

### 20. Submit sitemap to Google Search Console
- **Fix:** Verify site in GSC, submit sitemap URL
- **Effort:** 30 minutes

---

## Low (Backlog)

### 21. Add a blog/resources section for topical authority
### 22. Add llms.txt for AI search optimization
### 23. Add reviews/testimonials integration
### 24. Add staff credentials and licensing info to About page
### 25. Create a 404 page with helpful navigation (current one is Next.js default)
### 26. Add WAI-ARIA landmarks for accessibility

---

## Score Projection

| Phase | Actions | Estimated Score |
|-------|---------|-----------------|
| Current | -- | 38/100 |
| After Critical fixes | 1-5 | 55/100 |
| After High fixes | 6-12 | 68/100 |
| After Medium fixes | 13-20 | 78/100 |
| After Low fixes | 21-26 | 85+/100 |
