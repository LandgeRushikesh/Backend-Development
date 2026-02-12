import express from 'express'
import goalRoutes from './Routes/GoalRoutes.js'
import userRoutes from './Routes/UserRoutes.js'
import { errorHandler } from './Middleware/ErrorHandler.js'
import connectDB from './DB/Config.js'

const app = express()

const PORT = process.env.PORT || 5000

// Database Connection
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes use
app.use('/api/goals/', goalRoutes)
app.use('/api/users/', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})