import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getAppUrl } from '@/lib/app-url'

import type { landingContent } from '@/content/landing'

type FinalCtaContent = (typeof landingContent)['finalCta']

export function FinalCta({ content }: { content: FinalCtaContent }) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="final-cta-heading" className="text-3xl font-bold sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 text-lg text-primary-100 sm:text-xl">{content.description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={getAppUrl()} aria-label="Open the COSOS app">
              {content.primaryCtaLabel}
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
            <Link href={content.secondaryCtaHref}>{content.secondaryCtaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
