import React, {useState, useRef, useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import {CheckCircleIcon} from "@heroicons/react/solid";
import {useNavigate} from "react-router-dom";

const EstablishContact = () => {
  const navigate = useNavigate();

  const navigateToAcademics = () => {
    // 👇️ navigate to contacts details
    navigate("/registration/academicInfo");
  };

  const handleSubmit = () => {};
  return (
    <div className="container-sm mb-4 overflow-hidden">
      {/* <Outlet></Outlet> */}
      <p
        className="text-green-600
       text-center mt-10 mb-6 md:text-5xl text:sm sm:text-base"
      >
        LETS GET TO KNOW YOU
      </p>
      <div className="flex flex-wrap -mx-4">
        <div className="w-1/3 ml-auto bg-[#F9FBFC] m-2 p-4 rounded-md">
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

            <div className="w-1/3 mr-auto">
              <p className="font-semibold text-gray-300">
                Personal Information
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

            <div className="w-1/3 mr-auto">
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

            <div className="w-1/3 mr-auto">
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

            <div className="w-1/3 mr-auto">
              <p className="font-semibold">Establishing Contact</p>
            </div>
            <p className="p-2">
              Please provide name, home country and date of birth
            </p>
          </div>
          <button className="bg-[#F4F4F4] ml-8 text-green-500 font-semibold pr-10 pl-10 p-3 justify-center">
            Already have an account?
          </button>
        </div>
        <div className="w-1/3 mr-auto">
          <form className="max-w-md mx-auto">
            <p className="font-semibold text-2xl p-4 ml-4">
              Establishing Contact
            </p>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="contact"
              >
                How do you prefer to receive your consultation?
              </label>
              <div className="relative">
                <select
                  className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                  id="home"
                >
                  <option disabled selected>
                    Please Select
                  </option>
                  <option>Email</option>
                  <option>Phone call</option>
                  <option>In person</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                How do you prefer to receive your AwesomeName?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                // required
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="language"
              >
                In which language do you want us to contact you with
              </label>
              <div className="relative">
                <select
                  className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                  id="city"
                >
                  <option disabled selected>
                    Please Select
                  </option>
                  <option>English</option>
                  <option>Kiswahili</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-40">
              <div class="self-start">
                {/* <Link to="/athletesInfo"> */}
                <button
                  onClick={navigateToAcademics}
                  className="flex items-center gap-1 bg-white hover:bg-white hover:text-green-600 text-green-500 font-medium py-2 px-4 rounded-md"
                >
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
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back
                </button>
                {/* </Link> */}
              </div>
              <div class="self-end">
                {/* <Link to="/establishingContact"> */}
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-1 bg-green-500 hover:bg-green-600 hover:text-white text-white font-medium py-2 px-4 rounded-md"
                >
                  Submit
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EstablishContact;
