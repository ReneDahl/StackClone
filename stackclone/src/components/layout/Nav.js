import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  //Resizing the logo
  const logo = {
    height: "75px"
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand">
          <img src="logo512.png" className="p-3" style={logo}></img>StackClone
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse " id="navbarsExampleDefault">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <form className="form-inline my-2 my-lg-0"></form>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          <img src="logo512.png" className="p-3" style={logo}></img>StackClone
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse " id="navbarsExampleDefault">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item active">Home</li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <form className="form-inline my-2 my-lg-0"></form>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          <img src="logo512.png" className="p-3" style={logo}></img>StackClone
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse " id="navbarsExampleDefault">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link">
              <li className="nav-item active">
                Home <span className="sr-only">(current)</span>
              </li>
            </Link>

            <Link to="/about" className="nav-link">
              <li className="nav-item active">
                About <span className="sr-only">(current)</span>
              </li>
            </Link>

            <Link to="/questions" className="nav-link">
              <li className="nav-item active">
                Questions <span className="sr-only">(current)</span>
              </li>
            </Link>
            <Link to="/ask" className="nav-link">
              <li className="nav-item active">
                Ask Question <span className="sr-only">(current)</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
