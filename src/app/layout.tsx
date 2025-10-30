import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navigation'
import { cn } from '@/lib/utils'
import { AnalyticsPlaceholder } from '@/components/system/analytics-placeholder'
import { ThemeScript } from '@/components/system/theme-script'
import { siteConfig } from '@/lib/site-config'

import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const defaultTitle = 'COSOS — AI Chief of Staff for Founders'
const defaultDescription =
  'Your AI-powered chief of staff that helps founders and solopreneurs focus on what matters most.'
const socialPreview = siteConfig.getSiteUrl('/og-image.svg')
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'COSOS',
    url: siteConfig.getSiteUrl(),
    logo: siteConfig.getSiteUrl('/icon-512x512.png'),
    description: defaultDescription,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@cosos.xyz',
        areaServed: 'Global',
        availableLanguage: ['English'],
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'COSOS AI Chief of Staff',
    description:
      'Automated briefs, proactive follow-ups, and defended focus time to keep founders and lean teams in momentum.',
    brand: {
      '@type': 'Brand',
      name: 'COSOS',
    },
    url: siteConfig.getSiteUrl(),
    offers: [
      {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        name: 'Starter plan',
        url: siteConfig.getAppUrl(),
      },
      {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        name: 'Pro plan',
        url: siteConfig.getAppUrl('?plan=pro'),
      },
    ],
  },
]
const structuredDataJson = JSON.stringify(structuredData)

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

export const metadata: Metadata = {
  metadataBase: siteConfig.metadataBase,
  title: {
    default: defaultTitle,
    template: '%s | COSOS',
  },
  description: defaultDescription,
  applicationName: 'COSOS',
  generator: 'Next.js',
  keywords: [
    'AI chief of staff',
    'founder productivity',
    'daily brief automation',
    'startup operations',
    'follow-up automation',
    'focus time management',
  ],
  category: 'Productivity',
  creator: 'COSOS Team',
  publisher: 'COSOS',
  alternates: {
    canonical: siteConfig.getSiteUrl(),
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'COSOS',
    title: defaultTitle,
    description: defaultDescription,
    url: siteConfig.getSiteUrl(),
    images: [
      {
        url: socialPreview,
        width: 1200,
        height: 630,
        alt: 'Preview of the COSOS AI chief of staff workspace.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [socialPreview],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  other: {
    'msapplication-TileColor': '#0ea5e9',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="light" data-theme="light" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100`}
      >
        <ThemeScript />
        <Script
          id="cosos-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AnalyticsPlaceholder />
      </body>
    </html>
  )
}