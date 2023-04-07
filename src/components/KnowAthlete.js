import React from "react";
import athlete from "../images/Frame 13.png";
import knowathletefooter from "../images/knowAthleteFooter.png";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";

const KnowAthlete = () => {
  const navigate = useNavigate();

  const navigateRegistrationPage = () => {
    // 👇️ navigate to /profiles
    navigate("/registration");
  };
  return (
    <div className="sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full sm:text-center ">
      <p className="bg-[#22354D] md:px-8 lg:px-24 sm:text-1xl text-white md:text-4xl font-bold text-center md:mt-2 mb-8 md:mb-12 p-24">
        Get to know our athletes
      </p>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden md:max-w-2xl sm:max-w-2xl sm:text-center">
        <div className="md:flex">
          <div className="p-8">
            <h1 className="block mt-1 leading-tight font-medium md:text-2xl sm:text-2xl text-center md:text-center sm:tetx-center text-black">
              Select an athlete
            </h1>
            <p className="mt-2 text-gray-500 text-center md:text-center sm:text-center">
              Awesome Name provides its services to athletes of track and field
              events. To find out about our available athletes please select the
              event you are interested in below.
            </p>
          </div>
        </div>
      </div>
      <div class="sm:h-full sm:w-full flex flex-wrap items-center justify-center mt-6 md:mt-6 sm:mt-6 lg:mt-6">
        <div class="relative">
          <select class="block appearance-none bg-gray-50 border border-gray-400 hover:border-purple-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option disabled selected>
              Please Select
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Choose not to say</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 14l-5-5h10l-5 5z" />
            </svg>
          </div>
        </div>

        <div class="relative ml-6">
          <select class="block appearance-none bg-gray-50 border border-gray-400 hover:border-purple-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option disabled selected>
              Please Select
            </option>
            <option>Track and Field</option>
            <option>Swimming</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 14l-5-5h10l-5 5z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center items-center ml-6 sm:mt-2 md:mt-2 mt-1">
          <button className="flex items-center gap-1 bg-green-500 hover:bg-green-600 hover:text-white text-white font-medium py-2 px-4 rounded-md">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class=" flex flex-wrap justify-evenly items-center  mt-4">
        <div className="text-start w-1/3 self-start">
          <p className="text-2xl bold">Why choose our athletes</p>
          <p>
            Awesome Name is composed of high-level athletes who are working to
            further promote the college sports of by bringing competitive depth
            to the U.S. In any aspect from TOEFL to the VISA we assist you to
            secure a smooth recruiting process. Concretely we make sure that
            athletes are 100% committed to an engagement in the U.S. so that
            they will response quickly to your questions and will certainly come
            to your university, if you provide a matching offer. The preparation
            of our athletes for the TOEFL and SAT Test combined with our support
            for NCAA clearance and the application process for your university
            makes your job a lot easier and more enjoyable. Our athletic
            profiles provide you at first glance with the most important
            athletic and academic information. Additionally our profiles include
            authentic weblinks to verify the athlete`s achievements.
          </p>
        </div>
        <div>
          <img
            className="w-60 self-end "
            src={athlete}
            alt="Your image alt text"
          />
        </div>
      </div>
      <div className="relative h-64 mt-10 sm:object-fill">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill md:object-fill"
          src={knowathletefooter}
          alt="background"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className=" sm:text-2xl lg:text-4xl md:text-5xl font-bold text-white text-center mt-8 sm:mt-4 md:mt-16 mb-8 md:mb-12">
            TRY THE FREE ASSESSMENT
          </h1>
          <button className="px-8 py-4 bg-[#2BAE76]  text-white font-bold rounded hover:bg-green-500 hover:text-white">
            NOW!
          </button>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KnowAthlete;
