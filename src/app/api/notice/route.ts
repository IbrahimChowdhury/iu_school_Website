
import { NextRequest, NextResponse } from "next/server";
import Notice from "@/model/noticeModel"
import connectDB from "@/dbConfig/connectDB";


export  async function POST(request:NextRequest) {
        try {

           await connectDB()

           let reqBody:any= await request.json()
           let {title,body,imageLinks}=reqBody


        //    console.log(title, body, imageLinks)

        let notice = new Notice({title,body,imageLinks})
        await notice.save()

       console.log(notice)
      //   console.log(savedNotice)
         return NextResponse.json({msg:"Notice added successfully"})
            
        } catch (error) {
         console.error('Error:', error);
         return NextResponse.json({ error: 'An error occurred in posting notice', details: error }, { status: 500 });
        }
}



   export async function GET(request:NextRequest){
            try {
               await connectDB()
               
            let notices=await Notice.find().sort({ date : -1})
             return   NextResponse.json(notices, {status:200})

            } catch (error) {
               console.log("error fatching notices:",error)
               return NextResponse.json({error},{status:500})
            }
   }