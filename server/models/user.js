const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  weight: Number,
  age: Number,
})

const User = mongoose.model("User", userSchema)

module.exports = User
