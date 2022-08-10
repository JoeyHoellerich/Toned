const express = require("express")
const exercise = express.Router()
const moment = require('moment')
// Exercise model
const Exercise = require("../models/exercise")


// get exercise @route "/exercise" by a specific userid, grabs the workouts by current date up to a queried amount of days in the past, default is 30 days.

exercise.get("/", async (req, res) => {
  const exercise = await Exercise.find({ user: req.query.userid,
  date: {
    $lt: moment(),
    $gte: moment().subtract(req.query.days || 30, 'days')
  }}).sort('-date')
  res.status(200).json(exercise)
})

// get exercise @route "/exercise" by a specific userid, then sorts it by latest date to earliest
// exercise.get("/", async (req, res) => {
//   const exercise = await Exercise.find({ user: req.query.userid }).sort('-date')
//   res.status(200).json(exercise)
// })




// create exercise @ route "/exercise"
exercise.post("/", async (req, res) => {
  if (!req.body.workout) {
    res.status(400).json("add a workout")
  }
  const exercise = await Exercise.create(req.body)
  res.status(200).json(exercise)
})

// update exercise @route "/exercise"
exercise.put("/:id", async (req, res) => {
  const exercise = await Exercise.findById(req.params.id)
  if (!exercise) {
    res.status(400)
    throw new Error("workout not found")
  }
  const updatedExercise = await Exercise.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )
  res.status(200).json(updatedExercise)
})

// delete exercise @route "/exercise"
exercise.delete("/:id", async (req, res) => {
  const exercise = await Exercise.findById(req.params.id)
  if (!exercise) {
    res.status(400)
    throw new Error("User not found")
  }
  await exercise.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = exercise
