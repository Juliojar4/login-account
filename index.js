import express from 'express';
import cors from 'cors'

import userRoute from './src/routes/UserRoute.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/user', userRoute)

app.listen(3001)
 
