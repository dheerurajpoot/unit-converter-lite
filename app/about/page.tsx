import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Target, Lightbulb } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SITE_NAME, SITE_URL } from '@/lib/constant'

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, our mission to provide simple and accurate unit conversion tools for everyone.`,
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description: `Discover the story behind ${SITE_NAME} and our commitment to simplicity and accuracy.`,
    url: `${SITE_URL}/about`,
    type: 'website',
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Simplicity',
      description: 'We believe tools should be simple and intuitive. No unnecessary features, just what you need.',
    },
    {
      icon: CheckCircle,
      title: 'Accuracy',
      description: 'We use standard international conversion factors to ensure every result is precise and reliable.',
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Free for everyone, everywhere. No ads, no sign-ups, just fast and easy conversions.',
    },
  ]

  const timeline = [
    {
      year: '2024',
      title: `${SITE_NAME} Launched`,
      description: `We launched ${SITE_NAME} with support for length, weight, temperature, volume, and area conversions.`,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">About {SITE_NAME}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our mission is to make unit conversions simple, fast, and accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {SITE_NAME} exists to solve a simple problem: unit conversion should be easy. We created this tool 
                  because we believe everyone deserves access to fast, accurate conversion tools without the complexity of bloated 
                  applications or confusing interfaces. Whether you're a student, professional, or just someone who needs a quick 
                  conversion, we've got you covered.
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {values.map((value) => {
                    const Icon = value.icon
                    return (
                      <Card key={value.title} className="p-6">
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Our Journey</h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-24 bg-border mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Why Choose Us</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">No Ads, No Tracking</h3>
                <p className="text-muted-foreground">
                  We believe your experience should be clean and distraction-free. No advertisements, no tracking, just pure functionality.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Completely Free</h3>
                <p className="text-muted-foreground">
                  All features are free forever. No hidden charges, no premium plans, no limitations.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Fast & Responsive</h3>
                <p className="text-muted-foreground">
                  Built with performance in mind. Get instant results as you type, with smooth interactions on any device.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Always Accurate</h3>
                <p className="text-muted-foreground">
                  Using international standards, our conversions are precise and reliable for your important calculations.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Works Everywhere</h3>
                <p className="text-muted-foreground">
                  Mobile, tablet, or desktop - {SITE_NAME} works seamlessly across all your devices.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Extensive Conversions</h3>
                <p className="text-muted-foreground">
                  Support for 5 major categories with dozens of units, covering most everyday conversion needs.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Experience Simple Unit Conversion?
            </h2>
            <p className="text-lg text-muted-foreground">
              Start converting units instantly with {SITE_NAME}. No sign-up required.
            </p>
            <Link href="/converter">
              <Button size="lg" className="text-base">
                Open Converter Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
