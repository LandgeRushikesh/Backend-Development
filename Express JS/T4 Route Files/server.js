import express from 'express'
import posts from './routes/posts.routes.js'

const app = express()
const PORT = process.env.PORT

app.use('/api/posts', posts)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);

})