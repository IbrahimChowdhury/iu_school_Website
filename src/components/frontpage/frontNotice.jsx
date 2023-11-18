// "use client"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "../ui/scroll-area"

import axios from "axios"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import {format} from "date-fns"


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
                            <DialogTrigger className="" asChild>
                                <div className="w-full flex justify-center">
                                    <div className="flex w-full md:w-1/2 md:m-4 my-3 items-center justify-center">
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
                                                    <img src={image} className="my-6" alt="Image" />
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








//   <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Edit Profile</Button>
//       </DialogTrigger>
//       <DialogContent  className="w-5/6 sm:max-w-[700pz] ">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>
//           <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//       <ScrollArea className="h-72">
//           <div>
//          distinctio nostrum commodi hic earum tas at natus non eligendi rerum, enim possimus? Aliquam quod quae ipsum aspernatur ad. Consectetur maiores laudantium, eligendi perferendis modi autem cupiditate nostrum quo expedita similique fugit illum sunt quas molestiae dicta fugiat numquam delectus quod reprehenderit ab, harum quidem sit esse alias? Explicabo consequatur eum illum sit odio corporis minus laborum beatae, cumque, delectus Harum assumenda unde numquam quis eum voluptates perferendis cum, repellat dignissimos, alias dolore quia. Dolore at nostrum nihil quibusdam assumenda aliquam rem impedit minima exercitationem, sequi ipsam? Blanditiis vero, laudantium quod debitis corrupti accusamus iste nulla nam mollitia ex aliquam necessitatibus dolor libero, maxime error cupiditate esse sit sed iusto non? Est magnam culpa debitis maiores exercitationem tenetur tempora temporibus maxime molestiae aspernatur? Dicta quisquam accusantium provident perferendis amet ut sapiente, veniam quidem corporis. Rem adipisci facere, libero nisi est deleniti minus asperiores sunt iusto quaerat cupiditate, aliquam quas. Tempora debitis dolore, quam nam magni maiores? Pariatur beatae laudantium iure a velit dolores odio est, ipsum temporibus aspernatur nisi veniam necessitatibus et hic recusandae qui, nostrum quibusdam! Error.
//           </div>
//           <img src="http://res.cloudinary.com/dayewj4af/image/upload/v1695072323/oltgjhlnunsbmke44dz8.png" alt="" />
//       </ScrollArea>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>