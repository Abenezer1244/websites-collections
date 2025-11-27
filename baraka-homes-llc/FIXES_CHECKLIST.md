# Quick Fixes Checklist
**Quick Reference Guide** - See `IMPLEMENTATION_PLAN.md` for detailed instructions

---

## 🔴 CRITICAL (Do First - Blocks Production)

- [ ] **Task 1.1:** Implement Email Sending
  - [ ] Choose email service (SendGrid/Resend/AWS SES)
  - [ ] Install dependencies
  - [ ] Add environment variables
  - [ ] Update `src/app/api/contact/route.ts`
  - [ ] Test email sending
  - [ ] Remove TODO comment

- [ ] **Task 1.2:** Remove Console Logging
  - [ ] Create `src/lib/logger.ts`
  - [ ] Replace console.log in `src/app/api/contact/route.ts`
  - [ ] Replace console.error in `src/lib/api/contact.ts`
  - [ ] Replace console.log in `src/app/contact/ContactPageClient.tsx`
  - [ ] Replace console.error in `src/app/error.tsx`
  - [ ] Test logging works in dev, disabled in prod

- [ ] **Task 1.3:** Fix Dependency Vulnerability
  - [ ] Run `npm audit fix`
  - [ ] Verify `js-yaml` updated to >= 4.1.1
  - [ ] Test application still works

---

## 🟠 HIGH PRIORITY (Before Production)

- [ ] **Task 2.1:** Implement Rate Limiting
  - [ ] Choose solution (Upstash recommended)
  - [ ] Install dependencies
  - [ ] Create `src/lib/rate-limit.ts`
  - [ ] Update `src/app/api/contact/route.ts`
  - [ ] Test rate limiting (5 requests max)
  - [ ] Verify error messages

---

## 🟡 MEDIUM PRIORITY (Security Best Practices)

- [ ] **Task 3.1:** Add Security Headers
  - [ ] Update `next.config.js` with headers
  - [ ] Test headers in browser DevTools
  - [ ] Verify no conflicts

- [ ] **Task 3.2:** Implement Content Security Policy
  - [ ] Add CSP to `next.config.js`
  - [ ] Test CSP (check console for violations)
  - [ ] Adjust CSP for analytics scripts
  - [ ] Verify all features work

- [ ] **Task 4.1:** Set Up Error Tracking
  - [ ] Install Sentry
  - [ ] Run Sentry wizard
  - [ ] Configure environment variables
  - [ ] Update logger to use Sentry
  - [ ] Test error tracking

- [ ] **Task 5.1:** Environment Variable Validation
  - [ ] Create `src/lib/env-validation.ts`
  - [ ] Add validation to app entry point
  - [ ] Test validation works

- [ ] **Task 5.2:** Comprehensive Testing
  - [ ] Test contact form
  - [ ] Test email sending
  - [ ] Test rate limiting
  - [ ] Test error handling
  - [ ] Test security headers
  - [ ] Test CSP
  - [ ] Run `npm run build`
  - [ ] Test production build

---

## 📋 Environment Variables Checklist

Create `.env.local` with:

```env
# Email Service (Choose one)
SENDGRID_API_KEY=your_key_here
# OR
RESEND_API_KEY=your_key_here
# OR
AWS_SES_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

# Email Configuration
CONTACT_EMAIL=contact@arkcare.local
FROM_EMAIL=noreply@arkcare.local

# Rate Limiting (If using Upstash)
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token

# Error Tracking (Sentry)
SENTRY_DSN=your_dsn
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_token

# Analytics (Existing)
NEXT_PUBLIC_GA_TRACKING_ID=your_id
NEXT_PUBLIC_GTM_ID=your_id
NEXT_PUBLIC_FB_PIXEL_ID=your_id
```

---

## 🚀 Quick Start Commands

```bash
# 1. Install all dependencies
npm install @sendgrid/mail @upstash/ratelimit @upstash/redis @sentry/nextjs

# 2. Run Sentry setup
npx @sentry/wizard@latest -i nextjs

# 3. Fix dependencies
npm audit fix

# 4. Test build
npm run build

# 5. Test development
npm run dev
```

---

## ✅ Pre-Deployment Checklist

- [ ] All critical tasks completed
- [ ] All high priority tasks completed
- [ ] Environment variables configured
- [ ] Email sending tested
- [ ] Rate limiting tested
- [ ] Security headers verified
- [ ] CSP tested and working
- [ ] Error tracking configured
- [ ] Build succeeds
- [ ] No console errors
- [ ] No security vulnerabilities (`npm audit`)

---

**See `IMPLEMENTATION_PLAN.md` for detailed step-by-step instructions.**

