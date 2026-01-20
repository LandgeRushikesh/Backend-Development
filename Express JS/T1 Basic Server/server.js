import express from 'express'
import path from 'path'
import url from 'url'
const app = express()

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Watch Flag is a used to restart a server on changes and for that we were using nodemon which is third party package

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "about.html"))
// })

// Setup Static Folder
app.use(express.static(path.join(__dirname, "public")))
// after doing this we don't need to specify separate routes we just need to access it localhost:5000/about.html

app.listen(5000, () => {
    console.log(`Server Running on Port 5000`);

})