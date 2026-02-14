import asyncHandler from 'express-async-handler'
import { Goal } from '../model/goalModel.js'


// @desc Get goals
// @routes GET /api/goals 
export const getGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.find({ user: req.user.id })
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
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)
})

// @desc Update goals
// @routes PUT /api/goals/:id
export const updateGoal = asyncHandler(async (req, res) => {
    const id = req.params.id
    const goal = await Goal.findById(id)

    if (!goal) {
        res.status(404)
        throw new Error("Goal not Found")
    }

    if (goal.user.toString() !== req.user.id) {
        res.status(403)
        throw new Error("You Cannot Update this Goal ")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedGoal) {
        res.status(400)
        throw new Error("Goal not Found")
    }

    res.status(200).json(updatedGoal)

})

// @desc Delete goals
// @routes DELETE /api/goals/:id 
export const deleteGoal = asyncHandler(async (req, res) => {
    const id = req.params.id
    const goal = await Goal.findById(id)
    if (!goal) {
        res.status(404)
        throw new Error("Cannot Find Goal...")
    }

    if (goal.user.toString() !== req.user.id) {
        res.status(403)
        throw new Error("You Cannot delete this Goal")
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

    if (!deletedGoal) {
        res.status(404)
        throw new Error("Goal not Found")
    }
    res.status(200).json(deletedGoal)
})