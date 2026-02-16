import express from 'express'
import goalRoutes from './Routes/GoalRoutes.js'
import userRoutes from './Routes/UserRoutes.js'
import { errorHandler } from './Middleware/ErrorHandler.js'
import connectDB from './DB/Config.js'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 5000

// Database Connection
connectDB()

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes use
app.use('/api/goals/', goalRoutes)
app.use('/api/users/', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})