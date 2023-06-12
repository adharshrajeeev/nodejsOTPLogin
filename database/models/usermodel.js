import mongoose from "mongoose";


const UserSchema =  mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    otp:{
        type:Number
    }
})

const User =  mongoose.model("User",UserSchema)
export default User