# Contact Form & Email Notifications

The site uses **Web3Forms** (web3forms.com) to send form submissions to your email. No backend or server is required.

---

## How it works

1. **Contact form** (Contact page): First name, last name, email, phone, reason, message, privacy consent → you get an email for each submission.
2. **Tour request forms** (Home and About Us): Name, phone, interested in, message → you get an email for each submission.

Submissions are sent to Web3Forms’ API. Web3Forms emails you and the page shows a success (or error) message without redirecting. The sender’s **Email** field is used as the reply-to address for the contact form.

---

## Setup (one-time)

### 1. Create a Web3Forms access key

1. Go to [web3forms.com](https://web3forms.com) and enter your email.
2. Click **Create Access Key**. You’ll receive an **access key** (a UUID) by email.
3. You can use **one access key** for both forms. Emails will have different subjects so you can tell them apart.

### 2. Put your access key in the site

Replace the placeholder in the HTML with your real Web3Forms access key.

**In all three places:**

- **Contact form** (`contact/index.html`): Find `value="YOUR_WEB3FORMS_ACCESS_KEY"` in the hidden `access_key` input and replace it.
- **Tour form** (`index.html` and `about-us/index.html`): Same – find `value="YOUR_WEB3FORMS_ACCESS_KEY"` in the tour form’s hidden `access_key` input and replace it in both files.

Use the same key in all three, or create a second key at Web3Forms and use one for contact and one for tour if you prefer.

After that, submissions will be sent to Web3Forms and you’ll get email notifications.

---

## What you receive by email

- **Contact form:** Subject “Hebron Care – New contact form submission”. Body includes: First Name, Last Name, Email, Phone, Reason for inquiry, Message. Reply-To is set to the sender’s email (Web3Forms uses the `Email` field).
- **Tour form:** Subject “Hebron Care – Tour request”. Body includes: Name, Phone, Interested In, Message.

You can change the subject line by editing the hidden input `name="subject"` in each form.

---

## Optional: two access keys

If you want separate keys for contact vs tour:

1. Create two access keys at Web3Forms (use your email twice; you’ll get two keys).
2. In `contact/index.html`, set the contact form’s `access_key` to one key.
3. In `index.html` and `about-us/index.html`, set the tour form’s `access_key` to the other key.

---

## Verify form & phone behavior

Before going live, confirm on **real devices** (phone and desktop):

1. **Form submissions reach the right inbox**
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `contact/index.html`, `index.html`, and `about-us/index.html` with your real Web3Forms access key (see Setup above).
   - Submit a test from the **Contact** page and from the **Request a Tour** form (Home or About). Check that your email receives each submission and that replies go to the sender when you hit “Reply” on the contact form.
   - Check spam/junk if you don’t see the first test.

2. **“Call Us” and “Schedule Tour” work**
   - On a **real phone**: Tap “Call Us Today,” “Schedule Tour,” and the sticky **Call** button on mobile. All should open the dialer with **(425) 374-7954** (and the provider number where shown).
   - On **desktop**: Click the same links; they should open the default phone app or prompt to choose one.

3. **Quick checklist**
   - [ ] Access key replaced in `contact/index.html`, `index.html`, and `about-us/index.html`
   - [ ] Test Contact form submission received in correct inbox
   - [ ] Test Tour form submission received in correct inbox
   - [ ] Call links tested on at least one real phone
   - [ ] Mobile sticky “Call” button tested on a real device

---

## Troubleshooting

- **No email received:** Confirm the access key is correct and that you verified your email with Web3Forms. Check spam. Check the Web3Forms dashboard for submission logs.
- **“Something went wrong” on submit:** Confirm the access key is correct. Check the browser Network tab for the request to `api.web3forms.com/submit` and the response body for an error message.
- **Bot check:** The forms include a hidden `botcheck` field; Web3Forms can use it for basic spam protection. If you enable hCaptcha later, you may need to add their script (see Web3Forms docs).

---

## Web3Forms free tier

- Free plan includes a generous number of submissions; see [web3forms.com](https://web3forms.com) for current limits.
- For more submissions or features (e.g. file uploads, webhooks), upgrade on Web3Forms or use another form backend and point the form and script to that endpoint.
