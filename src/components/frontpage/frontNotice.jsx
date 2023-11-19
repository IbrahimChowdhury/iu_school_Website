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

import {format} from "date-fns"
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
        const notices = [allNotices[0], allNotices[1], allNotices[2], allNotices[3], allNotices[4]]
        return (
            <div className="w-full bg-gradient-to-l from-slate-200 to-orange-50 py-7 px-2">
                <h1 className="text-center text-3xl font-bold mb-3 ">
                    Recent Notice List
                </h1>
                <div>

                    {notices.map((notice, i) => (
                        <Dialog>
                            <div className="flex justify-center">
                            <DialogTrigger className="w-full md:w-1/2" asChild>
                                <div className="w-full flex justify-center">
                                    <div className="flex w-full  md:m-4 my-3 items-center justify-center">
                                        <div className="group w-full  flex items-center justify-start gap-5 rounded-lg border-2 p-2 bg-white transition-all duration-500 hover:cursor-pointer hover:bg-gradient-to-l hover:from-green-600 hover:to-slate-500">
                                            <div className="relative flex w-20 transform flex-col items-center rounded-lg border-2 bg-green-700 p-1 text-white shadow-md transition-all duration-500 group-hover:-translate-x-10 group-hover:bg-white group-hover:text-black group-hover:shadow-green-500" >
                                                <h1 className="text-2xl font-bold">{format(new Date(notice?.date),'dd')}</h1>
                                                <h2>{format(new Date(notice?.date),'MMM yy')}</h2>
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

                                                        <a href={image} className="">Download Pdf</a>
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
                <div className="text-center mt-5">
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






