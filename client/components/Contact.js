import React from "react";
import { connect } from "react-redux";

export const Contact = () => {
  return (
    <div className="contact-div">
      <div className="contact-left-side">
      <h2 id="reach-out">Reach out</h2>
      </div>

      <div className="contact-right-side">
        <span ><h3 id="email-header">Email</h3></span>
        <p id="email">tscalfaro7@gmail.com</p>
        <span><h3 id="mobile-header">Mobile</h3></span>

        <p id="mobile">215 - 460 - 4680</p>

      </div>
      <div className="contact-icons">
        <div>
        <a href="https://github.com/tscalfaro/website"><i className="fa fa-github contact-icons fa-2x"></i></a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/antonioscalfaro/"><i className="fa fa-linkedin contact-icons fa-2x"></i></a>
        </div>
      </div>
    </div>
  )
}
/**
 * CONTAINER
 */
 const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Contact);
