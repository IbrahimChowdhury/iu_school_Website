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
import Notice from "@/model/noticeModel";

import EditNotice from "@/components/admin_components/noticeSection/editNotice";

interface NoticeData {
  title: string;
  body: string;
  imageLinks: string[]; // Adjust the type based on your actual data structure
}

interface AddNoticeProps {
  params: {
    id: string;
  };
}

export default function AddNotice({ params }: AddNoticeProps) {
  const { toast } = useToast();
  const { id } = params;

  const [NoticeData, setNoticeData] = useState<NoticeData | null>(null);

  useEffect(() => {
    getNoticeData();
  }, []);

  const getNoticeData = async () => {
    try {
      let notice = await axios.get(`/api/notice/${id}`);
      setNoticeData(notice.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {NoticeData && (
        <EditNotice
          id={id}
          title={NoticeData.title}
          body={NoticeData.body}
          imageLink={NoticeData.imageLinks}
        />
      )}
    </div>
  );
}
