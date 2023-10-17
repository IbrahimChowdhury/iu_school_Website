import HomePage from '@/components/getdataSSR/frontPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
  title: 'IU Laboratory school',
  description:"islamic University Laboratory School is the most amaizing School "
}

export default function FrontPage() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}
