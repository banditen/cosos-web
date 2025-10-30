import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getAppUrl } from '@/lib/app-url'

import type { landingContent } from '@/content/landing'

type HeroContent = (typeof landingContent)['hero']

export function Hero({ content }: { content: HeroContent }) {
  const [beforeHighlight, ...afterParts] = content.title.split(content.highlight)
  const afterHighlight = afterParts.join(content.highlight)
  const shouldHighlight = content.title.includes(content.highlight)

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-8rem] z-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary-500/40 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] z-0 h-[28rem] w-[28rem] rounded-full bg-primary-300/30 blur-[120px] motion-safe:animate-float-slow"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-24 pt-24 sm:px-6 md:flex-row md:items-center md:gap-16 lg:px-8">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200">
            {content.eyebrow}
          </p>
          <h1 id="hero-heading" className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {shouldHighlight ? (
              <>
                {beforeHighlight}
                <span className="bg-gradient-to-r from-primary-200 to-primary-400 bg-clip-text text-transparent">
                  {content.highlight}
                </span>
                {afterHighlight}
              </>
            ) : (
              content.title
            )}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-200 sm:text-xl">
            {content.description}
          </p>
          <ul className="mt-8 grid gap-3 text-left text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
            {content.proofPoints.map((point) => (
              <li
                key={point}
                className="group flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-400/30 text-primary-100"
                >
                  •
                </span>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Button asChild size="lg" className="shadow-lg shadow-primary-500/30">
              <Link href={getAppUrl()} aria-label="Launch COSOS app">
                {content.primaryCtaLabel}
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-white/10 text-white hover:bg-white/20">
              <Link href={content.secondaryCtaHref}>
                {content.secondaryCtaLabel}
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 w-full max-w-md self-center rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:mt-0">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6">
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-primary-400/30 blur-3xl" aria-hidden="true" />
            <div className="grid gap-4 text-left text-sm text-slate-100">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-200">Today&apos;s brief</span>
                <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-semibold text-primary-100">
                  Preview
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-primary-200">Focus block</p>
                <p className="mt-2 text-base font-semibold text-white">Ship investor update draft</p>
                <p className="mt-1 text-sm text-slate-200">45 min protected • Linked to Fundraise initiative</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-primary-200">Follow-up queued</p>
                <p className="mt-2 text-base font-semibold text-white">Send summary to product squad</p>
                <p className="mt-1 text-sm text-slate-200">Draft ready • Attach sprint board highlights</p>
              </div>
              <div className="rounded-xl border border-dashed border-primary-500/40 bg-transparent p-4 text-slate-200">
                <p className="text-sm">COSOS watches for new signals and updates this brief in real time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
