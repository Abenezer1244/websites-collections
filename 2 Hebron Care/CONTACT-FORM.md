# Contact Form & Email Notifications

The site uses **Formspree** to send form submissions to your email. No backend or server is required.

---

## How it works

1. **Contact form** (Contact page): First name, last name, email, phone, message, privacy consent → you get an email for each submission.
2. **Tour request forms** (Home and About Us): Name, phone, interest, message → you get an email for each submission.

Submissions are sent via Formspree’s endpoint. Formspree emails you and can show a success (or error) message on the page without redirecting.

---

## Setup (one-time)

### 1. Create a Formspree account

1. Go to [formspree.io](https://formspree.io) and sign up (free tier is enough to start).
2. Create **two forms** in the Formspree dashboard:
   - One for **Contact** (e.g. “Hebron Care – Contact”).
   - One for **Tour requests** (e.g. “Hebron Care – Tour”).
3. For each form, copy the **form ID** from the form’s endpoint, e.g.  
   `https://formspree.io/f/abcxyz` → the ID is `abcxyz`.

### 2. Put your form IDs in the site

Replace the placeholders in the HTML with your real Formspree form IDs.

**Contact form (Contact page – `contact.html`):**

- Find: `action="https://formspree.io/f/YOUR_FORMSPREE_CONTACT_ID"`
- Replace `YOUR_FORMSPREE_CONTACT_ID` with the ID of your **Contact** form.

**Tour form (Home and About Us – `index.html` and `about-us.html`):**

- Find: `action="https://formspree.io/f/YOUR_FORMSPREE_TOUR_ID"`
- Replace `YOUR_FORMSPREE_TOUR_ID` with the ID of your **Tour** form (same ID in both files).

After that, submissions will be sent to Formspree and you’ll get email notifications.

---

## What you receive by email

- **Contact form:** Subject “Hebron Care – New contact form submission”. Body includes: First Name, Last Name, Email, Phone, Message. Reply-To is set to the sender’s email.
- **Tour form:** Subject “Hebron Care – Tour request”. Body includes: Name, Phone, Interested In, Message.

You can change the subject line by editing the hidden input `name="_subject"` in each form.

---

## Optional: one form for everything

If you prefer a single Formspree form for both contact and tour:

1. Use one form in the Formspree dashboard.
2. Use that form’s ID in both:
   - `contact.html` (contact form `action`)
   - `index.html` and `about-us.html` (tour form `action`).

The `_subject` value in each form still differentiates “New contact form submission” vs “Tour request” in your inbox.

---

## Troubleshooting

- **No email received:** Check Formspree dashboard for the form and confirm the form ID in the site matches. Check spam.
- **“Something went wrong” on submit:** Confirm the form ID is correct and that the form is active in Formspree. Check the browser Network tab for the request to `formspree.io`.
- **Redirect instead of success message:** The script uses Formspree’s JSON API. Ensure you’re not overriding the form with a redirect in Formspree settings if you want the inline success message.

---

## Formspree free tier

- 50 submissions per month on the free plan.
- For more, upgrade on [formspree.io](https://formspree.io) or use another form backend and point the form `action` (and script) to that endpoint.
