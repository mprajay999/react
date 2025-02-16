import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="relative py-16" id="about">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/chef-preparing-food.jpg"
          alt="Chef preparing food"
          className="w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl font-heading mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            At Tsuki Izakaya, our passion for modern Japanese cuisine meets a deep respect
            for tradition. Our journey began with a vision to craft dishes that capture the
            essence of Japan, blending innovative techniques with time-honored culinary art.
            Experience the story behind every plate—where flavor, heritage, and creativity
            converge to create unforgettable dining moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
