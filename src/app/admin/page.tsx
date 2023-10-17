import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata ={
    title:"Admin",
    description:"admin section",
    robots:{
      index:false,
      nocache:true,
    }
}
export default function Admin() {
  return (
    <div >
        <div className=' text-center'>
          <p className='text-3xl m-32 '>Welcome Admin</p>
          </div>      
    </div>
  )
}
