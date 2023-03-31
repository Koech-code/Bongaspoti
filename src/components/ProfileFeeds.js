import React, {useState} from 'react'
import axios from 'axios'
import apple from '../images/apple.jpg'
import myIcon from '../images/myIcon.png'
import { ArrowRightIcon } from '@heroicons/react/solid';

const ProfileFeeds = () => {
  // const Card = ({ children }) => (
  //   <div className="bg-white rounded-lg shadow-md p-4">{children}</div>
  // );
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
    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
        First Name
        </label>
        <input
          className="focus:border-blue-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Jane Doe"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="lname">
        Last Name
        </label>
        <input
          className="focus:border-blue-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lname"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <label>
        Home Country
      </label>
      <div class="relative">
        <select placeholder='Where do you live' className="focus:border-blue-600 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option></option>
          <option>Kenya</option>
          <option>USA</option>
          <option>Ghana</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.706 7.706a1 1 0 00-1.414-1.414l-2.829 2.829L9.293 6.293a1 1 0 00-1.414 1.414l2.828 2.828a1 1 0 001.414 0l2.828-2.828z"/></svg>
        </div>
      </div>
      <label>
        Home Country
      </label>
      <div className="relative">
        <select placeholder='Choose your city' className=" focus:border-blue-600 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option></option>
          <option>Bomet</option>
          <option>Eldoret</option>
          <option>Nairobi</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.706 7.706a1 1 0 00-1.414-1.414l-2.829 2.829L9.293 6.293a1 1 0 00-1.414 1.414l2.828 2.828a1 1 0 001.414 0l2.828-2.828z"/></svg>
        </div>
      </div>
      
      <div className="mt-2 h-5 ml-64">
        <button className='bg-[#5F9EA0] w-30 flex justify-items-end'>
          <p className='text-1xl'>Next</p>
          <div>
            <ArrowRightIcon className="w-5 h-5 ml-1" />
          </div>
        </button>
        
      </div>

    </form>
  </div>
    {/* </div> */}
  </div>
    )
}

export default ProfileFeeds;