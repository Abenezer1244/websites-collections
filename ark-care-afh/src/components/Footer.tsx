'use client'

import Link from 'next/link'
import { businessInfo } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { MapPin, Phone, Clock, Mail, Facebook, Twitter, Linkedin, ArrowRight, Heart, Shield, Award, Users } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About Us', icon: '👥' },
    { href: '/services', label: 'Services', icon: '🛠️' },
    { href: '/gallery', label: 'Gallery', icon: '📸' },
    { href: '/contact', label: 'Contact', icon: '📞' }
  ]

  const services = [
    '24/7 Professional Care',
    'Medication Management',
    'Personal Care Assistance',
    'Activities & Engagement',
    'Specialized Care Programs',
    'Mental Health Support'
  ]

  const certifications = [
    { icon: Shield, label: 'State Licensed', color: 'text-blue-600' },
    { icon: Award, label: 'HIPAA Compliant', color: 'text-green-600' },
    { icon: Users, label: 'Certified Staff', color: 'text-purple-600' }
  ]

  const socialLinks = [
    { 
      href: businessInfo.sameAs[0], 
      icon: Facebook, 
      label: 'Facebook',
      color: 'hover:bg-blue-500 hover:text-white'
    },
    { 
      href: businessInfo.sameAs[2], 
      icon: Twitter, 
      label: 'Twitter',
      color: 'hover:bg-sky-400 hover:text-white'
    },
    { 
      href: businessInfo.sameAs[1], 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'hover:bg-blue-700 hover:text-white'
    }
  ]

  return (
    <footer className="relative bg-white border-t-2 border-slate-100 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />

      {/* Main Footer Content */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section - Brand & CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Brand Section - Enhanced */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    A
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Ark Care AFH</h3>
                  <p className="text-sm text-slate-500 font-medium">Licensed & Certified</p>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-sm">
                Providing compassionate, personalized adult family home care in Algona, Washington. 
                Licensed and certified for your peace of mind.
              </p>

              {/* Certifications Badges */}
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="flex items-center gap-2 px-3 py-1.5 border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <cert.icon className={`w-4 h-4 ${cert.color}`} />
                    <span className="text-xs font-medium text-slate-700">{cert.label}</span>
                  </Badge>
                ))}
              </div>

              {/* Social Links - Enhanced */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    size="icon"
                    className={`w-11 h-11 rounded-xl border-slate-200 bg-white hover:border-transparent transition-all duration-300 ${social.color} shadow-sm hover:shadow-md`}
                    aria-label={social.label}
                  >
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links - Modern Grid */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant="ghost"
                    className="justify-start h-auto py-3 px-4 rounded-xl hover:bg-primary/5 hover:text-primary group transition-all duration-200"
                  >
                    <Link href={link.href} className="flex items-center gap-3 w-full">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                      <span className="font-medium text-slate-700 group-hover:text-primary">{link.label}</span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-primary" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Contact Card - Prominent */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-primary/5 via-white to-primary/5 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                      <Button asChild variant="link" className="p-0 h-auto text-base font-bold text-slate-900 hover:text-primary">
                        <a href={`tel:${businessInfo.telephone.replace(/[^0-9]/g, '')}`}>
                          {businessInfo.telephone.replace('+1-', '').replace(/-/g, ' ')}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                      <Button asChild variant="link" className="p-0 h-auto text-sm font-medium text-slate-700 hover:text-primary break-all">
                        <a href={`mailto:${businessInfo.email}`}>
                          {businessInfo.email}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {businessInfo.address.streetAddress}<br />
                        {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group pt-2 border-t border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                      <Clock className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Hours</p>
                      <p className="text-sm font-bold text-primary">Available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Services Section - Horizontal Scroll on Mobile */}
          <div className="mb-12">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Our Services
            </h4>
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="px-4 py-2 rounded-full border-slate-200 bg-white hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default text-sm font-medium"
                >
                  <span className="mr-2">✓</span>
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          {/* Divider with Pattern */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4">
                <Heart className="w-5 h-5 text-primary fill-primary" />
              </div>
            </div>
          </div>

          {/* Bottom Section - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright & Info */}
            <div className="space-y-2">
              <p className="text-slate-700 font-semibold text-sm">
                © {currentYear} Ark Care AFH. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                State-licensed adult family home • Licensed in Washington State • 
                Specializing in mental health support, dementia care, and developmental disabilities.
              </p>
            </div>

            {/* Legal Links - Modern Layout */}
            <div className="flex flex-wrap gap-4 justify-start md:justify-end">
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-primary hover:bg-primary/5 rounded-lg font-medium">
                <Link href="/privacy-policy" className="flex items-center gap-2">
                  Privacy Policy
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-primary hover:bg-primary/5 rounded-lg font-medium">
                <Link href="/terms-of-service" className="flex items-center gap-2">
                  Terms of Service
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-primary hover:bg-primary/5 rounded-lg font-medium">
                <a href="#" className="flex items-center gap-2">
                  Accessibility
                  <ArrowRight className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/20 shadow-lg">
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Ready to Learn More?
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Schedule a tour or contact us today to discuss how we can help your loved one.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full button-border-beam">
                      <Link href="/contact" className="flex items-center gap-2">
                        Schedule a Tour
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-full">
                      <a href={`tel:${businessInfo.telephone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </footer>
  )
}
