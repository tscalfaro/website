import React from "react";
import { connect } from "react-redux";

export const Journey = () => {
  return (
    <div className="about-me-div">
      <div className="about-header-div">
        <h3 className="about-header">How I got here</h3>
        <a href="#about-me"><button className="contact-btn"><h2>Get in Touch</h2></button></a>
        </div>
      <div className="about-odd-years">
        <p id="about-me-info">2021 - Graduated from FullStack Academy</p>
        <p id="about-me-info">2017 - Honorably Discharged from the United States Marine Corps</p>
        <p id="about-me-info">2013 - Graduated High School</p>
      </div>
      <div className="verticle-line"></div>
      <div className="about-even-years">
      <p id="about-me-info">2018 - Started at Temple University with a major in Computer Science</p>
      <p id="about-me-info">2013 - Graduated boot camp</p>
      </div>
    </div>
  )
}

export default Journey;
