# Integration Guide

This guide provides instructions for integrating external services and completing remaining setup tasks.

## Table of Contents
1. [Contact Form Backend Integration](#contact-form-backend-integration)
2. [Analytics Setup](#analytics-setup)
3. [Production Domain Configuration](#production-domain-configuration)
4. [Adding Images](#adding-images)
5. [Environment Variables](#environment-variables)

---

## Contact Form Backend Integration

The contact form is ready for backend integration. Choose one of the following options:

### Option 1: Next.js API Route (Recommended)

The API route is already created at `src/app/api/contact/route.ts`. To enable email sending:

1. **Using SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```
   
   Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   CONTACT_EMAIL=contact@arkcare.local
   FROM_EMAIL=noreply@arkcare.local
   ```
   
   Uncomment and modify the SendGrid code in `src/app/api/contact/route.ts`

2. **Using Nodemailer (SMTP):**
   ```bash
   npm install nodemailer
   ```
   
   Add to `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   CONTACT_EMAIL=contact@arkcare.local
   ```

### Option 2: Third-Party Form Service

1. **Formspree:**
   - Sign up at https://formspree.io
   - Get your form endpoint
   - Update `NEXT_PUBLIC_CONTACT_API_ENDPOINT` in `.env.local`

2. **FormSubmit:**
   - Update `NEXT_PUBLIC_CONTACT_API_ENDPOINT` to `https://formsubmit.co/your-email@example.com`
   - No backend code needed

### Option 3: Custom Backend

Update `NEXT_PUBLIC_CONTACT_API_ENDPOINT` in `.env.local` to point to your custom API endpoint.

---

## Analytics Setup

Analytics tracking is ready to use. Follow these steps:

### Google Analytics 4 (GA4)

1. Create a GA4 property at https://analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Google Tag Manager

1. Create a GTM container at https://tagmanager.google.com
2. Get your Container ID (format: GTM-XXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

### Facebook Pixel

1. Create a Pixel in Facebook Business Manager
2. Get your Pixel ID
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id
   ```

**Note:** Analytics only loads in production mode by default. To test in development, modify `isAnalyticsEnabled()` in `src/lib/analytics.ts`.

---

## Production Domain Configuration

When you have your production domain, update the following:

### 1. Update SEO Configuration

Edit `src/lib/seo.ts`:
```typescript
export const siteConfig = {
  // ... other config
  url: 'https://your-production-domain.com', // Update this
  ogImage: 'https://your-production-domain.com/og-image.jpg', // Update this
}

export const businessInfo = {
  // ... other info
  url: 'https://your-production-domain.com', // Update this
  image: 'https://your-production-domain.com/logo.png', // Update this
  email: 'contact@your-production-domain.com', // Update this
}
```

### 2. Update Sitemap

Edit `public/sitemap.xml`:
- Replace all instances of `https://arkcare.local` with your production domain
- Update `lastmod` dates to current date

### 3. Update Environment Variables

Add to production environment:
```
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

---

## Adding Images

### Gallery Images

1. Add images to `public/gallery/` directory
2. Name files descriptively (e.g., `barbecues-picnics.jpg`)
3. Update `src/app/gallery/page.tsx`:
   ```typescript
   const galleryItems = [
     { 
       id: 1, 
       title: "Barbecues & Picnics", 
       image: "/gallery/barbecues-picnics.jpg", // Add image path
       alt: "Residents enjoying outdoor barbecues and picnics" 
     },
     // ... other items
   ]
   ```

**Image Recommendations:**
- Format: JPG or WebP
- Size: 1200x1200px minimum
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)

### Team Member Photos

1. Add images to `public/team/` directory
2. Name files descriptively (e.g., `sarah-johnson.jpg`)
3. Update `src/app/about/page.tsx`:
   ```typescript
   const team = [
     {
       name: "Sarah Johnson",
       title: "Owner & Care Coordinator",
       image: "/team/sarah-johnson.jpg", // Add image path
       alt: "Sarah Johnson - Owner & Care Coordinator",
       // ... other properties
     },
     // ... other team members
   ]
   ```

**Image Recommendations:**
- Format: JPG or WebP
- Size: 800x800px (square)
- Optimize images before uploading

---

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com

# Contact Form
NEXT_PUBLIC_CONTACT_API_ENDPOINT=/api/contact
# OR for third-party service:
# NEXT_PUBLIC_CONTACT_API_ENDPOINT=https://formsubmit.co/your-email@example.com

# Email Service (if using SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=contact@arkcare.local
FROM_EMAIL=noreply@arkcare.local

# Email Service (if using SMTP/Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id
```

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

---

## Testing Checklist

Before going live:

- [ ] Contact form sends emails successfully
- [ ] Analytics tracking is working (check in GA4/GTM)
- [ ] All images are optimized and loading correctly
- [ ] All links work correctly
- [ ] Site is responsive on mobile devices
- [ ] SEO meta tags are correct
- [ ] Sitemap.xml is updated with production domain
- [ ] Error boundaries are tested
- [ ] Form validation works correctly
- [ ] Accessibility features work (keyboard navigation, screen readers)

---

## Support

For questions or issues, refer to:
- Next.js Documentation: https://nextjs.org/docs
- SendGrid Documentation: https://docs.sendgrid.com
- Google Analytics Documentation: https://support.google.com/analytics

