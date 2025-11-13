# Tweakcn Theme Setup Guide

This guide will help you use Tweakcn to customize themes for your Ark Care AFH website.

## Prerequisites

1. Your website must be accessible via a URL (either deployed or using a local tunnel)
2. The `components.json` file is configured to use the Tweakcn registry
3. CSS variables are properly set up in `globals.css`
4. **The tweakcn live preview script is included in your layout** (already configured ✅)

## Step 1: Make Your Website Accessible

### Option A: Deploy Your Website (Recommended)
Deploy your website to a platform like Vercel, Netlify, or any hosting service. Tweakcn needs a live URL to preview and apply themes.

### Option B: Use a Local Tunnel (For Development)
If testing locally, use a tunnel service:

```bash
# Using ngrok (install from https://ngrok.com/)
ngrok http 3000

# Or using Cloudflare Tunnel
cloudflared tunnel --url http://localhost:3000
```

## Step 2: Access Tweakcn

1. Go to [https://tweakcn.com](https://tweakcn.com)
2. Enter your website URL in the Tweakcn interface
3. Tweakcn will scan your website and detect the theme variables

## Step 3: Customize Your Theme

1. In Tweakcn, you'll see all your CSS variables
2. Adjust colors, spacing, fonts, and other design tokens
3. Preview changes in real-time
4. When satisfied, click "Export" or "Copy CSS"

## Step 4: Apply the Theme

### Method 1: Copy CSS Variables
1. Copy the generated CSS variables from Tweakcn
2. Replace the `:root` section in `src/app/globals.css` with the new variables
3. Save and rebuild your site

### Method 2: Use Tweakcn's Direct Integration (if available)
Some versions of Tweakcn allow direct integration. Check Tweakcn's documentation for the latest integration method.

## Step 5: Verify Changes

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Check that all components reflect the new theme
3. Test in both light and dark modes (if applicable)

## Troubleshooting

### Theme Not Showing in Tweakcn

1. **Check Website Accessibility**: Ensure your website is publicly accessible
2. **Verify CSS Variables**: Make sure CSS variables are in the `:root` selector
3. **Check Browser Console**: Look for any errors that might prevent Tweakcn from reading your site
4. **Clear Cache**: Clear your browser cache and try again

### Theme Not Applying After Export

1. **Verify CSS File Path**: Ensure `globals.css` is in `src/app/globals.css`
2. **Check Variable Names**: Ensure variable names match exactly (case-sensitive)
3. **Rebuild**: Run `npm run build` and restart the dev server
4. **Check Tailwind Config**: Ensure `tailwind.config.ts` references CSS variables correctly

### Components Not Updating

1. **Check Component Usage**: Ensure components use Tailwind classes that reference CSS variables (e.g., `bg-primary`, `text-foreground`)
2. **Verify Tailwind Config**: Check that colors in `tailwind.config.ts` use `var(--variable-name)`
3. **Hard Refresh**: Clear browser cache with `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

## Current Configuration

- **Registry**: `https://tweakcn.com/r/themes/registry.json`
- **CSS File**: `src/app/globals.css`
- **Tailwind Config**: `tailwind.config.ts`
- **CSS Variables**: Enabled (`cssVariables: true`)
- **Live Preview Script**: ✅ Added to `src/app/layout.tsx` (loads from `https://tweakcn.com/live-preview.js`)

## Notes

- Tweakcn works best with deployed websites
- Local development requires a tunnel service
- Always backup your current `globals.css` before applying new themes
- Test thoroughly after applying a new theme
- Some custom CSS animations and utilities may need manual adjustment

## Support

If you continue to experience issues:
1. Check Tweakcn's documentation: [https://tweakcn.com/docs](https://tweakcn.com/docs)
2. Review the Tweakcn GitHub issues: [https://github.com/jnsahaj/tweakcn](https://github.com/jnsahaj/tweakcn)
3. Ensure your website is using the latest shadcn/ui components

