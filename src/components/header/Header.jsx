import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Resume Builder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link
              className={`nav-item nav-link  mx-lg-2 ${
                props.active === "home" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>

            <div
              className={`nav-item dropdown mx-lg-2 ${
                props.active === "editor" ? "active" : ""
              }`}
            >
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Edit
              </span>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <span
                  className="dropdown-item"
                  onClick={() => {
                    props.onClick(0);
                  }}
                >
                  Presonal Info
                </span>
                <span
                  className="dropdown-item"
                  onClick={() => {
                    props.onClick(1);
                  }}
                >
                  Education
                </span>
                <span
                  className="dropdown-item"
                  onClick={() => {
                    props.onClick(2);
                  }}
                >
                  Work Experience
                </span>
                <span
                  className="dropdown-item"
                  onClick={() => {
                    props.onClick(3);
                  }}
                >
                  Other Details
                </span>
              </div>
            </div>

            <div
              className={`nav-item dropdown mx-lg-2 ${
                props.active === "editor" ? "active" : ""
              }`}
            >
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resume
              </span>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <span
                  className="dropdown-item"
                  onClick={() => {
                    localStorage.removeItem("resumeData");
                    window.location.reload();
                  }}
                >
                  Reset
                </span>

                <span className="dropdown-item" onClick={props.generate}>
                  Update
                </span>
              </div>
            </div>

            <Link
              className={`nav-item nav-link  mx-lg-2 ${
                props.active === "preview" ? "active" : ""
              }`}
              to="/preview"
            >
              Preview
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
