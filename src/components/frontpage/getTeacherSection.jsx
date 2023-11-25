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

        {/* iir main teacher speech section  */}
          <section className="py-5 bg-gradient-to-l from-lime-50 to-slate-200 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col-reverse items-center justify-center w-3/4 mx-auto lg:py-10 lg:flex-row-reverse lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm md:p-6 xl:max-w-lg lg:text-left">
                <h1 className="text-3xl font-bold leadi sm:text-4xl">
                  Chairperson's Speech
                </h1>
                <div className="mt-6 text-lg text-justify sm:mb-12">
                Esteemed students, parents, and distinguished guests, As the Professor of the English Department, Director of IIER, and Chairperson of Islamic University School and College, I stand before you with immense pride. Our academic community is a beacon of knowledge, fostering values that extend beyond textbooks. Embrace curiosity, question the norm, and contribute to the global discourse. Together, let's tread the path of wisdom, guided by Islamic principles, towards a future where your intellect shapes a compassionate and enlightened society.
          <br /> <br />
          <h1 className='font-semibold'>
            Professor Dr. Md. Mamunur Rahman
            </h1>
            <h1>
   Chairperson of the Governing Body 
            </h1>


              </div>
              </div>
              <div className="relative justify-center mt-5 w-72 md:w-1/3 md:pl-12 h-80 lg:mt-0 md:h-96 ">
                {/* <Image height={500} width={500}  src={first?.imageLinks[0]} alt="" className="object-contain h-48 rounded-xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                <Image fill src={"/chair.jpg"} alt="" className="absolute object-contain rounded-lg h-80 md:h-96" />
              </div>
            </div>
          </section>

          
        <div>

        {/* front teacher section */}
          {/* <div className="flex flex-col items-center justify-center w-full gap-3 p-10 py-7 bg-gradient-to-r from-green-50 to-slate-300 sm:flex-row">

            <TeacherCard imageLink={first?.imageLinks[0]} title={first?.title} body={first?.name} id={first} />
            <TeacherCard imageLink={second?.imageLinks[0]} title={second?.title} body={second?.name}   />

            <div>
            </div>
          </div> */}

      {/* Head Teacher Speech section */}

          <section className="py-5 bg-gradient-to-l from-orange-100 to-slate-200 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col items-center justify-center w-3/4 mx-auto lg:py-10 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm md:p-6 xl:max-w-lg lg:text-left">
                <h1 className="text-3xl font-bold leadi sm:text-4xl">
                  Head Teacher's Speech
                </h1>
                <div className="mt-6 text-lg text-justify sm:mb-12">
                Islamic University Laboratory School and College is an educational institution run by the University Authority. Since 1996, the institution has been spreading the light of education in the area with its reputation. Already the institution has become resplendent in its own glory. The institution has been able to gain considerable reputation in sports and other co-curricular activities along with public examinations. I strongly believe that with the concerted efforts of the students, teachers, parents, the university administration will soon become a reputed educational institution of Jessore Education Board. I wish the future prosperity and success of this educational institution.
                
          <br /> <br />
          <h1 className='font-semibold'>
            Md. Mozammel Hoque Mollah
            </h1>

Head Teacher (In-charge)


                </div>
              </div>
              <div className="relative justify-center mt-5 w-72 md:w-1/3 md:pl-12 h-80 lg:mt-0 md:h-96 ">
                {/* <Image height={500} width={500}  src={first?.imageLinks[0]} alt="" className="object-contain h-48 rounded-xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                <Image fill src={first?.imageLinks[0]} alt="" className="absolute object-contain rounded-lg h-80 md:h-96" />
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
