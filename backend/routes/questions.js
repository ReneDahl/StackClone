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

//Post method to save a answer
server.route("/postAnswer").post((req, res) => {
  const name = req.body.name;
  const votes = req.body.votes;

  const newQuestion = new Question({ name, votes });

  newQuestion
    .save()

    .then(() => res.json("answer to question added!"))
    .catch(err => res.status(400).json("Error!!!: " + err));
});

module.exports = server;
