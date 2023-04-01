import React from 'react'
import backgroundImage from '../images/home.png'
import footerBackgroundImage from '../images/Footer-bg.png'
import apple from '../images/apple.jpg'
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  const navigateRegistrationPage = () => {
    // 👇️ navigate to /profiles
    navigate('/registration');
  };

  return (  
  <div className=" my-0 ">
      <div className="relative h-64">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill md:object-fill"
        src={backgroundImage}
        alt="background"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-16 mb-8 md:mb-12">PERFORMANCE AT ELITE LEVEL</h1>

        <button onClick={navigateRegistrationPage} className="px-8 py-4 bg-[#2BAE76]  text-white font-bold rounded hover:bg-green-500 hover:text-white">GET STARTED</button>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 m-8">
      <h2 className="text-lg font-bold mb-2 text-center text-blue-600">SPORTS SCHOLARSHIPS</h2>
      <p className="text-gray-600 p-8">Take your athletic and academic career to the next level 
      We help athletes on their journey in getting a sports scholarships to study in the USA 
      and advance their sports careers.</p>
      </div>

      <div className="flex flex-wrap justify-center">
  <div className="bg-white rounded-lg shadow-md p-4 lg:w-1/3">
    <h2 className="text-lg font-bold mb-2 text-center text-blue-600">1. Assessment</h2>
    <p className="text-gray-600 p-4 lg:p-8">Our team consist of athletes and former athletes who evaluate
      your submitted registration requirements and if successful move you to the next step.</p>
  </div>
  <div className="bg-white rounded-lg shadow-md p-4 lg:w-1/3">
    <h2 className="text-lg font-bold mb-2 text-center text-blue-600">2. Preparation</h2>
    <p className="text-gray-600 p-4 lg:p-8">We then pair and prepare you for your prospective 
      college by helping you gather requirements and other relevant material for a successful admission.
    </p>
  </div>
  <div className="bg-white rounded-lg shadow-md p-4 lg:w-1/3">
    <h2 className="text-lg font-bold mb-2 text-center text-blue-600">3. Acceptance</h2>
    <p className="text-gray-600 p-4 lg:p-8">Success! You begin a new and fulfilling journey in your academic
      and athletic career in a top US college.</p>
  </div>
</div>

    <div className="relative h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill md:object-fill"
        src={footerBackgroundImage}
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-16 mb-8 md:mb-12">TRY THE FREE ASSESSMENT</h1>
        <button onClick={navigateRegistrationPage} className="px-8 py-4 bg-[#2BAE76]  text-white font-bold rounded hover:bg-green-500 hover:text-white">NOW!</button>
      </div>
      </div>
    <Footer/>
  </div>


  )
}

export default Home