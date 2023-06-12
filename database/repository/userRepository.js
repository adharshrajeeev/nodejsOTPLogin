import User from "../models/usermodel.js"

export const findUserByEmail = async(data)=>{
    try{
        const response = await User.findOne({email:data.email})
        if(response){
            return response
        }else{
            return null
        }
    }catch(err){
        throw err
    }
}


export const userSignup = async(data)=>{
    try{
        const response = await User.create({
            userName:data.userName,
            email:data.email,
            phoneNumber:data.phoneNumber
        })
        return response
    }catch(err){
        throw err  
    }
}


export const generateOtp =  async (data,otp)=>{

    try{
        const response = await User.findOneAndUpdate({phoneNumber:data.phoneNumber},{
            $set:{
                otp:otp
            }
        })
            return response

    }catch(err){
        console.log(err)
        throw err
    }
}

export const verifyUserOtp =  async (data)=>{
    try{
        const response =  await User.findOne({_id:data.id})
        if(response){

            if(response.otp == data.otp){
              return response
            }else{
                return false
            }
              
        }else{
            return null
        }
    
       
    }catch(err){
        console.log(err)
        throw err
    } 
}
