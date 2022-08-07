const express = require("express")

const user = express.Router()
const User = require("../models/user")

// get user @ "/user"
user.get("/", async (req, res) => {
  if (!req.body) {
    res.status(400)
    throw new Error("User not found")
  }
  const user = await User.find()
  res.status(200).json(user)
})

// create user @route "/user"
user.post("/", async (req, res) => {
  if (!req.body.username) {
    res.status(400)
    throw new Error("User not found")
  }
  const user = await User.create(req.body)
  res.status(200).json(user)
})

// update user @route "/user"
user.put("/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error("User not found")
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedUser)
})

// delete user @route "/user"
user.delete("/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error("User not found")
  }
  await user.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = user
