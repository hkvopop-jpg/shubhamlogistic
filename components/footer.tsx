import Link from 'next/link'
import { Phone, Mail, MapPin, Share2, Heart, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SL</span>
              </div>
              <span className="font-bold text-lg">Swift Logistics</span>
            </div>
            <p className="text-sm opacity-90">
              Your trusted partner for fast, reliable, and affordable logistics solutions nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-75 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-75 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-75 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:opacity-75 transition-opacity">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-75 transition-opacity">
                  Full Truckload
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-75 transition-opacity">
                  LCL Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-75 transition-opacity">
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+91-9876-543-210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@swiftlogistics.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Business Park, Metro City, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 sm:mb-0">
            © 2024 Swift Logistics. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Heart className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
