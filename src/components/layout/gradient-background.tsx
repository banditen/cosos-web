import * as React from 'react'

import { cn } from '@/lib/utils'

export interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'brand' | 'light' | 'dark'
  overlay?: boolean
}

const variantStyles: Record<NonNullable<GradientBackgroundProps['variant']>, string> = {
  brand: 'from-primary-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
  light: 'from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
  dark: 'from-slate-900 via-slate-950 to-slate-900'
}

export const GradientBackground = React.forwardRef<HTMLDivElement, GradientBackgroundProps>(
  ({ className, children, variant = 'brand', overlay = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br p-1 shadow-sm dark:border-slate-800',
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br transition-opacity',
            variantStyles[variant],
            overlay ? 'opacity-90' : 'opacity-100',
          )}
        />
        <div className="relative z-10 flex h-full w-full flex-col gap-8 rounded-2xl bg-white/80 p-10 backdrop-blur-lg dark:bg-slate-950/70">
          {children}
        </div>
      </div>
    )
  },
)

GradientBackground.displayName = 'GradientBackground'
