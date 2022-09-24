import React from 'react';
import Layout from '../components/layout/Layout';
import ScrollBottom from '../components/ScrollBottom';
import About from '../sections/About';
import Blogs from '../sections/Blogs';
import Contact from '../sections/Contact';
import ExperienceCountUp from '../sections/ExperienceCountUp';
import Intro from '../sections/Intro';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import Skill from '../sections/Skill';
import Testimonial from '../sections/Testimonial';

const Home = () => {
    return (
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
    );
};

export default Home;