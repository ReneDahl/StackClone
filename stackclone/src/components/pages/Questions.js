import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;
    const getURL = location.pathname;
    let id = getURL.substring(getURL.lastIndexOf("/") + 1);
    let newID;

    if (id != this.state.id) {
      this.setState();
      {
        newID = +id;
      }
    }

    return this.props.dataFromParent
      .filter(e => e.id === newID) //Parse id from URL here, but HOW????
      .map((column, index) => (
        <div className="container mt-5" key={index}>
          {column.name}
          <br></br>
        </div>
      ));
  }
}

export default withRouter(Questions);
