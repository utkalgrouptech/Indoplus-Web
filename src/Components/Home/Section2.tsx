import React, { useEffect } from "react";
import { img1, img2, img3 } from "@/assest/Home"; // Ensure you have the correct image paths
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function Section2() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration of 1 second
  }, []);

  return (
    <div>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 md:space-x-8 space-y-6 md:space-y-0 overflow-hidden" data-aos="zoom-in">
        {/* Left Image */}
        <img
          src={img1.src}
          alt="Left Image"
          className="w-2/3 md:w-1/3 h-auto object-cover"
        />

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-xl md:text-2xl font-bold text-[#301af3] mb-4 md:mb-6 italic"
            data-aos="zoom-in-up"
          >
            About Us Our Company
          </h2>
          <p
            className="text-gray-800 text-base md:text-lg leading-relaxed font-medium"
            data-aos="zoom-in-up"
          >
            <strong>IndoPlus</strong> is a leading provider of innovative solutions across various industries, specializing in delivering top-notch products and services that meet the highest standards of quality and efficiency. With a focus on customer satisfaction and sustainability, IndoPlus is committed to driving excellence in every aspect of its operations. We leverage cutting-edge technology and industry expertise to provide solutions that help our clients achieve their goals while contributing to sustainable development.
          </p>
        </div>

        {/* Right Image */}
        <img
          src={img2.src}
          alt="Right Image"
          className="w-20 md:w-24 h-auto rounded-full object-contain"
          data-aos="zoom-in"
        />
      </div>

      {/* Section 2: Mission and Vision on the left, img3 on the right */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:space-x-8 space-y-6 md:space-y-0" data-aos="zoom-in-up">
        {/* Mission and Vision */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:p-8 w-full">
          {/* Mission Section */}
          <div className="w-full md:w-1/2 text-center md:text-left" data-aos="zoom-in-up">
            <h3 className="text-lg md:text-xl font-bold text-[#301af3] mb-4">
              Mission
            </h3>
            <p className="text-base md:text-lg font-medium text-gray-800">
              Our mission is to empower businesses with innovative technology
              solutions that drive growth and efficiency.
            </p>
          </div>

          {/* Vision Section */}
          <div className="w-full md:w-1/2 text-center md:text-left" data-aos="zoom-in-up">
            <h3 className="text-lg md:text-xl font-bold text-[#301af3] mb-4">
              Vision
            </h3>
            <p className="text-base md:text-lg font-medium text-gray-800">
              Vision To Create Respected Pan India Brand of Indoplus Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <img
          src={img3.src}
          alt="Right Side Image"
          className="w-2/3 md:w-96 h-auto object-cover rounded-full"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
}
