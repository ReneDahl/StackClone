import React, { Component } from "react";
import PostAnswer from "./PostAnswer";

class Question extends Component {
  constructor(props) {
    super(props);
  }

  getAnswer(answer) {
    this.props.getAnswer(answer);
  }

  render() {
    const id = this.props.id;
    const question = this.props.getQuestion(id);

    const list = question.answers.map((ans, index) => (
      <li key={index}>
        {ans.name}- ({ans.votes})
      </li>
    ));

    return (
      <React.Fragment>
        <div className="container mt-5">
          <h1>The Question!</h1>
          <p>{question.name}</p>
          <h2>Answers</h2>
          <ul>{question.answers.length === 0 ? <p>No Answers!</p> : list}</ul>
        </div>
        <div className="container mt-5">
          <PostAnswer
            questionID={this.props.id}
            postAnswer={(questionID, name) =>
              this.props.postAnswer(questionID, name)
            }
          ></PostAnswer>
        </div>
      </React.Fragment>
    );
  }
}
export default Question;
