import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "../../App";

import Ask from "./Ask";

export class Home extends Component {
  render() {
    const items = this.props.dataFromParent.map(item => (
      <tr>
        <td key={item.id}>
          <Link className="linkStyle" to={`/question/${item.id}`}>
            {item.name}
          </Link>
        </td>
      </tr>
    ));

    return (
      <div className="container mt-5">
        <main role="main" className="container">
          <div className="starter-template">
            <div className="row ">
              <div className="col-md-6  ">
                <h1>Top questions asked!</h1>
              </div>

              <div className="col-md-2 ml-auto mr-3 askQuestion"></div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <table className="table table-striped">
                  <tbody>{items}</tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
