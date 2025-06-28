// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CustomerCommunications from '../components/compone';
// import Blog from '../Home/blog';
// import BlogSection from '../Home/blogsection';
import Footer from '../Home/footer';
import Header from '../Home/header';
// import HeroSection from '../Home/hero';
import HelpSection from '../Home/hero2';
import hero from '../assets/hero.jpg';
import Promotions from '../components/promotions';
import RatesSection from '../components/ratesection';

// import logo from '../assets/logo.png';
// import bgImage from '../assets/homeBG.jpg'; 
const Home: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  // const handleGetStarted = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigate('/login');
  //   }, 3000);
  // };

  return (
    <>

    <Header/>
    {/* <HeroSection/> */}
    {/* <Hero/> */}
    
   
    <HelpSection/>
    
    <div className="w-full flex justify-center">
  <img src={hero} alt="Hero" className="max-w-full h-auto" />
</div>

    <Promotions/>
    <RatesSection/>
    <Footer/>
    
    </>
    // <div
    //   className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden"
    //   style={{
    //     backgroundImage: `url(${bgImage})`, // Background image applied here
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    // >
    //   {/* Dark Overlay */}
    //   <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

    //   {/* Main Content */}
    //   <div className="relative z-10 flex flex-col items-center justify-center">
    //     {/* Mobile Illustration (Logo) */}
    //     <div className="mb-10">
    //       <img
    //         src={logo}
    //         alt="Mobile Illustration"
    //         className="w-[250px]"
    //       />
    //     </div>

    //     {/* Loading Screen */}
    //     {isLoading && (
    //       <div className="absolute inset-0 flex justify-center items-center bg-opacity-70 bg-black">
    //         <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
    //       </div>
    //     )}

    //     {/* Welcome Content */}
    //     {!isLoading && (
    //       <div className="flex flex-col items-start p-8 animate__animated animate__fadeInLeft">
    //         <h1 className="text-3xl font-semibold mb-2 animate__animated animate__fadeInLeft animate__delay-1s">
    //           Welcome to Apex Bank App!
    //         </h1>
    //         <p className="text-gray-300 mb-6 animate__animated animate__fadeInLeft animate__delay-2s">
    //           A leading financial institution offering a wide range of banking services.
    //         </p>

    //         {/* Slider Placeholder */}
    //         <div className="flex gap-2 mb-6">
    //           <div className="w-5 h-1 bg-white"></div>
    //           <div className="w-5 h-1 bg-white opacity-50"></div>
    //           <div className="w-5 h-1 bg-white opacity-50"></div>
    //         </div>

    //         {/* Get Started Button */}
    //         <button
    //           onClick={handleGetStarted}
    //           className="bg-orange-500 text-[#0a043c] font-semibold px-9 py-3 rounded-lg shadow-md hover:bg-[#f89c88] transition animate__animated animate__fadeInLeft animate__delay-3s"
    //         >
    //           Get Started
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Home;
