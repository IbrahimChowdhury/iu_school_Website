"use client"
import { CldUploadButton, CldImage } from "next-cloudinary";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';
import { Trash } from "lucide-react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import EditTeacher from "@/components/admin_components/teacherSection/editTeacher";

interface teacherData {
  title: string;
  name:string,
  body: string;
  imageLinks: string[]; // Adjust the type based on your actual data structure
}

interface AddteacherProps {
  params: {
    id: string;
  };
}

export default function Addteacher({ params }: AddteacherProps) {
  
  const { id } = params;

  const [teacherData, setteacherData] = useState<teacherData | null>(null);

  useEffect(() => {
    getteacherData();
  }, []);

  const getteacherData = async () => {
    try {
      let teacher = await axios.get(`/api/teacher/${id}`);
      setteacherData(teacher.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {teacherData && (
        <EditTeacher
          id={id}
          title={teacherData.title}
          name={teacherData.name}
          body={teacherData.body}
          imageLink={teacherData.imageLinks}
        />
      )}
    </div>
  );
}
