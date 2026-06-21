'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingContact from '@/components/floating-contact'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    shipmentType: 'express'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '', shipmentType: 'express' })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-9876-543-210',
      action: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@swiftlogistics.com',
      action: 'mailto:info@swiftlogistics.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Business Park, Metro City, India',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '24/7 Available',
      action: '#'
    },
  ]

  return (
    <>
      <Navbar />
      <FloatingContact />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Get in touch with our team. We&apos;re here to help with all your logistics needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <a
                  key={idx}
                  href={info.action}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm hover:text-primary transition-colors">{info.value}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get a Quote</h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we&apos;ll get back to you within 2 hours
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground">We&apos;ll contact you shortly with a quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91-XXXXX-XXXXX"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Shipment Type *</label>
                  <select
                    name="shipmentType"
                    value={formData.shipmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="express">Express Delivery</option>
                    <option value="ftl">Full Truckload (FTL)</option>
                    <option value="lcl">LCL Services</option>
                    <option value="warehouse">Warehousing</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your shipping requirements..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does delivery take?',
                a: 'Express delivery typically takes 24-48 hours. We offer same-day delivery in select metro cities. FTL and LCL services have flexible timelines based on your requirements.'
              },
              {
                q: 'Is my shipment insured?',
                a: 'Yes, all shipments are fully insured up to 10 lakhs. For higher value shipments, we offer additional insurance options.'
              },
              {
                q: 'Can I track my shipment?',
                a: 'Absolutely! All our shipments come with real-time GPS tracking. You can track your package through our mobile app or website.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit/debit cards, bank transfers, UPI, and cash on delivery. Corporate clients can opt for monthly billing.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-foreground flex items-center justify-between">
                  {faq.q}
                  <span className="transform group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
