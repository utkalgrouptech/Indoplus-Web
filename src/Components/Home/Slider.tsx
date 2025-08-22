import React, { useState, useEffect } from 'react';
import { slider1, img8 } from '@/assest/Home'; // Ensure the correct paths to your images

const words = ["SOLUTIONS.", "TECHNOLOGY.", "INNOVATION."]; // Add more words as needed

export default function Slider() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:h-screen flex justify-center items-center bg-gray-800">
      {/* Display slider1 image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={slider1.src}
          alt="Slider 1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black overlay */}
      <div className="absolute inset-0 z-5 bg-black opacity-80"></div>

      {/* Content overlaying the slider */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 lg:px-12">
        {/* img8 image and text */}
        <div className="flex flex-col sm:flex-row items-center justify-center  p-6 gap-6 rounded-md max-w-5xl w-full">
          {/* img8 image */}
          <div className="w-full sm:w-1/2 flex-shrink-0">
            <img
              src={img8.src}
              alt="Image 8"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {/* Paragraph */}
          <div className="w-full sm:w-1/2 text-white px-4 sm:px-6 space-y-4 text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-bold leading-snug">
              Delivering Superior Services <br />
              IT Solutions.
            </p>
            <p className="text-xl sm:text-2xl font-bold leading-snug">
              EMPOWERING INNOVATIVE IDEAS INTO DIGITAL{' '}
              <span className="animated-word">
                {Array.from(words[currentWordIndex]).map((letter, index) => (
                  <span
                    key={`${words[currentWordIndex]}-${index}`}
                    className="letter"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animated-word .letter {
          display: inline-block;
          opacity: 0;
          animation: fadeIn 2s ease-in-out forwards;
        }

        .animated-word {
          display: inline-block;
          animation: resetFadeOut 4s infinite;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes resetFadeOut {
          0%, 80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
