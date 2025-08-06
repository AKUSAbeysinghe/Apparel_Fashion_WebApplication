// import React from 'react';
// import { ArrowRight, ShoppingBag, Search } from 'lucide-react';
// import Flower from "../assets/Background/Flower.jpeg";
// import MainModel from "../assets/PageOnes/WomenMain.jpeg";
// import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
// import Accessories from "../assets/PageOnes/Accessories.jpeg";
// import ShirtMen from "../assets/PageOnes/Dress (2).jpeg";
// import Navbar from './Navbar';

// const Hero = () => {
//   return (
//     <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col items-center w-[96vw] mx-auto my-12">
//       {/* Hero Section Content */}
//       <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0">
//         {/* Left Section: Text Content */}
//         <div className="flex flex-col w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
//           <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-6 font-serif">
//             Women's New
//             <br />
//             Arrivals.
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
//             Discover fresh pieces perfect for every occasion with
//             <br />
//             easy purchases.
//           </p>
//           <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 transition duration-300 self-start">
//             Shop Collection
//           </button>
//         </div>
//         {/* Right Section: Images and Icons */}
//         <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[500px] lg:h-auto">
//           <img
//             src={MainModel}
//             alt="Woman in black top"
//             className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
//             style={{ zIndex: 2 }}
//           />
//           <img
//             src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+1"
//             alt="Woman in white dress"
//             className="absolute top-12 right-0 md:right-12 lg:right-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
//             style={{ zIndex: 1 }}
//           />
//           <img
//             src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+2"
//             alt="Woman in white t-shirt"
//             className="absolute bottom-12 left-0 md:left-12 lg:left-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
//             style={{ zIndex: 1 }}
//           />
//           <div className="absolute top-0 right-0 flex flex-col space-y-4 text-gray-600">
//             <ShoppingBag className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
//             <Search className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//       {/* Product Display Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-gray-800">
//             Wear well. give well.
//             <br />
//             feel well.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//             The best choice
//             <br />
//             for everyone
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//             <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//               <img
//                 src={PurseLady}
//                 alt="Oversized hooded cardigan"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <p className="font-semibold text-lg text-gray-800">Oversized hooded cardigan</p>
//             <p className="text-gray-600">$395.00</p>
//           </div>
//           <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//             <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//               <img
//                 src={Accessories}
//                 alt="Cupro long sleeve button down dress"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <p className="font-semibold text-lg text-gray-800">Cupro long sleeve button down dress</p>
//             <p className="text-gray-600">$340.00</p>
//           </div>
//           <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//             <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//               <img
//                 src= {ShirtMen}
//                 alt="Crewneck pull-on sweater"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <p className="font-semibold text-lg text-gray-800">Crewneck pull-on sweater</p>
//             <p className="text-gray-600">$175.00</p>
//           </div>
//         </div>
//       </div>
//       {/* Time Only Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
//             time only.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//             Best on sale
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
//           <div className="flex flex-col items-center">
//             <img
//               src="https://placehold.co/300x400/E0E0E0/333333?text=Model+1"
//               alt="Model walking"
//               className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//             />
//           </div>
//           <div className="relative flex flex-col items-center">
//             <img
//               src="https://placehold.co/300x400/D0D0D0/333333?text=Model+2"
//               alt="Model sitting"
//               className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//             />
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//               <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="https://placehold.co/300x400/E0E0E0/333333?text=Model+3"
//               alt="Model standing"
//               className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//             />
//           </div>
//         </div>
//       </div>
//       {/* Our oath, You beautiful. Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 flex flex-col lg:flex-row items-center justify-between">
//         <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//           <img
//             src="https://placehold.co/600x400/E0E0E0/333333?text=Woman+Drinking"
//             alt="Woman drinking water"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//           <p className="text-sm text-gray-600 uppercase mb-2">About Us</p>
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
//             Our oath,
//             <br />
//             You beautiful.
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
//             A small company offering simple, timeless pieces you can enjoy every day of the year.
//             Our collection is conceptually designed and ethically made in Los Angeles.
//           </p>
//           <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
//             <span>Learn More</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//       {/* Footer Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 text-center text-gray-600">
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="#" className="hover:text-gray-900">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path></svg>
//           </a>
//           <a href="#" className="hover:text-gray-900">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path></svg>
//           </a>
//           <a href="#" className="hover:text-gray-900">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path></svg>
//           </a>
//         </div>
//         <p className="text-xl font-semibold tracking-wide">
//           #itiswellla
//         </p>
//       </div>
//     </div>
//   );
// };

// // App Component
// const App = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
//       {/* Background Image/Pattern */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-70"
//         style={{
//           backgroundImage: `url(${Flower})`,
//           backgroundAttachment: 'fixed',
//         }}
//       ></div>
//       {/* <Navbar /> */}
//       <Hero />
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import { ArrowRight, ShoppingBag, Search } from 'lucide-react';
// import Flower from "../assets/Background/Flower.jpeg";
// import MainModel from "../assets/PageOnes/WomenMain.jpeg";
// import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
// import Accessories from "../assets/PageOnes/Accessories.jpeg";
// import ShirtMen from "../assets/PageOnes/Dress (2).jpeg";
// import Model1 from "../assets/Background/Model1.jpeg";
// import Model2 from "../assets/Background/Model2.jpeg";
// import Model3 from "../assets/Background/Model3.jpeg";
// import Model5 from "../assets/Background/Model5.jpeg";

// const Hero = () => {
//   return (
//     <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col items-center w-[96vw] mx-auto my-12">
//       {/* Hero Section Content */}
//       <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0">
//         {/* Left Section: Text Content - REMOVED */}

//         {/* Right Section: Images and Icons */}
//         <div className="relative w-full flex justify-center items-center h-[500px] lg:h-auto">
//           <img
//             src={MainModel}
//             alt="Woman in black top"
//             className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
//             style={{ zIndex: 2 }}
//           />
//           {/* <img
//             src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+1"
//             alt="Woman in white dress"
//             className="absolute top-12 right-0 md:right-12 lg:right-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
//             style={{ zIndex: 1 }}
//           />
//           <img
//             src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+2"
//             alt="Woman in white t-shirt"
//             className="absolute bottom-12 left-0 md:left-12 lg:left-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
//             style={{ zIndex: 1 }}
//           /> */}
//           <div className="absolute top-0 right-0 flex flex-col space-y-4 text-gray-600">
//             <ShoppingBag className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
//             <Search className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Product Display Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-gray-800">
//             Wear well. give well.
//             <br />
//             feel well.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//             The best choice
//             <br />
//             for everyone
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//             <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//               <img
//                 src={PurseLady}
//                 alt="Oversized hooded cardigan"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <p className="font-semibold text-lg text-gray-800">Oversized hooded cardigan</p>
//             <p className="text-gray-600">$395.00</p>
//           </div>
//           <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//             <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//               <img
//                 src={Accessories}
//                 alt="Cupro long sleeve button down dress"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <p className="font-semibold text-lg text-gray-800">Cupro long sleeve button down dress</p>
//             <p className="text-gray-600">$340.00</p>
//           </div>
//           <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//             <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//               <img
//                 src={ShirtMen}
//                 alt="Crewneck pull-on sweater"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <p className="font-semibold text-lg text-gray-800">Crewneck pull-on sweater</p>
//             <p className="text-gray-600">$175.00</p>
//           </div>
//         </div>
//       </div>

//       {/* Time Only Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
//             time only.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//             Best on sale
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
//           <div className="flex flex-col items-center">
//             <img
//               src= {Model1}
//               alt="Model walking"
//               className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//             />
//           </div>
//           <div className="relative flex flex-col items-center">
//             <img
//               src={Model2}
//               alt="Model sitting"
//               className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//             />
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//               <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src= {Model3}
//               alt="Model standing"
//               className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Our Oath Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 flex flex-col lg:flex-row items-center justify-between">
//         <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//           <img
//             src={Model5}
//             alt="Woman drinking water"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//           <p className="text-sm text-gray-600 uppercase mb-2">About Us</p>
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
//             Our oath,
//             <br />
//             You beautiful.
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
//             A small company offering simple, timeless pieces you can enjoy every day of the year.
//             Our collection is conceptually designed and ethically made in Los Angeles.
//           </p>
//           <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
//             <span>Learn More</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 text-center text-gray-600">
//         <div className="flex justify-center space-x-6 mb-4">
//           {[...Array(3)].map((_, i) => (
//             <a href="#" className="hover:text-gray-900" key={i}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path>
//               </svg>
//             </a>
//           ))}
//         </div>
//         <p className="text-xl font-semibold tracking-wide">
//           #itiswellla
//         </p>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-70"
//         style={{
//           backgroundImage: `url(${Flower})`,
//           backgroundAttachment: 'fixed',
//         }}
//       ></div>
//       <Hero />
//     </div>
//   );
// };

// export default App;





// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import Flower from "../assets/Background/Flower.jpeg";
// import MainModel from "../assets/PageOnes/WomenMain.jpeg";
// import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
// import Accessories from "../assets/PageOnes/Accessories.jpeg";
// import ShirtMen from "../assets/PageOnes/Dress (2).jpeg";
// import Model1 from "../assets/Background/Model1.jpeg";
// import Model2 from "../assets/Background/Model2.jpeg";
// import Model3 from "../assets/Background/Model3.jpeg";
// import Model5 from "../assets/Background/Model5.jpeg";

// const Hero = () => {
//   return (
//     <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col items-center w-[96vw] mx-auto mt-0 mb-12">
//       {/* Hero Section */}
//       <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="relative w-full flex justify-center items-center h-[500px] lg:h-auto">
//           <img
//             src={MainModel}
//             alt="Woman in black top"
//             className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
//             style={{ zIndex: 2 }}
//           />
//         </div>
//       </div>

//       {/* Product Display Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-6">
//           <h3 className="uppercase text-sm tracking-wider text-gray-500 mb-2">Choose by your choice</h3>
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-gray-800">
//             Wear well. give well.
//             <br />
//             feel well.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//             The best choice
//             <br />
//             for everyone
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[{ img: PurseLady, name: "Oversized hooded cardigan", price: "$395.00" },
//             { img: Accessories, name: "Cupro long sleeve button down dress", price: "$340.00" },
//             { img: ShirtMen, name: "Crewneck pull-on sweater", price: "$175.00" }
//           ].map((item, i) => (
//             <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//               <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//                 <img src={item.img} alt={item.name} className="w-full h-auto object-cover" />
//               </div>
//               <p className="font-semibold text-lg text-gray-800">{item.name}</p>
//               <p className="text-gray-600">{item.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Time Only Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
//             time only.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//             Best on sale
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
//           {[Model1, Model2, Model3].map((model, idx) => (
//             <div key={idx} className="flex flex-col items-center relative">
//               <img
//                 src={model}
//                 alt={`Model ${idx + 1}`}
//                 className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//               />
//               {idx === 1 && (
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//                   <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Our Oath Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 flex flex-col lg:flex-row items-center justify-between">
//         <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//           <img
//             src={Model5}
//             alt="Woman drinking water"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//           <p className="text-sm text-gray-600 uppercase mb-2">About Us</p>
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
//             Our oath,
//             <br />
//             You beautiful.
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
//             A small company offering simple, timeless pieces you can enjoy every day of the year.
//             Our collection is conceptually designed and ethically made in Los Angeles.
//           </p>
//           <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
//             <span>Learn More</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 text-center text-gray-600">
//         <div className="flex justify-center space-x-6 mb-4">
//           {[...Array(3)].map((_, i) => (
//             <a href="#" className="hover:text-gray-900" key={i}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path>
//               </svg>
//             </a>
//           ))}
//         </div>
//         <p className="text-xl font-semibold tracking-wide">
//           #itiswellla
//         </p>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-70"
//         style={{
//           backgroundImage: `url(${Flower})`,
//           backgroundAttachment: 'fixed',
//         }}
//       ></div>
//       <Hero />
//     </div>
//   );
// };

// export default App;




// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Flower from "../assets/Background/Flower.jpeg";
// import MainModel from "../assets/PageOnes/WomenMain.jpeg";
// import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
// import Accessories from "../assets/PageOnes/Accessories.jpeg";
// import ShirtMen from "../assets/PageOnes/Dress (2).jpeg";
// import Model1 from "../assets/Background/Model1.jpeg";
// import Model2 from "../assets/Background/Model2.jpeg";
// import Model3 from "../assets/Background/Model3.jpeg";
// import Model5 from "../assets/Background/Model5.jpeg";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col items-center w-[96vw] mx-auto mt-0 mb-12">
//       {/* Hero Section */}
//       <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="relative w-full flex justify-center items-center h-[500px] lg:h-auto">
//           <img
//             src={MainModel}
//             alt="Woman in black top"
//             className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
//             style={{ zIndex: 2 }}
//           />
//         </div>
//       </div>

//       {/* Product Display Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-6">
//           <h3 className="uppercase text-sm tracking-wider text-gray-500 mb-2">
//             Choose by your choice
//           </h3>
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-gray-800">
//             Wear well. give well.
//             <br />
//             feel well.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//             The best choice
//             <br />
//             for everyone
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { img: PurseLady, name: "Oversized hooded cardigan", price: "$395.00" },
//             { img: Accessories, name: "Cupro long sleeve button down dress", price: "$340.00" },
//             { img: ShirtMen, name: "Crewneck pull-on sweater", price: "$175.00" },
//           ].map((item, i) => (
//             <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//               <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//                 <img src={item.img} alt={item.name} className="w-full h-auto object-cover" />
//               </div>
//               <p className="font-semibold text-lg text-gray-800">{item.name}</p>
//               <p className="text-gray-600">{item.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Time Only Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
//             time only.
//           </h2>
//           <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">Best on sale</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
//           {[Model1, Model2, Model3].map((model, idx) => (
//             <div key={idx} className="flex flex-col items-center relative">
//               <img
//                 src={model}
//                 alt={`Model ${idx + 1}`}
//                 className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//               />
//               {idx === 1 && (
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//                   <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Our Oath Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 flex flex-col lg:flex-row items-center justify-between">
//         <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//           <img
//             src={Model5}
//             alt="Woman drinking water"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//           <p className="text-sm text-gray-600 uppercase mb-2">About Us</p>
//           <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
//             Our oath,
//             <br />
//             You beautiful.
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
//             A small company offering simple, timeless pieces you can enjoy every day of
//             the year. Our collection is conceptually designed and ethically made in Los Angeles.
//           </p>
//           <button
//             onClick={() => navigate("Services/HistoryBeyond")}
//             className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
//           >
//             <span>Learn More</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="w-full p-8 md:p-12 lg:p-16 pt-0 text-center text-gray-600">
//         <div className="flex justify-center space-x-6 mb-4">
//           {[...Array(3)].map((_, i) => (
//             <a href="#" className="hover:text-gray-900" key={i}>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"
//                 ></path>
//               </svg>
//             </a>
//           ))}
//         </div>
//         <p className="text-xl font-semibold tracking-wide">#itiswellla</p>
//       </div>
//     </div>
//   );
// };

// export default Hero;





// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Flower from "../assets/Background/Flower.jpeg";
// import MainModel from "../assets/PageOnes/WomenMain.jpeg";
// import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
// import Accessories from "../assets/PageOnes/Accessories.jpeg";
// import ShirtMen from "../assets/PageOnes/Dress (2).jpeg";
// import Model1 from "../assets/Background/Model1.jpeg";
// import Model2 from "../assets/Background/Model2.jpeg";
// import Model3 from "../assets/Background/Model3.jpeg";
// import Model5 from "../assets/Background/Model5.jpeg";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="w-full bg-cover bg-center py-0 px-0"
//       style={{
//         backgroundImage: `url(${Flower})`,
//       }}
//     >
//       {/* White content box inside the background */}
//       <div className="w-[96vw] mx-auto bg-white rounded-lg  flex flex-col items-center mb-12">
      
//         {/* Hero Section */}
//         <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0">
//           <div className="relative w-full flex justify-center items-center h-[500px] lg:h-auto">
//             <img
//               src={MainModel}
//               alt="Woman in black top"
//               className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
//               style={{ zIndex: 2 }}
//             />
//           </div>
//         </div>

//         {/* Product Display Section */}
//         <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//           <div className="text-center mb-6">
//             <h3 className="uppercase text-sm tracking-wider text-gray-500 mb-2">
//               Choose by your choice
//             </h3>
//             <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-gray-800">
//               Wear well. give well.
//               <br />
//               feel well.
//             </h2>
//             <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//               The best choice
//               <br />
//               for everyone
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { img: PurseLady, name: "Oversized hooded cardigan", price: "$395.00" },
//               { img: Accessories, name: "Cupro long sleeve button down dress", price: "$340.00" },
//               { img: ShirtMen, name: "Crewneck pull-on sweater", price: "$175.00" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
//               >
//                 <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//                 <p className="font-semibold text-lg text-gray-800">{item.name}</p>
//                 <p className="text-gray-600">{item.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Time Only Section */}
//         <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//           <div className="text-center mb-12">
//             <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
//               time only.
//             </h2>
//             <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
//               Best on sale
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
//             {[Model1, Model2, Model3].map((model, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center relative"
//               >
//                 <img
//                   src={model}
//                   alt={`Model ${idx + 1}`}
//                   className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//                 />
//                 {idx === 1 && (
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//                     <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Our Oath Section */}
//         <div className="w-full p-8 md:p-12 lg:p-16 pt-0 flex flex-col lg:flex-row items-center justify-between">
//           <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//             <img
//               src={Model5}
//               alt="Woman drinking water"
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//             <p className="text-sm text-gray-600 uppercase mb-2">About Us</p>
//             <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
//               Our oath,
//               <br />
//               You beautiful.
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
//               A small company offering simple, timeless pieces you can enjoy every day of
//               the year. Our collection is conceptually designed and ethically made in Los Angeles.
//             </p>
//             <button
//               onClick={() => navigate("/Services/HistoryBeyond")}
//               className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
//             >
//               <span>Learn More</span>
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Footer Section */}
//         <div className="w-full p-8 md:p-12 lg:p-16 pt-0 text-center text-gray-600">
//           <div className="flex justify-center space-x-6 mb-4">
//             {[...Array(3)].map((_, i) => (
//               <a href="#" className="hover:text-gray-900" key={i}>
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"
//                   ></path>
//                 </svg>
//               </a>
//             ))}
//           </div>
//           <p className="text-xl font-semibold tracking-wide">#itiswellla</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Flower from "../assets/Background/Flower.jpeg";
import MainModel from "../assets/PageOnes/WomenMain.jpeg";
import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
import Accessories from "../assets/PageOnes/Accessories.jpeg";
import ShirtMen from "../assets/PageOnes/Dress (2).jpeg";
import Model1 from "../assets/Background/Model1.jpeg";
import Model2 from "../assets/Background/Model2.jpeg";
import Model3 from "../assets/Background/Model3.jpeg";
import Model5 from "../assets/Background/Model5.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center py-0 px-0"
      style={{
        backgroundImage: `url(${Flower})`,
      }}
    >
      {/* White content box inside the background */}
      <div className="w-[96vw] mx-auto bg-white rounded-lg flex flex-col items-center">
        {/* Hero Section */}
        {/* <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0">
          <div className="relative w-full flex justify-center items-center h-[500px] lg:h-auto">
            <img
              src={MainModel}
              alt="Woman in black top"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
              style={{ zIndex: 2 }}
            />
          </div>
        </div> */}

        {/* Product Display Section */}
        <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
          <div className="text-center mb-6">
            <h3 className="uppercase text-sm tracking-wider text-gray-500 mb-2">
              Choose by your choice
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-gray-800">
              Wear well. give well.
              <br />
              feel well.
            </h2>
            <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
              The best choice
              <br />
              for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: PurseLady, name: "Oversized hooded cardigan", price: "$395.00" },
              { img: Accessories, name: "Cupro long sleeve button down dress", price: "$340.00" },
              { img: ShirtMen, name: "Crewneck pull-on sweater", price: "$175.00" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="font-semibold text-lg text-gray-800">{item.name}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Time Only Section */}
        <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
              time only.
            </h2>
            <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
              Best on sale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
            {[Model1, Model2, Model3].map((model, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center relative"
              >
                <img
                  src={model}
                  alt={`Model ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
                />
                {idx === 1 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Our Oath Section */}
        <div className="w-full p-8 md:p-12 lg:p-16 pt-0 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img
              src={Model5}
              alt="Woman drinking water"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-sm text-gray-600 uppercase mb-2">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
              Our oath,
              <br />
              You beautiful.
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
              A small company offering simple, timeless pieces you can enjoy every day of
              the year. Our collection is conceptually designed and ethically made in Los Angeles.
            </p>
            <button
              onClick={() => navigate("/Services/HistoryBeyond")}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full p-8 md:p-12 lg:p-16 pt-0 text-center text-gray-600">
          <div className="flex justify-center space-x-6 mb-4">
            {[...Array(3)].map((_, i) => (
              <a href="#" className="hover:text-gray-900" key={i}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            ))}
          </div>
          <p className="text-xl font-semibold tracking-wide">#itiswellla</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;




