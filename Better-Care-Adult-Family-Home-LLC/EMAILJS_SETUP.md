# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email notifications from the contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create an Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the setup instructions for your provider
6. **Note your Service ID** (you'll need this later)

### For Gmail:
- You'll need to generate an App Password
- Go to your Google Account → Security → 2-Step Verification → App Passwords
- Create an app password for "Mail"
- Use this password in EmailJS setup

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from Better Care Website

**Content:**
```
New contact form submission from Better Care Adult Family Home website.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Interests: {{interests}}

Message:
{{message}}

---
This email was sent from the Better Care Adult Family Home contact form.
Reply to: {{reply_to}}
```

4. **Note your Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the left sidebar
2. Find your **Public Key**
3. Copy this key (you'll need it in the next step)

## Step 5: Update the Contact Form Code

Open `contact-us.html` and replace the following placeholders:

1. **Replace `YOUR_PUBLIC_KEY`** (around line 340):
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
   Replace with your actual Public Key from Step 4.

2. **Replace `YOUR_SERVICE_ID`** (around line 450):
   ```javascript
   'YOUR_SERVICE_ID',    // Replace with your EmailJS Service ID
   ```
   Replace with your Service ID from Step 2.

3. **Replace `YOUR_TEMPLATE_ID`** (around line 451):
   ```javascript
   'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
   ```
   Replace with your Template ID from Step 3.

4. **Update the recipient email** (around line 435):
   ```javascript
   to_email: 'info@bettercareafh.com', // Your email address
   ```
   Replace with the email address where you want to receive notifications.

## Step 6: Test the Form

1. Open `contact-us.html` in your browser
2. Fill out the contact form
3. Submit the form
4. Check your email inbox for the notification

## Troubleshooting

### Form not sending emails?
- Check browser console for errors (F12 → Console)
- Verify all three IDs are correctly replaced (Public Key, Service ID, Template ID)
- Ensure your email service is properly connected in EmailJS
- Check that your email template uses the correct variable names

### Getting "Invalid Public Key" error?
- Make sure you copied the entire Public Key
- Check that there are no extra spaces or characters

### Emails not arriving?
- Check your spam/junk folder
- Verify the recipient email address is correct
- Check EmailJS dashboard → Logs for delivery status
- Ensure your email service connection is active

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For higher limits, consider upgrading to a paid plan.

## Security Note

The Public Key is safe to expose in client-side code. However, for production:
- Consider rate limiting
- Add reCAPTCHA to prevent spam
- Monitor your EmailJS usage

## Alternative: Using a Backend Service

If you prefer not to use EmailJS, you can:
1. Set up a backend API endpoint (Node.js, PHP, Python, etc.)
2. Update the form submission handler to POST to your endpoint
3. Send emails from your server using Nodemailer, PHPMailer, or similar

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

