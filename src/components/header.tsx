"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Sun, Moon, Menu } from "lucide-react"
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from "next/navigation"

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiOutlineDown } from 'react-icons/ai'

let route = [
  {
    path: ['/'],
    label: "Home",
    sub: []
  },
  {
    path: ['/notice'],
    label: "Notice",
    sub: []
  },
  {
    path: ['/teachers'],
    label: "Teachers",
    sub: []
  },
  {
    path: ['/students'],
    label: "Students",
    sub: []
  },
  {
    path: ["/ClassRoutine"],
    label: "Academic",
    sub: ["ClassRoutine",]
  }

]

export default function Header() {

  const { theme, setTheme } = useTheme()
  const url = usePathname()


  return (
    <div className='mx-auto w-full  '>

      <header className='sm:flex rounded-lg sm:pl-10 pl-5 flex justify-between sm:justify-between py-3 px-4 border-b  shadow-md'>
        <div className='flex items-center'>

          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {route.map((route, i) => (
                  <div key={i}>
                    {route?.sub?.length > 0 ?
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger className='flex hover:bg-slate-300 dark:hover:bg-slate-700 p-1 rounded-md  items-center gap-1'>{route.label} 
                          {/* <svg className="w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg> */}
                            <AiOutlineDown/>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {
                              route.sub.map((sub:any,i:any)=>(
                                <DropdownMenuItem key={i} className={url === route.path[i] ? "bg-slate-300 dark:bg-slate-700 p-1 rounded-lg " : "" + `text-sm hover:bg-slate-300 dark:hover:bg-slate-700 p-1 rounded-md font-thin transition-colors`}>
                                                                    <a href={`/${sub}`}>{sub}</a>

                                </DropdownMenuItem>
                              ))
                            }
                            
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div> :

                      <Link
                        key={i}
                        href={route.path[0]}
                        className={url === route.path[0] ? "bg-slate-300 dark:bg-slate-700 p-2 rounded-lg " : "" + `text-sm hover:bg-slate-300 dark:hover:bg-slate-700 p-1 rounded-md font-medium transition-colors`}
                      >
                        {route.label}
                      </Link>
                    }
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href={"/"} className='ml-4 lg:ml-0'>

            <h1 className="text-xl font-bold">IU School</h1>

          </Link>

        </div>

        <nav className='mx-6 items-center  space-x-4 lg:space-x-6 hidden md:block'>
          <div className='flex gap-7 items-center'>
        {route.map((route, i) => (
                  <div key={i}>
                    {route?.sub?.length > 0 ?
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger className='flex hover:bg-slate-300 dark:hover:bg-slate-700 p-1 rounded-md  items-center gap-1'>{route.label} 
                          {/* <svg className="w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg> */}
                                    <AiOutlineDown/>

                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {
                              route.sub.map((sub:any,i:any)=>(
                                <DropdownMenuItem key={i} className={url === route.path[i] ? "bg-slate-300 dark:bg-slate-700 p-1 rounded-lg " : "" + `text-sm hover:bg-slate-300 dark:hover:bg-slate-700 p-1 rounded-md font-thin transition-colors`}>
                                  <a href={`/${sub}`}>{sub}</a>
                                </DropdownMenuItem>
                              ))
                            }
                            
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div> :

                      <Link
                        key={i}
                        href={route.path[0]}
                        className={url === route.path[0] ? "bg-slate-300 dark:bg-slate-700 p-2 rounded-lg shadow-sm shadow-black " : "" + `text-sm hover:bg-slate-300 dark:hover:bg-slate-700 p-1 rounded-md font-medium transition-all duration-200`}
                      >
                        {route.label}
                      </Link>
                    }
                  </div>
                ))}
          </div>
        </nav>

        <Button
          variant={'ghost'}
          size={'icon'}
          aria-label='Toggle Theme'
          className='mr-6'
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>

        </Button>

      </header>


    </div>
  )
}
