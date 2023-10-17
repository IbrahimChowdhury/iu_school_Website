import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/connectDB";
import Notice from "@/model/noticeModel";
export async function DELETE(req:Request) {
   try {
               await connectDB()     
               let url:any= req.url.split("notice/")[1]
               await Notice.findByIdAndDelete({_id: url})
               console.log("Notice deleted");
       return NextResponse.json({message:'Notice deleted has been deleted'})
   } catch (error) {
    console.error('Error deleting notice:', error);
    return NextResponse.json({ message: 'Error deleting notice', error }, { status: 500 });
   }
  
  }
export async function GET(req:NextRequest) {
   try {
               await connectDB()     
               let url:any= req.url.split("notice/")[1]
               let noticeData=  await Notice.findById({_id:url})
               return NextResponse.json(noticeData,{status:200})
   } catch (error) {
    return NextResponse.json({message:'Notice deleted has been deleted', error})

   }
  
  }




  export async function PUT(req:NextRequest) {
    try {
                await connectDB()    
                let reqBody:any= await req.json()
                let {title,body,imageLinks}=reqBody
                let url:any= req.url.split("notice/")[1]
                let noticeData=  await Notice.findByIdAndUpdate({_id:url},{title:title,body:body,imageLinks:imageLinks})
                return NextResponse.json(noticeData,{status:200})
    } catch (error) {
      console.error('Error updating notice:', error);
      return NextResponse.json({ message: 'Error updating notice', error }, { status: 500 });    }
   
   }