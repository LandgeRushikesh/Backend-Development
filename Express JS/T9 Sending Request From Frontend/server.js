import express from 'express'
import posts from "./routes/posts.routes.js"
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'
import logger from './middleware/logger.js'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Logger middleware
app.use(logger)

app.use('/api/posts', posts)

// setup Static Folder
app.use(express.static(path.join(__dirname, "Public")))

// Error handler
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})