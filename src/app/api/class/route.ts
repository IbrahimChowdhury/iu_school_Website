import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/connectDB";
import ClassRoutine from "@/model/classRoutine";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const reqBody: any = await request.json();
        const { title, body, imageLinks } = reqBody;

        // Validate the request body here
      

        const notice = new ClassRoutine({ title, body, imageLinks });
        await notice.save();

        console.log(notice);

        return NextResponse.json({ msg: "Class added successfully" }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'An error occurred', details: error }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const notices = await ClassRoutine.find().sort({ date: 1 });
        return NextResponse.json(notices, { status: 200 });
    } catch (error) {
        console.error("Error fetching Classes:", error);
        return NextResponse.json({ error: 'An error occurred', details: error }, { status: 500 });
    }
}
