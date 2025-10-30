const featureHighlights = [
  {
    icon: '📋',
    title: 'Daily Briefs',
    description:
      'Receive intelligent daily briefs that surface your top priorities, focus blocks, and quick wins before your day begins.',
  },
  {
    icon: '🎯',
    title: 'Smart Prioritisation',
    description:
      'COSOS studies your inbox, meetings, and goals to highlight what matters most so you can make confident decisions fast.',
  },
  {
    icon: '🚀',
    title: 'Momentum Management',
    description:
      'Stay ahead with AI-powered project tracking, friction alerts, and nudges that keep your roadmap and rituals in flow.',
  },
]

const onboardingSteps = [
  {
    step: '01',
    title: 'Sign In',
    description: 'Securely connect with Google to sync your workspace.',
  },
  {
    step: '02',
    title: 'Share Context',
    description: 'Tell COSOS about your goals, rituals, and executive cadence.',
  },
  {
    step: '03',
    title: 'Connect Tools',
    description: 'Link Gmail and Calendar so COSOS can orchestrate your day.',
  },
  {
    step: '04',
    title: 'Receive Briefs',
    description: 'Wake up to curated priorities, insights, and next steps.',
  },
]

export default function Home() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  return (
    <div className="min-h-screen overflow-hidden bg-soft-gradient">
      <div className="container flex flex-col gap-space-xl pb-space-xl pt-space-2xl">
        <section className="relative mx-auto flex max-w-section flex-col items-center text-center gap-space-sm">
          <span className="inline-flex items-center gap-2 rounded-pill border border-border/60 bg-surface/80 px-4 py-2 text-caption font-semibold text-muted-foreground shadow-soft">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Launching now in beta
          </span>
          <h1 className="text-display font-semibold tracking-tight text-foreground">
            Meet your <span className="text-gradient">AI Chief of Staff</span>
          </h1>
          <p className="max-w-copy text-lead text-muted-foreground">
            COSOS keeps founders and solo operators focused by translating busy signals into calm priorities, curated time blocks, and momentum-building rituals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={appUrl} className="btn-primary">
              <span>Get started free</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-pill border border-border/60 bg-surface/80 px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-colors duration-200 hover:text-accent"
            >
              <span>See how it works</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
              </svg>
            </a>
          </div>
        </section>

        <section className="grid gap-space-sm md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <article key={feature.title} className="card flex flex-col items-center gap-3 text-center">
              <div className="text-4xl" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-title font-semibold text-foreground">{feature.title}</h3>
              <p className="text-body-sm text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </section>

        <section id="how-it-works" className="flex flex-col gap-space-md">
          <div className="mx-auto max-w-fluid-md text-center">
            <h2 className="text-headline font-semibold text-foreground">How COSOS orchestrates your momentum</h2>
            <p className="mt-4 text-body text-muted-foreground">
              A guided onboarding meets intelligent automation so you can entrust COSOS with your day-to-day rhythm.
            </p>
          </div>
          <div className="grid gap-space-sm md:grid-cols-4">
            {onboardingSteps.map((step) => (
              <article key={step.step} className="surface-glass flex flex-col items-center gap-3 rounded-xl p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-pill bg-accent text-sm font-semibold text-accent-foreground shadow-soft">
                  {step.step}
                </div>
                <h4 className="text-subtitle font-semibold text-foreground">{step.title}</h4>
                <p className="text-body-sm text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-fluid-sm flex-col items-center gap-space-sm text-center">
          <div className="surface-glass w-full rounded-2xl border border-border/60 px-8 py-space-md shadow-soft">
            <h2 className="text-title font-semibold text-foreground">Ready to focus on what matters?</h2>
            <p className="mt-4 text-body text-muted-foreground">
              Join founders already running their days with COSOS and reclaim time for the work only you can do.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href={appUrl} className="btn-primary">
                Start your free trial
              </a>
              <a
                href="mailto:hello@cosos.xyz"
                className="inline-flex items-center gap-2 rounded-pill border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-accent"
              >
                Talk to a specialist
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border/50 bg-surface/80 py-8 backdrop-blur-sm">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-title font-semibold text-foreground">COSOS</h3>
              <p className="max-w-xs text-body-sm text-muted-foreground">
                Your AI Chief of Staff for decisive founders who want clarity, not chaos.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-subtitle font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                <li>
                  <a className="transition-colors hover:text-accent" href={appUrl}>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-accent" href={`${appUrl}/projects`}>
                    Projects
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-accent" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-subtitle font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                <li>
                  <a className="transition-colors hover:text-accent" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-accent" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-accent" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border/40 pt-6 text-center text-body-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} COSOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
