import * as React from 'react'
import { Quote } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  name: string
  title: string
  company: string
}

export const TestimonialCard = ({ quote, name, title, company, className, ...props }: TestimonialCardProps) => {
  return (
    <figure
      className={cn(
        'flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950',
        className,
      )}
      {...props}
    >
      <Quote className="h-8 w-8 text-primary-500" aria-hidden="true" />
      <blockquote className="text-lg font-medium text-slate-900 dark:text-slate-100">
        “{quote}”
      </blockquote>
      <figcaption className="mt-auto">
        <div className="text-base font-semibold text-slate-900 dark:text-slate-100">{name}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {title} · {company}
        </div>
      </figcaption>
    </figure>
  )
}
