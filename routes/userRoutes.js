import express from 'express'
import { createUser, handleOtpLogin, verifyOtp } from '../controllers/userController.js'
const router =  express.Router()


router.post('/',createUser)
router.post('/mobileLogin',handleOtpLogin)
router.post('/verify',verifyOtp)

export default router