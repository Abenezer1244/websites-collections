# Contact Form Email Setup Guide

The contact form is now configured to send email notifications using EmailJS. Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Submission: {{topic}}

Hello,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Topic: {{topic}}

Message:
{{message}}

---
This email was sent from the Ark Care contact form.
Reply to: {{reply_to}}
```

4. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key**
3. **Copy your Public Key**

## Step 5: Update contact-us.html

Open `contact-us.html` and replace these placeholders:

1. **Line ~625**: Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
2. **Line ~650**: Replace `YOUR_SERVICE_ID` with your EmailJS Service ID
3. **Line ~651**: Replace `YOUR_TEMPLATE_ID` with your EmailJS Template ID

Example:
```javascript
emailjs.init("user_abc123xyz"); // Your Public Key

emailjs.send(
  'service_abc123',  // Your Service ID
  'template_xyz789', // Your Template ID
  { ... }
);
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the notification
4. Verify all form fields are included in the email

## Alternative: Use Formspree

If you prefer not to use EmailJS, you can use Formspree instead:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a form
3. Get your form endpoint URL
4. Replace the EmailJS code with a simple fetch request:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Emails not received**: Verify EmailJS service is connected correctly
- **Template variables not working**: Make sure variable names match exactly (case-sensitive)

## Security Note

The EmailJS Public Key is safe to expose in client-side code. However, for production, consider:
- Adding rate limiting
- Implementing CAPTCHA to prevent spam
- Using server-side validation for sensitive data

