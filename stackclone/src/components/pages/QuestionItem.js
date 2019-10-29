import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Questions from "./Questions";
import Question from "./Question";

export class QuestionItem extends Component {
  render() {
    const { id, name } = this.props.question;

    const items = this.props.question; // can get

    console.log(items);

    return (
      <div className="container mt-5">
        {/*<Link className="linkStyle" to={`/questions/${id}`}>
          </Link> */}
        <Link className="linkStyle" to={`/questions/${id}`}>
          {name}
        </Link>
      </div>
    );
  }
}

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionItem;
