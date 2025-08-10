// import React from 'react';
// import Background from "../assets/Background/WomeninBlue.jpeg";
// import Dress from "../assets/Background/Dress.jpeg";

// const App = () => {
//   return (
//     <div className="relative h-screen w-screen overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${Background})`,
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 text-white">
//         {/* Top Section */}
//         {/* <div className="w-full flex justify-between items-start">
//           <p className="text-sm opacity-80">E-commerce Website</p>
//           <p className="text-sm opacity-80">Design Carousel</p>
//         </div> */}

//         {/* Middle Section - Main Text */}
//         <div className="flex flex-col items-center text-center space-y-4">
//           {/* Small icon/logo at the top of the main text */}
//           <div className="mb-4">
//             <svg
//               className="w-10 h-10 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M12 4.5l-7.5 7.5 7.5 7.5 7.5-7.5-7.5-7.5z"
//               ></path>
//             </svg>
//           </div>
//           <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light italic">It is well.</p>
//           <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight">
//             Wear well. give well.
//             <br />
//             feel well.
//           </h1>
//         </div>

//         {/* Bottom Section */}
//         <div className="w-full flex justify-between items-end">
//           {/* <div className="text-sm opacity-80">
//             <p>Artroom Sumana</p>
//             <p>UX/UI Designer from New York</p>
//           </div> */}
//           <div className="text-sm opacity-80 flex flex-col items-end">
//             {/* <p>UI/UX Design</p> */}
//             <div className="mt-4 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg border border-gray-700">
//               <img
//                 src={Dress}
//                 alt="Product Preview"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;






// import React from 'react';
// import Background from "../assets/Background/WomeninBlue.jpeg";

// const App = () => {
//   return (
//     <div className="w-full h-screen bg-[#f5f5f5] flex justify-center items-center">
//       {/* Outer container with 100% width */}
//       <div className="w-full h-full flex">
//         {/* Left 2% background filler */}
//         <div className="w-[2%] h-full bg-[#f5f5f5]"></div>

//         {/* Main image area (96%) */}
//         <div className="w-[96%] h-full">
//           <img
//             src={Background}
//             alt="Fashion Full"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right 2% background filler */}
//         <div className="w-[2%] h-full bg-[#f5f5f5]"></div>
//       </div>
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import Background from "../assets/Background/WomeninBlue.jpeg";

// const App = () => {
//   return (
//     <div className="w-full h-screen bg-[#f5f5f5] flex justify-center items-center">
//       {/* Outer container with 100% width */}
//       <div className="w-full h-full flex relative">
//         {/* Left 2% background filler */}
//         <div className="w-[2%] h-full bg-[#f5f5f5]"></div>

//         {/* Main image area (96%) with text overlay */}
//         <div className="w-[96%] h-full relative">
//           <img
//             src={Background}
//             alt="Fashion Full"
//             className="w-full h-full object-cover"
//           />
//           {/* Text overlay */}
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
//             <h1 className="text-5xl font-bold mb-4">Welcome to Fashion World</h1>
//             <p className="text-xl max-w-lg text-center">
//               Discover the latest trends and styles that define your unique look.
//             </p>
//           </div>
//         </div>

//         {/* Right 2% background filler */}
//         <div className="w-[2%] h-full bg-[#f5f5f5]"></div>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import Background from "../assets/Background/B.jpeg";
// import { ChevronDown } from 'lucide-react';

// const App = () => {
//   return (
//     <div className="w-full h-screen bg-[#f5f5f5] flex justify-center items-center">
//       <div className="w-full h-full flex relative">
//         {/* Left filler */}
//         <div className="w-[2%] h-full bg-[#f5f5f5]"></div>

//         {/* Main Image Section */}
//         <div className="w-[96%] h-full relative">
//           <img
//             src={Background}
//             alt="Fashion Full"
//             className="w-full h-full object-cover"
//           />
//           {/* Text and Arrow Icon (no overlay, no button) */}
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
//             <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Fashion World</h1>
//             <p className="text-xl max-w-lg text-center drop-shadow-md">
//               Discover the latest trends and styles that define your unique look.
//             </p>

//             {/* Only Animated Down Arrow */}
//             <div className="mt-8 animate-bounce text-white">
//               <ChevronDown size={32} />
//             </div>
//           </div>
//         </div>

//         {/* Right filler */}
//         <div className="w-[2%] h-full bg-[#f5f5f5]"></div>
//       </div>
//     </div>
//   );
// };

// export default App;



import React from 'react';
// import Background from "../assets/Background/Lovi.jpg";
import Background from "../assets/Background/WOMENL.webp";
import SideBackground from "../assets/Background/Flower.jpeg"; // Replace with your side image

const App = () => {
  return (
    <div className="w-full h-screen bg-[#f5f5f5] flex justify-center items-center">
      <div className="w-full h-full flex relative">
        {/* Left Background Section */}
        <div
          className="w-[2%] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SideBackground})` }}
        ></div>

        {/* Main Image Section */}
        <div className="w-[96%] h-full relative">
          <img
            src={Background}
            alt="Fashion Full"
            className="w-full h-full object-cover"
          />

          {/* Text and Animated Arrow */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
               Wear well. give well. Feel Well.
            </h1>
            <p className="text-xl max-w-lg text-center drop-shadow-md">
              Discover the latest trends and styles that define your unique look.
            </p>

            <div className="mt-8 animate-bounce text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Background Section */}
        <div
          className="w-[2%] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SideBackground})` }}
        ></div>
      </div>
    </div>
  );
};

export default App;





