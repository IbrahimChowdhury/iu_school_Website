import { MetadataRoute } from "next"

export default  function sitemap(): MetadataRoute.Sitemap {
    const baseUrl="https://iu-school.vercel.app"

    return [
        {
            url:baseUrl, lastModified:new Date(), priority:1
        },
        {
            url:`${baseUrl}/notice`, lastModified:new Date(), priority:0.8
        },
        {
            url:`${baseUrl}/teachers`, lastModified:new Date(),priority:0.8
        },
        {
            url:`${baseUrl}/students`, lastModified:new Date(), priority:0.8
        },
        {
            url:`${baseUrl}/ClassRoutine`, lastModified:new Date(), priority:0.8
        },

    ]

}