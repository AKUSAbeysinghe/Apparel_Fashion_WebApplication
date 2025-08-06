// import React from "react";

// import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import ProductShowcase from "./components/ProductShowcase";
// // import Width from "./components/Width.jsx";
// import Features from "./components/Features.jsx"; 
// import Model from "./components/Model.jsx";
// import Separate from "./components/Separte.jsx";
// import LookBookM from "./components/LookBookMen.jsx";
// import Footer from "./components/Footer.jsx";
// import Contact from "./components/Contact.jsx";
// import Product from "./components/Product.jsx";
// import Main from "./components/Main.jsx";
// import FootWear from "./components/Footwear.jsx";
// import Clothing from "./components/Clothing.jsx";
// import Banner from "./Pages/Banner.jsx";
// import About from "./components/About.jsx";
// import Services from "./Pages/Services/Services.jsx";
// import Brands from "./components/Brands.jsx";
// import Galary from "./Pages/Galary.jsx";
// import History from "./Pages/History.jsx";
// import HistoryBeyond from "./Pages/HistoryBeyond.jsx";
// import Parse from "./Pages/Parses.jsx";
// function App() {
//   return (
//     <div className="bg-white text-black font-sans">
      
//       <Navbar />
//       <Banner/>
//       <About></About>
//       <Separate/>
      
     
//       {/* <Hero /> */}
//       {/* <ProductShowcase /> */}
//       {/* <Features /> */}
//       {/* <Footer /> */}
//       {/* <Model></Model>  */}
//        {/* <Width/> */}
//        <LookBookM/>
//        <Galary/>
      
//        <HistoryBeyond/>
//        <Product/>
//        {/* <Main/> */}
//        <Parse/>
//        <FootWear></FootWear>
//        <Clothing></Clothing>
//        <Services></Services>
//        <Brands></Brands>
//        <Contact/>
//        <Footer />
//     </div>
//   );
// }




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Lookbook from './components/LookBookMen.jsx';

// const Home = () => (
//   <div className="min-h-screen flex items-center justify-center text-3xl">
//     Welcome to Home Page
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/lookbook" element={<Lookbook />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import React from "react";

// import Navbar from "./components/Navbar";
// import Banner from "./Pages/Banner.jsx";
// import About from "./components/About.jsx";
// import Separate from "./components/Separte.jsx";
// import LookBookM from "./components/LookBookMen.jsx";
// import Galary from "./Pages/Galary.jsx";
// import HistoryBeyond from "./Pages/HistoryBeyond.jsx";
// import Product from "./components/Product.jsx";
// import Parse from "./Pages/Parses.jsx";
// import FootWear from "./components/Footwear.jsx";
// import Clothing from "./components/Clothing.jsx";
// import Services from "./Pages/Services/Services.jsx";
// import Brands from "./components/Brands.jsx";
// import Contact from "./components/Contact.jsx";
// import Footer from "./components/Footer.jsx";

// function App() {
//   return (
//     <div className="bg-white text-black font-sans">
//       <Navbar />
//       <Banner />
//       <About />
//       <Separate />
//       <LookBookM />
//       <Galary />
//       <HistoryBeyond />
//       <Product />
//       <Parse />
//       <FootWear />
//       <Clothing />
//       <Services />
//       <Brands />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;




// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./Pages/Banner";
import About from "./components/About";
import Separate from "./components/Separte";
import LookBookM from "./components/LookBookMen";
import Galary from "./Pages/Galary";
import HistoryBeyond from "./Pages/HistoryBeyond";
import Product from "./components/Product";
import Parse from "./Pages/Parses";
import FootWear from "./components/Footwear";
import Clothing from "./components/Clothing";
// import Services from "./Pages/Services/Services";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Suplimentory from "./Pages/Services/Suplimentory.jsx";
import Personalization from "./Pages/Services/Personalization.jsx";
import Sustainability from "./Pages/Services/Sustainbility.jsx";
import ClothingF from "./Pages/Collections/ClothingF.jsx";
import Testimonials from "./components/Testimonials.jsx";
import NewCollection  from "./components/NewClothing.jsx";
import FootwareF from "./Pages/Collections/FootwareF.jsx";
import Accessory from "./Pages/Collections/Assessories.jsx";
import FootwareM from "./Pages/Collections/FootwareM.jsx";
import Bags from "./Pages/Collections/Bags.jsx";


function App() {
  return (
    <Router>
      <div className="bg-white text-black font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <About />
              <Separate />
              {/* <LookBookM /> */}
              {/* <Galary /> */}
              {/* <HistoryBeyond /> */}
              {/* // <Product />
              // <Parse /> */}
              {/* <FootWear /> */}
              {/* // <Clothing /> */}
              {/* <Services /> */}
              <Testimonials/>
              {/* <NewCollection/> */}
              {/* <Accessory/> */}
              <Brands /> 
              <Contact />
              {/* <FootwareM/> */}
              {/* <Bags/>
              */}
            
            </>
          } />
          <Route path="/lookbook" element={<LookBookM />} />
          <Route path="/Product" element={<Product/>}/>
           <Route path="Collections/ClothingF" element={<ClothingF/>} />
            <Route path="Collections/FootwareF" element={<FootwareF/>} />
             <Route path="Collections/FootwareM" element={<FootwareM/>} />
            <Route path="Collections/Assessories" element={<Accessory/>} />
               <Route path="Collections/Bags" element={<Bags/>} />
            <Route path="/Services/HistoryBeyond" element={<HistoryBeyond/>} />
          {/* You can define more routes as needed */}
          <Route path="/About" element={<About/>} />
           <Route path="/Contact" element={<Contact/>} />
            <Route path="/Galary" element={<Galary/>} />
             <Route path="/Services/Personalization" element={<Personalization/>} />
              <Route path="Services/Suplimentory" element={<Suplimentory/>} />
              <Route path="Services/Sustainbility" element={<Sustainability/>} />
            <Route path="Services/Sustainbility" element={<Sustainability/>} />
             

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
