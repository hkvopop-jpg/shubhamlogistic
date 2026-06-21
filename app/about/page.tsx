import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingContact from '@/components/floating-contact'
import { Award, Users, Target, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'Every decision we make is centered around what&apos;s best for our customers'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'We optimize every process to deliver faster without compromising quality'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in safety and professionalism'
    },
    {
      icon: Users,
      title: 'Team Dedication',
      description: 'Our passionate team is committed to exceeding expectations daily'
    },
  ]

  const timeline = [
    { year: '2015', title: 'Founded', description: 'Swift Logistics started with a single truck and big dreams' },
    { year: '2017', title: 'Expansion', description: 'Expanded operations to 10 major cities across the country' },
    { year: '2019', title: 'Technology', description: 'Launched real-time tracking and mobile app' },
    { year: '2024', title: 'Market Leader', description: 'Became one of the top logistics providers in India' },
  ]

  return (
    <>
      <Navbar />
      <FloatingContact />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Swift Logistics</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Delivering excellence through innovation, reliability, and customer dedication since 2015
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Swift Logistics began with a simple vision: to revolutionize the logistics industry by putting customers first. 
                What started as a small operation has grown into a trusted partner for businesses across India.
              </p>
              <p className="text-muted-foreground mb-4">
                We&apos;ve built our reputation on three pillars: speed, reliability, and customer service. Every day, our 
                dedicated team works to ensure that your shipments arrive safely and on time.
              </p>
              <p className="text-muted-foreground">
                Today, with over 500 clients and 50,000+ successful deliveries, we&apos;re proud to be part of countless 
                success stories across the nation.
              </p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">9+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide fast, reliable, and affordable logistics solutions that empower businesses to grow. 
                We&apos;re committed to delivering excellence in every shipment and building long-term partnerships with our clients.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative logistics provider in India. We envision a future where 
                businesses of all sizes have access to world-class delivery solutions that help them succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
          </div>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-primary/20 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-foreground">{item.year} - {item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These values guide every decision we make and every action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-8">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of satisfied businesses that trust Swift Logistics with their shipments
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
