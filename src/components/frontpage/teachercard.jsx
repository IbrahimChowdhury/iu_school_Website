import Image from 'next/image'
import React from 'react'
export default function TeacherCard({imageLink,title,body}) {
  
  return (
    <div>
        <div className="w-64 max-w-xs p-3 rounded-md shadow-md md:p-6 bg-slate-100 group hover:cursor-pointer dark:bg-gray-900 dark:text-gray-50">
          <div className='relative h-64 md:h-72 '>
	<Image fill src={imageLink} alt="teacher" className="absolute object-contain w-full transition-all duration-700 rounded-md group-hover:scale-110 dark:bg-gray-500" />
          </div>
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold ">{title}</h2>
	</div>
	<p className="mt-3 dark:text-gray-100">{body}</p>
</div>


    </div>
  )
}
