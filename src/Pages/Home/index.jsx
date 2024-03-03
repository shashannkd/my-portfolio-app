import React from "react";
import HeroSection from "../HeroSection.jsx";
import Skills from "../Skills.jsx";
import Portfolio from "../Portfolio.jsx";
import AboutMe from "../AboutMe.jsx";
import TechStack from "../TechStack.jsx";

import data from "../../data/index.json";
import ContactMe from "../ContactMe.jsx";
import Footer from "../Footer.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Portfolio portfolio={data.portfolio} />
      <Skills skills={data.skills} />
      <AboutMe />
      <TechStack />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
