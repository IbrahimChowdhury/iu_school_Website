// "use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'



const getClassRoomData=async()=>{
    try {
      const response = await fetch(`${process.env.url}/api/class`,{
        cache:"no-cache",
      });
      if(!response.ok)
      {
        throw new Error("failed to fetch classrooms  data")
      }
      return response.json()
    } catch (error) {
      console.log(error)
    }
    }


const ClassRoutineSection=async()=> {
   const allNotices = await getClassRoomData()
   
    const first:any=allNotices[0]
    if(!allNotices)
    {
        return(
            <div>
                <div className='w-screen h-screen flex justify-center items-center'>
<div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
    <div className="w-1/3 bg-gray-300 dark:bg-gray-600"></div>

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

        <div className="flex mt-4 item-center gap-x-2">
            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>

        <div className="flex justify-between mt-6 item-center">
            <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

            <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
        </div>
    </div>
</div>
    </div>
            </div>
        )
    }
    if(first)
    {

        return (
            <div>
               <div className='sm:mx-20 sm:my-10 mb-10 mx-4 my-4'>
    
    <div className='flex flex-col gap-3 mb-10'>
    
                    <h1 className='text-2xl font-semibold dark:text-white '>{first?.title}</h1>
                    <p className='pl-2 text-xs '>last update : {first?.date.slice(0, 7)}-{parseInt(first?.date.slice(8,10)) +1} </p>
                    <div className='p-2'>
                        <div className='break-words' >
                    <p className=' dark:text-white '>{first?.body}</p>
                        </div>
                    </div>
    </div>
                    <div>
                    {first?.imageLinks.length>0 && first?.imageLinks?.map((image:any,i:any)=>(
                                                            <div key={i}>
                                                                {   image.split('.').pop()?.toLowerCase() === "pdf"? 
                                                                <Button className="mt-10" asChild>
                                               <a href={image.replace("http://","https://")} className="">Download Pdf</a>
                                                                </Button>
                                                                :
                                                                <Image height={700} width={700} src={image} className="my-6" alt="" />
                                                                }
                                                            </div>
                                                        ))}
                    </div>
    
               </div>
                
            </div>
        )
    }
}

export default ClassRoutineSection
