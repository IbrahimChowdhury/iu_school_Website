import React from 'react'

export default function TeacherCard({imageLink,title,body}) {
  return (
    <div>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={imageLink} alt="teacher" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold tracki">{title}</h2>
	</div>
	<p className="dark:text-gray-100 mt-3">{body}</p>
</div>
    </div>
  )
}
