import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express();
// converts body of api request into json
app.use