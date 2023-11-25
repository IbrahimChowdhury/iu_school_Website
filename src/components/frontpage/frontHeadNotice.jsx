// "use client"
import {AiOutlineRocket} from "react-icons/ai"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"



const getAllNotice = async () => {
  try {
      const response = await fetch(`${process.env.url}/api/class`, {
          cache: "no-cache",
      });
      if (!response.ok) {
          console.log("cannot fetch notice data")
          throw new Error("failed to fetch front notice data")

      }
      return response.json()
  } catch (error) {
      console.log(error.message)
  }
}



const  FrontHeadNotice=async()=> {
let allNotices=await getAllNotice()

  let notice= allNotices[1];
// console.log(allNotices)
if(notice){
  return (
    <div className="w-full text-black">
      
        <div className="w-full pt-2 text-lg " >
            {/* <div  className="w-full animate-leftToRightMovingText whitespace-nowrap " >{notice?.body} </div> */}
            <marquee behavior="scroll" width="100%"   direction="left" className="">{notice?.body}</marquee>
        </div>
  
 
    </div>
  )
}
}


export default FrontHeadNotice;
