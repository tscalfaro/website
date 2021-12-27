import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Projects } from "./Projects";
import resumePdf from "../../public/AntonioScalfaro_Resume.pdf"

const myName = '<devTony>'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="navdiv">
    <h2 className="nameTag">{myName}</h2>
    <nav>
      <div className="bardiv">
        <a href="#intro">01. Home</a>
        <a href="#work">02. Projects</a>
        <a href="#about-me">03. About Me</a>
        <a href="#journey">04. Journey</a>
        <a href="#contact-me">05. Contact Me</a>
        <a href={resumePdf} target='_blank'>
          Resume
        </a>
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
