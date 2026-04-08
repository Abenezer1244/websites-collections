# Hebron Care AFH - SEO Action Plan

**Current Score: 62/100**  
**Target Score: 85+/100**  
**Date:** 2026-04-08

---

## CRITICAL - Fix Immediately

### 0. Claim and Verify Google Business Profile
**Impact:** Unlocks local 3-pack eligibility -- highest single impact for a local business  
**Effort:** 30 min + verification wait  
**Why:** No verified GBP exists. The `sameAs` field points to a Maps address search URL, not a claimed profile. Without GBP, the business is invisible in Google Maps and local pack results.  
**Category:** "Adult Family Care Facility"  
**After claiming:** Add real GBP URL to schema `sameAs`, start collecting reviews.

### 0b. Fix domain mismatch: hebroncareafh2.com in source code
**Impact:** Canonicals pointing to wrong domain will split crawl credit  
**Effort:** 15 min (find-and-replace)  
**Why:** The Next.js redesign codebase (`hebron-redesign/`) has `hebroncareafh2.com` hardcoded in sitemap.ts, robots.ts, layout files, and JSON-LD schema. Must be `hebroncareafh.com` before any deployment from that codebase.  
**Fix:** `grep -r "hebroncareafh2" hebron-redesign/` and replace all with `hebroncareafh`.

### 0c. Resolve two-phone-number NAP conflict
**Impact:** NAP inconsistency hurts local rankings  
**Effort:** 15 min  
**Why:** Contact page shows (425) 225-5424 "Home" and (360) 843-7364 "Provider" as separate cards, but only (360) appears in schema. Pick one primary number and align everywhere: website, GBP, DSHS records, directories.

### 1. Create robots.txt
**Impact:** Crawlability + Sitemap discovery  
**Effort:** 5 min  
**File:** `app/robots.ts` (already exists in source, ensure it deploys)

```
User-agent: *
Allow: /
Sitemap: https://hebroncareafh.com/sitemap.xml
```

### 2. Replace CDN Tailwind with build-time CSS
**Impact:** 2-4s LCP improvement on mobile  
**Effort:** 1-2 hours  
**Why:** `cdn.tailwindcss.com` ships ~300KB and runs a JIT compiler in-browser on every page load. This is the single biggest performance bottleneck.  
**Fix:** Remove `<script src="https://cdn.tailwindcss.com">` from all pages. Use PostCSS Tailwind via Next.js (already in project config).

### 3. Fix broken routes: /privacy-policy, /terms-of-service
**Impact:** Legal compliance, user trust  
**Effort:** 30 min  
**Why:** Source code has these routes but they 404 on the live site. Sitemap references `/privacy/` which works. Need to reconcile.

---

## HIGH - Fix Within 1 Week

### 4. Add security headers (vercel.json)
**Effort:** 15 min

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

### 5. Self-host all images
**Effort:** 1-2 hours  
Move images from ibb.co and Unsplash to `/public/images/`. Use Next.js `<Image>` for automatic WebP, srcset, lazy loading.

### 6. Replace Iconify CDN with inline SVGs
**Effort:** 1-2 hours  
Remove `code.iconify.design` script. Use `@iconify/react` package or inline SVG elements.

### 7. Use next/font for Google Fonts
**Effort:** 30 min  
Replace `<link href="fonts.googleapis.com/...">` with:
```tsx
import { Inter, Playfair_Display } from 'next/font/google'
```

### 8. Shorten title tags
**Effort:** 15 min

| Page | Current (chars) | Recommended |
|------|----------------|-------------|
| Home | 80 | "Hebron Care AFH \| Senior Care in Everett, WA" (47) |
| Services | 100 | "Senior Care Services \| Hebron Care Everett, WA" (48) |
| About | 78 | "About Us \| Hebron Care AFH Everett, WA" (39) |

---

## MEDIUM - Fix Within 1 Month

### 9. Add BreadcrumbList schema (all pages)
### 10. Add WebSite schema with SearchAction
### 11. Create custom 404 page
### 12. Add H1 tag to homepage hero
### 13. Add lastmod dates to sitemap.xml
### 14. Create /llms.txt for AI search readiness
### 15. Create branded OG images (self-hosted)
### 16. Build citation profile (GBP, directories)
### 17. Add "Areas Served" content for nearby cities

---

## LOW - Backlog

### 18. Responsive images (srcset/sizes)
### 19. Blog/resources section
### 20. Service schema for individual services
### 21. Staff credentials page
### 22. Link to third-party reviews
### 23. AggregateRating schema
### 24. "What to Expect" / Pricing page
### 25. Consolidate schema @id references

---

## Score Projection

| Action | Category Impacted | Score Gain |
|--------|-------------------|------------|
| Claim GBP + fix NAP | Local SEO | +8 |
| Fix domain mismatch | Technical | +3 |
| robots.txt + sitemap fix | Technical | +4 |
| Build-time Tailwind | Performance | +8 |
| Security headers | Technical | +3 |
| Self-host images + next/Image | Performance + Images | +5 |
| next/font | Performance | +2 |
| Remove Iconify CDN | Performance | +2 |
| BreadcrumbList + WebSite schema | Schema | +3 |
| llms.txt + AI directives | AI Readiness | +4 |
| Fix title tags + H1 | On-Page | +2 |
| Citation building (directories) | Local SEO | +3 |
| Individual service pages | Local SEO + Content | +4 |

**Projected score after Critical + High fixes: ~85/100**  
**Projected score after all Medium fixes: ~92/100**

---

## Local SEO Deep Dive (from specialist audit)

**Local SEO Score: 42/100**

| Dimension | Score |
|-----------|-------|
| GBP Signals | 6 / 25 |
| Reviews & Reputation | 3 / 20 |
| Local On-Page SEO | 14.4 / 20 |
| NAP Consistency & Citations | 4.2 / 15 |
| Local Schema Markup | 6.5 / 10 |
| Local Link & Authority | 8 / 10 |

**Priority citation targets:**
1. WA DSHS licensed facility directory (.gov domain)
2. Google Business Profile (claim + verify)
3. A Place for Mom (DA 70+, high-intent traffic)
4. Caring.com (DA 60+)
5. SeniorAdvisor.com
6. Yelp (DA 93)
7. AfhWa.org member listing
8. Everett Chamber of Commerce

**Individual service pages needed:**
- /services/memory-care
- /services/dementia-care
- /services/respite-care
Each is a distinct search query families use.
