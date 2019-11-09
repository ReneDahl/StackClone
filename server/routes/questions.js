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
server.route("/:id/").get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json("Error question not found" + err));
});

//Post method to save a answer
server.route("/:id/answers").post((req, res) => {
  Question.findById(req.params.id).then(question => {
    const name = req.body.name;
    //const votes = req.body.votes;

    //this works
    const answer = new Question({
      name: name
    });

    question.answers.push(answer);

    question
      .save() // save to database
      .then(() => res.json("answer added!"))
      .catch(err => res.status(400).json("Error: " + err));
  });
});

//Update vote here

module.exports = server;
