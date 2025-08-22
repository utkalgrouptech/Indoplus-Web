import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { contact2 } from "@/assest/Contact";

export default function Contactform() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-4 bg-gray-100 overflow-hidden">
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-right" // AOS animation
      >
        <img
          src={contact2.src}
          alt="Contact Us"
          className="rounded-xl shadow-lg w-full max-w-sm lg:max-w-lg"
        />
      </div>

      {/* Contact Form Section */}
      <div
        className="w-full lg:w-1/2 p-6 rounded-2xl"
        data-aos="fade-left" // AOS animation
      >
        <h2
          className="text-2xl font-bold mb-4 text-gray-800"
          data-aos="fade-up" // AOS animation
        >
          Get in Touch
        </h2>
        <form>
          <div className="mb-4" data-aos="zoom-in">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4" data-aos="zoom-in" data-aos-delay="200">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4" data-aos="zoom-in" data-aos-delay="400">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full lg:w-40 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
