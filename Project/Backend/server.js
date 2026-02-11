import express from 'express'
import goalRoutes from './Routes/GoalRoutes.js'

const app = express()

const PORT = process.env.PORT || 5000

// routes use
app.use('/api/goals/', goalRoutes)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})