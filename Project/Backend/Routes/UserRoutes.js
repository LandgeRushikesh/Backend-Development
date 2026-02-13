import express from 'express'
import { GetUser, LoginUser, RegisterUser } from '../Controller/UserController.js'
import protect from '../Middleware/AuthMiddleware.js'

const router = express.Router()

// Register user
router.post('/', RegisterUser)

// Login user
router.post('/login', LoginUser)

// Get user
router.get('/me', protect, GetUser)

export default router