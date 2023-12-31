import Image from 'next/image'
import React from 'react'
import image from "@/../public/iuSchool.jpg"

import {format} from "date-fns"
 export default function HeroSection() {
  return (
    <div>
        <section className={`text-black bg-gradient-to-t from-slate-200 to-green-200 body-font mb-4  md:p-10`} >
  <div className="flex flex-col items-center justify-center px-5 py-10 mx-auto ">
    <div className="flex flex-col items-center justify-center w-full text-center lg:w-2/3">
      <h1 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white title-font md:w-3/4 sm:text-4xl">Islamic University Laboratory School & College</h1>
      <p className="mb-8 text-lg leading-relaxed text-justify dark:text-gray-200">Islamic University Laboratory School & College, Kushtia is a Bangladeshi School run by the Institute of Islamic Education and Research (IIER) of the Islamic University, Kushtia,[1] Shortly known IU Lab School and College. It is located inside Islamic University Kushtia. The school also affiliated to the Ministry of Education and Jessore Board of Education.[2] This school was established in 1996, and College section open in 2000.[3] This admissions are based on Government rules and Classes up to 1-12 are taught here.</p>      
    </div>
  </div>
</section>
<div>
  
</div>

    </div>
  )
}
