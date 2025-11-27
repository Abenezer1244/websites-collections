import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'
import sgMail from '@sendgrid/mail'
import { checkRateLimit } from '@/lib/rate-limit'

/**
 * Contact Form API Route
 * 
 * This endpoint handles contact form submissions and sends emails via SendGrid.
 * 
 * Environment variables required:
 * - SENDGRID_API_KEY: Your SendGrid API key
 * - CONTACT_EMAIL: Recipient email address (defaults to contact@arkcare.local)
 * - FROM_EMAIL: Sender email address (must be verified in SendGrid)
 */

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const rateLimitResult = await checkRateLimit(request)

    if (rateLimitResult.rateLimited) {
      const retryAfter = Math.ceil(
        (rateLimitResult.reset - Date.now()) / 1000
      )
      logger.warn('Rate limit exceeded:', {
        identifier:
          request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
          request.headers.get('x-real-ip') ??
          'unknown',
        limit: rateLimitResult.limit,
        reset: new Date(rateLimitResult.reset).toISOString(),
      })

      return NextResponse.json(
        {
          success: false,
          message:
            'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': retryAfter.toString(),
          },
        }
      )
    }

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

    // Send email via SendGrid
    const sendEmail = async () => {
      // Check if SendGrid is configured
      if (!process.env.SENDGRID_API_KEY) {
        logger.warn('SendGrid API key not configured. Email will not be sent.')
        // In development, allow form submission without email
        if (process.env.NODE_ENV === 'production') {
          throw new Error('Email service not configured')
        }
        return
      }

      const msg = {
        to: process.env.CONTACT_EMAIL || 'contact@arkcare.local',
        from: process.env.FROM_EMAIL || 'noreply@arkcare.local',
        replyTo: formData.email,
        subject: `Contact Form: ${formData.subject}`,
        text: `
          New Contact Form Submission
          
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone || 'Not provided'}
          Subject: ${formData.subject}
          
          Message:
          ${formData.message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #475569;">Name:</strong> ${formData.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #475569;">Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #475569;">Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong style="color: #475569;">Subject:</strong> ${formData.subject}</p>
            </div>
            <div style="margin-top: 20px;">
              <h3 style="color: #1e293b;">Message:</h3>
              <p style="color: #334155; line-height: 1.6; white-space: pre-wrap;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
              <p>This email was sent from the Ark Care AFH contact form.</p>
              <p>Reply directly to this email to respond to ${formData.name}.</p>
            </div>
          </div>
        `,
      }

      try {
        await sgMail.send(msg)
        logger.info('Contact form email sent successfully:', {
          to: msg.to,
          from: msg.from,
          subject: msg.subject,
        })
      } catch (emailError) {
        logger.error('Failed to send contact form email:', emailError)
        // In production, fail the request if email fails
        if (process.env.NODE_ENV === 'production') {
          throw new Error('Failed to send email. Please try again later.')
        }
        // In development, log but don't fail
        logger.warn('Email sending failed, but continuing in development mode')
      }
    }

    // Send email
    await sendEmail()

    // Log the submission (only in development)
    logger.info('Contact form submission processed:', {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. We will get back to you soon.',
    })
  } catch (error) {
    logger.error('Contact form API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    )
  }
}

