import React from "react";
import data from "../data/content.json";

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <h4 className="section--title">
            Hey, I'm
            <span className="hero--section--name ">
              <h4 className="typewriter">{data.name}</h4>
            </span>
          </h4>
          <h1 className="hero--section--title">
            <span className="hero--section-title-color">Full Stack</span>
            <div>Developer</div>
          </h1>
          <p className="hero--section-description text-md">
            {data.description}
          </p>
        </div>
        <div>
          <a
            target="_blank"
            className="btn btn-primary resume-button"
            href="https://drive.google.com/file/d/1UVxClxteL7oeoOCyV4l6FodEXAkytexy/view?usp=sharing"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img2.jpg" alt="Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
