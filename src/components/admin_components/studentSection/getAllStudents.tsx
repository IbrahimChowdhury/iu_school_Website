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
export default function GetAllStudents() {

    const [allNotices, setallNotices] = useState([])

    useEffect(() => {
        getNotices()
    }, [])

    let getNotices = async () => {
       try {
        let response = await axios.get("/api/student")
        setallNotices(response.data)
       } catch (error) {
        console.error("error getting students data", error )
       }

    }
    console.log(allNotices)

    let deleteNotice = async (id: any) => {
        try {
            await axios.delete(`/api/student/${id}`).then(res => {
                getNotices()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-36">Date</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Edit</TableHead>
                            <TableHead className="text-right">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allNotices.map((notice: any, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium ">{notice?.date.slice(0, 10)}</TableCell>
                                <TableCell className='sm:w-[250px] line-clamp-1'>{notice?.title}</TableCell>
                                <TableCell><Button><Link href={`/admin/students/${notice?._id}`}>Edit</Link></Button></TableCell>
                                {/* <TableCell className="text-right"><Button onClick={()=>deleteNotice(notice._id)}>Delete</Button></TableCell> */}
                                <TableCell className="text-right">
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
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
