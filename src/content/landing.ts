import { siteContent } from './site'

export const landingContent = {
  hero: {
    eyebrow: 'Operate with leverage',
    title: 'Your AI Chief of Staff for focus and follow-through',
    highlight: 'AI Chief of Staff',
    description:
      'COSOS captures commitments across your inbox and calendar, drafts the next best move, and protects the time you need to ship what matters.',
    primaryCtaLabel: 'Launch COSOS',
    secondaryCtaLabel: 'See the product flow',
    secondaryCtaHref: '#product-tour',
    proofPoints: [
      'Daily briefings grounded in your goals',
      'Actionable drafts for quick approvals',
      'Automated prioritization across every input',
    ],
  },
  socialProof: {
    caption: 'Trusted by thoughtful operators from',
    companies: ['Fast-growing SaaS teams', 'Techstars alumni', 'Operator angels', 'Independent studios'],
  },
  featureGroups: {
    primary: {
      title: 'Everything you expect from an elite chief of staff, automated',
      features: [
        {
          title: 'Precision daily briefs',
          description:
            'Wake up to a prioritized agenda that combines meetings, tasks, and draft communications so you know exactly how to win the day.',
          icon: '🗓️',
        },
        {
          title: 'Proactive follow-ups',
          description:
            'Let COSOS craft the next email or update, ready for your review, based on the threads and projects that are heating up.',
          icon: '📬',
        },
        {
          title: 'Focus time defended',
          description:
            'Identify the highest-leverage work and automatically block distraction-free time to get it across the line.',
          icon: '🛡️',
        },
      ],
    },
    secondary: {
      title: 'Built for founders and lean teams',
      features: [
        {
          title: 'Unified source of truth',
          description:
            'Bring email, calendar, and tasks into one adaptive surface that evolves with every decision.',
        },
        {
          title: 'Delegation without friction',
          description:
            'Assign outcomes, capture context, and trust COSOS to keep the loop tight with nudges and recaps.',
        },
        {
          title: 'Momentum analytics',
          description:
            'Track how your focus is allocated and surface leading indicators before they become blockers.',
        },
      ],
    },
  },
  flow: {
    id: 'product-tour',
    title: 'How COSOS keeps you a step ahead',
    steps: [
      {
        title: 'Connect your workspace',
        description: 'Securely link Gmail, Calendar, and the tools you run your business on in minutes.',
        number: '01',
      },
      {
        title: 'Set intentions',
        description: 'Share quarterly goals and near-term priorities so COSOS can weigh every decision the way you do.',
        number: '02',
      },
      {
        title: 'Review your brief',
        description: 'Receive a smart rundown each morning covering meetings, blockers, and ready-to-send drafts.',
        number: '03',
      },
      {
        title: 'Stay in momentum',
        description: 'COSOS monitors execution, follows up with stakeholders, and adjusts the plan as realities shift.',
        number: '04',
      },
    ],
  },
  showcase: {
    title: 'A living workspace that thinks ahead',
    description:
      'See upcoming meetings, flagged risks, and AI-authored drafts in one collaborative surface designed for fast approvals.',
    badge: 'Live preview',
    highlights: [
      { label: 'Active priorities', value: '12' },
      { label: 'Follow-ups drafted', value: '7' },
      { label: 'Hours reclaimed weekly', value: '6.5' },
    ],
  },
  testimonials: {
    title: 'Leaders shipping faster with COSOS',
    items: [
      {
        quote:
          'COSOS keeps my seed-stage team aligned without me living in spreadsheets. The daily brief means I start with clarity instead of cleanup.',
        name: 'Avery Chen',
        role: 'Founder, Relay Labs',
      },
      {
        quote:
          'The follow-up drafts are scarily good. I approve in seconds and move on, which compounding over a week is huge.',
        name: 'Jordan Malik',
        role: 'Operator & Investor',
      },
      {
        quote:
          'It feels like having a chief of staff who already knows our playbook—context stays fresh and the team feels the support.',
        name: 'Sasha Ortiz',
        role: 'Head of Operations, Studio North',
      },
    ],
  },
  faqs: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'How does COSOS access my data?',
        answer:
          'We connect through read-only, permissioned APIs. You control what COSOS can see, and everything is encrypted at rest and in transit.',
      },
      {
        question: 'Can I collaborate with my team?',
        answer:
          'Yes. Invite teammates to share briefs, delegate follow-ups, and keep everyone aligned on priorities without forwarding threads.',
      },
      {
        question: 'What if my priorities change mid-week?',
        answer:
          'Update your focus areas any time and COSOS will re-prioritize briefs, reschedule focus blocks, and update draft communications instantly.',
      },
      {
        question: 'Do you support other tools besides Google?',
        answer:
          'We start with Google Workspace. Slack, Linear, and Notion integrations are available for early partners—ask us during onboarding.',
      },
    ],
  },
  finalCta: {
    title: 'Give yourself the unfair advantage',
    description:
      'Launch COSOS today and run your week with the leverage of an experienced chief of staff—without adding headcount.',
    primaryCtaLabel: 'Open the app',
    secondaryCtaLabel: 'Talk with our team',
    secondaryCtaHref: 'mailto:hello@cosos.xyz',
  },
  footer: siteContent.footer,
} as const
