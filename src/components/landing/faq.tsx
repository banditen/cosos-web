import type { landingContent } from '@/content/landing'

type FaqContent = (typeof landingContent)['faqs']

export function Faq({ content }: { content: FaqContent }) {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-slate-950 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">FAQ</p>
          <h2 id="faq-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
            {content.title}
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {content.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-primary-300/30 hover:bg-white/10"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-white">
                <span>{item.question}</span>
                <span aria-hidden="true" className="ml-4 text-primary-200 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base text-slate-200">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
