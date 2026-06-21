import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingContact from '@/components/floating-contact'
import { Truck, Box, Warehouse, Clock, Shield, TrendingUp, MapPin, CheckCircle } from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Truck,
      title: 'Express Delivery',
      description: 'Same-day or next-day delivery for urgent shipments',
      features: ['Priority handling', 'GPS tracking', 'Direct delivery', 'Weekend delivery available']
    },
    {
      icon: Box,
      title: 'Full Truckload (FTL)',
      description: 'Complete truck rental for large shipments',
      features: ['Dedicated vehicle', 'Direct route', 'Heavy cargo support', 'Flexible scheduling']
    },
    {
      icon: Warehouse,
      title: 'LCL Services',
      description: 'Less than truck load consolidation services',
      features: ['Cost-effective', 'Shared capacity', 'Regular schedules', 'Nationwide coverage']
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description: 'Secure storage and inventory management',
      features: ['Climate controlled', 'Inventory tracking', 'Pick & pack', 'Security 24/7']
    },
  ]

  const features = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '99% on-time delivery rate with guaranteed commitment'
    },
    {
      icon: Shield,
      title: 'Secure & Insured',
      description: 'Full insurance coverage for all shipments up to 10 lakhs'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking and instant notifications for every shipment'
    },
    {
      icon: TrendingUp,
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges'
    },
  ]

  const serviceAreas = [
    'Express Delivery',
    'Same-Day Delivery',
    'Next-Day Delivery',
    'Full Truckload',
    'Part Truckload',
    'LCL Consolidation',
    'Warehousing Solutions',
    'Temperature Controlled',
    'Fragile Goods Handling',
    'Heavy Equipment Transport',
    'International Shipping',
    'Documentation Support',
  ]

  return (
    <>
      <Navbar />
      <FloatingContact />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Comprehensive logistics solutions tailored to meet your business needs
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the service that best fits your shipping needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="flex gap-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer a wide range of specialized logistics services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:bg-primary/5 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Book', description: 'Get a quote and book your shipment online' },
              { step: 2, title: 'Pickup', description: 'We collect your goods at scheduled time' },
              { step: 3, title: 'Track', description: 'Monitor your shipment in real-time' },
              { step: 4, title: 'Deliver', description: 'Receive your package on-time guaranteed' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border-2 border-primary rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your shipping requirements and get a custom quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
