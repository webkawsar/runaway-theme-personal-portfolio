import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Layout from "../components/layout/Layout";
import Loader from "../components/Loader";
import ScrollBottom from "../components/ScrollBottom";
import { BlogContext } from "../context/Blog.context";
import About from "../sections/About";
import Blogs from "../sections/Blogs";
import Contact from "../sections/Contact";
import ExperienceCountUp from "../sections/ExperienceCountUp";
import Intro from "../sections/Intro";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import Skill from "../sections/Skill";
import Testimonial from "../sections/Testimonial";

const Home = () => {
  const { homeInfoLoaded } = useContext(BlogContext);
  const location = useLocation();

  useEffect(() => {
    
    if (location.state) {

      scroller.scrollTo(`${location.state}`, {
        smooth: true,
      });

      location.state = null;
    }
  }, [location.state]);

  return (
    <>
      {homeInfoLoaded ? (
        <Layout>
          <>
            <Intro />
            <About />
            <Skill />
            <ExperienceCountUp />
            <Services />
            <Portfolio />
            <Testimonial />
            <Blogs />
            <Contact />
            <ScrollBottom />
          </>
        </Layout>
      ) : (
        <Loader color="#36d7b7" />
      )}
    </>
  );
};

export default Home;
