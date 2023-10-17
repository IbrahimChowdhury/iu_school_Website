import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/connectDB";
// import  from "@/model/noticeModel";
import ClassRoutine from "@/model/classRoutine"
export async function DELETE(req: NextRequest) {
  try {
      await connectDB();
      let url: any = req.url.split("class/")[1];
      const deletedClass = await ClassRoutine.findByIdAndDelete({ _id: url });

      if (deletedClass) {
          // Class was deleted successfully
          console.log("Class deleted");
          return NextResponse.json({ status: 200, message: 'Class has been deleted' });
      } else {
          // Class was not found
          console.log("Class not found");
          return NextResponse.json({ status: 404, message: 'Class not found' });
      }
  } catch (error) {
      // Handle other errors
      console.error('An error occurred while deleting the class:', error);
      return NextResponse.json({ status: 500, message: 'Internal server error' });
  }
}

export async function GET(req:NextRequest) {
   try {
               await connectDB()     
               let url:any= req.url.split("class/")[1]
               let noticeData=  await ClassRoutine.findById({_id:url})
               if(noticeData)
               {
                 return NextResponse.json(noticeData,{status:200})
                }
                else{
                 return NextResponse.json({msg:"not found data"},{status:400})
               }
   } catch (error) {
    console.error(error)
    return NextResponse.json({message:'there is a error deleting data', error},{status:500})

   }
  
  }




  export async function PUT(req:Request) {
    try {
                await connectDB()    
                let reqBody:any= await req.json()
                let {title,body,imageLinks}=reqBody
                let url:any= req.url.split("class/")[1]
                let noticeData=  await ClassRoutine.findByIdAndUpdate({_id:url},{title:title,body:body,imageLinks:imageLinks})
                if (!noticeData) {
                  return NextResponse.json({ message: 'Notice not found' }, { status: 404 });
              }
                return NextResponse.json(noticeData,{status:200})
    } catch (error) {
     return NextResponse.json({message:'Notice deleted has been deleted', error})
    }
   
   }