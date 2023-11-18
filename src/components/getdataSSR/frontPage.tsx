// "use client"
import  FrontNotice  from '@/components/frontpage/frontNotice'
import GetTeacherSection from "@/components/frontpage/getTeacherSection"
import HeroSection from '@/components/frontpage/heroSection'
import OtherWebLink from '@/components/frontpage/otherWebLink'
import FrontCarosel from "@/components/frontpage/frontCarosel"
// import {FrontHeadNotice} from "@/components/frontpage/frontHeadNotice"
import Image from 'next/image'
import Location from './Location'
import Divider from '@/components/divider'

export default function  HomePage() {
  
  return (
    <div>


    <main className=" flex min-h-screen flex-col items-center justify-between ">
      
      {/* <FrontHeadNotice/> */}
      
      <FrontCarosel />
      <HeroSection/>
      <GetTeacherSection/>
      <FrontNotice/>
      <OtherWebLink/>
    </main>
      {/* <div className=" h-72  bg-gray-300"> */}
    {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe> */}
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5756086513434!2d89.1492327752335!3d23.726844778686438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39feeb6d35e80a37%3A0x364dabd88f31e0d7!2sIslamic%20University%20Laboratory%20School%20%26%20College!5e0!3m2!1sen!2sbd!4v1695502318506!5m2!1sen!2sbd" width="100%" height="100%"  loading="lazy" ></iframe>
  </div> */}
  <Location/>

  
    </div>
    
  )
}
