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

// logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
}

// JSON middleware
const JSONMiddleware = (req, res, next) => {
    res.setHeader("content-type", 'application/json')
    next()
}

// getUserHandler
const getUserHandler = (req, res) => {
    res.write(JSON.stringify({ users }))
    res.end()
}

// Route handler for POST /api/users
const createUseHandler = (req, res) => {
    let body = ''

    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201
        res.write(JSON.stringify(newUser))
        res.end()
    })
}

// getUserByIdHandler
const getUserByIdHandler = (req, res) => {
    const id = req.url.split("/")[3]
    const user = users.find((user) => user.id == parseInt(id))

    if (user) {
        res.write(JSON.stringify({ user }))
        res.end()
    }
    else {
        res.write(JSON.stringify({ message: "user not Found" }))
        res.end()
    }
}

// Not Found handler
const userNotFoundHandler = (req, res) => {
    res.write(JSON.stringify({ message: "Route not Found" }))
    res.end()
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        JSONMiddleware(req, res, () => {
            if (req.url === "/api/users" && req.method === "GET") {
                getUserHandler(req, res)
            }
            else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
                getUserByIdHandler(req, res)
            }
            else if (req.url === '/api/users' && req.method === "POST") {
                createUseHandler(req, res)
            }
            else {
                userNotFoundHandler(req, res)
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})