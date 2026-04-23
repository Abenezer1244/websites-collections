# SEO Audit Report: hebroncareafh2.com

**Date:** 2026-04-08
**Pages Crawled:** 7 (/, /about-us, /services, /gallery, /contact, /privacy-policy, /terms-of-service)
**Business Type:** Local Service -- Adult Family Home (Assisted Living)
**Platform:** Next.js on Vercel

---

## SEO Health Score: 38/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 30/100 | 6.6 |
| Content Quality | 23% | 62/100 | 14.3 |
| On-Page SEO | 20% | 35/100 | 7.0 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness | 10% | 15/100 | 1.5 |
| Images | 5% | 65/100 | 3.3 |
| **Total** | **100%** | | **38.2** |

---

## Executive Summary

### Top 5 Critical Issues

1. **SSL certificate invalid for www.hebroncareafh2.com** -- visitors using www get a security error and cannot access the site
2. **No robots.txt** -- returns 404, search engines have no crawl directives
3. **No sitemap.xml** -- returns 404, search engines cannot discover pages efficiently
4. **Zero JSON-LD structured data** -- no LocalBusiness, no Service schema on any page; zero rich result eligibility
5. **No canonical tags on any page** -- risk of duplicate content issues across URL variants

### Top 5 Quick Wins

1. Add canonical tags to every page (Next.js metadata API)
2. Fix og:url from old domain `2hebron-careafh.live` to `hebroncareafh2.com`
3. Add `robots.txt` and `sitemap.xml` via Next.js config
4. Add LocalBusiness JSON-LD schema to all pages
5. Add a favicon

---

## Technical SEO (Score: 30/100)

### Crawlability

| Check | Status | Detail |
|-------|--------|--------|
| robots.txt | FAIL | Returns 404. No crawl directives for search engines. |
| sitemap.xml | FAIL | Returns 404. No XML sitemap for page discovery. |
| HTTP to HTTPS redirect | PASS | http://hebroncareafh2.com redirects to https:// |
| www to non-www redirect | FAIL | www.hebroncareafh2.com has SSL cert mismatch -- broken |
| Internal links | PASS | All 5 main pages linked from nav and footer |
| 404 page | PASS | Next.js default 404 renders correctly |

### Indexability

| Check | Status | Detail |
|-------|--------|--------|
| Canonical tags | FAIL | Missing on all 7 pages |
| Meta robots | INFO | Not set (defaults to index,follow -- OK) |
| robots.txt 404 page | WARN | The 404 for robots.txt returns `<meta name="robots" content="noindex">` in its HTML -- this is fine since search engines parse robots.txt as plain text, not HTML |
| Duplicate titles | FAIL | Homepage, About Us, and Contact share identical title |
| Duplicate meta descriptions | FAIL | Homepage, About Us, and Contact share identical description |

### Security

| Header | Status |
|--------|--------|
| HTTPS | PASS |
| HSTS | PASS (max-age=63072000) |
| Content-Security-Policy | MISSING |
| X-Content-Type-Options | MISSING |
| X-Frame-Options | MISSING |
| Referrer-Policy | MISSING |
| Permissions-Policy | MISSING |

Note: Vercel provides HSTS by default. The missing headers are defense-in-depth but not direct SEO ranking factors. CSP and X-Frame-Options matter most for user trust.

---

## Content Quality (Score: 62/100)

### Page-by-Page Analysis

| Page | Title | Unique Title? | Unique Description? | H1 | Word Est. |
|------|-------|---------------|--------------------|----|-----------|
| / | Home | -- | -- | "Where your loved one is known by name." | ~300 |
| /about-us | Hebron Care Adult Family Home \| Everett, WA | NO (same as /) | NO (same as /) | "We started this because we believe aging should feel like living." | ~400 |
| /services | Services \| Hebron Care | YES | YES | "What we actually do, every single day." | ~500 |
| /gallery | Gallery \| Hebron Care | YES | YES | "A look inside our home." | ~50 |
| /contact | Hebron Care Adult Family Home \| Everett, WA | NO (same as /) | NO (same as /) | "We'd love to hear from you." | ~150 |
| /privacy-policy | Privacy Policy \| Hebron Care | YES | YES | "Privacy Policy" | ~800 |
| /terms-of-service | Terms of Service \| Hebron Care | YES | YES | "Terms of Service" | ~600 |

### E-E-A-T Assessment

- **Experience:** Some signals present (address, phone number, photos of actual home)
- **Expertise:** Weak -- no staff credentials, no licensing number displayed, no certifications mentioned
- **Authoritativeness:** Weak -- no Google Business Profile link, no reviews integration, no third-party validation
- **Trustworthiness:** Moderate -- privacy policy and terms present, HTTPS enabled, real address shown

### Issues

- About Us and Contact pages inherit the layout's default metadata instead of having their own unique title/description
- Gallery page is thin content (~50 words, mostly images -- acceptable for a gallery but could use more descriptive captions)
- No blog or resource section for topical authority
- Footer shows garbled character (replacement character) in "Adult Family Home . Everett, WA"

---

## On-Page SEO (Score: 35/100)

### Title Tags

| Issue | Pages Affected |
|-------|----------------|
| Duplicate title (layout default) | /about-us, /contact |
| Homepage title is just "Home" (too generic) | / |
| Missing keyword targeting | Most pages lack "adult family home" + location in title |

**Recommended title pattern:** `[Page] | Hebron Care Adult Family Home | Everett, WA`

### Meta Descriptions

| Issue | Pages Affected |
|-------|----------------|
| Duplicate description (layout default) | /about-us, /contact |
| Homepage description is good | / |
| Services description truncated | /services |

### Open Graph / Social

| Tag | Status |
|-----|--------|
| og:title | Present but uses old domain on some pages |
| og:description | Present |
| og:image | MISSING on all pages |
| og:url | Points to old domain `https://2hebron-careafh.live` |
| og:type | Present on 404 layout but missing from homepage |
| twitter:card | Present (summary) |

### Heading Structure

All pages have exactly 1 H1 -- good. Heading hierarchy is clean on all pages.

### Internal Linking

- Nav: 5 links (Home, About, Services, Gallery, Contact)
- Footer: 5 nav links + Privacy + Terms + phone + email
- No cross-linking between content pages (e.g., Services page doesn't link to Contact for scheduling)
- No breadcrumbs

---

## Schema / Structured Data (Score: 0/100)

**Zero JSON-LD blocks found on any page.**

This is the single biggest SEO gap for a local service business. Missing schemas:

| Schema | Priority | Pages |
|--------|----------|-------|
| LocalBusiness (or AssistedLivingFacility) | CRITICAL | All pages |
| Service | HIGH | /services |
| FAQPage | HIGH | /services, /about-us |
| BreadcrumbList | MEDIUM | All pages |
| WebSite + SearchAction | MEDIUM | / |
| ImageGallery | LOW | /gallery |
| ContactPage | LOW | /contact |

---

## Performance (Score: 55/100 -- estimated, no PSI data available)

Based on observed signals:

| Signal | Status |
|--------|--------|
| Next.js Image optimization | PASS -- using `/_next/image` with WebP, srcSet |
| Font preloading | PASS -- 2 WOFF2 fonts preloaded |
| Static generation | PASS -- `X-Nextjs-Prerender: 1` (ISR/static) |
| CDN caching | PASS -- `X-Vercel-Cache: HIT` |
| JS bundle size | WARN -- multiple script chunks loaded |
| CSS | PASS -- single stylesheet |
| Third-party scripts | PASS -- none detected |

Note: PageSpeed Insights was rate-limited. Run manually at pagespeed.web.dev for precise CWV scores.

---

## Images (Score: 65/100)

| Metric | Status |
|--------|--------|
| Alt text coverage | 97% (1 empty alt on homepage hero -- should describe the image) |
| Format | PASS -- WebP via Next.js Image |
| Responsive srcSet | PASS -- multiple widths served |
| Lazy loading | PASS -- `loading="lazy"` on non-hero images |
| Logo | WARN -- loaded from external CDN (i.ibb.co) instead of local |
| Gallery images | 24 images, all with alt text |
| OG image | FAIL -- no social sharing image on any page |

---

## AI Search Readiness (Score: 15/100)

| Check | Status |
|-------|--------|
| Structured data for AI extraction | FAIL -- no JSON-LD |
| llms.txt | FAIL -- not present |
| Citability (clear, quotable statements) | PARTIAL -- some good copy but buried in styled markup |
| Brand mention signals | WEAK -- no external authority links |
| FAQ-style content | FAIL -- no FAQ sections |
| Entity disambiguation | FAIL -- no schema linking to GBP or other profiles |

---

## WWW / SSL Issue Detail

**This is the most urgent fix.**

```
www.hebroncareafh2.com -> SSL CERTIFICATE_VERIFY_FAILED
  "Hostname mismatch, certificate is not valid for 'www.hebroncareafh2.com'"
```

The Vercel SSL certificate does not cover the `www` subdomain. Anyone typing `www.hebroncareafh2.com` gets a browser security warning. This:
- Loses visitors immediately
- Splits link equity between www and non-www
- Looks unprofessional / untrustworthy to families researching care homes

**Fix:** In Vercel dashboard, add `www.hebroncareafh2.com` as a domain alias with redirect to the apex domain. Vercel will auto-provision the SSL cert.

---

## Domain Issue: Old Domain References

Multiple pages still reference `https://2hebron-careafh.live` in:
- `og:url` meta tag
- Likely in the Next.js metadata config

This means social shares and search engines see the wrong canonical domain.
