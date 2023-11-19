// "use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { Link } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const getTeachersData = async () => {
    try {
        const response = await fetch(`${process.env.url}/api/teacher`, {
            cache: "no-cache",
        });
        if (!response.ok) {
            throw new Error("failed to fetch classrooms  data")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const TeacherSection = async () => {
    const AllteachersData = await getTeachersData()
    const first: any = AllteachersData[2]

    if (!first) {
        return (
            <div>
                <div>
                    <div className='w-screen h-screen flex justify-center items-center'>
                        <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
                            <div className="w-1/3 bg-gray-300 dark:bg-gray-600"></div>

                            <div className="w-2/3 p-4 md:p-4">
                                <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                                <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                                <div className="flex mt-4 item-center gap-x-2">
                                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                </div>

                                <div className="flex justify-between mt-6 item-center">
                                    <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                                    <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (first) {
        return (
            <div className='py-10 bg-gradient-to-b from-green-50 to-slate-200 ' >
                <h1 className='text-center text-2xl font-semibold my-5'>Teachers Section </h1>
                <div className='flex justify-center items-center'>

                    <div className='flex flex-col justify-center  sm:flex-row flex-wrap gap-7 '>
                        {
                            AllteachersData.map((teacher: any, i: any) => (
                                <div key={i} className="w-64 
                        bg-white group hover:cursor-pointer
                        rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                    <div className='relative h-44'>

                                        <Image height={400} width={400} src={teacher.imageLinks[0]} alt="" className="absolute object-cover  transition-all duration-300  group-hover:scale-95 object-top  w-full rounded-t-md h-44 dark:bg-gray-500" />
                                    </div>

                                    <div className="flex flex-col p-3 justify-between  h-60">


                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracki">{teacher.title}</h2>
                                            <p className="dark:text-gray-100 line-clamp-2">{teacher.name}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Button className='transition-all duration-300 hover:translate-x-3' ><a href={`/teachers/${teacher?._id}`}>View Profile</a></Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>


            </div>
        )
    }
}


export default TeacherSection
