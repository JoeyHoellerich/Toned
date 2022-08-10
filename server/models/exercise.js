// require mongoose
const mongoose = require("mongoose")
const moment = require('moment')

// creating shorthand for the Schema constructor
const { Schema } = mongoose

// schema
const exerciseSchema = new Schema({
  workout: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number },
  date: { type: Date, default: () => moment() },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,

    ref: "User",
  },
})

// model and export
const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise
