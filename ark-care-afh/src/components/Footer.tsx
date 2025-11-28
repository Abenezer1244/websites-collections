'use client'

import Link from 'next/link'
import { businessInfo } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Mail, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' }
  ]

  const services = [
    '24/7 Professional Care',
    'Medication Management',
    'Personal Care Assistance',
    'Activities & Engagement',
    'Specialized Care Programs'
  ]

  const socialLinks = [
    { 
      href: businessInfo.sameAs[0], 
      icon: Facebook, 
      label: 'Facebook'
    },
    { 
      href: businessInfo.sameAs[2], 
      icon: Twitter, 
      label: 'Twitter'
    },
    { 
      href: businessInfo.sameAs[1], 
      icon: Linkedin, 
      label: 'LinkedIn'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section - Four Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ark Care AFH</h3>
                  <p className="text-xs text-slate-300 font-medium">Licensed & Certified</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Providing compassionate, personalized adult family home care in Algona, Washington.
              </p>

              {/* Social Links */}
              <div className="flex gap-2 pt-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    size="icon"
                    className="w-9 h-9 rounded-lg border-slate-700 bg-slate-800/50 hover:bg-primary hover:border-primary hover:text-white text-slate-300 transition-colors"
                    aria-label={social.label}
                  >
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <a 
                      href={`tel:${businessInfo.telephone.replace(/[^0-9]/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-primary transition-colors"
                    >
                      {businessInfo.telephone.replace('+1-', '').replace(/-/g, ' ')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <a 
                      href={`mailto:${businessInfo.email}`}
                      className="text-sm text-slate-300 hover:text-primary transition-colors break-all"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {businessInfo.address.streetAddress}<br />
                      {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-sm font-semibold text-primary">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-300 font-medium mb-1">
                © {currentYear} Ark Care AFH. All rights reserved.
              </p>
              <p className="text-xs text-slate-400">
                State-licensed adult family home • Licensed in Washington State
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <Link 
                href="/privacy-policy"
                className="text-sm text-slate-300 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service"
                className="text-sm text-slate-300 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <a 
                href="#"
                className="text-sm text-slate-300 hover:text-primary transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
