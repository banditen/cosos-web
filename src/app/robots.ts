import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: siteConfig.getSiteUrl('/sitemap.xml'),
    host: siteConfig.getSiteUrl(),
  }
}
