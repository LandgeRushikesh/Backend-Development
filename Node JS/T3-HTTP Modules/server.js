import http from "http";
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    // res.setHeader("content-type", "text/plain")
    // res.statusCode = 400

    res.writeHead(400, { 'content-type': "text/html" })
    res.write("<h1>hello World!!!</h1>")
    console.log(req.url);
    console.log(req.method);


    res.end()
})


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})