const DEFAULT_PROD_URL = 'https://app.cosos.xyz'
const DEFAULT_DEV_URL = 'http://localhost:3000'

function normalizePathSegment(path?: string) {
  if (!path) {
    return ''
  }

  const trimmed = path.trim()

  if (!trimmed) {
    return ''
  }

  return `/${trimmed.replace(/^\/+/, '')}`
}

export function getAppUrl(path?: string) {
  const fallback = process.env.NODE_ENV === 'production' ? DEFAULT_PROD_URL : DEFAULT_DEV_URL
  const resolvedBase = (process.env.NEXT_PUBLIC_APP_URL || fallback).trim() || fallback
  const base = resolvedBase.endsWith('/') ? resolvedBase.slice(0, -1) : resolvedBase

  return `${base}${normalizePathSegment(path)}`
}
