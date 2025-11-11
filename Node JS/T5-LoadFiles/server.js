import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// console.log(__filename);
// console.log(__dirname);


const server = http.createServer(async (req, res) => {
    try {
        let filePath
        if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'Home.html')
        }
        else if (req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'About.html')
        }
        else {
            filePath = path.join(__dirname, 'public', 'Error.html')
        }
        const data = await fs.readFile(filePath)
        res.setHeader('content-type', 'text/html')
        res.write(data)
        res.end()
    }
    catch (err) {
        console.log(err);
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})