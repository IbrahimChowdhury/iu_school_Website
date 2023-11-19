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
    
  <Location/>

  
    </div>
    
  )
}
