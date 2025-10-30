import type { landingContent } from '@/content/landing'

type FlowContent = (typeof landingContent)['flow']

export function Flow({ content }: { content: FlowContent }) {
  return (
    <section
      id={content.id}
      aria-labelledby="flow-heading"
      className="bg-slate-950 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
            Operating rhythm
          </p>
          <h2 id="flow-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
            {content.title}
          </h2>
        </div>
        <ol className="mt-16 grid gap-8 sm:grid-cols-2">
          {content.steps.map((step) => (
            <li
              key={step.number}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-primary-300/40"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-base text-slate-200">{step.description}</p>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 bottom-6 h-px bg-gradient-to-r from-primary-400/0 via-primary-400/60 to-primary-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
