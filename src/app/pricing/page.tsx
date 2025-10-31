import type { Metadata } from 'next'

import { Navigation } from '@/components/Navigation'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { getSiteUrl } from '@/lib/site-config'

const pricingPageUrl = getSiteUrl('/pricing')
const pricingOgImage = getSiteUrl('/og-image.svg')

export const metadata: Metadata = {
  title: 'COSOS Pricing — Plans that scale with your operating tempo',
  description:
    'Flexible COSOS plans for solopreneurs and early-stage CEOs. Start free with Trial, or unlock full proactive intelligence with Pro.',
  alternates: {
    canonical: pricingPageUrl,
  },
  openGraph: {
    type: 'website',
    siteName: 'COSOS',
    title: 'COSOS Pricing — Plans that scale with your operating tempo',
    description:
      'Flexible COSOS plans for solopreneurs and early-stage CEOs. Start free with Trial, or unlock full proactive intelligence with Pro.',
    url: pricingPageUrl,
    images: [
      {
        url: pricingOgImage,
        width: 1200,
        height: 630,
        alt: 'COSOS Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COSOS Pricing — Plans that scale with your operating tempo',
    description:
      'Flexible COSOS plans for solopreneurs and early-stage CEOs. Start free with Trial, or unlock full proactive intelligence with Pro.',
    images: [pricingOgImage],
  },
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navigation />
      <main className="flex-1">
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
