import Link from 'next/link'

import { Button } from '@/components/ui/button'
import type { siteContent } from '@/content/site'
import { getAppUrl } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export type NavigationContent = (typeof siteContent)['navigation']

interface SiteHeaderProps {
  content: NavigationContent
  activePath?: string
}

export function SiteHeader({ content, activePath }: SiteHeaderProps) {
  const ctaHref = getAppUrl(content.cta.path)

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-5 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg"
            aria-label="Go to COSOS home"
          >
            COSOS
          </Link>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-between gap-4 sm:justify-end">
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
              {content.main.map((item) => {
                const isActive = Boolean(
                  activePath && (item.href === activePath || (activePath === '/' && item.href === '/')),
                )

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                        isActive
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                          : 'text-slate-600 hover:text-slate-900 focus-visible:ring-offset-white dark:text-slate-300 dark:hover:text-white dark:focus-visible:ring-offset-slate-900',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <Button asChild size="sm" className="shrink-0">
            <Link href={ctaHref} aria-label={content.cta.ariaLabel}>
              {content.cta.label}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
