import React from 'react'
import { AiFillLinkedin, AiOutlineLink } from "react-icons/ai"
export default function OtherWebLink() {
  return (
    <div className='flex items-center justify-center w-full '>
        
       <div className="flex flex-col m-2 my-10 overflow-hidden bg-white border-2 divide-y rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
    <button className="flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 h-14 bg-slate-300 dark:bg-slate-600 sm:text-base sm:px-6 dark:text-gray-300 ">
        <span>
    <AiOutlineLink className="text-2xl"/>
        </span>
       প্রয়োজনীয় ওয়েবসাইট লিংক
       
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
       <a href="https://bangladesh.gov.bd/">
       বাংলাদেশ জাতীয় তথ্য বাতায়ন
       </a>
    </button>

   <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <a href="http://www.moedu.gov.bd/">
        শিক্ষা মন্ত্রণালয়
        </a>
    </button>

    <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <a href="https://www.jessoreboard.gov.bd/">
        মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর</a> 
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <a href="http://www.dshe.gov.bd/">মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</a>
    </button>

   <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <a href="http://www.educationboardresults.gov.bd/">
        শিক্ষাবোর্ড রেজাল্ট
        </a>
    </button>

    <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <a href="http://www.nctb.gov.bd/">
        জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (এনসিটিবি)
        </a>
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <a href="http://www.kushtia.gov.bd/">
        কুষ্টিয়া জেলা প্রশাসক অফিস ওয়েব পোর্টাল
        </a>
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <a href="http://kusgghs.edu.bd/">
        কুষ্টিয়া সরকারি বালিকা উচ্চ বিদ্যালয়
        </a>
    </button>
  
</div>
    </div>
  )
}
