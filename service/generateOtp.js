import axios from "axios"

export const generateRandomOtp = async(data,otp)=>{

    try{
        const api = `http://sms.digimiles.in/bulksms/bulksms?username=di78-samec&password=digimile&type=0&dlr=1&destination=${data.phoneNumber}&source=ECFILE&message=Congrats NOW, your gst and it returns are filed  in a single click periodically in your life time what more you can expect  GET RELAX! EC makes EASY. Your OTP is ${otp}. ECFILE SOLUTIONS&entityid=1601100000000011746&tempid=1607100000000081869`
      const response = await  axios.post(api)
        return response
    }catch(err){
        console.log(err,"EROR")
    }
}