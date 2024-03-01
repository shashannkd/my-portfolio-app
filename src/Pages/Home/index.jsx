import React from "react";
import HeroSection from "../HeroSection.jsx";
import Skills from "../Skills.jsx";
import Portfolio from "../Portfolio.jsx";
import AboutMe from "../AboutMe.jsx";
import data from "../../data/index.json";
import Interests from "../Interests.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills skills={data.skills} />
      <AboutMe />
      <Portfolio portfolio={data.portfolio} />
      <Interests interests={data.interests} />
    </>
  );
};

export default Home;
