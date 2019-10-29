import React, { Component } from "react";
import Answers from "./Answers";

export class Questions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-5">
        <p>{this.props.match.params.name}</p>

        <React.Fragment>
          <h3 className="container mt-5">Answers to the question</h3>
          <div className="container mt-5 box-answer-bg">
            <Answers questionID={this.props}></Answers>
          </div>

          <div className="container mt-5 box-bg">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Give a answer to the question</label>
                <textarea
                  className="qHeight"
                  rows="6"
                  type="text"
                  className="form-control"
                  placeholder="Give a answer"
                  onChange={this.OnchangeName}
                ></textarea>
              </div>

              <div className="form-group">
                <button className="btn btn-primary">Give a answer</button>
              </div>
            </form>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Questions;
