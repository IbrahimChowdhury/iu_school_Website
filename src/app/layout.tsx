import Header from '@/components/header'
import './globals.css'
import Footer from '@/components/frontpage/footer'
import { Metadata } from 'next'
import { ThemeProvider } from "@/components/ThemeProvider";
import Header1 from "@/components/header1"
import HeadBanner from "@/components/headBanner"
import Divider from "@/components/divider"
export const metadata  = {
  metadataBase: new URL("https://www.iulabsc.com"),
  title: "Islamic University Laboratory School and college",
  description: 'Islamic University Laboratory School and College is one of the most renowed school in Kushtia',
  applicationName:"islamic University School and College",
  keywords: [
    "Islamic University Laboratory  School and College",
    "iulabsc",
    "iulab",
    "iusc",
    "iulaboratorySchool",
    "IU School",
    "iulabsc",
    "Islamic University School and college",
    "islamic university School Website",
    "Education at Islamic University  School",
    "Islamic University Laboratory School",
    "IU School Programs",
    "Academic Excellence",
    "Admissions at IU School",
    "Extracurricular Activities",
    "Faculty and Staff",
    "IU School Curriculum",
    "Student Life",
    "IU School Events",
  
  ],
  authors: [{ name: 'ibrahim' }, { name: 'ibrahim Chowdhury', url: 'https://nextjs.org' }],
  creator: 'Ibrahim chowdhury',
  publisher: 'Ibrahim chowdhury',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body >
      <ThemeProvider  attribute="class" defaultTheme="system" enableSystem>
        <HeadBanner/>
        <Header1/>
          {/* <Header /> */}
          {children}
          <Footer/>
        
        </ThemeProvider>
        </body>
    </html>
  )
}
