import React, {useState, useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import {CheckCircleIcon} from "@heroicons/react/solid";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AthleteInformation = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to contacts details
    navigate("/registration/contacts");
  };

  // const navigateToAcademics = () => {
  //   // 👇️ navigate to /
  //   navigate("/registration/academicInfo");
  // };

  const [events, setEvents] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("events", events);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/profiles/athleteinformation/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("The event you participate in has been captured!");
      navigate("/registration/academicInfo");
    } catch (error) {
      console.error(error);
      alert(
        "Failed to save the event you participate in, make sure to full all fields correctly."
      );
    }
  };
  return (
    <div className="container-sm mb-4 overflow-hidden">
      {/* <Outlet></Outlet> */}
      <p className="text-green-600 text-center mt-10 mb-6  md:text-5xl  text:sm sm:text-base">
        LETS GET TO KNOW YOU
      </p>
      <div className="flex flex-wrap -mx-4">
        <div className=" ml-auto bg-[#F9FBFC] m-2 p-4 rounded-md">
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
              <p className="font-semibold">Athletic Information</p>
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
        <div className=" mr-auto ml-10">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <p className="font-semibold text-2xl p-4 ml-4">
              Athlete Information
            </p>
            <div className="mb-4">
              <label htmlFor="events" className="block font-medium mb-2">
                Events
              </label>
              <input
                type="text"
                id="events"
                name="events"
                value={events}
                onChange={(event) => setEvents(event.target.value)}
                required
                placeholder="The events you participate in"
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="flex justify-between mt-40">
              <div class="self-start">
                {/* <Link to="/contacts"> */}
                <button
                  onClick={navigateToContacts}
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
                {/* <Link to="/academicInfo"> */}
                <button
                  // onClick={navigateToAcademics}
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
            </div>
          </form>
          {/*      
      <div className="flex justify-center space-x-2 mt-6">
        <Link to="feeds">
          <button className="w-3 h-3 rounded-full bg-gray-400 focus:outline-none"></button>
        </Link>
        <Link to="journals">
          <button className="w-3 h-3 rounded-full bg-gray-400 focus:outline-none"></button>
        </Link>
        <Link to="academics">
          <button className="w-3 h-3 rounded-full bg-gray-400 focus:outline-none"></button>
        </Link>
        <Link to="archievements">
          <button className="w-3 h-3 rounded-full bg-gray-400 focus:outline-none"></button>
        </Link>
      </div> */}
        </div>
      </div>
      {/* 
      <nav className="flex flex-wrap items-center justify-between p-5 bg-gray-800">
   <div className="list-wrapper">
      
</div>
     <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
       <div className="text-md lg:flex-grow ">
        
        
         <Link to='feeds' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">Feeds</Link>
         <Link to='journals' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">Journals</Link>
         <Link to='academics' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">Academics</Link>
         <Link to='achievements' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">Achievements</Link>
      
   
       </div>
     </div>

   </nav>
   <Outlet></Outlet>
 */}
    </div>
  );
};

export default AthleteInformation;
