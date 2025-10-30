import * as React from 'react'
import { CheckCircle2, type LucideIcon } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const featureCardVariants = cva(
  'flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950',
  {
    variants: {
      variant: {
        default: '',
        highlight:
          'border-transparent bg-slate-900 text-slate-100 shadow-lg ring-1 ring-slate-900/60 dark:bg-primary-600 dark:text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  title: string
  description: string
  icon: LucideIcon
  highlights?: readonly string[]
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  highlights,
  variant,
  className,
  ...props
}: FeatureCardProps) => {
  const isHighlight = variant === 'highlight'

  return (
    <div className={cn(featureCardVariants({ variant }), className)} {...props}>
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-200',
          isHighlight && 'bg-white/10 text-white dark:bg-white/20',
        )}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className={cn('text-sm text-slate-600 dark:text-slate-400', isHighlight && 'text-slate-200 dark:text-white/80')}>
          {description}
        </p>
      </div>
      {highlights?.length ? (
        <ul className="mt-auto space-y-2 text-sm">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2
                className={cn(
                  'mt-0.5 h-4 w-4 flex-none text-primary-500 dark:text-primary-300',
                  isHighlight && 'text-emerald-400',
                )}
                aria-hidden="true"
              />
              <span className={cn(isHighlight ? 'text-slate-100/90' : 'text-slate-600 dark:text-slate-400')}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
