import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold tracking-wide">KRISHNA</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Authentic Indian cuisine crafted with love and tradition. Experience the rich flavors of India in every bite.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/menu" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Our Menu
              </Link>
              <Link href="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/reservations" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Reservations
              </Link>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Spice Street, Foodie District,<br />New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">hello@krishna.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Mon - Thu: 11:30 AM - 10:00 PM</p>
                  <p>Fri - Sat: 11:30 AM - 11:00 PM</p>
                  <p>Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} KRISHNA Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
