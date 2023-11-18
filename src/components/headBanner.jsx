import React from 'react'

export default function HeadBanner() {
  return (
    <div>
       <header id='headbanner'>
  <div className="mx-auto  dark:bg-black bg-gradient-to-l from-green-600 to-green-800 p-2">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center w-full flex justify-between sm:text-left">
        <a href="/">

        <img src="iulogo.png" alt="" className=' w-20 border-4 ml-2 md:ml-10' />
        </a>
        <img src="mujib.png" alt="" className=' w-28 hidden md:block  ml-2 md:ml-10' />
        
            <img src="iusc.png" className='w-80 h-20 mr-2 md:mr-10 hidden md:block' alt="" />
            <div className='w-60 flex  flex-col justify-center  md:hidden'>
                <h1 className='text-lg text-white'>
                ISLAMIC UNIVERSITY 
                </h1>
                <h2 className='text-[10px]  text-white'>
                LABORATORY SCHOOL AND COLLEGE 
                </h2>
            </div>
      </div>
       
     
    </div>
  </div>
</header> 
    </div>
  )
}
