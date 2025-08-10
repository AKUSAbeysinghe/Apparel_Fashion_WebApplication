// import React from 'react';

// const LocationComponent = () => {
//   return (
//     <div className="bg-white py-10 min-h-screen">
//       <div className="container mx-auto px-4">
//         {/* Our Brands Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">OUR BRANDS</h2>
//           <div className="flex flex-wrap items-center justify-center mt-6 space-x-4 md:space-x-8">
//             {/* Brand Logos - Using placeholders with minimal styling */}
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">Brand 1</div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">Brand 2</div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">Brand 3</div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">Brand 4</div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">Brand 5</div>
//           </div>
//         </div>

//         {/* Location Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {/* Card 1: Maharagama */}
//           <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-black text-white rounded-full p-2 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-xl text-black">MAHARAGAMA</h3>
//             </div>
//             <div className="space-y-2 text-gray-800">
//               <p className="flex items-start text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-2 flex-shrink-0">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                 </svg>
//                 <span>126 High Level Rd, Maharagama 10280</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459" />
//                 </svg>
//                 <span>+94 11 2 83 99 11</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>9.30 am - 8.30 pm</span>
//               </p>
//             </div>
//           </div>

//           {/* Card 2: Head Office */}
//           <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-black text-white rounded-full p-2 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-xl text-black">HEAD OFFICE</h3>
//             </div>
//             <div className="space-y-2 text-gray-800">
//               <p className="flex items-start text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-2 flex-shrink-0">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                 </svg>
//                 <span>405, Pepiliyana Rd, Colombo</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459" />
//                 </svg>
//                 <span>0112 809 900</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>8.30 am - 5.30 pm</span>
//               </p>
//             </div>
//           </div>

//           {/* Card 3: Matara */}
//           <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-black text-white rounded-full p-2 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-xl text-black">MATARA</h3>
//             </div>
//             <div className="space-y-2 text-gray-800">
//               <p className="flex items-start text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-2 flex-shrink-0">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                 </svg>
//                 <span>No. 226, Anagarika Dharmapala Mawatha, Matara</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459" />
//                 </svg>
//                 <span>+94 41 2236874</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>9.30 am - 8.30 pm</span>
//               </p>
//             </div>
//           </div>
          
//           {/* Card 4: Bandarawela */}
//           <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-black text-white rounded-full p-2 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-xl text-black">BANDARAWELA</h3>
//             </div>
//             <div className="space-y-2 text-gray-800">
//               <p className="flex items-start text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-2 flex-shrink-0">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                 </svg>
//                 <span>136, Dharmawijaya Mawatha, Bandarawela</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459" />
//                 </svg>
//                 <span>+94 572 223 211</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>9.00 am - 7.30 pm</span>
//               </p>
//             </div>
//           </div>

//           {/* Card 5: Katubedda */}
//           <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="bg-black text-white rounded-full p-2 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-xl text-black">KATUBEDDA</h3>
//             </div>
//             <div className="space-y-2 text-gray-800">
//               <p className="flex items-start text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-2 flex-shrink-0">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                 </svg>
//                 <span>No. 241 1/1 Galle Road Katubedda</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459" />
//                 </svg>
//                 <span>+94 112 623 342</span>
//               </p>
//               <p className="flex items-center text-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>9.30 am - 8.30 pm</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationComponent;




// import React from "react";

// const LocationComponent = () => {
//   return (
//     <div className="bg-white py-10 min-h-screen">
//       <div className="container mx-auto px-4">
//         {/* Our Brands Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">
//             OUR BRANDS
//           </h2>
//           <div className="flex flex-wrap items-center justify-center mt-6 space-x-4 md:space-x-8">
//             {/* Brand Logos - Using placeholders with minimal styling */}
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 1
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 2
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 3
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 4
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 5
//             </div>
//           </div>
//         </div>

//         {/* Location Cards Section */}
//         <div className="flex justify-center px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
//             {/* Card 1: Maharagama */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MAHARAGAMA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>126 High Level Rd, Maharagama 10280</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>+94 11 2 83 99 11</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.30 am - 8.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 2: Head Office */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">HEAD OFFICE</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>405, Pepiliyana Rd, Colombo</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>0112 809 900</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.30 am - 5.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 3: Matara */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MATARA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>378, Matara Rd, Matara 81000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>041 222 2215</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* New Card 4 */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">KANDY</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>10 Hill St, Kandy 20000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>081 223 4433</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* New Card 5 */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">NEGOMBO</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>12 Beach Rd, Negombo 11500</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>031 223 7755</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationComponent;




// import Flower from "../assets/Background/Flower.jpeg";
// import React from 'react';

// const LocationComponent = () => {
//   // Your original LocationComponent, with top-level styling adjusted
//   // to fit the new framed layout.
//   return (
//     <div className="py-10">
//       <div className="container mx-auto px-4">
//         {/* Our Brands Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">
//             OUR BRANDS
//           </h2>
//           <div className="flex flex-wrap items-center justify-center mt-6 space-x-4 md:space-x-8">
//             {/* Brand Logos - Using placeholders with minimal styling */}
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 1
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 2
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 3
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 4
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 5
//             </div>
//           </div>
//         </div>

//         {/* Location Cards Section */}
//         <div className="flex justify-center px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
//             {/* Card 1: Maharagama */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MAHARAGAMA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>126 High Level Rd, Maharagama 10280</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>+94 11 2 83 99 11</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.30 am - 8.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 2: Head Office */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">HEAD OFFICE</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>405, Pepiliyana Rd, Colombo</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>0112 809 900</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.30 am - 5.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 3: Matara */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MATARA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>378, Matara Rd, Matara 81000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>041 222 2215</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* New Card 4 */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">KANDY</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>10 Hill St, Kandy 20000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>081 223 4433</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* New Card 5 */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">NEGOMBO</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>12 Beach Rd, Negombo 11500</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>031 223 7755</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // This is the new parent component that creates the framed layout.
// const App = () => {
//   const backgroundImageUrl = Flower;

//   return (
//     // <div
//     //   className="relative w-full bg-cover bg-center "
//     //   style={{
//     //     backgroundImage: `url(${backgroundImageUrl})`,
//     //     minHeight: '100vh', // Ensure it covers the whole screen height
//     //   }}
//     // >


//     <div
//   // className="relative w-full bg-cover bg-center"
//   // style={{
//   //   backgroundImage: `url(${backgroundImageUrl})`,
//   //   height: '100vh',        // This makes the background fixed to browser height, no extra space below
//   //   overflow: 'hidden',     // Prevents any accidental overflow scroll
//   //   margin: 0,              // Ensures no margin if body/html have extra space
//   //   padding: 0              // Ensures no padding if body/html have extra space


  
 
  
//   // className="relative w-full bg-cover bg-center flex items-center justify-center"
//   // style={{
//   //   backgroundImage: `url(${backgroundImageUrl})`,
//   //   minHeight: '100vh',           // full height
//   //   paddingTop: '0',           // top gap
//   //   paddingBottom: '0',        // bottom gap
//   //   backgroundSize: 'cover',
//   //   backgroundPosition: 'center',
//   //   overflow: 'hidden',
//   // }}

// // className="relative w-full bg-cover bg-center flex items-center justify-center"
// // style={{
// //   backgroundImage: `url(${backgroundImageUrl})`,
// //   minHeight: '100vh',
// //   paddingTop: '0',
// //   paddingBottom: '0',
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// //   overflow: 'hidden',
// // }}

// // style={{
// //   backgroundImage: `url(${backgroundImageUrl})`,
// //   minHeight: '100vh',
// //   paddingTop: '0',
// //   paddingBottom: '0',
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// //   overflow: 'hidden',
// //   lineHeight: 0,
// //   display: 'block',
// // }}




//   style={{
//     backgroundImage: `url(${backgroundImageUrl})`,
//     height: '100vh',
//     padding: 0,
//     margin: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     overflow: 'hidden',
//     lineHeight: 0,
//     display: 'block',
//   }}




// // className="relative w-full bg-cover bg-center flex items-center justify-center"
// //   style={{
// //     backgroundImage: `url(${backgroundImageUrl})`,
// //     height: '100vh',        // full viewport height fixed
// //     margin: 0,
// //     padding: 0,
// //     overflow: 'hidden',
// //     lineHeight: 0,
// //     display: 'flex',        // you can keep flex if centering content needed
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   }}

//   // }}
// >

//       {/* This is the central container with a white background that "frames" the content. */}
//       <div className="relative z-10 bg-white shadow-2xl w-[96%] max-w-[1700px] mx-auto rounded-lg">
//         <LocationComponent />
//       </div>
//     </div>
//   );
// };

// export default App;


//worked

// import Flower from "../assets/Background/Flower.jpeg";
// import React from 'react';

// const LocationComponent = () => {
//   return (
//     <div> {/* Removed pt-10 to eliminate top padding inside the white frame */}
//       <div className="container mx-auto px-4">
//         {/* Our Brands Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">
//             OUR BRANDS
//           </h2>
//           <div className="flex flex-wrap items-center justify-center mt-6 space-x-4 md:space-x-8">
//             {/* Brand Logos - Using placeholders with minimal styling */}
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 1
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 2
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 3
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 4
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1 text-xs text-gray-800">
//               Brand 5
//             </div>
//           </div>
//         </div>

//         {/* Location Cards Section */}
//         <div className="flex justify-center px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
//             {/* Card 1: Maharagama */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MAHARAGAMA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>126 High Level Rd, Maharagama 10280</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>+94 11 2 83 99 11</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.30 am - 8.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 2: Head Office */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">HEAD OFFICE</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>405, Pepiliyana Rd, Colombo</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>0112 809 900</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.30 am - 5.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 3: Matara */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MATARA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>378, Matara Rd, Matara 81000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>041 222 2215</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* New Card 4 */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">KANDY</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>10 Hill St, Kandy 20000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>081 223 4433</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* New Card 5 */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">NEGOMBO</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>12 Beach Rd, Negombo 11500</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>031 223 7755</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const backgroundImageUrl = Flower;

//   return (
//     <div
//       className="relative w-full bg-cover bg-center overflow-auto h-screen" // Changed minHeight to h-screen
//       style={{
//         backgroundImage: `url(${backgroundImageUrl})`,
//       }}
//     >
//       {/* This is the central container with a white background that "frames" the content. */}
//       <div className="relative z-10 bg-white shadow-2xl w-[96%] max-w-[1700px] mx-auto rounded-lg h-full"> {/* Added h-full */}
//         <LocationComponent />
//       </div>
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import Flower from "../assets/Background/Flower.jpeg";

// // Import your brand logo images here
// import Brand1Logo from "../assets/BrandLogos/vg.jpeg";
// import Brand2Logo from "../assets/BrandLogos/vg.jpeg";
// import Brand3Logo from "../assets/BrandLogos/vg.jpeg";
// import Brand4Logo from "../assets/BrandLogos/vg.jpeg";
// import Brand5Logo from "../assets/BrandLogos/vg.jpeg";

// const LocationComponent = () => {
//   return (
//     <div>
//       <div className="container mx-auto px-4">
//         {/* Our Brands Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">
//             OUR BRANDS
//           </h2>
//           <div className="flex flex-wrap items-center justify-center mt-6 space-x-4 md:space-x-8">
//             {/* Brand Logos */}
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1">
//               <img src={Brand1Logo} alt="Brand 1 Logo" className="object-contain h-full w-full" />
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1">
//               <img src={Brand2Logo} alt="Brand 2 Logo" className="object-contain h-full w-full" />
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1">
//               <img src={Brand3Logo} alt="Brand 3 Logo" className="object-contain h-full w-full" />
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1">
//               <img src={Brand4Logo} alt="Brand 4 Logo" className="object-contain h-full w-full" />
//             </div>
//             <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black p-1">
//               <img src={Brand5Logo} alt="Brand 5 Logo" className="object-contain h-full w-full" />
//             </div>
//           </div>
//         </div>

//         {/* Location Cards Section */}
//         <div className="flex justify-center px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
//             {/* Card 1: Maharagama */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MAHARAGAMA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>126 High Level Rd, Maharagama 10280</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>+94 11 2 83 99 11</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.30 am - 8.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 2: Head Office */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">HEAD OFFICE</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>405, Pepiliyana Rd, Colombo</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>0112 809 900</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.30 am - 5.30 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 3: Matara */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">MATARA</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>378, Matara Rd, Matara 81000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>041 222 2215</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 4: Kandy */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">KANDY</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>10 Hill St, Kandy 20000</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>081 223 4433</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* Card 5: Negombo */}
//             <div className="bg-white border-2 border-black rounded-lg p-6 shadow-md transition-shadow hover:shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-black text-white rounded-full p-2 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-xl text-black">NEGOMBO</h3>
//               </div>
//               <div className="space-y-2 text-gray-800">
//                 <p className="flex items-start text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <span>12 Beach Rd, Negombo 11500</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//                     />
//                   </svg>
//                   <span>031 223 7755</span>
//                 </p>
//                 <p className="flex items-center text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 mr-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>9.00 am - 6.00 pm</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationComponent;





// import React from 'react';
// import Flower from "../assets/Background/Flower.jpeg";

// const LocationCard = ({ title, address, phone, hours }) => {
//   return (
//     <div className="bg-white border-2 border-black rounded-xl p-6 shadow-md transition-shadow hover:shadow-xl">
//       <div className="flex items-center mb-4">
//         {/* Location Icon */}
//         <div className="bg-black text-white rounded-full p-2 mr-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//             />
//           </svg>
//         </div>
//         <h3 className="font-bold text-xl text-black">{title}</h3>
//       </div>
//       <div className="space-y-2 text-gray-800">
//         {/* Address */}
//         <p className="flex items-start text-sm">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//             />
//           </svg>
//           <span>{address}</span>
//         </p>
//         {/* Phone Number */}
//         <p className="flex items-center text-sm">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4 mr-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459"
//             />
//           </svg>
//           <span>{phone}</span>
//         </p>
//         {/* Hours */}
//         <p className="flex items-center text-sm">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4 mr-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <span>{hours}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// const LocationComponent = () => {
//   // Data for location cards
//   const locations = [
//     {
//       title: "MAHARAGAMA",
//       address: "126 High Level Rd, Maharagama 10280",
//       phone: "+94 11 2 83 99 11",
//       hours: "9.30 am - 8.30 pm",
//     },
//     {
//       title: "HEAD OFFICE",
//       address: "405, Pepiliyana Rd, Colombo",
//       phone: "0112 809 900",
//       hours: "8.30 am - 5.30 pm",
//     },
//     {
//       title: "MATARA",
//       address: "378, Matara Rd, Matara 81000",
//       phone: "041 222 2215",
//       hours: "9.00 am - 6.00 pm",
//     },
//     {
//       title: "KANDY",
//       address: "10 Hill St, Kandy 20000",
//       phone: "081 223 4433",
//       hours: "8.00 am - 6.00 pm",
//     },
//     {
//       title: "NEGOMBO",
//       address: "12 Beach Rd, Negombo 11500",
//       phone: "031 223 7755",
//       hours: "9.00 am - 6.00 pm",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8 md:py-12">
//       {/* Our Brands Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">
//           OUR BRANDS
//         </h2>
//         <div className="flex flex-wrap items-center justify-center mt-6 gap-4 sm:gap-6 md:gap-8">
//           {/* Brand Logos - Updated to be more responsive and interactive */}
//           {Array.from({ length: 5 }).map((_, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 border border-black rounded-lg p-1 text-xs text-gray-800 transform transition-transform hover:scale-110 cursor-pointer"
//             >
//               Brand {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Location Cards Section */}
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
//           {locations.map((location, index) => (
//             <LocationCard
//               key={index}
//               title={location.title}
//               address={location.address}
//               phone={location.phone}
//               hours={location.hours}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const backgroundImageUrl = Flower; // The user provided this asset, we'll assume it's available.

//   return (
//     <div
//       className="relative w-full bg-cover bg-center overflow-auto h-screen"
//       style={{
//         backgroundImage: `url(${backgroundImageUrl})`,
//         fontFamily: "Inter, sans-serif" // Added Inter font for consistency
//       }}
//     >
//       <div className="relative z-10 bg-white shadow-2xl w-[96%] max-w-[1700px] mx-auto rounded-lg h-full">
//         <LocationComponent />
//       </div>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import Flower from "../assets/Background/Flower.jpeg";

// const LocationCard = ({ title, address, phone, hours }) => {
//   return (
//     <div className="bg-white border-2 border-black rounded-xl p-6 shadow-md transition-shadow hover:shadow-xl">
//       <div className="flex items-center mb-4">
//         <div className="bg-black text-white rounded-full p-2 mr-3 flex-shrink-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
//             />
//           </svg>
//         </div>
//         <h3 className="font-bold text-lg sm:text-xl text-black">{title}</h3>
//       </div>
//       <div className="space-y-2 text-gray-800 text-sm sm:text-base">
//         <p className="flex items-start">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//           </svg>
//           <span>{address}</span>
//         </p>
//         <p className="flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4 mr-2"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459" />
//           </svg>
//           <span>{phone}</span>
//         </p>
//         <p className="flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4 mr-2"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           <span>{hours}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// const LocationComponent = () => {
//   const locations = [
//     {
//       title: "MAHARAGAMA",
//       address: "126 High Level Rd, Maharagama 10280",
//       phone: "+94 11 2 83 99 11",
//       hours: "9.30 am - 8.30 pm",
//     },
//     {
//       title: "HEAD OFFICE",
//       address: "405, Pepiliyana Rd, Colombo",
//       phone: "0112 809 900",
//       hours: "8.30 am - 5.30 pm",
//     },
//     {
//       title: "MATARA",
//       address: "378, Matara Rd, Matara 81000",
//       phone: "041 222 2215",
//       hours: "9.00 am - 6.00 pm",
//     },
//     {
//       title: "KANDY",
//       address: "10 Hill St, Kandy 20000",
//       phone: "081 223 4433",
//       hours: "8.00 am - 6.00 pm",
//     },
//     {
//       title: "NEGOMBO",
//       address: "12 Beach Rd, Negombo 11500",
//       phone: "031 223 7755",
//       hours: "9.00 am - 6.00 pm",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8 md:py-12">
//       {/* Our Brands Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">
//           OUR BRANDS
//         </h2>
//         <div className="flex flex-wrap items-center justify-center mt-6 gap-4 sm:gap-6 md:gap-8">
//           {/* Brand Logos */}
//           {Array.from({ length: 5 }).map((_, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 border border-black rounded-lg p-1 text-xs sm:text-sm md:text-base text-gray-800 transform transition-transform hover:scale-110 cursor-pointer"
//             >
//               Brand {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Location Cards Section */}
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
//           {locations.map((location, index) => (
//             <LocationCard
//               key={index}
//               title={location.title}
//               address={location.address}
//               phone={location.phone}
//               hours={location.hours}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const backgroundImageUrl = Flower;

//   return (
//     <div
//       className="relative w-full bg-cover bg-center overflow-auto min-h-screen"
//       style={{
//         backgroundImage: `url(${backgroundImageUrl})`,
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       <div className="relative z-10 bg-white shadow-2xl w-[96%] max-w-[1700px] mx-auto rounded-lg min-h-screen max-h-full py-6 md:py-12 overflow-auto">
//         <LocationComponent />
//       </div>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import Flower from "../assets/Background/Flower.jpeg";

// Import all 5 brand logo images (replace these paths with your actual logo image paths)
import Brand1Logo from "../assets/Brands/Louis.jpeg";
import Brand2Logo from "../assets/Brands/Channel.jpeg";
import Brand3Logo from "../assets/Brands/Dior.jpeg";
// import Brand4Logo from "../assets/Brands/Vg.jpeg";
import Brand5Logo from "../assets/Brands/Logo3.jpg";
import Brand6Logo from "../assets/Brands/Logo4.jpg";
import Brand7Logo from "../assets/Brands/Logo5.jpg";


const LocationCard = ({ title, address, phone, hours }) => {
  return (
    <div className="bg-white border-2 border-black rounded-xl p-6 shadow-md transition-shadow hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="bg-black text-white rounded-full p-2 mr-3 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.595 0L21.75 12M4.5 9.75v10.125c0 .857.917 1.398 1.662.93l1.533-1.15c.902-.676 1.965-.676 2.867 0l1.533 1.15c.745.468 1.662-.073 1.662-.93V9.75m-8.146 3.36l1.533 1.15c.902.676 1.965.676 2.867 0l1.533-1.15M6 12.75l15.75-15.75"
            />
          </svg>
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-black">{title}</h3>
      </div>
      <div className="space-y-2 text-gray-800 text-sm sm:text-base">
        <p className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span>{address}</span>
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm7.5-2.25a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7.257A11.03 11.03 0 0115.47 9.743M12 8c-5.27 0-9.71 4.142-9.71 9.363m9.71-9.363A11.03 11.03 0 008.53 9.743m3.47 2.76a7.65 7.65 0 01-.904 1.972m2.682.172a7.65 7.65 0 011.972-.904M15 11.757a14.64 14.64 0 01-3.46-3.47m0 6.92a14.64 14.64 0 003.46-3.459" />
          </svg>
          <span>{phone}</span>
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{hours}</span>
        </p>
      </div>
    </div>
  );
};

const LocationComponent = () => {
  const locations = [
    {
      title: "MAHARAGAMA",
      address: "126 High Level Rd, Maharagama 10280",
      phone: "+94 11 2 83 99 11",
      hours: "9.30 am - 8.30 pm",
    },
    {
      title: "HEAD OFFICE",
      address: "405, Pepiliyana Rd, Colombo",
      phone: "0112 809 900",
      hours: "8.30 am - 5.30 pm",
    },
    {
      title: "MATARA",
      address: "378, Matara Rd, Matara 81000",
      phone: "041 222 2215",
      hours: "9.00 am - 6.00 pm",
    },
    {
      title: "KANDY",
      address: "10 Hill St, Kandy 20000",
      phone: "081 223 4433",
      hours: "8.00 am - 6.00 pm",
    },
    {
      title: "NEGOMBO",
      address: "12 Beach Rd, Negombo 11500",
      phone: "031 223 7755",
      hours: "9.00 am - 6.00 pm",
    },
  ];

  // Array of brand logos - you can add more if needed
  const brandLogos = [
    Brand1Logo,
    Brand2Logo,
    Brand3Logo,
    // Brand4Logo,
    Brand5Logo, 
    Brand6Logo,
    Brand7Logo,

  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Our Brands Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black border-b-2 border-black pb-2 inline-block">
          OUR BRANDS
        </h2>
        <div className="flex flex-wrap items-center justify-center mt-6 gap-4 sm:gap-6 md:gap-8">
          {/* Render brand logo images */}
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 border border-black rounded-lg p-1 cursor-pointer hover:scale-110 transform transition-transform"
            >
              <img src={logo} alt={`Brand ${index + 1}`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Location Cards Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              title={location.title}
              address={location.address}
              phone={location.phone}
              hours={location.hours}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const backgroundImageUrl = Flower;

  return (
    <div
      className="relative w-full bg-cover bg-center overflow-auto min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="relative z-10 bg-white shadow-2xl w-[96%] max-w-[1700px] mx-auto rounded-lg min-h-screen max-h-full py-6 md:py-12 overflow-auto">
        <LocationComponent />
      </div>
    </div>
  );
};

export default App;
