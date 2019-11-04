const server = require("express").Router();
let Question = require("../models/question.model");

const data = [
  {
    // You can post answers to this static array

    _id: 1,
    name: "nd time giving error,during TENSORFLOW execution",
    answers: [
      {
        name: "Observables are lazy so you have to subscribe to get the value.",
        votes: 5
      },
      { name: "You can use asyncPipe", votes: -2 },
      {
        name:
          "The reason that it's undefined is that you are making an asynchronous operation",
        votes: 3
      }
    ]
  },
  {
    _id: 2,
    name: "Is there a way to add/remove module in Android.bp?",
    answers: [
      { name: "Answer 1", votes: 2 },
      { name: "Answer 2", votes: 3 },
      { name: "Answer 3", votes: 0 }
    ]
  }
];

//get method, takes data from the array
server.route("/").get((req, res) => {
  Question.find()
    .then(question => res.json(data)) // <-- change to data here, if you want to test with the staic array
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
server.route("/:id").get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json("Error question not found" + err));
});

//Post answer to question here
server.route("questions/:id/answers").post((req, res) => {
  Question.findById(req.params.id)
    .then(addAnswer => res.json(addAnswer))
    .catch(err =>
      res.status(400).json("Error cant add answer to question" + err)
    );
});

//post an answer to a question, not done yet!

module.exports = server;
