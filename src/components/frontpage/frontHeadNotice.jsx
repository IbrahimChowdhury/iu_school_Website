"use client"
import React, { useEffect, useState } from 'react'
import {AiOutlineRocket} from "react-icons/ai"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
export  function FrontHeadNotice() {
  const [allNotices, setallNotices] = useState([])

  useEffect(() => {
      getNotices()
  }, [])

  let getNotices = async () => {
      try {
          let response = await axios.get("/api/class")
          console.log(response)
          setallNotices(response.data)      
      } catch (error) {
          console.error("error getting class data",error)
      }

  }
  let notice= allNotices[1];
console.log(allNotices)
  return (
    <div>
      {notice?.length>0 && (
        <div>
    <Alert>
      <AiOutlineRocket className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
        </div>
      )}
 
    </div>
  )
}
