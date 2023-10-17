"use client"
import { CldUploadButton, CldImage } from "next-cloudinary";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import{AiFillDelete, AiOutlineDelete} from "react-icons/ai"
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
import { Textarea } from '@/components/ui/textarea'
import { Trash } from "lucide-react";
import {} from "react-icons"
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function AddStudent() {
        let route= useRouter()
    const [title, settitle] = useState('')
    const [file, setFile] = useState([])
    const [imageLinksa, setimageLinksa] =useState<string[]>([]);


    const notify = () => toast.warn("Please add title")
    const sendSuccessfull=()=>toast.success("Successfully added")

    const info:any={
        title,
        imageLinksa,
        
    }

    const AddClass = async(e:any) =>{
        e.preventDefault()
        try {
            if(title.length > 0)
            {
                await axios.post("/api/student",info).then(()=>{

                    console.log("Teachers added successfully send")
                    settitle('')
                    setimageLinksa([])
                    
                    sendSuccessfull()
                    route.push("/admin/students")
                })
                .catch(()=>{
                  throw new Error("Error sending student class");
                })
            }
            if(title.length == 0){

                ;
               
                notify()
            }
           
        } catch (error) {
            console.log(error)
        }
    }

    
    const deleteImageA=(image:any):void=>{
      setimageLinksa(prevLinks => prevLinks.filter(link => link!==image))
  }
  

  return (
    <div>
 
      
       
      
      <div className="sm:w-[425px] mt-10 flex flex-col justify-center bg-slate-100 shadow-lg border-2 p-4 rounded-lg dark:bg-slate-900">
        <div>
          <div className="text-center text-xl m-5">Add Class</div>
          
        </div>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4 border-b-2 p-2 border-black">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input value={title} onChange={(e)=>settitle(e.target.value)}  placeholder="Title of the class" id="name"  className="col-span-3" required />
          </div>

    
            {/* Section A */}

          <div className="border-b-2 border-black p-2">
            <h1>Add Student's Images For Section A</h1>
          <div className="">
            <Button  variant={"default"} asChild >
                
          <CldUploadButton  uploadPreset="rgrhou3n" onUpload={(result: any) => {
                    setimageLinksa(prev => [...prev, result.info.url]);
                    console.log(result);
                }} />

            </Button>
                
                <div className="flex gap-2 mt-4">
                {imageLinksa.length>0 && imageLinksa.map((image,i)=>(
                    <div className="relative " key={i}>

                        <CldImage rel="preload" width={100} height={100} key={image} src={image} alt="image" />
                        <span onClick={()=>deleteImageA(image)}>
                        <AiOutlineDelete   className="absolute text-white  top-2 right-3"
                        />    
                            </span>      
                    </div>
            ))}    
                </div>
           

          </div>
          </div>


          {/* Section B  */}
          {/* <div className="border-b-2 border-black p-2">
            <h1 className="">Add Students Images For Section B</h1>
          <div className="">
            <Button  variant={"default"} asChild >
                
          <CldUploadButton  uploadPreset="y2ajiutc" onUpload={(result: any) => {
                    setimageLinksb(prev => [...prev, result.info.url]);
                    console.log(result);
                }} />

            </Button>
                
                <div className="flex gap-2 mt-4">
                {imageLinksb.length>0 && imageLinksb.map((image,i)=>(
                    <div className="relative " key={i}>

                        <CldImage rel="preload"  width={100} height={100} key={image} src={image} alt="image" />
                        <span onClick={()=>deleteImageB(image)}>
                        <AiOutlineDelete   className="absolute text-white  top-2 right-3"
                        />    
                        </span>      
                    </div>
            ))}    
                </div>
           

          </div>
          </div> */}

        </div>
        <>
          <Button onClick={AddClass} >Add a New Class</Button>
        </>
        
        <ToastContainer />
      </div>
    
    </div>
  )
}
