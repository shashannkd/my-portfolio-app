import React from "react";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shashannk</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title-color">Full Stack</span> 
            <div>Developer</div>
          </h1>
          <p className="hero--section-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div>Lorem ipsum dolor sit amet consectetur.</div>
          </p>
        </div>
        <div>
            <button className="btn btn-primary">Get in Touch</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
