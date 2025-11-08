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
        <div className="h-32 md:h-40"></div>
      </nav>

      {/* Floating Glassmorphic Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 md:pt-8 pointer-events-none px-4 sm:px-6">
        <div className="pointer-events-auto w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl px-6 md:px-8 py-3 md:py-4 animate-float">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 font-bold text-sm md:text-base text-white group transition-transform hover:scale-105 flex-shrink-0"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center font-bold text-white text-xs md:text-sm">
                A
              </div>
              <span className="hidden sm:inline">Ark</span>
            </Link>

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

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Theme Toggle */}
              <div className="flex items-center">
                <ModeToggle />
              </div>

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
            </div>
          )}
        </div>
      </div>
    </>
  )
}
