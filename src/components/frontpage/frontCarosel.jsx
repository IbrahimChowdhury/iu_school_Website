"use client"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/components/frontpage/App.css";
import Image from "next/image";

const images = [
  "iuSchool.jpg",
  "iuSchool10.jpg",
  "iuteachers2.jpg",
  "iuteachers.jpg",
  "iuSchool5.jpg",
  "iuSchool3.jpg",
  "iuSchoolSport.jpg",
];
export default function FrontCarosel() {
  return (
    <div className="">
 <div className="">
      <Carousel className="" dynamicHeight={true} showStatus={false} autoPlay={true} infiniteLoop={true} interval={4000} >
        {images.map((URL, index) => (
          <div key={index} className="slide ">
           
            <img className=" " alt="sample_file" id="img" src={ "/"+URL} key={index} />
         
          </div>
        ))}
      </Carousel>
    </div>

    </div>
  )
}
