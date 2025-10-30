import Link from 'next/link'

import { iconLibrary, siteConfig } from '@/config/site'
import { Container } from '../layout'
import { Button } from '../ui/button'

export const Footer = () => {
  const { footer, name } = siteConfig
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white/95 text-slate-600 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-400">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,repeat(3,minmax(0,1fr))]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-base font-bold text-white shadow-sm">
                {name.substring(0, 2)}
              </span>
              <span className="text-lg font-semibold">{name}</span>
            </Link>
            <p className="max-w-xs text-sm text-slate-600 dark:text-slate-400">{footer.blurb}</p>

            {footer.socialProof ? (
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
                  {footer.socialProof.label}
                </span>
                <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase text-slate-400 dark:text-slate-500">
                  {footer.socialProof.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ) : null}

            {footer.social?.length ? (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {footer.social.map((social) => {
                  const Icon = iconLibrary[social.icon]
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-primary-500 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:border-slate-800 dark:text-slate-300 dark:hover:border-primary-400 dark:hover:text-primary-300 dark:focus-visible:ring-offset-slate-950"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                      <span>{social.label}</span>
                    </a>
                  )
                })}
              </div>
            ) : null}
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        className="transition hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:hover:text-primary-300 dark:focus-visible:ring-offset-slate-950"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:hover:text-primary-300 dark:focus-visible:ring-offset-slate-950"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-500/10 via-white to-primary-500/10 p-8 shadow-sm dark:border-primary-500/40 dark:from-primary-500/10 dark:via-slate-950 dark:to-primary-500/5">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {footer.cta.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{footer.cta.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={footer.cta.primary.href}>{footer.cta.primary.label}</a>
                </Button>
                {footer.cta.secondary ? (
                  <Button asChild variant="ghost" size="lg">
                    <a href={footer.cta.secondary.href}>{footer.cta.secondary.label}</a>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            {footer.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:hover:text-primary-300 dark:focus-visible:ring-offset-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-sm">© {year} {name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
