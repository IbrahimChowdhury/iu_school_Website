import StudentsList from '@/components/getdataSSR/StudentsSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:"Students",
    description:"Students Of islamic University Laboratory School",
    alternates: {
      canonical: '/students',
      
    }
}
export default function StudentsPage() {
  return (
    <div>
        <StudentsList/>
    </div>
  )
}
