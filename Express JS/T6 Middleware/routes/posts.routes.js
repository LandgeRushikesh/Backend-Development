import express from 'express'

const router = express.Router()

// 1st option to write an middleware

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next()
// }

// this is the one way of using middleware
// router.get("/", logger, (req, res) => {
//     res.send("Hello World!!!")
// })

let posts = [
    {
        id: 1,
        title: "Post 1"
    },
    {
        id: 2,
        title: "Post 2"
    },
    {
        id: 3,
        title: "Post 3"
    },
]

router.get("/", (req, res) => {
    res.json(posts)
})


// Get single post
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if (!post) {
        return res.status(404).json({ message: `Post with id of ${id} is not found` })
    }
    res.status(200).json(post)
})

// Create New Post
router.post("/", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title) {
        return res.status(400).json({ message: "Please Include a title" })
    }
    posts.push(newPost)
    res.status(201).json(posts)
})

// Update Post
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        return res.status(404).json({ message: `Post with id ${id} is not found` })
    }

    post.title = req.body.title
    res.status(200).json(posts)
})

// Delete Posts
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        return res.status(404).json({ message: `Post with id ${id} is not found` })
    }

    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
})


export default router;