import * as React from 'react'

import { cn } from '@/lib/utils'
import { Container } from './container'

export interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  containerClassName?: string
}

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) => {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)} {...props}>
      <Container className={cn('flex flex-col gap-10', containerClassName)}>
        {(eyebrow || title || description) && (
          <div
            className={cn('flex flex-col gap-3',
              align === 'center' ? 'items-center text-center' : 'text-left',
            )}
          >
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
