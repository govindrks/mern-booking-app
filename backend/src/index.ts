import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
// converts body of api request into json
app.use(express.json())
// allows requests to be made from different origins
app.use(express.urlencoded({ extended: true }))
// cross origin request for security issue
app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)

app.listen(7000, () => {
    console.log("Server is running on port 7000");
})