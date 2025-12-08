# Contact Form Email Setup Guide

The contact form is now configured to send email notifications using EmailJS. Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. **Copy your Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
New contact form submission from Auburn Senior Care LLC website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Submitted: {{timestamp}}

Message:
{{message}}

---
This email was sent from the contact form on auburnseniorcare.com
```

4. **Copy your Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Update the Contact Form

Open `contact-us.html` and replace these placeholders:

1. **Line ~89:** Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```

2. **Line ~540:** Replace `YOUR_SERVICE_ID` with your Service ID
   ```javascript
   'YOUR_SERVICE_ID',
   ```

3. **Line ~541:** Replace `YOUR_TEMPLATE_ID` with your Template ID
   ```javascript
   'YOUR_TEMPLATE_ID',
   ```

4. **Line ~545:** Update the receiving email address if needed
   ```javascript
   to_email: 'hello@auburnseniorcare.com',
   ```

## Step 6: Test the Form

1. Open `contact-us.html` in a browser
2. Fill out the form with test data
3. Submit the form
4. Check your email inbox for the notification

## Alternative: Using Formspree (No JavaScript Setup)

If you prefer not to use EmailJS, you can use Formspree instead:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Get your form endpoint URL
5. Update the form in `contact-us.html`:

Replace the form opening tag:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="relative z-10 space-y-4 md:space-y-5" novalidate>
```

And remove the EmailJS JavaScript code, replacing it with a simple success redirect or message.

## Features Included

✅ **Form Validation**
- Required field validation
- Email format validation
- Phone number validation (if provided)
- Minimum message length validation
- Real-time error messages

✅ **User Experience**
- Loading states during submission
- Success message with confirmation
- Error messages with helpful guidance
- Accessible form labels and ARIA attributes
- Mobile-responsive design

✅ **Email Notifications**
- Sends formatted email with all form data
- Includes timestamp
- Professional email template

## Troubleshooting

**Form not sending emails?**
- Check browser console for JavaScript errors
- Verify all EmailJS IDs are correctly entered
- Ensure EmailJS service is connected and active
- Check EmailJS dashboard for error logs

**Emails going to spam?**
- Add your domain to EmailJS allowed domains
- Verify your email service connection
- Check spam folder

**Need more emails?**
- EmailJS free tier: 200 emails/month
- Upgrade plans available on EmailJS website
- Or switch to Formspree (50 submissions/month free)

## Support

For EmailJS support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
For Formspree support: [https://help.formspree.io/](https://help.formspree.io/)

