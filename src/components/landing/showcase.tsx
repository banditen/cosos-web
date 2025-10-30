import type { landingContent } from '@/content/landing'

type ShowcaseContent = (typeof landingContent)['showcase']

export function Showcase({ content }: { content: ShowcaseContent }) {
  return (
    <section
      aria-labelledby="showcase-heading"
      className="bg-gradient-to-b from-white to-primary-50 py-20 sm:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
            {content.badge}
          </p>
          <h2 id="showcase-heading" className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{content.description}</p>
          <dl className="mt-8 grid grid-cols-1 gap-4 text-slate-900 sm:grid-cols-3">
            {content.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <dd className="text-3xl font-semibold text-primary-600">{item.value}</dd>
                <dt className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative w-full max-w-2xl">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary-200/60 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-primary-400/40 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-primary-100/70 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200/70 bg-slate-50/60 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
              </div>
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                COSOS workspace
              </span>
            </div>
            <div className="space-y-4 bg-gradient-to-b from-white to-primary-50/40 p-6">
              <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Upcoming meeting</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Investor sync with Meadow Capital</p>
                <p className="mt-1 text-sm text-slate-600">Brief generated — stakeholder notes auto-attached</p>
              </div>
              <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Risk detected</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Hiring plan slipping behind goal</p>
                <p className="mt-1 text-sm text-slate-600">Recommend sharing updated timeline with leadership</p>
              </div>
              <div className="rounded-2xl border border-dashed border-primary-200/70 bg-white/40 p-5">
                <p className="text-sm text-slate-600">
                  This intelligent canvas adapts as COSOS ingests new signals — keeping your next moves ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
