import TeacherSection from '@/components/getdataSSR/teachersSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:"Teachers",
    description:"Teachers of Islamic University School And college"
}

export default function Page() {
  return (
    <div>
        <TeacherSection/>
    </div>
  )
}
