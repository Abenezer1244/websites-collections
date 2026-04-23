# Google Business Profile Setup Guide - Hebron Care AFH #2

**Go to:** https://business.google.com/create

---

## Step 1: Business Name

```
Hebron Care Adult Family Home #2
```

## Step 2: Business Category

**Primary category:**
```
Assisted living facility
```

**Additional categories (add all that apply):**
```
Elder care service
Home health care service
Memory care facility
Respite care service
```

## Step 3: Location

```
2421 81st Pl SE
Everett, WA 98203
United States
```

- "Do you serve customers at this business address?" -> **Yes**
- "Do you also serve customers outside this location?" -> **No** (not a service-area business)

## Step 4: Contact Info

**Phone:**
```
(425) 374-7954
```

**Website:**
```
https://hebroncareafh2.com
```

## Step 5: Business Hours

| Day | Hours |
|-----|-------|
| Monday | 9:00 AM - 5:00 PM |
| Tuesday | 9:00 AM - 5:00 PM |
| Wednesday | 9:00 AM - 5:00 PM |
| Thursday | 9:00 AM - 5:00 PM |
| Friday | 9:00 AM - 5:00 PM |
| Saturday | Closed |
| Sunday | Closed |

**Note:** These are office/tour hours. Add "More hours" > "Care hours" > 24/7 if Google allows it.

## Step 6: Business Description (750 characters max)

```
Hebron Care Adult Family Home #2 is a licensed adult family home in Everett, WA providing 24/7 personalized care for up to six residents. We offer memory care, daily living assistance (bathing, dressing, meals, mobility), medication management, respite care, and round-the-clock monitoring. Our small home setting means every resident is known by name, not a room number. Licensed by Washington State DSHS and serving Everett families since 2016. We believe aging should feel like living. Schedule a tour to see the difference a real home makes.
```

## Step 7: Services to Add

Add each of these as a service in your GBP listing:

**Memory Care**
```
Specialized support for residents with Alzheimer's, dementia, or cognitive changes. Routine, familiarity, and gentle structure in a safe home environment. Includes wandering prevention, fall-risk monitoring, and cognitive engagement activities.
```

**Daily Living Assistance (ADL Support)**
```
Help with bathing, dressing, grooming, toileting, eating, and mobility. Handled with respect and patience. Personalized to each resident's abilities and preferences.
```

**Medication Management**
```
Trained staff administer all scheduled and PRN medications. Daily medication administration records maintained. Coordination with physicians and pharmacies. Side-effect monitoring included.
```

**Respite Care**
```
Short-term stays (days, weeks, or a month) for families who need a break. Every respite resident receives the same level of care as long-term residents. Flexible scheduling available.
```

**24/7 Care & Monitoring**
```
Staff on-site around the clock, including overnight and holidays. Continuous wellness checks, emergency response, and attentive supervision every day of the year.
```

**Holistic Wellness**
```
Whole-person care including home-cooked meals, garden walks, music, social activities, and spiritual support. We focus on what makes life worth living, not just medical needs.
```

## Step 8: Attributes to Enable

Check these in the "More" section of your GBP:

- [x] Wheelchair accessible
- [x] Identifies as women-owned (if applicable)
- [x] Appointment required (for tours)
- [x] Online appointments (contact form on website)

## Step 9: Photos to Upload

Upload these from your gallery (minimum 10 photos recommended):

**Categories to cover:**
1. **Exterior** - Front of home, entrance, yard
2. **Interior** - Living room, common areas
3. **Bedrooms** - Resident rooms
4. **Dining** - Dining area, kitchen, meals
5. **Outdoor** - Garden, patio, yard
6. **Team** - Caregivers (if available)
7. **Logo** - Business logo

**Your image files are in:**
```
hebron-redesign/public/images/
```

Upload the best 10-15 from your gallery page.

## Step 10: Verification

Google will verify your business via one of these methods:
1. **Postcard** - mailed to 2421 81st Pl SE, Everett, WA 98203 (takes 5-14 days)
2. **Phone** - automated call to (425) 374-7954
3. **Video** - record a short video showing the business location

**Postcard is most common for new listings.** Once verified, your listing goes live.

---

## After Verification: Link GBP to Website Schema

Once you have your GBP URL (format: `https://www.google.com/maps/place/...`), update the JSON-LD schema in `app/layout.tsx` to add:

```ts
sameAs: [
  "https://www.google.com/maps/place/YOUR_ACTUAL_GBP_URL"
],
```

This connects your website's structured data to your Google Business Profile.

---

## Post-Setup Checklist

- [ ] Created GBP listing with all info above
- [ ] Uploaded 10+ photos
- [ ] Verification method selected
- [ ] Verification completed
- [ ] GBP URL added to website schema (`sameAs` in layout.tsx)
- [ ] First Google post published (e.g., "Schedule a free tour")
- [ ] Asked 2-3 existing families to leave reviews
- [ ] Set up Google Business messaging (optional)
