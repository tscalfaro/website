import React from "react";
import { connect } from "react-redux";

export const Projects = () => {
  return (
    <div>
      <h1>My Work:</h1>
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

export default connect(mapState)(Projects);
