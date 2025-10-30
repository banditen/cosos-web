import {
  CTABanner,
  FAQItem,
  FeatureCard,
  PricingCard,
  SocialProof,
  TestimonialCard,
} from '@/components/content'
import { Container, Section } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { iconLibrary, siteConfig } from '@/config/site'

export default function ComponentPreviewsPage() {
  const featureIcon = iconLibrary[siteConfig.features[0].icon]

  return (
    <main className="pb-24">
      <Container className="space-y-16 py-16">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Component Previews
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Quick smoke-test view for shared marketing components.
            </p>
          </div>
          <Button asChild>
            <a href={siteConfig.appUrl}>Go to App</a>
          </Button>
        </div>

        <Section title="Feature Card" description="CVA-driven feature module with highlight variant." align="left">
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title={siteConfig.features[0].title}
              description={siteConfig.features[0].description}
              icon={featureIcon}
              highlights={siteConfig.features[0].highlights}
              variant="highlight"
            />
            <FeatureCard
              title={siteConfig.features[1].title}
              description={siteConfig.features[1].description}
              icon={iconLibrary[siteConfig.features[1].icon]}
              highlights={siteConfig.features[1].highlights}
            />
          </div>
        </Section>

        <Section title="Pricing" description="Pricing cards showcase tiered plans." align="left">
          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.pricing.map((tier) => (
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

        <Section title="FAQ" description="Expandable accordion component for questions." align="left">
          <div className="grid gap-4 md:grid-cols-2">
            {siteConfig.faqs.slice(0, 2).map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </Section>

        <Section title="Testimonials & Social Proof" align="left">
          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
              />
            ))}
          </div>
          <SocialProof
            className="mt-8"
            caption={siteConfig.socialProof.caption}
            partners={siteConfig.socialProof.partners}
          />
        </Section>

        <Section title="CTA" align="left">
          <CTABanner
            title={siteConfig.footer.cta.title}
            description={siteConfig.footer.cta.description}
            primaryAction={siteConfig.footer.cta.primary}
            secondaryAction={siteConfig.footer.cta.secondary}
          />
        </Section>
      </Container>
    </main>
  )
}
