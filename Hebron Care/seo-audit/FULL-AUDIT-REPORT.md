# Hebron Care AFH - Full SEO Audit Report

**URL:** https://hebroncareafh.com  
**Date:** 2026-04-08  
**Business Type:** Local Service (Adult Family Home / Senior Care) - Brick & Mortar  
**Location:** 11320 27th Ave SE, Everett, WA 98208  
**Hosted on:** Vercel  
**Pages crawled:** 6 (/, /about-us/, /gallery/, /services/, /contact/, /privacy/)

---

## Executive Summary

### SEO Health Score: 62/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 58/100 | 12.8 |
| Content Quality | 23% | 72/100 | 16.6 |
| On-Page SEO | 20% | 78/100 | 15.6 |
| Schema / Structured Data | 10% | 70/100 | 7.0 |
| Performance (CWV) | 10% | 45/100 | 4.5 |
| AI Search Readiness | 10% | 30/100 | 3.0 |
| Images | 5% | 50/100 | 2.5 |
| **Total** | **100%** | | **62.0** |

### Top 5 Critical Issues
1. **No robots.txt** - Search engines cannot find crawl directives (returns 404)
2. **Using CDN Tailwind (cdn.tailwindcss.com)** in production - massive performance penalty, blocks rendering
3. **Missing security headers** - No X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy
4. **OG image hosted on ibb.co** - Third-party image host could go down, not professional
5. **No custom 404 page** - Returns plain text Vercel error

### Top 5 Quick Wins
1. Add robots.txt (5 minutes)
2. Add missing security headers via vercel.json (10 minutes)
3. Replace CDN Tailwind with build-time CSS (already have Next.js)
4. Add BreadcrumbList schema to all pages (15 minutes)
5. Add llms.txt for AI search readiness (5 minutes)

---

## Technical SEO (Score: 58/100)

### Crawlability

| Check | Status | Details |
|-------|--------|---------|
| robots.txt | FAIL | Returns 404 - not found. Critical for directing search engine crawlers |
| XML Sitemap | PASS | Valid sitemap at /sitemap.xml with 6 URLs |
| Sitemap in robots.txt | FAIL | Cannot reference sitemap since robots.txt doesn't exist |
| Canonical tags | PASS | All pages have correct canonical URLs with trailing slashes |
| Internal linking | PASS | All 6 pages interlinked via navigation |
| Crawl depth | PASS | All pages 1 click from homepage |

### Indexability

| Check | Status | Details |
|-------|--------|---------|
| meta robots | PASS | All pages have `index, follow` |
| HTTP status codes | PASS | All 6 pages return 200 |
| Redirect chain | PASS | HTTP to HTTPS via 308 Permanent Redirect (1 hop) |
| Custom 404 | FAIL | Returns plain text Vercel error, not a branded page |

### Security

| Header | Status | Details |
|--------|--------|---------|
| HTTPS | PASS | Active with valid certificate |
| HSTS | PASS | `max-age=63072000` (2 years) |
| X-Frame-Options | MISSING | Not set - vulnerable to clickjacking |
| X-Content-Type-Options | MISSING | Not set |
| Content-Security-Policy | MISSING | Not set |
| Referrer-Policy | MISSING | Not set |
| Permissions-Policy | MISSING | Not set |
| Access-Control-Allow-Origin | WARNING | Set to `*` (too permissive) |

### URL Structure

| Check | Status | Details |
|-------|--------|---------|
| Trailing slashes | PASS | Consistent trailing slashes on all URLs |
| URL length | PASS | All URLs under 75 characters |
| URL readability | PASS | Clean, descriptive slugs |
| HTTPS everywhere | PASS | All internal links use relative paths |

### Sitemap Analysis

**sitemap.xml contents (6 URLs):**
- `/` (priority: 1.0, weekly)
- `/about-us/` (priority: 0.8, monthly)
- `/gallery/` (priority: 0.7, monthly)
- `/services/` (priority: 0.9, monthly)
- `/contact/` (priority: 0.9, monthly)
- `/privacy/` (priority: 0.4, yearly)

**Issues:**
- Missing `<lastmod>` dates on all URLs
- No `terms-of-service` page in sitemap (and it 404s on the live site)
- Sitemap URL `/privacy/` maps to a working page, but the Next.js route appears to be at `/privacy-policy` in the source code (which 404s)

---

## Content Quality (Score: 72/100)

### E-E-A-T Assessment

| Signal | Status | Details |
|--------|--------|---------|
| Experience | GOOD | Mentions specific care practices, staff ratios (1:3-4), daily activities |
| Expertise | GOOD | Lists specific services: medication management, memory care, mobility support |
| Authoritativeness | FAIR | Missing: WA state license number, staff credentials, certifications |
| Trustworthiness | FAIR | Has testimonials but no third-party reviews linked (Google, Yelp) |

### Page-by-Page Content Analysis

| Page | Word Count (est.) | Thin Content? | Readability |
|------|-------------------|---------------|-------------|
| Homepage | ~1,500+ | No | Good (conversational) |
| Services | ~1,200+ | No | Good |
| About Us | ~800 | Borderline | Good |
| Contact | ~400 | Expected for contact page | Good |
| Gallery | N/A (images) | Expected | N/A |
| Privacy | ~500 | Expected for legal page | Good |

### Content Gaps
- No blog or resource section (missed long-tail keyword opportunity)
- No "Pricing" or "What to Expect" page
- No staff bio page with credentials
- No testimonials/reviews page (testimonials embedded in homepage only)
- Missing terms-of-service page (404 on live site)

---

## On-Page SEO (Score: 78/100)

### Title Tags

| Page | Title | Length | Status |
|------|-------|--------|--------|
| Home | Hebron Care Adult Family Home LLC #1 \| Compassionate Senior Care in Everett, WA | 80 chars | WARNING - slightly over 60 char ideal |
| Services | Services \| Hebron Care Adult Family Home LLC #1 - Senior Care, Memory Care & Amenities \| Everett, WA | 100 chars | FAIL - too long, will be truncated |
| About Us | About Us \| Hebron Care Adult Family Home LLC #1 - Mission & Team \| Everett, WA | 78 chars | WARNING - slightly long |
| Contact | Contact Us \| Hebron Care Adult Family Home LLC #1 \| Everett, WA | 63 chars | PASS |
| Gallery | (not checked) | - | - |
| Privacy | (not checked) | - | - |

### Meta Descriptions

| Page | Length | Status |
|------|--------|--------|
| Home | 170 chars | PASS (within 155-160 ideal but acceptable) |
| Services | 128 chars | PASS |
| About Us | 109 chars | PASS |
| Contact | 134 chars | PASS |

### Heading Structure (Homepage)

- **Missing H1** on homepage - no `<h1>` tag found in crawled HTML (likely in hero section text that wasn't in an h1 tag)
- H2 tags: "Words From Our Families", "Frequently Asked Questions"
- H3 tags: "A True Home", "Dedicated Attention", "Nutritious Meals", "Come See For Yourself"
- H4 tags: "Medication Management", "Mobility & Daily Living", "Cognitive Support", "Location", "Contact Us"

**Issue:** Heading hierarchy jumps from H2 to H4 (skipping H3 in some sections). The testimonial headings (H3) come before the services headings (H4), which may confuse heading hierarchy.

### Internal Linking

| Check | Status |
|-------|--------|
| Navigation links to all pages | PASS |
| Footer links | PASS (location, contact, privacy) |
| Contextual cross-links in content | LIMITED - Could add more in-content links between services and contact |
| Breadcrumbs | MISSING |

---

## Schema / Structured Data (Score: 70/100)

### Current Implementation

**Homepage:**
- LocalBusiness + MedicalBusiness (combined type) - GOOD
- FAQPage with 5 questions - GOOD
- Includes: name, address, phone, email, geo coordinates, hours, priceRange, sameAs

**Contact Page:**
- LocalBusiness schema - GOOD
- Includes: phone, fax, email, address, geo, sameAs

### Validation Issues
- Homepage schema `@id` uses `/#organization` but contact page doesn't reference it (should use `@id` for entity consolidation)
- `sameAs` only has Google Maps link - should include GBP profile, social media if any
- No `WebSite` schema with `SearchAction` (for sitelinks search box)

### Missing Schema Opportunities
- **BreadcrumbList** - Not on any page
- **WebSite** with SearchAction - Not implemented
- **Service** schema for individual services - Not implemented
- **Organization** schema - Using LocalBusiness but no separate Organization entity
- **Review/AggregateRating** - No review markup (could help with rich snippets)
- Services page has no schema at all
- About Us page has no schema
- Gallery page has no ImageGallery schema

---

## Performance / Core Web Vitals (Score: 45/100)

### Critical Performance Issues

1. **CDN Tailwind CSS (cdn.tailwindcss.com)** - This is a HUGE performance problem:
   - Ships the entire Tailwind library (~300KB+ of CSS/JS) to every visitor
   - Runs a JIT compiler in the browser on every page load
   - Render-blocking script
   - This alone likely adds 1-3 seconds to LCP on mobile
   - **Fix:** Use the Next.js build with Tailwind PostCSS (already configured in the project)

2. **Iconify CDN (code.iconify.design)** - Additional render-blocking script
   - Each icon makes a network request
   - **Fix:** Use @iconify/react or inline SVGs

3. **Google Fonts loaded via CSS link** - Render-blocking
   - Inter and Playfair Display loaded from fonts.googleapis.com
   - **Fix:** Use `next/font` for optimized font loading

4. **Images hosted on ibb.co** - External image hosting:
   - No control over caching, CDN, or optimization
   - Additional DNS lookup and connection
   - **Fix:** Self-host images in /public or use Next.js Image component

### Estimated CWV Impact

| Metric | Estimated | Target | Status |
|--------|-----------|--------|--------|
| LCP | 3-5s (mobile) | < 2.5s | POOR |
| FCP | 2-3s (mobile) | < 1.8s | NEEDS IMPROVEMENT |
| CLS | ~0.05 | < 0.1 | GOOD (images have dimensions) |
| INP | Unknown (lab) | < 200ms | LIKELY GOOD (minimal JS interactivity) |
| TTFB | ~200ms | < 800ms | GOOD (Vercel CDN) |

### Resource Summary

| Resource | Source | Blocking? |
|----------|--------|-----------|
| tailwindcss CDN | cdn.tailwindcss.com | YES - render blocking |
| Iconify | code.iconify.design | YES - render blocking |
| Google Fonts CSS | fonts.googleapis.com | YES - render blocking |
| Inter font files | fonts.gstatic.com | Secondary |
| Playfair Display font files | fonts.gstatic.com | Secondary |
| Logo image | i.ibb.co | No |
| Hero image | i.ibb.co | LCP candidate |

---

## Images (Score: 50/100)

### Image Analysis

| Check | Status | Details |
|-------|--------|---------|
| Alt text | PARTIAL | Logo and 2 content images have alt text. Gallery page likely has more |
| Image dimensions | PASS | Width/height set on logo |
| Lazy loading | PARTIAL | 1 of 3 homepage images lazy-loaded |
| Image format | WARNING | Using .png for logo (should be SVG or WebP). Hero image is .webp (good) |
| Self-hosted | FAIL | All images on ibb.co (external) |
| Next/Image component | NOT USED | Using raw `<img>` tags instead of Next.js Image optimization |
| Responsive images | MISSING | No srcset or sizes attributes |
| OG images | WARNING | Homepage OG image on ibb.co; Services and About use Unsplash URLs |

### OG Image Issues
- **Homepage:** ibb.co hosted (unreliable)
- **Services:** Unsplash URL (may violate TOS for OG usage, could be removed)
- **About Us:** Unsplash URL (same issue)
- **Contact:** Unsplash URL (same issue)
- **No custom OG images** with branding

---

## AI Search Readiness (Score: 30/100)

### AI Crawler Access

| Check | Status | Details |
|-------|--------|---------|
| robots.txt for AI bots | N/A | No robots.txt exists at all |
| GPTBot access | UNKNOWN | No explicit allow/disallow |
| ClaudeBot access | UNKNOWN | No explicit allow/disallow |
| Google-Extended | UNKNOWN | No explicit allow/disallow |
| llms.txt | MISSING | No /llms.txt file |

### Citability

| Signal | Status | Details |
|--------|--------|---------|
| Unique factual claims | GOOD | Staff ratio (1:3-4), specific address, phone |
| Structured answers (FAQ) | GOOD | 5 FAQ items with structured data |
| Named entity consistency | GOOD | "Hebron Care Adult Family Home LLC #1" used consistently |
| Service-specific passages | FAIR | Services listed but could be more detailed for citation |

### Missing for AI Readiness
- No `/llms.txt` file describing the business for AI crawlers
- No explicit AI bot directives in robots.txt
- Content could benefit from more quotable/citable passages
- No "About [Topic]" informational content (blog/resources)

---

## Local SEO Assessment

### NAP Consistency

| Element | Homepage | Contact | Schema |
|---------|----------|---------|--------|
| Name | Hebron Care Adult Family Home LLC #1 | Hebron Care Adult Family Home LLC #1 | Hebron Care Adult Family Home LLC #1 |
| Address | 11320 27th Ave SE, Everett, WA 98208 | 11320 27th Ave SE, Everett, WA 98208 | 11320 27th Ave SE, Everett, WA 98208 |
| Phone | (360) 843-7364 | (360) 843-7364 | +13608437364 |
| **Status** | **CONSISTENT** | **CONSISTENT** | **CONSISTENT** |

### Local Schema

| Check | Status |
|-------|--------|
| LocalBusiness type | PASS |
| MedicalBusiness type | PASS (on homepage) |
| GeoCoordinates | PASS |
| OpeningHours | PASS (24/7) |
| priceRange | PASS ($$) |
| Google Maps sameAs | PASS |

### Local SEO Gaps
- **No Google Business Profile link** in sameAs (only Maps pin)
- **No reviews/ratings** on the website or in schema
- **No "Areas Served"** page or mention of nearby cities (Marysville, Lake Stevens, Mukilteo, Lynnwood)
- **No driving directions** content
- **No embedded Google Map** (contact page may have one but not visible in header HTML)
- **Missing industry citations:** No links to WA DSHS licensing, senior care directories, A Place for Mom, Caring.com
- **No GBP posts** or review links encouraging reviews

---

## Backlink Profile (Basic - Common Crawl)

Without Moz/Bing API credentials, detailed backlink data is limited. Based on the site characteristics:

### Estimated Profile
- **Domain Age:** Relatively new (based on content freshness)
- **Referring Domains:** Likely very few (< 10) for a new local business site
- **Citation Sources:** Not present on major senior care directories

### Recommended Citation Building
1. Google Business Profile (if not already claimed)
2. A Place for Mom (aplaceformom.com)
3. Caring.com
4. SeniorAdvisor.com
5. Yelp Business
6. Facebook Business Page
7. WA DSHS provider directory
8. Everett Chamber of Commerce
9. Better Business Bureau
10. Apple Maps / Bing Places

---

## Priority Action Plan

### CRITICAL (Fix Immediately)

1. **Create robots.txt**
   - Add `User-agent: *`, `Allow: /`, `Sitemap: https://hebroncareafh.com/sitemap.xml`
   - Impact: Crawlability, sitemap discovery
   - Effort: 5 minutes

2. **Replace CDN Tailwind with build-time CSS**
   - Switch from `cdn.tailwindcss.com` to PostCSS Tailwind in Next.js build
   - Impact: 2-4 second LCP improvement on mobile
   - Effort: 1-2 hours

3. **Fix /privacy-policy and /terms-of-service 404s**
   - These routes exist in source code but 404 on live site
   - Sitemap references /privacy/ which works, but the routes are inconsistent
   - Impact: User trust, legal compliance
   - Effort: 30 minutes

### HIGH (Fix Within 1 Week)

4. **Add security headers via vercel.json**
   - X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
   - Impact: Security posture, indirect SEO trust signal
   - Effort: 15 minutes

5. **Self-host all images**
   - Move from ibb.co/Unsplash to /public directory
   - Use Next.js `<Image>` component for optimization
   - Impact: Performance, reliability, image SEO
   - Effort: 1-2 hours

6. **Replace Iconify CDN with inline SVGs or @iconify/react**
   - Eliminates render-blocking script and per-icon network requests
   - Impact: Performance
   - Effort: 1-2 hours

7. **Use next/font for Google Fonts**
   - Replace `<link>` tag with `next/font/google` for Inter and Playfair Display
   - Impact: Eliminates render-blocking CSS, font display optimization
   - Effort: 30 minutes

8. **Shorten title tags**
   - Homepage: "Hebron Care AFH | Senior Care in Everett, WA" (47 chars)
   - Services: "Senior Care Services | Hebron Care AFH Everett, WA" (50 chars)
   - Impact: Full titles displayed in SERPs
   - Effort: 15 minutes

### MEDIUM (Fix Within 1 Month)

9. **Add BreadcrumbList schema to all pages**
   - Impact: Rich snippets in search results
   - Effort: 30 minutes

10. **Add WebSite schema with SearchAction**
    - Impact: Sitelinks search box
    - Effort: 15 minutes

11. **Create custom 404 page**
    - Branded page with navigation and helpful links
    - Impact: User experience
    - Effort: 30 minutes

12. **Add H1 to homepage**
    - Ensure hero section text is wrapped in an `<h1>` tag
    - Impact: On-page SEO signal
    - Effort: 5 minutes

13. **Add `<lastmod>` dates to sitemap**
    - Impact: Crawl efficiency
    - Effort: 15 minutes

14. **Create /llms.txt**
    - Describe business for AI crawlers
    - Impact: AI search readiness
    - Effort: 15 minutes

15. **Add custom OG images**
    - Create branded OG images for each page, self-hosted
    - Impact: Social sharing, click-through
    - Effort: 1-2 hours

16. **Build citation profile**
    - Submit to senior care directories, GBP, Yelp, etc.
    - Impact: Local SEO authority
    - Effort: 2-4 hours

17. **Add "Areas Served" content**
    - Mention Everett, Marysville, Lake Stevens, Mukilteo, Lynnwood
    - Impact: Local search visibility for nearby cities
    - Effort: 30 minutes

### LOW (Backlog)

18. Add responsive images (srcset/sizes)
19. Create a blog/resources section for long-tail keywords
20. Add Service schema for individual services
21. Add staff credentials/certifications page
22. Link to third-party reviews (Google, Yelp)
23. Add AggregateRating schema if reviews are available
24. Create a "What to Expect" or "Pricing" page
25. Consolidate schema @id references across pages

---

*Report generated 2026-04-08. No Google API or paid backlink data available. CWV scores are lab estimates.*
