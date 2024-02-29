import React from "react";
import HeroSection from "../HeroSection";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import AboutMe from "../AboutMe";
import data from "../../../data/index.json";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills skills={data.skills} />
      <AboutMe />
      <Portfolio portfolio={data.portfolio} />
    </>
  );
};

export default Home;
