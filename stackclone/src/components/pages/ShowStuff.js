import React, { Component } from "react";

// This component renders some stuff given to it as part of the route
class ShowStuff extends Component {
  render() {
    return (
      // 'this.props.name' below is actually taken from the route parameter ':name' by Reach Router
      // magic!
      // See the other end in the render() method in App.js
      <div className="container mt-5">
        <h1>Show some stuff</h1>
        <p>Name of the stuff is: {this.props.name}</p>
      </div>
    );
  }
}

export default ShowStuff;
