export type ThemeMode = 'light' | 'dark'

export const designTokens = {
  fonts: {
    sans: '"Inter", "Plus Jakarta Sans", "SF Pro Text", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
  },
  colors: {
    light: {
      background: 'hsl(214 41% 97%)',
      foreground: 'hsl(227 29% 13%)',
      surface: 'hsl(0 0% 100%)',
      border: 'hsl(213 28% 82%)',
      muted: 'hsl(215 32% 93%)',
      mutedForeground: 'hsl(227 17% 48%)',
      accent: 'hsl(245 84% 63%)',
      accentForeground: 'hsl(226 100% 97%)',
      accentSubtle: 'hsl(245 84% 92%)',
      success: 'hsl(150 62% 45%)',
      warning: 'hsl(38 96% 55%)',
      danger: 'hsl(3 81% 56%)',
      gradient: {
        angle: '140deg',
        start: 'hsl(214 82% 97%)',
        middle: 'hsl(243 83% 90%)',
        end: 'hsl(221 83% 82%)',
      },
    },
    dark: {
      background: 'hsl(224 45% 10%)',
      foreground: 'hsl(214 31% 92%)',
      surface: 'hsl(225 34% 17%)',
      border: 'hsl(224 26% 32%)',
      muted: 'hsl(223 30% 22%)',
      mutedForeground: 'hsl(217 16% 72%)',
      accent: 'hsl(220 86% 66%)',
      accentForeground: 'hsl(224 45% 10%)',
      accentSubtle: 'hsl(220 86% 32%)',
      success: 'hsl(148 57% 52%)',
      warning: 'hsl(44 92% 62%)',
      danger: 'hsl(356 72% 63%)',
      gradient: {
        angle: '140deg',
        start: 'hsl(222 49% 18%)',
        middle: 'hsl(258 53% 24%)',
        end: 'hsl(205 65% 24%)',
      },
    },
  },
  radii: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.25rem',
    pill: '999px',
  },
  spacing: {
    space3xs: 'clamp(0.25rem, 0.21rem + 0.25vw, 0.45rem)',
    space2xs: 'clamp(0.5rem, 0.42rem + 0.4vw, 0.75rem)',
    spaceXs: 'clamp(0.75rem, 0.6rem + 0.55vw, 1.15rem)',
    spaceSm: 'clamp(1rem, 0.8rem + 0.8vw, 1.8rem)',
    spaceMd: 'clamp(1.5rem, 1.1rem + 1.2vw, 2.6rem)',
    spaceLg: 'clamp(2.25rem, 1.6rem + 1.7vw, 3.5rem)',
    spaceXl: 'clamp(3rem, 2rem + 2.6vw, 4.75rem)',
    space2xl: 'clamp(4rem, 2.8rem + 3.5vw, 6.5rem)',
  },
  shadows: {
    soft: '0 28px 58px -32px rgba(15, 23, 42, 0.35), 0 18px 40px -24px rgba(30, 41, 59, 0.25)',
    softDark: '0 28px 60px -28px rgba(8, 18, 35, 0.72), 0 18px 36px -16px rgba(6, 22, 44, 0.6)',
  },
}

export const getThemeTokens = (mode: ThemeMode = 'light') => ({
  fonts: designTokens.fonts,
  colors: designTokens.colors[mode],
  radii: designTokens.radii,
  spacing: designTokens.spacing,
  shadows: mode === 'light' ? { soft: designTokens.shadows.soft } : { soft: designTokens.shadows.softDark },
})
