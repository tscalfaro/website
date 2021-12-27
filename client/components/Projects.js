import React from "react";
import { connect } from "react-redux";

export const Projects = () => {
  return (
    <div className="my-work-div">
      <div className="projects-div">
      <h1 id="work-header">My Work</h1>
      <div>
        <h3 id="stapler-title">STAPLER</h3>
        <p id="stapler-info">Stapler is a fully functional e-commerce site that provides a guest, user, and administrater experience. Functionality such as, adding, editing, and removing products & users is available for admin users only. While the shopping experience is available to all, with a persistent cart. </p>
      </div>
      <div>
        <h3 id="tagd-title">TAGD</h3>
        <p id="tagd-info">TAGD is an AR mobile application designed with the AB&B host in mind. This application allows a user to see AR "tags" left by a host to help guide guests around their home. </p>
      </div>
    </div>
    <a href="#journey" ><button className="button-27">About Me ↷ </button></a>
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
