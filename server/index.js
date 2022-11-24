import express from "express"
import mongoose from "mongoose";
import Routes from "./routes/Routes.js";
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(express.json({ limit: '50mb', extended: true }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())
app.use('/', Routes)
app.use('/uploads/',express.static('uploads'))

const CONNECTION_URI = 'mongodb+srv://shaheer:ROS9lmxRcd8T833u@cluster0.w3kiduh.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URI)
   .then(() => app.listen(PORT, () =>
      console.log(`connection established... listening to port ${PORT}`)))
   .catch((err) => console.log(err.message))