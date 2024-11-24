// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function CustomerReviews() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <section className="w-full bg-[#9b4819] py-12">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-semibold text-white mb-6 tracking-wide uppercase font-serif italic">Customer Reviews</h2>
        
//         <Slider {...settings}>
//           {/* Review 1 */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <p className="text-lg font-medium text-gray-800 mb-2">"Fantastic service! Faith helped streamline our operations effortlessly."</p>
//             <div className="text-sm text-gray-600">- John Doe, CEO at Company</div>
//             <div className="text-yellow-500">★★★★★</div>
//           </div>
          
//           {/* Review 2 */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <p className="text-lg font-medium text-gray-800 mb-2">"Incredible attention to detail and excellent support."</p>
//             <div className="text-sm text-gray-600">- Jane Smith, Manager at Business</div>
//             <div className="text-yellow-500">★★★★★</div>
//           </div>
          
//           {/* Review 3 */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <p className="text-lg font-medium text-gray-800 mb-2">"Faith's expertise in AI and business solutions is unmatched."</p>
//             <div className="text-sm text-gray-600">- Michael Lee, Director at Organization</div>
//             <div className="text-yellow-500">★★★★★</div>
//           </div>
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default CustomerReviews;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function CustomerReviews() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };

//   return (
//     <section className="w-full bg-[#9b4819] py-12">
//       <div className="container mx-auto text-white">
//         <h2 className="text-2xl font-semibold text-white mb-6 tracking-wide uppercase font-serif italic"> What Satisfied Clients Say</h2>
        
//         <Slider {...settings}>
//           {/* Review 1 */}
//           <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
//             <p className="text-lg font-medium text-white mb-2">"Merceline has indeed proven to be a dependable and trusted individual. Truly an asset, she is at her best in fast-moving environments and on complex situations that demand high-quality results."</p>
//             <div className="text-sm text-white">- JOSEPH NGUNJIRI, CEO at Company</div>
//             <div className="text-yellow-500">★★★★★</div>
//           </div>
          
//           {/* Review 2 */}
//           <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
//             <p className="text-lg font-medium text-white mb-2">"Incredible attention to detail and excellent support."</p>
//             <div className="text-sm text-white">- Jane Smith, Manager at Business</div>
//             <div className="text-yellow-500">★★★★★</div>
//           </div>
          
//           {/* Review 3 */}
//           <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
//             <p className="text-lg font-medium text-white mb-2">"Faith's expertise in AI and business solutions is unmatched."</p>
//             <div className="text-sm text-white">- Michael Lee, Director at Organization</div>
//             <div className="text-yellow-500">★★★★★</div>
//           </div>
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default CustomerReviews;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CustomerReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="w-full bg-[#9b4819] py-9">
      <div className="container mx-auto text-white text-center">
        <h2 className="text-2xl font-semibold text-white mb-6 tracking-wide uppercase font-serif italic"> What Satisfied Clients Say</h2>
        
        <Slider {...settings}>
          
          <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium text-white mb-2">"Merceline has indeed proven to be a dependable and trusted individual. Truly an asset, she is at her best in fast-moving environments and on complex situations that demand high-quality results."</p>
            <div className="text-sm text-white">- JOSEPH NGUNJIRI, CEO at Company</div>
            <div className="text-yellow-500">★★★★★</div>
          </div>
          <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium text-white mb-2">"Merceline has indeed proven to be a dependable and trusted individual. Truly an asset, she is at her best in fast-moving environments and on complex situations that demand high-quality results."</p>
            <div className="text-sm text-white">- JOSEPH NGUNJIRI, CEO at Company, Manager at Business</div>
            <div className="text-yellow-500">★★★★★</div>
          </div>
          <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium text-white mb-2">"Merceline's expertise in AI and business solutions is unmatched."</p>
            <div className="text-sm text-white">- JOSEPH NGUNJIRI, CEO at Company, Director at Organization</div>
            <div className="text-yellow-500">★★★★★</div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default CustomerReviews;
