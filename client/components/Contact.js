import React from "react";
import { connect } from "react-redux";

export const Contact = () => {
  return (
    <div className="contact-div">
      <div>
      <h3>Reach out, get in touch</h3>
      </div>

      <div>

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
