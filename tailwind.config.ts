import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx}',
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Brand colors from screenshot
        brand: {
          blue: '#0066FF',
          'blue-light': '#00D4FF',
          'blue-pale': '#B3E5FC',
          red: '#FF0055',
          'red-bright': '#FF1744',
          yellow: '#FFD600',
          'yellow-bright': '#FFEB3B',
          black: '#000000',
          'gray-dark': '#2C2C2C',
        },
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da7ff',
          400: '#1a8eff',
          500: '#0066FF', // Brand blue
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
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
        'brand': '0 8px 32px rgba(0, 102, 255, 0.15)',
        'brand-lg': '0 16px 48px rgba(0, 102, 255, 0.2)',
      },
      dropShadow: {
        soft: '0 25px 35px rgba(79, 70, 229, 0.18)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at top, hsl(var(--gradient-start)) 0%, transparent 55%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
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
