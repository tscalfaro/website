import React from "react";
import { connect } from "react-redux";
import pic from '../../public/images/profPic.png'
/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div className="container">

      <section className="pages" id="intro">
        <img src={pic} />
        <p className="intro-par">Hi and welcome, I'm </p>
        <h1>Antonio Scalfaro</h1>
        <p>I'm a software engineer specializing in building database networks and exceptional digital experiences. I am goals-oriented and have ample leadership experience.</p>
        <button className="projects"><h3>My Projects</h3></button>
      </section>

      <section className="pages" id="work">
        <h1>My Work</h1>
      </section>

      <section className="pages" id="about-me">
        <h1>Page 3</h1>
      </section>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
