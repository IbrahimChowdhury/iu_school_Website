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
import { format } from 'date-fns'
export default function GetAllNotice() {

    const [allNotices, setallNotices] = useState([])

    useEffect(() => {
        getNotices()
    }, [])

    let getNotices = async () => {
       try {
        let response = await axios.get("/api/notice")
        setallNotices(response.data)
       } catch (error) {
        console.log("error getting notices : " , error)
       }

    }
    console.log(allNotices)

    let deleteNotice = async (id: any) => {
        try {
            await axios.delete(`/api/notice/${id}`).then(res => {
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
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Edit</TableHead>
                            <TableHead className="text-right">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allNotices.map((notice: any, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium ">{format(new Date(notice?.date), "dd MMM, yyyy")}</TableCell>
                                <TableCell className='h-24 line-clamp-1 flex items-center'>{notice?.title}</TableCell>
                                <TableCell><Button><Link href={`/admin/notice/${notice?._id}`}>Edit</Link></Button></TableCell>
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
