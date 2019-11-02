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
  }

  componentDidMount() {
    //We gonna load the api from here
    fetch("http://localhost:8080/questions/").then(res => console.log(res));
  }
  getQuestion(id) {
    return this.state.data.find(q => q.id === Number(id));
  }
  //This work, but only able to insert into data. Not answers
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

  postAnswer(questionID, name) {
    //Spread syntax, we are making of the exixing array
    const data = [...this.state.data];

    //We find the question, where the user want to give a answer
    const question = data.find(q => q.id === parseInt(questionID));

    //Find the index of the question
    const questionIndex = data.findIndex(q => q.id === question.id);
    //Insert values to the nested array
    question.answers = [
      ...question.answers,
      {
        name,
        id: questionID
      }
    ];
    //assign the valee of data to question
    data[questionIndex] = question;
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
            path="/question/:id"
            getQuestion={id => this.getQuestion(id)}
            //Handle vote need
            postAnswer={(questionID, name) => this.postAnswer(questionID, name)}
          ></Question>
        </Router>
      </div>
    );
  }
}

export default App;
