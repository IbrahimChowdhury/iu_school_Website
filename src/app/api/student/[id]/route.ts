import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/connectDB";
// import  from "@/model/noticeModel";
import Student from "@/model/studentModel";
export async function DELETE(req:NextRequest) {
   try {
               await connectDB()     
               let url:any= req.url.split("student/")[1]
               await Student.findByIdAndDelete({ _id: url });
       console.log("Student deleted");
       return NextResponse.json({ message: 'Student deleted successfully' });
   } catch (error) {
    console.error('Error deleting student:', error);
    return NextResponse.json({ message: 'Error deleting student', error }, { status: 500 });
   }
  
  }
export async function GET(req:NextRequest) {
   try {
               await connectDB()     
               let url:any= req.url.split("student/")[1]
               let studentData = await Student.findById({ _id: url });
               return NextResponse.json(studentData, { status: 200 });
   } catch (error) {
    console.error('Error fetching student:', error);
    return NextResponse.json({ message: 'Error fetching student', error }, { status: 500 });
   }
  
  }




  export async function PUT(req:NextRequest) {
    try {
                await connectDB()    
                let reqBody:any= await req.json()
           let {title,imageLinksa}=reqBody
                let url:any= req.url.split("student/")[1]
                let studentData = await Student.findByIdAndUpdate({ _id: url }, { title, imageLinksa });
              return NextResponse.json(studentData, { status: 200 });
    } catch (error) 
    {
      console.error('Error updating student:', error);
      return NextResponse.json({ message: 'Error updating student', error }, { status: 500 });    }
   }