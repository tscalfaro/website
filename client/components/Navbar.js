import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Projects } from "./Projects";

const myName = '<devTony>'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="navdiv">
    <h2 className="nameTag">{myName}</h2>
    <nav>
      <div className="bardiv">
        <a href="#intro">01. Home</a>
        <a href="#work">02. Projects</a>
        <a href="#about-me">03. About Me</a>
        <a href="#contact-me">04. Contact Me</a>
        <button className="resume-btn">Resume</button>
      </div>

    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
