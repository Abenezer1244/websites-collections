# Basic SEO Setup – Hebron Care

This document describes the SEO elements added to the site and what to update when you go live.

---

## 1. Meta Titles & Descriptions

### Titles (per page)

| Page     | Title |
|----------|--------|
| Home     | Hebron Care Adult Family Home LLC \| Compassionate Senior Living |
| About Us | About Us \| Hebron Care Adult Family Home LLC |
| Gallery  | Gallery \| Hebron Care Adult Family Home LLC |
| Services | Our Services \| Hebron Care Adult Family Home LLC |
| Contact  | Contact Us \| Hebron Care Adult Family Home LLC |

### Meta descriptions (unique, ~150–160 characters)

- **Home:** Hebron Care is a licensed Adult Family Home in Seattle, WA offering compassionate assisted living, memory care, and 24/7 personalized care for seniors in a warm, family-like setting.
- **About Us:** Learn about Hebron Care's mission, vision, and journey. A Seattle-area Adult Family Home built on compassion, trust, and personalized senior care since day one.
- **Gallery:** Take a visual tour of Hebron Care. See our warm spaces, dining areas, outdoor gardens, and family-focused environment for senior living in Seattle.
- **Services:** Assisted living, memory care, medication management, respite care & more. Explore Hebron Care's full range of senior care services in Seattle, WA.
- **Contact:** Schedule a tour or get in touch with Hebron Care Adult Family Home LLC #1. Visit us in Everett, WA, call (425) 225-5424, or send a message. We're here to help with senior care options.

### Canonical URLs

Each page has a `<link rel="canonical" href="...">` in the `<head>`:

- Home: `https://2hebron-careafh.live/`
- About Us: `https://2hebron-careafh.live/about-us.html`
- Gallery: `https://2hebron-careafh.live/gallery.html`
- Services: `https://2hebron-careafh.live/services.html`
- Contact: `https://2hebron-careafh.live/contact.html`

---

## 2. Google Business Profile Connection

### In the code

- **Schema:** Every page has JSON-LD with `"sameAs": [ "https://www.google.com/maps/place/hebron-care" ]` so search engines can link the site to your Google Business Profile.
- **Footer:** A “Find us on Google” link (with map icon) in the first footer column on all 5 pages, pointing to the same URL. Opens in a new tab with `rel="noopener noreferrer"`.

### What to do when you have your profile

1. Get your Google Business Profile URL (e.g. from the “Share” or “Get directions” link).
2. Replace `https://www.google.com/maps/place/hebron-care` in:
   - The `sameAs` array inside the `<script type="application/ld+json">` block on **every page**
   - The “Find us on Google” link `href` in the footer on **all 5 pages**

---

## 3. Local Schema Markup

### Type and location

- **Type:** `LocalBusiness` (JSON-LD).
- **Where:** In the `<head>` of every HTML page, in a `<script type="application/ld+json">` block.

### Data included

- **Identity:** Name, description, URL, `@id`
- **Contact:** Telephone, email (where relevant)
- **Address:** Full `PostalAddress`  
  - Street: 1234 Serenity Lane, Suite 100  
  - City: Seattle  
  - Region: WA  
  - Postal code: 98101  
  - Country: US
- **Hours (home page):** Office Mo–Fr 9:00–17:00; care 24/7
- **Google Business:** `sameAs` with placeholder Google Maps / GBP URL
- **Other (home page):** `priceRange`, `areaServed` (Seattle, Washington)

### What to update

- Replace the placeholder **website domain** in all canonical links and in schema `url` / `@id` with your live domain.
- Replace the **Google Business Profile URL** in `sameAs` (and in the “Find us on Google” link) with your real profile link.
- If your real **address**, **phone**, or **email** differ from the placeholders, update them in the JSON-LD (and anywhere else they appear on the site).

---

## Checklist before launch

- [x] Live domain set: `https://2hebron-careafh.live` (canonicals + schema on all pages).
- [ ] Replace `https://www.google.com/maps/place/hebron-care` with your real Google Business Profile URL (schema `sameAs` + footer “Find us on Google” on all 5 pages).
- [ ] Update address, phone, and email in the LocalBusiness schema (and on the site) if they differ from the placeholders.
- [ ] In Google Search Console, add the property for your domain and submit your sitemap (if you have one).
- [ ] In Google Business Profile, add your website URL and make sure name, address, and phone match the site and schema.
