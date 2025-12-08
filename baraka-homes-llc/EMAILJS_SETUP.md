# EmailJS Setup Instructions for Contact Form

The contact form on your website uses EmailJS to send email notifications. Follow these steps to configure it:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Inquiry from Baraka Homes Website
```

**Content:**
```
New inquiry received from Baraka Homes website contact form.

Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phone}}
Inquiry Type: {{inquiryType}}

Message:
{{message}}

---
This email was sent from the Baraka Homes LLC contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update the Code

Open `contact.html` and replace these placeholders:

1. **Line ~28** - Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key:
   ```javascript
   emailjs.init("your_actual_public_key_here");
   ```

2. **Line ~520** - Replace `YOUR_SERVICE_ID` with your Service ID:
   ```javascript
   emailjs.send('your_service_id_here', 'YOUR_TEMPLATE_ID', formData)
   ```

3. **Line ~520** - Replace `YOUR_TEMPLATE_ID` with your Template ID:
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'your_template_id_here', formData)
   ```

4. **Optional** - Update the recipient email address (line ~505):
   ```javascript
   to_email: 'your-email@barakahomes.com'
   ```

## Step 6: Test the Form

1. Save all changes
2. Open your website's contact page
3. Fill out and submit the test form
4. Check your email inbox for the notification

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Email not received**: Verify Service ID and Template ID are correct
- **Template variables not working**: Ensure template variable names match ({{firstName}}, {{lastName}}, etc.)

## Alternative: Use Formspree

If you prefer not to use EmailJS, you can use Formspree instead:

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Get your form endpoint
3. Change the form action in `contact.html`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

For more help, visit [EmailJS Documentation](https://www.emailjs.com/docs/)

