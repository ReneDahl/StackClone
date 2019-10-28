import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";

import Home from "./components/pages/Home";
import Ask from "./components/pages/Ask";
import About from "./components/pages/About";
import Question from "./components/pages/Question";
import Questions from "./components/pages/Questions";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        { id: 1, name: "Spg1", body: "Body text 1" },
        { id: 2, name: "Spg2", body: "Body text 2" },
        { id: 3, name: "Spg3", body: "Body text 2" },
        { id: 4, name: "Spg4", body: "Body text 2" },
        { id: 5, name: "Spg5", body: "Body text 2" }
      ],
      hello: "Hello World"
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch location={this.props.location}>
            <Ask
              path="/ask"
              dataFromParent={this.state.questions}
              component={Ask}
            ></Ask>
            <About path="/about" component={About} />

            <Home path="/" exact dataFromParent={this.state.questions}></Home>

            <Questions
              exact
              path="/question/:id"
              dataFromParent={this.state.questions}
              component={Questions}
            ></Questions>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
