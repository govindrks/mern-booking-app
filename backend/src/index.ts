import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
// converts body of api request into json
app.use(express.json())
// allows requests to be made from different origins
app.use(express.urlencoded({ extended: true }))
// cross origin request for security issue
app.use(cors())

app.get("/api/test", async (req: Request, res: Response) => {
   res.json({ message: "hello from express endpoint!" })
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
})