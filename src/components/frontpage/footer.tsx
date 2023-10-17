import React from 'react'

export default function Footer() {
  return (
    <div className=''>
        <div>
        <footer className=" border-t-2   border-b-2 bg-white dark:bg-gray-900 ">
    <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
            Ismaic University Laboratory School
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Home
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Notice
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Teachers
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Students
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Administration
            </a>
           
        </div>

    </div>
    <div className='flex justify-center mb-4'>
        <p className="mt-6 text-sm text-center text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023. Design and Developed by ICT department, IU</p>
    </div>
</footer>
        </div>
    </div>
  )
}