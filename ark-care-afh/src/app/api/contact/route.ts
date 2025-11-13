import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact Form API Route
 * 
 * This endpoint handles contact form submissions.
 * 
 * To integrate with an email service:
 * 1. Install your preferred email service package (e.g., @sendgrid/mail, nodemailer)
 * 2. Add your API keys to environment variables
 * 3. Uncomment and modify the email sending code below
 * 
 * Environment variables needed:
 * - SENDGRID_API_KEY (if using SendGrid)
 * - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (if using SMTP)
 * - CONTACT_EMAIL (recipient email address)
 */

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // TODO: Add email sending logic here
    // Example with SendGrid:
    /*
    import sgMail from '@sendgrid/mail'
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    
    const msg = {
      to: process.env.CONTACT_EMAIL || 'contact@arkcare.local',
      from: process.env.FROM_EMAIL || 'noreply@arkcare.local',
      subject: `Contact Form: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    }
    
    await sgMail.send(msg)
    */

    // For now, log the submission (remove in production)
    console.log('Contact form submission:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    // In production, this should only return success after email is sent
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. We will get back to you soon.',
    })
  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    )
  }
}

