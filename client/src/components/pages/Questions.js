import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

export class Questions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h1>Questions</h1>
          <ol>
            {this.props.data.map(q => (
              <li key={q.id}>
                <Link to={`/question/${q.id}`}>{q.name}</Link>
              </li>
            ))}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Questions;
