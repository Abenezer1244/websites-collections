# Environment Variables Setup Guide
**Created:** 2024-12-19

---

## 📋 Quick Start

1. **Copy the template file:**
   ```bash
   cp env.local.template .env.local
   ```
   Or manually create `.env.local` and copy from `env.local.template`

2. **Edit `.env.local`** and fill in your values

3. **Required for Production:**
   - SendGrid API key
   - Contact email address
   - From email address

---

## 🔴 REQUIRED VARIABLES (Production)

### Email Service Configuration

#### SENDGRID_API_KEY
**Required:** Yes (for production)  
**Purpose:** SendGrid API key for sending emails  
**How to Get:**
1. Sign up at https://sendgrid.com (free tier available)
2. Go to Settings → API Keys
3. Create new API key
4. Give it "Mail Send" permissions
5. Copy the key (you'll only see it once!)

**Example:**
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

#### CONTACT_EMAIL
**Required:** Yes (for production)  
**Purpose:** Where contact form submissions are sent  
**Format:** Valid email address

**Example:**
```env
CONTACT_EMAIL=contact@arkcare.local
```

---

#### FROM_EMAIL
**Required:** Yes (for production)  
**Purpose:** Sender email address (must be verified in SendGrid)  
**Important:** Must verify this email in SendGrid before use

**How to Verify:**
1. Go to SendGrid → Settings → Sender Authentication
2. Verify Single Sender or Domain
3. Use verified email here

**Example:**
```env
FROM_EMAIL=noreply@arkcare.local
```

---

## 🟡 OPTIONAL VARIABLES (Recommended)

### Rate Limiting (Upstash)

#### UPSTASH_REDIS_REST_URL
**Required:** No (optional)  
**Purpose:** Distributed rate limiting for production  
**When to Use:** If deploying to multiple servers or want persistent rate limiting

**How to Get:**
1. Sign up at https://upstash.com (free tier available)
2. Create Redis database
3. Copy REST URL

**Example:**
```env
UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
```

**Note:** If not provided, rate limiting uses in-memory storage (works fine for single server)

---

#### UPSTASH_REDIS_REST_TOKEN
**Required:** No (only if using Upstash)  
**Purpose:** Authentication token for Upstash Redis

**Example:**
```env
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

---

### Error Tracking (Sentry)

#### SENTRY_DSN & NEXT_PUBLIC_SENTRY_DSN
**Required:** No (optional but recommended)  
**Purpose:** Error tracking and monitoring  
**How to Get:**
1. Sign up at https://sentry.io (free tier available)
2. Create new project (Next.js)
3. Copy DSN from project settings

**Example:**
```env
SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
```

**Note:** Use the same DSN for both variables

---

#### SENTRY_ORG
**Required:** No (only if using Sentry)  
**Purpose:** Sentry organization slug

**Example:**
```env
SENTRY_ORG=your-org-name
```

---

#### SENTRY_PROJECT
**Required:** No (only if using Sentry)  
**Purpose:** Sentry project slug

**Example:**
```env
SENTRY_PROJECT=ark-care-afh
```

---

#### SENTRY_AUTH_TOKEN
**Required:** No (only if using Sentry)  
**Purpose:** Auth token for uploading source maps  
**How to Get:**
1. Go to Sentry → Settings → Auth Tokens
2. Create new token
3. Give it "project:releases" scope

**Example:**
```env
SENTRY_AUTH_TOKEN=your_auth_token_here
```

---

### Analytics (Optional)

#### NEXT_PUBLIC_GA_TRACKING_ID
**Required:** No  
**Purpose:** Google Analytics tracking  
**Format:** G-XXXXXXXXXX

**Example:**
```env
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

---

#### NEXT_PUBLIC_GTM_ID
**Required:** No  
**Purpose:** Google Tag Manager  
**Format:** GTM-XXXXXXX

**Example:**
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

---

#### NEXT_PUBLIC_FB_PIXEL_ID
**Required:** No  
**Purpose:** Facebook Pixel tracking

**Example:**
```env
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
```

---

### Site Configuration

#### NEXT_PUBLIC_SITE_URL
**Required:** No (but recommended)  
**Purpose:** Your site URL for SEO and absolute URLs  
**Development:** `http://localhost:3000`  
**Production:** `https://yourdomain.com`

**Example:**
```env
NEXT_PUBLIC_SITE_URL=https://arkcare.local
```

---

## 📝 Complete .env.local Template

### Minimum (Required for Production):
```env
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=contact@arkcare.local
FROM_EMAIL=noreply@arkcare.local
```

### Recommended (With Monitoring):
```env
# Email
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=contact@arkcare.local
FROM_EMAIL=noreply@arkcare.local

# Error Tracking
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_token

# Site
NEXT_PUBLIC_SITE_URL=https://arkcare.local
```

### Full (All Features):
```env
# Email (Required)
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=contact@arkcare.local
FROM_EMAIL=noreply@arkcare.local

# Rate Limiting (Optional)
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

# Error Tracking (Optional)
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_token

# Analytics (Optional)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://arkcare.local
```

---

## 🔒 Security Notes

1. **Never commit `.env.local` to git** (it's in .gitignore)
2. **Never share API keys** publicly
3. **Rotate keys** if accidentally exposed
4. **Use different keys** for development and production
5. **Verify email addresses** in SendGrid before production

---

## 🧪 Testing Your Configuration

### Test Email:
1. Set up `.env.local` with SendGrid credentials
2. Run `npm run dev`
3. Submit contact form
4. Check email inbox

### Test Rate Limiting:
1. Submit form 5 times quickly
2. 6th submission should be blocked
3. Check response headers

### Test Sentry:
1. Add Sentry DSN to `.env.local`
2. Trigger a test error
3. Check Sentry dashboard

---

## ❓ Common Issues

### Email Not Sending:
- ✅ Check SendGrid API key is correct
- ✅ Verify FROM_EMAIL in SendGrid
- ✅ Check SendGrid activity log
- ✅ Verify email isn't in spam folder

### Rate Limiting Not Working:
- ✅ Check browser console for errors
- ✅ Verify rate limit headers in response
- ✅ Test with multiple requests

### Sentry Not Working:
- ✅ Check DSN is correct
- ✅ Verify SENTRY_DSN and NEXT_PUBLIC_SENTRY_DSN match
- ✅ Check Sentry dashboard for errors
- ✅ Verify auth token has correct permissions

---

## 📚 Additional Resources

- **SendGrid Docs:** https://docs.sendgrid.com
- **Upstash Docs:** https://docs.upstash.com
- **Sentry Docs:** https://docs.sentry.io/platforms/javascript/guides/nextjs/
- **Next.js Env Vars:** https://nextjs.org/docs/app/building-your-application/configuring/environment-variables

---

**Last Updated:** 2024-12-19

