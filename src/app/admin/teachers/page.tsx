import GetAllTeachers from '@/components/admin_components/teacherSection/getAllTeacher'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen' >
      <div className='flex flex-col m-10 mr-20'>
      <div className='w-full my-10 flex  justify-between'>
        <h1 className='text-3xl'>Teacher section</h1>
        <Button>
          <Link href="/admin/addTeacher">Add</Link>
        </Button>
      </div>

      <div>
        <GetAllTeachers/>
      </div>
      </div>
      

    </div>
  )
}
