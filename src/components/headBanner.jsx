import Image from 'next/image'
import React from 'react'

export default function HeadBanner() {
  return (
    <div>
       <header id='headbanner'>
  <div className="mx-auto  dark:bg-black bg-gradient-to-l from-green-600 to-green-800 p-2">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center w-full flex justify-between sm:text-left">
        <a href="/">

        <Image src="/iulogo.png" width={100} height={100} alt="" className=' w-20 border-4 ml-2 md:ml-10' />
        </a>
        <Image src="/mujib.png" width={100} height={100} alt="" className=' w-28 hidden md:block  ml-2 md:ml-10' />
        
            {/* <Image src="/iusc.png" width={500} height={500} className='w-80 h-20 mr-2 md:mr-10 hidden md:block' alt="" /> */}
            <div className='w-60 lg:w-1/3 flex items-center gap-3 justify-center'>
              <div>
                <Image height={100} width={100} className='hidden lg:block' src={"/iusclogo.png"} />
              </div>
               <div > 
                <h1 className='text-[10px] lg:text-lg lg:font-semibold text-white'>
                ISLAMIC UNIVERSITY 
                </h1>
                <h2 className=' text-[10px] lg:text-lg lg:font-semibold  text-white'>
                LABORATORY SCHOOL AND COLLEGE 
                </h2>
               </div>
            </div>
      </div>
       
     
    </div>
  </div>
</header> 
    </div>
  )
}
