import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedDishes from '../components/FeaturedDishes';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedDishes />
      <AboutUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
