// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    LastName: {
        type: String
    },
    Age: {
        type: Number,
        min: 16,
        max: 60,
    },
    Gender: {
        type: String,
        enum: ["male", "female", "Others"],
        immutable:true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    Password: {
        type: String
    },
    Photo: {
        type: String,
        default: "no Photo is uploaded Now",
    }
}, { timestamps: true });

const User = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = User;