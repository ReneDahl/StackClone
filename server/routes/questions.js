const server = require("express").Router();
let Question = require("../models/question.model");

//get method, takes data from the array
server.route("/").get((req, res) => {
  Question.find()
    .then(question => res.json(question)) // <-- change to data here, if you want to test with the staic array
    .catch(err => res.status(400).json("Error: " + err));
});

//Post method to get a question
server.route("/post").post((req, res) => {
  const name = req.body.name;

  const newQuestion = new Question({ name });

  newQuestion
    .save()
    .then(() => res.json("question added!"))
    .catch(err => res.status(400).json("Error!!!: " + err));
});

//Search question by id
server.route("/:questionID").get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json("Error question not found" + err));
});

//Post method to save a answer
server.route("/postAnswer").post((req, res) => {
  const name = req.body.name;
  const votes = req.body.votes;

  Question.findById(req.params.id)
    .then(question.answer.push(name))
    .save();

  //what to do from here?? New to save it to the database

  console.log(name, votes);

  const newAnswer = new Question({ name, votes });
});

module.exports = server;
