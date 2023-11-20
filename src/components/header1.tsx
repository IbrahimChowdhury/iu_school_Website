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
    path: ["/ClassRoutine"],
    label: "Academic",
    sub: ["ClassRoutine",]
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
    <div className='mx-auto md:w-4/5 md:h-16  '>

      <header className='sm:flex rounded-lg sm:pl-10 pl-5 sm:h-14 flex justify-center  sm:justify-center py-3 px-4 border-2   shadow-md shadow-slate-300 '>
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
                    <div className="relative group inline-block">

                      <button className='text-black group flex text-sm   font-semibold  hover:text-base  items-center gap-2 transition-all duration-300 focus:outline-none '>
                        {route.label}
                        <span className="transition-all duration-300 group-hover:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </button>
                      <div className="absolute z-50 hidden  p-3  text-center bg-white  space-y-2 rounded-md shadow-md group-hover:block top-full left-0">
                        <div className='flex flex-col gap-3'>

                        {
                          route.sub.map((sub: any, i: any) => (
                            <a key={i} href={`/${sub}`} className={url === route.path[i] ? "border-b-2 border-b-red-700   dark:bg-slate-700  " : "" + `text-sm hover:border-b-2  hover:border-b-red-700 dark:hover:bg-slate-700 px-5  hover:text-base transition-all duration-200`}>
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

        <nav className='mx-6 items-center  space-x-4 lg:space-x-6 hidden md:block'>
          <div className='flex gap-7 items-center transition-all duration-700'>
            {route.map((route, i) => (
              <div key={i}>
                {route?.sub?.length > 0 ?
                  <div>
                    <div className="relative group inline-block">

                      <button className='text-black group flex text-sm   font-semibold  hover:text-base hover:border-b-2 hover:border-b-red-700  items-center gap-2 transition-all duration-300 focus:outline-none '>
                        {route.label}
                        <span className="transition-all duration-300 group-hover:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </button>
                      <div className="absolute z-50 hidden  p-3 text-center bg-white  space-y-2 rounded-md shadow-md group-hover:block top-full right-0">
                        <div className='flex flex-col gap-3'>
                        {
                          route.sub.map((sub: any, i: any) => (
                            <a key={i} href={`/${sub}`} className={url === route.path[i] ? "border-b-2 border-b-red-700   dark:bg-slate-700  " : "" + `text-sm hover:border-b-2  hover:border-b-red-700 dark:hover:bg-slate-700 px-5  hover:text-base transition-all duration-200`}>
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
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>

        </Button> */}

      </header>


    </div>
  )
}
