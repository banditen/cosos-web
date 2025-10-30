import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      variant: {
        default:
          'bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-500 active:bg-primary-700',
        secondary:
          'bg-slate-900 text-white shadow-sm hover:bg-slate-800 active:bg-slate-950',
        outline:
          'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100',
        ghost: 'text-slate-900 hover:bg-slate-100 active:bg-slate-200',
        link: 'text-primary-600 underline-offset-4 hover:underline',
        subtle:
          'bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-7 text-base',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth, asChild = false, type = 'button', ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        type={asChild ? undefined : type}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }