import GetAllStudents from '@/components/admin_components/studentSection/getAllStudents'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen' >
      <div className='flex flex-col my-10 mx-3  sm:mr-20'>
      <div className='w-full my-10 flex  justify-between'>
        <h1 className='text-3xl'>Students  section</h1>
        <Button>
          <Link href="/admin/addStudent">Add</Link>
        </Button>
      </div>

      <div>
        <GetAllStudents/>
      </div>
      </div>
      

    </div>
  )
}
