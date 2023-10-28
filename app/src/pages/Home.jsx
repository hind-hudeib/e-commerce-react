import React from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import BlogSection from "../components/Home/BlogSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection/>
      <BlogSection/>
    </div>
  );
};

export default Home;
