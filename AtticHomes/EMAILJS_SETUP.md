# EmailJS Setup Guide for Contact Form

This guide will help you set up email notifications for the contact form using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin/integration)
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/template)
2. Click "Create New Template"
3. Use the following template:

**Subject:**
```
New Contact Form Submission - {{interest}}
```

**Content:**
```
New contact form submission from Attic AFH website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Interest: {{interest}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to [Account > General](https://dashboard.emailjs.com/admin/account/general)
2. Find your "Public Key"
3. **Copy your Public Key** (you'll need this)

## Step 5: Update contact-us.html

Open `contact-us.html` and replace the following placeholders:

1. **Line ~538**: Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY"); // Replace this
   ```

2. **Line ~600**: Replace `YOUR_SERVICE_ID` with your EmailJS Service ID
   ```javascript
   'YOUR_SERVICE_ID',  // Replace this
   ```

3. **Line ~601**: Replace `YOUR_TEMPLATE_ID` with your EmailJS Template ID
   ```javascript
   'YOUR_TEMPLATE_ID', // Replace this
   ```

4. **Line ~580**: Update the receiving email if needed
   ```javascript
   to_email: 'care@atticafh.com', // Change if needed
   ```

## Step 6: Test the Form

1. Open `contact-us.html` in your browser
2. Fill out the contact form
3. Submit the form
4. Check your email inbox for the notification

## Troubleshooting

### Form not sending emails?
- Check browser console for errors (F12)
- Verify all IDs are correctly replaced
- Ensure EmailJS service is connected
- Check email spam folder

### Getting CORS errors?
- Make sure you're testing on a web server (not file://)
- Use a local server like `python -m http.server` or Live Server in VS Code

### Need more emails?
- Free plan: 200 emails/month
- Paid plans start at $15/month for 1,000 emails

## Alternative: Using Formspree

If you prefer not to use EmailJS, you can use Formspree instead:

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form
3. Get your form endpoint
4. Update the form action in `contact-us.html`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Support

For EmailJS support, visit: https://www.emailjs.com/docs/

