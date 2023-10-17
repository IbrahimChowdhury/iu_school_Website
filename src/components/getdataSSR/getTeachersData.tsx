import axios from "axios"

let GetNotices = async () => {
    try {
        
        let response = await axios.get("/api/teacher")
        return response.data
    } catch (error) {
        console.error("error getting day shift teacher data", error)
    }

}

export default GetNotices;