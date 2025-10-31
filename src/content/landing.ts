import { siteContent } from './site'

export const landingContent = {
  hero: {
    eyebrow: 'Command Center for Executive Intelligence',
    title: 'The proactive AI decision-maker for solopreneurs and early-stage CEOs',
    highlight: 'proactive AI decision-maker',
    description:
      'Know if you\'re winning, every single day. COSOS analyzes your business every morning, tells you what matters, and shows you the path forward—from day 0.',
    primaryCtaLabel: 'Launch COSOS',
    secondaryCtaLabel: 'See how it works',
    secondaryCtaHref: '#product-tour',
    proofPoints: [
      'Proactive intelligence without prompting',
      'Business progress tracking, not just tasks',
      'Day-0 value from your first sync',
    ],
  },
  socialProof: {
    caption: 'Trusted by thoughtful operators from',
    companies: ['Fast-growing SaaS teams', 'Techstars alumni', 'Operator angels', 'Independent studios'],
  },
  featureGroups: {
    primary: {
      title: 'Proactive intelligence that transforms chaos into clarity',
      features: [
        {
          title: 'Strategic daily briefs',
          description:
            'Every morning, COSOS analyzes your business state and delivers priorities, time blocks, quick wins, and flags—without you asking.',
          icon: '🎯',
        },
        {
          title: 'Business progress tracking',
          description:
            'Know if you\'re winning. Track what matters—revenue, growth, velocity—and see how your daily actions connect to quarterly goals.',
          icon: '📊',
        },
        {
          title: 'Day-0 value delivery',
          description:
            'No setup tax. COSOS delivers actionable insights from your first sync—analyze 19 emails on day 1, generate your first brief immediately.',
          icon: '⚡',
        },
      ],
    },
    secondary: {
      title: 'Built for execution, not coordination',
      features: [
        {
          title: 'Proactive by design',
          description:
            'COSOS doesn\'t wait for you to ask. It analyzes, recommends, and flags risks before they become problems.',
        },
        {
          title: 'Strategic reasoning',
          description:
            'Every priority comes with the "why"—understand how each action moves your business forward toward your goals.',
        },
        {
          title: 'Outcome-focused intelligence',
          description:
            'We measure business outcomes, not task completion. Did revenue increase? Did growth accelerate? Did velocity improve?',
        },
      ],
    },
  },
  flow: {
    id: 'product-tour',
    title: 'From reactive chaos to strategic clarity',
    steps: [
      {
        title: 'Connect your workspace',
        description: 'Securely link Gmail, Calendar, and your business tools. COSOS starts analyzing immediately—no configuration required.',
        number: '01',
      },
      {
        title: 'Share your context',
        description: 'Tell COSOS your mission, stage, goals, and challenges. This becomes the lens for every recommendation.',
        number: '02',
      },
      {
        title: 'Get your first brief',
        description: 'Wake up to proactive intelligence: priorities ranked by impact, time blocks optimized, risks flagged, quick wins surfaced.',
        number: '03',
      },
      {
        title: 'Know if you\'re winning',
        description: 'Track business progress daily. COSOS connects your actions to outcomes and tells you if you\'re on track to hit your goals.',
        number: '04',
      },
    ],
  },
  showcase: {
    title: 'Your command center for business intelligence',
    description:
      'See business progress, strategic priorities, and proactive recommendations in one intelligent dashboard that updates every morning.',
    badge: 'Live preview',
    highlights: [
      { label: 'Business metrics tracked', value: '8' },
      { label: 'Strategic priorities', value: '5' },
      { label: 'Days to first value', value: '0' },
    ],
  },
  testimonials: {
    title: 'CEOs making better decisions with COSOS',
    items: [
      {
        quote:
          'COSOS tells me every morning if I\'m on track to hit my quarterly goals. That clarity alone is worth 10x the price.',
        name: 'Avery Chen',
        role: 'Founder, Relay Labs',
      },
      {
        quote:
          'I used to spend hours figuring out what to prioritize. Now COSOS does it for me—proactively, every day, with strategic reasoning.',
        name: 'Jordan Malik',
        role: 'Operator & Investor',
      },
      {
        quote:
          'Day 0 value is real. Connected my email, got my first brief in 5 minutes. No setup, no configuration—just intelligence.',
        name: 'Sasha Ortiz',
        role: 'CEO, Studio North',
      },
    ],
  },
  faqs: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'How is COSOS different from other AI assistants?',
        answer:
          'COSOS is proactive, not reactive. We analyze your business every morning and tell you what matters—you don\'t have to ask. We measure business outcomes, not task completion. And we deliver value from day 0, not after weeks of setup.',
      },
      {
        question: 'Is my data private and secure?',
        answer:
          'Absolutely. Your AI learns ONLY from your data—no cross-user training. All data is encrypted at rest and in transit with enterprise-grade security. We use row-level security, OAuth 2.0 best practices, and never share or sell your data. Your business intelligence is yours alone.',
      },
      {
        question: 'How quickly can I get value from COSOS?',
        answer:
          'Day 0. Connect your email and calendar, share your business context, and get your first strategic brief in under 5 minutes. No configuration, no setup tax—just immediate intelligence.',
      },
      {
        question: 'What integrations do you support?',
        answer:
          'We start with Gmail and Google Calendar for immediate value. Slack, Linear, and Notion integrations are available for early partners. We\'re adding more based on user demand—let us know what you need.',
      },
    ],
  },
  finalCta: {
    title: 'Know if you\'re winning, every single day',
    description:
      'Transform business execution from reactive chaos into strategic clarity. Start making better decisions with proactive AI intelligence—from day 0.',
    primaryCtaLabel: 'Launch COSOS',
    secondaryCtaLabel: 'Talk with our team',
    secondaryCtaHref: 'mailto:hello@cosos.xyz',
  },
  footer: siteContent.footer,
} as const
