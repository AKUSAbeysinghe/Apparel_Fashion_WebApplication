// import React from 'react';

// const AboutUsSection = () => {
//   return (
//     <section className="bg-white font-['Inter'] text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16 relative">
//           {/* Vertical line from the top */}
//           <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gray-300"></div>
//           <h2 className="text-4xl font-light tracking-widest uppercase mt-16">
//             ABOUT US
//           </h2>
//           <p className="text-sm text-gray-500 mt-2">Akemi Numbers</p>
//         </div>

//         {/* Stats Grid Section */}
//         {/* Using a grid with 4 columns on large screens to position the cards correctly */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 items-end">
//           {/* 38+ Card - Tall card spanning two rows */}
//           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
//             <h3 className="text-5xl lg:text-6xl font-light">38+</h3>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Years in Business</p>
//             </div>
//           </div>

//           {/* Infinity Card - Shorter card */}
//           <div className="bg-[#EBE7DF] p-8 flex flex-col justify-between min-h-[140px]">
//             <div className="text-5xl lg:text-6xl font-light mb-auto">
//               {/* Simple inline SVG for the infinity symbol */}
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="64" 
//                 height="64" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="1" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//                 className="text-gray-800"
//               >
//                 <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
//               </svg>
//             </div>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Ideas brought to life</p>
//             </div>
//           </div>
          
//           {/* 900+ Card - Shorter card */}
//           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between min-h-[140px]">
//             <h3 className="text-5xl lg:text-6xl font-light mb-auto">900+</h3>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Launched Products</p>
//             </div>
//           </div>

//           {/* 30+ Card - Tall card spanning two rows */}
//           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
//             <h3 className="text-5xl lg:text-6xl font-light mb-auto">30+</h3>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Professionals</p>
//             </div>
//           </div>
//         </div>

//         {/* Text Content Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16 text-gray-600">
//           <div>
//             <p className="text-sm leading-relaxed mb-4">
//               At Akemi Cosmetics, your vision is the epicenter of our purpose. Manufacturing and Trust are the foundation of our core values.
//             </p>
//             <a href="#" className="flex items-center text-sm font-semibold uppercase tracking-widest text-gray-800 hover:text-black transition-colors duration-200">
//               More 
//               <span className="ml-2">&gt;</span>
//             </a>
//           </div>
//           <div>
//             <p className="text-sm leading-relaxed">
//               With over 38 years of experience, our premier research facility is designed to produce all varieties of cosmetic products catered to your needs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;



import React from 'react';
import BackgroundImage from '../assets/Background/Flower.jpeg'; // Your background image

const AboutUsSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-0 px-0"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* 96% White Content Container */}
      <div className="w-[96%] mx-auto bg-white rounded-xl shadow-xl px-6 sm:px-10 lg:px-16 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gray-300"></div>
          <h2 className="text-4xl font-light tracking-widest uppercase mt-16">ABOUT US</h2>
          <p className="text-sm text-gray-500 mt-2">Akemi Numbers</p>
        </div>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 items-end">
          {/* 38+ Tall Card */}
          <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
            <h3 className="text-5xl lg:text-6xl font-light">38+</h3>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">Years in Business</p>
            </div>
          </div>

          {/* Infinity Card */}
          <div className="bg-[#EBE7DF] p-8 flex flex-col justify-between min-h-[140px]">
            <div className="text-5xl lg:text-6xl font-light mb-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
              >
                <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
              </svg>
            </div>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">Ideas brought to life</p>
            </div>
          </div>

          {/* 900+ Card */}
          <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between min-h-[140px]">
            <h3 className="text-5xl lg:text-6xl font-light mb-auto">900+</h3>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">Launched Products</p>
            </div>
          </div>

          {/* 30+ Tall Card */}
          <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
            <h3 className="text-5xl lg:text-6xl font-light mb-auto">30+</h3>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">Professionals</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16 text-gray-600">
          <div>
            <p className="text-sm leading-relaxed mb-4">
              At Akemi Cosmetics, your vision is the epicenter of our purpose. Manufacturing and Trust are the foundation of our core values.
            </p>
            <a
              href="#"
              className="flex items-center text-sm font-semibold uppercase tracking-widest text-gray-800 hover:text-black transition-colors duration-200"
            >
              More <span className="ml-2">&gt;</span>
            </a>
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              With over 38 years of experience, our premier research facility is designed to produce all varieties of cosmetic products catered to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
