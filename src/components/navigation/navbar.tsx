'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Container } from '../layout'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export const Navbar = () => {
  const { mainNav, callToAction } = siteConfig

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/75">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-slate-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-slate-100 dark:focus-visible:ring-offset-slate-950"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-base font-bold text-white shadow-sm">
            {siteConfig.name.substring(0, 2)}
          </span>
          <span className="text-base font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-slate-100 dark:focus-visible:ring-offset-slate-950',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {callToAction.secondary ? (
            <Button variant="ghost" asChild>
              <Link href={callToAction.secondary.href}>{callToAction.secondary.label}</Link>
            </Button>
          ) : null}
          <Button asChild>
            <Link href={callToAction.primary.href}>{callToAction.primary.label}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle navigation">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader className="items-start text-left">
                <SheetTitle>{siteConfig.name}</SheetTitle>
                <SheetDescription>{siteConfig.description}</SheetDescription>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
                {mainNav.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus-visible:ring-offset-slate-950"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                {callToAction.secondary ? (
                  <Button variant="outline" fullWidth asChild>
                    <Link href={callToAction.secondary.href}>{callToAction.secondary.label}</Link>
                  </Button>
                ) : null}
                <Button fullWidth asChild>
                  <Link href={callToAction.primary.href}>{callToAction.primary.label}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
