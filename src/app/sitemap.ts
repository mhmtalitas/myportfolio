import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mehmetalitas.com'
  
  // Main page only since this is a single page application
  // Fragment identifiers (#about, #projects) are not processed by search engines in sitemaps
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]
} 