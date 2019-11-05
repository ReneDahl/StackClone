import React, { Component } from "react";
import PostAnswer from "./PostAnswer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.onVote = this.onVote.bind(this);
  }

  getAnswer(answer) {
    this.props.getAnswer(answer);
  }

  onVote = e => {};

  render() {
    const _id = this.props._id;
    const question = this.props.getQuestion(_id);

    const list = question.answers.map((ans, index) => (
      <li key={index}>
        {ans.name}- ({ans.votes})
        <button
          onClick={this.onVote}
          value={ans.votes}
          className="btn btn-primary"
        >
          Vote
        </button>
      </li>
    ));

    return (
      <React.Fragment>
        <div className="container mt-5">
          <h1>The Question!</h1>
          <p>{question.name}</p>
          <h2>Answers</h2>
          {<ul>{question.answers.length === 0 ? <p>No Answers!</p> : list}</ul>}
        </div>
        <div className="container mt-5">
          <PostAnswer
            questionID={this.props._id}
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
