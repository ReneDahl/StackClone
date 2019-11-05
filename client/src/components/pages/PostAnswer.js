import React, { Component } from "react";

export class PostAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  onSubmit = e => {
    //reference to the Question page here, how to i parse ever state into a array of elements?

    this.props.postAnswer(this.props.questionID, this.state.input);
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
                onChange={this.onChange}
                className="form-control"
              ></input>
              <button className="btn btn-success">Post answer</button>-
              <button type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-search"></span> Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostAnswer;
