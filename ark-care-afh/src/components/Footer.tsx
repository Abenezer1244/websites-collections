import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <h3 className="text-lg font-bold">Ark Care AFH</h3>
            </div>
            <p className="text-sm opacity-90">
              Providing compassionate, quality adult family home care services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent transition-colors cursor-default">
                24/7 Care & Support
              </li>
              <li className="hover:text-accent transition-colors cursor-default">
                Medication Management
              </li>
              <li className="hover:text-accent transition-colors cursor-default">
                Activities & Recreation
              </li>
              <li className="hover:text-accent transition-colors cursor-default">
                Meal Preparation
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="opacity-90">Phone</p>
                <p className="font-semibold">Coming Soon</p>
              </div>
              <div>
                <p className="opacity-90">Email</p>
                <a
                  href="mailto:contact@arkcare.local"
                  className="font-semibold hover:text-accent transition-colors"
                >
                  contact@arkcare.local
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <p className="opacity-90">
              &copy; {currentYear} Ark Care AFH. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
