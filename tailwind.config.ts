import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ['class'],
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--color-background) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        muted: {
          DEFAULT: 'hsl(var(--color-muted) / <alpha-value>)',
          foreground: 'hsl(var(--color-muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
          foreground: 'hsl(var(--color-accent-foreground) / <alpha-value>)',
          subtle: 'hsl(var(--color-accent-subtle) / <alpha-value>)',
        },
        success: 'hsl(var(--color-success) / <alpha-value>)',
        warning: 'hsl(var(--color-warning) / <alpha-value>)',
        danger: 'hsl(var(--color-danger) / <alpha-value>)',
        gradient: {
          start: 'hsl(var(--gradient-start) / <alpha-value>)',
          middle: 'hsl(var(--gradient-middle) / <alpha-value>)',
          end: 'hsl(var(--gradient-end) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display: ['clamp(3.5rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        headline: ['clamp(2.75rem, 6vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        title: ['clamp(2rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        subtitle: ['clamp(1.5rem, 3vw, 1.875rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        lead: ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.005em' }],
        body: ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        caption: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        overline: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      },
      borderRadius: {
        none: '0px',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'calc(var(--radius-xl) + 0.75rem)',
        pill: 'var(--radius-pill)',
      },
      spacing: {
        'space-3xs': 'var(--space-3xs)',
        'space-2xs': 'var(--space-2xs)',
        'space-xs': 'var(--space-xs)',
        'space-sm': 'var(--space-sm)',
        'space-md': 'var(--space-md)',
        'space-lg': 'var(--space-lg)',
        'space-xl': 'var(--space-xl)',
        'space-2xl': 'var(--space-2xl)',
      },
      maxWidth: {
        copy: '65ch',
        content: '72rem',
        section: '80rem',
        'fluid-sm': 'clamp(20rem, 80vw, 40rem)',
        'fluid-md': 'clamp(24rem, 85vw, 54rem)',
        'fluid-lg': 'clamp(28rem, 86vw, 72rem)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        'soft-lg': '0 45px 90px -40px rgba(15, 23, 42, 0.2)',
        'inner-card': 'inset 0 1px 0 rgba(255, 255, 255, 0.35)',
      },
      dropShadow: {
        soft: '0 25px 35px rgba(79, 70, 229, 0.18)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at top, hsl(var(--gradient-start)) 0%, transparent 55%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          backgroundImage:
            'linear-gradient(115deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-middle)) 50%, hsl(var(--gradient-end)) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        },
        '.surface-glass': {
          backgroundColor: 'hsl(var(--color-surface) / 0.78)',
          backdropFilter: 'blur(18px)',
          border: '1px solid hsl(var(--color-border) / 0.45)',
          boxShadow: 'var(--shadow-soft)',
        },
      })
    }),
  ],
}
export default config
