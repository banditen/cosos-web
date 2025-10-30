import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SocialProofProps extends React.HTMLAttributes<HTMLDivElement> {
  caption: string
  partners: readonly string[]
}

export const SocialProof = ({ caption, partners, className, ...props }: SocialProofProps) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/60',
        className,
      )}
      {...props}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {caption}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold uppercase text-slate-400 dark:text-slate-500">
        {partners.map((partner) => (
          <span key={partner}>{partner}</span>
        ))}
      </div>
    </div>
  )
}
