const DEFAULTS = {
  production: {
    app: 'https://app.cosos.xyz',
    site: 'https://cosos.xyz',
  },
  development: {
    app: 'http://localhost:3000',
    site: 'http://localhost:3001',
  },
} as const

const KNOWN_APP_PREFIX = /^app\./

function sanitizeBaseUrl(raw: string | undefined, fallback: string) {
  if (!raw) {
    return fallback
  }

  const trimmed = raw.trim()
  if (!trimmed) {
    return fallback
  }

  const cleaned = trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed
  return cleaned || fallback
}

function ensureAbsoluteUrl(candidate: string, fallback: string) {
  try {
    const url = new URL(candidate)
    url.hash = ''
    if (!url.pathname || url.pathname === '/') {
      url.pathname = ''
    }

    return url.toString().replace(/\/$/, '')
  } catch (_error) {
    return fallback
  }
}

function deriveSiteUrlFromApp(appUrl: string, fallback: string) {
  try {
    const url = new URL(appUrl)
    const hostname = url.hostname

    if (!KNOWN_APP_PREFIX.test(hostname)) {
      return fallback
    }

    const derivedHostname = hostname.replace(KNOWN_APP_PREFIX, '')
    const derived = `${url.protocol}//${derivedHostname}`
    return derived.replace(/\/$/, '') || fallback
  } catch (_error) {
    return fallback
  }
}

function buildUrl(base: string, path?: string) {
  if (!path) {
    return base
  }

  const trimmed = path.trim()
  if (!trimmed || trimmed === '/') {
    return base
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed
  }

  if (trimmed.startsWith('#')) {
    return `${base}${trimmed}`
  }

  if (trimmed.startsWith('?')) {
    return `${base}${trimmed}`
  }

  const normalized = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return `${base}${normalized}`
}

const runtime = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const appFallback = DEFAULTS[runtime].app
const siteFallback = DEFAULTS[runtime].site

const resolvedAppBase = sanitizeBaseUrl(process.env.NEXT_PUBLIC_APP_URL, appFallback)
const appBaseUrl = ensureAbsoluteUrl(resolvedAppBase, appFallback)

const explicitSiteEnv = sanitizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL, '')
const siteBaseUrl = ensureAbsoluteUrl(
  explicitSiteEnv || deriveSiteUrlFromApp(appBaseUrl, siteFallback),
  siteFallback,
)

export const siteConfig = {
  appBaseUrl,
  siteBaseUrl,
  metadataBase: new URL(`${siteBaseUrl}/`),
  getAppUrl: (path?: string) => buildUrl(appBaseUrl, path),
  getSiteUrl: (path?: string) => buildUrl(siteBaseUrl, path),
} as const

export function getAppUrl(path?: string) {
  return siteConfig.getAppUrl(path)
}

export function getSiteUrl(path?: string) {
  return siteConfig.getSiteUrl(path)
}

export const marketingRoutes = ['/', '/pricing'] as const
