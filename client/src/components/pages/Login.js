import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="container mt-5">Login</h3>
        <div className="container mt-5 box-bg">
          <form onSubmit={this.onLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
              ></input>
              <label>Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
              ></input>
            </div>

            <div className="form-group">
              <button className="btn btn-primary">Log in</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
