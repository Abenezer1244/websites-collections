'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <main className="w-full max-w-[1600px] bg-cream lg:rounded-[2.5rem] shadow-2xl overflow-hidden relative min-h-[95vh] flex flex-col">

      <Navbar activePage="contact" />

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-900/10 bg-white/40 backdrop-blur-sm mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-600">We're Here to Help</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
            <span className="italic text-pink-500">Get in</span> <br />
            <span className="not-italic font-sans tracking-tighter text-stone-900">Touch.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
            Have questions about our services or want to schedule a tour? We would love to hear from you. Reach out to us and discover how Adorned Adult Family Home can provide the care your loved one deserves.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 italic">Contact Information</h2>
                <p className="text-base text-stone-600 leading-relaxed mb-8">
                  Our team is available 24/7 to answer your questions and address any concerns you may have.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                    <i data-lucide="phone" className="w-6 h-6 stroke-[1.5]"></i>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-2">Phone</p>
                    <a href="tel:+12533865737" className="text-lg font-semibold text-stone-900 hover:text-pink-500 transition-colors">
                      (253) 386-5737
                    </a>
                    <p className="text-sm text-stone-500 mt-1">Available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <i data-lucide="mail" className="w-6 h-6 stroke-[1.5]"></i>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-2">Email</p>
                    <a href="mailto:adornedafh@gmail.com" className="text-lg font-semibold text-stone-900 hover:text-blue-600 transition-colors">
                      adornedafh@gmail.com
                    </a>
                    <p className="text-sm text-stone-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <i data-lucide="map-pin" className="w-6 h-6 stroke-[1.5]"></i>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-2">Location</p>
                    <p className="text-lg font-semibold text-stone-900">
                      1115 I Street NE
                    </p>
                    <p className="text-base text-stone-700">Auburn, WA 98002</p>
                    <p className="text-sm text-stone-500 mt-1">Daily visits welcome 9 AM-8 PM</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-6 bg-stone-900 text-white rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <i data-lucide="clock" className="w-5 h-5"></i>
                  <h3 className="text-sm uppercase tracking-widest font-semibold">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Sunday</span>
                    <span className="font-semibold">By Appointment</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/10">
                    <p className="text-xs text-stone-400">Emergency care available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-xl">
              <h3 className="text-2xl font-semibold text-stone-900 mb-2">Send Us a Message</h3>
              <p className="text-sm text-stone-500 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-stone-600">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-stone-600">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-stone-600">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-stone-600">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-stone-600">Subject</label>
                  <select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all">
                    <option>General Inquiry</option>
                    <option>Schedule a Tour</option>
                    <option>Admission Information</option>
                    <option>Pricing & Payment</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-stone-600">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-stone-900 text-white rounded-full py-4 text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <i data-lucide="send" className="w-4 h-4"></i>
                </button>

                <p className="text-xs text-stone-400 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-stone-200 rounded-3xl overflow-hidden h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.9!2d-122.2281!3d47.3084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490f9a9e9b9b9b9%3A0x0!2s1115%20I%20St%20NE%2C%20Auburn%2C%20WA%2098002!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adorned Adult Family Home Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto bg-pink-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 italic">Ready to Visit?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a personal tour of our cozy home and meet our caring team. See firsthand what makes Adorned Adult Family Home special.
            </p>
            <a
              href="tel:+12533865737"
              className="inline-flex items-center gap-2 bg-white text-pink-500 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-stone-100 transition-colors"
            >
              <i data-lucide="phone" className="w-4 h-4"></i>
              Call (253) 386-5737
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
