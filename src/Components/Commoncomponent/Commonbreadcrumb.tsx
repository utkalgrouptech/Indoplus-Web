import React from "react";

type Prop = {
  data: {
    cont1: string;
    cont2?: string; // Optional if you want to add more content later
  };
  img: string;
};

export default function Commonbreadcrumb({ data, img }: Prop) {
  return (
    <section className="lg:h-screen h-96 relative">
      {/* Background Image */}
      <div
        className="w-full h-full absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-left p-6 lg:p-8 lg:justify-center lg:items-center lg:text-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
          {data.cont1}
        </h1>
        {data.cont2 && (
          <p className="text-white text-base md:text-lg lg:text-2xl">
            {data.cont2}
          </p>
        )}
      </div>
    </section>
  );
}
