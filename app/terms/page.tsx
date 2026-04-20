import { Metadata } from 'next'
import { Shield, BookOpen, Scale, AlertCircle, Info, Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { SITE_EMAIL, SITE_NAME, SITE_URL } from '@/lib/constant'

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Read the terms of service for ${SITE_NAME}. Learn about usage rights, limitations, and disclaimers.`,
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `${SITE_NAME} terms of service`,
    url: `${SITE_URL}/terms`,
    type: 'website',
  },
}

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: Shield,
      content: `By accessing and using ${SITE_NAME}, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. Your continued use of the site following the posting of changes to these terms will be deemed your acceptance of those changes.`
    },
    {
      title: "2. Use License",
      icon: BookOpen,
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on ${SITE_NAME} for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`,
      list: [
        "Modify or copy the materials for commercial purposes",
        "Use the materials for any public display or distribution",
        "Attempt to decompile or reverse engineer any software",
        "Remove any copyright or other proprietary notations",
        "Transfer the materials to another person or 'mirror' the materials"
      ]
    },
    {
      title: "3. Disclaimer",
      icon: AlertCircle,
      content: `The materials on ${SITE_NAME} are provided on an 'as is' basis. ${SITE_NAME} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`
    },
    {
      title: "4. Limitations of Liability",
      icon: Scale,
      content: `In no event shall ${SITE_NAME} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ${SITE_NAME}, even if we have been notified of the possibility of such damage.`
    },
    {
      title: "5. Accuracy of Materials",
      icon: Info,
      content: `The materials appearing on ${SITE_NAME} could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.`
    },
    {
       title: "6. Service Modifications",
       icon: Info,
       content: `${SITE_NAME} is provided free of charge. We reserve the right to modify, suspend, or discontinue the service at any time with or without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the service.`
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Header Section */}
        <section className="relative py-20 overflow-hidden bg-muted/30">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight">Terms of Service</h1>
            <p className="text-lg text-muted-foreground font-medium">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section, i) => (
                <Card key={i} className="p-8 sm:p-10 border-border/50 bg-card hover:border-primary/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-foreground tracking-tight">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {section.content}
                      </p>
                      {section.list && (
                        <ul className="grid grid-cols-1 gap-3 pt-2">
                          {section.list.map((item, j) => (
                            <li key={j} className="flex gap-3 items-start text-muted-foreground">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-sm font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Contact Card */}
              <Card className="p-10 border-primary/20 bg-primary/5 text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                   <h2 className="text-3xl font-black text-foreground tracking-tight">Have Questions?</h2>
                   <p className="text-muted-foreground max-w-md mx-auto">
                     If you have any questions about these Terms of Service, please don't hesitate to contact us.
                   </p>
                </div>
                <div className="pt-2">
                   <a href={`mailto:${SITE_EMAIL}`} className="text-xl font-bold text-primary hover:underline">
                     {SITE_EMAIL}
                   </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
