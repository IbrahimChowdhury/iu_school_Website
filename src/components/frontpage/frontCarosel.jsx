import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/components/frontpage/App.css";

const images = [
  "iuSchool.jpg",
  "iuSchool2.jpg",
  "iuSchool3.jpg",
];
export default function FrontCarosel() {
  return (
    <div className="">
 <div className="box">
      <Carousel className="" on showStatus={false} autoPlay={true} infiniteLoop={true} interval={4000} >
        {images.map((URL, index) => (
          <div className="slide  ">
            <img alt="sample_file" id="img" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>

    </div>
  )
}
