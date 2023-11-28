// "use client"
import FrontNotice from '@/components/frontpage/frontNotice'
import GetTeacherSection from "@/components/frontpage/getTeacherSection"
import HeroSection from '@/components/frontpage/heroSection'
import OtherWebLink from '@/components/frontpage/otherWebLink'
import FrontCarosel from "@/components/frontpage/frontCarosel"
import FrontHeadNotice from "@/components/frontpage/frontHeadNotice"
import Image from 'next/image'
import Location from './Location'
import Divider from '@/components/divider'
import SwiperCarosel from "@/components/frontpage/SwiperCarosel"
export default function HomePage() {

  return (
    <div>


      <main className="flex flex-col items-center justify-between min-h-screen ">


        <FrontHeadNotice />
        <SwiperCarosel />
        <HeroSection />
        <GetTeacherSection />
        <div className='flex flex-col w-full mb-10 lg:justify-between lg:flex-row bg-gradient-to-l from-green-100 to-slate-200'>
          <FrontNotice />
          <OtherWebLink />
        </div>
      </main>

      <Location />


    </div>

  )
}
