import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "venobox/dist/venobox.min.css";
import Layout from "./components/layout/Layout";
import ScrollBottom from "./components/ScrollBottom";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import ExperienceCountUp from "./sections/ExperienceCountUp";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Skill from "./sections/Skill";
import Testimonial from "./sections/Testimonial";


const App = () => {
  return (
    <>
      <Layout>
        <>
          <Home />
          <About />
          <Skill />
          <ExperienceCountUp />
          <Services />
          <Portfolio />
          <Testimonial />
          <Blog />
          <Contact />
          <ScrollBottom />
        </>
      </Layout>
    </>
  );
};

export default App;
