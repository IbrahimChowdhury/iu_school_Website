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
import EditStudent from "@/components/admin_components/studentSection/editStudent";
interface studentData {
  title: string;
  imageLinksa: string[]; // Adjust the type based on your actual data structure
  imageLinksb: string[]; // Adjust the type based on your actual data structure
}

interface AddstudentProps {
  params: {
    id: string;
  };
}

export default function SingleStudentEdit({ params }: AddstudentProps) {
  
  const { id } = params;

  const [studentData, setstudentData] = useState<studentData | null>(null);

  useEffect(() => {
    getstudentData();
  }, []);

  const getstudentData = async () => {
    try {
      let student = await axios.get(`/api/student/${id}`);
      setstudentData(student.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {studentData && (
        <EditStudent
          id={id}
          title={studentData.title}
          imageLinksa={studentData.imageLinksa}
          imageLinksb={studentData.imageLinksb}
        />
      )}
    </div>
  );
}
