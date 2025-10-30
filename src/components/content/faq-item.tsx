'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface FAQItemProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string
  answer: string
  defaultOpen?: boolean
}

export const FAQItem = ({
  question,
  answer,
  defaultOpen = false,
  className,
  ...props
}: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const id = React.useId()
  const buttonId = `${id}-trigger`

  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950',
        className,
      )}
      {...props}
    >
      <button
        id={buttonId}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{question}</span>
        <ChevronDown
          className={cn('h-5 w-5 flex-none text-slate-500 transition-transform', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400"
      >
        {answer}
      </div>
    </div>
  )
}
