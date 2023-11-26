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
import { useToast } from "@/components/ui/use-toast";
export  function AddNotice() {
    let {toast}=useToast()
    const [title, settitle] = useState('')
    const [body, setBody] = useState('')
    const [file, setFile] = useState([])
    const [imageLinks, setimageLinks] =useState<string[]>([]);

    const info:any={
        title,
        body,
        imageLinks
    }

    const addNotice = async(e:any) =>{
        e.preventDefault()
        try {
            if(title.length > 0)
            {
                await axios.post("/api/notice",info).then(()=>{

                    console.log("Success notice send")
                    settitle('')
                    setBody('')
                    setimageLinks([])
                })
                .catch(()=>{
                    console.log("Error sending notice")
                })
            }
            if(title.length == 0){

                toast({
                    title: "Success",
                    description: "Notice Added Successfully", 
                    duration: 2000,
                    variant:"destructive"
                })
            }
           
        } catch (error) {
            console.log(error)
        }
    }

    
    const deleteImage=(image:any):void=>{
        let newImageLinks= imageLinks.filter(link => link!==image)
        setimageLinks(newImageLinks)
        console.log(imageLinks);
        
    }

  return (
    <div >
 
      <div className="sm:max-w-[425px] mt-10 flex flex-col justify-center bg-slate-100 shadow-lg border-2 p-4 rounded-lg dark:bg-slate-900">
        <div>
          <div className="m-5 text-xl text-center">Add Notice</div>
          
        </div>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input value={title} onChange={(e)=>settitle(e.target.value)}  placeholder="Title of the Notice" id="name"  className="col-span-3" required />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="body" className="text-right">
              Body
            </Label>
            <Textarea value={body} onChange={(e)=>setBody(e.target.value)} id='body' placeholder="Body of the Notice"/>
          </div>
          <div className="">
            <Button  variant={"default"} asChild >
                
          <CldUploadButton  uploadPreset="rgrhou3n" onUpload={(result: any) => {
                    setimageLinks(prev => [...prev, result.info.url]);
                    console.log(result);
                }} />
                
            </Button>
                
                <div className="flex gap-2 mt-4">
                {imageLinks.length>0 && imageLinks.map((image,i)=>(
                    <div className="relative " key={i}>

                        <CldImage rel="preload" width={100} height={100} key={image} src={image} alt="image" />
                        <span className='absolute p-1 text-white rounded-md top-2 right-3 bg-slate-500 hover:cursor-pointer hover:bg-slate-800 ' onClick={() => deleteImage(image)}>
                      <AiOutlineDelete className="" />
                      
                    </span>  
                    </div>
            ))}    
                </div>
           

          </div>

        </div>
        <>
          <Button onClick={addNotice}  >Add the Notice</Button>
        </>
      </div>
    
    </div>
  )
}
