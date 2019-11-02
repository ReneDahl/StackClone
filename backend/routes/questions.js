const server = require("express").Router();
let Question = require("../models/question.model");

const data = [
  {
    _id: 0,
    name: "How to solve undefined",
    answers: [{ name: "Answer 1", votes: 0 }, { name: "Answer 2", votes: 1 }]
  },
  {
    _id: 1,
    name: "How do i get the first index of an array",
    answers: [{ name: "Answer 1", votes: 0 }, { name: "Answer 2", votes: 1 }]
  },
  {
    _id: 2,
    name: "Http vs Https",
    answers: [{ name: "Answer 1", votes: 0 }, { name: "Answer 2", votes: 1 }]
  }
];

//the find method returns a promise, then the user uses the get request. It will
//return a promise find the question. If the question do not exist it will return a 404 error to the user
server.route("/").get((req, res) => {
  Question.find()
    .then(question => res.json(data))
    .catch(err => res.status(400).json("Error: " + err));
});

//Post a question
server.route("/post").post((req, res) => {
  const name = req.body.name;

  const newQuestion = new Question({ name });

  newQuestion
    .save()
    .then(() => res.json("question added!"))
    .catch(err => res.status(400).json("Error!!!: " + err));
});

//Search question by id
server.route("/:id").get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json("Error question not found" + err));
});

//post an answer to a question, not done yet!

module.exports = server;
