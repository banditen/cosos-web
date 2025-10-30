import type { Metadata } from 'next'

import { Footer } from '@/components/landing/footer'
import { SiteHeader } from '@/components/layout/site-header'
import { FeatureComparison } from '@/components/pricing/feature-comparison'
import { PricingCta } from '@/components/pricing/pricing-cta'
import { PricingFaq } from '@/components/pricing/pricing-faq'
import { PricingHero } from '@/components/pricing/pricing-hero'
import { PricingTestimonial } from '@/components/pricing/pricing-testimonial'
import { PricingTiers } from '@/components/pricing/pricing-tiers'
import { pricingContent, pricingMetadata } from '@/content/pricing'
import { siteContent } from '@/content/site'

export const metadata: Metadata = pricingMetadata

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader content={siteContent.navigation} activePath="/pricing" />
      <main className="flex-1">
        <PricingHero content={pricingContent.hero} />
        <PricingTiers tiers={pricingContent.tiers} recommendedTierId={pricingContent.recommendedTierId} />
        <FeatureComparison content={pricingContent.comparison} />
        <PricingTestimonial content={pricingContent.testimonial} />
        <PricingFaq content={pricingContent.faq} />
        <PricingCta content={pricingContent.ctaBanner} />
      </main>
      <Footer content={siteContent.footer} />
    </div>
  )
}
