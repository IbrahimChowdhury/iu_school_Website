"use client"
import Header from '@/components/header'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/frontpage/footer'
import { Metadata } from 'next'


// export const metadata:Metadata  = {
//   title: 'Islamic university',
//   description: 'Islamic University Laboratory school and College',
// }

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
