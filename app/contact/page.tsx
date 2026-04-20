'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { SITE_EMAIL } from '@/lib/constant'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsLoading(false)

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email anytime',
      contact: SITE_EMAIL,
    },
    {
      icon: MessageSquare,
      title: 'Quick Feedback',
      description: 'Share your suggestions',
      contact: SITE_EMAIL,
    },
    {
      icon: Phone,
      title: 'Response Time',
      description: 'We respond within 24 hours',
      contact: 'Usually same day',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>

                {submitted && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 font-semibold">
                      Thank you! We've received your message and will get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>

                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <Card key={method.title} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg mt-1">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{method.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{method.description}</p>
                            <p className="text-foreground font-medium mt-2">{method.contact}</p>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>

                {/* FAQ */}
                <Card className="p-6 border-2 border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Frequently Asked</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li>• Bug reports and feature requests are welcome</li>
                    <li>• Have feedback about conversions? Let us know</li>
                    <li>• Want to suggest a new unit category? We'd love to hear it</li>
                    <li>• Questions about accuracy? Our team can help</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Questions? We're Here to Help
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you have feedback, found a bug, or want to suggest a new feature, we'd love to hear from you.
            </p>
          </div>
        </section>
      </main>

    </div>
  )
}
