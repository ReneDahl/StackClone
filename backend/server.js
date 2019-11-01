//This becomes the server
//npm install express cors mongoose dotenv for all the dependencies we need for the backend server
//npm install -g nodemon, restarts the server after changes automaticly

//we require the express module
const express = require("express");
//we require the body-parser here
const bodyParser = require("body-parser");
//we require cors here, so we can use http headers later
const cors = require("cors");

//So we can use enverment files.
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

//So we can use https headers
app.use(cors());
//can use json in request and response, it is some middleware
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`The server is running on port:${port}`);
});
