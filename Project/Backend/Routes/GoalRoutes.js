import express from 'express'
import { deleteGoal, getGoals, SetGoals, updateGoal } from '../Controller/GoalController.js'

const router = express.Router()

// get goals
router.get('/', getGoals)

// Set Goals
router.post('/', SetGoals)

// Update Goal
router.put('/:id', updateGoal)

// Delete Goal
router.delete('/:id', deleteGoal)

export default router