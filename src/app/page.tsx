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
import { SiteHeader } from '@/components/layout/site-header'
import { landingContent } from '@/content/landing'
import { siteContent } from '@/content/site'
import { getSiteUrl } from '@/lib/site-config'

const pageTitle = 'COSOS — AI Chief of Staff for founders who move fast'
const pageDescription =
  'Orchestrate your week with COSOS. Daily briefs, proactive follow-ups, and defended focus time keep every deliverable on track.'
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
        alt: 'Preview of the COSOS workspace displaying briefs, follow-ups, and focus time blocks.',
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
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <SiteHeader content={siteContent.navigation} activePath="/" />
      <main className="flex-1">
        <Hero content={landingContent.hero} />
        <SocialProof content={landingContent.socialProof} />
        <Features content={landingContent.featureGroups} />
        <Flow content={landingContent.flow} />
        <Showcase content={landingContent.showcase} />
        <Testimonials content={landingContent.testimonials} />
        <Faq content={landingContent.faqs} />
        <FinalCta content={landingContent.finalCta} />
      </main>
      <Footer content={siteContent.footer} />
    </div>
  )
}
