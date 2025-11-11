'use client'

import { FormEvent, useState } from 'react'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // For now, just show success message
    // In a production app, this would send to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary/70 text-white py-16">
        <AnimatedBlob position="top-right" size="lg" opacity="medium" />
        <AnimatedBlobSecondary position="bottom-left" size="md" opacity="light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Get in touch with us for inquiries, to schedule a tour, or to learn more about our services
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-800">Coming soon</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <a
                  href="mailto:contact@arkcare.local"
                  className="text-primary hover:underline"
                >
                  contact@arkcare.local
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Address</h3>
                <p className="text-slate-800">Coming soon</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Hours</h3>
                <p className="text-slate-800">24/7 for emergencies</p>
                <p className="text-slate-800">Hours: Coming soon</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
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
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-slate-900"
                      placeholder="Your name"
                    />
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
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-slate-900"
                      placeholder="your@email.com"
                    />
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
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-slate-900"
                      placeholder="(123) 456-7890"
                    />
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
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-slate-900"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="services">Services Question</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="other">Other</option>
                    </select>
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
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-slate-900 resize-none"
                      placeholder="Please tell us how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white rounded-lg border border-slate-200 p-6">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                How do I schedule a tour?
                <span className="ml-2">▶</span>
              </summary>
              <p className="text-slate-800 mt-4">
                You can schedule a tour by calling us, emailing, or using the contact form above. We're happy to arrange a time that works best for you.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-slate-200 p-6">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                What is the admission process?
                <span className="ml-2">▶</span>
              </summary>
              <p className="text-slate-800 mt-4">
                The admission process begins with a tour and consultation. We'll discuss your needs, answer questions, and work with you to determine if we're the right fit.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-slate-200 p-6">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                What services are included?
                <span className="ml-2">▶</span>
              </summary>
              <p className="text-slate-800 mt-4">
                We offer comprehensive care services including 24/7 support, medication management, personal care, meals, activities, and more. See our Services page for details.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-slate-200 p-6">
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
