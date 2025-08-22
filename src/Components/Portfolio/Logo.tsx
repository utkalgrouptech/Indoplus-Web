import React from 'react';
import { LogoArr } from '@/Utils/index';
import { port15 } from '@/assest/Portfolio'; // Adjust the path as per your project structure
import { StaticImageData } from 'next/image'; // Import StaticImageData

// Define the Logo interface to match the structure of LogoArr
interface Logo {
  id: number; // id is a number, as per your LogoArr
  img: StaticImageData | string; // img can be StaticImageData or a string
}

const LogoGrid = () => {
  const getPyramidRows = (logos: Logo[]) => {
    const rows: Logo[][] = []; // Specify the type as an array of Logo arrays
    let count = 1;
    let index = 0;

    while (index < logos.length) {
      rows.push(logos.slice(index, index + count));
      index += count;
      count++;
    }

    return rows;
  };

  // Ensure LogoArr is properly defined and matches the Logo interface
  const pyramidRows = Array.isArray(LogoArr) ? getPyramidRows(LogoArr) : [];

  return (
    <div
      className="p-4 bg-cover bg-center bg-black"
      style={{ backgroundImage: `url(${port15.src})` }} // Set port15 as background
    >
      {pyramidRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-20 mb-4">
          {row.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center">
              {logo.img && (
                <img
                  src={typeof logo.img === 'string' ? logo.img : logo.img.src} // Handle both StaticImageData and string
                  alt={`Logo ${logo.id}`}
                  className="w-24 h-24 object-contain rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
