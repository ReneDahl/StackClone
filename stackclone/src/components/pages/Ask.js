import React, { Component } from "react";

export class PostQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  onSubmit = e => {
    //reference to the ask page here

    this.props.addQuestion(this.state.name);
    window.history.back();
    e.preventDefault();
  };

  OnchangeName = e => {
    this.setState({
      name: [e.target.value]
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="container mt-5">Ask a public question</h3>
        <div className="container mt-5 box-bg">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>The Question</label>
              <textarea
                className="qHeight"
                rows="6"
                type="text"
                className="form-control"
                placeholder="Ask a question"
                onChange={this.OnchangeName}
              ></textarea>
            </div>

            <div className="form-group">
              <button className="btn btn-primary">Ask question</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default PostQuestion;
