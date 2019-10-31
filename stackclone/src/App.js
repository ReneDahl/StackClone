import React, { Component } from "react";
import { Router } from "@reach/router";

import Question from "./components/pages/Question";
import Questions from "./components/pages/Questions";
import Nav from "./components/layout/Nav";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Ask from "./components/pages/Ask";
import Home from "./components/pages/Home";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "nd time giving error,during TENSORFLOW execution",
          answers: [
            {
              name:
                "Observables are lazy so you have to subscribe to get the value.",
              name: 5
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
          id: 2,
          name: "Is there a way to add/remove module in Android.bp?",
          answers: [
            { name: "Answer 1", votes: 2 },
            { name: "Answer 2", votes: 3 },
            { name: "Answer 3", votes: 0 }
          ]
        },
        {
          id: 3,
          name: "Primeng p-dropdown filtering suggestions problem",
          answers: [
            { name: "Answer 1", votes: 0 },
            { name: "Answer 2", votes: 1 }
          ]
        },
        {
          id: 4,
          name: "Configure CakePhp to send mail with SMTP",
          answers: [
            { name: "Answer 1", votes: 0 },
            { name: "Answer 2", votes: 1 }
          ]
        },
        {
          id: 5,
          name: "CSS not working",
          answers: [
            { name: "Answer 1", votes: 0 },
            { name: "Answer 2", votes: 1 }
          ]
        }
      ]
    };

    this.changeDone = this.changeDone.bind(this);
  }
  getQuestion(id) {
    return this.state.data.find(q => q.id === Number(id));
  }

  addQuestion(question) {
    const questionObject = {
      id: Math.random() * 10000000,
      name: question,
      answers: []
    };
    this.setState({
      data: [...this.state.data, questionObject]
    });
  }

  //With answerData, we can recieve the data to the parent, from the child.
  //We get data from question. What the user have answered

  getAnswer = answerData => {
    console.log(answerData);
  };

  changeDone(index) {
    const newList = [...this.state.questions];

    this.setState({
      questions: newList
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
            path="/question/:id"
            getQuestion={id => this.getQuestion(id)}
            getAnswer={getAnswer => this.getAnswer(getAnswer)}
          ></Question>
        </Router>
      </div>
    );
  }
}

export default App;
