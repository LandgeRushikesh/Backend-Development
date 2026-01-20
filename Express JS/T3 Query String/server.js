import express from 'express'

const app = express()
const PORT = process.env.PORT

const posts = [
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

// Query String
app.get("/api/posts", (req, res) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit))//status must be set first then json or other things because when we do res.json().status() then res.json() will immediately sends the response and header will be locked so status will not be applied
    }
    else {
        res.status(200).json(posts)
    }
})


// Get single post
app.get("/api/posts/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if (!post) {
        res.status(404).json({ message: `Post with id of ${id} is not found` })
    }
    else {
        res.status(200).json(post)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})