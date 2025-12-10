'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  activePage?: 'home' | 'living' | 'about' | 'contact';
}

export default function Navbar({ activePage = 'home' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/80 backdrop-blur-md border-b border-stone-100">
      <div className="px-6 py-5 md:px-10 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center bg-stone-900 rounded-full text-white overflow-hidden">
            <span className="font-serif italic text-lg relative z-10 group-hover:-translate-y-8 transition-transform duration-500">G</span>
            <span className="font-serif italic text-lg absolute translate-y-8 group-hover:translate-y-0 transition-transform duration-500">G</span>
          </div>
          <span className="text-sm font-semibold tracking-tight uppercase text-pink-500">Grace AFH</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-stone-100/50 p-1 rounded-full border border-stone-200/50">
          <Link href="/" className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activePage === 'home' ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50 font-bold' : 'text-stone-500 hover:text-stone-900 hover:bg-white hover:shadow-sm'}`}>Home</Link>
          <Link href="/about-us" className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activePage === 'about' ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50 font-bold' : 'text-stone-500 hover:text-stone-900 hover:bg-white hover:shadow-sm'}`}>About Us</Link>
          <Link href="/living-with-us" className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activePage === 'living' ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50 font-bold' : 'text-stone-500 hover:text-stone-900 hover:bg-white hover:shadow-sm'}`}>Living Here</Link>
          <Link href="/contact-us" className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activePage === 'contact' ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50 font-bold' : 'text-stone-500 hover:text-stone-900 hover:bg-white hover:shadow-sm'}`}>Contact Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+14253976530" className="hidden lg:flex items-center gap-2 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">
            <i data-lucide="phone" className="w-3.5 h-3.5"></i>
            (425) 397-6530
          </a>
          <a href="#inquire" className="hidden md:flex relative overflow-hidden rounded-full bg-stone-900 px-6 py-2.5 text-xs font-medium text-white transition-transform active:scale-95 hover:bg-stone-800">
            <span className="relative z-10">Book a Visit</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 space-y-2 bg-cream/95 border-t border-stone-100">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activePage === 'home'
                ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activePage === 'about'
                ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/living-with-us"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activePage === 'living'
                ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            Living Here
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activePage === 'contact'
                ? 'text-pink-500 bg-white shadow-sm border border-stone-200/50'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            Contact Us
          </Link>
          <a
            href="#inquire"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform active:scale-95 hover:bg-stone-800"
          >
            Book a Visit
          </a>
        </div>
      </div>
    </nav>
  );
}
