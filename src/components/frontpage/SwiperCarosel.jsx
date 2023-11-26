"use client"
import React from 'react'
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';

const images = [
    "iuSchool.jpg",
    "iuSchool10.jpg",
    "iuteachers2.jpg",
    "iuteachers.jpg",
    "iuSchool5.jpg",
    "iuSchool3.jpg",
    "iuSchoolSport.jpg",
  ];
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./swiper.css"

import Image from 'next/image';

  const SwiperCarosel = () => {
  return (
    <Swiper
      // install Swiper modules
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,

          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mb-4 "
        
    >
        {images?.map((image, i)=>(
      <SwiperSlide key={i}  >
        <div className='relative w-full lg:h-[600px] xl:h-[80vh] h-60 '>

        {/* <img  className='absolute object-contain w-10 h-11 ' src={"/"+image} alt="" /> */}
        <Image
              className='absolute object-fill w-full h-full'
              src={`/${image}`}
              alt={`Slide ${i + 1}`}
              fill
            //   objectFit="(max-width: 600px) fill, contain "
            objectFit='fill'
            />
        </div>


      </SwiperSlide>
        ))}

    </Swiper>
  )
}
export default SwiperCarosel
