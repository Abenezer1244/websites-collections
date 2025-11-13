# Ark Care AFH - Task List

## Current Status
Website is functional with all major pages implemented. Below are tasks to complete or improve.

---

## Tasks

### 1. Contact Page Improvements
- [x] Replace "Coming soon" placeholders with actual contact information
  - [x] Update phone number display (use: (206) 455-3644)
  - [x] Update address display (use: 127 4th Ave N, Algona, WA 98001)
  - [x] Update business hours information
- [ ] Integrate contact form with backend/email service
  - [ ] Set up form submission handler (email service or API endpoint)
  - [ ] Add form validation and error handling
  - [ ] Add success/error feedback messages

### 2. Gallery Page
- [ ] Replace placeholder images with actual photos
  - [ ] Add photos for each activity category (12 categories total)
  - [ ] Implement image optimization
  - [ ] Add image lightbox/modal for viewing larger images

### 3. About Page - Team Section
- [ ] Replace avatar placeholders with actual team member photos
  - [ ] Add photos for all 6 team members
  - [ ] Ensure photos are optimized and properly sized

### 4. SEO & Content
- [ ] Update site URL from `arkcare.local` to production domain
  - [ ] Update `src/lib/seo.ts` with production URL
  - [ ] Update Open Graph images URL
  - [ ] Update sitemap.xml with production URL
- [ ] Verify all meta descriptions and keywords are optimized
- [ ] Add alt text to all images

### 5. Functionality Enhancements
- [ ] Add loading states for form submissions
- [ ] Add error boundaries for better error handling
- [ ] Implement analytics tracking (if needed)
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)

### 6. Testing & Quality Assurance
- [ ] Test all forms and interactions
- [ ] Verify responsive design on all devices
- [ ] Test dark mode functionality
- [ ] Cross-browser testing
- [ ] Performance optimization check

### 7. Content Review
- [ ] Review all text content for accuracy
- [ ] Verify all contact information is correct and consistent
- [ ] Check for typos and grammar errors
- [ ] Ensure all links work correctly

---

## Review Section

### Completed Tasks

#### Contact Page Improvements (Task 1.1)
**Date:** Current session
**Changes Made:**
- Replaced "Coming soon" placeholders in ContactPageClient.tsx with actual contact information
- Imported `businessInfo` from `@/lib/seo` to maintain consistency across the site
- Updated phone number to display as clickable link: (206) 455-3644
- Updated address to display full formatted address: 127 4th Ave N, Algona, WA 98001
- Updated hours section to show "Available 24/7" with helpful message
- All contact information now matches the Footer component for consistency

**Files Modified:**
- `src/app/contact/ContactPageClient.tsx`

**Notes:**
- Contact information is now dynamically pulled from the SEO config file, ensuring single source of truth
- Phone number is formatted consistently with Footer component
- Address uses proper line breaks for better readability

