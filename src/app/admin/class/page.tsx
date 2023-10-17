import GetClassRoutine from '@/components/admin_components/classComponent/getAllClass'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen' >
      <div className='flex flex-col m-10 mr-20'>
      <div className='w-full my-10 flex  justify-between'>
        <h1 className='text-3xl'>Academic  section </h1>
        <Button>
          <Link href="/admin/addClass">Add</Link>
        </Button>
      </div>

      <div>
        <GetClassRoutine/>
      </div>
      </div>
      

    </div>
  )
}
