import React from "react";
import { connect } from "react-redux";
import pic from '../../public/images/profPic.png'
import Projects from "./Projects";
import Contact from "./Contact"
import Journey from "./Journey";
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

        <a href="#work" className="proj-link"> <button className="project-btn" >
        <h3>Projects <span role="img" aria-label="arrow">↪</span></h3>
          </button></a>
        </div>

        <div className="picdiv">

          </div>
      </section>

      <section className="pages" id="work">

        <Projects />
      </section>

      <section className="pages" id="about-me">
        <Journey />
      </section>

      <section className="pages" id="journey">
        <Journey />
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
