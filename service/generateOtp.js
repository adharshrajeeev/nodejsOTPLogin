import axios from "axios"

export const generateRandomOtp = async(data,otp)=>{

    try{
        const api = `http://${data.phoneNumber}&s`
      const response = await  axios.post(api)
        return response
    }catch(err){
        console.log(err,"EROR")
    }
}