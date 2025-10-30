import type { pricingContent } from '@/content/pricing'

import { cn } from '@/lib/utils'

type PricingFaqContent = (typeof pricingContent)['faq']

export function PricingFaq({ content }: { content: PricingFaqContent }) {
  return (
    <section id="pricing-faq" aria-labelledby="pricing-faq-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">FAQ</p>
          <h2 id="pricing-faq-heading" className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {content.items.map((item, index) => (
            <details
              key={item.question}
              className={cn(
                'group rounded-3xl border border-slate-200 bg-white p-6 text-left transition hover:border-primary-200 hover:shadow-md sm:p-8',
                index === 0 && 'open:border-primary-300 open:shadow-lg',
              )}
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-base text-slate-600 transition group-open:rotate-45 group-open:border-primary-300 group-open:text-primary-600"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-base text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
