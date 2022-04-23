const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const async_handler = require('express-async-handler')
const User = require('../models/userModel')


// @desc    Register new User
// @route   POST api/users
// @access  Public
const registerUser = async_handler(async (req, res) => {
    // Check exist fields
    const {name, email, password} = req.body
    console.log(password)
    if(!name || !email || !password)
    {
        res.status(400)
        throw new Error('Please enter all fields')
    }

    // Check user exist
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('This user is already exist')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const  hashPassword = await bcrypt.hash(password.toString(), salt)

    // Create user
    const user = await User.create({name, email, password: hashPassword})

    if(user){
        res.status(201).json({_id: user.id, name: user.name, email: user.email})
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate a User
// @route   POST api/users/login
// @access  Public
const loginUser = async_handler(async (req, res) => {
    const {email, password} = req.body
    // Check user email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({_id: user.id, name: user.name, email: user.email})
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }

    res.json({
        message: 'Login a user',
    })
})

// @desc    Get users data
// @route   GET api/users/me
// @access  Public
const getMe = async_handler(async (req, res) => {
    res.json({
        message: 'This is me',
    })
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}