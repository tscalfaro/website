import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const myName = '<devTony>'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>{myName}</h1>
    <nav>
      <div>
        <Link to="/home">Home</Link>
        <button className="resume">Resume</button>
      </div>

    </nav>
    <hr />
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
