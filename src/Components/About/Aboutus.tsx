import React, { useEffect } from 'react';
import { about2, about3, bg1 } from '@/assest/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a specific duration for animations
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between p-12 lg:p-16 overflow-hidden"
      style={{ backgroundImage: `url(${bg1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      data-aos="fade-in" // Apply fade-in animation on scroll
    >
      {/* Left Image */}
      <div className="w-full lg:w-96 flex justify-center mb-8 lg:mb-0" data-aos="fade-right" data-aos-delay="100">
        <img src={about2.src} alt="Left Image" className="w-full h-full object-cover" />
      </div>

      {/* Middle Content */}
      <div className="w-full px-6 lg:px-10 p-3 lg:p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 italic">About Us</h2>
        <p className="text-gray-900 font-bold text-lg md:text-xl leading-relaxed w-full">
          Indoplus is a premier technology consulting firm working with global companies to create cutting-edge solutions for clients across the world. Our extensive expertise in swift development, our focus on innovation, and our optimized project management methodologies empower us to address the precise needs of your project and create world-class effective software solutions for your business. We have a pool of skilled innovative developers, pixel-perfect designers, and strategic business consultants ready to provide a full spectrum of Software solutions on all Enterprise & Industry scales, from small to large-sized businesses.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/4 flex justify-center  lg:mt-0" data-aos="fade-left" data-aos-delay="300">
        <img src={about3.src} alt="Right Image" className="w-full h-auto rounded-full object-cover" />
      </div>
    </div>
  );
}
