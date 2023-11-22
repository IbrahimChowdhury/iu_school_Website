import Image from 'next/image'
import React from 'react'
export default function TeacherCard({imageLink,title,body}) {
  
  return (
    <div>
        <div className="max-w-xs p-6 w-64 bg-slate-100 group hover:cursor-pointer rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <div className='relative h-52 md:h-72'>
	<Image height={400} width={400} src={imageLink} alt="teacher" className=" group-hover:scale-110 absolute object-contain transition-all duration-700   w-full rounded-md  dark:bg-gray-500" />
          </div>
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold ">{title}</h2>
	</div>
	<p className="dark:text-gray-100 mt-3">{body}</p>
</div>


    </div>
  )
}
