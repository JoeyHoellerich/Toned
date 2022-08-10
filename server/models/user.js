const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    weight: Number,
    age: Number,
  },
  {
    toJSON: { virtuals: true },
  }
)

userSchema.virtual("exercises", {
  ref: "Exercise",
  localField: "_id",
  foreignField: "user",
})

const User = mongoose.model("User", userSchema)

module.exports = User
