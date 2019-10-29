import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-5">
        <ol>
          {this.props.questions.map((
            q //How do I send props from this component to question component?
          ) => (
            <li>
              <Link to={`/question/${q.id}/${q.name}`}>{q.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const fakePage = {};
Question.propTypes = {
  question: PropTypes.array.isRequired
};

export default Question;
