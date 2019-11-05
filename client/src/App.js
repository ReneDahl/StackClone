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
    fetch("http://localhost:8080/questions/").then(res =>
      res.json().then(data => this.setState({ data }))
    );
  }

  componentDidMount() {
    //We gonna load the api from here
    this.getDataFromApi();
  }
  getQuestion(_id) {
    return this.state.data.find(q => q._id === _id); // if you use staic array use Number()
  }

  //can only post question, if we get it from the api
  addQuestion(question) {
    this.postQuestion(question);
  }

  postQuestion(question) {
    //Post request here, to the backend server

    fetch("http://stackclonetest.herokuapp.com/questions/post", {
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
    // console.log(questionID, name);
    //Post request here, to the backend serve

    const data = [...this.state.data];

    const question = data.find(q => q._id === questionID);

    const questionIndex = data.findIndex(q => q._id === question._id);

    fetch("http://stackclonetest.herokuapp.com/questions/postAnswer", {
      method: "POST",
      body: JSON.stringify(
        (question.answers = [
          ...question.answers,
          {
            name: name,
            votes: 0
          }
        ])
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(data);
        console.log(json);
      });

    data[questionIndex] = question;

    if (data === undefined || data.length == 0) {
      console.log("oooh noooo");
    }

    //Setting the state
    this.setState({ data });
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
