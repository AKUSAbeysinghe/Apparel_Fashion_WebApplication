// import React from 'react';

// const Footer = () => {
//   return (
//     <footer
//       className="bg-cover bg-center w-full px-4 py-8 text-gray-800 text-sm" // Increased padding and text size for better readability, and added w-full for full width
//       style={{ backgroundImage: "url('/flower-bg.jpg')" }} // Replace '/flower-bg.jpg' with your actual image path or URL
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-full"> {/* Increased max-w for better layout */}
//         {/* Help Section */}
//         <div>
//           <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Help</h4>
//           <ul className="space-y-2">
//             <li>
//               Our Client Advisors are available to assist you by phone at{' '}
//               <a href="tel:1866VUITTON" className="underline hover:text-gray-900">
//                 1.866.VUITTON
//               </a>
//               , or you may also{' '}
//               <a href="#" className="underline hover:text-gray-900">
//                 chat with us.
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 {/* FAQs */}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 {/* Product Care */}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 {/* Stores */}
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div>
//           <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Services</h4>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Repairs
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Personalization
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Art of Gifting
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Download our Apps
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* About Louis Vuitton Section */}
//         <div>
//           <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">About Louis Vuitton</h4>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Fashion Shows
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Arts & Culture
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 {/* La Maison */}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Sustainability
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Latest News
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 {/* Careers */}
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-900">
//                 Foundation Louis Vuitton
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Email and SMS Sign-up Section */}
//         <div>
//           <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Email and SMS Sign-up</h4>
//           <p className="mb-4">
//             Subscribe for exclusive email and SMS updates and receive the latest news from Louis Vuitton, including new arrivals and exclusive collections.
//           </p>
//           <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Follow Us</h4>
//           {/* You might add social media icons here */}
//         </div>
//       </div>

//       <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs w-full">
//         <div className="flex items-center space-x-2 mb-4 md:mb-0">
//           <span>Ship to:</span>
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" // Placeholder for US flag
//             alt="United States Flag"
//             className="w-4 h-auto"
//           />
//           <span>IDET</span>
//         </div>
//         <div className="flex flex-wrap justify-center md:justify-end space-x-4">
//           <a href="#" className="hover:text-gray-900">
//             Sitemap
//           </a>
//           <a href="#" className="hover:text-gray-900">
//             Legal Notices
//           </a>
//           <a href="#" className="hover:text-gray-900">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-gray-900">
//             California Supply Chains Act
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-900">
//             Your Privacy Choices{' '}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
//             </svg>
//           </a>
//         </div>
//       </div>

//       <div className="text-center mt-8 text-xl font-bold tracking-widest text-gray-900">
//         LOUIS VUITTON
//       </div>

//       {/* Chat with us button - fixed position for example, adjust as needed */}
//       <div className="fixed bottom-4 right-4 z-50">
//         <button className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg hover:bg-gray-50">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//             />
//           </svg>
//           Chat with us
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 ml-2 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
//           </svg>
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import Flower from "../assets/Background/Flower.jpeg";
const Footer = () => {
  const backgroundImageUrl = Flower;

  return (
    <div
      className="relative w-full bg-cover bg-center pb-6" // <-- padding bottom added here
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      <footer className="relative z-10 bg-white rounded-lg shadow-2xl w-[96%] max-w-[1700px] mx-auto px-4 py-8 text-gray-800 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* About Louis Vuitton Section */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">About Louis Vuitton</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Fashion Shows</a></li>
              <li><a href="#" className="hover:text-gray-900">Arts & Culture</a></li>
              <li><a href="#" className="hover:text-gray-900">La Maison</a></li>
              <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-gray-900">Latest News</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Foundation Louis Vuitton</a></li>
            </ul>
          </div>

          {/* Email and SMS Sign-up Section */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Email and SMS Sign-up</h4>
            <p className="mb-4">
              Subscribe for exclusive email and SMS updates and receive the latest news from Louis Vuitton, including new arrivals and exclusive collections.
            </p>
            <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Follow Us</h4>
            {/* Add icons if needed */}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs w-full">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span>Ship to:</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="United States Flag"
              className="w-4 h-auto"
            />
            <span>IDET</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-gray-900">Sitemap</a>
            <a href="#" className="hover:text-gray-900">Legal Notices</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">California Supply Chains Act</a>
            <a href="#" className="flex items-center hover:text-gray-900">
              Your Privacy Choices
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-xl font-bold tracking-widest text-gray-900">
          LOUIS VUITTON
        </div>
      </footer>

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg hover:bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          Chat with us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Footer;




