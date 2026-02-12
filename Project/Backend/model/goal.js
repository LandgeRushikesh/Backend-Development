import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please add Goal Title..."]
    }
}, { timestamps: true })

export const Goal = mongoose.model("Goal", goalSchema)