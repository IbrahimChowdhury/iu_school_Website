"use client"
import axios, { all } from 'axios'
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
// const cloudinary = require('cloudinary').v2;



export default function GetAllTeachers() {
    // Configure Cloudinary using environment variables
    let url = "https://res.cloudinary.com/dayewj4af/image/upload/v1695395712/e1xgirmtyvcij6hi2ypy.pdf"
    const fileExtension = url.split('.')[3]
    console.log(fileExtension)
    const [allNotices, setallNotices] = useState([])

    useEffect(() => {
        getNotices()
    }, [])

    let getNotices = async () => {
        try {
            let response = await axios.get("/api/teacher")
            setallNotices(response.data)
        } catch (error) {
            console.error("Error getting teachers data : ", error)
        }
    }
    console.log(allNotices)

    let deleteNotice = async (id: any) => {
        try {
            await axios.delete(`/api/teacher/${id}`).then(res => {
                getNotices()
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <div className='flex flex-col sm:flex-row flex-wrap gap-7 '>
                {
                    allNotices.map((notice: any, i:any) => (
                        <div key={i} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <img src={notice.imageLinks[0]} alt="" className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500" />

                            <div className="flex flex-col justify-between p-6 space-y-8">


                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracki">{notice.title}</h2>
                                    <p className="dark:text-gray-100 line-clamp-2">{notice.body}</p>
                                </div>
                               <div className='flex justify-between'>
                               <Button><Link href={`/admin/teachers/${notice?._id}`}>Update</Link></Button>
                               <AlertDialog>
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
                                    </AlertDialog>
                               </div>
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}



















