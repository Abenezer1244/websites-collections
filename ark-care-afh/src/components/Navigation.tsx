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
      {/* Fixed Logo in Top-Left Corner */}
      <div className="fixed top-6 left-4 sm:left-6 z-50 pointer-events-auto">
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3 font-bold text-sm md:text-base text-white group transition-transform hover:scale-105"
        >
          <div className="w-10 md:w-12 h-10 md:h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center font-bold text-white text-sm md:text-lg hover:bg-white/30 transition-colors">
            A
          </div>
          <span className="hidden sm:inline">Ark</span>
        </Link>
      </div>

      {/* Fixed Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="h-32 md:h-40"></div>
      </nav>

      {/* Floating Glassmorphic Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 md:pt-8 pointer-events-none px-4 sm:px-6">
        <div className="pointer-events-auto w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl px-6 md:px-8 py-3 md:py-4 animate-float">
          <div className="flex justify-between items-center gap-4">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 md:gap-2">
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

            {/* Right Section: Theme Toggle, Schedule Button & Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-3 ml-auto">
              {/* Theme Toggle */}
              <ModeToggle />

              {/* Schedule a Tour Button - Desktop */}
              <a
                href="tel:+12064553644"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-all duration-200 border border-white/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule Tour
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
              {/* Mobile Schedule Tour Button */}
              <a
                href="tel:+12064553644"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-all duration-200 border border-white/30 mt-2"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule Tour
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
