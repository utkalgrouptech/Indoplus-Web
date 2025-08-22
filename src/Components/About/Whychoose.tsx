import { about7, about8, about4 } from '@/assest/About';
import React from 'react';

export default function WhyChoose() {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 p-6 bg-black bg-cover"
      style={{ backgroundImage: `url(${about4.src})` }}
    >
      {/* about7 Image */}
      <div className="flex-1 relative">
        <img src={about7.src} alt="Description" className="w-full h-auto rounded-xl shadow-md" />

        {/* Overlay Image (about8) */}
        <img src={about8.src} alt="Overlay Image" className="absolute right-0 top-0 w-72 h-auto rounded-lg shadow-md" />
      </div>

      {/* Paragraph */}
      <div className="flex-1 text-center lg:text-left p-4 lg:p-6">
        <h1 className='text-2xl text-red-500 font-bold mb-5'>Why You Choose Us</h1>
        <p className="text-lg text-white mb-4">
          IndoPlus is a crucial part of the {`company's `}communication strategy, aiming to highlight the unique aspects, strengths, and value propositions of IndoPlus to potential clients and customers. {`Here's`} a structured approach to why customers should choose IndoPlus.
        </p>
        <ul className="list-disc list-inside text-white mt-2 text-base space-y-1">
          <li>Industry Expertise: IndoPlus brings years of experience in the industry, ensuring that clients receive tailored and effective solutions.</li>
          <li>Proven Track Record: The company has a history of successful projects and satisfied clients, which speaks to its reliability and expertise.</li>
        </ul>
        <ul className="list-disc list-inside text-white mt-4 text-base space-y-1">
          <li>Full-Service Provider: IndoPlus offers a wide range of services, from consulting and implementation to ongoing support, providing a one-stop solution for various needs.</li>
          <li>Customizable Solutions: Services are highly customizable to meet the unique requirements of each client, ensuring that they receive exactly what they need without unnecessary overhead.</li>
        </ul>
      </div>
    </div>
  );
}
