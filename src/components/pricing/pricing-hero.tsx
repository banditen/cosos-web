import Link from 'next/link'

import { Button } from '@/components/ui/button'
import type { pricingContent } from '@/content/pricing'
import { getAppUrl } from '@/lib/site-config'

import { CheckIcon } from './shared-icons'

type HeroContent = (typeof pricingContent)['hero']

export function PricingHero({ content }: { content: HeroContent }) {
  const primaryHref = getAppUrl(content.primaryCtaPath)

  return (
    <section aria-labelledby="pricing-hero-heading" className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-6rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-500/30 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-8rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-primary-300/20 blur-[120px] motion-safe:animate-float-slow"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">{content.eyebrow}</p>
        <h1 id="pricing-hero-heading" className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {content.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-200 sm:text-xl">{content.description}</p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200 sm:text-base">
          {content.supportingPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-400/30 text-primary-100">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button asChild size="lg" className="shadow-lg shadow-primary-500/30">
            <Link href={primaryHref} aria-label={content.primaryCtaLabel}>
              {content.primaryCtaLabel}
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="bg-white/10 text-white hover:bg-white/20 active:bg-white/30">
            <Link href={content.secondaryCtaHref}>{content.secondaryCtaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
