import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { Inter, Spline_Sans, Space_Grotesk } from 'next/font/google'

import { siteConfig } from '@/lib/site-config'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const splineSans = Spline_Sans({ subsets: ['latin'], variable: '--font-spline', display: 'swap', weight: ['300', '400', '500', '600', '700'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })

const defaultTitle = 'COSOS — Command Center for Executive Intelligence'
const defaultDescription =
  'The proactive AI decision-maker for solopreneurs and early-stage CEOs. Know if you\'re winning, every single day.'
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
    name: 'COSOS Command Center for Executive Intelligence',
    description:
      'Proactive AI decision-maker that transforms business execution from reactive chaos into strategic clarity for solopreneurs and early-stage CEOs.',
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
    'proactive AI decision-maker',
    'command center for executives',
    'business intelligence for founders',
    'strategic clarity',
    'solopreneur productivity',
    'early-stage CEO tools',
    'business progress tracking',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${splineSans.variable} ${spaceGrotesk.variable}`}>
        <Script
          id="cosos-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
        {children}
      </body>
    </html>
  )
}
