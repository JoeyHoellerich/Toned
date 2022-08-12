const express = require("express")
const exercise = express.Router()
const moment = require('moment')
// Exercise model
const Exercise = require("../models/exercise")
const User = require("../models/user")
const exerciseSeedData = require("../models/seeders/exercise_seed")
const tbExerciseSeedData = require("../models/seeders/tbExercise_seed")

exercise.get("/data/seed", async (req, res) => {
  await Exercise.insertMany(tbExerciseSeedData)
})

// get user's exercises @ "/exercise/(username)"
// Query ?back=(how many days in the past), default is 30 days
exercise.get("/:user", async (req, res) => {
  const user = await User.find({
    username: req.params.user,
  }).then((foundUser) => {
    const exercise = Exercise.find({
      user: foundUser,
      date: {
        $gte: moment().subtract(req.query.back || 30, 'days')
      }
    })
      .populate({
        path: "user",
      })
      .sort('-date')
      .then((foundWorkouts) => {
        res.status(200).json({user: foundUser, workouts: foundWorkouts})
      })
  })
})

// route to get exercise information based on exercise id
exercise.get("/id/:id", async (req, res) => {
    const exercise = Exercise.find({
      _id: req.params.id,
    })
      .populate({
        path: "user",
      })
      .then((foundWorkouts) => {
        res.status(200).json({exercise: foundWorkouts})
      })
  })
// get user's exercises from a specific date @"/exercise/(username)/dates"
// Query ?startday=(date in YYYYMMDD format), required query term
// Query ?back=(how many days in the past), default is 30 days
exercise.get("/:user/dates", async (req, res) => {
  const user = await User.find({
    username: req.params.user,
  }).then((foundUser) => {
    const exercise = Exercise.find({
      user: foundUser,
      date: {
        $lt: moment(`${req.query.startday}`, "YYYYMMDD"),
        $gte: moment(`${req.query.startday}`, "YYYYMMDD").subtract(req.query.back || 30, 'days')
      }
    })
      .populate({
        path: "user",
      })
      .sort('-date')
      .then((foundWorkouts) => {
        res.status(200).json({user: foundUser, workouts: foundWorkouts})
      })
  })
})

// get user by username & specific workout related to user
// @ "/exercise/exercises?username=&workout="
exercise.get("/:user/specific/:workout", async (req, res) => {
  const user = await User.find({
    username: req.params.user,
  }).then((foundUser) => {
    const exercise = Exercise.find({
      user: foundUser,
      workout: req.params.workout,
    })
      .populate({
        path: "user",
      })
      .sort('-date')
      .then((foundWorkout) => {
        res.status(200).json({ user: foundUser, exercise: foundWorkout })
      })
  })
})


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
