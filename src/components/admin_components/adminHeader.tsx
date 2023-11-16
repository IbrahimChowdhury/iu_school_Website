"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import {usePathname,useRouter} from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from '../ui/separator'
import axios from 'axios'
let route=[
    {
        
        path:'/admin/notice',
        label:"Notice"
    },
    {
        path:'/admin/teachers',
        label:"Teachers"
    },
    {
        path:'/admin/students',
        label:"Students"
    },
    {
        path:'/admin/class',
        label:"Academic"
    },

]

function AdminHeader() {
  const router = useRouter()

  const logout = async () => {
    try {
        await axios.get('/api/user/logout')
        router.push('/login')
    } catch (error:any) {
        console.log(error.message);
    }
}
    // getting url name 
    let url=usePathname()
    console.log(url)

  return (
    <div>
        <header>
            <div className='sm:hidden'>
            <Sheet>
              <SheetTrigger>
               <h1 className='p-2 m-6 bg-black dark:bg-white rounded-lg 
                text-white dark:text-black'>Admin Menu</h1>
                <Separator />
                
              </SheetTrigger>
              <SheetContent side="left" className="w-[260px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {route.map((route, i) => (
                      <Link
                      key={i}
                      href={route.path}
                      className={url===route.path?"bg-slate-300 dark:bg-slate-700 p-1 rounded-lg ":""+ `block px-2 py-1 text-lg`}
                      >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            </div>
        
            <nav className=' bg-slate-200 dark:bg-slate-900 w-[250px] min-h-screen max-h-max  content-between flex-col py-5 px-9 hidden  sm:block'>
                <div className=' max-h-screen flex flex-col content-between '>
                  <div className='flex flex-col gap-4 '>
                <h1 className='text-2xl'>Admin panel</h1>
                <Button onClick={logout}>Logout</Button>
                  </div>
                <div className='flex flex-col gap-4 mt-24'>
                {route.map((route,i)=>(
                  
                    <Link 
                    key={i}
                    href={route.path}
                    className={ url===route.path?"bg-slate-300 dark:bg-slate-700 p-1 rounded-lg ":""+ `text-sm hover:bg-slate-300 dark:hover:bg-slate-700 p-1 rounded-md font-medium transition-colors`}
                    >
                        {route.label}
                    </Link>
               
                ))}
                </div>

                </div>
                

            </nav>

        </header>
    </div>
  )
}

export default AdminHeader