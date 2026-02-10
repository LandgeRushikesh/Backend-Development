import express from 'express'
import { GetPosts, GetPost, CreatePost, UpdatePost, DeletePost } from '../controllers/PostController.js'
const router = express.Router()

// Get all Posts
router.get('/', GetPosts)

// Get single post
router.get("/:id", GetPost)

// Create New Post
router.post("/", CreatePost)

// Update Post
router.put("/:id", UpdatePost)

// Delete Posts
router.delete("/:id", DeletePost)


export default router