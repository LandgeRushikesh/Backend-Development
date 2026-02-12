import express from 'express'
import { GetUser, LoginUser, RegisterUser } from '../Controller/UserController.js'

const router = express.Router()

// Register user
router.post('/', RegisterUser)

// Login user
router.post('/login', LoginUser)

// Get user
router.get('/me', GetUser)

export default router