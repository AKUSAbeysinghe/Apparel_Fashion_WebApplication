// import React from 'react';
// import Background from "../assets/Background/Cotton1.jpeg";
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
// import { Menu, Search, Heart, User, ShoppingBag } from 'lucide-react';
// import FlowerBackground from '../assets/Background/Flower.jpeg'; // adjust path if needed

// const Navbar = () => {
//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${FlowerBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         paddingTop: '20px',
//         paddingBottom: '20px',
//       }}
//     >
//       <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-2xl flex flex-col items-center w-[96%] max-w-[1700px] mx-auto">
//         <nav className="w-full border-b border-gray-300">
//           <div className="w-full px-8 md:px-12 lg:px-16 py-3 flex items-center justify-between font-sans">
//             {/* Left Side */}
//             <div className="flex items-center space-x-6 text-sm">
//               <Menu className="w-5 h-5" />
//               <span>Menu</span>
//               <Search className="w-5 h-5" />
//               <span>Search</span>
//             </div>

//             {/* Center */}
//             <div className="text-xl font-semibold tracking-wide">
//               LOUIS VUITTON
//             </div>

//             {/* Right Side */}
//             <div className="flex items-center space-x-5 text-sm">
//               <span className="hover:underline">Contact Us</span>
//               <Heart className="w-5 h-5" />
//               <User className="w-5 h-5" />
//               <div className="relative">
//                 <ShoppingBag className="w-5 h-5" />
//                 <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                   0
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { Menu, Search, Heart, User, ShoppingBag, ChevronDown } from 'lucide-react';
// import FlowerBackground from '../assets/Background/Flower.jpeg';

// const Navbar = () => {
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${FlowerBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         paddingTop: '20px',
//         paddingBottom: '20px',
//       }}
//     >
//       <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-2xl flex flex-col w-[96%] max-w-[1700px] mx-auto">
//         <nav className="w-full border-b border-gray-300">
//           <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between font-sans">
//             {/* Left Icons */}
//             <div className="flex items-center space-x-6 text-sm text-gray-700">
//               <Menu className="w-5 h-5" />
//               <Search className="w-5 h-5" />
//             </div>

//             {/* Center Navigation */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 relative">
//               <a href="#" className="hover:text-black">Home</a>
//               <a href="#" className="hover:text-black">About Us</a>
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Collections <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-52 bg-white bg-opacity-95 border rounded shadow-md p-3 z-50">
//                     <div className="mb-2">
//                       <div className="font-semibold">Clothing</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                       </ul>
//                     </div>
//                     <div className="mb-2">
//                       <div className="font-semibold">Footwear</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <div className="font-semibold">Accessories</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                         <li><a href="#" className="hover:underline">All</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <a href="#" className="hover:text-black">Lookbook</a>
//               <a href="#" className="hover:text-black">Services</a>
//               <a href="#" className="hover:text-black">Contact</a>
//             </div>

//             {/* Center Logo */}
//             <div className="text-xl font-semibold tracking-wide text-gray-900 block md:hidden">
//               LOUIS VUITTON
//             </div>

//             {/* Right Icons */}
//             <div className="flex items-center space-x-4 text-sm text-gray-700">
//               <Heart className="w-5 h-5" />
//               <User className="w-5 h-5" />
//               <div className="relative">
//                 <ShoppingBag className="w-5 h-5" />
//                 <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                   0
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Center logo on larger screens */}
//         <div className="text-center py-4 hidden md:block text-2xl font-bold text-gray-900 tracking-widest">
//           LOUIS VUITTON
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { Menu, Search, Heart, User, ShoppingBag, ChevronDown } from 'lucide-react';
// import FlowerBackground from '../assets/Background/Flower.jpeg';

// const Navbar = () => {
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${FlowerBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'top center',
//         paddingTop: '20px',
//         // Removed paddingBottom to avoid background affecting bottom
//         paddingBottom: '0px',
//       }}
//     >
//       <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-2xl flex flex-col w-[96%] max-w-[1700px] mx-auto">
//         <nav className="w-full border-b border-gray-300">
//           <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between font-sans">
//             {/* Left Icons */}
//             <div className="flex items-center space-x-6 text-sm text-gray-700">
//               <Menu className="w-5 h-5" />
//               <Search className="w-5 h-5" />
//             </div>

//             {/* Center Navigation */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 relative">
//               <a href="#" className="hover:text-black">Home</a>
//               <a href="#" className="hover:text-black">About Us</a>
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Collections <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-52 bg-white bg-opacity-95 border rounded shadow-md p-3 z-50">
//                     <div className="mb-2">
//                       <div className="font-semibold">Clothing</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                       </ul>
//                     </div>
//                     <div className="mb-2">
//                       <div className="font-semibold">Footwear</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <div className="font-semibold">Accessories</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                         <li><a href="#" className="hover:underline">All</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <a href="#" className="hover:text-black">Lookbook</a>
//               <a href="#" className="hover:text-black">Services</a>
//               <a href="#" className="hover:text-black">Contact</a>
//             </div>

//             {/* Center Logo (Mobile) */}
//             <div className="text-xl font-semibold tracking-wide text-gray-900 block md:hidden">
//               LOUIS VUITTON
//             </div>

//             {/* Right Icons */}
//             <div className="flex items-center space-x-4 text-sm text-gray-700">
//               <Heart className="w-5 h-5" />
//               <User className="w-5 h-5" />
//               <div className="relative">
//                 <ShoppingBag className="w-5 h-5" />
//                 <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                   0
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Center logo on larger screens */}
//         <div className="text-center py-4 hidden md:block text-2xl font-bold text-gray-900 tracking-widest">
//           LOUIS VUITTON
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import FlowerBackground from '../assets/Background/Flower.jpeg';
// // import { Link } from 'react-router-dom';


// const Navbar = () => {
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${FlowerBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'top center',
//         paddingTop: '20px',
//         paddingBottom: '0px',
//       }}
//     >
//       {/* <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-2xl flex flex-col w-[96%] max-w-[1700px] mx-auto"> */}
//       <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col w-[96%] max-w-[1700px] mx-auto">

//         <nav className="w-full border-b border-gray-300">
//           <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between font-sans">
//             {/* Left Placeholder for alignment (or logo if needed) */}
//             <div className="flex items-center space-x-6 text-sm text-gray-700">
//               {/* Empty to preserve spacing */}
//             </div>

//             {/* Center Navigation */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 relative">
//               <a href="#" className="hover:text-black">Home</a>
//               <a href="#" className="hover:text-black">About Us</a>

//               {/* Collections Dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Collections <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-52 bg-white bg-opacity-95 border rounded shadow-md p-3 z-50">
//                     <div className="mb-2">
//                       <div className="font-semibold">Clothing</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                       </ul>
//                     </div>
//                     <div className="mb-2">
//                       <div className="font-semibold">Footwear</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <div className="font-semibold">Accessories</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                         <li><a href="#" className="hover:underline">All</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <a href= "#" className="hover:text-black">Lookbook</a>
//               {/* <Link to="/lookbook" className="hover:text-black">Lookbook</Link> */}


//               {/* Services Dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Services <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isServicesOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-52 bg-white bg-opacity-95 border rounded shadow-md p-3 z-50">
//                     <ul className="space-y-2 text-sm">
//                       <li><a href="#" className="hover:underline">Personalization</a></li>
//                       <li><a href="#" className="hover:underline">Dress Gallery</a></li>
//                       <li><a href="#" className="hover:underline">Supplementary</a></li>
//                       <li><a href="#" className="hover:underline">Sustainability</a></li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               <a href="#" className="hover:text-black">Contact</a>
//             </div>

//             {/* Center Logo (Mobile only) */}
//             <div className="text-xl font-semibold tracking-wide text-gray-900 block md:hidden">
//               LOUIS VUITTON
//             </div>

//             {/* Right Social Icons */}
//             <div className="flex items-center space-x-4 text-gray-700">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaFacebookF className="w-5 h-5" />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaLinkedinIn className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </nav>

//         {/* Center logo on larger screens */}
//         <div className="text-center py-4 hidden md:block text-2xl font-bold text-gray-900 tracking-widest">
//           LOUIS VUITTON
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import { Link } from 'react-router-dom'; // ✅ import Link
// import FlowerBackground from '../assets/Background/Flower.jpeg';

// const Navbar = () => {
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${FlowerBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'top center',
//         paddingTop: '20px',
//         paddingBottom: '0px',
//       }}
//     >
//       <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col w-[96%] max-w-[1700px] mx-auto">
//         <nav className="w-full border-b border-gray-300">
//           <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between font-sans">
            
//             <div className="flex items-center space-x-6 text-sm text-gray-700" />

//             {/* Center Navigation */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 relative">
//               <Link to="/" className="hover:text-black">Home</Link>
//               {/* <a href="#" className="hover:text-black">About Us</a> */}
//               <Link to="/About" className="hover:text-black">About</Link>

//               {/* Collections Dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Collections <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-52 bg-white bg-opacity-95 border rounded shadow-md p-3 z-50">
//                     <div className="mb-2">
//                       <div className="font-semibold">Clothing</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         {/* <li><a href="#" className="hover:underline">Men</a></li> */}
//                         {/* <li><Link to= "/About" className="hover:text-black">Men</Link></li> */}
//                         <li><Link to="/Product" className="hover:text-black">Men</Link></li>
//                         <li><Link to="/Collections/ClothingF" className="hover:text-black">Women</Link></li>
//                       </ul>
//                     </div>
//                     <div className="mb-2">
//                       <div className="font-semibold">Footwear</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><a href="#" className="hover:underline">Men</a></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <div className="font-semibold">Accessories</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         {/* <li><a href="#" className="hover:underline">Men</a></li> */}
//                         <li><Link to="/lookbook" className="hover:text-black">Lookbook</Link></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                         <li><a href="#" className="hover:underline">All</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* ✅ Use Link to route Lookbook page */}
//               <Link to="/lookbook" className="hover:text-black">Lookbook</Link>

//               {/* Services Dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Services <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isServicesOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-52 bg-white bg-opacity-95 border rounded shadow-md p-3 z-50">
//                     <ul className="space-y-2 text-sm">
//                       {/* <li><a href="#" className="hover:underline">Personalization</a></li> */}
//                       <li><Link to="Services/Personalization" className="hover:text-black">Personalization</Link></li>
//                       {/* <li><a href="#" className="hover:underline">Dress Gallery</a></li> */}
//                       <li><Link to="/Galary" className="hover:text-black">Dress Gallery</Link></li>
//                             <li><Link to="Services/Suplimentory" className="hover:text-black">Supplementary</Link></li>
//                       {/* <li><a href="#" className="hover:underline">Supplementary</a></li> */}
//                       {/* <li><a href="#" className="hover:underline">Sustainability</a></li> */}
//                        <li><Link to="Services/Sustainbility" className="hover:text-black">Sustainability</Link></li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* <a href="#" className="hover:text-black">Contact</a> */}
//               <Link to="/Contact" className="hover:text-black">Contact</Link>
//             </div>

//             {/* Logo & Social Icons */}
//             <div className="text-xl font-semibold tracking-wide text-gray-900 block md:hidden">
//               LOUIS VUITTON
//             </div>

//             <div className="flex items-center space-x-4 text-gray-700">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaFacebookF className="w-5 h-5" />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaLinkedinIn className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </nav>

//         <div className="text-center py-4 hidden md:block text-2xl font-bold text-gray-900 tracking-widest">
//           LOUIS VUITTON
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import FlowerBackground from '../assets/Background/Flower.jpeg';

// const Navbar = () => {
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <div
//       className="relative w-full bg-cover bg-center pt-5"
//       style={{
//         backgroundImage: `url(${FlowerBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'top center',
//         paddingBottom: '0px',
//       }}
//     >
//       {/* This is the main white container with shadow and rounded corners */}
//       <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col w-[96%] max-w-[1700px] mx-auto">
        
//         {/* Navigation and Social Icons section (First Row) */}
//         <nav className="w-full border-b border-gray-300">
//           <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between font-sans">
            
//             <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 relative justify-center flex-grow">
//               <Link to="/" className="hover:text-black">Home</Link>
//               <Link to="/About" className="hover:text-black">About</Link>

//               {/* Collections Dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Collections <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-1 w-52 bg-white border rounded shadow-md p-3 z-50">
//                     <div className="mb-2">
//                       <div className="font-semibold">Clothing</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         <li><Link to="/Product" className="hover:text-black">Men</Link></li>
//                         <li><Link to="/Collections/ClothingF" className="hover:text-black">Women</Link></li>
//                       </ul>
//                     </div>
//                     <div className="mb-2">
//                       <div className="font-semibold">Footwear</div>
//                       <ul className="ml-3 space-y-1 text-sm">
//                         {/* <li><a href="#" className="hover:underline">Men</a></li> */}
//                         <li><Link to="/Collections/FootwareM" className="hover:text-black">Men</Link></li>
//                         {/* <li><a href="#" className="hover:underline">Women</a></li> */}
//                         <li><Link to="/Collections/FootwareF" className="hover:text-black">Women</Link></li>
//                       </ul>
//                     </div>
//                     <div>
//                       {/* <div className="font-semibold">Accessories</div> */}
//                       <div><Link to="/Collections/Assessories" className="hover:text-black">Accessories</Link></div>
//                                <div><Link to="/Collections/Bags" className="hover:text-black">Bags</Link></div>
//                       {/* <ul className="ml-3 space-y-1 text-sm">
//                         <li><Link to="/lookbook" className="hover:text-black">Lookbook</Link></li>
//                         <li><a href="#" className="hover:underline">Women</a></li>
//                         <li><a href="#" className="hover:underline">All</a></li>
//                       </ul> */}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <Link to="/lookbook" className="hover:text-black">Lookbook</Link>

//               {/* Services Dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button className="flex items-center hover:text-black">
//                   Services <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//                 {isServicesOpen && (
//                   <div className="absolute top-full left-0 mt-1 w-52 bg-white border rounded shadow-md p-3 z-50">
//                     <ul className="space-y-2 text-sm">
//                       <li><Link to="Services/Personalization" className="hover:text-black">Personalization</Link></li>
//                       <li><Link to="/Galary" className="hover:text-black">Dress Gallery</Link></li>
//                       <li><Link to="Services/Suplimentory" className="hover:text-black">Supplementary</Link></li>
//                       <li><Link to="Services/Sustainbility" className="hover:text-black">Sustainability</Link></li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               <Link to="/Contact" className="hover:text-black">Contact</Link>
//             </div>

//             {/* Social Icons (fixed to the right) */}
//             <div className="flex items-center space-x-4 text-gray-700">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaFacebookF className="w-5 h-5" />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaLinkedinIn className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </nav>

//         {/* Centered LOUIS VUITTON logo (Second Row) */}
//         <div className="text-center py-4 text-2xl font-bold text-gray-900 tracking-widest">
//           {/* LOUIS VUITTON */}
//           AURORA
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/Background/Flower.jpeg';

const Navbar = () => {
  // State for managing the open/close state of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for dropdowns within the menu
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Function to toggle the main mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className="relative w-full bg-cover bg-center pt-5"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        paddingBottom: '0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Main white container with rounded corners and no shadow */}
      <div className="relative z-10 bg-white rounded-lg w-[96%] max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8">
        <nav className="border-b border-gray-300">
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* Hamburger for mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 focus:outline-none p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex space-x-10 text-base font-medium text-gray-800 flex-grow justify-center">
              <Link to="/" className="hover:text-black transition-colors duration-200">
                Home
              </Link>
              <Link to="/About" className="hover:text-black transition-colors duration-200">
                About
              </Link>

              {/* Collections dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                  className="flex items-center hover:text-black transition-colors duration-200"
                  aria-expanded={isCollectionsOpen}
                >
                  Collections
                  <ChevronDown
                    className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
                      isCollectionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-1 w-56 bg-white border rounded shadow-md p-3 z-50 transition max-h-0 overflow-hidden opacity-0 ${
                    isCollectionsOpen ? 'max-h-96 opacity-100' : ''
                  }`}
                >
                  <div className="mb-3">
                    <div className="font-semibold text-base">Clothing</div>
                    <ul className="ml-3 space-y-1 text-base">
                      <li>
                        <Link to="/Product" className="hover:text-black transition-colors duration-200">
                          Men
                        </Link>
                      </li>
                      <li>
                        <Link to="/Collections/ClothingF" className="hover:text-black transition-colors duration-200">
                          Women
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="font-semibold text-base">Footwear</div>
                    <ul className="ml-3 space-y-1 text-base">
                      <li>
                        <Link to="/Collections/FootwareM" className="hover:text-black transition-colors duration-200">
                          Men
                        </Link>
                      </li>
                      <li>
                        <Link to="/Collections/FootwareF" className="hover:text-black transition-colors duration-200">
                          Women
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div>
                      <Link to="/Collections/Assessories" className="hover:text-black transition-colors duration-200">
                        Accessories
                      </Link>
                    </div>
                    <div>
                      <Link to="/Collections/Bags" className="hover:text-black transition-colors duration-200">
                        Bags
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/lookbook" className="hover:text-black transition-colors duration-200">
                Lookbook
              </Link>

              {/* Services dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center hover:text-black transition-colors duration-200"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-1 w-56 bg-white border rounded shadow-md p-3 z-50 transition max-h-0 overflow-hidden opacity-0 ${
                    isServicesOpen ? 'max-h-96 opacity-100' : ''
                  }`}
                >
                  <ul className="space-y-2 text-base">
                    <li>
                      <Link to="/Services/Personalization" className="hover:text-black transition-colors duration-200">
                        Personalization
                      </Link>
                    </li>
                    <li>
                      <Link to="/Galary" className="hover:text-black transition-colors duration-200">
                        Dress Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/Suplimentory" className="hover:text-black transition-colors duration-200">
                        Care Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/Sustainbility" className="hover:text-black transition-colors duration-200">
                        Sustainability
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link to="/Contact" className="hover:text-black transition-colors duration-200">
                Contact
              </Link>
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-5 text-gray-700">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-gray-300 shadow-md w-full px-6 py-4 space-y-4 font-medium text-gray-800">
              <a href="/" className="block hover:text-black transition-colors duration-200">
                Home
              </a>
              <a href="/About" className="block hover:text-black transition-colors duration-200">
                About
              </a>

              <div>
                <button
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                  className="flex items-center w-full hover:text-black transition-colors duration-200"
                  aria-expanded={isCollectionsOpen}
                >
                  Collections
                  <ChevronDown
                    className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
                      isCollectionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isCollectionsOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-base">
                    <a href="/Product" className="block hover:text-black">
                      Men
                    </a>
                    <a href="/Collections/ClothingF" className="block hover:text-black">
                      Women
                    </a>
                    <a href="/Collections/FootwareM" className="block hover:text-black">
                      Footwear Men
                    </a>
                    <a href="/Collections/FootwareF" className="block hover:text-black">
                      Footwear Women
                    </a>
                    <a href="/Collections/Assessories" className="block hover:text-black">
                      Accessories
                    </a>
                    <a href="/Collections/Bags" className="block hover:text-black">
                      Bags
                    </a>
                  </div>
                )}
              </div>

              <a href="/lookbook" className="block hover:text-black transition-colors duration-200">
                Lookbook
              </a>

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center w-full hover:text-black transition-colors duration-200"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-base">
                    <a href="/Services/Personalization" className="block hover:text-black">
                      Personalization
                    </a>
                    <a href="/Galary" className="block hover:text-black">
                      Dress Gallery
                    </a>
                    <a href="/Services/Suplimentory" className="block hover:text-black">
                      Supplementary
                    </a>
                    <a href="/Services/Sustainbility" className="block hover:text-black">
                      Sustainability
                    </a>
                  </div>
                )}
              </div>

              <a href="/Contact" className="block hover:text-black transition-colors duration-200">
                Contact
              </a>

              {/* Mobile social icons */}
              <div className="flex space-x-6 mt-4 text-gray-700">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Centered logo (Second Row) */}
        <div className="text-center py-4 text-2xl font-bold text-gray-900 tracking-widest select-none">
          AURORA
        </div>
      </div>
    </div>
  );
};

export default Navbar;

