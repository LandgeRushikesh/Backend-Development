import asyncHandler from 'express-async-handler'
import { Goal } from '../model/goal.js'


// @desc Get goals
// @routes GET /api/goals 
export const getGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.find()
    res.status(200).json(goal)
})

// @desc Set goals
// @routes POST /api/goals 
export const SetGoals = asyncHandler(async (req, res) => {
    if (!req.body?.text) {
        res.status(400)
        throw new Error("Please Add Text Field")
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc Update goals
// @routes PUT /api/goals/:id
export const updateGoal = asyncHandler(async (req, res) => {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!updatedGoal) {
        res.status(404)
        throw new Error("Goal not Found")
    }

    res.status(200).json(updatedGoal)
})

// @desc Delete goals
// @routes DELETE /api/goals/:id 
export const deleteGoal = asyncHandler(async (req, res) => {
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

    if (!deletedGoal) {
        res.status(404)
        throw new Error("Goal not Found")
    }
    res.status(200).json(deletedGoal)
})