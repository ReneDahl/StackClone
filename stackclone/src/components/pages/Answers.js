import React, { Component } from "react";

export class Answers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [
        { id: 1, qid: 1, name: "Good question, i dont know", votes: 0 },
        {
          id: 2,
          qid: 2,
          name: "I have the answer, but cant remember it",
          votes: 1
        }
      ]
    };
  }

  render() {
    let qID = this.props.questionID.match.params.id;
    let id;

    if (qID != id) {
      id = +qID;
    }
    console.log(qID);

    return this.state.answers
      .filter(e => e.qid === id) //Parse id from URL here, but HOW????
      .map((column, index) => (
        <div className="container" key={index}>
          {column.name}

          <br></br>
        </div>
      ));
  }
}

export default Answers;
