import ClassRoutineSection from '@/components/getdataSSR/classRoutine'
import { Metadata } from 'next'
import React from 'react'
export const metadata:Metadata={
    title:"Class Routine",
    description:"Class Routine from the students",
    alternates: {
      canonical: '/ClassRoutine',
      
    }
    
}
export default function Page() {
  return (
    <div>
        <ClassRoutineSection/>
    </div>
  )
}
