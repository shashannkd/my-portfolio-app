import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <h4 className="section--title">
            Hey, I'm
            <span className="hero--section--name ">
              <h4 className="typewriter">Shashannk Deshpande.</h4>
            </span>
          </h4>
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
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contact-me"
            className="btn btn-primary get-in-touch"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img2.jpg" alt="Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
