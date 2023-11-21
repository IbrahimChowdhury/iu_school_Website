"use client"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/components/frontpage/App.css";
import Image from "next/image";

const images = [
  "iuSchool.jpg",
  "iuSchool5.jpg",
  "iuSchool3.jpg",
];
export default function FrontCarosel() {
  return (
    <div className="">
 <div className="box">
      <Carousel className=""  showStatus={false} autoPlay={true} infiniteLoop={true} interval={4000} >
        {images.map((URL, index) => (
          <div key={index} className="slide ">
           
            <Image width={2000} height={2000} className="object-contain " alt="sample_file" id="img" src={ "/"+URL} key={index} />
         
          </div>
        ))}
      </Carousel>
    </div>

    </div>
  )
}
