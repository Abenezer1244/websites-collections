import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse" style={{opacity: 0.5, animationDuration: '4s'}} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/10 to-primary/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse" style={{opacity: 0.3, animationDuration: '5s', animationDelay: '1s'}} />

      {/* Main Footer Content */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <h3 className="text-2xl font-black text-white">Ark Care AFH</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Providing compassionate, personalized adult family home care in Algona, Washington.
              </p>
              {/* Social Links */}
              <div className="flex gap-3" role="list" aria-label="Social media links">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Visit our Facebook page"
                  role="listitem"
                >
                  <svg className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Visit our Twitter page"
                  role="listitem"
                >
                  <svg className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Visit our LinkedIn page"
                  role="listitem"
                >
                  <svg className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.825 0-9.744h3.554v1.378c-.009.015-.021.029-.031.042h.031v-.042c.429-.661 1.196-1.6 2.905-1.6 2.12 0 3.709 1.384 3.709 4.365v5.601zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.915-1.708 1.144 0 1.915.757 1.915 1.708 0 .95-.771 1.708-1.915 1.708zm1.575 10.019H3.762V9.708h3.15v9.744zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Navigation</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors duration-300">Home</Link></li>
                <li><Link href="/about" className="text-slate-400 hover:text-primary transition-colors duration-300">About Us</Link></li>
                <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Services</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Care Services</h4>
              <ul className="space-y-3">
                <li className="text-slate-400">24/7 Professional Care</li>
                <li className="text-slate-400">Medication Management</li>
                <li className="text-slate-400">Personal Care Assistance</li>
                <li className="text-slate-400">Activities & Engagement</li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Contact Info</h4>
              <ul className="space-y-4">
                <li>
                  <p className="text-slate-500 text-sm font-medium mb-1">Phone</p>
                  <a 
                    href="tel:+12064553644" 
                    className="text-slate-200 hover:text-primary transition-colors duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                    aria-label="Call Ark Care AFH at (206) 455-3644"
                  >
                    (206) 455-3644
                  </a>
                </li>
                <li>
                  <p className="text-slate-500 text-sm font-medium mb-1">Address</p>
                  <p className="text-slate-200">
                    127 4th Ave N<br />
                    Algona, WA 98001
                  </p>
                </li>
                <li>
                  <p className="text-slate-500 text-sm font-medium mb-1">Hours</p>
                  <p className="text-slate-200">Available 24/7</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Ark Care AFH. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-slate-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-slate-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                Terms of Service
              </Link>
              <a 
                href="#" 
                className="text-slate-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                aria-label="Accessibility information"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-slate-500 text-xs">
            Ark Care AFH is a state-licensed adult family home providing compassionate, personalized care to residents in Algona, Washington.
          </p>
        </div>
      </div>
    </footer>
  )
}
