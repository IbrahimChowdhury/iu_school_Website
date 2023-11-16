
import { NextRequest, NextResponse } from "next/server";
import Teachers from "@/model/teachersModel"
import connectDB from "@/dbConfig/connectDB";


export async function POST(request: NextRequest) {
   try {
      await connectDB()
      let reqBody: any = await request.json()
      let { title,name, body, imageLinks } = reqBody

      let teacher = new Teachers({ title,name, body, imageLinks });
      await teacher.save();
      
      console.log(teacher);
      return NextResponse.json({ msg: "Teacher added successfully" });
   } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: 'An error occurred', details: error }, { status: 500 });
   }
}



export async function GET(request: NextRequest) {
   try {

      await connectDB()
      let teachers = await Teachers.find().sort({ date: 1 });
      return NextResponse.json(teachers, { status: 200 });

   } catch (error) {
      console.error("Error fetching teachers:", error);
      return NextResponse.json({ error: 'An error occurred', details: error }, { status: 500 });
   }
}