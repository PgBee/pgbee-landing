import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.pgbee.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/privacy', '/terms', '/refund-policy']

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'yearly',
    priority: route === '' ? 1 : 0.3,
  }))
}
