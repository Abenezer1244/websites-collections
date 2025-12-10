# Contact Form Email Setup Guide

The contact form is now fully functional with validation and email notifications. You have two options for receiving emails:

## Option 1: Formspree (Recommended - Easiest Setup)

Formspree is the simplest option and requires no backend setup.

### Setup Steps:

1. **Sign up for Formspree**
   - Go to https://formspree.io/
   - Create a free account (50 submissions/month free)

2. **Create a Form**
   - Click "New Form" in your dashboard
   - Give it a name (e.g., "Peaceful End AFH Contact Form")
   - Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update the Contact Form**
   - Open `contact-us.html`
   - Find the form tag (around line 232)
   - Replace `YOUR_FORM_ID` in the form action:
     ```html
     <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```

4. **Configure Email Notifications**
   - In Formspree dashboard, go to Settings → Notifications
   - Add your email: `hello@peacefulendafh.com`
   - Customize the email template if desired

5. **Test the Form**
   - Submit a test message
   - Check your email inbox

**That's it!** Formspree will automatically send you emails when someone submits the form.

---

## Option 2: EmailJS (More Control)

EmailJS gives you more control over email templates and formatting.

### Setup Steps:

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account (200 emails/month free)

2. **Add Email Service**
   - Go to "Email Services" in dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the connection steps
   - Copy your Service ID

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:
     ```
     Subject: New Contact Form: {{topic}}
     
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}
     Topic: {{topic}}
     
     Message:
     {{message}}
     
     Submitted: {{timestamp}}
     ```
   - Copy your Template ID

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your Public Key

5. **Update contact-us.html**
   - Uncomment the EmailJS script (around line 476):
     ```html
     <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
     ```
   
   - Uncomment and update the initialization (around line 481):
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     ```
   
   - Update the email sending code (around line 614):
     - Uncomment the EmailJS code block
     - Comment out the Formspree code block
     - Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`

6. **Test the Form**
   - Submit a test message
   - Check your email inbox

---

## Form Features

✅ **Client-side validation**
- Name must be at least 2 characters
- Valid email format required
- Message must be at least 10 characters
- Topic selection required

✅ **User feedback**
- Real-time error messages
- Success/error notifications
- Loading states during submission
- Form resets after successful submission

✅ **Accessibility**
- Required field indicators (*)
- Clear error messages
- Touch-friendly buttons (44px minimum)
- Keyboard navigation support

---

## Troubleshooting

### Form not sending emails?
1. Check browser console for errors (F12)
2. Verify your Formspree/EmailJS credentials are correct
3. Check spam folder
4. Verify email service is active in dashboard

### Validation errors?
- Make sure all required fields are filled
- Check email format is correct
- Ensure message is at least 10 characters

### Need help?
- Formspree: https://help.formspree.io/
- EmailJS: https://www.emailjs.com/docs/

---

## Current Configuration

The form is currently set up to use **Formspree** by default. To switch to EmailJS, follow Option 2 above and update the code accordingly.

