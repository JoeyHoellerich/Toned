const express = require("express")
const exercise = express.Router()
// Exercise model
const Exercise = require("../models/exercise")
const User = require("../models/user")
const exerciseSeedData = require("../models/seeders/exercise_seed")
const tbExerciseSeedData = require("../models/seeders/tbExercise_seed")

exercise.get("/data/seed", async (req, res) => {
  await Exercise.insertMany(tbExerciseSeedData)
})

// // get all exercises @ "/exercise"
// exercise.get("/", async (req, res) => {

//   const exercise = await Exercise.find()

//   res.status(200).json(exercise)
// })

// get user by username & specific workout related to user
// @ "/exercise/username/workout="
exercise.get("/:username/:workout", async (req, res) => {
  const user = await User.find({
    username: req.params.username,
  }).then((foundUser) => {
    const exercise = Exercise.find({
      user: foundUser,
      workout: req.params.workout,
    })
      .populate({
        path: "user",
      })
      .then((foundWorkout) => {
        res.status(200).json({ user: foundUser, exercise: foundWorkout })
      })
  })
})

// // query exercise by date. no sure if its working
// exercise.get("/:date", async (req, res) => {
//   const exercise = await Exercise.find({
//     user: req.query.user,
//     created_on: {
//       $gte: new Date(req.params.date),
//     },
//   }).sort("-date")
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
