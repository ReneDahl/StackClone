import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom";
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
        {
          id: 1,
          name: "nd time giving error,during TENSORFLOW execution",
          body: "Body text 1"
        },
        {
          id: 2,
          name: "Is there a way to add/remove module in Android.bp?",
          body: "Body text 2"
        },
        {
          id: 3,
          name: "Primeng p-dropdown filtering suggestions problem",
          body: "Body text 2"
        },
        {
          id: 4,
          name: "Configure CakePhp to send mail with SMTP",
          body: "Body text 2"
        },
        { id: 5, name: "CSS not working", body: "Body text 2" }
      ],
      hello: "Hello World"
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
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
              idFromUrl={this.props.id}
              component={Questions}
            ></Questions>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
