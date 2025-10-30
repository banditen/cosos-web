import type { MetadataRoute } from 'next'

import { marketingRoutes, siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return marketingRoutes.map((route) => {
    const path = route === '/' ? undefined : route

    return {
      url: siteConfig.getSiteUrl(path),
      lastModified,
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1 : 0.7,
    }
  })
}
