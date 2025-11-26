'use client'

import { FormEvent, useState } from 'react'
import { businessInfo } from '@/lib/seo'
import { submitContactForm } from '@/lib/api/contact'
import { ContactHeroSection } from '@/components/contact/ContactHeroSection'
import { logger } from '@/lib/logger'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

      {/* Contact Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-slate-100 to-primary/20 overflow-hidden">
        {/* Rich Colorful Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-slate-100 to-primary/25" />
          
          {/* Animated orbs */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 to-slate-200/60 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
          <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-8" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.03) 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, rgba(0,0,0,0.03) 50%, transparent 70%)',
            backgroundSize: '50px 50px'
          }} />
          
          {/* Radial accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-15" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                <a
                  href={`tel:${businessInfo.telephone.replace(/[^0-9]/g, '')}`}
                  className="text-primary hover:underline font-semibold"
                >
                  (206) 455-3644
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-primary hover:underline"
                >
                  {businessInfo.email}
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Address</h3>
                <p className="text-slate-800">
                  {businessInfo.address.streetAddress}<br />
                  {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Hours</h3>
                <p className="text-slate-800">Available 24/7</p>
                <p className="text-slate-800 text-sm mt-1">We're always here to help</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-lg border-2 border-primary/20 p-6 sm:p-7 md:p-8 shadow-xl backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-green-800 font-medium">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-red-800 font-medium">
                        Something went wrong. Please try again or call us directly at (206) 455-3644.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-background text-slate-900 ${
                        errors.name 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-200 focus:ring-primary'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-background text-slate-900 ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-200 focus:ring-primary'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-background text-slate-900 ${
                        errors.phone 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-200 focus:ring-primary'
                      }`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-background text-slate-900 ${
                        errors.subject 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-200 focus:ring-primary'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="services">Services Question</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-background text-slate-900 resize-none ${
                        errors.message 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-slate-200 focus:ring-primary'
                      }`}
                      placeholder="Please tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      'Message Sent!'
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>

                <p className="text-sm text-slate-800 mt-4">
                  * Required fields
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-primary/15 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-lg border-2 border-primary/20 p-6 shadow-lg backdrop-blur-sm">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                How do I schedule a tour?
                <span className="ml-2">▶</span>
              </summary>
              <p className="text-slate-800 mt-4">
                You can schedule a tour by calling us, emailing, or using the contact form above. We're happy to arrange a time that works best for you.
              </p>
            </details>

            <details className="bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-lg border-2 border-primary/20 p-6 shadow-lg backdrop-blur-sm">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                What is the admission process?
                <span className="ml-2">▶</span>
              </summary>
              <p className="text-slate-800 mt-4">
                The admission process begins with a tour and consultation. We'll discuss your needs, answer questions, and work with you to determine if we're the right fit.
              </p>
            </details>

            <details className="bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-lg border-2 border-primary/20 p-6 shadow-lg backdrop-blur-sm">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                What services are included?
                <span className="ml-2">▶</span>
              </summary>
              <p className="text-slate-800 mt-4">
                We offer comprehensive care services including 24/7 support, medication management, personal care, meals, activities, and more. See our Services page for details.
              </p>
            </details>

            <details className="bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-lg border-2 border-primary/20 p-6 shadow-lg backdrop-blur-sm">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                Can family members visit?
                <span className="ml-2">▶</span>
              </summary>
              <p className="text-slate-800 mt-4">
                Yes! We encourage family involvement and have flexible visiting hours to accommodate family schedules and activities.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
