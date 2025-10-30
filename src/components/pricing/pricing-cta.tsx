import Link from 'next/link'

import { Button } from '@/components/ui/button'
import type { pricingContent } from '@/content/pricing'
import { getAppUrl } from '@/lib/site-config'

type PricingCtaBanner = (typeof pricingContent)['ctaBanner']

export function PricingCta({ content }: { content: PricingCtaBanner }) {
  const primaryHref = getAppUrl(content.primaryCtaPath)

  return (
    <section className="py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-primary-50 via-white to-white px-6 py-16 text-center shadow-[0_30px_80px_-50px_rgba(15,23,42,0.6)] sm:px-16">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-300/30 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 bottom-[-6rem] h-56 w-56 rounded-full bg-primary-500/20 blur-[100px]"
        />
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">{content.eyebrow}</p>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{content.description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button asChild size="lg">
              <Link href={primaryHref} aria-label={content.primaryCtaLabel}>
                {content.primaryCtaLabel}
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200">
              <Link href={content.secondaryCtaHref}>{content.secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
