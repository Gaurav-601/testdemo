import React from "react";
import propTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/textform">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//proptypes//
Navbar.propTypes = {
  title: propTypes.string.isRequired, //optional prop to add text for the About link in Navbar component    //
  //What is the use of isRequired

  about: propTypes.string.isRequired, //optional prop to add text for the About link in Navbar component
};

//Default props//
Navbar.defaultProps = {
  title: "Type Your Brand", //default props is use when we don't give the prop value but it take the default value which we give here //
  about: "About",
};
