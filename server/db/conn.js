const mongoose = require('mongoose')
const Db = process.env.ATLAS_URI

async function main() {
    await mongoose.connect(Db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log('connected to MongoDB')
    })
}


let _db

module.exports = {
  connectToServer: function (callback) {
    main(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("toned")
        console.log("Successfully connected to MongoDB.")
      }
      return callback(err)
    })
  },
  getDb: function () {
    return _db
  },
}