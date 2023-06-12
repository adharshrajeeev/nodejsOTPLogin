import mongoose from "mongoose";
const MONGOURI='mongodb://localhost:27017/OtpValidation'

export const connectDb = async ()=>{
    mongoose.connect(MONGOURI).then(()=>{
        console.log("DATABASE CONNECTED")
    }).catch((err)=>{
        console.log("ERROR IN CONNECTING DB")
    })

}