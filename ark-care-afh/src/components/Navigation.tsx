'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ModeToggle } from './mode-toggle'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Fixed Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="h-24 md:h-28"></div>
      </nav>

      {/* Floating Glassmorphic Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-5 pointer-events-none px-4 sm:px-6">
        <div className="pointer-events-auto w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl px-4 md:px-8 py-3 md:py-4 animate-float">
          <div className="flex justify-between items-center gap-4">
            {/* Logo - Left Side */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 font-bold text-sm md:text-base text-white group transition-transform hover:scale-105 flex-shrink-0"
            >
              <div className="w-10 md:w-11 h-10 md:h-11 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center font-bold text-white text-sm md:text-lg hover:bg-white/30 transition-colors">
                A
              </div>
              <span className="hidden sm:inline">Ark</span>
            </Link>

            {/* Desktop Navigation Links - Center */}
            <div className="hidden lg:flex items-center gap-1 md:gap-2 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white/80 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section: Theme Toggle, Call Button & Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              {/* Theme Toggle */}
              <ModeToggle />

              {/* Call Button - Right Side */}
              <a
                href="tel:+12064553644"
                className="hidden md:inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200 border border-white/30"
                aria-label="Schedule a tour"
                title="Call Now"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white/80 hover:text-white transition-colors duration-200 rounded-lg p-1.5 hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-white/20 mt-3 pt-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+12064553644"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-all duration-200 border border-white/30 mt-2"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
