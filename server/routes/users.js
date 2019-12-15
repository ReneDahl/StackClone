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

  //if username or password is empty, it will display the msg
  if (!username === "" || !password === "") {
    let msg = "Username or password missing!";
    console.error(msg);
    res.status(401).json({ msg: msg });
    return; //Inportent if it not return null here, it will keep running.
  } else {
    let msg = "haha!";
    console.error(msg);
  }

  //   const user = { username: username };

  //   user
  //     .save()
  //     .then(() => res.json("user added!"))
  //     .catch(err => res.status(400).json("Error!!!: " + err));
});

module.exports = server;
