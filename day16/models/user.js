// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    Name: String,
    Age: Number,
    City: String,
})

const User = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = User;