import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.iulabsc.com"

    return [
        {
            url: baseUrl, lastModified: new Date(), priority: 1
        },
        {
            url: `${baseUrl}/notice`, lastModified: new Date(), priority: 1
        },
        {
            url: `${baseUrl}/teachers`, lastModified: new Date(), priority: 1
        },
        {
            url: `${baseUrl}/students`, lastModified: new Date(), priority: 1
        },
        {
            url: `${baseUrl}/ClassRoutine`, lastModified: new Date(), priority: 1
        },

    ]

}