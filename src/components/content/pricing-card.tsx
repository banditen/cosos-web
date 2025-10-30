import * as React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const pricingCardVariants = cva(
  'flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950',
  {
    variants: {
      variant: {
        default: '',
        featured:
          'border-primary-500 bg-gradient-to-br from-primary-500/10 via-white to-primary-500/10 shadow-xl dark:border-primary-400 dark:from-primary-500/10 dark:via-slate-950 dark:to-primary-500/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface PricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardVariants> {
  name: string
  price: string
  frequency: string
  description: string
  features: readonly string[]
  ctaLabel: string
  ctaHref: string
}

export const PricingCard = ({
  name,
  price,
  frequency,
  description,
  features,
  ctaLabel,
  ctaHref,
  variant,
  className,
  ...props
}: PricingCardProps) => {
  const isFeatured = variant === 'featured'

  return (
    <div className={cn(pricingCardVariants({ variant }), className)} {...props}>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300">
          {name}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">{price}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">{frequency}</span>
        </div>
        <p className={cn('text-sm text-slate-600 dark:text-slate-400', isFeatured && 'text-slate-600')}>{description}</p>
      </div>

      <ul className="mt-8 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle2
              className={cn(
                'mt-0.5 h-4 w-4 flex-none text-primary-500 dark:text-primary-300',
                isFeatured && 'text-primary-600 dark:text-primary-200',
              )}
              aria-hidden="true"
            />
            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className="mt-10"
        asChild
        variant={isFeatured ? 'default' : 'outline'}
        fullWidth
      >
        <a href={ctaHref}>{ctaLabel}</a>
      </Button>
    </div>
  )
}
