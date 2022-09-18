import React from 'react';
import Layout from './components/layout/Layout';
import ScrollBottom from './components/ScrollBottom';
import About from './sections/About';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import CountUp from './sections/CountUp';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Skill from './sections/Skill';
import Testimonial from './sections/Testimonial';

const App = () => {
  return (
    <>
      <Layout>
        <>
          <Home />
          <About />
          <Skill />
          <CountUp />
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