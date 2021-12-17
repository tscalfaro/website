import React from "react";
import { connect } from "react-redux";
import pic from '../../public/images/profPic.png'
import Projects from "./Projects";
import Contact from "./Contact"
import AboutMe from "./AboutMe";
/**
 * COMPONENT
 */
export const Home = () => {

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

          </div>
      </section>

      <section className="pages" id="work">

        <Projects />
      </section>

      <section className="pages" id="about-me">
        <AboutMe />
      </section>

      <section className="pages" id="contact-me">
        <Contact />
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
