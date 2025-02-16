import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Update offset for parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Background Image Slider with Parallax Effect */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <Image
              src={src}
              alt={`Hero Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-heading text-white drop-shadow-lg">
          Tsuki Izakaya
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white drop-shadow">
          Modern Japanese Cuisine. Timeless Tradition.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="/menu"
            className="px-6 py-3 bg-accent text-white rounded-md hover:bg-opacity-80 transition-colors"
          >
            View Menu
          </a>
          <a
            href="/reservations"
            className="px-6 py-3 bg-secondary text-accent rounded-md hover:bg-opacity-80 transition-colors"
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
