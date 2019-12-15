const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//This is the model for the mern app
const userSchema = new Schema({
  username: String,
  hash: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
