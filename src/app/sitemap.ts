export default async function sitemap(){
    const baseUrl="https://iu-school.vercel.app"

    return [
        {
            url:baseUrl, lastModified:new Date()
        },
        {
            url:`${baseUrl}/notice`, lastModified:new Date()
        },
        {
            url:`${baseUrl}/teachers`, lastModified:new Date()
        },
        {
            url:`${baseUrl}/students`, lastModified:new Date()
        },
        {
            url:`${baseUrl}/ClassRoutine`, lastModified:new Date()
        },

    ]

}