const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})

// @desc    Set goals
// @route   POST api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)
})

// @desc    Put goals
// @route   PUT api/goals/:id
// @access  Private
const putGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal does not exist')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User does not exist')
    }

    if (goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User does not exist')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, {text: req.body.text}, {new: true})

    res.status(200).json(updatedGoal)
})

// @desc    Delete goals
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal does not exist')
    }
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User does not exist')
    }

    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User does not exist')
    }
    goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}