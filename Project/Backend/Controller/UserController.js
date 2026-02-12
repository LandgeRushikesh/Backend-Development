import { User } from "../model/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
// @desc Register user
// @route POST /api/users/


export const RegisterUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body || {} //by adding empty object now destructuring won't fail as if body is not present it will be assigned {} object

    // checking if all field are provided by the user
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }

    // Checking if user already exits
    const userExits = await User.findOne({ email })
    if (userExits) {
        res.status(400)
        throw new Error("User Already Exits")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPass
    })

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc Register user
// @route POST /api/users/login
export const LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body || {} //by adding empty object now destructuring won't fail as if body is not present it will be assigned {} object

    // checking if all field are provided by the user
    if (!email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }

    const user = User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }
})

// @desc Register user
// @route POST /api/users/me
export const GetUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "User" })
})