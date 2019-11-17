import React, { Component } from "react";
import { Router } from "@reach/router";

import Question from "./components/pages/Question";
import Questions from "./components/pages/Questions";
import Nav from "./components/layout/Nav";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Ask from "./components/pages/Ask";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  getDataFromApi() {
    fetch("http://stackclonedk.herokuapp.com/questions/").then(res =>
      res.json().then(data => this.setState({ data }))
    );
  }

  componentDidMount() {
    //We gonna load the api from here
    this.getDataFromApi();
  }
  getQuestion(_id) {
    return this.state.data.find(q => q._id === _id);
  }

  //can only post question, if we get it from the api
  addQuestion(question) {
    this.postQuestion(question);
  }

  postQuestion(question) {
    //Post request here, to the backend server

    fetch("https://stackclonedk.herokuapp.com/questions/post", {
      method: "POST",
      body: JSON.stringify({
        name: question,
        answers: []
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("Result of posting a new question:");
        console.log(json);
        this.getDataFromApi();
      });
  }
  postAnswer(questionID, name) {
    fetch(
      "https://stackclonedk.herokuapp.com/questions/" + questionID + "/answers",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          votes: 0
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.getDataFromApi();
      });
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>

        <Router>
          <Ask
            path="/Ask"
            addQuestion={question => this.addQuestion(question)}
          ></Ask>

          <Questions
            path="/"
            data={this.state.data}
            askQuestion={text => this.askQuestion(text)}
          ></Questions>

          <Question
            path="/question/:_id"
            getQuestion={_id => this.getQuestion(_id)}
            //Handle vote need
            postAnswer={(questionID, name) => this.postAnswer(questionID, name)}
          ></Question>
        </Router>
      </div>
    );
  }
}

export default App;
