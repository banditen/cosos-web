import type { landingContent } from '@/content/landing'

type FeatureGroups = (typeof landingContent)['featureGroups']

type FeatureProps = {
  content: FeatureGroups
}

export function Features({ content }: FeatureProps) {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
              Capabilities
            </p>
            <h2 id="features-heading" className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {content.primary.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.primary.features.map((feature) => (
              <article
                key={feature.title}
                className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-2xl">
                  {feature.icon}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base text-slate-600">{feature.description}</p>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 bottom-6 h-1 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 transition-opacity duration-300 group-hover:opacity-40"
                />
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
              Designed for momentum
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {content.secondary.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.secondary.features.map((feature) => (
              <article
                key={feature.title}
                className="flex h-full flex-col rounded-3xl border border-dashed border-primary-200/60 bg-primary-50/60 p-8 shadow-inner transition hover:border-primary-300"
              >
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
