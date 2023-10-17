import NoticeSection from '@/components/getdataSSR/noticeSection'
import { Metadata } from 'next'
import React from 'react'
 
export const metadata: Metadata = {
  title: 'Notice',
  description: 'Notice of Islamic University Laboratory School',
}
export default function Page() {
  return (
    <div>

<NoticeSection/>

    </div>
  )
}
