import { TeamArr } from "@/Utils";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import { about4 } from "@/assest/About"; // Adjust the path to your actual file

const TeamSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div
      className="bg-cover bg-center py-20 relative bg-black opacity-95"
      style={{ backgroundImage: `url(${about4.src})` }} // Using imported about4 as background
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* First Image at the Top */}
        {TeamArr[0] && (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative text-center group mb-10 cursor-pointer"
          >
            <img
              src={TeamArr[0].img.src}
              alt={`Team Member 1 - ${TeamArr[0].name}`}
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-700 shadow-lg"
            />
            {/* Hover Card */}
            <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-white w-64 p-2 rounded-lg shadow-lg text-center">
                <h3 className="font-semibold text-lg mb-1">{TeamArr[0].name}</h3>
                <p className="text-lg text-blue-700">{TeamArr[0].role}</p>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Images in Pyramid Rows */}
        <div className="flex flex-wrap justify-center gap-10">
          {TeamArr.slice(1).map((member, index) => (
            <div
              key={index + 1}
              data-aos="flip-up"
              data-aos-duration="1000"
              className="relative text-center group cursor-pointer"
            >
              <img
                src={member.img.src}
                alt={`Team Member ${index + 2} - ${member.name}`}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-700 shadow-lg"
              />
              {/* Hover Card */}
              <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white w-64 p-1 rounded-xl text-center">

                  <h3 className="font-semibold text-lg ">{member.name}</h3>
                  <p className="text-clip text-blue-700">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
