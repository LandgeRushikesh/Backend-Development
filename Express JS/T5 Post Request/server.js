import express from 'express'
import posts from './routers/posts.route.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', posts)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);

})