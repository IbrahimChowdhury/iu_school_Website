'use client'
import React, { useEffect, useState } from 'react'
import {useRouter} from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
    const notify = () => toast.error("Please enter right password and email");

    const router = useRouter();

        const [user, setuser] = useState({
            email: '',
            password: '',
        })
        const [buttonDisabled, setButtonDisabled] = React.useState(false);
        const [loading, setLoading] = React.useState(false);

        const onLogin = async (e:any) => {
            e.preventDefault();
            try {
                setLoading(true);
                const response = await axios.post("/api/user/signin", user);
                console.log("Login success", response.data);
                router.push("/admin");
            } catch (error:any) {
                console.log("Login failed", error.message);
                notify();
            } finally{
            setLoading(false);
            }
        }
    
        useEffect(() => {
            if(user.email.length > 0 && user.password.length > 0) {
                setButtonDisabled(false);
            } else{
                setButtonDisabled(true);
            }
        }, [user]);
    
        
    return (

        <div className='mt-10 my-44'>
                <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
    
        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">{loading ? "Processing" : "Welcome Admin"}</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login to enter Admin Panel</p>

        <form>
            <div className="w-full mt-4">
                <input  value={user.email} onChange={(e)=>setuser({...user, email:e.target.value})} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div className="w-full mt-4">
                <input value={user.password} onChange={(e)=>setuser({...user, password:e.target.value})} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div className="flex items-center justify-center mt-4">
                {/* <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a> */}

                <button onClick={onLogin} className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                {buttonDisabled ? "No signIn" : "SignIn"}
                </button>
            </div>
        </form>
    </div>

    <ToastContainer />

</div>

        </div>
      


    )
}
