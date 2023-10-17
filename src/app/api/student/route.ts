
import { NextRequest, NextResponse } from "next/server";
import Student from "@/model/studentModel";
import connectDB from "@/dbConfig/connectDB";


export async function POST(request: NextRequest) {
   try {
      await connectDB()
      let reqBody: any = await request.json()
      let { title, imageLinksa,
         // imageLinksb 
      } = reqBody

      let student = new Student({ title, imageLinksa });
      await student.save();

      console.log(student);
      return NextResponse.json({ msg: "Student added successfully" })


   } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: 'An error occurred', details: error }, { status: 500 });
   }
}



export async function GET(request: NextRequest) {
   try {
      await connectDB()

      let notices = await Student.find().sort({ date: 1 })
      return NextResponse.json(notices, { status: 200 })

   } catch (error) {
      console.error("Error fetching students:", error);
      return NextResponse.json({ error: 'An error occurred', details: error }, { status: 500 });
   }
}