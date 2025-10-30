import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { pricingContent } from '@/content/pricing'
import { getAppUrl } from '@/lib/app-url'
import { cn } from '@/lib/utils'

import { CheckIcon } from './shared-icons'

type Tier = (typeof pricingContent)['tiers'][number]

interface PricingTiersProps {
  tiers: (typeof pricingContent)['tiers']
  recommendedTierId: (typeof pricingContent)['recommendedTierId']
}

function resolveCtaHref(tier: Tier) {
  const base = getAppUrl(tier.cta.path)
  if (!tier.cta.query) {
    return base
  }

  return `${base}${base.includes('?') ? '&' : '?'}${tier.cta.query}`
}

function badgeClasses(tone: Tier['badge']['tone']) {
  if (tone === 'primary') {
    return 'border-primary-300 bg-primary-50 text-primary-600'
  }

  return 'border-slate-200 bg-slate-100 text-slate-700'
}

export function PricingTiers({ tiers, recommendedTierId }: PricingTiersProps) {
  return (
    <section aria-labelledby="pricing-tiers-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Plans</p>
          <h2 id="pricing-tiers-heading" className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Choose the leverage you need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Every COSOS plan keeps founders in motion. Scale from personal momentum to team-wide orchestration when you're ready.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isRecommended = tier.id === recommendedTierId
            const ctaHref = resolveCtaHref(tier)

            return (
              <Card
                key={tier.id}
                className={cn(
                  'relative flex h-full flex-col overflow-hidden border transition hover:-translate-y-1 hover:shadow-xl',
                  isRecommended
                    ? 'border-primary-500 bg-slate-950 text-white shadow-primary-500/30'
                    : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300',
                )}
              >
                {tier.badge ? (
                  <span
                    role="status"
                    aria-label={tier.badge.label}
                    className={cn(
                      'absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wide',
                      isRecommended ? 'border-primary-400 bg-primary-500/10 text-primary-100' : badgeClasses(tier.badge.tone),
                    )}
                  >
                    {tier.badge.label}
                  </span>
                ) : null}
                <CardHeader className={cn('pb-6', isRecommended && 'text-white')}>
                  <CardTitle className={cn('text-2xl font-semibold', isRecommended && 'text-white')}>{tier.name}</CardTitle>
                  <CardDescription className={cn('text-base', isRecommended ? 'text-slate-200' : 'text-slate-600')}>
                    {tier.headline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6 pt-0">
                  <div>
                    <p className={cn('text-4xl font-bold', isRecommended ? 'text-white' : 'text-slate-900')}>
                      {tier.price}
                    </p>
                    <p className={cn('mt-1 text-sm', isRecommended ? 'text-slate-300' : 'text-slate-500')}>
                      {tier.cadence}
                    </p>
                  </div>
                  <p className={cn('text-sm', isRecommended ? 'text-slate-200' : 'text-slate-600')}>{tier.description}</p>
                  <ul className="space-y-3 text-left text-sm">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn('flex items-start gap-3', isRecommended ? 'text-slate-100' : 'text-slate-600')}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border',
                            isRecommended
                              ? 'border-primary-500 bg-primary-500/20 text-primary-100'
                              : 'border-primary-100 bg-primary-50 text-primary-600',
                          )}
                        >
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    variant={isRecommended ? 'secondary' : 'default'}
                    className={cn(
                      'w-full justify-center text-base font-semibold',
                      isRecommended ? 'bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200' : undefined,
                    )}
                    size="lg"
                  >
                    <Link href={ctaHref} aria-label={tier.cta.ariaLabel}>
                      {tier.cta.label}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
