import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CardSection from '../components/CardSection';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <CardSection />
      <About />
      <Contact />
    </>
  );
};

export default Home;