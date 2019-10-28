import React, { Component } from "react";

export class QuestionItem extends Component {
  render() {
    return (
      <div>
        <label>{this.props.itemValue.id}</label>
        <label>{this.props.itemValue.name}</label>
        <label>{this.props.itemValue.body}</label>
      </div>
    );
  }
}

export default QuestionItem;
