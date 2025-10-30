import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}
        {...props}
      />
    )
  },
)

Container.displayName = 'Container'
