import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img10, img11, img5, img9 } from "@/assest/Home";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "IndoPlus exceeded my expectations! The team is professional and delivers on time.",
      image: img10,
    },
    {
      name: "Anjali Mehta",
      text: "Excellent service and high-quality products. Highly recommend IndoPlus!",
      image: img5,
    },
    {
      name: "Vikram Singh",
      text: "Working with IndoPlus has been a seamless experience. Great customer support!",
      image: img9,
    },
    {
      name: "Sneha Gupta",
      text: "The products are durable and worth the price. Kudos to the IndoPlus team!",
      image: img11,
    },
    {
      name: "Amit Sharma",
      text: "IndoPlus stands out for its quality and attention to detail. Impressive!",
      image: img10,
    },
    {
      name: "Pooja Desai",
      text: "Exceptional service and a reliable team. IndoPlus is my go-to brand!",
      image: img11,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 overflow-hidden">
      {/* New Heading */}
      <h1 className="text-center text-lg  text-white font-bold mb-4 italic">Testimonial</h1>
      
      {/* Subheading */}
      <h2 className="text-center text-2xl font-bold mb-6 text-white">
        What Clients Say About Us
      </h2>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-700 shadow-xl rounded-lg p-6 text-center flex flex-col items-center justify-between h-[300px] w-[250px] mx-auto">
              <img
                src={testimonial.image.src}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              <p className="text-white text-base font-bold mt-2">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
