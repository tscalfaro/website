import React from "react";
import { connect } from "react-redux";
import pic from '../../public/images/profPic.png'
import Projects from "./Projects";
/**
 * COMPONENT
 */
export const Home = () => {


  const onPress = () => {
    var scrollToProjects = document.getElementsByClassName("project-btn");

  }
  return (
    <div className="container">

      <section className="pages" id="intro">


        <div className="intro">
        <p className="intro-par">Hi, I'm </p>
        <h1 className="intro-head">Antonio Scalfaro</h1>
        <h2 className="intro-h2">Software Developer. Recent Graduate. Life Long Learner.</h2>

        <button className="project-btn" >
        <a href="#work" className="proj-link"> <h3>Projects <span role="img" aria-label="arrow">↪</span></h3></a>
          </button>
        </div>

        <div className="picdiv">
          <img src={require("../../public/images/sky.jpg")} />
          </div>
      </section>

      <section className="pages" id="work">

        <Projects />
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
