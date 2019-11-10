const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//This is the model for the mern app
const questionSchema = new Schema({
  name: String,
  votes: Number, // maybe not the best way to do it. But it works
  answers: [{ name: String, votes: Number }]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
