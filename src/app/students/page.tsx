import StudentsList from '@/components/getdataSSR/StudentsSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:"Students",
    description:"Students Of islamic University Laboratory School",
}
export default function Page() {
  return (
    <div>
        <StudentsList/>
    </div>
  )
}
