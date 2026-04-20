import { Metadata } from 'next'
import { SITE_EMAIL, SITE_NAME, SITE_URL } from '@/lib/constant'

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Read our privacy policy to understand how ${SITE_NAME} handles your data and privacy.`,
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `${SITE_NAME} privacy policy - Learn about our data handling practices.`,
    url: `${SITE_URL}/privacy`,
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                {SITE_NAME} ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website and use our conversion services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {SITE_NAME} collects minimal information. We do not require you to create an account or provide personal information to 
                use our converter tool. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Usage Information:</strong> We may collect information about how you interact with our website through server logs.</li>
                <li><strong>Device Information:</strong> We may collect information about the device you use to access our service, such as browser type and operating system.</li>
                <li><strong>Conversion Data:</strong> We do not store the values you convert. Your conversions are processed locally in your browser.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Improve and optimize our website and converter tool</li>
                <li>Understand how users interact with our service</li>
                <li>Monitor and analyze trends and usage patterns</li>
                <li>Detect, prevent, and address technical and security issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Storage and Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                {SITE_NAME} processes all conversions in your browser. We do not store conversion data on our servers. Your data stays 
                on your device. We implement appropriate technical and organizational measures to maintain the security of any information we 
                do collect, but no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                {SITE_NAME} does not use cookies or tracking technologies for marketing purposes. We do not employ analytics that track 
                you across the web. If we implement any analytics in the future, they will be privacy-focused and non-invasive.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                {SITE_NAME} does not share your information with third parties for marketing or advertising purposes. We only use third-party 
                services that are essential to operating our website and that respect your privacy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Ads and Marketing</h2>
              <p className="text-muted-foreground leading-relaxed">
                {SITE_NAME} is completely ad-free. We do not display advertisements, and we do not engage in targeted marketing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Depending on your location, you may have certain rights regarding your information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>The right to access and receive a copy of your information</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to our use of your information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at {SITE_EMAIL}.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                {SITE_NAME} is a tool for users of all ages. We do not knowingly collect information from children under 13. If we learn 
                that we have collected information from a child under 13, we will delete it immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or 
                regulatory reasons. We will notify you of any significant changes by updating the "Last updated" date at the top of this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-foreground font-semibold mt-3">
                Email: {SITE_EMAIL}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg border border-border mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Our Privacy Commitment</h3>
              <p className="text-muted-foreground">
                We believe in transparency and put your privacy first. {SITE_NAME} is designed to be a simple, 
                privacy-respecting tool that doesn't track you or collect unnecessary data. Your conversions happen in your browser, 
                and we never store them.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
