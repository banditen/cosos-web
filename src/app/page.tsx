import type { Metadata } from 'next'

import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { ValueProp } from '@/components/ValueProp'
import { Features } from '@/components/Features'
import { Security } from '@/components/Security'
import { Integrations } from '@/components/Integrations'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { getSiteUrl } from '@/lib/site-config'

const pageTitle = 'COSOS — Command Center for Executive Intelligence'
const pageDescription =
  'The proactive AI decision-maker for solopreneurs and early-stage CEOs. Know if you\'re winning, every single day.'
const pageUrl = getSiteUrl()
const socialPreviewImage = getSiteUrl('/og-image.svg')

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    siteName: 'COSOS',
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: 'Preview of the COSOS command center displaying executive intelligence and strategic priorities.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [socialPreviewImage],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ValueProp />
        <Features />
        <Security />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
