import type { pricingContent } from '@/content/pricing'

import { CheckIcon } from './shared-icons'

type ComparisonContent = (typeof pricingContent)['comparison']

type PlanId = ComparisonContent['plans'][number]['id']

type FeatureValue = string | boolean

function renderValue(value: FeatureValue) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex items-center gap-2 text-sm text-white">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary-400/50 bg-primary-500/20 text-primary-100">
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
        Included
      </span>
    ) : (
      <span className="text-sm text-slate-400">
        <span aria-hidden="true">—</span>
        <span className="sr-only">Not included</span>
      </span>
    )
  }

  return <span className="text-sm text-slate-200 sm:text-base">{value}</span>
}

export function FeatureComparison({ content }: { content: ComparisonContent }) {
  return (
    <section aria-labelledby="comparison-heading" className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">Compare</p>
          <h2 id="comparison-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">{content.description}</p>
        </div>
        <div className="mt-12 hidden overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur lg:block">
          <table className="min-w-full divide-y divide-white/10 text-left">
            <caption className="sr-only">COSOS plan comparison</caption>
            <thead className="text-sm uppercase tracking-wide text-slate-300">
              <tr>
                <th scope="col" className="px-6 py-5 font-semibold text-slate-200">
                  Capability
                </th>
                {content.plans.map((plan) => (
                  <th key={plan.id} scope="col" className="px-6 py-5 font-semibold text-slate-200">
                    {plan.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {content.features.map((feature) => (
                <tr key={feature.name}>
                  <th
                    scope="row"
                    className="px-6 py-5 text-left text-sm font-semibold text-white"
                  >
                    {feature.name}
                  </th>
                  {content.plans.map((plan) => (
                    <td key={plan.id} className="px-6 py-5 align-top">
                      {renderValue((feature.values as Record<PlanId, FeatureValue>)[plan.id])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 space-y-6 lg:hidden">
          {content.features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              <dl className="mt-4 grid gap-4">
                {content.plans.map((plan) => (
                  <div key={plan.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-sm font-semibold text-slate-200">{plan.label}</dt>
                    <dd className="mt-2 text-base text-white">
                      {renderValue((feature.values as Record<PlanId, FeatureValue>)[plan.id])}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        {content.footnotes?.length ? (
          <div className="mt-10 space-y-3 text-left text-sm text-slate-300 sm:text-base">
            {content.footnotes.map((note, index) => (
              <p key={note}>
                <span className="mr-2 font-semibold text-primary-300">{index + 1}.</span>
                {note}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
