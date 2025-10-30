import type { pricingContent } from '@/content/pricing'

import { CheckIcon } from './shared-icons'

type PricingTestimonialContent = (typeof pricingContent)['testimonial']

export function PricingTestimonial({ content }: { content: PricingTestimonialContent }) {
  return (
    <section aria-labelledby="pricing-testimonial-heading" className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.3em] text-primary-200">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary-400/40 bg-primary-500/10 text-primary-100">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          Proof in the field
        </div>
        <h2 id="pricing-testimonial-heading" className="mt-8 text-3xl font-bold sm:text-4xl">
          Operators are reclaiming their time
        </h2>
        <blockquote className="mt-8 text-xl leading-relaxed text-slate-100 sm:text-2xl">
          “{content.quote}”
        </blockquote>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">
          {content.name}
        </p>
        <p className="mt-2 text-base text-slate-300">{content.role}</p>
      </div>
    </section>
  )
}
