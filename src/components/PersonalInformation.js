import React, {useState, useRef, useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import {CheckCircleIcon} from "@heroicons/react/solid";
import {useNavigate} from "react-router-dom";

const PersonalInformation = () => {
  const navigate = useNavigate();

  // const sliderRef = useRef(null);

  // const navigateToContacts = () => {
  //   // 👇️ navigate to contacts details
  //   sliderRef.current.slickNext();

  // };

  // const navigateContactDetails = () => {
  //   // 👇️ navigate to /
  //   navigate("contacts");
  // };

  const handleNextPage = () => {
    navigate("/registration/contacts");
  };
  return (
    <div className=" mb-4 overflow-hidden ">
      {/* <Outlet></Outlet> */}
      <p className="text-green-600  md:text-5xl text-center mt-10 mb-6 text:sm sm:text-base">
        LETS GET TO KNOW YOU
      </p>
      {/* <p className='text-green-600 text-3xl text-center mt-6 mb-3 sm:mt-10 sm:mb-6 sm:text-base'>LETS GET TO KNOW YOU</p> */}
      <div className="flex flex-wrap -mx-4 ">
        <div className="ml-auto bg-[#F9FBFC] m-2 p-4 rounded-md">
          <div className="flex flex-wrap p-2 ">
            <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#016400"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="w-2/3 mr-auto">
              <p className="font-semibold ">Personal Information</p>
            </div>
            <p className="p-2">
              Please provide name, home country and date of birth
            </p>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0FFF00"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="w-2/3 mr-auto">
              <p className="font-semibold text-gray-300">Contact Details</p>
            </div>
            <p className="p-2 text-gray-300">
              Please provide name, home country and date of birth
            </p>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0FFF00"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="w-2/3 mr-auto">
              <p className="font-semibold text-gray-300">
                Athletic Information
              </p>
            </div>
            <p className="p-2 text-gray-300">
              Please provide name, home country and date of birth
            </p>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0FFF00"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="w-2/3 mr-auto">
              <p className="font-semibold text-gray-300">
                Academic Information
              </p>
            </div>
            <p className="p-2 text-gray-300">
              Please provide name, home country and date of birth
            </p>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0FFF00"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="w-2/3 mr-auto">
              <p className="font-semibold text-gray-300">
                Establishing Contact
              </p>
            </div>
            <p className="p-2 text-gray-300">
              Please provide name, home country and date of birth
            </p>
          </div>
          <button className="bg-[#F4F4F4] ml-8 text-green-500 font-semibold pr-10 pl-10 p-3 justify-center">
            Already have an account?
          </button>
        </div>
        <div className="mr-auto ml-10">
          <form className="max-w-md mx-auto">
            <p className="font-semibold text-2xl p-4 ml-4">
              Personal Information
            </p>
            <div className="mb-4">
              <label htmlFor="firstname" className="block font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                // required
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="block font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                // required
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="country"
              >
                Home Country
              </label>
              <div className="relative">
                <select
                  className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                  id="home"
                >
                  <option disabled selected>
                    Home
                  </option>
                  <option>Kenya</option>
                  <option>USA</option>
                  <option>Japan</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="city">
                City
              </label>
              <div className="relative">
                <select
                  className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                  id="city"
                >
                  <option disabled selected>
                    City
                  </option>
                  <option>Bomet</option>
                  <option>Eldoret</option>
                  <option>Nairobi</option>
                </select>
              </div>
            </div>
            <div class="flex justify-end mt-6">
              {/* <Link to="contacts"> */}
              <button
                onClick={handleNextPage}
                className="flex items-center gap-1 bg-green-500 hover:bg-green-600 hover:text-white text-white font-medium py-2 px-4 rounded-md"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
