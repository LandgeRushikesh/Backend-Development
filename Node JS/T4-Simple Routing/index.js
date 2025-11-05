import http from "http"
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {

            if (req.url === '/') {
                res.writeHead(200, { 'content-type': "text/html" })
                res.write("<h1>Home Page</h1>")
                res.end()
            }
            else if (req.url === '/about') {
                res.writeHead(200, { 'content-type': "text/html" })
                res.write("<h1>about Page</h1>")
                res.end()
            }
            else {
                res.writeHead(404, { 'content-type': "text/html" })
                res.write("<h1>Page Not Found</h1>")
                res.end()
            }
        }
        else {
            throw new Error("This method not allowed!!!")
        }
    }
    catch (err) {
        res.writeHead(500, { 'content-type': "text/plain" })
        res.write("Server Error")
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);

})