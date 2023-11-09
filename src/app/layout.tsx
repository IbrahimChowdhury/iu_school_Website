import Header from '@/components/header'
import './globals.css'
import Footer from '@/components/frontpage/footer'
import { Metadata } from 'next'
import { ThemeProvider } from "@/components/ThemeProvider";


export const metadata  = {
  metadataBase: new URL("https://iu-school.vercel.app"),
  title: "Iu School",
  description: 'Islamic University Laboratory school and College',
  applicationName:"iu School",
  keywords: [
    "IU School",
    "Islamic University School",
    "Vercel School Website",
    "Education at IU School",
    "Islamic University Laboratory School",
    "IU School Programs",
    "Academic Excellence",
    "Admissions at IU School",
    "Extracurricular Activities",
    "Faculty and Staff",
    "IU School Curriculum",
    "Student Life",
    "IU School Events",
    "Scholarships and Financial Aid",
    "Campus Facilities",
    "Contact IU School",
    "Parent-Teacher Communication",
    "School News and Updates",
    "Student Achievements",
    "Alumni Network"
  ],
  authors: [{ name: 'ibrahim' }, { name: 'ibrahim Chowdhury', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
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
        
          <Header />
          {children}
          <Footer/>
        
        </ThemeProvider>
        </body>
    </html>
  )
}
