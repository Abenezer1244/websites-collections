# Contact Form Email Setup Instructions

The contact form is now configured to send email notifications. You have two options for implementation:

## Option 1: EmailJS (Recommended - Free)

EmailJS is a free service that allows you to send emails directly from your website without a backend server.

### Setup Steps:

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Add Email Service**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID** (e.g., `service_abc123`)

3. **Create Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     Subject: New Contact Form Submission from {{from_name}}
     
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}
     Interest: {{interest}}
     
     Message:
     {{message}}
     
     ---
     Reply to: {{reply_to}}
     ```
   - Copy your **Template ID** (e.g., `template_xyz789`)

4. **Get Your Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key** (e.g., `abcdefghijklmnop`)

5. **Update the Contact Form**
   - Open `contact-us.html`
   - Find line with `emailjs.init("YOUR_PUBLIC_KEY")`
   - Replace `YOUR_PUBLIC_KEY` with your actual Public Key
   - Find line with `'YOUR_SERVICE_ID'`
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Find line with `'YOUR_TEMPLATE_ID'`
   - Replace `YOUR_TEMPLATE_ID` with your Template ID

### Example:
```javascript
emailjs.init("abcdefghijklmnop"); // Your Public Key
// ...
await emailjs.send(
    'service_abc123',      // Your Service ID
    'template_xyz789',    // Your Template ID
    // ...
);
```

---

## Option 2: Formspree (Alternative - Free)

Formspree is another free service that handles form submissions.

### Setup Steps:

1. **Create a Formspree Account**
   - Go to https://formspree.io/
   - Sign up for a free account (50 submissions/month)

2. **Create a New Form**
   - Click "New Form"
   - Name it (e.g., "Bonbica Contact Form")
   - Copy your **Form ID** (e.g., `xqwerty123`)

3. **Update the Contact Form**
   - Open `contact-us.html`
   - Find the commented Formspree code at the bottom of the script
   - Uncomment the Formspree implementation
   - Comment out the EmailJS implementation
   - Replace `YOUR_FORM_ID` with your actual Form ID

### Example:
```javascript
const response = await fetch('https://formspree.io/f/xqwerty123', {
    // ...
});
```

---

## Option 3: Custom Backend (Advanced)

If you have a backend server, you can:
1. Create an API endpoint to handle form submissions
2. Use a service like SendGrid, Mailgun, or AWS SES
3. Update the form action to point to your endpoint

---

## Testing

After setup:
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the notification
4. Verify all form fields are included in the email

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Email not received**: Verify your EmailJS/Formspree configuration
- **Spam folder**: Check your spam/junk folder
- **Rate limits**: Free plans have monthly limits

## Security Notes

- The current implementation includes basic client-side validation
- For production, consider adding:
  - reCAPTCHA to prevent spam
  - Rate limiting
  - Server-side validation
  - HTTPS (required for EmailJS)

---

**Current Configuration**: EmailJS is active by default. Follow Option 1 to complete setup.

