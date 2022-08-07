const mongoose = require("mongoose")
const { Schema } = mongoose
const Exercise = require("./exercise")

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    firstName: String,
    lastName: String,
    weight: Number,
    age: Number,
  },
  {
    toJSON: { virtuals: true },
  }
)
// At the top with your dependencies:

// Virtuals:
// exerciseSchema.virtual("exercises", {
//   ref: "Exercise",
//   localField: "_id",
//   foreignField: "user",
// })

const User = mongoose.model("User", userSchema)

module.exports = User
