// @desc Get goals
// @routes GET /api/goals 
export const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Goals" })
}

// @desc Set goals
// @routes POST /api/goals 
export const SetGoals = (req, res) => {
    res.status(200).json({ message: "Set Goals" })
}

// @desc Update goals
// @routes PUT /api/goals/:id
export const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal with id ${req.params.id}` })
}

// @desc Delete goals
// @routes DELETE /api/goals/:id 
export const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal with id ${req.params.id}` })
}