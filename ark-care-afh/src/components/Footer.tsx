'use client'

import Link from 'next/link'
import { businessInfo } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white text-slate-900 overflow-hidden">

      {/* Main Footer Content */}
      <div className="relative z-10 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-7 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Brand Section */}
            <Card className="lg:col-span-1 bg-transparent border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                    A
                  </div>
                  <CardTitle className="text-2xl font-black text-slate-900">Ark Care AFH</CardTitle>
                </div>
                <CardDescription className="text-slate-600 leading-relaxed mb-6">
                  Providing compassionate, personalized adult family home care in Algona, Washington. Licensed and certified for your peace of mind.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Social Links */}
                <div className="flex gap-3" role="list" aria-label="Social media links">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-slate-100 hover:bg-primary/40 text-slate-600 hover:text-white"
                  >
                    <a 
                      href={businessInfo.sameAs[0]} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Facebook page"
                      role="listitem"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-slate-100 hover:bg-primary/40 text-slate-600 hover:text-white"
                  >
                    <a 
                      href={businessInfo.sameAs[2]} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Twitter page"
                      role="listitem"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-slate-100 hover:bg-primary/40 text-slate-600 hover:text-white"
                  >
                    <a 
                      href={businessInfo.sameAs[1]} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our LinkedIn page"
                      role="listitem"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.825 0-9.744h3.554v1.378c-.009.015-.021.029-.031.042h.031v-.042c.429-.661 1.196-1.6 2.905-1.6 2.12 0 3.709 1.384 3.709 4.365v5.601zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.915-1.708 1.144 0 1.915.757 1.915 1.708 0 .95-.771 1.708-1.915 1.708zm1.575 10.019H3.762V9.708h3.15v9.744zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Navigation */}
            <Card className="bg-transparent border-slate-200">
              <CardHeader>
                <CardTitle className="font-bold text-slate-900 text-lg relative inline-block">
                  Navigation
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/about', label: 'About Us' },
                    { href: '/services', label: 'Services' },
                    { href: '/gallery', label: 'Gallery' },
                    { href: '/contact', label: 'Contact' }
                  ].map((link) => (
                    <li key={link.href}>
                      <Button asChild variant="ghost" className="text-slate-600 hover:text-primary p-0 h-auto justify-start">
                        <Link href={link.href}>
                          {link.label}
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-transparent border-slate-200">
              <CardHeader>
                <CardTitle className="font-bold text-slate-900 text-lg relative inline-block">
                  Our Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    '24/7 Professional Care',
                    'Medication Management',
                    'Personal Care Assistance',
                    'Activities & Engagement',
                    'Specialized Care Programs'
                  ].map((service, index) => (
                    <li key={index} className="text-slate-600 flex items-start gap-2">
                      <Badge variant="outline" className="w-5 h-5 p-0 rounded-full border-primary bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </Badge>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact & Info */}
            <Card className="bg-transparent border-slate-200">
              <CardHeader>
                <CardTitle className="font-bold text-slate-900 text-lg relative inline-block">
                  Get in Touch
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="w-10 h-10 p-0 rounded-lg border-primary/30 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </Badge>
                  <div>
                    <p className="text-slate-500 text-xs font-medium mb-1 uppercase tracking-wider">Phone</p>
                    <Button asChild variant="link" className="text-slate-700 hover:text-primary p-0 h-auto font-semibold text-lg">
                      <a 
                        href={`tel:${businessInfo.telephone}`}
                        aria-label={`Call Ark Care AFH at ${businessInfo.telephone}`}
                      >
                        {businessInfo.telephone.replace('+1-', '').replace(/-/g, ' ')}
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="w-10 h-10 p-0 rounded-lg border-primary/30 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </Badge>
                  <div>
                    <p className="text-slate-500 text-xs font-medium mb-1 uppercase tracking-wider">Address</p>
                    <p className="text-slate-600 leading-relaxed">
                      {businessInfo.address.streetAddress}<br />
                      {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="w-10 h-10 p-0 rounded-lg border-primary/30 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Badge>
                  <div>
                    <p className="text-slate-500 text-xs font-medium mb-1 uppercase tracking-wider">Hours</p>
                    <p className="text-slate-600 font-semibold">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-600 text-sm mb-2">
                © {currentYear} Ark Care AFH. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs">
                State-licensed adult family home • Licensed in Washington State
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-end">
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-primary">
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-primary">
                <Link href="/terms-of-service">
                  Terms of Service
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-primary">
                <a href="#" aria-label="Accessibility information">
                  Accessibility
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-slate-600 text-xs leading-relaxed">
            Ark Care AFH is a state-licensed adult family home providing compassionate, personalized care to residents in Algona, Washington. 
            We specialize in mental health support, dementia care, and developmental disabilities.
          </p>
        </div>
      </div>
    </footer>
  )
}
