import { findUserByEmail, generateOtp, userSignup, verifyUserOtp } from "../database/repository/userRepository.js"
import { generateRandomOtp } from "../service/generateOtp.js"
import createOtp from "../utils/randomOtp.js"

export const createUser = async (req, res) => {
    try {
        const response =  await findUserByEmail(req.body)
        if(!response){

            await userSignup(req.body)
            res.status(200).json({message:"User created Successfully"})
        }else{
            res.status(401).json({message:"User already exists"})
        }
    } catch (err) {
        res.send(500).json({ error: "Server Error" })
    }
}

export const handleOtpLogin = async (req, res) => {
    try {
    
        const otp= createOtp()
        const data = await generateOtp(req.body,otp)
        
        if(data){
            
            const response = await generateRandomOtp(req.body,otp)
            if(response){

                return res.status(200).json({message:"Otp has send to phoneNumber",data:data._id,})
            }else{
                return  res.status(401).json({message:"Error in sending otp please try again"})
            }
        }else{
            return res.status(401).json({message:"User not found"})
        } 
    } catch (err) {
        res.send(500).json({ error: "Server Error" })
    }
}



export const verifyOtp = async (req, res) => {
    try {
        const response = await verifyUserOtp(req.body)
       
        
     if(!response==null){
        if(!response){

            return res.status(200).json({message:"User Login Success"})
        }else{
            return res.status(400).json({message:"Otp not matched"})
        }
     }else{
      return  res.status(401).json({message:"user not found"})
     }
    } catch (err) {
        
        res.send(500).json({ error: "Server Error" })
    }
}