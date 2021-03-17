const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cuid = require('cuid');
const connection = mongoose.createConnection(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB connection established");
});

module.exports = {
  mongoose,
  db,
}
