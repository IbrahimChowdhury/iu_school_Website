import axios from 'axios';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
import TeacherCard from './teachercard';

 const getTeacherData=async()=>{
try {
  const response = await fetch(`${process.env.url}/api/teacher`,{
    cache:"no-cache",
  });
  if(!response.ok)
  {
    throw new Error("failed to fetch teachers data")
  }
  return response.json()
} catch (error) {
  console.log(error.message)
}
}

const GetTeacherSection=async()=>{
  try {
    
    // const [teacher, setTeacher] = useState([]);
  
    // useEffect(() => {
    //   fetchTeacherData();
    // }, []);
  
    // const fetchTeacherData = async () => {
    //   try {
    //     const response = await axios.get("/api/teacher");
    //     setTeacher(response.data);
    //   } catch (error) {
    //     console.error("Error fetching teacher data: ", error);
    //   }
    // };
  
    let teacher = await getTeacherData()
  
    // console.log(teacher);
    
  
    if (teacher.length === 0) {
      return <div>No teacher data available.</div>;
    }
  
  
    const first = teacher[0];
    const second = teacher[1];
   
    const third = teacher[2];
  
    return (
      <div>
        <div className="flex sm:flex-row mb-10 gap-3 flex-col m-4 md:m-0 justify-center items-center">
          <TeacherCard imageLink={first?.imageLinks[0]} title={first?.title} body={first?.name} />
          <TeacherCard imageLink={second?.imageLinks[0]} title={second?.title} body={second?.name} />
        </div>
  
        <div>
          <section className="mt-10 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center items-center  p-2 mx-auto  lg:py-10 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm  xl:max-w-lg lg:text-left">
                <h1 className="text-3xl font-bold leadi sm:text-4xl">
                  Speech Of Head Teacher
                </h1>
                <p className="mt-6 text-justify text-lg sm:mb-12">
                  কুষ্টিয়া জেলার তথা বাংলাদেশের মধ্যে একটি স্বনামধ্য বিদ্যাপীঠ কুষ্টিয়া জিলা স্কুল। এই বিদ্যালয়ের শিক্ষার্থীরা জাতীয় ও আন্তর্জাতিক পরিমণ্ডলে রেখেছে তাদের যোগ্যতার স্বাক্ষর।
                  সরকারের ডিজিটালাইজেশন কার্যক্রমের অংশ হিসেবে বিদ্যালয়ের গৌরবময় পরিক্রমায় এবার যুক্ত হল নিজস্ব
                  ওয়েবসাইট। অবাধ তথ্য প্রবাহ নিশ্চিত করা এই ওয়েবসাইটের লক্ষ্য এবং উদ্দেশ্য।
                  ওয়েবসাইট-এর মাধ্যমে শিক্ষক-শিক্ষিকা, শিক্ষার্থী ও অভিভাবকগণ সহজ ও দ্রুততম সময়ে তথ্য ও উপাত্ত সেবা
                  পাবে এবং দাপ্তরীক কাজের সচ্ছতা, গতিশীলতা, জবাবদিহিতা নিশ্চিত হবে ।
                </p>
              </div>
              <div className="flex items-center justify-center pl-12 h-80 lg:mt-0  md:h-96 ">
                {/* <Image height={500} width={500}  src={first?.imageLinks[0]} alt="" className="object-contain rounded-xl h-48 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                <img src={first?.imageLinks[0]} alt="" className=" rounded-xl h-80   md:h-96 " />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in GetTeacherSection: ", error);
    return <div>Error loading teacher data.</div>;
  }
}

export default GetTeacherSection;
