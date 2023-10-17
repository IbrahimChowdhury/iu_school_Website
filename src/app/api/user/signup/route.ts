import connectDB from "@/dbConfig/connectDB";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import User from "@/model/userModel"


connectDB()

export  async function POST(request:NextRequest) {
        try {
           let reqBody:any= await request.json()
           let {username,email,password}=reqBody

           console.log(reqBody)

           const user= await User.findOne({email})


           if(user)
           {
            return NextResponse.json({error:"user is already exist"},{status:400})
           }

           const salt=await bcryptjs.genSalt(10)
           const hashedPassword=await bcryptjs.hash(password,salt)

           const newUser=new User({username,email,password:hashedPassword})

           const savedUser= await newUser.save()
            
           console.log(savedUser)
           return NextResponse.json({msg:"User added successfully", savedUser})

            
        } catch (error) {
            return NextResponse.json({error})
        }
}
