import React from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import BlogSection from "../components/Home/BlogSection";
import Portal from "../components/Portal";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="text-center flex flex-col justify-center items-center text-xl">
        <h1>Normal Content</h1>
        <Portal>
          <h2>Portal Content</h2>
          <p>This content is conditionally rendered.</p>
        </Portal>
      </div>
      <AboutSection />
      <BlogSection />
    </div>
  );
};

export default Home;
