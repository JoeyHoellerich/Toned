// require mongoose
const mongoose = require("mongoose")

// creating shorthand for the Schema constructor
const { Schema } = mongoose

// schema
const exerciseSchema = new Schema({
  workout: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number },
  date: { type: Date, default: () => Date.now() },
  user: {
    type: Schema.Types.ObjectId,

    ref: "User",
  },
})

// model and export
const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise
