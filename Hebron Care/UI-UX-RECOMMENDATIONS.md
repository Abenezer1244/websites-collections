# Hebron Care — UI/UX Recommendations (Web & Mobile)

Quick audit and improvement ideas for the adult family home site, from a frontend/UI-UX perspective.

---

## What’s Working Well

- **Clear value proposition** — “Exceptional care for your loved ones” with trust badges (Licensed, 24/7, Experienced Staff).
- **Strong CTAs** — “Schedule a Tour” and phone number are visible in the hero and nav.
- **Trust and proof** — Testimonials with family attribution, FAQ, and “Accepting New Residents” badge.
- **Accessibility** — Focus styles, landmarks, `aria-label`s, and a testimonial live region.
- **Responsive layout** — Mobile menu, stacked hero on small screens, touch-friendly tap targets (e.g. 44px+).
- **Consistent branding** — Playfair Display + Inter, emerald palette, calm tone.

---

## Implemented: Sticky CTA Bar

A **sticky CTA bar** now appears once the user scrolls past the hero (homepage only). It includes:

- **Schedule a Tour** (primary button)
- **(425) 225-5424** (call link)

**Why it helps:** Families often scroll through testimonials, FAQ, and expertise before deciding. Keeping “Schedule a Tour” and the phone number always one tap away (without covering the main nav) improves conversions on both **web** and **mobile**.

---

## Further Suggestions (all implemented)

### Web

1. **Phone in desktop nav** ✅ Implemented on all pages.  
   Show the number next to “Schedule a Tour” (e.g. “(425) 225-5424” as a text or icon link) so call-to-action is visible without scrolling.

2. **Location / “Serving Everett”**  
   Add a short line under the hero trust row, e.g. “Licensed in Washington · Serving Everett & Snohomish County,” to reinforce local trust and SEO.

3. **Footer CTA**  
   Add a small “Schedule a Tour” or “Request a Tour” link/button in the footer so the last thing users see before leaving is an action.

4. **Readability (older visitors)**  
   Consider a slightly larger base font (e.g. 17–18px on desktop) or an optional “Larger text” control for body copy, since many decision-makers are 50+.

### Mobile

1. **Sticky CTA (done)**  
   Already added; keeps primary actions available while scrolling.

2. **Tap-to-call prominence**  
   The hero phone link is already a `tel:` link; ensure it’s clearly tappable (current min-height and padding support this).

3. **Mobile menu CTA**  
   The “Schedule a Tour” button in the mobile drawer is good; keep it as the single primary action so it’s easy to find.

4. **Testimonial carousel**  
   On small screens, consider slightly larger tap targets for prev/next, or optional swipe hint (e.g. “Swipe for more”) on first view.

5. **Contact form (contact page)**  
   Use `inputmode="tel"` and `inputmode="email"` where appropriate, and ensure labels and errors are clearly visible on small screens.

### General

- **Performance** — Replace Tailwind CDN with a built CSS file for production to avoid the console warning and improve load time.
- **Analytics / behavior** — Track CTA clicks (Schedule a Tour, phone, email) to see which actions families take most.

---

## Summary

The site already feels calm, trustworthy, and action-oriented. The new **sticky CTA bar** improves conversion by keeping “Schedule a Tour” and the phone number visible after the hero. The items above are incremental improvements you can adopt over time for web and mobile.
