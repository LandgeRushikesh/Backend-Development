import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add this Name field"]
    },
    email: {
        type: String,
        required: [true, "Please add this email field"]
    },
    password: {
        type: String,
        required: [true, "Please add this password field"]
    },
}, { timestamps: true })

export const User = mongoose.model("user", userSchema)