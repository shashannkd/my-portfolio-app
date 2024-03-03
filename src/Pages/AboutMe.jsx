import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me" className="about--section">
      <div className="about--section--img">
        <img src="./img/hero_img2.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box--about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About </p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            porro soluta aspernatur inventore dolorem doloribus est ullam
            necessitatibus, autem reiciendis impedit sit labore. Quas inventore
            officia, in quae rerum eaque!
          </p>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi natus
            ea hic inventore numquam molestias exercitationem iusto sequi
            repellat provident.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
