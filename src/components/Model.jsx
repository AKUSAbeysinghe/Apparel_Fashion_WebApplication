// import React from 'react';
// // Importing icons from lucide-react for the new Navbar
// import { Menu, Search, Heart, User, ShoppingBag, ArrowRight } from 'lucide-react'; // Added ArrowRight for the CTA
// import Flower from "../assets/Background/Flower.jpeg";
// import MainModel from "../assets/PageOnes/WomenMain.jpeg";
// import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
// import Accessories from "../assets/PageOnes/Accessories.jpeg";

// // New Navbar Component
// const Navbar = () => {
//   return (
//     <nav className="w-full border-b border-gray-300">
//       <div className="max-w-full mx-auto px-8 md:px-12 lg:px-16 py-3 flex items-center justify-between font-sans">
//         {/* Left Section */}
//         <div className="flex items-center space-x-6 text-sm">
//           <Menu className="w-5 h-5" />
//           <span>Menu</span>
//           <Search className="w-5 h-5" />
//           <span>Search</span>
//         </div>

//         {/* Center Logo */}
//         <div className="text-xl font-semibold tracking-wide">
//           LOUIS VUITTON
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-5 text-sm">
//           <span className="hover:underline">Contact Us</span>
//           <Heart className="w-5 h-5" />
//           <User className="w-5 h-5" />
//           <div className="relative">
//             <ShoppingBag className="w-5 h-5" />
//             <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//               0
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const App = () => {
//   return (
//     <div className="relative min-h-screen bg-black text-gray-800 flex flex-col items-center justify-start overflow-hidden">
//       {/* Background Image/Pattern - positioned behind the main white content area */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-70"
//         style={{
//           backgroundImage: `url(${Flower})`,
//           backgroundAttachment: 'fixed',
//         }}
//       ></div>

//       {/* Single Large White Content Container for all sections - Changed max-w-screen-2xl to w-[90vw] */}
//       <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col items-center w-[90vw] mx-auto my-12">
//         {/* Navbar spans full width of the white box */}
//         <Navbar />

//         {/* Hero Section Content */}
//         <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0">
//           {/* Left Section: Text Content */}
//           <div className="flex flex-col w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
//             <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-6 font-serif">
//               Women's New
//               <br />
//               Arrivals.
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
//               Discover fresh pieces perfect for every occasion with
//               <br />
//               easy purchases.
//             </p>
//             <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 transition duration-300 self-start">
//               Shop Collection
//             </button>
//           </div>

//           {/* Right Section: Images and Icons */}
//           <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[500px] lg:h-auto">
//             <img
//               src={MainModel}
//               alt="Woman in black top"
//               className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
//               style={{ zIndex: 2 }}
//             />
//             <img
//               src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+1"
//               alt="Woman in white dress"
//               className="absolute top-12 right-0 md:right-12 lg:right-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
//               style={{ zIndex: 1 }}
//             />
//             <img
//               src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+2"
//               alt="Woman in white t-shirt"
//               className="absolute bottom-12 left-0 md:left-12 lg:left-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
//               style={{ zIndex: 1 }}
//             />
//             <div className="absolute top-0 right-0 flex flex-col space-y-4 text-gray-600">
//               <ShoppingBag className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
//               <Search className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         {/* Product Display Section */}
//         <div className="w-full p-8 md:p-12 lg:p-16 pt-0">
//           <div className="text-center mb-12">
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
//             <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//               <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//                 <img
//                   src={PurseLady}
//                   alt="Oversized hooded cardigan"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//               <p className="font-semibold text-lg text-gray-800">Oversized hooded cardigan</p>
//               <p className="text-gray-600">$395.00</p>
//             </div>
//             <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//               <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//                 <img
//                   src={Accessories}
//                   alt="Cupro long sleeve button down dress"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//               <p className="font-semibold text-lg text-gray-800">Cupro long sleeve button down dress</p>
//               <p className="text-gray-600">$340.00</p>
//             </div>
//             <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
//               <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
//                 <img
//                   src="https://placehold.co/300x400/E0E0E0/333333?text=Sweater"
//                   alt="Crewneck pull-on sweater"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//               <p className="font-semibold text-lg text-gray-800">Crewneck pull-on sweater</p>
//               <p className="text-gray-600">$175.00</p>
//             </div>
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
//             <div className="flex flex-col items-center">
//               <img
//                 src="https://placehold.co/300x400/E0E0E0/333333?text=Model+1"
//                 alt="Model walking"
//                 className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//               />
//             </div>
//             <div className="relative flex flex-col items-center">
//               <img
//                 src="https://placehold.co/300x400/D0D0D0/333333?text=Model+2"
//                 alt="Model sitting"
//                 className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//               />
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//                 <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 src="https://placehold.co/300x400/E0E0E0/333333?text=Model+3"
//                 alt="Model standing"
//                 className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Our oath, You beautiful. Section */}
//         <div className="w-full p-8 md:p-12 lg:p-16 pt-0 flex flex-col lg:flex-row items-center justify-between">
//           <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//             <img
//               src="https://placehold.co/600x400/E0E0E0/333333?text=Woman+Drinking"
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
//               A small company offering simple, timeless pieces you can enjoy every day of the year.
//               Our collection is conceptually designed and ethically made in Los Angeles.
//             </p>
//             <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
//               <span>Learn More</span>
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Footer Section */}
//         <div className="w-full p-8 md:p-12 lg:p-16 pt-0 text-center text-gray-600">
//           <div className="flex justify-center space-x-6 mb-4">
//             <a href="#" className="hover:text-gray-900">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path></svg>
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path></svg>
//             </a>
//             <a href="#" className="hover:text-gray-900">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"></path></svg>
//             </a>
//           </div>
//           <p className="text-xl font-semibold tracking-wide">
//             #itiswellla
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import BgImage from '../assets/Background/Flower.jpeg'; // Replace with your image path

// const AboutSection = () => {
//   return (
//     <section className="relative w-full h-full overflow-hidden">
//       {/* Left BG */}
//       <div
//         className="absolute top-0 left-0 w-[2%] h-full bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${BgImage})` }}
//       />
//       {/* Right BG */}
//       <div
//         className="absolute top-0 right-0 w-[2%] h-full bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${BgImage})` }}
//       />
//       {/* Bottom BG */}
//       <div
//         className="absolute bottom-0 left-[2%] w-[96%] h-[2%] bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${BgImage})` }}
//       />

//       {/* Main Content */}
//       <div className="relative z-10 mx-auto w-[96%] bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 shadow-xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
//           <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//             We are a forward-thinking fashion brand dedicated to blending timeless elegance with modern style.
//             From sleek designs to sustainable collections, our passion is your expression.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
//             <p className="text-gray-600">
//               To revolutionize fashion with sustainable and globally inspired styles that empower individuals.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
//             <p className="text-gray-600">
//               We aim to deliver high-quality, ethically produced garments that inspire confidence and creativity.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
//             <p className="text-gray-600">
//               Sustainability, innovation, inclusivity, and excellence guide everything we do.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;






// src/components/ValuesSection.jsx
// import React from 'react';
// import { HeartIcon, PuzzlePieceIcon, HandRaisedIcon } from '@heroicons/react/24/outline'; // Or use your own icons

// const ValueCard = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-start p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
//       <div className="mb-4">
//         {icon}
//       </div>
//       <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// const ValuesSection = () => {
//   const values = [
//     {
//       icon: <HeartIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Do the best for our customers',
//       description: 'A short description of how are you doing for your customers'
//     },
//     {
//       icon: <PuzzlePieceIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Make complex things simple',
//       description: 'In this block, you can describe how you solve any problems with clean and simple ideas'
//     },
//     {
//       icon: <HandRaisedIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Be open, honest, and constructive',
//       description: 'Of course, you are a good human so don’t forget to mention this here'
//     }
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             Our values
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((value, index) => (
//             <ValueCard
//               key={index}
//               icon={value.icon}
//               title={value.title}
//               description={value.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValuesSection;





// import React from 'react';
// import {
//   HeartIcon,
//   PuzzlePieceIcon,
//   HandRaisedIcon,
// } from '@heroicons/react/24/outline';
// import BackgroundImg from '../assets/Background/Flower.jpeg'; // Add your own image path

// const ValueCard = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-start p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// const ValuesSection = () => {
//   const values = [
//     {
//       icon: <HeartIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Do the best for our customers',
//       description:
//         'A short description of how you are doing the best for your customers.',
//     },
//     {
//       icon: <PuzzlePieceIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Make complex things simple',
//       description:
//         'Describe how you solve problems with clean and simple ideas.',
//     },
//     {
//       icon: <HandRaisedIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Be open, honest, and constructive',
//       description:
//         'Mention how openness and honesty are part of your company values.',
//     },
//   ];

//   return (
//     <section
//       className="relative w-full bg-cover bg-bottom"
//       style={{
//         backgroundImage: `url(${BackgroundImg})`,
//       }}
//     >
//       <div className="flex justify-center w-full">
//         {/* Center content with white background */}
//         <div className="w-[96%] bg-white py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//                 Our values
//               </h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {values.map((value, index) => (
//                 <ValueCard
//                   key={index}
//                   icon={value.icon}
//                   title={value.title}
//                   description={value.description}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Spacer at the bottom with background */}
//       <div className="h-16"></div>
//     </section>
//   );
// };

// export default ValuesSection;




import React from 'react';
import {
  HeartIcon,
  PuzzlePieceIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';
import BackgroundImg from '../assets/Background/Flower.jpeg';

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: <HeartIcon className="w-8 h-8 text-gray-800" />,
      title: 'Do the best for our customers',
      description:
        'A short description of how you are doing the best for your customers.',
    },
    {
      icon: <PuzzlePieceIcon className="w-8 h-8 text-gray-800" />,
      title: 'Make complex things simple',
      description:
        'Describe how you solve problems with clean and simple ideas.',
    },
    {
      icon: <HandRaisedIcon className="w-8 h-8 text-gray-800" />,
      title: 'Be open, honest, and constructive',
      description:
        'Mention how openness and honesty are part of your company values.',
    },
  ];

  return (
    <section
      className="relative w-full bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
      }}
    >
      <div className="flex justify-center w-full">
        {/* Reduced vertical padding */}
        <div className="w-[96%] bg-white py-8 px-4 sm:px-6 lg:px-8 rounded-md shadow-md">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Our values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Removed extra bottom spacer */}
    </section>
  );
};

export default ValuesSection;

