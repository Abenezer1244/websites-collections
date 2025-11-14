'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const heroSectionRef = useRef<HTMLElement | null>(null)

  // Find hero section and track scroll position
  useEffect(() => {
    const findHeroSection = () => {
      // Try to find hero section by common selectors
      const heroSelectors = [
        'section[data-section="hero"]',
        'section:first-of-type',
        '[class*="Hero"]',
      ]
      
      for (const selector of heroSelectors) {
        const hero = document.querySelector(selector) as HTMLElement
        if (hero) {
          heroSectionRef.current = hero
          return hero
        }
      }
      
      // Fallback: use first section on page
      const firstSection = document.querySelector('main > section:first-of-type') as HTMLElement
      if (firstSection) {
        heroSectionRef.current = firstSection
        return firstSection
      }
      
      return null
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const hero = heroSectionRef.current || findHeroSection()
      
      if (hero) {
        const heroHeight = hero.offsetHeight
        const heroBottom = hero.offsetTop + heroHeight
        
        // Show nav when in hero section or scrolling up, hide when past hero and scrolling down
        if (currentScrollY < heroBottom) {
          // Still in hero section - always show
          setIsVisible(true)
        } else {
          // Past hero section - hide when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY && currentScrollY > heroBottom) {
            setIsVisible(false)
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true)
          }
        }
      } else {
        // If no hero found, show nav when scrolling up, hide when scrolling down
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    // Initial check
    findHeroSection()
    handleScroll()
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Re-check hero section on route change (Next.js client-side routing)
    const checkHero = () => {
      setTimeout(() => {
        heroSectionRef.current = null // Reset ref
        findHeroSection()
        handleScroll()
      }, 300) // Delay to allow DOM to update
    }
    
    // Listen for route changes via DOM mutations
    const observer = new MutationObserver(() => {
      checkHero()
    })
    
    // Observe main content area for changes
    const mainElement = document.querySelector('main')
    if (mainElement) {
      observer.observe(mainElement, {
        childList: true,
        subtree: true
      })
    }
    
    // Also listen for popstate (browser back/forward)
    window.addEventListener('popstate', checkHero)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', checkHero)
      observer.disconnect()
    }
  }, [lastScrollY])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Fixed Navbar Container for spacing */}
      <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none" aria-hidden="true">
        <div className="h-32 md:h-40"></div>
      </nav>

      {/* Main Navigation Bar - Centered Container */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-label="Main navigation"
      >
        <div className="h-full px-4 sm:px-6 lg:px-8 pt-5 md:pt-6 flex items-center w-full">
          {/* Logo - Left Side */}
          <div className="pointer-events-auto flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-1.5 md:gap-2 font-bold text-xs md:text-sm text-white group transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
              aria-label="Ark Care AFH Home"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center font-bold text-white text-xs md:text-sm hover:bg-white/30 transition-colors">
                A
              </div>
              <span className="hidden sm:inline">Ark Care</span>
            </Link>
          </div>

          {/* Center spacer for navbar - flex-1 to push navbar to center */}
          <div className="flex-1 pointer-events-none"></div>

          {/* Floating Glassmorphic Navbar - Center */}
          <div className="pointer-events-auto max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl px-6 md:px-10 py-3 md:py-4 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
              <div className="hidden lg:flex items-center justify-center gap-6 md:gap-8">
                {/* Left Navigation Links */}
                <Link
                  href="/about"
                  className="px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium text-white/80 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  About Us
                </Link>

                <Link
                  href="/gallery"
                  className="px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium text-white/80 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Gallery
                </Link>

                {/* Home - Center and Larger */}
                <Link
                  href="/"
                  className="px-3 md:px-5 py-1.5 text-sm md:text-lg font-bold text-white transition-all duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Home"
                >
                  Home
                </Link>

                {/* Right Navigation Links */}
                <Link
                  href="/services"
                  className="px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium text-white/80 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  className="px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium text-white/80 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Navigation Menu */}
              <div className="lg:hidden flex items-center justify-between">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white/80 hover:text-white transition-colors duration-200 rounded-lg p-1.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
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

                <Link
                  href="/"
                  className="px-4 py-2 text-sm md:text-base font-bold text-white transition-all duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Home"
                >
                  Home
                </Link>
              </div>

              {/* Mobile Navigation Menu Dropdown */}
              {isOpen && (
                <div 
                  id="mobile-menu"
                  className="lg:hidden border-t border-white/20 mt-3 pt-3 space-y-2"
                  role="menu"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="tel:+12064553644"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-all duration-200 border border-white/30 mt-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    onClick={() => setIsOpen(false)}
                    aria-label="Call Ark Care AFH at (206) 455-3644"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              )}
            </div>

          {/* Right spacer for balance - flex-1 to push buttons to right */}
          <div className="flex-1 pointer-events-none"></div>

          {/* Call Button - Right Side */}
          <a
            href="tel:+12064553644"
            className="pointer-events-auto flex-shrink-0 hidden md:inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Call Ark Care AFH at (206) 455-3644"
            title="Call Now"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  )
}
