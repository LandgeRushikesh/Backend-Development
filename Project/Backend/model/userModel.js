import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please add this Name field"]
    },
    email: {
        type: String,
        required: [true, "Please add this email field"]
    },
    Password: {
        type: String,
        required: [true, "Please add this password field"]
    },
}, { timestamps: true })

export const User = mongoose.model("user", userSchema)