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

  //  import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.bubble.css';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function AddTeachers() {
        let route= useRouter()
    // let {toast}=useToast()
    const [title, settitle] = useState('')
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [file, setFile] = useState([])
    const [imageLinks, setimageLinks] =useState<string[]>([]);


    const notify = () => toast.warn("Please add title")
    const sendSuccessfull=()=>toast.success("Successfully added")

    const info:any={
        title,
        name,
        body,
        imageLinks
    }

    const AddTeacher = async(e:any) =>{
        e.preventDefault()
        try {
            if(title.length > 0)
            {
                await axios.post("/api/teacher",info).then(()=>{

                    console.log("Teachers added successfully send")
                    settitle('')
                    setName('')
                    setBody('')
                    setimageLinks([])
                    sendSuccessfull()
                    route.push("/admin/teachers")
                })
                .catch(()=>{
                  throw new Error("Error sending notice");                })
            }
            if(title.length == 0){

                // toast({
                //     title: "Success",
                //     description: "Notice Added Successfully", 
                // })
                ;
               
                notify()
            }
           
        } catch (error) {
            console.log(error)
        }
    }

    
    const deleteImage=(image:any):void=>{
      setimageLinks(prevLinks => prevLinks.filter(link => link!==image))
  }

  return (
    <div>
 
      
       
      
      <div className="sm:w-[425px] mt-10 flex flex-col justify-center bg-slate-100 shadow-lg border-2 p-4 rounded-lg dark:bg-slate-900">
        <div>
          <div className="m-5 text-xl text-center">Add Teachers Lists</div>
          
        </div>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input value={title} onChange={(e)=>settitle(e.target.value)}  placeholder="Title of the teachers" id="title"  className="col-span-3" required />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input value={name} onChange={(e)=>setName(e.target.value)}  placeholder="name of the teacher" id="name"  className="col-span-3" required />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="body" className="text-right">
              Body
            </Label>
            <div className="w-full border-2">
            {typeof window !== 'undefined' && (
            <ReactQuill theme="bubble" value={body} onChange={setBody} />
            )}
            </div>
            {/* <Textarea value={body} onChange={(e)=>setBody(e.target.value)} id='body' placeholder="Body section if needed"/> */}
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
          <Button onClick={AddTeacher} >Add New Teachers List</Button>
        </>
        
        <ToastContainer />
      </div>
    
    </div>
  )
}
