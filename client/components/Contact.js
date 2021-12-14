import React from "react";
import { connect } from "react-redux";

export const Contact = () => {
  return (
    <div>
      <h1>Reach out, get in touch</h1>
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
