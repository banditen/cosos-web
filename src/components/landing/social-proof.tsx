import type { landingContent } from '@/content/landing'

type SocialProofContent = (typeof landingContent)['socialProof']

export function SocialProof({ content }: { content: SocialProofContent }) {
  return (
    <section aria-label="Customer social proof" className="border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
          {content.caption}
        </p>
        <div className="grid w-full grid-cols-2 gap-6 text-base font-semibold text-slate-600 sm:grid-cols-4">
          {content.companies.map((company) => (
            <span
              key={company}
              className="rounded-full border border-slate-200/80 bg-white px-4 py-3 text-sm uppercase tracking-[0.15em] text-slate-500 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
