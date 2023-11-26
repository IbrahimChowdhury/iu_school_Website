"use client"
import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function GetClassRoutine() {

    const [allNotices, setallNotices] = useState([])

    useEffect(() => {
        getNotices()
    }, [])

    let getNotices = async () => {
        try {
            let response = await axios.get("/api/class")
            setallNotices(response.data)      
        } catch (error) {
            console.error("error getting class data",error)
        }

    }
    console.log(allNotices)

    let deleteNotice = async (id: any) => {
        try {
            const response = await axios.delete(`/api/class/${id}`);
        
        if (response.status === 200) {
            // Request was successful, update the notices
            getNotices();
        } else {
            // Handle other status codes or error responses
            console.log(`DELETE request failed with status ${response.status}`);
        }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
        <div className='flex flex-col flex-wrap sm:flex-row gap-7 '>
            {
                allNotices.map((notice:any, i:any) => (
                    <div key={i} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={notice.imageLinks[0]} alt="" className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500" />

                        <div className="flex flex-col justify-between p-6 space-y-8">


                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">{notice.title}</h2>
                                <p className="dark:text-gray-100 line-clamp-2">{notice.body}</p>
                            </div>
                           <div className='flex justify-between'>
                           <Button><Link href={`/admin/class/${notice?._id}`}>Update</Link></Button>
                           {/* <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="outline">Delete</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete the notification and remove the notifiaction from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction  onClick={()=>deleteNotice(notice._id)}  >Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog> */}
                           </div>
                        </div>
                    </div>
                ))
            }

        </div>


    </div>
    )
}
