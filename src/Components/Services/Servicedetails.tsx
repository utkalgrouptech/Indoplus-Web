import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { serviceArr } from '@/Utils/index'; // Ensure the correct path
import { service1 } from '@/assest/Services';

export default function ServiceDetails() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${service1.src})`,
      }}
    >
      {serviceArr.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col md:flex-row p-4 md:p-6 md:space-x-36 bg-gray-800 bg-opacity-35 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
          data-aos="flip-left"
        >
          {/* Image Container */}
          <div className="w-full md:w-1/2 main-container" data-aos="zoom-in">
            <img
              src={service.img.src}
              alt={service.title}
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Content Container */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            data-aos="fade-up"
          >
            <h2 className="text-2xl sm:text-2xl md:text-2xl text-red-700 font-bold mb-2 md:mb-4">
              {service.title}
            </h2>

            {/* Description */}
            <div className="text-white font-semibold  text-left text-base sm:text-lg md:text-xl">
              {service.description.split('.').filter(Boolean).map((sentence, idx) => (
                <p key={idx} className="text-lg">
                  {sentence.trim()}.
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
