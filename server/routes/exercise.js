// require mongoose
const mongoose = require("mongoose")
// creating shorthand for the Schema constructor
const { Schema } = mongoose

// schema
const exerciseSchema = new Schema({
  workout: { type: String, required: true },
  set: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number },
  date: { type: Date, required: true },
})

// model and export
const Exercise = mongoose.model("Exercise", exerciseSchema)
module.exports = Exercise

// const express = require("express")

// // exerciseLogRoutes is an instance of the express router
// // We use it to define our routes
// // The router will be added as a middleware and will take control of requests starting with path /exerciseLog
// const exerciselogRoutes = express.Router()

// // This will help us connect to the database
// const dbo = require("../db/conn")

// // This help convert the id from string to ObjectId for the _id
// const ObjectId = require("mongoose").ObjectId

// // This section will help you get a list of all the exercise logs
// exerciselogRoutes.route("/exercise").get(function (req, res) {
//   let db_connect = dbo.getDb("toned")
//   db_connect
//     .collection("exerciselogs")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err
//       res.json(result)
//     })
// })

// // This section will help you get a single record by id
// exerciselogRoutes.route("/exercise/:id").get(function (req, res) {
//   let db_connect = dbo.getDb()
//   let myquery = { _id: ObjectId(req.params.id) }
//   db_connect
//     .collection("exerciselogs")
//     .findOne(myquery, function (err, result) {
//       if (err) throw err
//       res.json(result)
//     })
// })

// // This section will help you create a new record
// exerciselogRoutes.route("/exercise/add").post(function (req, response) {
//   let db_connect = dbo.getDb()
//   let myobj = {
//     workout: req.body.workout,
//     sets: req.body.sets,
//     reps: req.body.reps,
//     weight: req.body.weight,
//   }
//   db_connect.collection("exerciselogs").insertOne(myobj, function (err, res) {
//     if (err) throw err
//     response.json(res)
//   })
// })

// // This section will help you update a record by id
// exerciselogRoutes.route("/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb()
//   let myquery = { _id: ObjectId(req.params.id) }
//   let newvalues = {
//     $set: {
//       workout: req.body.workout,
//       sets: req.body.sets,
//       reps: req.body.reps,
//       weight: req.body.weight,
//     },
//   }
//   db_connect
//     .collection("exerciselogs")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err
//       console.log("1 document updated")
//       response.json(res)
//     })
// })

// // This section will help you delete a record
// exerciselogRoutes.route("/:id").delete((req, response) => {
//   let db_connect = dbo.getDb()
//   let myquery = { _id: ObjectId(req.params.id) }
//   db_connect.collection("exerciselogs").deleteOne(myquery, function (err, obj) {
//     if (err) throw err
//     console.log("1 document deleted")
//     response.json(obj)
//   })
// })

// module.exports = exerciselogRoutes
