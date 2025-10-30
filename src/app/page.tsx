import type { Metadata } from 'next'

import { Faq } from '@/components/landing/faq'
import { Features } from '@/components/landing/features'
import { FinalCta } from '@/components/landing/final-cta'
import { Flow } from '@/components/landing/flow'
import { Footer } from '@/components/landing/footer'
import { Hero } from '@/components/landing/hero'
import { Showcase } from '@/components/landing/showcase'
import { SocialProof } from '@/components/landing/social-proof'
import { Testimonials } from '@/components/landing/testimonials'
import { landingContent } from '@/content/landing'

const pageTitle = 'COSOS — AI Chief of Staff for founders who move fast'
const pageDescription =
  'Orchestrate your week with COSOS. Daily briefs, proactive follow-ups, and defended focus time keep every deliverable on track.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: ['/og-image.svg'],
    url: 'https://cosos.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-image.svg'],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main>
        <Hero content={landingContent.hero} />
        <SocialProof content={landingContent.socialProof} />
        <Features content={landingContent.featureGroups} />
        <Flow content={landingContent.flow} />
        <Showcase content={landingContent.showcase} />
        <Testimonials content={landingContent.testimonials} />
        <Faq content={landingContent.faqs} />
        <FinalCta content={landingContent.finalCta} />
      </main>
      <Footer content={landingContent.footer} />
    </div>
  )
}
