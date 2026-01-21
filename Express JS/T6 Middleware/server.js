import express from 'express'
import posts from "./routes/posts.routes.js"
import logger from './middleware/logger.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger)

app.use('/api/posts', posts)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})