import React, {useState} from 'react'
import axios from 'axios'
import apple from '../images/apple.jpg'
import myIcon from '../images/myIcon.png'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';

const Journals = () => {
  function BackButton({ onClick }) {
    return (
      <button
        className="flex items-center space-x-2 hover:text-gray-700 bg-[#5F9EA0] text-white mt-40"
        onClick={onClick}
      >
        <ArrowLeftIcon className="w-5 h-5" />
        <span>Back</span>
      </button>
    );
  }
  
  function NextButton({ onClick }) {
    return (
      <button
        className="flex items-center space-x-2 bg-[#5F9EA0] text-white hover:text-gray-700 mt-40"
        onClick={onClick}
      >
        <span>Next</span>
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    );
  }
  // const Card = ({ children }) => (
  //   <div className="bg-white rounded-lg shadow-md p-4">{children}</div>
  // );
  function handleBackClick() {
    window.history.back();
  }

  function handleNextClick() {
    window.location.href = "https://www.example.com/next-page";
  }

  return (
    <div className="flex justify-center items-center h-screen">
    {/* <div className=""> */}
    <div className="bg-[#F9FBFC] m-16 p-6 w-96">
    <h2 className="text-xl font-semibold mb-4">Form 1</h2>
    <form >
    <div className="flex items-center">
      <div className="w-6 h-6">
        <img src={myIcon} alt="My Icon" className="w-full h-full object-cover" />
      </div>      
    <p className="text-sm font-medium text-gray-700">Personal Information</p>
    </div>
    <p>Please provide name, home country and date of birth</p>
    <div className="flex items-center">
        <div className="w-6 h-6">
          <img src={myIcon} alt="My Icon" className="w-full h-full object-cover" />
        </div> 
      <p className="text-sm font-medium text-gray-700">Contact Details</p>
    </div>
    <p>Provide your email address and phone number</p>
    <div className="flex items-center">
      <div className="w-6 h-6">
        <img src={myIcon} alt="My Icon" className="w-full h-full object-cover" />
      </div> 
      <p className="text-sm font-medium text-gray-700">Athletic information</p>
    </div>
    <p>Please provide name, home country and date of birth</p>
    <div className="flex items-center">
      <div className="w-6 h-6">
        <img src={myIcon} alt="My Icon" className="w-full h-full object-cover" />
      </div> 
      <p className="text-sm font-medium text-gray-700">Academic Information</p>
    </div>
    <p>Please provide name, home country and date of birth</p>
    <div className="flex items-center">
      <div className="w-6 h-6">
        <img src={myIcon} alt="My Icon" className="w-full h-full object-cover" />
      </div> 
      <p className="text-sm font-medium text-gray-700">Establishing contact </p>
    </div>
    <p>Please provide name, home country and date of birth</p>
      <button className="bg-[#F4F4F4] hover:bg-[#F4F4F4] text-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Already have an account?
      </button>
    </form>
  </div>
    <div className='ml-16 p-6 w-96'>
    <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Email Address        
        </label>
        <input
          className="focus:border-blue-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="nick@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="lname">
        Phone Number
        </label>
        <input
          className="focus:border-blue-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lname"
          type="text"
          placeholder="Last Name"
        />
      </div>
      
      <div className="flex justify-between">
        <BackButton onClick={handleBackClick}/>
        <NextButton onClick={handleNextClick} />
      </div>

    </form>
  </div>
    {/* </div> */}
  </div>
    )
}

export default Journals;