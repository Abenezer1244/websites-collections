# Deployment Guide for Heavenly Care AFH Website

## Domain: heavenlycareafh.site

This guide will help you deploy your website to Vercel and connect your custom domain.

## Step 1: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if you haven't already):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your project**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (first time) or **Yes** (if re-deploying)
   - Project name? `heavenly-care-afh` (or your preferred name)
   - Directory? `./` (current directory)
   - Override settings? **No**

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository (or connect via Git)
4. Configure project:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: Leave empty (static site)
   - Output Directory: Leave empty
5. Click **"Deploy"**

## Step 2: Connect Your Custom Domain

### In Vercel Dashboard:

1. Go to your project settings
2. Navigate to **"Domains"** in the sidebar
3. Click **"Add Domain"**
4. Enter: `heavenlycareafh.site`
5. Click **"Add"**
6. Also add `www.heavenlycareafh.site` if you want www support

### DNS Configuration

Vercel will provide you with DNS records to add. You'll need to configure these with your domain registrar:

#### For the apex domain (heavenlycareafh.site):
- **Type**: A record
- **Name**: @ or (leave blank/root)
- **Value**: 76.76.21.21 (Vercel's IP)
- **TTL**: 3600 (or auto)

OR use CNAME (if your registrar supports it):
- **Type**: CNAME
- **Name**: @
- **Value**: cname.vercel-dns.com
- **TTL**: 3600

#### For www subdomain (www.heavenlycareafh.site):
- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com
- **TTL**: 3600

### Common Domain Registrars:

**GoDaddy:**
1. Log into your account
2. Go to DNS Management
3. Add the records above
4. Wait 5-60 minutes for propagation

**Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add the records above
3. Wait for propagation

**Cloudflare:**
1. Select your domain
2. Go to DNS → Records
3. Add the records above
4. Set Proxy status to "DNS only" (gray cloud) if needed

## Step 3: Verify SSL/HTTPS

Vercel automatically provides SSL certificates via Let's Encrypt. After DNS propagation (usually 5-60 minutes), your site will be available at:
- https://heavenlycareafh.site
- https://www.heavenlycareafh.site

## Step 4: Verify Deployment

1. Check your Vercel dashboard for deployment status
2. Visit your domain to ensure it's working
3. Test all pages:
   - https://heavenlycareafh.site
   - https://heavenlycareafh.site/gallery.html
   - https://heavenlycareafh.site/about-us.html
   - https://heavenlycareafh.site/services.html
   - https://heavenlycareafh.site/contact-us.html

## Troubleshooting

### Domain not connecting?
- Wait 24-48 hours for full DNS propagation
- Check DNS records are correct in your registrar
- Verify domain is added correctly in Vercel
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS propagation

### SSL Certificate Issues?
- Ensure DNS is properly configured first
- Wait 1-24 hours for certificate issuance
- Contact Vercel support if issues persist

### Images not loading?
- Ensure image paths are correct (images/gallery-XX.jpg)
- Check that images folder exists and files are committed to git
- Verify image file sizes are reasonable

## Email Configuration

The website uses `care@heavenlycareafh.site` as the contact email. Make sure to:
1. Set up email forwarding with your domain registrar
2. Or configure an email service (Google Workspace, Microsoft 365, etc.)
3. Update email settings in contact forms if needed

## Continuous Deployment

Once connected to Vercel via Git:
- Every push to `main` branch = automatic production deployment
- Every push to other branches = preview deployment

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

