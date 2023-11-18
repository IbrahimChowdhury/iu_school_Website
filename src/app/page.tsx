// "use client"

import HomePage from '@/components/getdataSSR/frontPage'
import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata={
  title: 'Islamic University Laboratory School and College',
  description:"islamic University Laboratory School is the most amaizing School in Kushtia"
}

export default function FrontPage() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}
