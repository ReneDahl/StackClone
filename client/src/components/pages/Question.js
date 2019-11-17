import React, { Component } from "react";
import PostAnswer from "./PostAnswer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.onVote = this.onVote.bind(this); // not done
  }

  getAnswer(answer) {
    this.props.getAnswer(answer);
  }

  onVote(event) {
    console.log(this.props._id);
  }

  render() {
    let titleQuestion = "";
    let listOfAnswers = "";

    const _id = this.props._id;
    const question = this.props.getQuestion(_id);

    if (question !== "" || null) {
      titleQuestion = question.name;

      console.log(titleQuestion);
    } else {
      //check for error
      console.log("Undifined");
    }

    if (question.answer !== "" || null) {
      listOfAnswers = question.answers.map((ans, index) => (
        <li key={index}>
          {ans.name} - {ans.votes}
          <button
            className="btn btn-info mb-1"
            onClick={() => console.log(this.props._id + "-" + ans._id)}
          >
            Vote up
          </button>
        </li>
      ));
    } else {
      //check for error
      console.log("Undifined");
    }

    return (
      <React.Fragment>
        <div className="container mt-5">
          <h1>The Question!</h1>
          <p>{question.name}</p>
          <h2>Answers</h2>
          {
            <ul>
              {question.answers.length === 0 ? (
                <p>No Answers!</p>
              ) : (
                listOfAnswers
              )}
            </ul>
          }
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
