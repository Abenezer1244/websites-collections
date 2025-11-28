'use client'

import { FormEvent, useState } from 'react'
import { businessInfo } from '@/lib/seo'
import { submitContactForm } from '@/lib/api/contact'
import { ContactHeroSection } from '@/components/contact/ContactHeroSection'
import { logger } from '@/lib/logger'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { QRCode } from '@/components/kibo-ui/qr-code'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { GoogleMap } from '@/components/GoogleMap'

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !/^[\d\s\-\(\)]+$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }))
    // Clear error for this field
    if (errors.subject) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors.subject
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Submit form using API integration
      const response = await submitContactForm(formData)
      
      if (response.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      }
    } catch (error) {
      logger.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section - Modern Redesign */}
      <ContactHeroSection />

      {/* Contact Section - Get in Touch */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Futuristic Animated Dot Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Base white gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/35 to-white" />
          
          {/* Animated Dot Grid - Primary Layer */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1.5px, transparent 0)',
              backgroundSize: '44px 44px',
              opacity: 0.4,
              animation: 'dotGridContact 19s ease-in-out infinite',
            }}
          />
          
          {/* Animated Dot Grid - Secondary Layer */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1px, transparent 0)',
              backgroundSize: '68px 68px',
              opacity: 0.3,
              animation: 'dotGridContact 23s ease-in-out infinite reverse',
            }}
          />
          
          {/* Animated Dot Grid - Tertiary Layer */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 0.5px, transparent 0)',
              backgroundSize: '92px 92px',
              opacity: 0.2,
              animation: 'dotGridContact 27s ease-in-out infinite',
            }}
          />
          
          {/* Animated connecting grid */}
          <div 
            className="absolute inset-0"
            style={{
              opacity: 0.15,
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '44px 44px',
              animation: 'gridContact 13s ease-in-out infinite',
            }}
          />
          
          {/* Floating gradient orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '21s'}} />
          <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '25s', animationDelay: '8s'}} />
          
          {/* Light mesh overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/1.5 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
          {/* Top Section: Contact Info and Form Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Get in Touch</CardTitle>
                  <CardDescription>We're here to help you learn more about our services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                    <a
                      href={`tel:${businessInfo.telephone.replace(/[^0-9]/g, '')}`}
                      className="text-primary hover:underline font-semibold text-lg"
                    >
                      (206) 455-3644
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {businessInfo.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Address</h3>
                    <p className="text-slate-800">
                      {businessInfo.address.streetAddress}<br />
                      {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Hours</h3>
                    <p className="text-slate-800 font-semibold">Available 24/7</p>
                    <p className="text-slate-800 text-sm mt-1">We're always here to help</p>
                  </div>
                </CardContent>
              </Card>

              {/* QR Code Card */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Contact</CardTitle>
                  <CardDescription>Scan to save our contact info</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white p-4 rounded-lg border-2 border-primary/20">
                    <QRCode 
                      data={`BEGIN:VCARD\nVERSION:3.0\nFN:Ark Care AFH\nORG:Ark Care AFH\nTEL:${businessInfo.telephone.replace(/[^0-9]/g, '')}\nEMAIL:${businessInfo.email}\nADR:;;${businessInfo.address.streetAddress};${businessInfo.address.addressLocality};${businessInfo.address.addressRegion} ${businessInfo.address.postalCode};;\nEND:VCARD`}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-slate-600 mt-4 text-center">Scan with your phone camera</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-xl backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent>

                {submitStatus === 'success' && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <AlertTitle className="text-green-800">Message Sent Successfully!</AlertTitle>
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert variant="destructive" className="mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <AlertTitle>Submission Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again or call us directly at (206) 455-3644.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={errors.name ? 'border-red-300 focus-visible:ring-red-500' : ''}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={errors.email ? 'border-red-300 focus-visible:ring-red-500' : ''}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'border-red-300 focus-visible:ring-red-500' : ''}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger className={errors.subject ? 'border-red-300 focus:ring-red-500' : ''}>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="tour">Schedule a Tour</SelectItem>
                        <SelectItem value="services">Services Question</SelectItem>
                        <SelectItem value="admission">Admission Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={errors.message ? 'border-red-300 focus-visible:ring-red-500' : ''}
                      placeholder="Please tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      'Message Sent!'
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>

                <p className="text-sm text-slate-800 mt-4">
                  * Required fields
                </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps Section - Full Width Prominent Display */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Find Us</h2>
              <p className="text-lg text-slate-700">
                Visit our facility at {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion}
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <GoogleMap height="500px" className="w-full" />
            </div>
          </div>
        </div>
      </section>

          {/* FAQ Section */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Modern Whitish Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Clean white base */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-white" />
          
          {/* Modern geometric pattern */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: `
              repeating-linear-gradient(60deg, transparent, transparent 45px, rgba(0,0,0,0.06) 45px, rgba(0,0,0,0.06) 46px, transparent 46px, transparent 90px)
            `,
          }} />
          
          {/* Soft gradient orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '21s'}} />
          <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '25s', animationDelay: '8s'}} />
          
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
            backgroundSize: '42px 42px'
          }} />
          
          {/* Light mesh gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/1 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-primary/20 shadow-xl mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Common questions about our services and facility</CardDescription>
            </CardHeader>
          </Card>
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">How do I schedule a tour?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">
                  You can schedule a tour by calling us, emailing, or using the contact form above. We're happy to arrange a time that works best for you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">What is the admission process?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">
                  The admission process begins with a tour and consultation. We'll discuss your needs, answer questions, and work with you to determine if we're the right fit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">What services are included?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">
                  We offer comprehensive care services including 24/7 support, medication management, personal care, meals, activities, and more. See our Services page for details.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Can family members visit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">
                  Yes! We encourage family involvement and have flexible visiting hours to accommodate family schedules and activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
