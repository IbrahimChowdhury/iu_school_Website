import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/connectDB";
// import  from "@/model/noticeModel";
import Teachers from "@/model/teachersModel"
export async function DELETE(req: NextRequest) {
  try {
    await connectDB()
    let url: any = req.url.split("teacher/")[1]
    await Teachers.findByIdAndDelete({ _id: url });
    console.log("Teacher deleted");
    return NextResponse.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    return NextResponse.json({ message: 'Error deleting teacher', error }, { status: 500 });
  }

}
export async function GET(req: NextRequest) {
  try {
    await connectDB()
    let url: any = req.url.split("teacher/")[1]
    let teacherData = await Teachers.findById({ _id: url });
    return NextResponse.json(teacherData, { status: 200 });
  } catch (error) {
    console.error('Error fetching teacher:', error);
    return NextResponse.json({ message: 'Error fetching teacher', error }, { status: 500 });
  }

}




export async function PUT(req: NextRequest) {
  try {
    await connectDB()
    let reqBody: any = await req.json()
    let { title, body, imageLinks } = reqBody
    let url: any = req.url.split("teacher/")[1];
    let teacherData = await Teachers.findByIdAndUpdate({ _id: url }, { title, body, imageLinks });
    return NextResponse.json(teacherData, { status: 200 });
  } catch (error) {
    console.error('Error updating teacher:', error);
    return NextResponse.json({ message: 'Error updating teacher', error }, { status: 500 });
  }

}