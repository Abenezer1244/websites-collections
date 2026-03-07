# Hebron Care – SEO Setup Guide

This document explains the SEO setup and what to update when you have your live domain and Google Business Profile.

## What’s Already Implemented

### 1. Meta titles & descriptions
- **Home:** "Hebron Care Adult Family Home LLC | Compassionate Senior Care in Seattle, WA"
- **About:** "About Us | Hebron Care Adult Family Home - Mission & Team | Seattle, WA"
- **Services:** "Services | Hebron Care - Senior Care, Memory Care & Amenities | Seattle, WA"
- **Gallery:** "Gallery | Hebron Care - Virtual Tour of Our Seattle Adult Family Home"
- **Contact:** "Contact Us | Hebron Care - Schedule a Tour | Seattle, WA"

Each page has:
- Unique meta description (under 160 characters)
- Keywords meta tag
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Canonical URLs

### 2. Local schema markup (JSON-LD)
- **LocalBusiness** schema on `index.html` and `contact.html`
- Includes: name, address, phone, email, geo coordinates, opening hours, image
- Helps search engines understand your business for local search

### 3. Google Business Profile connection
- Schema `sameAs` property points to Google Maps
- Footer “Find us on Google” link on all pages
- Map icon in footer links to Google Maps search

---

## What to Update When You Go Live

### 1. Domain & canonical URLs
Replace `https://hebroncare.com` with your real domain in:
- `index.html` – canonical, og:url, schema `url`
- `about-us.html` – canonical, og:url
- `services.html` – canonical, og:url
- `gallery.html` – canonical, og:url
- `contact.html` – canonical, og:url, schema `url`

### 2. Google Business Profile
1. Create your profile at [business.google.com](https://business.google.com)
2. Add your website URL and verify it
3. Add your exact address, phone, hours, and photos
4. Get your Business Profile URL (e.g. `https://www.google.com/maps/place/...` or `https://g.page/hebroncare`)
5. Update the `sameAs` array in the schema on `index.html` and `contact.html`:
   ```json
   "sameAs": [
     "https://www.google.com/maps/place/YOUR-ACTUAL-BUSINESS-PROFILE-URL"
   ]
   ```
6. Update the “Find us on Google” footer links to your Business Profile URL

### 3. Address & contact details
If your real address differs from the placeholder:
- Update the schema in `index.html` and `contact.html`
- Update the address on the contact page and in the footer
- Update the map embed on the contact page with your exact location

### 4. Images
- Replace Unsplash image URLs with your own photos
- Use high-quality images (at least 1200px wide) for og:image
- Add a favicon: `<link rel="icon" href="/favicon.ico" type="image/x-icon">`

---

## Testing Your SEO

- **Schema:** [Google Rich Results Test](https://search.google.com/test/rich-results)
- **Meta tags:** View page source and check `<head>`
- **Mobile:** [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
