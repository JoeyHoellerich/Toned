const express = require("express")

const userRoutes = express.Router()

const dbo = require("../db/conn")

const ObjectId = require("mongodb").ObjectId

// Get all user
userRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("toned")
  db_connect
    .collection("userID")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

// Get Id
userRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection("userID").findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

// Create user
userRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb()
  let myobj = {
    username: req.body.username,
  }
  db_connect.collection("userID").insertOne(myobj, function (err, res) {
    if (err) throw err
    response.json(res)
  })
})

// Update user
userRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  let newvalues = {
    $set: {
      username: req.body.username,
    },
  }
  db_connect
    .collection("userID")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err
      console.log("1 document updated")
      response.json(res)
    })
})

// Delete user
userRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection("userID").deleteOne(myquery, function (err, obj) {
    if (err) throw err
    console.log("1 document deleted")
    response.json(obj)
  })
})

module.exports = userRoutes
