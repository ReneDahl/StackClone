const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//This is the model for the mern app
const questionSchema = new Schema({
  id: Number,
  name: String,
  answers: [{ name: String, votes: Number }]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
