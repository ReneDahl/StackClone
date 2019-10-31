import React, { Component } from "react";

export class PostAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      votes: "",
      questionId: this.props.postanswer
    };
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeVotes = e => {
    this.setState({
      votes: e.target.value
    });
  };

  onSubmit = e => {
    //reference to the Question page here, how to i parse ever state into a array of elements?
    this.props.getAnswer(
      this.state.name + this.state.votes + this.state.questionId
    );

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Post an answer</h1>
        <div className="col-md-12">
          <form onSubmit={this.onSubmit} className="form-inline">
            <div className="form-group">
              <input
                type="text"
                onChange={this.onChangeName}
                className="form-control"
              ></input>
              <input
                type="text"
                onChange={this.onChangeVotes}
                className="form-control"
              ></input>
              <button className="btn btn-success">Post answer</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostAnswer;
