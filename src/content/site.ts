export const siteContent = {
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Product tour', href: '/#product-tour' },
      { label: 'FAQs', href: '/#faqs' },
    ],
    cta: {
      label: 'Launch COSOS',
      path: '',
      ariaLabel: 'Open the COSOS app',
    },
  },
  footer: {
    blurb: 'COSOS is the AI chief of staff that keeps founders and lean teams focused on the moves that matter.',
    productLinks: [
      { label: 'App home', path: '/' },
      { label: 'Projects', path: '/projects' },
      { label: 'Brief archive', path: '/briefs' },
    ],
    companyLinks: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Product tour', href: '/#product-tour' },
      { label: 'FAQs', href: '/#faqs' },
      { label: 'Press', href: 'mailto:press@cosos.xyz' },
    ],
    legal: '© 2024 COSOS. All rights reserved.',
  },
} as const
