import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mehmetalitas.com'
  
  // Main pages
  const routes = [
    '',
    '#about',
    '#projects',
    '#partners',
    '#contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [
    ...routes,
  ]
} 