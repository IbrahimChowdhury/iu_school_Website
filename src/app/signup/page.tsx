// "use client"

// import axios from 'axios'
// import React, { useState } from 'react'

// export default function SignUpPage() {

//   const [user, setUser] = useState({
//     username:"",
//     email:"",
//     password:""
//   })


//   let handleSubmit=async(e:any)=>{
//      e.preventDefault()
//      try {
      
//       await axios.post("/api/user/signup", user).then(()=>{
//         console.log("data passed successfully")
//       })
//       .catch(()=>{
//         console.log("Data not passed")
//       })


//      } catch (error) {
//       console.log(error)
//      }
//   }
  

//   return (

//     <div className='flex items-center justify-center h-screen' >


//           <div className='flex flex-col gap-7 bg-slate-800 p-5 w-[400px]  rounded-lg '>
//             <h1 className='text-3xl'>SIGN UP</h1>
//             <div>
//               <label htmlFor="name">name : </label>
//               <input type='text' onChange={(e)=>setUser({...user, username:e.target.value})}  className='p-2 text-black rounded-md' placeholder='name' />
//             </div>
//             <div>
//               <label htmlFor="email">email : </label>
//               <input type='email'  onChange={(e)=>setUser({...user, email:e.target.value})} className='p-2 text-black rounded-md' placeholder='email' />
//             </div>
//             <div>
//               <label htmlFor="password">password : </label>
//               <input type='password' onChange={(e)=>setUser({...user, password:e.target.value})} className='p-2 text-black rounded-md' placeholder='password' />
//             </div>
//             <button onClick={handleSubmit} className='p-2 text-white rounded-md bg-slate-950 hover:bg-slate-900'>SIGN UP </button>
//           </div>



//     </div>
//   )
// }
