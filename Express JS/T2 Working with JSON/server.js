import express from 'express'

const app = express()

const PORT = process.env.PORT || 8000

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

// Get all Posts
app.get("/api/posts", (req, res) => {
    res.json(posts)
})

// Get single post
app.get("/api/posts/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.json(posts.filter((post) => post.id === id))
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);

})