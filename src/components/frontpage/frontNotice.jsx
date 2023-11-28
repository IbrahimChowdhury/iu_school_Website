import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { ScrollArea } from "../ui/scroll-area"

import axios from "axios"

import {format, isValid} from "date-fns"
import Image from "next/image"


const getAllNotice = async () => {
    try {
        const response = await fetch(`${process.env.url}/api/notice`, {
            cache: "no-cache",
        });
        if (!response.ok) {
            console.log("cannot fetch notice data")
            throw new Error("failed to fetch front notice data")

        }
        return response.json()
    } catch (error) {
        console.log(error.message)
    }
}

const FrontNotice = async () => {

    try {
        const allNotices = await getAllNotice();

        if (!allNotices) {
            return <div>No front  Notice  data available.</div>;
        }
        
        let notices=[]; 
        if(allNotices.length>5)
        {
          notices = [allNotices[0], allNotices[1], allNotices[2], allNotices[3], allNotices[4]]
        }
        else{
            notices=allNotices;
        }
        return (
            <div className="w-full px-2 lg:px-20 bg-gradient-to-l from-slate-200 to-orange-50 py-7">
                <h1 className="mb-3 text-3xl font-bold text-center ">
                    Recent Notice List
                </h1>
                <div>

                    {notices.map((notice, i) => (
                        <Dialog>
                            <div className="flex justify-center">
                            <DialogTrigger className="w-full " asChild>
                                <div className="flex justify-center w-full">
                                    <div className="flex items-center justify-center w-full my-3 md:m-4">
                                        <div className="flex items-center justify-start w-full gap-5 p-2 transition-all duration-500 bg-white border-2 rounded-lg group hover:cursor-pointer hover:bg-gradient-to-l hover:from-green-600 hover:to-slate-500">
                                            <div className="relative flex flex-col items-center w-20 p-1 text-white transition-all duration-500 transform bg-green-700 border-2 rounded-lg shadow-md group-hover:-translate-x-10 group-hover:bg-white group-hover:text-black group-hover:shadow-green-500" >

                                            <h1 className="text-2xl font-bold">{  format(new Date(notice?.date),'dd')}</h1>
                                                     <h2>{ format(new Date(notice?.date),'MMM yy') }</h2>
                                            </div>

                                            <div class="line-clamp-1 transition-all duration-300 group-hover:text-lg group-hover:text-white">
                                            {notice?.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            </div>
                            <DialogContent className="w-5/6 sm:max-w-[700px] ">
                                <DialogHeader>
                                    <DialogTitle>{notice?.title}</DialogTitle>
                                    <DialogDescription>
                                        {notice?.body}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">

                                    <ScrollArea className="h-96">
                                        {notice?.imageLinks.length > 0 && notice?.imageLinks?.map((image, i) => (
                                            <div key={i}>
                                                {image.split('.').pop()?.toLowerCase() === "pdf" ?
                                                    <Button className="mt-10" asChild>

                                                        <a href={image.replace("http://","https://")} className="">Download Pdf</a>
                                                    </Button>
                                                    :
                                                    

                                                    <Image height={1000} width={1000} src={image} className="my-6" alt="Image" />
                                                }
                                            </div>
                                        ))}

                                    </ScrollArea>
                                </div>

                            </DialogContent>
                        </Dialog>




                    ))}


                </div>
                <div className="mt-5 text-center">
                    <Button className="transition-all duration-300 hover:translate-x-2" asChild><a href="/notice">See more Notices</a></Button>
                </div>
            </div>
        )
    } catch (error) {
        console.error("Error in GetTeacherSection: ", error);
        return <div>Error loading teacher data.</div>;
    }

}

export default FrontNotice






