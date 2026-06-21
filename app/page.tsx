import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingContact from '@/components/floating-contact'
import { Truck, Clock, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Truck,
      title: 'Express Delivery',
      description: 'Fast same-day or next-day delivery across cities'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and tracking'
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Nationwide network reaching even remote areas'
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'E-commerce Business Owner',
      content: 'Swift Logistics has been instrumental in scaling our delivery operations. Reliable and professional!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Manufacturing Company',
      content: 'Best logistics partner we could ask for. On-time delivery every single time.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Retail Manager',
      content: 'Their tracking system is excellent. We know exactly where our goods are at all times.',
      rating: 5
    },
  ]

  return (
    <>
      <Navbar />
      <FloatingContact />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
                Fast, Reliable Logistics Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Swift Logistics delivers your packages on time, every time. From same-day delivery to nationwide transportation, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2"
                >
                  Get Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary-foreground/10 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-primary-foreground/20 rounded-lg p-4 animate-pulse">
                      <div className="h-3 bg-primary-foreground/30 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-primary-foreground/20 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground font-medium">Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground font-medium">On-Time Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Swift Logistics?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine speed, reliability, and customer service to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Track Your Shipment in Real-Time</h2>
              <ul className="space-y-4">
                {[
                  'Live GPS tracking on all shipments',
                  'Instant SMS and email notifications',
                  'Proof of delivery with photos',
                  'Secure and insured shipments',
                  'Multiple payment options',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <Truck className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">Real-time tracking map would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of happy customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-lg opacity-90 mb-8">
            Get a free quote today and experience the difference Swift Logistics can make for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Request a Quote Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
