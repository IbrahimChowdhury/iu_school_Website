import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: 'https://iu-school.vercel.app/',
      disallow: 'https://iu-school.vercel.app/admin/',
    },
    sitemap: 'https://iu-school.vercel.app/sitemap.xml',
    host: "https://iu-school.vercel.app/",

  }
}