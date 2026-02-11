import asyncHandler from 'express-async-handler'

// @desc Get goals
// @routes GET /api/goals 
export const getGoals = asyncHandler((req, res) => {
    res.status(200).json({ message: "Get Goals" })
})

// @desc Set goals
// @routes POST /api/goals 
export const SetGoals = asyncHandler((req, res) => {
    if (!req.body?.text) {
        res.status(400)
        throw new Error("Please Add Text Field")
    }

    res.status(200).json({ message: "Set Goals" })
})

// @desc Update goals
// @routes PUT /api/goals/:id
export const updateGoal = asyncHandler((req, res) => {
    res.status(200).json({ message: `Update goal with id ${req.params.id}` })
})

// @desc Delete goals
// @routes DELETE /api/goals/:id 
export const deleteGoal = asyncHandler((req, res) => {
    res.status(200).json({ message: `Delete goal with id ${req.params.id}` })
})