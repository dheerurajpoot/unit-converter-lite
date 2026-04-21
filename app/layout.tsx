import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_AUTHOR, SITE_NAME } from '@/lib/constant'
import Script from 'next/script'
import Header from '@/components/header'
import Footer from '@/components/footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: 'unit converter, length converter, weight converter, temperature converter, volume converter, conversion tool',
  authors: [{ name: `${SITE_NAME} Team` }],
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

const analyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
  });
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        {/* Google Analytics */}
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with your Google Analytics ID
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: analyticsScript,
					}}
				/>
				{/* Google Search Console */}
				<meta name="google-site-verification" content="TxmexGzxRMEa83YuMpgP46SvZ4Bxo3KsWHADvOQ387Y" />
				<Script
					strategy='afterInteractive'
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3612241166480319' // Replace with your AdSense ID
					crossOrigin='anonymous'
				/>
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
