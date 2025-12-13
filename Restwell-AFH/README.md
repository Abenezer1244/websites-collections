# Restwell AFH - Website

A responsive, SEO-optimized website for Restwell AFH, providing compassionate senior care services in Seattle, WA.

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
     - Name: Restwell AFH
     - Address: 123 Serenity Lane, Seattle, WA 98101
     - Phone: (555) 123-4567
     - Website: https://restwellafh.site

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

- **Domain**: All domain references have been updated to `restwellafh.site`:
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

## Deployment

This website is deployed on **Vercel** at:
- **Production URL**: https://restwellafh.site
- **Vercel Dashboard**: Manage deployments, domains, and settings through your Vercel account

### Domain Configuration

The domain `restwellafh.site` is configured to point to the Vercel deployment. All domain references in the codebase have been updated to use `restwellafh.site`.

### Custom Domain Setup on Vercel

1. **Add Domain in Vercel Dashboard**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add `restwellafh.site` and `www.restwellafh.site`

2. **Configure DNS Records**
   - Add an A record pointing to Vercel's IP (Vercel will provide this)
   - Or add a CNAME record pointing to your Vercel deployment URL
   - Vercel will provide specific DNS instructions in the dashboard

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates for custom domains
   - HTTPS will be enabled automatically once DNS propagates

### Automatic Deployments

- **Git Integration**: Pushes to the `main` branch automatically trigger deployments
- **Preview Deployments**: Pull requests get preview URLs automatically
- **Build Settings**: Static HTML files are served directly (no build step required)

## License

© 2023 Restwell AFH. All rights reserved.
