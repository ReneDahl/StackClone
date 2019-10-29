import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";

import Home from "./components/pages/Home";
import Ask from "./components/pages/Ask";
import About from "./components/pages/About";
import Question from "./components/pages/Question";
import Questions from "./components/pages/Questions";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Answers from "./components/pages/Answers";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          name: "nd time giving error,during TENSORFLOW execution"
        },
        {
          id: 2,
          name: "Is there a way to add/remove module in Android.bp?"
        },
        {
          id: 3,
          name: "Primeng p-dropdown filtering suggestions problem"
        },
        {
          id: 4,
          name: "Configure CakePhp to send mail with SMTP"
        },
        { id: 5, name: "CSS not working" }
      ]
    };

    this.changeDone = this.changeDone.bind(this);
  }

  addQuestion(question) {
    const questionObject = {
      id: Math.random() * 10000000,
      //we are adding items to the arraylist questions we can push later
      name: question
    };

    console.log(questionObject);

    //Now we have a new state object,
    //now I use spread syntax, so we have a copy of existing array before we add new questions to it

    //We change the state of the compoent then we use setState
    this.setState({
      questions: [...this.state.questions, questionObject]
    });
  }

  changeDone(index) {
    const newList = [...this.state.questions];

    this.setState({
      questions: newList
    });
  }

  render() {
    const hideComponent = {
      fontSize: "72px",
      color: "blue"
    };

    return (
      <div className="App">
        <Router>
          <Nav />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Ask
                  path="/home"
                  addQuestion={question => this.addQuestion(question)}
                ></Ask>
                {/*Print all the questions to the page*/}
                <Questions questions={this.state.questions}></Questions>
              </React.Fragment>
            )}
          ></Route>
          <Route path="/question/:id/:name" component={Question}></Route>
          <Route path="/about" component={About}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
