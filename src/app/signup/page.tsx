"use client"

import axios from 'axios'
import React, { useState } from 'react'

export default function page() {

  const [user, setuser] = useState({
    username:"",
    email:"",
    password:""
  })


  let handleSubmit=async(e:any)=>{
     e.preventDefault()
     try {
      
      await axios.post("/api/user/signup", user).then(()=>{
        console.log("data passed successfully")
      })
      .catch(()=>{
        console.log("Data not passed")
      })


     } catch (error) {
      console.log(error)
     }
  }
  

  return (

    <div className='h-screen flex justify-center items-center' >


          <div className='flex flex-col gap-7 bg-slate-800 p-5 w-[400px]  rounded-lg '>
            <h1 className='text-3xl'>SIGN UP</h1>
            <div>
              <label htmlFor="name">name : </label>
              <input type='text' onChange={(e)=>setuser({...user, username:e.target.value})}  className='text-black p-2 rounded-md' placeholder='name' />
            </div>
            <div>
              <label htmlFor="email">email : </label>
              <input type='email'  onChange={(e)=>setuser({...user, email:e.target.value})} className='text-black p-2 rounded-md' placeholder='email' />
            </div>
            <div>
              <label htmlFor="password">password : </label>
              <input type='password' onChange={(e)=>setuser({...user, password:e.target.value})} className='text-black p-2 rounded-md' placeholder='password' />
            </div>
            <button onClick={handleSubmit} className='text-white bg-slate-950 p-2 rounded-md hover:bg-slate-900'>SIGN UP </button>
          </div>



    </div>
  )
}
