import TeacherSection from '@/components/getdataSSR/teachersSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:"Teachers",
    description:"Teachers of Islamic University School And college",
    alternates: {
      canonical: '/teachers',
      
    }
}

export default function TeachersPage() {
  return (
    <div>
        <TeacherSection/>
    </div>
  )
}
