import Script from 'next/script'

export function AnalyticsPlaceholder() {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  // TODO: Replace placeholder analytics endpoint and website ID with production values.
  return (
    <Script
      id="cosos-analytics"
      strategy="lazyOnload"
      data-website-id="TODO_REPLACE_WITH_ANALYTICS_SITE_ID"
      src="https://analytics.example.com/script.js"
    />
  )
}
