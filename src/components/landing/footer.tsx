import Link from 'next/link'

import { getAppUrl } from '@/lib/site-config'

import type { siteContent } from '@/content/site'

type FooterContent = (typeof siteContent)['footer']

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer aria-label="Footer" className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-lg font-semibold text-slate-900 dark:text-white">
              COSOS
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{content.blurb}</p>
          </div>
          <nav aria-label="Product" className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Product</p>
            <ul className="space-y-3">
              {content.productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={getAppUrl(link.path)}
                    className="transition hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company" className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Company</p>
            <ul className="space-y-3">
              {content.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-primary-600 dark:hover:text-primary-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {content.legal}
        </div>
      </div>
    </footer>
  )
}
