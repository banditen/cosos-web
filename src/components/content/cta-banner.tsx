import * as React from 'react'

import { GradientBackground } from '@/components/layout'
import { Button } from '../ui/button'

export interface CTABannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

export const CTABanner = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  ...props
}: CTABannerProps) => {
  return (
    <GradientBackground variant="brand" className="mx-auto w-full max-w-5xl" {...props}>
      <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="text-base text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <Button asChild size="lg">
            <a href={primaryAction.href}>{primaryAction.label}</a>
          </Button>
          {secondaryAction ? (
            <Button asChild variant="ghost" size="lg">
              <a href={secondaryAction.href}>{secondaryAction.label}</a>
            </Button>
          ) : null}
        </div>
      </div>
    </GradientBackground>
  )
}
