import {
  BarChart3,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Globe,
  Linkedin,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Twitter,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

export const iconLibrary = {
  clipboardList: ClipboardList,
  target: Target,
  rocket: Rocket,
  sparkles: Sparkles,
  shieldCheck: ShieldCheck,
  calendarClock: CalendarClock,
  barChart: BarChart3,
  briefcase: Briefcase,
  users: Users,
  messageSquare: MessageSquare,
  checkCircle: CheckCircle2,
  globe: Globe,
  linkedin: Linkedin,
  twitter: Twitter,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconLibrary

export type NavItem = {
  title: string
  href: string
}

export type CallToAction = {
  label: string
  href: string
}

export type Feature = {
  title: string
  description: string
  icon: IconName
  highlights?: string[]
}

export type WorkflowStep = {
  title: string
  description: string
  step: number
}

export type PricingTier = {
  name: string
  price: string
  frequency: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: CallToAction
}

export type FAQ = {
  question: string
  answer: string
}

export type Testimonial = {
  name: string
  title: string
  company: string
  quote: string
}

export type FooterLink = {
  label: string
  href: string
}

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export type SocialLink = {
  label: string
  href: string
  icon: IconName
}

export const siteConfig = {
  name: 'COSOS',
  description:
    'Your AI-powered Chief of Staff that helps founders and solopreneurs focus on what matters most.',
  appUrl,
  mainNav: [
    { title: 'Features', href: '#features' },
    { title: 'How it works', href: '#how-it-works' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'FAQ', href: '#faq' },
  ] satisfies NavItem[],
  callToAction: {
    primary: {
      label: 'Get Started Free',
      href: appUrl,
    },
    secondary: {
      label: 'View Product Tour',
      href: '#how-it-works',
    },
  } satisfies { primary: CallToAction; secondary: CallToAction },
  hero: {
    eyebrow: 'AI Chief of Staff',
    title: 'Meet Your AI Chief of Staff',
    highlight: 'Focus on what moves the business forward.',
    description:
      'COSOS unifies your emails, calendar, and tasks to surface the work that matters, automate follow-ups, and keep every project on track.',
    stats: [
      { label: 'Avg. hours saved per founder each week', value: '10+' },
      { label: 'Follow-up tasks completed automatically', value: '3x' },
    ],
  },
  socialProof: {
    caption: 'Backed by operators from',
    partners: ['YC', '500 Startups', 'Product Hunt', 'On Deck'],
  },
  features: [
    {
      title: 'Daily Briefs',
      description:
        'Wake up to a curated brief of priorities, meetings, and the context you need to make decisive moves.',
      icon: 'clipboardList',
      highlights: ['Personalized executive summary', 'Calendar-ready agenda view'],
    },
    {
      title: 'Smart Prioritization',
      description:
        'COSOS analyzes your inbox and calendar to surface bottlenecks before they block growth.',
      icon: 'target',
      highlights: ['Intelligent alerts and nudges', 'Automated follow-up sequences'],
    },
    {
      title: 'Project Insights',
      description:
        'Track every initiative with AI-generated status updates and momentum indicators.',
      icon: 'rocket',
      highlights: ['Health scores for key initiatives', 'Executive-ready summary views'],
    },
    {
      title: 'Founder Dashboard',
      description:
        'Monitor team metrics, deal flow, and capital runway in a single control center.',
      icon: 'barChart',
      highlights: ['Real-time goal tracking', 'AI-suggested experiments'],
    },
  ] satisfies Feature[],
  workflow: [
    {
      step: 1,
      title: 'Connect your apps',
      description: 'Securely link Google, Slack, and the tools your team already uses.',
    },
    {
      step: 2,
      title: 'Share what matters',
      description: 'Tell COSOS about your goals, projects, and current focus areas.',
    },
    {
      step: 3,
      title: 'Let COSOS orchestrate',
      description: 'Receive daily briefs, next best actions, and automated follow-ups.',
    },
    {
      step: 4,
      title: 'Scale with confidence',
      description: 'Track impact over time as COSOS keeps your team aligned.',
    },
  ] satisfies WorkflowStep[],
  pricing: [
    {
      name: 'Founder',
      price: '$29',
      frequency: 'per month',
      description: 'For founders and operators who want an AI chief of staff at their side.',
      features: [
        'AI-generated daily briefs',
        'Priority inbox triage',
        'Calendar intelligence & time blocking',
        'Task capture from email and meetings',
      ],
      highlighted: true,
      cta: {
        label: 'Start Free Trial',
        href: appUrl,
      },
    },
    {
      name: 'Team',
      price: '$79',
      frequency: 'per month',
      description: 'Share COSOS with collaborators, advisors, or your operations team.',
      features: [
        'Everything in Founder',
        'Shared projects & initiative tracking',
        'Weekly executive scorecards',
        'Analyst-grade briefing exports',
      ],
      cta: {
        label: 'Book a Demo',
        href: `${appUrl}/demo`,
      },
    },
  ] satisfies PricingTier[],
  faqs: [
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We use SOC 2 compliant infrastructure, encrypt data in transit and at rest, and only access the information you explicitly authorize.',
    },
    {
      question: 'Can COSOS work with my existing tools?',
      answer:
        'Yes. COSOS connects with Google Workspace today and is rolling out integrations for Notion, Linear, HubSpot, and more this quarter.',
    },
    {
      question: 'How fast can I get value from COSOS?',
      answer:
        'Most founders see value within their first week. The onboarding takes less than five minutes and you receive your first executive brief the next morning.',
    },
    {
      question: 'Do you offer startup or investor pricing?',
      answer:
        'We do! Reach out and our team will tailor a plan that fits your stage, whether you are a solo founder or a platform team.',
    },
  ] satisfies FAQ[],
  testimonials: [
    {
      name: 'Avery Shaw',
      title: 'Founder & CEO',
      company: 'Relay Labs',
      quote:
        'COSOS gives me a trusted operating rhythm. Instead of reacting to my inbox, I start every day with a clear plan and never miss a follow-up.',
    },
    {
      name: 'Diego Martínez',
      title: 'General Partner',
      company: 'Latitude Ventures',
      quote:
        'Our portfolio founders rave about COSOS. The AI brief keeps leadership updates tight and frees up hours every week.',
    },
  ] satisfies Testimonial[],
  footer: {
    blurb:
      'Your AI Chief of Staff for smarter decision-making and operational focus — so you can build what customers love.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Workflow', href: '#how-it-works' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Customers', href: '#testimonials' },
          { label: 'Contact', href: `${appUrl}/contact` },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Product Updates', href: '#updates' },
          { label: 'Security', href: '#security' },
          { label: 'Support', href: `${appUrl}/support` },
        ],
      },
    ] satisfies FooterColumn[],
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cosos', icon: 'linkedin' },
      { label: 'Twitter / X', href: 'https://twitter.com/', icon: 'twitter' },
      { label: 'Website', href: 'https://cosos.xyz', icon: 'globe' },
    ] satisfies SocialLink[],
    socialProof: {
      label: 'Loved by leaders from',
      items: ['YC Alumni', 'Sequoia Scouts', 'Techstars Founders'],
    },
    legal: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
      { label: 'Security', href: '#security' },
    ] satisfies FooterLink[],
    cta: {
      title: 'Ready to focus on what matters most?',
      description:
        'Join operators who trust COSOS to orchestrate their day. Start free — no credit card required.',
      primary: {
        label: 'Get Started',
        href: appUrl,
      },
      secondary: {
        label: 'Talk to our team',
        href: `${appUrl}/demo`,
      },
    },
  },
} as const

export type SiteConfig = typeof siteConfig
