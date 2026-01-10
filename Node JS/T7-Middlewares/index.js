import { createServer } from "http"
const PORT = process.env.PORT

const users = [
    {
        id: 1,
        name: "Pankaj"
    },
    {
        id: 2,
        name: "Rushikesh"
    },
    {
        id: 3,
        name: "Shashank"
    },
]

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === "/api/users" && req.method === "GET") {
            res.setHeader("content-type", 'application/json')
            res.write(JSON.stringify({ users }))
            res.end()
        }
        else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
            const id = req.url.split("/")[3]
            const user = users.find((user) => user.id == parseInt(id))

            if (user) {
                res.setHeader("Content-Type", 'application/json')
                res.write(JSON.stringify({ user }))
                res.end()
            }
            else {
                res.setHeader("Content-Type", 'application/json')
                res.write(JSON.stringify({ message: "user not Found" }))
                res.end()
            }
        }
        else {
            res.setHeader("Content-Type", 'application/json')
            res.write(JSON.stringify({ message: "Route not Found" }))
            res.end()
        }
    })

})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})