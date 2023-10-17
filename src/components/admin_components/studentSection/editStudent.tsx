"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AiOutlineDelete } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

interface EditNoticeProps {
  id: string;
  title: string;
  imageLinksa: string  | string[];
  imageLinksb: string  | string[];
}

const EditStudent: React.FC<EditNoticeProps> = ({ id, title: initialTitle, imageLinksa: initialImageLinksa, imageLinksb: initialImageLinksb }) => {
    const router = useRouter()
  // State variables
  const [title, setTitle] = useState(initialTitle);

  const [imageLinksa, setImageLinksa] = useState<string[]>(
    Array.isArray(initialImageLinksa) ? initialImageLinksa : [initialImageLinksa]
  );
  
  // const [imageLinksb, setImageLinksb] = useState<string[]>(
  //   Array.isArray(initialImageLinksb) ? initialImageLinksb : [initialImageLinksb]
  // );
  
  // Function to handle image deletion
  const deleteImagea = (image: string) => {
    const newImageLinks = imageLinksa.filter(link => link !== image);
    setImageLinksa(newImageLinks);
  };
  // const deleteImageb = (image: string) => {
  //   const newImageLinks = imageLinksb.filter(link => link !== image);
  //   setImageLinksb(newImageLinks);
  // };

  // Function to handle form submission
  const editStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const info = {
        title,
        imageLinksa,
        // imageLinksb
      };

      // Perform the API call to update the notice
      await axios.put(`/api/student/${id}`, info);
      // Optionally, clear the form fields
      setTitle('');
      setImageLinksa([]);
      // setImageLinksb([]);
      router.push("/admin/students")
    } catch (error) {
      // Handle any API request errors
      console.error(error);
    }
  };

  return (
    <div>
     
     <div className="sm:w-[425px] mt-10 flex flex-col justify-center bg-slate-100 shadow-lg border-2 p-4 rounded-lg dark:bg-slate-900">
        <div>
          <div className="text-center text-xl m-5">Edit Students for a  Class</div>
          
        </div>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4 border-b-2 p-2 border-black">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Title of the class" id="name"  className="col-span-3" required />
          </div>

    
            {/* Section A */}

          <div className="border-b-2 border-black p-2">
            <h1>Add Student's Images For Section A</h1>
          <div className="">
            <Button  variant={"default"} asChild >
                
          <CldUploadButton  uploadPreset="rgrhou3n" onUpload={(result: any) => {
                    setImageLinksa(prev => [...prev, result.info.url]);
                    console.log(result);
                }} />

            </Button>
                
                <div className="flex gap-2 mt-4">
                {imageLinksa.length>0 && imageLinksa.map((image,i)=>(
                    <div className="relative " key={i}>

                        <CldImage rel="preload" width={100} height={100} key={image} src={image} alt="image" />
                        <span onClick={()=>deleteImagea(image)}>
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
                
          <CldUploadButton  uploadPreset={process.env.Upload_Preset} onUpload={(result: any) => {
                    setImageLinksb(prev => [...prev, result.info.url]);
                    console.log(result);
                }} />

            </Button>
                
                <div className="flex gap-2 mt-4">
                {imageLinksb.length>0 && imageLinksb.map((image,i)=>(
                    <div className="relative " key={i}>

                        <CldImage rel="preload" width={100} height={100} key={image} src={image} alt="image" />
                        <span onClick={()=>deleteImageb(image)}>
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
          <Button onClick={editStudent} >Save Changes</Button>
        </>
        
      </div>
    
    </div>
  );
};

export default EditStudent
