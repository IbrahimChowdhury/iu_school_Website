import axios from 'axios';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
import TeacherCard from './teachercard';

const getTeacherData = async () => {
  try {
    const response = await fetch(`${process.env.url}/api/teacher`, {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("failed to fetch teachers data")
    }
    return response.json()
  } catch (error) {
    console.log(error.message)
  }
}

const GetTeacherSection = async () => {
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
      <div className='w-full'>
        <div>

          <div className="py-7 flex bg-gradient-to-r w-full p-10  from-green-50 to-slate-300 sm:flex-row  gap-3 flex-col   justify-center items-center">

            <TeacherCard imageLink={first?.imageLinks[0]} title={first?.title} body={first?.name} />
            <TeacherCard imageLink={second?.imageLinks[0]} title={second?.title} body={second?.name} />

            <div>
            </div>
          </div>

          <section className=" py-5 bg-gradient-to-l  from-lime-50 to-slate-200 dark:bg-gray-800 dark:text-gray-100">
            <div className=" w-3/4 flex flex-col justify-center items-center  mx-auto  lg:py-10 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center md:p-6 text-center rounded-sm  xl:max-w-lg lg:text-left">
                <h1 className="text-3xl font-bold leadi sm:text-4xl">
                  Speech Of Head Teacher
                </h1>
                <p className="mt-6 text-justify text-lg sm:mb-12">
                ইসলামী বিশ্ববিদ্যালয় ল্যাবরেটরি স্কুল এন্ড কলেজটি বিশ্ববিদ্যালয় কর্তৃক পরিচালিত একটি শিক্ষা প্রতিষ্ঠান। ১৯৯৬ সাল থেকে প্রতিষ্ঠানটি সুনামের সাথে অত্র এলাকায় শিক্ষার আলো ছড়িয়ে যাচ্ছে। ইতোমধ্যে প্রতিষ্ঠানটি তার স্বকীয় মহিমায় সমুজ্জ্বল হয়ে উঠেছে। প্রতিষ্ঠানটি পাবলিক পরীক্ষাসহ খেলাধুলা ও অন্যান্য সহপাঠ্য কার্যক্রমে যথেষ্ট সুনাম অর্জন করতে সক্ষম হয়েছে। আমি দৃঢ়ভাবে বিশ্বাস করি শিক্ষার্থী, শিক্ষক, অভিভাবক বিশ্ববিদ্যালয় প্রশাসনের সমন্বিত প্রচেষ্টায় অচিরেই যশোর শিক্ষা বোর্ডের একটি খ্যাতিমান শিক্ষা প্রতিষ্ঠানে পরিণত হবে। আমি এ শিক্ষা প্রতিষ্ঠানের উত্তরোত্তর সমৃদ্ধি ও সাফল্য কামনা করি।
          <br /> <br />মুহ: মুজাম্মিল হক মোল্লাহ 
<br />প্রধান শিক্ষক (ভারপ্রাপ্ত)। 

                </p>
              </div>
              <div className="relative justify-center w-72 md:w-1/3 md:pl-12 h-80 lg:mt-0  md:h-96 ">
                {/* <Image height={500} width={500}  src={first?.imageLinks[0]} alt="" className="object-contain rounded-xl h-48 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                <Image height={400} width={400} src={first?.imageLinks[0]} alt="" className="absolute object-contain rounded-xl h-80   md:h-96 " />
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
