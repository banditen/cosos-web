import {
  CTABanner,
  FAQItem,
  FeatureCard,
  PricingCard,
  SocialProof,
  TestimonialCard,
} from '@/components/content'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout'
import { iconLibrary, siteConfig } from '@/config/site'

export default function Home() {
  const { hero, socialProof, features, workflow, pricing, faqs, testimonials, callToAction } = siteConfig

  return (
    <main className="flex flex-col gap-24 pb-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        <Container className="relative space-y-16 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 shadow-sm dark:border-primary-400/40 dark:bg-slate-950 dark:text-primary-300">
              {hero.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">{hero.description}</p>
            <p className="mt-4 text-base font-medium text-primary-700 dark:text-primary-300">
              {hero.highlight}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg">
                <a href={callToAction.primary.href}>{callToAction.primary.label}</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={callToAction.secondary.href}>{callToAction.secondary.label}</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-left shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70"
              >
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <SocialProof caption={socialProof.caption} partners={socialProof.partners} />
        </Container>
      </div>

      <Section
        id="features"
        eyebrow="Capabilities"
        title="Everything you need to operate like a pro"
        description="COSOS keeps leaders focused, aligned, and moving faster with AI-native workflows."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = iconLibrary[feature.icon]
            return (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={Icon}
                highlights={feature.highlights}
                variant={index === 0 ? 'highlight' : 'default'}
              />
            )
          })}
        </div>
      </Section>

      <Section
        id="how-it-works"
        eyebrow="How it works"
        title="Spin up your AI chief of staff in minutes"
        description="Connect the tools you use today and let COSOS handle the orchestration."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-semibold text-white">
                {step.step}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Simple plans with powerful outcomes"
        description="Pick the plan that matches your ambition. Start now and upgrade as your team scales."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {pricing.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              frequency={tier.frequency}
              description={tier.description}
              features={tier.features}
              ctaLabel={tier.cta.label}
              ctaHref={tier.cta.href}
              variant={tier.highlighted ? 'featured' : 'default'}
            />
          ))}
        </div>
      </Section>

      <Section
        id="testimonials"
        eyebrow="Testimonials"
        title="Loved by high-velocity teams"
        description="Operators, investors, and founders rely on COSOS to stay ahead of every opportunity."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Answers to common questions"
        description="Can’t find what you need? Reach out and our team will get back quickly."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </Section>

      <Section containerClassName="gap-0 items-center">
        <CTABanner
          title={siteConfig.footer.cta.title}
          description={siteConfig.footer.cta.description}
          primaryAction={siteConfig.footer.cta.primary}
          secondaryAction={siteConfig.footer.cta.secondary}
        />
      </Section>
    </main>
import type { Metadata } from 'next'

import { Faq } from '@/components/landing/faq'
import { Features } from '@/components/landing/features'
import { FinalCta } from '@/components/landing/final-cta'
import { Flow } from '@/components/landing/flow'
import { Footer } from '@/components/landing/footer'
import { Hero } from '@/components/landing/hero'
import { Showcase } from '@/components/landing/showcase'
import { SocialProof } from '@/components/landing/social-proof'
import { Testimonials } from '@/components/landing/testimonials'
import { SiteHeader } from '@/components/layout/site-header'
import { landingContent } from '@/content/landing'
import { siteContent } from '@/content/site'
import { getSiteUrl } from '@/lib/site-config'

const pageTitle = 'COSOS — AI Chief of Staff for founders who move fast'
const pageDescription =
  'Orchestrate your week with COSOS. Daily briefs, proactive follow-ups, and defended focus time keep every deliverable on track.'
const pageUrl = getSiteUrl()
const socialPreviewImage = getSiteUrl('/og-image.svg')

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    siteName: 'COSOS',
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: 'Preview of the COSOS workspace displaying briefs, follow-ups, and focus time blocks.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [socialPreviewImage],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <SiteHeader content={siteContent.navigation} activePath="/" />
      <main className="flex-1">
        <Hero content={landingContent.hero} />
        <SocialProof content={landingContent.socialProof} />
        <Features content={landingContent.featureGroups} />
        <Flow content={landingContent.flow} />
        <Showcase content={landingContent.showcase} />
        <Testimonials content={landingContent.testimonials} />
        <Faq content={landingContent.faqs} />
        <FinalCta content={landingContent.finalCta} />
      </main>
      <Footer content={siteContent.footer} />
    </div>
  )
}
