import express from 'express'

const router = express.Router()

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

router.get('/', (req, res) => {
    res.json(posts)
})

// Get single post
router.get("/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if (!post) {
        const err = new Error(`Post with id ${id} is not found`)
        err.status = 404
        return next(err)
    }

    res.status(200).json(post)
})

// Create New Post
router.post("/", (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title) {
        const err = new Error(`Please add a title`)
        err.status = 400
        return next(err)
    }

    posts.push(newPost)
    res.status(201).json(posts)
})

// Update Post
router.put("/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const err = new Error(`Post with id ${id} is not found`)
        return next(err)
    }

    post.title = req.body.title
    res.status(200).json(posts)
})

// Delete Posts
router.delete("/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const err = new Error(`Post with id ${id} is not found`)
        return next(err)
    }


    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
})


export default router