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


const getAllNotice=async()=>{
    try {
      const response = await fetch(`${process.env.url}/api/notice`,{
        cache:"no-cache",
      });
      if(!response.ok)
      {
        console.log("cannot fetch notice data")
        throw new Error("failed to fetch front notice data")
        
      }
      return response.json()
    } catch (error) {
      console.log(error.message)
    }
    }

const  FrontNotice=async()=> {
    
    try {
        const allNotices= await getAllNotice();
     
        if (!allNotices) {
            return <div>No front  Notice  data available.</div>;
          }
        const notices = [allNotices[0], allNotices[1], allNotices[2], allNotices[3], allNotices[4]]
        return (
            <div className="sm:w-4/5 m-4 sm:m-7">
                <h1 className="text-center text-3xl font-bold mb-3 ">
                    Recent Notice List
                </h1>
                <div>
                    <Table className="">
                        <TableCaption>A list of your recent Notices.</TableCaption>
                        <TableHeader>
                            <TableRow className="text-xl ">
                                <TableHead className="border-2 ">Date</TableHead>
                                <TableHead className="border-2 ">Notice</TableHead>
    
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {notices.map((notice, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium border-2 ">{notice?.date.slice(0, 7)}-{parseInt(notice?.date.slice(8, 10)) + 1}</TableCell>
                                    <TableCell className='h-32  flex items-center border-b-2 border-r-2 w-full line-clamp-1'>
                                        <Dialog>
                                            <DialogTrigger className="" asChild> 
                                                <p className="hover:text-base w-full transition-all duration-200 hover:cursor-pointer"> {notice?.title}</p>
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
                                                        {notice?.imageLinks.length>0 && notice?.imageLinks?.map((image,i)=>(
                                                            <div key={i}>
                                                                {   image.split('.').pop()?.toLowerCase() === "pdf"? 
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
    
                                    </TableCell>
    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="text-center mt-5">
                <Button asChild><a href="/notice">See more Notices</a></Button>
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