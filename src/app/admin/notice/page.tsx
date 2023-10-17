"use client";
import { AddNotice } from '@/components/admin_components/noticeSection/addNotice';
import React, { useState } from 'react';
import { CldUploadButton, CldImage } from "next-cloudinary";
import GetAllNotice from '@/components/admin_components/noticeSection/getAllNotice';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function () {
   
    return (
        <div className='w-screen'>

            <div className='flex justify-center flex-col m-10'>
                <div className='flex justify-between my-12 flex-col sm:flex-row gap-6'>
                <h1 className='text-3xl '>NOTICE SECTION</h1>
                <Button> <Link href="/admin/addNotice"> Add New Notice </Link> </Button>
                </div>
                
                
                <GetAllNotice/>

            </div>

        </div>
    );
}
