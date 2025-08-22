import { img6, img7 } from '@/assest/Home';
import React from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS

export default function ChooseUs() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center p-6 bg-transparent bg-center overflow-hidden"
      style={{ backgroundImage: `url(${img7.src})` }} 
      data-aos="fade-up"
      data-aos-duration="1000" 
    >
     
      <div
        className="md:w-1/2 md:ml-6 text-center md:text-left bg-opacity-75 p-6 rounded-lg flex flex-col justify-start"
        data-aos="fade-right" 
        data-aos-duration="1200" 
        data-aos-delay="200" 
        data-aos-offset="50" 
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Core Values</h2>
        <ul className="list-disc list-inside font-bold text-gray-700 space-y-3">
          <li>
            <span className="font-bold text-gray-900">Integrity:</span> We conduct our business with honesty and transparency.
          </li>
          <li>
            <span className="font-bold text-gray-900">Excellence:</span> We strive for the highest standards in everything we do.
          </li>
          <li>
            <span className="font-bold text-gray-900">Customer Focus:</span> We prioritize our clients needs and satisfaction.
          </li>
          <li>
            <span className="font-bold text-gray-900">Teamwork:</span> We believe in collaboration and mutual support.
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 bg-white bg-opacity-75 p-6 rounded-lg"
        data-aos="fade-left" // Animation type for the image
        data-aos-duration="1200" // Custom duration
        data-aos-delay="400" // Delay before animation starts
        data-aos-offset="50" // Offset trigger for animation
      >
        <img
          src={img6.src}
          alt="Why Choose Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
