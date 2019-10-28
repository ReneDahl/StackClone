import React, { Component } from "react";

export class Ask extends Component {
  render() {
    const values = this.props.dataFromParent.map(function(data, idx) {
      return <p key={idx}>{data.name}</p>;
    });

    return (
      <div className="container mt-5">
        <h1>The ask page {values} </h1>
      </div>
    );
  }
}

export default Ask;
