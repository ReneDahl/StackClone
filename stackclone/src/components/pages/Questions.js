import React, { Component } from "react";
import QuestionItem from "./QuestionItem";
import Question from "./Question";

export class Questions extends Component {
  render() {
    return this.props.dataFromParent
      .filter(e => e.id === 3)
      .map((column, index) => (
        <div className="container mt-5" key={index}>
          {column.name}
        </div>
      ));
  }
}

export default Questions;
// const values = this.props.dataFromParent.map(function(data, idx) {
//   return <p key={idx}>{data.name}</p>;
// });
