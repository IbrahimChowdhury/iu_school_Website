import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className=''>
  <footer className="bg-gray-100 mt-8">
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:pt-5"
  >
   

    <div className="lg:flex lg:items-center lg:justify-between">
      <div  className='flex flex-col lg:flex-row lg:gap-3 '>
        <div className="flex justify-center text-teal-600 lg:justify-start">
         <Image height={400} width={400} src="/iulogo.png" className='w-24' alt=""  />
        </div>

        <p
          className="mx-auto mt-6 max-w-md  text-gray-500 lg:text-left"
        >
          The Islamic University Laboratory School and College (IULSC) is an educational institution located in Kushtia, Bangladesh. 
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Home
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/notice">
            Notice
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/teachers">
            Teachers
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/students">
            Students
          </a>
        </li>
      </ul>
    </div>

    <p className="mt-3 text-center text-sm text-gray-500 lg:text-center">
      Copyright &copy; 2023. Developed and design by ICT department,IU
    </p>
  </div>
</footer>
    </div>
  )
}
