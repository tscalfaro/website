import React from "react";
import { connect } from "react-redux";

export const AboutMe = () => {
  return (
    <div className="about-me-div">
      <h3 className="about-header">How I got here</h3>
      <div className="about-odd-years">
        <p>2021 - Graduated from FullStack Academy</p>
        <p>2021 - Graduated from FullStack Academy</p>
        <p>2021 - Graduated from FullStack Academy</p>
      </div>
      <div className="verticle-line"></div>
      <div className="about-even-years">
      <p>2021 - Graduated from FullStack Academy</p>
      <p>2021 - Graduated from FullStack Academy</p>
      </div>
    </div>
  )
}

export default AboutMe;
