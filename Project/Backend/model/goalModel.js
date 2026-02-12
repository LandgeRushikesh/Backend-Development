import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    user: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: [true, "Please add Goal Title..."]
    }
}, { timestamps: true })

export const Goal = mongoose.model("Goal", goalSchema)