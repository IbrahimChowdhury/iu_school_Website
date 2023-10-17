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
  body: string;
  imageLink: string  | string[];
}

const EditClass: React.FC<EditNoticeProps> = ({ id, title: initialTitle, body: initialBody, imageLink: initialImageLink }) => {
    const router = useRouter()
  // State variables
  const [title, setTitle] = useState(initialTitle);
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
        body,
        imageLinks,
      };

      // Perform the API call to update the notice
      await axios.put(`/api/class/${id}`, info);

      // Display a success message
      // Optionally, clear the form fields
      setTitle('');
      setBody('');
      setImageLinks([]);
      router.push("/admin/class")
    } catch (error) {
      // Handle any API request errors
      console.error(error);
    }
  };

  return (
    <div>
      <div className="sm:w-[425px] mt-10 mx-10 flex flex-col justify-center bg-slate-100 shadow-lg border-2 p-4 rounded-lg dark:bg-slate-900">
        <div className="text-center text-xl m-5">Update {title}</div>
        <form onSubmit={editTeacher}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" id="name" required />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="body" className="text-right">
                Body
              </Label>
              <Textarea value={body} onChange={e => setBody(e.target.value)} id="body" placeholder="Body" />
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
                    <span onClick={() => deleteImage(image)}>
                      <AiOutlineDelete className="absolute text-white top-2 right-3" />
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

export default EditClass
