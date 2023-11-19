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
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
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
import Image from "next/image"
import { Divide } from "lucide-react"

const getStudentsData=async()=>{
    try {
      const response = await fetch(`${process.env.url}/api/student`,{
        cache:"no-cache",
      });
      if(!response.ok)
      {
        throw new Error("failed to fetch students  data")
      }
      return response.json()
    } catch (error) {
      console.log(error)
    }
    }

const StudentsList=async()=> {

   


    // creating a loading section 
    const allNotices= await getStudentsData()
    const first:any=allNotices[0]
    if(!first)
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
<div className=" py-8">

            <div className="m-4 sm:mx-72 my-12">
                <h1 className="text-center text-3xl font-bold mb-5 ">
                    All Students List
                </h1>
                <div>
                    <Table className="text-center  border-black">
                        <TableCaption>A list of Recent Students.</TableCaption>
                        <TableHeader className="border-t-2  border-black">
                            <TableRow className="text-xl ">
                                <TableHead className="border-2  border-black text-center">Class</TableHead>
                                <TableHead className="border-2  border-black text-center">Section A</TableHead>
    
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {allNotices.map((notice: any, i: any) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium border-2  border-black sm:text-base">{notice?.title}</TableCell>
                                    <TableCell className='border-2  border-black '>
                                        <Dialog>
                                            <DialogTrigger asChild> 
                                                <p className="hover:text-lg  transition-all duration-200 hover:cursor-pointer"> A</p>
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
                                                        {notice?.imageLinksa.length>0 && notice?.imageLinksa?.map((image:any,i:any)=>(
                                                            <div key={i}>
                                                                {   image.split('.').pop()?.toLowerCase() === "pdf"? 
                                                                <Button className="mt-10" asChild>
    
                                                                    <a href={image} className="">Download Pdf</a>
                                                                </Button>
                                                                :
                                                                <Image height={1000} width={1000} src={image} className="my-6" alt="" />
                                                                                            }
                                                            </div>
                                                        ))}
                                                            
                                                  </ScrollArea>    
                                                     </div>
                                                  
                                            </DialogContent>
                                        </Dialog>
    
                                    </TableCell>
                                    
                                    {/* <TableCell className='border-l-2 border-b-2'>
                                        <Dialog>
                                            <DialogTrigger asChild > 
                                                <p className="hover:text-base  transition-all duration-200 hover:cursor-pointer"> B</p>
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
                                                        {notice?.imageLinksb.length>0 && notice?.imageLinksb?.map((image:any,i:any)=>(
                                                            <div>
                                                                {   image.split('.').pop()?.toLowerCase() === "pdf"? 
                                                                <Button className="mt-10" asChild>
    
                                                                    <a href={image} className="">Download Pdf</a>
                                                                </Button>
                                                                :
                                                                <img src={image} className="my-6" alt="" />
                                                                                            }
                                                            </div>
                                                        ))}
                                                            
                                                  </ScrollArea>    
                                                     </div>
                                                  
                                            </DialogContent>
                                        </Dialog>
    
                                    </TableCell> */}
    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* <div className="text-center mt-5">
                <Button asChild><a href="/notice">See more Notices</a></Button>
                </div> */}
            </div>
</div>
        )
    }


}

export default StudentsList






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