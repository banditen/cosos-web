import Script from 'next/script'

const themeInitializer = `(function themeInit(){
  const storageKey = 'cosos-theme'
  const classList = document.documentElement.classList
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme
    if (theme === 'dark') {
      classList.add('dark')
    } else {
      classList.remove('dark')
    }
  }
  try {
    const stored = window.localStorage.getItem(storageKey)
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const initial = stored || (media.matches ? 'dark' : 'light')
    setTheme(initial)
    window.__cososTheme = {
      set(theme) {
        window.localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
      clear() {
        window.localStorage.removeItem(storageKey)
        setTheme(media.matches ? 'dark' : 'light')
      },
    }
    media.addEventListener('change', (event) => {
      if (!window.localStorage.getItem(storageKey)) {
        setTheme(event.matches ? 'dark' : 'light')
      }
    })
  } catch (error) {
    setTheme('light')
  }
})();`

declare global {
  interface Window {
    __cososTheme?: {
      set: (theme: 'light' | 'dark') => void
      clear: () => void
    }
  }
}

export function ThemeScript() {
  return <Script id="cosos-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitializer }} />
}
