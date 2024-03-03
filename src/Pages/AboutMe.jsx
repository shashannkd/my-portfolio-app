import React from "react";
import data from "../data/content.json";

const AboutMe = (info) => {
  return (
    <section id="about-me" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box--about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About </p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="about--me--section-description text-lg">
            {data.aboutMe}
          </p>
          <p className="about--me--section-description text-lg">
            {data.aboutMe2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
