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
import 'react-quill/dist/quill.bubble.css';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


interface EditNoticeProps {
  id: string;
  title: string;
  name: string,
  body: string;
  imageLink: string  | string[];
}

const EditTeacher: React.FC<EditNoticeProps> = ({ id, title: initialTitle, name: initialName, body: initialBody, imageLink: initialImageLink }) => {
  const { toast } = useToast();
    const router = useRouter()
  // State variables
  const [title, setTitle] = useState(initialTitle);
  const [name, setName] = useState(initialName);
  const [body, setBody] = useState(initialBody);
  const [imageLinks, setImageLinks] = useState<string[]>(
    Array.isArray(initialImageLink) ? initialImageLink : [initialImageLink]
  );
  // Function to handle image deletion
  const deleteImage = (image: string) => {
    const newImageLinks = imageLinks.filter(link => link !== image);
    setImageLinks(newImageLinks);
  };

  // Function to handle form submission
  const editTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const info = {
        title,
        name,
        body,
        imageLinks,
      };

      // Perform the API call to update the notice
      await axios.put(`/api/teacher/${id}`, info);

      // Display a success message
      toast({
        title: 'Success',
        description: 'Notice updated successfully',
        duration: 2000,
        
      });
      // Optionally, clear the form fields
      setTitle('');
      setName('');
      setBody('');
      setImageLinks([]);
      router.push("/admin/teachers")
    } catch (error) {
      // Handle any API request errors
      console.error(error);
    }
  };

  return (
    <div>
      <div className="sm:w-[425px] mt-10 mx-10 flex flex-col justify-center bg-slate-100 shadow-lg border-2 p-4 rounded-lg dark:bg-slate-900">
        <div className="m-5 text-xl text-center">Update Teacher List</div>
        <form onSubmit={editTeacher}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" id="title" required />
            </div>

            <div className="flex items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input value={name} onChange={e => setName(e.target.value)} placeholder="Name of the teacher" id="name" required />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="body" className="text-right">
                Body
              </Label>
              {/* <Textarea value={body} onChange={e => setBody(e.target.value)} id="body" placeholder="Body" /> */}
              <div className="w-full border-2">
            {typeof window !== 'undefined' && (
            <ReactQuill theme="bubble" value={body} onChange={setBody} />
            )}
            </div>
            </div>
            <div>
              <Button variant="default" asChild >
                
                <CldUploadButton  uploadPreset="rgrhou3n" onUpload={(result: any) => {
                  setImageLinks(prev => [...prev, result.info.url]);
                }} />
              </Button>
              <div className="flex gap-2 mt-4">
                {imageLinks.map((image, i) => (
                  <div className="relative" key={i}>
                    <CldImage rel="preload" width={100} height={100} src={image} alt="image" />
                    <span className='absolute p-1 text-white rounded-md top-2 right-3 bg-slate-500 hover:cursor-pointer hover:bg-slate-800 ' onClick={() => deleteImage(image)}>
                      <AiOutlineDelete  />  
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default EditTeacher
