import express from 'express'
import { deleteGoal, getGoals, SetGoals, updateGoal } from '../Controller/GoalController.js'
import protect from "../Middleware/AuthMiddleware.js"

const router = express.Router()

// get goals
router.get('/', protect, getGoals)

// Set Goals
router.post('/', protect, SetGoals)

// Update Goal
router.put('/:id', protect, updateGoal)

// Delete Goal
router.delete('/:id', protect, deleteGoal)

export default router