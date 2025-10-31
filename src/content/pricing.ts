import type { Metadata } from 'next'

import { getSiteUrl } from '@/lib/site-config'

const pricingPageUrl = getSiteUrl('/pricing')
const pricingOgImage = getSiteUrl('/og-image.svg')

export const pricingMetadata: Metadata = {
  title: 'COSOS Pricing — Plans that scale with your operating tempo',
  description:
    'Flexible COSOS plans for founders and lean teams. Start free, unlock proactive follow-ups with Starter, or bring a full chief of staff experience to your team with Pro.',
  alternates: {
    canonical: pricingPageUrl,
  },
  openGraph: {
    type: 'website',
    siteName: 'COSOS',
    title: 'COSOS Pricing — Plans that scale with your operating tempo',
    description:
      'Choose the COSOS plan that fits your stage. Automate briefs, defend focus time, and orchestrate follow-ups without breaking your stride.',
    url: pricingPageUrl,
    images: [
      {
        url: pricingOgImage,
        width: 1200,
        height: 630,
        alt: 'COSOS pricing tiers highlighting Free, Starter, and Pro options.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COSOS Pricing — Plans that scale with your operating tempo',
    description:
      'Choose the COSOS plan that fits your stage. Automate briefs, defend focus time, and orchestrate follow-ups without breaking your stride.',
    images: [pricingOgImage],
  },
}

export const pricingContent = {
  metadata: pricingMetadata,
  hero: {
    eyebrow: 'Pricing',
    title: 'Command your business at any stage',
    description:
      'Start with proactive intelligence and grow into full strategic command. Every plan delivers clarity and momentum from day one.',
    supportingPoints: ['No hidden fees', 'Cancel anytime', 'SOC2 Type II Certified'],
    primaryCtaLabel: 'Start with COSOS',
    primaryCtaPath: '',
    secondaryCtaLabel: 'Talk with our team',
    secondaryCtaHref: 'mailto:hello@cosos.xyz?subject=COSOS%20pricing',
  },
  tiers: [
    {
      id: 'free' as const,
      name: 'Free',
      headline: 'Explore the daily brief',
      price: '$0',
      cadence: 'per founder, forever',
      description: 'Trial COSOS with a solo workspace and get a feel for focus-protecting briefs.',
      features: ['Single inbox and calendar connection', 'Morning brief preview 3 days per week', 'Suggested focus blocks once per week'],
      badge: {
        label: 'Included in beta',
        tone: 'slate' as const,
      },
      cta: {
        label: 'Start free',
        path: '',
        query: 'plan=free',
        ariaLabel: 'Start COSOS on the free plan',
      },
    },
    {
      id: 'starter' as const,
      name: 'Starter',
      headline: 'Ship with a proactive brief',
      price: '$79',
      cadence: 'per founder, billed monthly',
      description: 'Automate daily briefs, get draft follow-ups, and reclaim deep work without hiring.',
      features: ['Daily briefs with dynamic reprioritization', 'AI-authored follow-up drafts ready to send', 'Automatic focus block defense across calendar'],
      badge: {
        label: 'Recommended',
        tone: 'primary' as const,
      },
      cta: {
        label: 'Start Starter trial',
        path: '',
        query: 'plan=starter',
        ariaLabel: 'Activate COSOS Starter plan',
      },
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      headline: 'Scale your operating rhythm',
      price: '$149',
      cadence: 'per operator, billed monthly',
      description: 'Coordinate investors, teams, and partners with enterprise-grade governance.',
      features: ['Multi-founder and team workspaces', 'Delegation routing with stakeholder updates', 'Priority support with quarterly operating reviews'],
      badge: {
        label: 'Most leverage',
        tone: 'slate' as const,
      },
      cta: {
        label: 'Contact sales',
        path: '',
        query: 'plan=pro',
        ariaLabel: 'Contact COSOS about the Pro plan',
      },
    },
  ],
  recommendedTierId: 'starter' as const,
  comparison: {
    title: 'Compare COSOS plans',
    description: 'Every COSOS plan keeps your week on track. Upgrade for automation depth, delegation workflows, and team-wide orchestration.',
    plans: [
      { id: 'free' as const, label: 'Free' },
      { id: 'starter' as const, label: 'Starter' },
      { id: 'pro' as const, label: 'Pro' },
    ],
    features: [
      {
        name: 'Daily briefing coverage',
        values: {
          free: '3 days / week preview',
          starter: '7 days with reprioritization',
          pro: '7 days + team rollups',
        },
      },
      {
        name: 'AI-authored follow-ups',
        values: {
          free: 'Draft snippets',
          starter: 'Inbox-ready replies',
          pro: 'Sequenced campaigns',
        },
      },
      {
        name: 'Focus time defense',
        values: {
          free: 'Suggested blocks',
          starter: 'Auto calendar blocks',
          pro: 'Cross-team block orchestration',
        },
      },
      {
        name: 'Workspace collaborators',
        values: {
          free: 'Solo founder',
          starter: 'Up to 3 collaborators',
          pro: 'Unlimited with roles',
        },
      },
      {
        name: 'Delegation routing',
        values: {
          free: 'Manual updates',
          starter: 'Smart nudges',
          pro: 'Automated escalations',
        },
      },
      {
        name: 'Support and onboarding',
        values: {
          free: 'Self-serve guides',
          starter: 'Live onboarding call',
          pro: 'Quarterly operating reviews',
        },
      },
    ],
    footnotes: ['Need annual billing or security reviews? Reach out and we will tailor a plan for your team.'],
  },
  faq: {
    title: 'Pricing FAQs',
    items: [
      {
        question: 'Can I switch plans later?',
        answer: 'Yes. Upgrade or downgrade at any time—COSOS will prorate your billing and adjust access instantly.',
      },
      {
        question: 'Do you support annual agreements?',
        answer: 'Annual pricing and procurement reviews are available for Starter and Pro. Contact us and we will prepare a tailored agreement.',
      },
      {
        question: 'Is my data secure?',
        answer: 'COSOS encrypts data at rest and in transit, with SOC2 Type II in progress. Enterprise security reviews are part of the Pro plan onboarding.',
      },
    ],
  },
  testimonial: {
    quote:
      'COSOS keeps our investor updates, follow-ups, and execution loops humming without me living in to-do lists. The Starter plan pays for itself in the first week.',
    name: 'Nalia Trent',
    role: 'Founder & CEO, Courierline',
  },
  ctaBanner: {
    eyebrow: 'Ready to move faster?',
    title: 'Launch COSOS and protect the focus that compounds results',
    description:
      'Founders using COSOS reclaim 6+ hours per week and close loops with more confidence. Start free or talk with us about bringing COSOS to your team.',
    primaryCtaLabel: 'Create your workspace',
    primaryCtaPath: '',
    secondaryCtaLabel: 'Book a walkthrough',
    secondaryCtaHref: 'mailto:hello@cosos.xyz?subject=Book%20a%20COSOS%20walkthrough',
  },
}
