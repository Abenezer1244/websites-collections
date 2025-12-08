# Better Care Adult Family Home LLC - Website

A responsive, SEO-optimized website for Better Care Adult Family Home LLC, providing compassionate senior care services in Seattle, WA.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Functional mobile navigation menu
- ✅ SEO optimized with meta tags and schema markup
- ✅ Google Business Profile integration ready
- ✅ Local business schema markup
- ✅ Open Graph and Twitter Card support

## SEO Setup

### Meta Tags
All pages include:
- Unique meta titles and descriptions
- Keywords meta tags
- Canonical URLs
- Open Graph tags for social sharing
- Twitter Card tags

### Local Business Schema
The website includes comprehensive LocalBusiness schema markup (JSON-LD) on all pages with:
- Business name, address, and contact information
- Geographic coordinates
- Opening hours (24/7)
- Service types
- Aggregate ratings
- Google Business Profile connection

### Google Business Profile Setup

To connect your Google Business Profile:

1. **Create/Claim Your Google Business Profile**
   - Go to [Google Business Profile](https://www.google.com/business/)
   - Create a new profile or claim your existing one
   - Use the exact business information:
     - Name: Better Care Adult Family Home LLC
     - Address: 123 Serenity Lane, Seattle, WA 98101
     - Phone: (555) 123-4567
     - Website: https://www.bettercareafh.com

2. **Verify Your Business**
   - Complete the verification process (mail, phone, or email)
   - Ensure all information matches the website exactly

3. **Update Your Profile**
   - Add business hours (24/7)
   - Upload photos of your facility
   - Add services offered
   - Enable messaging and booking if desired

4. **Link Your Website**
   - The schema markup already includes the connection
   - Update the `sameAs` field in the schema with your actual Google Business Profile URL once created
   - The contact page includes a "View on Google Maps" link

5. **Schema Markup Location**
   - The LocalBusiness schema is in the `<head>` section of all pages
   - Update the `sameAs` array with your actual Google Business Profile URL:
   ```json
   "sameAs": [
     "https://www.google.com/maps/place/YOUR-ACTUAL-GOOGLE-BUSINESS-PROFILE-URL"
   ]
   ```

### Important Notes

- **Update Domain**: Replace `https://www.bettercareafh.com` with your actual domain in:
  - All canonical URLs
  - Open Graph URLs
  - Schema markup URLs
  - Image URLs (when you add actual images)

- **Update Images**: Replace placeholder image URLs with actual images:
  - `images/better-care-og-image.jpg` (1200x630px recommended)
  - `images/better-care-twitter-image.jpg` (1200x675px recommended)
  - `images/better-care-logo.png`
  - `images/better-care-hero.jpg`

- **Update Phone Number**: Replace `(555) 123-4567` with your actual phone number in:
  - All HTML content
  - Schema markup
  - Contact links

## Pages

- **Home** (`index.html`) - Main landing page
- **About Us** (`about-us.html`) - Company story and team
- **Gallery** (`gallery.html`) - Photo gallery
- **Services** (`services.html`) - Services offered
- **Contact Us** (`contact-us.html`) - Contact form and information

## Technical Details

- Built with HTML5, Tailwind CSS, and vanilla JavaScript
- Mobile-first responsive design
- Accessible navigation with ARIA labels
- SEO-friendly structure with semantic HTML
- Schema.org LocalBusiness markup for rich snippets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2023 Better Care Adult Family Home LLC. All rights reserved.
