import express from 'express'
import { connectDb } from './database/config.js';
import userRoutes from './routes/userRoutes.js'
const app =  express();
const PORT=7000


app.use(express.json())

app.use('/api',userRoutes)




connectDb()
app.listen(PORT,()=>console.log(`SEVER RUNNING IN PORT ${PORT}`))