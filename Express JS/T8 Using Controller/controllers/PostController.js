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

// @desc Get all Posts
// Route GET /api/posts

export const GetPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }

    res.status(200).json(posts)
}

// @desc Get Post by id
// Route GET /api/posts/:id

export const GetPost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if (!post) {
        const err = new Error(`Post with id ${id} is not found`)
        err.status = 404
        return next(err)
    }

    res.status(200).json(post)
}

// @desc Create New Post
// Route POST /api/posts

export const CreatePost = (req, res, next) => {
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
}

// @desc Update Post
// Route PUT /api/posts/:id

export const UpdatePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const err = new Error(`Post with id ${id} is not found`)
        return next(err)
    }

    post.title = req.body.title
    res.status(200).json(posts)
}


// @desc Delete Post
// Route DELETE /api/posts/:id

export const DeletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const err = new Error(`Post with id ${id} is not found`)
        return next(err)
    }


    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
}