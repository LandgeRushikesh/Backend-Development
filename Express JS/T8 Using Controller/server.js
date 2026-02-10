import express from 'express'
import posts from "./routes/posts.routes.js"
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'
import logger from './middleware/logger.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Logger middleware
app.use(logger)

app.use('/api/posts', posts)

// Error handler
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})