const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(express.static("../client/build"));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//defining routes, in this case we have our questions route
const questionsRouter = require("./routes/questions");

//Here we have question route, called questions
app.use("/questions", questionsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
