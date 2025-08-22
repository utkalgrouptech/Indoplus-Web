// import React from 'react';
// import Slider from 'react-slick';
// import { clientArr } from '@/Utils/index'; // Adjust the import path as needed
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ClientSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="overflow-hidden bg-black ">
//       <Slider {...settings}>
//         {clientArr.map((client) => (
//           <div key={client.id} className="flex justify-center">
//             <img
//               src={client.img.src}
//               alt={`client-${client.id}`}
//               className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ClientSlider;
