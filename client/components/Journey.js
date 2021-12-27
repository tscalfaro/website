import React from "react";
import { connect } from "react-redux";

export const Journey = () => {
  return (
    <div className="journey-div">
      <div className="journey-header-div">
        <h3 className="journey-header">How I got here</h3>
        <a href="#contact-me"><button className="contact-btn"><h2>Get in Touch</h2></button></a>
        </div>
      <div className="journey-odd-years">
        <p id="journey-info">2021 - Graduated from FullStack Academy</p>
        <p id="journey-info">2017 - Honorably Discharged from the United States Marine Corps</p>
        <p id="journey-info">2013 - Graduated High School</p>
      </div>
      <div className="ladder">
      <div className="point"></div>
      <div className="verticle-line"></div>
      </div>
      <div className="journey-even-years">
      <p id="journey-info">2018 - Started at Temple University with a major in Computer Science</p>
      <p id="journey-info">2013 - Graduated boot camp</p>
      </div>
    </div>
  )
}

export default Journey;
