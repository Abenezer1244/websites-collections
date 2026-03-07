# Contact Form – Email Notifications (Formspree)

The contact form is set up to send submissions to your email using **Formspree** (no server required).

## One-time setup

1. **Create a Formspree account**  
   Go to [formspree.io](https://formspree.io) and sign up (free tier is enough).

2. **Create a new form**  
   - Click **New Form**  
   - Set the form name (e.g. "Hebron Care Contact")  
   - Set **Email to receive submissions** to: `hebroncareafhllc@gmail.com`  
   - Copy the form endpoint (e.g. `https://formspree.io/f/xyzabcde`).

3. **Update the contact page**  
   In `contact.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
   Replace `YOUR_FORMSPREE_ID` with the ID from your Formspree form URL (the part after `/f/`).

   Example: if your endpoint is `https://formspree.io/f/mjvnoqka`, use:
   ```html
   action="https://formspree.io/f/mjvnoqka"
   ```

## What you get

- **Email on every submission** to the address you set in Formspree.  
- **Reply-To** set to the visitor’s email so you can reply directly.  
- **Subject line**: “Hebron Care – New contact form submission”.  
- **Email body** includes: First Name, Last Name, Email, Phone (if provided), Message, Consent.

## After submit

- The visitor is redirected back to the contact page with a “Message Sent” confirmation.  
- Submit button shows “Sending…” while the request is in progress.

## Optional (Formspree dashboard)

- Turn on **reCAPTCHA** or **Honeypot** to reduce spam.  
- Add **Auto-responder** so visitors get an automatic “We received your message” email.
