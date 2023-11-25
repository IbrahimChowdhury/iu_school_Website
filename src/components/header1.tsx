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
    path: ["/ClassRoutine","/examRoutine","/result"],
    label: "Academic",
    sub: ["Class Routine","Exam Routine","Result"]
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
    path: ['/notice'],
    label: "Notice",
    sub: []
  },

]

export default function Header() {

  const { theme, setTheme } = useTheme()
  const url = usePathname()


  return (
    <div className='mx-auto md:w-4/5 md:h-16 '>

      <header className='flex justify-center px-4 py-3 pl-5 border-2 rounded-lg shadow-md sm:flex sm:pl-10 sm:h-14 sm:justify-center shadow-slate-300 '>
        <div className='flex items-center'>

          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 md:hidden" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {route.map((route, i) => (
                  <div key={i}>
                    {route?.sub?.length > 0 ?
                    <div>
                    <div className="relative inline-block group">

                      <button className='flex items-center gap-2 text-sm font-semibold text-black transition-all duration-300 group hover:text-base focus:outline-none '>
                        {route.label}
                        <span className="transition-all duration-300 group-hover:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </button>
                      <div className="absolute left-0 z-50 hidden p-3 space-y-2 text-center bg-white rounded-md shadow-md group-hover:block top-full">
                        <div className='flex flex-col gap-3'>
                        {
                          route.sub.map((sub: any, i: any) => (
                            <a key={i} href={route.path[i]} className={url === route.path[i] ? "border-b-2 border-b-red-700   dark:bg-slate-700  " : "" + `text-sm hover:border-b-2  hover:border-b-red-700 dark:hover:bg-slate-700 px-5  hover:text-base transition-all duration-200`}>
                              {sub}
                            </a>
                          ))
                        }
                        </div>

                      </div>

                    </div>
                  </div> :

                  <Link
                    key={i}
                    href={route.path[0]}
                    className={url === route.path[0] ? "border-b-2 border-b-red-700 dark:border-b-red-700 p-2 " : "" + `text-sm hover:border-b-2 hover:border-b-red-700 hover:text-lg p-1 font-medium transition-all duration-300`}
                  >
                    {route.label}
                  </Link>
                    }
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* <Link href={"/"} className='ml-4 lg:ml-0'>

            <h1 className="text-xl font-bold">IU School</h1>

          </Link> */}

        </div>

        <nav className='items-center hidden mx-6 space-x-4 lg:space-x-6 md:block'>
          <div className='flex items-center transition-all duration-700 gap-7'>
            {route.map((route, i) => (
              <div key={i}>
                {route?.sub?.length > 0 ?
                  <div>
                    <div className="relative inline-block group">

                      <button className='flex items-center gap-2 text-sm font-semibold text-black transition-all duration-300 group hover:text-base hover:border-b-2 hover:border-b-red-700 focus:outline-none '>
                        {route.label}
                        <span className="transition-all duration-300 group-hover:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </button>
                      <div className="absolute right-0 z-50 hidden p-3 space-y-2 text-center bg-white rounded-md shadow-md group-hover:block top-full">
                        <div className='flex flex-col gap-3 w-36'>
                        {
                          route.sub.map((sub: any, i: any) => (
                            <a key={i} href={route.path[i]} className={url === route.path[i] ? "border-b-2 border-b-red-700   dark:bg-slate-700  " : "" + `text-sm hover:border-b-2  hover:border-b-red-700 dark:hover:bg-slate-700 px-5  hover:text-base transition-all duration-200`}>
                            {sub}
                            </a>
                          ))
                        }
                        </div>

                      </div>

                    </div>
                  </div> :

                  <Link
                    key={i}
                    href={route.path[0]}
                    className={url === route.path[0] ? "border-b-2 border-b-red-700 dark:border-b-red-700 p-2 " : "" + `text-sm hover:border-b-2 hover:border-b-red-700 hover:text-lg p-1 font-medium transition-all duration-300`}
                  >
                    {route.label}
                  </Link>
                }
              </div>
            ))}
          </div>
        </nav>
        {/* 
        <Button
          variant={'ghost'}
          size={'icon'}
          aria-label='Toggle Theme'
          className='mr-6'
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="w-6 h-6 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute w-6 h-6 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>

        </Button> */}

      </header>


    </div>
  )
}
