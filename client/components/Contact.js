import React from "react";
import { connect } from "react-redux";

export const Contact = () => {
  return (
    <div className="contact-div">
      <div className="contact-left-side">
      <h1>Reach out, get in touch</h1>
      </div>

      <div className="contact-right-side">
        <span ><h3 id="email-header">Email:</h3></span> <span><h3 id="mobile-header">Mobile:</h3></span>
        <p id="email">tscalfaro7@gmail.com</p>
        <p id="mobile">215 - 460 - 4680</p>
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
