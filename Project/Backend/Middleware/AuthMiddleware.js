import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { User } from "../model/userModel.js"

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]

            // Get user form token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')
            // here req is just a normal JS object so here we are adding new property called user to it and giving it some data

            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error("Unauthoraized user")
        }

    }
    if (!token) {
        res.status(401)
        throw new Error('Not Authorized,no token')
    }
})
export default protect