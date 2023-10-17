"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function etTeacherSection() {
    type Notice = {
        imageLinks?: string[];
        title: string;
        body?: string;
      };
      const [allNotices, setallNotices] = useState<Notice[]>([]); 

    useEffect(() => {
        getNotices()
    }, [])

    let getNotices = async () => {
        try {
            
            let response = await axios.get("/api/teacher")
            setallNotices(response.data)
        } catch (error) {
            console.error("error getting  nightShift teachers data : ", error)
        }

    }
    const first:any=allNotices[4]
    return (
        <div>
           <div className='sm:mx-20 sm:my-10 mb-10 mx-4 my-4'>

<div className='flex flex-col gap-3 mb-10'>

                <h1 className='text-2xl font-semibold dark:text-white '>{first?.title}</h1>
                <p className='pl-2 text-xs '>last update : {first?.date.slice(0, 7)}-{parseInt(first?.date.slice(8,10)) +1} </p>
                <div className='p-2'>
                <p className=' dark:text-white'>{first?.body}</p>
                </div>
</div>
                <div>
                {first?.imageLinks.length>0 && first?.imageLinks?.map((image:any,i:any)=>(
                                                        <div key={i}>
                                                            {   image.split('.').pop()?.toLowerCase() === "pdf"? 
                                                            <Button className="mt-10" asChild>
                                                               <a href={image} className="">Download Pdf</a>
                                                            </Button>
                                                            :
                                                            <img src={image} className="my-6" alt="" />
                                                            }
                                                        </div>
                                                    ))}
                </div>

           </div>
            
        </div>
    )
}
