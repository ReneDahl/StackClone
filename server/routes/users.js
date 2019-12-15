const server = require("express").Router();
let User = require("../models/user.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//get method, takes data from the array
server.route("/").get((req, res) => {
  User.find()
    .then(User => res.json(User)) // <-- change to data here, if you want to test with the staic array
    .catch(err => res.status(400).json("Error: " + err));
});

server.route("/create").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("user added!"))
    .catch(err => res.status(400).json("Error!!!: " + err));
});

module.exports = server;
